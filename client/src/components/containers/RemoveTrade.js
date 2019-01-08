import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { removeTrade } from '../../actions';

import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';

class RemoveTrade extends Component {
    render() {
        const { removeTrade, tradeId } = this.props;
        return (
            <Fragment>
                <Button 
                    onClick={() => removeTrade(tradeId)}
                    variant="contained"
                    size="small"
                    color="secondary"
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