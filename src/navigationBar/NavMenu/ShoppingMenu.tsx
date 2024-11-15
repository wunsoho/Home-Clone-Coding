import { MenuBotton, MenuContainer, ButtonConatiner } from '../styles/CommuMenu.styled';
import { useState, useEffect, useContext } from 'react';
import { NavState } from '../NavState';
import { NavContext  } from '../NavProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { pathToNavMap } from '../../config';

const ShoppingMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { setNav, currentNav } = useContext(NavContext);
    const [btnActive, setBtnActive] = useState<NavState>(currentNav);

    useEffect(() => {
        const navState = pathToNavMap[location.pathname] || "shopping";
        setBtnActive(navState as NavState);
        setNav(navState as NavState);
    }, [location, setNav]);

    const toggleActive = (name: NavState, path: string) => {
        setBtnActive(name);
        setNav(name);
        navigate(path);
    }

    return (
        <div>
            <MenuContainer>
                <ButtonConatiner>
                    <MenuBotton
                        $isActive={btnActive === NavState.SHOPPING}
                        onClick={() => {
                        toggleActive(NavState.SHOPPING, '/shopping');
                        }}
                    >
                        쇼핑홈
                    </MenuBotton>
                    <MenuBotton
                        $isActive={btnActive === NavState.CATEGORY}
                        onClick={() => {
                        toggleActive(NavState.CATEGORY, '/category');
                        }}
                    >
                        카테고리
                    </MenuBotton>
                    <MenuBotton
                        $isActive={btnActive === NavState.BEST}
                        onClick={() => {
                        toggleActive(NavState.BEST, '/best');
                        }}
                    >
                        베스트
                    </MenuBotton>
                </ButtonConatiner>
            </MenuContainer>
        </div>
    )
}

export default ShoppingMenu;