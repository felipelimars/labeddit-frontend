import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import LineOrange from '../../assets/orangeline.png';
import { CardContainer, Container, ErrorCommentMessage, FormContainer, OrangeLine } from './styled';
import CardPost from '../../components/CardPost';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useContext } from 'react';
import { GlobalState } from '../../contexts/GlobalState';
import { ButtonPost, TextArea } from '../FeedPage/styled';
import CardComment from '../../components/CardComment';

const CommentPage = () => {
  const { handleCommentSubmit, commentContent, setCommentContent, errorMessage } = useContext(GlobalState);
  const { post_id } = useParams();
  const navigate = useNavigate();
  useProtectPage(navigate);
  
  return (
    <>
      <Header/>
      <Container>
        <CardContainer>
          <CardPost post_id={post_id} />
        </CardContainer>
        <FormContainer onSubmit={(event) => handleCommentSubmit(event, post_id)}>
          <TextArea
            placeholder="Adicionar comentário"
            value={commentContent}
            onChange={(event: any) => setCommentContent(event.target.value)} 
          />
          <ButtonPost type="submit">Responder</ButtonPost>
          {errorMessage && <ErrorCommentMessage>{errorMessage}</ErrorCommentMessage>}
        </FormContainer>
        <OrangeLine src={LineOrange}/>
          <CardComment post_id={post_id} />
      </Container>
    </>
  );
};

export default CommentPage;
