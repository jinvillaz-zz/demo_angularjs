/**
 * Controller for repositories management.
 */
export default class ReposListController {

    constructor($state, repositories, ReposStatus, ToastService) {
        'ngInject';
        this.$state = $state;
        this.repos = repositories;
        this.ReposStatus = ReposStatus;
        this.ToastService = ToastService;
        this.user = this.ReposStatus.getUser();
    }

    previousPage() {
        this.ReposStatus.setPrevious();
        const login = this.ReposStatus.getUser();
        const pagerepo = this.ReposStatus.getPage();
        this.$state.go('main.users.repositories', { user: login, pagerepo });
    }

    nextPage() {
        this.ReposStatus.setNext();
        const login = this.ReposStatus.getUser();
        let pagerepo = this.ReposStatus.getPage();
        this.ReposStatus.getData()
        .then((data) => {
            if (data.length < 1) {
                this.ReposStatus.setPrevious();
                pagerepo = this.ReposStatus.getPage();
                this.ToastService.show('There aren\'t more pages');
            }
            this.$state.go('main.users.repositories', { user: login, pagerepo });
        })
        .catch((err) => {
            this.ToastService.show(err);
        });
    }
}
