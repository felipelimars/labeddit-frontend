import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../contexts/GlobalState";
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

const CardPost = () => {
  const { posts, getPosts, likePost, dislikePost } = useContext(GlobalState);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {Array.isArray(posts) && posts.map((post) => (
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
              <CommentButton>
                <CommentStyled />
              </CommentButton>
              <CommentNumber>{post.comments}</CommentNumber>
            </ContainerComment>
          </ContainerButtons>
        </Container>
      ))}
    </>
  );
};

export default CardPost;
