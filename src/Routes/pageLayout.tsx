import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import StyledDiv from '../Components/StyledDiv.styled';
import Form from '../Components/Form/Form';

function PageLayout () {
    return (
        <StyledDiv>
            <StyledDiv>
                <h1>SchemeServe Technical Test</h1>
            </StyledDiv>

            <StyledDiv>
                <Form />
            </StyledDiv>

            <StyledDiv>
                <Outlet />
            </StyledDiv>

            <StyledDiv>
                Created by 
                    <Link 
                        to="http://github.com/piperbates" 
                        target='_blank'>
                            Piper Bates
                    </Link>
            </StyledDiv>
        </StyledDiv>
    );
}

export default PageLayout;