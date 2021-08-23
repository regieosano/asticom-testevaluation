// Function Controllers

import customers from '../../db/db';

exports.getCustomers = (req, res) => {
    try {
        res.status(200).send({ data: customers });
    } catch (e) {
        console.log(error);
    }
};