import {BackgroundContainer} from "components/index.styled"
import PropTypes from 'prop-types';
import {TransactionsThead, TransactionsTr, TransactionsTh, TransactionsTd} from "components//Transaction/Transactions.styled"

export const TransdctionsHistory = ({ items }) => {
    return (
        <BackgroundContainer>
            <table>
  <TransactionsThead>
    <TransactionsTr>
      <TransactionsTh>Type</TransactionsTh>
      <TransactionsTh>Amount</TransactionsTh>
      <TransactionsTh>Currency</TransactionsTh>
    </TransactionsTr>
  </TransactionsThead>

                <tbody>
                    {items.map(({ id, type, amount, currency }) => {
                        return (
                            
    <TransactionsTr>
      <TransactionsTd>Invoice</TransactionsTd>
      <TransactionsTd>125</TransactionsTd>
      <TransactionsTd>USD</TransactionsTd>
    </TransactionsTr>
                        )
                    })}
  </tbody>
</table>
        </BackgroundContainer>
    )
}

TransdctionsHistory.propTypes = {
    items: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
}