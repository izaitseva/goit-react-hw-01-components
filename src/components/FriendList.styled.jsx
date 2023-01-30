import styled from "styled-components";

export const FriendsLi = styled.li`
    list-style: none;
    background-color: azure;
    width: 350px;
    margin: auto;
    height: 100px;
    display: flex;
    align-items: center;
    border: 1px solid lightgrey;
`
export const Avatar = styled.img`
    width: 60px;
    padding: 10px;
    background-color: aquamarine;
    border-radius: 50%;
    margin: 0 20px;
`

export const Ident = styled.span`
width: 40px;
height: 100%;
background-color: ${({isOnline}) => {

    if (isOnline === true) {
        return 'green';
    } else {
        return 'red';
    }
}
};
`

