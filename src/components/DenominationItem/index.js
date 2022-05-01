import './index.css'

const GetDenomination = props => {
  const {denomination, updateBalance} = props
  const value = denomination

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button type="button" className="button" onClick={onClickDenomination}>
        {denomination}
      </button>
    </li>
  )
}

export default GetDenomination
