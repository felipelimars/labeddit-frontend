import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginFormProvider } from '../contexts/LoginFormContext'
import { SignupFormProvider } from '../contexts/SignupFormContext'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

const Router = () => {
    return (
        <BrowserRouter>
            <LoginFormProvider>
            <SignupFormProvider>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
            </Routes>
            </SignupFormProvider>
            </LoginFormProvider>
        </BrowserRouter>
    )
}

export default Router