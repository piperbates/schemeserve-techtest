import React, {useEffect, useState} from 'react';
import StyledTextInput from './StyledTextInput';
import StyledButton from './StyledButton';
import postcodeValidator from '../../utils/postcodeValidator';
import fetchData from '../../utils/fetchData';
import { crimeDataTypes } from '../../utils/types/crimeDataTypes';
import { locationDetailsTypes } from '../../utils/types/locationTypes';
import crimeLinkConstructor from '../../utils/crimeLinkConstructor';
import { errorMessages } from '../../utils/error';

function Form () {
    const [data, setData] = useState<crimeDataTypes[] | []>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const [postCode, setPostCode] = useState<string>("");

    const win = window.localStorage;

    useEffect(()=>{
        const value = win.getItem('postcode');
        if(value) {   
            setPostCode(value);
        }
    }, [win]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostCode(e.target.value);
    };


    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);
        const postcodeIsValid = postcodeValidator(postCode);
        if(postcodeIsValid) {
            const locationData = await 
                fetchData(`http://api.getthedata.com/postcode/${postCode}`);
                if(locationData.status === "match"){
                    const locationDetails: locationDetailsTypes = {
                        latitude: locationData.data.latitude,
                        longitude: locationData.data.longitude,
                    };

                    win.setItem('postcode', postCode);
                    const crimeLink = crimeLinkConstructor(locationDetails);
                    const crimeData = await fetchData(crimeLink);
                    setData(crimeData);
                    setLoading(false);
                } else {
                    setError(errorMessages.POSTCODE_MATCH_ERROR);
                    setLoading(false);
                }
        } else {
            setError(errorMessages.INVALID_POSTCODE);
        }
    };

    console.log('data: ', data, 'loading: ', loading, 'error: ', error);

    return (
        <form>
           <label htmlFor="postcodeInput">Enter a postcode: </label>
            <StyledTextInput 
                value={postCode}
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