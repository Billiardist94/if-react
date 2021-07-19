import '../styles/components/HomesGuestsLoves.css';
import React from "react";
import Container from "./Container";

function HomesGuestsLoves(props){
    return (
        <section className={props.className}>
            <Container className='container'/>
        </section>
    );
}

export default HomesGuestsLoves;
