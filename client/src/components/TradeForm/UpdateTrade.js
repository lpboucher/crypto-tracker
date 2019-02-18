import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { enterTradeDetails } from '../../ducks/trades';

import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/MoreHorizRounded';

class UpdateTrade extends Component {
    render() {
        const { enterTradeDetails, trade } = this.props;
        return (
            <Fragment>
                <Button 
                    color="secondary"
                    align="left"
                    onClick={() => enterTradeDetails(trade)}
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
        enterTradeDetails: (trade) => dispatch(enterTradeDetails(trade)),
    };
}

export default connect(null, mapDispatchToProps)(UpdateTrade);