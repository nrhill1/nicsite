import React, { Component } from 'react'
import lilogo from '../linkedin.png'

class Contact extends Component {

    render() {
        return (
        <div>
            <h1>Contact Me</h1>
            <a href="https://www.linkedin.com/in/nicolasrussellhill/" ><img a="My LinkedIn Profile" src={lilogo} className="logo"></img></a>
        </div>
        )
    }
}

export default Contact