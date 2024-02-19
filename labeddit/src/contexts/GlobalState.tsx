import { useState, ReactNode, createContext } from "react";
import axios from "axios";
import  BASE_URL  from "../constants/BASE_URL";
import { TGlobalContextType } from "../types/globalcontext";
import { goToCommentPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const GlobalState = createContext<TGlobalContextType | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [postContent, setPostContent] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
 
  const getPosts = async () => {
    const token = localStorage.getItem("token-labeddit");
    const headers = {
      Authorization: `${token}`
    };
  
    try {
      const response = await axios.get(`${BASE_URL}/posts`, { headers });
      setPosts(response.data);
    } catch (error) {
    }
  };

  const getComments = async (post_id: string) => {
    const token = localStorage.getItem("token-labeddit");
    const headers = {
      Authorization: `${token}`
    };
    await axios
      .get(`${BASE_URL}/posts/${post_id}/comments`, { headers })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
      });
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
    const body = {
      content: form.textarea,
    };
    const token = localStorage.getItem("token-labeddit");
    const headers = { Authorization: `${token}` };
  
    try {
      const response = await axios.post(url, body, { headers });
      setComments(response.data);
      console.log(response.data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      } else {
        console.log(error);
      }
    }
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

  const handlePostSubmit = async (event: any) => {
    event.preventDefault();
    if (postContent.trim() !== '') {
      if (postContent.length <= 300) {
        const formData = {
          textarea: postContent
        };
        await newPost(JSON.stringify(formData)); 
        setPostContent('');
        setErrorMessage('');
      } else {
        setErrorMessage('O texto não pode ter mais de 300 caracteres.');
      }
    } else {
      setErrorMessage('Por favor, escreva alguma mensagem!');
    }
  };
  
  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>, post_id: string) => {
    event.preventDefault();
    if (commentContent.trim() !== '') {
      if (commentContent.length <= 300) {
        const formData = { textarea: commentContent };
        newComment(formData, post_id);        
        setCommentContent('');
        setErrorMessage('');
      } else {
        setErrorMessage('O texto não pode ter mais de 280 caracteres.');
      }
    } else {
      setErrorMessage('Por favor, escreva algum comentário!');
    }
  };
  
  const handleclick = (id: string) => {
    goToCommentPage(navigate, id);
  };


  const data: TGlobalContextType = {
    getPosts,
    getComments,
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
    setErrorMessage,
    handleclick,
    commentContent, 
    setCommentContent,
    handleCommentSubmit,
  };

  return (
    <GlobalState.Provider value={data}>
      {children}
    </GlobalState.Provider>
  );
};
