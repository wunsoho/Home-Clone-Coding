import React, { useContext, useEffect, useState, useMemo } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';
import { cat, s1, s2, s3, s4, s5, s6, s7, s8, s9,
  s10, s11, s12, s13, s14, s15, s16, s17, s18, s19
} from "../index";
import { HomeCat, HomePhotoContainer, ImgContainer, NextTo, Prev  } from "../styles/CommuHome.styled";
import Slider from "react-slick";
import "../../slider/slick-theme.css";
import "../../slider/slick.css";
import SlickButtonFix from '../../slider/SlickButtonFix';

const Home = () => {
  const { setNav } = useContext(NavContext);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // useMemo를 사용하여 images 배열은 컴포넌트가 처음 렌더링될 때 한 번만 계산되고, 이후에는 변경되지 않는 한 재계산되지 않음.
  // useEffect가 불필요하게 실행되는 것 방지
  const images = useMemo(() => [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19], []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (			//오른쪽 화살표
      <SlickButtonFix>
        <NextTo />
      </SlickButtonFix>
    ),
    prevArrow: (			//왼쪽 화살표
      <SlickButtonFix>
        <Prev />
      </SlickButtonFix>
    )
  };

  useEffect(() => {
    setNav(NavState.COMMUNITY);
  }, [setNav]);

  useEffect(() => {
    const loadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(loadImages).then(() => setImagesLoaded(true));
  }, [images]);

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HomePhotoContainer>
        <HomeCat src={cat} alt="홈 고양이" />
        <ImgContainer>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img className="sImg" src={image} alt={`슬라이드 이미지 ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </ImgContainer>
      </HomePhotoContainer>
    </div>
  );
};

export default Home;