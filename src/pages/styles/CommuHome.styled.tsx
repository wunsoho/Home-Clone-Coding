import styled from 'styled-components';
import arrow from '../../img/arrow.png';

export const HomePhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
`;

export const HomeCat = styled.img`
  margin-right: 20px;  
  height: 57vh;
`;

export const ImgContainer = styled.div`
  position: relative;
  max-width: 14vw;
  max-height: 57vh;
  overflow: visible;

  .sImg {
    height: 57vh;
    transition: transform 0.3s ease-in-out;
  }

  &:hover .sImg {
    transform: scale(1);
  }

  .slick-prev, .slick-next {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;  // z-index 설정
  }

  &:hover .slick-prev, &:hover .slick-next {
    opacity: 1;
  }
`;

export const Prev = styled.div`
  position: absolute;
  top: 50%;
  left: -15px; 
  transform: translateY(-50%);
  background-image: url(${arrow});
  background-size: contain;
  height: 30px;
  width: 30px;
  cursor: pointer;
  z-index: 2;  // 화살표가 다른 요소보다 위에 있도록 설정
`;

export const NextTo = styled.div`
  position: absolute;
  top: 50%;
  right: -15px; 
  transform: translateY(-50%) rotate(180deg);
  background-image: url(${arrow});
  background-size: contain;
  height: 30px;
  width: 30px;
  cursor: pointer;
  z-index: 2;  // 화살표가 다른 요소보다 위에 있도록 설정
`;