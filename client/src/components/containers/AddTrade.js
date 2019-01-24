import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class AddTrade extends Component {
    render() {
        const { openDrawer } = this.props;
        return (
            <Fragment>
                <Button 
                    onClick={openDrawer}
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
        openDrawer: () => dispatch(openDrawer()),
    };
}

export default connect(null, mapDispatchToProps)(AddTrade);