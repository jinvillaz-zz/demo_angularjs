/**
 * Defines route path for having ordered views.
 * @param {Object} $stateProvider angular native code.
 */
export default function routerConfig($stateProvider) {
    'ngInject';
    $stateProvider
    .state('main.users', {
        abstract: true,
        template: require('./index.html')
    })
    .state('main.users.list', {
        url: 'users/page/:page',
        views: {
            'container@main.users': {
                template: require('./list/index.html'),
                controller: 'UserListController',
                controllerAs: 'userListCtrl'
            }
        },
        resolve: {
            users: ($stateParams, UserStatus, ToastService) => {
                'ngInject';
                UserStatus.setPage($stateParams.page);
                return UserStatus.getData()
                .catch((err) => {
                    ToastService.show(err);
                });
            }
        }
    })
    .state('main.users.repositories', {
        url: 'users/:user/repositories/page/:pagerepo',
        views: {
            'container@main.users': {
                template: require('./repositories/index.html'),
                controller: 'ReposListController',
                controllerAs: 'reposListCtrl'
            }
        },
        resolve: {
            repositories: ($stateParams, ReposStatus, ToastService) => {
                'ngInject';
                ReposStatus.setUser($stateParams.user);
                ReposStatus.setPage($stateParams.pagerepo);
                return ReposStatus.getData()
                .catch((err) => {
                    ToastService.show(err);
                });
            }
        }
    });
}
