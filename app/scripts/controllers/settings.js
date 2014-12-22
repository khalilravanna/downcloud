'use strict';

angular.module('findieApp')
.controller('SettingsCtrl', [
	'$scope', 'User', '$http', 'SocialLink',
function (
	$scope, User, $http, SocialLink
) {
	$scope.errors = {};

	$scope.user = $scope.currentUser;

	$scope.updateProfile = function () {
		console.log('sup m8');
	};

	$scope.addSocialLink = function (socialLink) {
		var parsedSocialLink = new SocialLink(socialLink);

		User.addSocialLink(parsedSocialLink);
	};

	$scope.removeSocialLink = function (socialLink) {
		User.removeSocialLink(socialLink);
	}

	// $scope.changePassword = function (form) {
	// 	$scope.submitted = true;

	// 	if (form.$valid) {
	// 		User.changePassword($scope.user.oldPassword, $scope.user.newPassword).then(function () {
	// 			$scope.message = 'Password successfully changed.';
	// 		}).catch(function () {
	// 			form.password.$setValidity('mongoose', false);
	// 			$scope.errors.other = 'Incorrect password';
	// 		});
	// 	}
	// };
}]);
