import './styles.scss';
import users from './users/users.module';
import MainController from './controller';

const mainModule = angular.module('app.main', [
    users.name
]);

mainModule.controller('MainController', MainController);

export default mainModule;
