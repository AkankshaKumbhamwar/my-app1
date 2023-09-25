// Form.js
import React from 'react';
import './Form.css';

const Form = ({ cities }) => {
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
            <select className="text-box" id="city" name="city">
              <option value="">City</option>
              {cities.map((data) => (
                <option key={data.id} value={data.district}>
                  {data.district}
                </option>
              ))}
            </select>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
