import './index.css'

const Country = props => {
  const {countryDetails} = props
  const {id, capitalDisplayText} = countryDetails

  return (
    <option value={id} className="option">
      {capitalDisplayText}
    </option>
  )
}

export default Country
