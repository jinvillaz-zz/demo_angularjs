import './styles.scss';

export default class MainController {

    constructor($mdSidenav, $state, UserStatus) {
        'ngInject';
        this.$mdSidenav = $mdSidenav;
        this.$state = $state;
        this.UserStatus = UserStatus;
        const page = this.UserStatus.getPage();
        this.$state.go('main.users.list', { page });
    }

    /**
     * Displays or close left side navigator.
     */
    toggleLeft() {
        this.$mdSidenav('left').toggle();
    }

    /**
     * Changes routes
     * @param {String} clickEvent event's name
     */
    changeRoute(clickEvent) {
        switch (clickEvent) {
        case 'users': {
            const page = this.UserStatus.getPage();
            this.$state.go('main.users.list', { page });
            break;
        }
        default:
            console.info('Event not supported.');
        }
        this.toggleLeft();
    }
}
