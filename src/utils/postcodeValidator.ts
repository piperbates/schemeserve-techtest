function postcodeValidator (input: string) {
    // There are better methods of validating a postcode but
    // for this test we can use whether it looks valid

    if(input){
        if (input.includes(" ")) {
            const noSpaces = input.split(' ').join('');
            if (
                !isNaN(parseInt(input.split(' ')[1].charAt(0)))
                && (noSpaces.length > 4 && noSpaces.length < 8) 
                && isNaN(parseInt(noSpaces.charAt(0)))
                && isNaN(parseInt(noSpaces.charAt(noSpaces.length-1)))
                && isNaN(parseInt(noSpaces.charAt(noSpaces.length-2)))
                ) {
                    return true; // postcode is valid
            } else {
                return false; // // postcode is invalid
            }
    } }
    return false;

};

export default postcodeValidator;