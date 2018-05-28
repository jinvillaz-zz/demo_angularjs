/**
 * Defines a handler for pagination.
 */
export default class ReposStatus {

    /**
     * @param {Object} ToastService is a service for handle error.
     * @param {Object} User is a service for request users.
     */
    constructor(ToastService, User) {
        'ngInject';
        this.ToastService = ToastService;
        this.User = User;
        this.initData();
    }

    /**
     * Initializes data paginate.
     */
    initData() {
        this.pagination = {
            page: 1,
            limit: 12
        };
        this.repos = null;
    }

    getPage() {
        return this.pagination.page;
    }

    /**
     * Gets paginated data.
     * @param {String} user to get repositories.
     * @return {Promise} a new promise.
     */
    nextPage(user) {
        return new Promise((resolve) => {
            console.info('user: ', user);
            return this.User.repos({
                user,
                page: this.pagination.page,
                per_page: this.pagination.limit // eslint-disable-line camelcase
            })
            .$promise
            .then((data) => {
                console.info('data: ', data);
                this.pagination.page += 1;
                this.repos = data;
                resolve(data);
            })
            .catch((err) => {
                this.ToastService.show(err);
            });
        });
    }
}
