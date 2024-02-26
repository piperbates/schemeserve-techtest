import styled from "styled-components";
import StyledDiv from "./StyledDiv.styled";

const StyledView = styled(StyledDiv)<{height?: string}>`
    padding: 10px;
`;

export default StyledView;