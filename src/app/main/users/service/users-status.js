/**
 * Defines a handler for pagination.
 */
export default class UserStatus {

    /**
     * @param {Object} $stateParams is a service to get params in url.
     * @param {Object} ToastService is a service for handle error.
     * @param {Object} User is a service for request users.
     */
    constructor($stateParams, ToastService, User) {
        'ngInject';
        this.$stateParams = $stateParams;
        this.ToastService = ToastService;
        this.User = User;
        this.initData();
    }

    /**
     * Initializes data paginate.
     */
    initData() {
        this.pagination = {
            page: this.$stateParams.page || 1,
            limit: 12
        };
    }

    setPage(page) {
        this.pagination.page = parseInt(page) || 1;
    }

    getPage() {
        return this.pagination.page;
    }

    setNext() {
        this.pagination.page += 1;
    }

    /**
     * Gets paginated data.
     * @return {Promise} a new promise.
     */
    getData() {
        return new Promise((resolve) => {
            return this.User.query({
                page: this.pagination.page,
                per_page: this.pagination.limit // eslint-disable-line camelcase
            })
            .$promise
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                this.ToastService.show(err);
            });
        });
    }
}
