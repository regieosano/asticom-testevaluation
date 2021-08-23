// Function Controllers

import customers from '../../db/db';

const findCustomerBasedOnId = (id) => {
    const customer = customers.find((customer) => {
        return customer.id === id;
    });
    return customer;
};

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

    const customer = findCustomerBasedOnId(customerId);

    if (!customer) {
        return res.status(200).send('No such customer exist!');
    }

    try {
        res.status(200).send({ data: customer });
    } catch (e) {
        console.log(error);
    }
};

exports.updateCustomer = (req, res) => {
    const customerId = req.params.id;

    const customer = findCustomerBasedOnId(customerId);

    if (!customer) {
        return res.status(200).send('No such customer exist!');
    }

    const updatedCustomer = req.body;

    const index = customers.findIndex(
        (customer) => customer.id === updatedCustomer.id
    );

    customers[index] = updatedCustomer;

    try {
        res.status(200).send('Customer was updated.');
    } catch (e) {
        console.log(error);
    }
};