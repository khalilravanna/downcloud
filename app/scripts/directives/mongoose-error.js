'use strict';

angular.module('downcloudApp')

.directive('mongooseError', [function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: ['scope', 'element', 'attrs', 'ngModel', function (scope, element, attrs, ngModel) {
			element.on('keydown', function () {
				return ngModel.$setValidity('mongoose', true);
			});
		}]
	};
}]);