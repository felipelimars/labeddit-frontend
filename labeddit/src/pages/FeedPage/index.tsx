import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'
import { useProtectPage } from "../../hooks/useProtectPage";
import { ButtonPost, CardContainer, Container, FormContainer, OrangeLine, TextArea} from './styled';
import  OrangeLineBar  from '../../assets/orangeline.png'
import CardPost from '../../components/CardPost';
import { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../contexts/GlobalState';
import { ErrorEmailMessage, LoadingGif } from '../LoginPage/styled';
import  Loading  from '../../assets/loading-gif.gif';

const FeedPage = () => {
  const { posts, getPosts, postContent, setPostContent, errorMessage, handlePostSubmit } = useContext(GlobalState);
  const navigate = useNavigate();
  useProtectPage(navigate);

  useEffect(() => {
    getPosts();
  }, [posts]); 
  
  return (
    <div>
        <Header/>
        <Container>
          <FormContainer onSubmit={handlePostSubmit}>
            <TextArea
              placeholder="Escreva seu post..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <ButtonPost type="submit">Postar</ButtonPost>
            {errorMessage && <ErrorEmailMessage>{errorMessage}</ErrorEmailMessage>}
          </FormContainer>
        <OrangeLine src={OrangeLineBar}/>
        {posts ? (
        <CardContainer>
          {posts.map(post => (
            <CardPost key={post.id} post_id={post.id} />
          ))}
        </CardContainer>
      ) : (
        <LoadingGif src={Loading} /> 
      )}
        </Container>
    </div>
  )
}

export default FeedPage;
