import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
   justify-content: center;
   height: 200px;
   width: 100%;
   background-color: azure;
   border: 1px solid darkgray;
   text-align: center;
`

export const Title = styled.h2`
    font-style: italic;
    margin: 10px 0;
`

export const Statlist = styled.ul`
    justify-content: center;
    list-style: none;
    padding-left: 0;
    display: flex;
    gap: 10px;
    margin: 0;
`

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     margin-bottom: 10px;
     line-height: 50px;
     width: 100px;
     height: 100px;
     border-radius: 4px;
     margin-top: 10px;
`

export const Label = styled.span`
    font-size: 30px;
    gap: 10px;
    margin-right: 10px;
`

export const Percentage = styled.span`
    font-size: 30px;
    gap: 10px;
`