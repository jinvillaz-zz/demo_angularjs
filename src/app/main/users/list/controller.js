/**
 * Controller for list of users.
 */
export default class UserListController {

    constructor($state, users, UserPaginate) {
        'ngInject';
        this.$state = $state;
        this.users = users;
        this.UserPaginate = UserPaginate;
    }

    nextPage() {
        this.UserPaginate.setNext();
        const page = this.UserPaginate.getPage();
        this.$state.go('main.users.list', { page });
    }

    showRepositories(login) {
        console.info(login);
        this.$state.go('main.users.repositories', { user: login });
    }
}
