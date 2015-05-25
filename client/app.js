'use strict';

require('angular/angular');

var endApp = angular.module('endApp', []);

require('./controllers/search_controller')(endApp);