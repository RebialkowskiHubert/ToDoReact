import { carsApiUrl } from './routes';
import * as api from './api';

export const get = vin =>
    api.get(carsApiUrl(vin));

export const create = params => {
    api.post(carsApiUrl(), params);
}