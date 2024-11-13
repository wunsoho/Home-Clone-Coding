import React, { useState, useEffect, useContext } from 'react';
import { NavState } from './NavState';
import { NavContext  } from './NavProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { Title, MenuBotton, SearchInput, 
    MenuContainer, LoginContainer, LoginButton, WriteButton } from './styles/TopNavigation.styled';
import Cart from '../img/Shopping Cart.png';
import Logo from '../img/Logo.png';
import Down from '../img/Down.png';
import { pathToNavMap } from '../config';

function TopNavigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setNav, currentNav } = useContext(NavContext);
    const [btnActive, setBtnActive] = useState<NavState>(currentNav);

    useEffect(() => {
        const navState = pathToNavMap[location.pathname] || NavState.COMMUNITY;
        setBtnActive(navState as NavState);
        setNav(navState as NavState);
    }, [location, setNav]);

    const toggleActive = (name: NavState) => {
        setBtnActive(name);
        setNav(name);
        navigate(pathToNavMap[name]);
    }

    const handleMouseEnter = (name: NavState) => {
        setNav(name);
    }

    const handleMouseLeave = () => {
        setNav(btnActive); 
    }

    const CommuSubMenu = [
        NavState.COMMUNITY,
        NavState.RECOMMAND,
        NavState.CHANNEL,
        // 추가적인 상태들을 이 배열에 포함
    ];

    return (
        <div>
            <Title>
                <img src={Logo} className="Home" alt="홈" onClick={() => { navigate('/'); }}></img>
                <MenuContainer>
                    <MenuBotton
                        isActive={CommuSubMenu.includes(btnActive)}
                        onClick={() => {
                        toggleActive(NavState.COMMUNITY);
                        navigate('/');
                        }}
                        onMouseEnter={() => handleMouseEnter(NavState.COMMUNITY)}
                        onMouseLeave={handleMouseLeave}
                    >
                        커뮤니티
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.SHOPPING}
                        onClick={() => {
                        toggleActive(NavState.SHOPPING);
                        navigate('/shopping');
                        }}
                        onMouseEnter={() => handleMouseEnter(NavState.SHOPPING)}
                        onMouseLeave={handleMouseLeave}
                    >
                        쇼핑
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.LIFE}
                        isLifeButton={true}
                        onClick={() => {
                        toggleActive(NavState.LIFE);
                        navigate('/life');
                        }}
                        onMouseEnter={() => handleMouseEnter(NavState.LIFE)}
                        onMouseLeave={handleMouseLeave}
                    >
                        인테리어/생활
                    </MenuBotton>
                </MenuContainer>
                <SearchInput type="text" placeholder="통합검색" />
                <img src={Cart} className="Cart" alt="장바구니"></img>
                <LoginContainer>
                    <LoginButton>로그인</LoginButton>
                    <LoginButton>회원가입</LoginButton>
                    <LoginButton>고객센터</LoginButton>
                </LoginContainer>
                <WriteButton>
                    글쓰기
                    <img src={Down} className="Down" alt="글쓰기 아이콘" />
                </WriteButton>
            </Title>

        </div>
    )
}

export default TopNavigation;