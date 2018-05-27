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
        url: 'users/:page',
        views: {
            'container@main.users': {
                template: require('./list/index.html'),
                controller: 'UserListController',
                controllerAs: 'userListCtrl'
            }
        },
        resolve: {
            users: (UserPaginate, ToastService) => {
                'ngInject';
                return UserPaginate.nextPage()
                .catch((err) => {
                    ToastService.show(err);
                });
            }
        }
    })
    .state('main.users.list.repositories', {
        url: 'users/:user/repositories',
        views: {
            'preview@main.users': {
                template: require('./repositories/index.html'),
                controller: 'ReposListController',
                controllerAs: 'reposListCtrl'
            }
        },
        resolve: {
            repositories: ($stateParams, ReposPaginate, ToastService) => {
                'ngInject';
                return ReposPaginate.nextPage($stateParams.user)
                .catch((err) => {
                    ToastService.show(err);
                });
            }
        }
    });
}
