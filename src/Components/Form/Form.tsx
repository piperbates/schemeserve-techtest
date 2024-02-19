import React, {useState} from 'react';
import StyledTextInput from './StyledTextInput';
import StyledButton from './StyledButton';
import postcodeValidator from '../../utils/postcodeValidator';

function Form () {

    const [postCode, setPostCode] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostCode(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        postcodeValidator({input: postCode});
    }

    return (
        <form>
           <label htmlFor="postcodeInput">Enter a postcode: </label>
            <StyledTextInput 
                id="postcodeInput" 
                onChange={(e)=>handleChange(e)} 
            />
            <StyledButton 
                onClick={(e)=>{
                    handleSubmit(e);
                    }}>
                    Search
            </StyledButton>
        </form>
    );
}

export default Form;