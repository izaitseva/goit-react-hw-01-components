import styled from "styled-components"


export const StyledTable = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 600px;
    margin: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);    
    `
   export const TableHeader = styled.thead`
    background-color: #009879;
    color: black;
    text-align: left;
`

    export const TableRow = styled.tr`
        background-color: azure;
        border-bottom: 1px solid #dddddd;
        font-size: 30px;
    `

    export const TableD = styled.td`
    font-size: 23px;
    padding-left: 10px;
    border-bottom: 1px solid #dddddd;
`