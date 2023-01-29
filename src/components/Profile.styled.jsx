import styled from "styled-components";

export const StyledDiv = styled.div`
    border: 1px solid black;
    width: 400px;
    margin: auto;
`

export const ProfileInfo = styled.div`
    margin: auto;
`

export const Avatar = styled.img`
   width: 250px;
   height: 200px;
   object-fit: cover;
   display: block;
  margin-left: auto;
  margin-right: auto;
`

export const UserName = styled.p`
   line-height: 0;
   color: #398888;
   line-height: 0;
   font-weight: 800;
   font-size: 32px;
   text-align: center;
`
export const UserDescription = styled.p`
   line-height: 0;
   color: black;
   padding-top: 10px;
   text-align: center;
   font-size: 25px;
   `
export const UserProps = styled.span`
line-height: 0;
color: black;
font-size: 25px;
line-height: 28px;
`

export const ProfileItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     margin-bottom: 10px;
     padding: 0 16px;
     width: 100px;
     height: 100px;
     margin-top: 10px;
`

export const Stats = styled.ul`
    display: flex;
    padding-left: 0;
    align-items: center;
    justify-content: center;
    background-color: azure;
    width: 100%;
    margin: 0;
`