import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Minilogo from "../../assets/minilogo.png";
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { ButtonEnter, CloseButton, Container } from './styled';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { post_id } = useParams(); 

  const isHomePage = location.pathname === "/feed";
  const isCommentPage = location.pathname === `/posts/${post_id}/comments`; 

  return (
    <Container>
      <div>
        {isCommentPage ? (
          <>
            <CloseButton onClick={() => goToFeedPage(navigate)}/>
            <img src={Minilogo} alt="logotipo pequeno" />
            <ButtonEnter onClick={() => goToLoginPage(navigate)}>Logout</ButtonEnter>
          </>
        ) : (
          <>
            <img src={Minilogo} alt="logotipo pequeno" />
            {isHomePage ? (
              <ButtonEnter onClick={() => goToLoginPage(navigate)}>Logout</ButtonEnter>
            ) : (
              <ButtonEnter onClick={() => goToLoginPage(navigate)}>Entrar</ButtonEnter>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default Header;

