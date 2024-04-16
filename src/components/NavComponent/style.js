import {Nav, Navbar} from 'react-bootstrap';
import styled from "styled-components";


// Styled Navbar.Brand
export const StyleBrand = styled(Navbar.Brand)`
    font-family: 'poppins', sans-serif;
    font-size: 1.5em;
    font-weight: 800;
    margin-right: 5.5cm;
`;

// Styled Nav
export const NaviStyle = styled(Nav)`
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
     
`;

export const SearchStyle = styled.div`
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    display: 'flex'
    align-items: center;
    justify-content: center; 
`;

export const TitleCanvas = styled.h2`
    font-family: 'poppins', sans-serif;
    font-size: 22px;
    font-weight: 800;
`;
