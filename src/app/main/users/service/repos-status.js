/**
 * Defines a handler for pagination.
 */
export default class ReposStatus {

    /**
     * @param {Object} ToastService is a service for handle error.
     * @param {Object} Repos is a service for request users.
     */
    constructor(ToastService, Repos) {
        'ngInject';
        this.ToastService = ToastService;
        this.Repos = Repos;
        this.initData();
    }

    /**
     * Initializes data paginate.
     */
    initData() {
        this.user = '';
        this.pagination = {
            page: 1,
            limit: 8
        };
        this.repos = null;
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
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

    setPrevious() {
        this.pagination.page -= 1;
        if (this.pagination.page < 1) {
            this.pagination.page = 1;
        }
    }

    /**
     * Gets paginated data.
     * @return {Promise} a new promise.
     */
    getData() {
        return new Promise((resolve) => {
            return this.Repos.query({
                user: this.user,
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
