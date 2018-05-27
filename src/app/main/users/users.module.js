import './styles.scss';

import ListController from './list/controller';
import User from './service/user';
import UserPaginate from './service/paginate';
import ReposPaginate from './service/repositories';
import routes from './routes';

const module = angular.module('app.main.users', [
    'ui.router'
]);

module.controller('UserListController', ListController);
module.service('User', User);
module.service('UserPaginate', UserPaginate);
module.service('ReposPaginate', ReposPaginate);
module.config(routes);

export default module;
