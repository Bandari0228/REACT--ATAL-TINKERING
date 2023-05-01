import React from 'react'
import "./studentform.css";

export default function studentform() {
  
  return (
    <>
      <form action="">
        <div className="student">
          <h1>Student Form</h1>

          <div>
            <label htmlFor="school" id="labelschool" >
              School:
            </label>
            <select id="school"  name="">
              <option value="">Select your school</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" />
          </div>

          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" />
          </div>

          <div className='gender'>
            <label htmlFor="idgender">Gender :</label >
              
              <select name="" id="idgender">
                <option value="">-- Select --</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
             
          </div>

          <div>
            <label htmlFor="class">Class:</label>
            <input type="number" id="class" />
          </div>

          <div>
            <label for="section">Section:</label>
            <select id="section" name="section" required>
              <option value="">--- Select ---</option>
              <option value="A"> A</option>
              <option value="B"> B</option>
              <option value="C"> C</option>
              <option value="D"> D</option>
              <option value="E"> E</option>
              <option value="F"> F</option>
              <option value="G"> G</option>
              <option value="H"> H</option>
              <option value="I"> I</option>
              <option value="J"> J</option>
              <option value="K"> K</option>
              <option value="L"> L</option>


            </select>
          </div>

          <div>
            <label htmlFor="email">Email-ID:</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="number">Whatsapp Number:</label>
            <input
              type="tel"
              id="number"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>

          <div>
            <label htmlFor="Aspiration">Aspiration:</label>
            <input type="text" id="Aspiration" />
          </div>

          <div>
            <label htmlFor="currentExp">Current Experiment:</label>
            <input type="text" id="currentExp" />
          </div>

          <div>
            <label htmlFor="teamleader">Are you a team leader?</label>
            <input type="checkbox" name="teamleader" id="teamleader" />
          </div>
          <hr />

          <div className="button">
            <label htmlfor="add"></label>
            <input type="button" id="add" value="ADD" />
            <label htmlfor="reset"></label>
            <input id="reset" type="reset" value="RESET" />
          </div>
        </div>
      </form>
    </>
  );
}
