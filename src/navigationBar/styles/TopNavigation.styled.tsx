import styled from "styled-components";
import search from '../../img/search.png';
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    $isActive: boolean;
    $isLifeButton?: boolean;
}

export const Title = styled.div`
    margin-top : 2.2vh;
    display: flex;
    align-items: center;
    justify-content : center;
    .Home {
        width: 75px;
        height: 37px;
        text-align : center;
        background-color:transparent;
        border : none;
        cursor : pointer;
        font-family: 'TitleJW';
        font-size: 1.6rem;
    }
    .Cart {
        margin-left : 1vw;
        width : 25px;
    }
`
export const MenuContainer = styled.div`
    margin-top : 0.7vh;
    margin-left : 2vw;
`
export const MenuBotton = styled.button<ButtonProps>`
    width: ${(props) => (props.$isLifeButton ? "125px" : "74px")};
    height: 20px;
    color: ${(props) => (props.$isActive ? "#69E2FF" : "#000000")};
    background-color : transparent;
    border : none;
    cursor : pointer;
    font-family: 'MenuJW';
    font-size : 1.1rem;
    &:hover {
    color: #69E2FF;
}
`
export const SearchInput = styled.input`
    margin-top : 0.3vh;
    margin-left: 5.5vw;
    width: 15vw;
    height: 3.5vh;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: calc(0.7vw) center;
    border: 0.1px solid #ddd;
    outline: none;
    font-size: 0.9rem;

    &::placeholder {
        color : #e2e2e2;
        text-indent: 2.3vw;
    }
    &:focus {
        border-color: skyblue; 
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center; 
    margin-left : 1vw;
`

export const LoginButton = styled.button`
    background-color: transparent;
    border: none;
    
    &:not(:last-child) {
        position: relative;
        padding-right: 0.5vw;
    }

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: #ddd; 
        margin-right: 0.05vw;
    }
        
`

export const WriteButton = styled.button`
    margin-left : 0.5vw;
    width : 4.9vw;
    height : 4.3vh;
    color : white;
    background-color : #35D7FF;
    border: none;
    border-radius : 0.2vw;
    display: flex;
    align-items: center; 
    justify-content: center; 

    .Down {
        margin-top : 0.1vh;
        margin-left : 0.3vw;
        width : 0.8vw;
        
    }
`