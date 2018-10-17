import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const InputTrade = () => {
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="coinName"
                        name="coinName"
                        label="Coin name"
                        fullWidth
                        autoComplete="cname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="symbol"
                        name="symbol"
                        label="symbol"
                        fullWidth
                        autoComplete="symbol"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default InputTrade;