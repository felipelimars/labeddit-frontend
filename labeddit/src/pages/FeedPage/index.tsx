import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'
import { useProtectPage } from "../../hooks/useProtectPage";
import { ButtonPost, CardContainer, Container, FormContainer, OrangeLine, TextArea} from './styled';
import  OrangeLineBar  from '../../assets/orangeline.png'
import CardPost from '../../components/CardPost';
import { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../contexts/GlobalState';
import { ErrorEmailMessage } from '../LoginPage/styled';

const FeedPage = () => {
  const { getPosts, newPost, postContent, setPostContent, errorMessage, setErrorMessage, handlePostSubmit } = useContext(GlobalState);
  const navigate = useNavigate();
  useProtectPage(navigate);

  useEffect(() => {
    getPosts();
  }, []);

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
        <CardContainer>
        <CardPost/>
        </CardContainer>
        </Container>
    </div>
  )
}

export default FeedPage;
