import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

const Landing = () => {
    return (
        <Fragment>
            <Button variant="contained" color="secondary" align="center"><a href="/auth/google">Login</a></Button>
        </Fragment>
    );
};

export default Landing;