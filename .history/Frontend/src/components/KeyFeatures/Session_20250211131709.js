import React, { useState } from 'react';
import './Session.css';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Session } from 'inspector';
const Session = () => {
  const navigate = useNavigate();
  // const [isError, setIsError] = useState(false);
  const [popup,setpopup] =useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    area: '',
    city: '',
    state: '',
    postCode: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/submit-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Appointment booked successfully!');
        // You can add further actions after successful booking, e.g., redirecting the user.
      } else {
        console.error('Error booking appointment.');
      }
       navigate("/details")
      setpopup(true)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const closePopup = () => {
  //    navigate("/details")

  // };

  return ( 
    <>

    <body className="body11">

    <div className="formbold-main-wrapper">

    <div className="formbold-form-wrapper">
    <form action="https://" method="POST" onSubmit={handleSubmit}>


  <div className="formbold-mb-5">
    <label for="name" className="formbold-form-label"> Full Name </label>
    <input
      type="text"
      name="name"
      onChange={handleChange}
      id="name"
      placeholder="Full Name"
      className="formbold-form-input"
    />
  </div>


  <div className="formbold-mb-5">
    <label for="phone" className="formbold-form-label"> Phone Number </label>
    <input
      type="text"
      name="phone"
      onChange={handleChange}
      id="phone"
      placeholder="Enter your phone number"
      className="formbold-form-input" style={{borderBlockColor:"#6a64f1"}}
    />
  </div>

  {/* <div className="formbold-mb-5">
    <label for="phone" className="formbold-form-label"> Feedback </label>
    <input
      type="text"
      name="phone"
      onChange={handleChange}
      id="phone"
      placeholder="Enter Feedback"
      className="formbold-form-input" style={{borderBlockColor:"#6a64f1"}}
    />
  </div> */}


  <div className="formbold-mb-5">
    <label for="email" className="formbold-form-label"> Email Address </label>
    <input
      type="text"
      name="email"
      onChange={handleChange}
      id="email"
      placeholder="Enter your email"
      className="formbold-form-input"
    />
  </div>


  <div className="flex flex-wrap formbold--mx-3">

    <div className="w-full sm:w-half formbold-px-3">
      <div className="formbold-mb-5 w-full">
        <label for="date" className="formbold-form-label"> Date </label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          id="date"
          className="formbold-form-input"
        />
      </div>
    </div>


    <div className="w-full sm:w-half formbold-px-3">
      <div className="formbold-mb-5">
        <label for="time" className="formbold-form-label"> Time </label>
        <input
          type="time"
          name="time"
          onChange={handleChange}
          id="time"
          className="formbold-form-input"
        />
      </div>
    </div>
    
  </div>


  <div className="formbold-mb-5 formbold-pt-3">

    <label className="formbold-form-label formbold-form-label-2">
      Address Details
    </label>

    <div className="flex flex-wrap formbold--mx-3">

      <div className="w-full sm:w-half formbold-px-3">
        <div className="formbold-mb-5">
          <input
            type="text"
            name="area"
            onChange={handleChange}
            id="area"
            placeholder="Enter area"
            className="formbold-form-input"
          />
        </div>
      </div>


      <div className="w-full sm:w-half formbold-px-3">
        <div className="formbold-mb-5">
          <input
            type="text"
            name="city"
            onChange={handleChange}
            id="city"
            placeholder="Enter city"
            className="formbold-form-input"
          />
        </div>
      </div>


      <div className="w-full sm:w-half formbold-px-3">
        <div className="formbold-mb-5">
          <input
            type="text"
            name="state"
            onChange={handleChange}
            id="state"
            placeholder="Enter state"
            className="formbold-form-input"
          />
        </div>
      </div>


      <div className="w-full sm:w-half formbold-px-3">
        <div className="formbold-mb-5">
          <input
            type="text"
            name="postCode"
            onChange={handleChange}
            id="post-code"
            placeholder="Post Code"
            className="formbold-form-input"
          />
        </div>
      </div>


    </div>
  </div>

  {/* <div className="formbold-mb-5">
    <label for="phone" className="formbold-form-label"> <h2>Enter Feedback</h2> </label>
    <input
      type="text"
      // name="phone"
      onChange={handleChange}
      id="phone"
      placeholder="Enter Feedback"
      className="formbold-form-input" style={{borderBlockColor:"#6a64f1"}}
    />
  </div>
 */}

  <div>
    <button className="formbold-btn" type='submit' onClick={handleSubmit}>submit</button>  
    </div>


    


</form>

</div>
</div>

</body>     
    </>
 );
}

export default Session;