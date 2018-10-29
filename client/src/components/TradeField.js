import React, { Fragment } from 'react';

export default ({ input, label, meta: { error, touched} }) => {
    return (
        <Fragment>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}}/>
            <div className="red-text" style={{ marginBottom: '20px'}}>
            { touched && error }
            </div>
        </Fragment>
    );
};