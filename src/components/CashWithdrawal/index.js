import {Component} from 'react'
import './index.css'
import GetDenomination from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    console.log(typeof value)
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="user">
            <p className="user-profile-pic">S</p>
            <h1 className="username">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="balance-amount">{balance}</p>
              <p className="balance-footer">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-amount">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachItem => (
              <GetDenomination
                denomination={eachItem.value}
                key={eachItem.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
