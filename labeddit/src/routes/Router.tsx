import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginFormProvider } from '../contexts/LoginFormContext'
import { SignupFormProvider } from '../contexts/SignupFormContext'
import { GlobalStateProvider } from '../contexts/GlobalState'
import ErroPage from '../pages/ErrorPage'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import CommentPage from '../pages/CommentPage'

const Router = () => {
    return (
        <BrowserRouter>
        <GlobalStateProvider>
            <LoginFormProvider>
            <SignupFormProvider>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/posts/:post_id/comments" element={<CommentPage/>}/>
                <Route path="*" element={<ErroPage/>}/>
            </Routes>
            </SignupFormProvider>
            </LoginFormProvider>
        </GlobalStateProvider>
        </BrowserRouter>
    )
}

export default Router