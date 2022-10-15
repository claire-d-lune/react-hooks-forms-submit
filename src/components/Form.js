import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    // console.log(event.target.value);
    setFirstName(event.target.value);
    
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    // console.log(event.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
    }
    const newArrayData = [...submittedData, formData]
    console.log(newArrayData)
    setSubmittedData(newArrayData)
    setFirstName("")
    setLastName("")
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
