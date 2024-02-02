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