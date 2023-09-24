// formPage.js

import React, { useState } from 'react';
import Form from './form';
import State from './stateApi'; // Import your data directly

const FormPage = () => {
  const [stateData, setStateData] = useState(State);
console.log(State);
  return (
    <div>
      <Form stateData={stateData}/>
    </div>
  );
}

export default FormPage;






// import React, { useState, useEffect } from 'react';
// import Form from './Form';

// const FormPage = () => {
//   const [stateData, setStateData] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your API here
//     fetch('your-api-endpoint')
//       .then((response) => response.json())
//       .then((data) => {
//         setStateData(data); // Assuming the data structure matches the nested hierarchy
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <Form stateData={stateData} />
//     </div>
//   );
// };

// export default FormPage;
