function validate(values) { 
    const errors = {};

    if(!values.symbol) {
        errors.symbol = 'A symbol is required';
    }

    if(!values.coinName) {
        errors.coinName = 'A coin is required';
    }

    if(!values.type) {
        errors.type = 'Select transaction type';
    } else if (values.type === 'Buy' && parseFloat(values.quantity) <= 0) {
        errors.quantity = 'Quantity should be positive...';
    } else if (values.type === 'Sell' && parseFloat(values.quantity) >= 0) {
        errors.quantity = 'Quantity should be negative...'; 
    }

    if(!values.quantity) {
        errors.quantity = 'A quantity is required';
    } else if (isNaN(Number(values.quantity))) {
        errors.quantity = 'Quantity should be a number...';
    }

    if(!values.price_amount) {
        errors.price_amount = 'A price is required'
    } else if (isNaN(Number(values.price_amount))) {
        errors.price_amount = 'Price should be a number...';
    } else if (parseFloat(values.price_amount) <= 0) {
        errors.price_amount = 'Price should be positive';
    }

    if(!values.price_currency) {
        errors.price_currency = 'A currency is required'
    }

   return errors;
   }

export default validate;