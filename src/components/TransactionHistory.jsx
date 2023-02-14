
import PropTypes from "prop-types";
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
                <tr key={trans.id} >
                    <TableD>{trans.type}</TableD>
                    <TableD>{trans.amount}</TableD>
                    <TableD>{trans.currency}</TableD>
                </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
    }

