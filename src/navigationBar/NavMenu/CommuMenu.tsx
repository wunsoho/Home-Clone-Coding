import { MenuBotton, MenuContainer, ButtonConatiner, DropdownContainer } from '../styles/CommuMenu.styled';
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태 추가

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

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div>
            <MenuContainer>
                <ButtonConatiner>
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
                    <MenuBotton
                        isActive={btnActive === NavState.HOUSEWARMING}
                        onClick={() => {
                        toggleActive(NavState.HOUSEWARMING, '/housewarming');
                        }}
                    >
                        집들이
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.HOUSEPHOTO}
                        onClick={() => {
                        toggleActive(NavState.HOUSEPHOTO, '/housephoto');
                        }}
                    >
                        집사진
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.THREED}
                        onClick={() => {
                        toggleActive(NavState.THREED, '/threeD');
                        }}
                    >
                        3D인테리어
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.STORAGE}
                        onClick={() => {
                        toggleActive(NavState.STORAGE, '/storage');
                        }}
                    >
                        살림수납
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.PET}
                        onClick={() => {
                        toggleActive(NavState.PET, '/pet');
                        }}
                    >
                        반려동물
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.BABYCARE}
                        onClick={() => {
                        toggleActive(NavState.BABYCARE, '/babycare');
                        }}
                    >
                        육아
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.HOMESTORANG}
                        onClick={() => {
                        toggleActive(NavState.HOMESTORANG, '/homestorang');
                        }}
                    >
                        홈스토랑
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.PLAN}
                        onClick={() => {
                        toggleActive(NavState.PLAN, '/plan');
                        }}
                    >
                        플랜테리어
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.COLLECTABLE}
                        onClick={() => {
                        toggleActive(NavState.COLLECTABLE, '/collectable');
                        }}
                    >
                        콜렉터블
                    </MenuBotton>
                    
                    <MenuBotton
                        isActive={btnActive === NavState.CAMPING}
                        onClick={() => {
                        toggleActive(NavState.CAMPING, '/camping');
                        }}
                    >
                        캠핑
                    </MenuBotton>
                    <MenuBotton
                        isActive={btnActive === NavState.HOBBY}
                        onClick={() => {
                        toggleActive(NavState.HOBBY, '/hobby');
                        }}
                    >
                        취미
                    </MenuBotton>
                    <button onClick={handleDropdownToggle}>
                        드다
                    </button>
                    {isDropdownOpen && (
                        <DropdownContainer>
                            <MenuBotton
                                isActive={btnActive === NavState.HOTPLACE}
                                onClick={() => {
                                    toggleActive(NavState.HOTPLACE, '/hotplace');
                                    setIsDropdownOpen(false);
                                }}
                            >
                                핫플레이스
                            </MenuBotton>
                            <MenuBotton
                                isActive={btnActive === NavState.EVENT}
                                onClick={() => {
                                    toggleActive(NavState.EVENT, '/event');
                                    setIsDropdownOpen(false);
                                }}
                            >
                                이벤트
                            </MenuBotton>
                        </DropdownContainer>
                    )}
                </ButtonConatiner>
            </MenuContainer>
        </div>
    )
}

export default CommuMenu;