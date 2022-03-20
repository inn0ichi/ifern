import React, { useState, Suspense } from 'react';
import { Paper } from '@mui/material';
import "../pages/Home.css";
import { useHistory } from "react-router-dom";
import { init, sendForm } from '@emailjs/browser';
init("M8rlQnvHUcmVPTtBt");



export default function ContactForm() {
    const history = useHistory();

    const submit = (e) => {
        var contact_number = Math.random() * 100000 | 0;
        sendForm('service_csskpqi', 'template_j4ly4ge', '#form')
            .then(function () {
                console.log('SUCCESS!');
                alert("Email successfully sent. We will get back to you shortly.")
            }, function (error) {
                console.log('FAILED...', error);
            });
        document.getElementById("form").reset();
    }
    return (

        <Paper>
            <header className='header'>CONTACT US</header>
            <form id="form" class="topBefore">

                <input aria-label="name of user" id="name" type="text" placeholder="NAME" name="user_name" />
                <input aria-label="email of user" id="email" type="text" placeholder="E-MAIL" name="user_email" />
                <textarea aria-label="user message" id="message" type="text" placeholder="MESSAGE" name="message"></textarea>
                <input aria-label="send message button" id="submit" type="button" onClick={() => submit()} value="SEND" />

            </form>
        </Paper>

    )
}