import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { openDrawer, closeDrawer } from '../../actions';

import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/MoreHorizRounded';

class UpdateTrade extends Component {
    render() {
        const { openDrawer } = this.props;
        return (
            <Fragment>
                <Button 
                    color="secondary"
                    align="left"
                    onClick={openDrawer}
                >
                    <UpdateIcon />
                </Button>
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //removeTrade: (id) => dispatch(removeTrade(id)),
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer()),
    };
}

export default connect(null, mapDispatchToProps)(UpdateTrade);