import { useState } from "react";
import { PropTypes } from 'prop-types';
const AgeCalculator =({calculateAge}) =>{
const [birthDate, setBirthDate] = useState('');

const handleChangeDate =(e) =>{
    setBirthDate(e.target.value);
};
const handleSubmit =(e) =>{
    e.preventDefault();
    calculateAge(birthDate);
}

return(
    <form onSubmit={handleSubmit}>
        <input value={birthDate} type="date" onChange={handleChangeDate}/>
        <button disabled={!birthDate} type="submit">Calculate Age</button>
    </form>
);

};
AgeCalculator.PropTypes ={
    calculateAge: PropTypes.func.isRequired,
}
export default AgeCalculator;