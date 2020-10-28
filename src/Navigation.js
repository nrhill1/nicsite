import React, { Component } from 'react'
import { Link } from 'react-scroll'


class Navigation extends Component  {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About Me</Link></li>
                    <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact Info</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation