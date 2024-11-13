import { MenuBotton, MenuContainer } from '../styles/CommuMenu.styled';
import { useState, useEffect, useContext } from 'react';
import { NavState } from '../NavState';
import { NavContext  } from '../NavProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { pathToNavMap } from '../../config';

const CommuMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { setNav, currentNav } = useContext(NavContext);
    const [btnActive, setBtnActive] = useState<NavState>(currentNav);

    useEffect(() => {
        const navState = pathToNavMap[location.pathname] || "community";
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
                <MenuBotton
                    isActive={btnActive === NavState.COMMUNITY}
                    onClick={() => {
                    toggleActive(NavState.COMMUNITY, '/');
                    }}
                >
                    홈
                </MenuBotton>
                <MenuBotton
                    isActive={btnActive === NavState.RECOMMAND}
                    onClick={() => {
                    toggleActive(NavState.RECOMMAND, '/topics/recommend');
                    }}
                >
                    추천
                </MenuBotton>
                <MenuBotton
                    isActive={btnActive === NavState.CHANNEL}
                    onClick={() => {
                    toggleActive(NavState.CHANNEL, '/topics/hashtag-channel');
                    }}
                >
                    #채널
                </MenuBotton>
            </MenuContainer>
        </div>
    )
}

export default CommuMenu;