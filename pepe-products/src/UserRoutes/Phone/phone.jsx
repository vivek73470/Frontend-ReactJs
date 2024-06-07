import React, { useState } from 'react';

const Phone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhone = (e) => {
        const newPhoneNumber = e.target.value;
        console.log("Phone number changed:", newPhoneNumber);
        setPhoneNumber(newPhoneNumber);
    };
    

    const handleSubmit =(e)=>{
e.preventDefault();
console.log("Phone number submitted:", phoneNumber);
    }

    return (
        <>
            <form >
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" 
                    id="phoneNumber" 
                    value={phoneNumber} 
                    onChange={handlePhone} />
                </div>
               <input type="submit" />
            </form>
            <button onClick={handleSubmit}>submnbnit</button>
        </>
    );
};

export default Phone;
