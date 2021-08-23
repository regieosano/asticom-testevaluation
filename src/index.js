import express from 'express';

import customerController from './claudia-apis/controllers/customer';

const server = express();

const router = express.Router();

const PORT = 5555;

const routeGetCustomers = router.get(
    '/customers',
    customerController.getCustomers
);

// Test Claudia Routes Locally
server.use('/api-test/claudia', routeGetCustomers);

server.listen(5555, () => {
    console.log(`Server is listening on port 5555`);
});