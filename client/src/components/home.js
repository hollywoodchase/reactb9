import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Col, Row, Container } from "../components/grid";
import axios from 'axios'

class Home extends Component {

    render() {
        console.log('navbar render, props: ')
        console.log(this.props);
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <header className="home App-header" id="nav-container">
                                <div className="home-col col-8" >
                                    <section className="home-section">
                                        <div className="welcome row">
                                            <h1>Welcome home</h1>
                                        </div>
                                    </section>
                                </div>
                            </header>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Home