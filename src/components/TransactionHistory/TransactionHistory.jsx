import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const Transaction = ({ transactions }) => (
    transactions.map(transaction => (
        <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
    ))
);

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css["transaction-history"]}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                <Transaction transactions={items} />
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })),
};