import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { removeTrade } from '../../actions';

import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/RemoveCircle';

class RemoveTrade extends Component {
    render() {
        const { removeTrade, tradeId } = this.props;
        return (
            <Fragment>
                <Button 
                    onClick={() => removeTrade(tradeId)}
                    color="secondary"
                    align="left"
                >
                    <RemoveIcon />
                </Button>
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeTrade: (id) => dispatch(removeTrade(id)),
    };
}

export default connect(null, mapDispatchToProps)(RemoveTrade);