import { styled } from "styled-components";

export const FriendsItem = styled.li`
 display: flex;
 gap: 15px;
 align-items: center;
 margin-top: 25px;
 box-shadow: 0px -10px 10px -10px rgba(160, 172, 93, 0.52) inset;
padding: 0;
width: 150px;
font-family: sans-serif;

 `;
 


export const FriendSpan = styled('span')(({ $isOnline }) => {
    return {
        backgroundColor: $isOnline ? '#008000' : '#696969',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
     }
})