import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class Footer extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <header className="footer App-header" id="footer-container">
                    <div className="footer-col col-8" >
                        <section className="footer-section">
                    
                        </section>

                    </div>
                </header>
            </div>
        );
    }
}
export default Footer