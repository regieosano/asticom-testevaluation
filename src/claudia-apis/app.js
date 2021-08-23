import apiClaudia from '../claudia-routes/customer';
import customerController from './controllers/customer';

apiClaudia.get('/customers', customerController.getCustomers);