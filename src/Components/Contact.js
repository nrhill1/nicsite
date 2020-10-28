import React, { Component } from 'react'
import lilogo from '../linkedin.png'
import gitlogo from '../gitlogo.svg'

class Contact extends Component {

    render() {
        return (
        <div>
            <h1>Contact Me</h1>
            <h3>nrhill1@gmail.com</h3>
            <a href="https://www.linkedin.com/in/nicolasrussellhill/" ><img alt="My LinkedIn Profile" src={lilogo} className="logo"></img></a>
            <a href="https://github.com/nrhill1" ><img alt="My GitHub" src={gitlogo} className="logo"></img></a>

        </div>
        )
    }
}

export default Contact