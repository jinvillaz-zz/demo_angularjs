/**
 * Defines Repositories by user resource from REST API
 */
export default class ReposApi {

    /**
     * @param {Function} $resource function for rest api.
     * @returns {*} return object for request to api.
     */
    constructor($resource) {
        'ngInject';
        const url = `https://api.github.com/users`;

        return $resource(`${url}/:user/repos`, {
            user: '@user'
        }, {
            query: {
                isArray: true
            }
        });
    }
}
