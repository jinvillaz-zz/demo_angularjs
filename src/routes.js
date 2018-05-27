export default routesConfig;

/**
 * Defines route path for having ordered views.
 * @param {Object} $stateProvider angular native code.
 * @param {Object} $urlRouterProvider angular native code.
 * @param {Object} $httpProvider angular native code.
 */
function routesConfig($stateProvider, $urlRouterProvider, $httpProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');
    $httpProvider.defaults.headers.common.Authorization = 'bearer ' +
        'a6be589b3316edb2855589ab1e7d35c4e16dab68';
    $stateProvider
    .state('main', {
        url: '/',
        template: require('./app/main/index.html'),
        controller: 'MainController',
        controllerAs: 'main'
    });
}
