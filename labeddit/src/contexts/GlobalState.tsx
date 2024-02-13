import React, { useState, ReactNode, createContext } from "react";
import axios from "axios";
import  BASE_URL  from "../constants/BASE_URL";

interface GlobalContextType {
  getPosts: () => void;
  comments: any[];
  setComments: React.Dispatch<React.SetStateAction<any[]>>;
  posts: any[];
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  likePost: (post_id: string) => Promise<void>;
  dislikePost: (post_id: string) => Promise<void>;
  likeComment: (post_id: string, comment_id: string) => Promise<void>;
  dislikeComment: (post_id: string, comment_id: string) => Promise<void>;
  newPost: (form: string) => void;
  newComment: (form: { textarea: string }, post_id: string) => void;
  handlePostSubmit: (event: any) => void;
  postContent: string;
  setPostContent: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string; 
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}


export const GlobalState = createContext<GlobalContextType | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [postContent, setPostContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getPosts = async () => {
    const token = localStorage.getItem("token-labeddit");
    const headers = {
      Authorization: `${token}`
    };
  
    try {
      const response = await axios.get(`${BASE_URL}/posts`, { headers });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const newPost = async (form: string) => {
    const url = `${BASE_URL}/posts/`;
    const parsedForm = JSON.parse(form);
    const body = {
      content: parsedForm.textarea,
    };
    const token = localStorage.getItem("token-labeddit");
    const headers = {
      Authorization: `${token}`
    };
  
    axios
      .post(url, body, { headers })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  const newComment = async (form: { textarea: string }, post_id: string) => {
    const url = `${BASE_URL}/posts/${post_id}/comments`;
    const body = {content: form.textarea};
    const token = localStorage.getItem("token-labeddit");
    const headers = {Authorization: `${token}`};
  
    axios
      .post(url, body, { headers })
      .then((res) => {
        alert("Novo comentário realizado com sucesso!");
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        alert("Erro inesperado, tente novamente");
      });
  };

  const likePost = async (post_id: string) => {
    const url = `${BASE_URL}/posts/${post_id}/like`;
    const body = {
      like: true
    };
    const token = localStorage.getItem("token-labeddit");
    const headers = {Authorization: `${token}`};
    const response = await axios.put(url, body, {headers});
    console.log(response);
  };

  const dislikePost = async (post_id: string) => {
    const url = `${BASE_URL}/posts/${post_id}/like`;
    const body = {like: false};
    const token = localStorage.getItem("token-labeddit");
    const headers = {Authorization: `${token}`};
    const response = await axios.put(url, body, {headers});
    console.log(response);
  };

  const likeComment = async (post_id: string, comment_id: string) => {
    const url = `${BASE_URL}/posts/${post_id}/comments/${comment_id}/like`;
    const body = {like: true};
    const token = localStorage.getItem("token-labeddit");
    const headers = {Authorization: `${token}`};
    const response = await axios.put(url, body, {headers});
    console.log(response);
  };

  const dislikeComment = async (post_id: string, comment_id: string) => {
    const url = `${BASE_URL}/posts/${post_id}/comments/${comment_id}/like`;
    const body = {like: false};
    const token = localStorage.getItem("token-labeddit");
    const headers = {Authorization: `${token}`};
    const response = await axios.put(url, body, {headers});
    console.log(response);
  };

  const handlePostSubmit = (event: any) => {
    event.preventDefault();
    if (postContent.trim() !== '') {
      if (postContent.length <= 300) {
        const formData = {
          textarea: postContent
        };
        newPost(JSON.stringify(formData));
        setPostContent('');
        setErrorMessage('');
      } else {
        setErrorMessage('O texto não pode ter mais de 300 caracteres.');
      }
    } else {
      setErrorMessage('O TextArea está vazio. Insira algum texto antes de enviar.');
    }
  };


  const data: GlobalContextType = {
    getPosts,
    comments,
    setComments,
    posts,
    setPosts,
    loading,
    setLoading,
    likePost,
    dislikePost,
    likeComment,
    dislikeComment,
    newPost,
    newComment,
    handlePostSubmit,
    postContent,
    setPostContent,
    errorMessage,
    setErrorMessage
  };

  return (
    <GlobalState.Provider value={data}>
      {children}
    </GlobalState.Provider>
  );
};
