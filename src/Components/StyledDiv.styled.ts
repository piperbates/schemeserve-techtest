import styled from "styled-components";

const StyledDiv = styled.div<{height?: string, align?: string}>`
    width: 100%;
    position: relative;
    text-align: ${(props) => props.align ? props.align : "left"};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.align ? props.align : "left"};
    justify-content: ${(props) => props.align ? props.align : "left"};
    height: ${(props) => props.height ? props.height : "auto"};
`;

export default StyledDiv;