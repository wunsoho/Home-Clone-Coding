import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    $isActive: boolean;
    $isDropButton?: boolean;
}
export const DropdownContainer = styled.div`
    position: absolute;
    top: 170%;
    left: 40vw;  
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    width: 15vw; 
    height : 11vh;
    align-items: flex-start;
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
    position: relative;
    display: flex;
`;

export const MenuBotton = styled.button<ButtonProps>`
    position: relative;  
    min-width: 30px;
    margin-left: ${(props) => (props.$isDropButton ? '1vw' : '0.3vw')};  // isDropButton이 true일 때 왼쪽 마진 증가
    margin-top: ${(props) => (props.$isDropButton ? '1vh' : '0')};  // isDropButton이 true일 때 위쪽 마진 증가
    height: 20px;
    color: ${(props) => (props.$isActive ? "#69E2FF" : "#000000")};
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
        background-color: ${(props) => (props.$isActive && !props.$isDropButton ? "#69E2FF" : "transparent")};
        transition: background-color 0.3s ease;  
    }

    &:hover {
        color: #69E2FF;
    }
`;


export const GradientMenuBotton = styled(MenuBotton)`
    background: linear-gradient(to right, 
        rgba(0, 0, 0, 1) 0%, 
        rgba(0, 0, 0, 0.6) 10%, 
        rgba(0, 0, 0, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
`;