/**
 * Controller for list of users.
 */
export default class UserListController {

    constructor($state, users, UserStatus) {
        'ngInject';
        this.$state = $state;
        this.users = users;
        this.UserStatus = UserStatus;
    }

    nextPage() {
        this.UserStatus.setNext();
        const page = this.UserStatus.getPage();
        this.$state.go('main.users.list', { page });
    }

    showRepositories(login) {
        console.info(login);
        this.$state.go('main.users.repositories', { user: login });
    }
}
