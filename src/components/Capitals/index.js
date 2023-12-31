import {Component} from 'react'

import './index.css'

import Country from '../Country'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  changeState = event => {
    this.setState({activeCapital: event.target.value})
  }

  onSelectedCapital = () => {
    const {activeCapital} = this.state
    const countryObj = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapital,
    )

    return countryObj.country
  }

  render() {
    const {activeCapital} = this.state
    const country = this.onSelectedCapital()

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="container">
            <h1 className="countries-heading">Countries And Capitals</h1>
            <div className="select-container">
              <select
                className="select"
                onChange={this.changeState}
                value={activeCapital}
              >
                {countryAndCapitalsList.map(eachCountry => (
                  <Country
                    countryDetails={eachCountry}
                    key={eachCountry.id}
                    value={eachCountry.id}
                  />
                ))}
              </select>
              <p className="label-text">is capital of which country?</p>
            </div>
            <p className="result-text">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
