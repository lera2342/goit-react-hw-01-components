import { styled } from "styled-components";


export const ProfileImg = styled.img`
margin: 0 auto;
height: 200px;
width: 200px;
margin-top: 20px;
display: flex;
justify-content: center;
`;

export const ProfileParagraph = styled.p`
margin-top: 10px;
text-align: center;
font-family: sans-serif;
font-size: 16px;
justify-content: center;
padding: 2px;
margin: 13px;
box-shadow: 1px -10px 10px -10px rgba(149, 172, 93, 0.52) inset;`;

export const ProfileList = styled.ul`
margin-top: 20px;
display: flex;
gap: 15px;
/* width: 200px; */
padding: 0;
justify-content: center;
`;

export const ProfileItem = styled.li`
display: flex;
flex-direction: column;
`;