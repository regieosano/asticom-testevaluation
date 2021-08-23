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

exports.getCustomer = (req, res) => {
    const customerId = req.params.id;
    const customer = customers.find((customer) => {
        return customer.id === customerId;
    });

    if (!customer) {
        return res.status(200).send('No such customer exist!');
    }

    try {
        res.status(200).send({ data: customer });
    } catch (e) {
        console.log(error);
    }
};