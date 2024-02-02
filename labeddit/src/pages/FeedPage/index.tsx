import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'
import { useProtectPage } from "../../hooks/useProtectPage";

const FeedPage = () => {
  const navigate = useNavigate();
  useProtectPage(navigate);

  return (
    <div>
        <Header/>
        <h1>EU SOU A HOME PAGE</h1>
    </div>
  )
}

export default FeedPage
