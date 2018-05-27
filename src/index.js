import './index.scss';
import angular from 'angular';
import thirdPartyModule from './app/third-party.module';
import main from './app/main/main.module';
import services from './app/services/services.module';
import routesConfig from './routes';

const giHubModule = angular.module('app', [
    services.name,
    thirdPartyModule.name,
    main.name
]);

giHubModule
.config(routesConfig);
