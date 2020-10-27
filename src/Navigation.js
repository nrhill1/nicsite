import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Navigation extends Component  {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link className="navLink" href="/">Home</Link></li>
                    <li><Link className="navLink" href="/projects">Projects</Link></li>
                    <li><Link className="navLink" href="/aboutme">About Me</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation