import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../contexts/GlobalState";
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
  const { handleclick, posts, likePost, dislikePost } = useContext(GlobalState);

  const post = Array.isArray(posts) ? posts.find(post => post.id === post_id) : null;

  return (
    <>
      {post && (
        <Container key={post.id}>
          <div>
            <CommentedBy>Enviado por:</CommentedBy>
            <Username>{post.creator_name}</Username>
          </div>
          <CommentContent>{post.content}</CommentContent>
          <ContainerButtons>
            <ContainerButtonsLike>
              <LikeButton onClick={() => likePost(post.id)}>
                <LikeStyled />
              </LikeButton>
              <span>{post.likes}</span>
              <DislikeButton onClick={() => dislikePost(post.id)}>
                <DislikeStyled />
              </DislikeButton>
            </ContainerButtonsLike>
            <ContainerComment>
              <CommentButton onClick={() => handleclick(post.id)}>
                <CommentStyled />
              </CommentButton>
              <CommentNumber>{post.comments}</CommentNumber>
            </ContainerComment>
          </ContainerButtons>
        </Container>
      )}
    </>
  );
};

export default CardPost;
