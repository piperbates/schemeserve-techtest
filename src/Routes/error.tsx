import React from 'react';
import { Link } from 'react-router-dom';
import StyledDiv from '../Components/StyledDiv.styled';

function ErrorElement () {
    return (
        <StyledDiv height="100vh">
            <h1>
                Oops, something's gone wrong
            </h1>
            <p>
                We couldn't find that page.
            </p>
            <p>
                <Link to="/">Go back home</Link>
            </p>
        </StyledDiv>
    );
}

export default ErrorElement;