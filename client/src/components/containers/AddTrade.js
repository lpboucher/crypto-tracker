import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { enterTradeDetails } from '../../ducks/trades';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class AddTrade extends Component {
    render() {
        const { enterTradeDetails } = this.props;
        return (
            <Fragment>
                <Button 
                    onClick={() => enterTradeDetails(null)}
                    variant="fab"
                    style={{position: "fixed", right: 20, bottom: 20}}
                    color="secondary"
                >
                    <AddIcon />
                </Button>
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        enterTradeDetails: (trade) => dispatch(enterTradeDetails(trade)),
    };
}

export default connect(null, mapDispatchToProps)(AddTrade);