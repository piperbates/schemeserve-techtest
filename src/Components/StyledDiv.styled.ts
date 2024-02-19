import styled from "styled-components";

const StyledDiv = styled.div<{height?: string}>`
    width: 100%;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.height ? props.height : "auto"};
`;

export default StyledDiv;