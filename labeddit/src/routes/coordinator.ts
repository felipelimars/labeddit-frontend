import { NavigateFunction } from 'react-router-dom'; 

export const goToLoginPage = (navigate: NavigateFunction) => {
    navigate('/')
}
export const goToSignupPage = (navigate: NavigateFunction) => {
    navigate('/signup')
}
export const goToFeedPage = (navigate: NavigateFunction) => {
    navigate('/feed')
}
export const goToCommentPage = (navigate: NavigateFunction, id: string) => {
    const post_id = id
    navigate(`/posts/${post_id}/comments`)
}
