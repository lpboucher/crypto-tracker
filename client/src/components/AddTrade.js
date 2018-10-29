import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitTrade } from '../actions';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import InputTrade from './InputTrade';

const styles = () => ({
    button: {
        position: "fixed",
        right: 20,
        bottom: 20,
    },
    modal: {
        position: "fixed",
        left: '25%',
        top: '25%',
        width: '50%',
        height: '50%',
        backgroundColor: 'white',
        padding: 20
    }
})

class AddTrade extends Component {
    state = {
        open: false,
      };
    
    handleOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    render() {
        const { classes, submitTrade } = this.props;
        return (
            <Fragment>
                <Button onClick={this.handleOpen} variant="fab" className={classes.button} color="secondary">
                    <AddIcon />
                </Button>
                <Modal open={this.state.open} onClose={this.handleClose}>
                    <div className={classes.modal}>
                        <InputTrade onSubmit={submitTrade} />
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitTrade: (trade) => dispatch(submitTrade(trade))
    };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddTrade));