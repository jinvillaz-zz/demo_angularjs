import ToastService from './toast.service';

const servicesModule = angular.module('app.services', []);
servicesModule.service('ToastService', ToastService);

export default servicesModule;
