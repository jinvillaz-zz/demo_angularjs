/**
 * Helper service to display toasts.
 */
export default class ToastService {

    /**
     * @param {Object} $mdToast native code.
     * @param {Object} $timeout is a native angular timeout service.
     */
    constructor($mdToast, $timeout) {
        'ngInject';
        this.$mdToast = $mdToast;
        this.$timeout = $timeout;
    }

    /**
     * Hides toast notification displayed.
     */
    hideToast() {
        this.$mdToast.hide(this.lastToast);
    }

    /**
     * Cancels current toast timeout.
     */
    cancelTimeout() {
        this.$timeout.cancel(this.inProgress);
    }

    /**
     * Sets hide delay toast timer.
     */
    setHideDelay() {
        if (this.inProgress) {
            this.cancelTimeout();
        }
        this.inProgress = this.$timeout(() => {
            this.hideToast();
        }, 10000);
    }

    /**
     * Builds a preconfigured toast.
     * @param {String} message toast message to display.
     * @return {Object} configurated toast.
     */
    buildToast(message) {
        const closeMessage = 'Close';
        return this.$mdToast.simple()
            .textContent(message)
            .action(closeMessage)
            .highlightAction(true)
            .highlightClass('md-accent')
            .hideDelay(0)
            .position('top right');
    }

    /**
     * Displays a message on a toast.
     * @param {String} message toast message to display.
     */
    show(message) {
        if (!message) {
            throw new Error('message is undefined');
        }
        if (this.lastToast) {
            this.cancelTimeout();
            this.$mdToast.updateTextContent(message);
            this.setHideDelay();
            return;
        }
        this.lastToast = this.buildToast(message);
        this.$mdToast.show(this.lastToast).then(() => {
            this.lastToast = null;
        });
        this.setHideDelay();
    }
}
