import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case false:
                return (<li><a href="/auth/google">Login</a></li>);
            default:
                return (<li><a href="/auth/logout">Logout</a></li>);
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);