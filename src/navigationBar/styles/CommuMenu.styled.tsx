import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    isLifeButton?: boolean;
}
export const DropdownContainer = styled.div`
    margin-left : 45vw;
    position: absolute;
    top: 100%; /* '취미' 버튼 바로 아래에 위치하도록 설정 */
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    width: max-content; /* 드롭다운 내용에 맞게 넓이 조절 */
`;

export const MenuContainer = styled.div`
    margin-top: 2vh;
    border-top: 1px solid #ddd;  
    border-bottom: 1px solid #ddd;  
    padding: 15px 0;
    display: flex;
    align-items: center;
`;

export const ButtonConatiner = styled.div`
    margin-left: 20vw;
    position: relative;
`;

export const MenuBotton = styled.button<ButtonProps>`
    position: relative;  // :before 위치를 조정할 수 있도록 relative 설정
    min-width: 30px;
    margin-left: 0.3vw;
    height: 20px;
    color: ${(props) => (props.isActive ? "#69E2FF" : "#000000")};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: 'MenuJW';
    font-size: 1rem;
    text-align: center;

    &::before {
        content: "";
        position: absolute;
        bottom: -17px;  
        left: 0;
        width: 100%; 
        height: 2px; 
        background-color: ${(props) => (props.isActive ? "#69E2FF" : "transparent")};  
        transition: background-color 0.3s ease;  
    }

    &:hover {
        color: #69E2FF;
    }
`;
