import express from 'express';

import customerController from './claudia-apis/controllers/customer';

const server = express();

const router = express.Router();

const BASE_URL = '/api-test/claudia';

const PORT = 5555;

// Body parser
server.use(express.json());

// Store the ROUTES AND FUNCTION CONTROLLERS for Testing
const routeGetCustomers = router.get(
    '/customers',
    customerController.getCustomers
);
const routePostCustomers = router.post(
    '/customers',
    customerController.postCustomers
);
const routeGetCustomer = router.get(
    '/customers/:id',
    customerController.getCustomer
);

// Test Claudia Routes Locally
server.use(BASE_URL, routeGetCustomers);
server.use(BASE_URL, routePostCustomers);
server.use(BASE_URL, routeGetCustomer);

server.use((req, res) => {
    res
        .status(404)
        .send('Unable to find the requested resource! Check URL Address.');
});

server.listen(5555, () => {
    console.log(`Server is listening on port 5555`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});