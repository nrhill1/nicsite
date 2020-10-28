import React, { Component } from 'react'
import firewild from '../firewild.png'

class Projects extends Component {

    render() {
        return(
            <div className="projects">
                <h2>Projects</h2>
                <a href="https://firewild.herokuapp.com/"><img className="fw" alt="Firewild" src={firewild}></img></a>
                <p className="fwtext">Firewild is a wildfire tracking app that has full CRUD functionality when ran locally,
                allowing users to post updates on a message board. I used React.js along with the Google Maps API and data 
                from CA.gov to display polygons. The backend is made using Flask and MongoDB. The image is linked to the Heroku
                version which does not support the backend capabilities as well as some of the style changes.</p>
            </div>
        )
    }
}

export default Projects