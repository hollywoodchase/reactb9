import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class Navbar extends Component {

    render() {
        console.log('navbar render, props: ')
        console.log(this.props);
        return (
            <div>
                <header className="navbar App-header" id="nav-container">
                    <div className="navbar-col col-8" >
                        <section className="navbar-section">
                        
                            <Link to="/" className="btn btn-warning">
                                <span className="text"><h3>Home</h3></span>
                            </Link>
                            <Link to="/addUser" className="btn btn-danger">
                                <span className="text"><h3>Add User</h3></span>
                            </Link>
                            <Link to="/transactions" className="btn btn-success">
                                <span className="text"><h3>Transactions</h3></span>
                            </Link>
                        </section>

                    </div>
                </header>
            </div>
        );
    }
}
export default Navbar