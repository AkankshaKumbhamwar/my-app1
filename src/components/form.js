import React, { useState } from 'react';
import './Form.css';

const Form = ({ stateData }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [personDetails, setPersonDetails] = useState([]);
  const [cityDisabled, setCityDisabled] = useState(true);
  const [villageDisabled, setVillageDisabled] = useState(true);

  //this is demo purpose
  

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity('');
    setSelectedVillage('');
    setCityDisabled(newState === ''); // Enable the city select when a state is chosen
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
    setSelectedVillage('');
    setVillageDisabled(newCity === ''); // Enable the village select when a city is chosen
  };

  const handleVillageChange = (event) => {
    const newVillage = event.target.value;
    setSelectedVillage(newVillage);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Check if all required details are filled
    if (!selectedState || !selectedCity || !selectedVillage || !firstName || !lastName) {
      alert('Please enter all details');
      return;
    }

    // Search for person details based on the selected options
    const selectedStateData = stateData.find((state) => state.stateName === selectedState);
    const selectedCityData = selectedStateData?.cities.find((city) => city.cityName === selectedCity);
    const selectedVillageData = selectedCityData?.villages.find((village) => village.villageName === selectedVillage);

    const matchingPersons = selectedVillageData?.peoples.filter((person) =>
      person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()
    );

    setPersonDetails(matchingPersons || []);
  };

  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <br />
      <div className="search-form">
        <h1>Enter Search Details</h1>
        <form onSubmit={handleSearch}>
          <div className='form-group'>
            <select
              className="text-box"
              id="state"
              name="state"
              onChange={handleStateChange}
              value={selectedState}
            >
              <option value="">State</option>
              {stateData.map((state) => (
                <option key={state.stateName} value={state.stateName}>
                  {state.stateName}
                </option>
              ))}
            </select>
            <select
              className="text-box"
              id="city"
              name="city"
              onChange={handleCityChange}
              value={selectedCity}
              disabled={cityDisabled} // Disable the city select when there's no selected state
            >
              <option value="">City</option>
              {selectedState &&
                stateData
                  .find((state) => state.stateName === selectedState)
                  ?.cities.map((city) => (
                    <option key={city.cityName} value={city.cityName}>
                      {city.cityName}
                    </option>
                  ))}
            </select>
            <select
              className="text-box"
              id="village"
              name="village"
              onChange={handleVillageChange}
              value={selectedVillage}
              disabled={villageDisabled} // Disable the village select when there's no selected city
            >
              <option value="">Village</option>
              {selectedCity &&
                stateData
                  .find((state) => state.stateName === selectedState)
                  ?.cities.find((city) => city.cityName === selectedCity)
                  ?.villages.map((village) => (
                    <option key={village.villageName} value={village.villageName}>
                      {village.villageName}
                    </option>
                  ))}
            </select>
          </div>
          <div className='form-group'>
            <input type="text" placeholder="First Name" className="text-box" onChange={handleFirstNameChange} value={firstName} /><br /><br />
          </div>
          <div className='form-group'>
            <input type="text" placeholder="Last Name" className="text-box" onChange={handleLastNameChange} value={lastName} /><br /><br />
          </div>
          <div className="form-group">
            <button type="submit" className="search-button">Search</button>
          </div>
        </form>
        {personDetails.length > 0 && (
          <div>
            <h2>Person Details:</h2>
            <ul>
              {personDetails.map((person, index) => (
                <li key={index}>
                  {person.firstName} {person.lastName}<br />
                  Phone: {person.phoneNo}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
