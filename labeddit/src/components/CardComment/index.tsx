import { useContext, useEffect } from "react";
import  Loading  from '../../assets/loading-gif.gif';
import { GlobalState } from "../../contexts/GlobalState";
import { LoadingGif } from "../../pages/LoginPage/styled";
import { CardPostProps } from "../../types/globalcontext";
import {
  CommentButton,
  CommentContent,
  CommentedBy,
  CommentNumber,
  CommentStyled,
  Container,
  ContainerButtons,
  ContainerButtonsLike,
  ContainerComment,
  DislikeButton,
  DislikeStyled,
  LikeButton,
  LikeStyled,
  Username,
} from "./styled";

const CardPost: React.FC<CardPostProps> = ({ post_id }) => {
  const { comments, getComments, likeComment, dislikeComment } = useContext(GlobalState);
  
  useEffect(() => {
    getComments(post_id);
  }, [getComments, post_id]);

  return (
    <>
      {comments ? (
        <div>
          {comments.map((comment) => (
            <Container key={comment.id}>
              <div>
                <CommentedBy>Enviado por:</CommentedBy>
                <Username>{comment.creator.name}</Username>
              </div>
              <CommentContent>{comment.content}</CommentContent>
              <ContainerButtons>
                <ContainerButtonsLike>
                  <LikeButton onClick={() => likeComment(post_id, comment.id)}>
                    <LikeStyled />
                  </LikeButton>
                  <span>{comment.likes}</span>
                  <DislikeButton onClick={() => dislikeComment(post_id, comment.id)}>
                    <DislikeStyled />
                  </DislikeButton>
                </ContainerButtonsLike>
              </ContainerButtons>
            </Container>
          ))}
        </div>
      ) : (
        <LoadingGif src={Loading} />
      )}
    </>
  );
}  

export default CardPost;
