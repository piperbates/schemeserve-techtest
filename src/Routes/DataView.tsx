import React, {useContext} from 'react';
import { Data } from '../utils/context/DataContext';
import StyledView from '../Components/StyledView.styled';
import {
    StyledTable, 
    StyledTd, 
    StyledThead
} from '../Components/Table/StyledTable.styled';
import StyledDiv from '../Components/StyledDiv.styled';
import { StyledLi, StyledUl } from '../Components/StyledUl.styled';
import { DataType } from '../utils/types/dataTypes';
import { Loading } from '../utils/context/LoadingContext';
import LoadingText from '../Components/LoadingText/Loading';
import { Error } from '../utils/context/ErrorContext';

function DataView () {

    const { data } = useContext(Data);
    const { loading } = useContext(Loading);
    const { error } = useContext(Error);

    const postCode = "postcode"; // TODO: This should be brought over
    // into the data context, currently is hardcoded so it doesn't break

    const capitalise = (word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1);
        
    return loading ? <StyledDiv align="center"><LoadingText /></StyledDiv> : 
                (error 
                    ? <StyledDiv align="center"><p>{error}</p></StyledDiv> 
                    : data.length 
                        ?   
                    (<StyledView>
                        <p>Navigate to a crime type:</p>
                        {/* TODO: turn these into anchor links */}
                        <StyledUl>
                            {data.map((crimeType: DataType, i:number)=> 
                                <StyledLi key={i}>
                                    {capitalise(crimeType.category)}
                                </StyledLi>
                            )} 
                        </StyledUl>

                        {data.map((crimeType: DataType, i: number)=>
                            <StyledDiv key={i}>
                                <h2>{capitalise(crimeType.category)}</h2>
                                <StyledTable>
                                <StyledThead>
                                    <tr>
                                        <StyledTd>
                                            Date
                                        </StyledTd>
                                        <StyledTd>
                                            Street Name
                                        </StyledTd>
                                        <StyledTd>
                                            Postcode
                                        </StyledTd>
                                        <StyledTd>
                                            Outcome status
                                        </StyledTd>
                                    </tr>
                                </StyledThead>
                                <tbody>
                                    <tr>
                                        <StyledTd>
                                            {crimeType.outcome_status.date}
                                        </StyledTd>
                                        <StyledTd>
                                            {crimeType.location.street.name}
                                        </StyledTd>
                                        <StyledTd>
                                            {postCode}
                                        </StyledTd>
                                        <StyledTd>
                                            {crimeType.outcome_status.category ?
                                              crimeType.outcome_status.category
                                                : "On Going"}
                                        </StyledTd>
                                    </tr>
                                </tbody>
                                </StyledTable>
                            </StyledDiv>
                        )}
                    </StyledView>) : (
                        <StyledDiv align="center" height="100px">
                            <p>No data to show</p>
                        </StyledDiv>)
    );        
}

export default DataView;
