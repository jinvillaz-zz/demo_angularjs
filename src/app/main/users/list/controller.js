/**
 * Controller for list of users.
 */
export default class UserListController {

    constructor($state, users, UserStatus, ReposStatus, ToastService) {
        'ngInject';
        this.$state = $state;
        this.users = users;
        this.UserStatus = UserStatus;
        this.ReposStatus = ReposStatus;
        this.ToastService = ToastService;
    }

    previousPage() {
        this.UserStatus.setPrevious();
        const page = this.UserStatus.getPage();
        this.$state.go('main.users.list', { page });
    }

    nextPage() {
        this.UserStatus.setNext();
        let page = this.UserStatus.getPage();
        this.UserStatus.getData()
        .then((data) => {
            if (data.length < 1) {
                this.UserStatus.setPrevious();
                page = this.UserStatus.getPage();
            }
            this.$state.go('main.users.list', { page });
        })
        .catch((err) => {
            this.ToastService.show(err);
        });
    }

    showRepositories(login) {
        const pagerepo = this.ReposStatus.getPage();
        this.$state.go('main.users.repositories', { user: login, pagerepo });
    }
}
