import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Col } from "../components/grid";
import '../App.css'
import axios from 'axios'

class Footer extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <header className="footer App-header" id="footer-container">
                    <Col className="footer-col" size="md-12">
                        *RB9
                    </Col>
                </header>
            </div>
        );
    }
}
export default Footer