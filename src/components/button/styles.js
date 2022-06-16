import styled from "styled-components";


export const Button = styled.button`

background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)' };
border-radius: 14px;
width: 342px;
height: 74px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;

margin-top:130px;
border: ${props => props.isBack ? ' 1px solid #FFFFFF' : 'none'};
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}

&:active{

    opacity: 0.3;
}

img{
    transform: ${props => props.isBack && 'rotateY(180deg)' }
}
`