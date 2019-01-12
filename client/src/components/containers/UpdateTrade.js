import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/MoreHorizRounded';

class UpdateTrade extends Component {
    render() {
        return (
            <Fragment>
                <Button 
                    color="secondary"
                    align="left"
                >
                    <UpdateIcon />
                </Button>
            </Fragment>
        );
    }
}

/*function mapDispatchToProps(dispatch) {
    return {
        removeTrade: (id) => dispatch(removeTrade(id)),
    };
}*/

export default connect(null, null)(UpdateTrade);