// import { createRenderer } from "react-dom/test-utils";
import Form from "../../Components/Form/Form";

// TODO: write tests


describe('Form component', () => {
    describe('when submit button pressed', () => {
        it.skip('should call postcodeValidator with the input', () => {
            //arrange
            const postcode = 'asdasd';
            // act
                // press submit button
            // assert
                // postcodeValidator was called with 'postcode' as arg
        });
    });

    describe('when given a valid postcode', () => {
        it.skip('should call fetchData with the correct link', () => {
            //arrange
            const postcode = 'asdasd';
            const link = `http://api.getthedata.com/postcode/${postcode}`;
            // act
                // postcodeValidator returns true
            // assert
                // fetchData was called with 'link'
        });
    });

    describe('when given an invalid postcode', () => {
        it.skip('should display the correct error message', () => {
            //arrange
                const postcodeValidatorMock = false;
            // act
                // When postcode validator mock returns false

            // assert
                // error message should be 'Please input a valid postcode'
        });
    });

    describe('when postcode API status shows no_match', () => {
        it.skip('should display the correct error message', () => {
            //arrange
                const dataMock = [{
                    status: "no_match",
                }];
            // act
                // check data.status

            // assert
                // error message should be 'This postcode does not exist'
        });
    });

    describe('when postcode API status shows match', () => {
        it.skip('should display the correct error message', () => {
            //arrange
                const dataMock = [{
                    status: "match",
                }];
            // act
                // check data.status

            // assert
                // should call crimeLinkConstructor(mock) 
                    // and then fetchData with above mocked crimeLinkConstructor
        });
    });
});