import postcodeValidator from "../../utils/postcodeValidator";

describe('postcodeValidator function', () => {      
    describe('is given valid input', () => {
        test('it returns true', () => {
            //arrange
            const postcode = 'cv31 2lx';

            // act
            const result = postcodeValidator(postcode);

            // assert
            expect(result).toBe(true);
        });
    });

    describe('is given invalid input', () => {
        describe('input is > 5 or < 7 characters', () => {
            it('returns false', () => {
                 //arrange
                const postcode = 'cvsf31 2fdlx';

                // act
                const result = postcodeValidator(postcode);

                // assert
                expect(result).toBe(false);
            });
        });

        describe('input inward code 1st character is not numeric', () => {
            it('should return false', () => {
                //arrange
                const postcode = 'cv31 Slx';

                // act
                const result = postcodeValidator(postcode);

                // assert
                expect(result).toBe(false);
            });
        });

        describe('the inputs last character is non-numeric', () => {
            it('returns false', () => {
                //arrange
                const postcode = 'cv31 2l3';

                // act
                const result = postcodeValidator(postcode);

                // assert
                expect(result).toBe(false);
            });
        });
    });
});