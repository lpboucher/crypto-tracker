import React, { Component, Fragment } from 'react';
import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
    state = {
        tab: 0,
    };

    handleTabChange = (event, value) => {
        this.setState({ tab: value });
      };

    render() {
        const { tab } = this.state;
        return (
            <Fragment>
                <DashboardComponent 
                    activeTab={tab}
                    handleTabChange={this.handleTabChange}
                />
            </Fragment>
        );
    }
}

export default DashboardContainer;