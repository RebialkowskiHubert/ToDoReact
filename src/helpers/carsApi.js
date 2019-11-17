import { carsApiUrl } from './routes';
import * as api from './api';

export const getAll = vin =>
    api.get(carsApiUrl(vin));