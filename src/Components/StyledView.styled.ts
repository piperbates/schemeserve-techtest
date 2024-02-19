import styled from "styled-components";
import StyledDiv from "./StyledDiv.styled";

const StyledView = styled(StyledDiv)<{height?: string}>`
    height: 300px;
    border: 1px solid red;
`;

export default StyledView;