import client from '../utils/ApiClient';
import emitter from '../utils/EventEmitter';
import Utility from '../utils/Utility';
const Event = new emitter();
const ApiClient = new client();


import BasePage from './BasePage';
export { Event, ApiClient, Utility, BasePage };