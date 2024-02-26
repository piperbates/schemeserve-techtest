import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import StyledDiv from '../Components/StyledDiv.styled';
import Form from '../Components/Form/Form';
import { DataContext } from '../utils/context/DataContext';
import { LoadingContext } from '../utils/context/LoadingContext';
import { ErrorContext } from '../utils/context/ErrorContext';

function PageLayout () {
    return (
        <StyledDiv>
            <StyledDiv align="center">
                <h1>SchemeServe Technical Test</h1>
            </StyledDiv>
            
            <DataContext>
                <LoadingContext>
                    <ErrorContext>
                        <StyledDiv align="center">
                            <Form />
                        </StyledDiv>
                        
                        <Outlet />
                    </ErrorContext>
                </ LoadingContext>
            </DataContext>

            <StyledDiv align="center">
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