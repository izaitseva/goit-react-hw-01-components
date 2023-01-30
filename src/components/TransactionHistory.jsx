import { TableRow, StyledTable, TableHeader, TableD } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <StyledTable>
            <TableHeader>
                <TableRow>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableRow>
            </TableHeader>

            <tbody>
                {items.map(trans => (
                <tr>
                    <TableD>{trans.type}</TableD>
                    <TableD>{trans.amount}</TableD>
                    <TableD>{trans.currency}</TableD>
                </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}