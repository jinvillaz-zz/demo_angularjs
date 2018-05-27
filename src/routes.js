export default routesConfig;

/**
 * Defines route path for having ordered views.
 * @param {Object} $stateProvider angular native code.
 * @param {Object} $urlRouterProvider angular native code.
 */
function routesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
        url: '/',
        template: require('./app/main/index.html'),
        controller: 'MainController',
        controllerAs: 'main'
    });
}
