import React from 'react';
import styled from "styled-components";
const Wrapper = styled.section`
footer{
    background:#709255;
    color:#F6FEDB;
    text-align:center;
    font-size:1.25em
    padding:.5em;
    border-top:3px solid #FCCD00;

}
`


const Footer = () => {

    return (
        <Wrapper>
            <footer>
                <p> &copy; Matt Roger, Photography by Matt Roger</p>
            </footer>
        </Wrapper>

    )
}
export default Footer