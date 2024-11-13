import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    isLifeButton?: boolean;
}

export const MenuContainer = styled.div`
    margin-top : 0.7vh;
    margin-left : 2vw;
`
export const MenuBotton = styled.button<ButtonProps>`
        width : ${(props: ButtonProps) => (props.isLifeButton ? "125px" : "74px")};
        height : 20px;
        color: ${(props: ButtonProps) => (props.isActive ? "#69E2FF" : "#000000")};
        background-color : transparent;
        border : none;
        cursor : pointer;
        font-family: 'MenuJW';
        font-size : 1.1rem;
        &:hover {
        color: #69E2FF;
    }
`