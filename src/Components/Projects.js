import React, { Component } from 'react'
import firewild from '../firewild.png'

class Projects extends Component {

    render() {
        return(
            <div className="projects">
                <h2>Projects</h2>
                <img className="fw" alt="Firewild" src={firewild}></img>
            </div>
        )
    }
}

export default Projects