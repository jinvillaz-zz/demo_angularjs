/**
 * Defines a handler for pagination.
 */
export default class UserPaginate {

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
        this.users = null;
    }

    getPage() {
        return this.pagination.page;
    }

    /**
     * Gets paginated data.
     * @return {Promise} a new promise.
     */
    nextPage() {
        return new Promise((resolve) => {
            /* const users = [
                {
                    login: 'jin1',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '1'
                },
                {
                    login: 'jin2',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '2'
                },
                {
                    login: 'jin3',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '3'
                },
                {
                    login: 'jin4',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '4'
                },
                {
                    login: 'jin5',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '5'
                },
                {
                    login: 'jin6',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '6'
                },
                {
                    login: 'jin1',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '1'
                },
                {
                    login: 'jin2',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '2'
                },
                {
                    login: 'jin3',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '3'
                },
                {
                    login: 'jin4',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '4'
                },
                {
                    login: 'jin5',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '5'
                },
                {
                    login: 'jin6',
                    html_url: 'https://www.google.com/', // eslint-disable-line camelcase
                    repos: '6'
                }
            ];
            this.users = users;
            resolve(users); */
            console.info(this.pagination.page);
            return this.User.query({
                page: this.pagination.page,
                per_page: this.pagination.limit // eslint-disable-line camelcase
            })
            .$promise
            .then((data) => {
                this.pagination.page += 1;
                this.users = data;
                resolve(data);
            })
            .catch((err) => {
                this.ToastService.show(err);
            });
        });
    }
}
