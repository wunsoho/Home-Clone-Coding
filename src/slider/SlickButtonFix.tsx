import React from 'react';

interface SlickButtonFixProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
  children?: React.ReactNode;
}

const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }: SlickButtonFixProps) => {
  // currentSlide와 slideCount를 사용하지 않으므로, 이들을 props에서 제거
  return <span {...props}>{children}</span>;
};

export default SlickButtonFix;