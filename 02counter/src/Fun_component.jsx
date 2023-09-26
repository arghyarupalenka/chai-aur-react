import React, { useState } from 'react';

function Fun_component() {
    const [companyName, setCompanyName] = useState('');

  const changeText = (event) => {
    setCompanyName(event.target.value);
  };

  return (
    <div>
      <h2>Simple Event Example</h2>
      <label htmlFor="name">Enter company name: </label>
      <input type="text" id="companyName" onChange={changeText} />
      <h4>You entered: {companyName}</h4>
    </div>
  );
}

export default fun_component;
