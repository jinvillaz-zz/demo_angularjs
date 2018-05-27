/**
 * Controller for repositories management.
 */
export default class ReposListController {

    constructor($state, repositories) {
        'ngInject';
        this.$state = $state;
        this.repos = repositories;
        console.info('es', repositories);
    }
}
