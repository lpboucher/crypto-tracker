import * as React from "react";
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const withLoading = WrappedComponent => {
  class LoadingScreen extends React.PureComponent {
    render() {
      if (this.props.isLoading) return <CircularProgress />
      return <WrappedComponent {...this.props} />;
    }
  };

  function mapStateToProps(state) {
    return { 
        isLoading: state.views.isLoading,
    };
  };

  return connect(mapStateToProps)(LoadingScreen);
};

export default withLoading;