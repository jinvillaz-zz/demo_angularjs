import 'angular-material/angular-material.css';
import 'angular-material-icons/angular-material-icons.css';
import '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material-icons';
import 'angular-messages';
import 'angular-resource';
import 'angular-sanitize';

const thirdPartyModules = angular.module('thirdPartyModules', [
    'ui.router',
    'ngMaterial',
    'ngResource',
    'ngMessages',
    'ngMdIcons',
    'ngSanitize'
]);

export default thirdPartyModules;
