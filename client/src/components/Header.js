import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (<a href="/auth/google">Login</a>);
            default:
                return (<a href="/auth/logout">Logout</a>);
        }
    }

    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography style={{ flex: 1 }} />
                            <Button variant="contained" color="secondary" align="right">{this.renderContent()}</Button> 
                    </Toolbar>  
                </AppBar>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);