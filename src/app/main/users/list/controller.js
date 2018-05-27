/**
 * Controller for users management.
 */
export default class UserListController {

    constructor($state, users, UserPaginate) {
        'ngInject';
        this.$state = $state;
        this.users = users;
        this.UserPaginate = UserPaginate;
        console.info('es', users);
    }

    nextPage() {
        const page = this.UserPaginate.getPage();
        this.$state.go('main.users.list', { page });
    }

    showRepositories(login) {
        console.info(login);
        this.$state.go('main.users.list.repositories', { user: login });
    }
}
