export interface TGlobalContextType {
  getPosts: () => void;
  getComments: (post_id: string) => Promise<void>;
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
  handleclick: (id: string) => void;
  handleCommentSubmit: (event: React.FormEvent<HTMLFormElement>, post_id: string) => void;
  commentContent: string;
  setCommentContent: React.Dispatch<React.SetStateAction<string>>; 
}


export interface CardPostProps {
  post_id: string;
}