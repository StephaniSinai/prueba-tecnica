import { PropTypes } from "prop-types";
const AgeResult =({ age}) =>{
    let linf=null;
    let lsup=null;
    let edad=null;
    if(age.days <=9){
        edad="00"+age.days+"D"
        linf="NO"
        lsup="NO"
    }else if (age.days>=10 && age.days<=30){
         edad=age.days+" días"
         linf="008D"
         lsup="0"+age.days+"D"
    }else if(age.days>=31 && age.months <=24){
        edad=age.months+" meses"
        linf="008D"
        if(age.months <=9){
            lsup="00"+age.months+"M"
        }else{
            lsup="0"+age.months+"M"
        }
    }else if(age.months>24){
        edad=age.years+" años"
        linf="028D"
        if (age.years<=9){
            lsup="00"+age.years+"A"
        }else if(age.years<=99){
            lsup="0"+age.years+"A"
        }else{
            lsup=age.years+"A"
        }
    }

    return (
    <label>{edad}</label>
  );
};

AgeResult.propTypes={
    age: PropTypes.shape({
        years:PropTypes.number.isRequired,
        months: PropTypes.number.isRequired,
        days: PropTypes.number.isRequired,
        edad: PropTypes.number.isRequired,
    }),
};
export default AgeResult;