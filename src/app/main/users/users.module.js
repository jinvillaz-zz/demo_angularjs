import './styles.scss';

import ListController from './list/controller';
import ReposListController from './repositories/controller';
import User from './service/user';
import Repos from './service/repos';
import UserStatus from './service/users-status';
import ReposStatus from './service/repos-status';
import routes from './routes';

const module = angular.module('app.main.users', [
    'ui.router'
]);

module.controller('UserListController', ListController);
module.controller('ReposListController', ReposListController);
module.service('User', User);
module.service('Repos', Repos);
module.service('UserStatus', UserStatus);
module.service('ReposStatus', ReposStatus);
module.config(routes);

export default module;
