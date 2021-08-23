import apiClaudia from '../claudia-routes/customer';
import customerController from './controllers/customer';

// CRUD CLAUDIA APIs
apiClaudia.get('/customers', customerController.getCustomers);
apiClaudia.post('/customers', customerController.postCustomers);
apiClaudia.get('/customers/:id', customerController.getCustomer);
apiClaudia.put('/customers/:id', customerController.updateCustomer);
apiClaudia.delete('/customers/:id', customerController.deleteCustomer);