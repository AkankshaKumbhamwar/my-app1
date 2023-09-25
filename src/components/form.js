import React, { useEffect, useState } from 'react';
import './Form.css';

const Form = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(''); // State to track the selected city
  const [villages, setVillages] = useState([]);

  const getVillages = async (city) => {
    try {
      let url = `http://13.48.67.44/user/city?ct=${city}&l=0`;
      const res = await fetch(url);
      const responseData = await res.json();
      const villagesData = responseData.data;
      console.log("villages", villagesData);
      setVillages(villagesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      // Fetch villages when a city is selected
      getVillages(selectedCity);

    }
  }, [selectedCity]); // Include selectedCity as a dependency

  const handleCityChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCity(selectedValue); // Update the selected city
    console.log("Selected city:", selectedValue); // Add this line for debugging
  };
console.log("vl",villages)
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <br />
      <div className="search-form">
        <h1>Enter Search Details</h1>
        <form>
          <div className='form-group'>
            {/* State dropdown */}
            <select className="text-box" id="state" name="state">
              <option value="">Maharashtra</option>
            </select>
            {/* City dropdown */}
            <select
              className="text-box"
              id="city"
              name="city"
              onChange={handleCityChange} // Update selected city when the selection changes
            >
              <option value="">City</option>
              {cities.map((data) => (
                <option key={data.id} value={data.district}>
                  {data.district}
                </option>
              ))}
            </select>
            {/* Villages dropdown */}
            <select className="text-box" id="village" name="village">
              <option value="">Village</option>
              
              {Array.isArray(villages) ? (
                villages.map((villageData) => (
                  <option key={villageData.id} value={villageData.name}>
                    {villageData.name}
                  </option>
                ))
              ) : (
                <option value="">Loading Villages...</option>
              )}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
