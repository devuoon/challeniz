import React, { useState, useEffect } from 'react';
import * as S from './header.style';
import { ROUTE } from '../../../routes';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../../../assets/image/logo.png';
import SearchPage from '../../search_page/search_page';
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const token = 'token';
  const user = localStorage.getItem(token);

  const isMobileView = window.innerWidth <= 420;

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  const navigate = useNavigate();

  const handleChallengeCreationClick = () => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      if (
        window.confirm(
          '챌린지를 개설하려면 먼저 로그인하세요. 로그인 페이지로 이동하시겠습니까?'
        )
      ) {
        navigate('/login'); // 로그인 페이지로 이동
      }
    } else {
      navigate(ROUTE.NEWPAGE.link); // 챌린지 개설 페이지로 이동
    }
  };

  return (
    <S.HeaderWrapper
      className={scrollPosition < 100 ? 'original_header' : 'change_header'}
    >
      <S.HeaderContainer>
        <S.Logo>
          <Link to={ROUTE.MAIN.link}>
            <S.LogoImg src={LogoImage} alt="Logo" />
          </Link>
        </S.Logo>
        <S.HeaderNav>
          <S.NavList>
            <Link to={ROUTE.LISTPAGE.link}>
              <S.NavItem>
                <Link to={ROUTE.LISTPAGE.link}>챌린지 둘러보기</Link>
              </S.NavItem>
            </Link>
            <S.NavItem onClick={handleChallengeCreationClick}>
              챌린지 개설하기
            </S.NavItem>
          </S.NavList>
        </S.HeaderNav>
        <SearchPage />
        <S.LoginBox>
          <S.LoginList>
            <S.LoginItem>
              {isMobileView ? <S.StyledCiMenu /> : <S.StyledCiUser />}

              {isMobileView ? (
                <S.MobileMenu>
                  {!user ? (
                    <>
                      <Link to={'/login'}>
                        <S.InnerLi>로그인</S.InnerLi>
                      </Link>
                      <Link to={'/joinpage'}>
                        <S.InnerLi>회원가입</S.InnerLi>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={'/mypage'}>
                        <S.InnerLi>마이페이지</S.InnerLi>
                      </Link>
                      <button
                        onClick={() => {
                          localStorage.removeItem('token');
                          window.location.reload();
                        }}
                      >
                        <S.InnerLi>로그아웃</S.InnerLi>
                      </button>
                    </>
                  )}
                </S.MobileMenu>
              ) : (
                <S.SubMenu>
                  {!user ? (
                    <>
                      <Link to={'/login'}>
                        <S.InnerLi>로그인</S.InnerLi>
                      </Link>
                      <Link to={'/joinpage'}>
                        <S.InnerLi>회원가입</S.InnerLi>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={'/mypage'}>
                        <S.InnerLi>마이페이지</S.InnerLi>
                      </Link>
                      <button
                        onClick={() => {
                          localStorage.removeItem('token');
                          window.location.reload();
                        }}
                      >
                        <S.InnerLi>로그아웃</S.InnerLi>
                      </button>
                    </>
                  )}
                </S.SubMenu>
              )}
            </S.LoginItem>
          </S.LoginList>
        </S.LoginBox>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
