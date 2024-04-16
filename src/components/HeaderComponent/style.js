import { Row, Col } from 'react-bootstrap';
import styled from "styled-components";

export const HeaderInfo = styled(Row)`
    background-color: #007f5f;
    padding: 10px 120px;
    display: flex; 
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    
`;

export const HeaderInfoText = styled(Col)`
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center; 
    color: #ffff;
    @media (max-width: 768px) {
        display: none;
        
    }
`;


