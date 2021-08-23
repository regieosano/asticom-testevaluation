// Function Controllers

import customers from '../../db/db';

exports.getCustomers = (req, res) => {
    try {
        res.status(200).send({ data: customers });
    } catch (e) {
        console.log(error);
    }
};

exports.postCustomers = (req, res) => {
    try {
        const newCustomer = req.body;
        customers.push(newCustomer);
        res.status(200).send('New Customer Added');
    } catch (e) {
        console.log(error);
    }
};