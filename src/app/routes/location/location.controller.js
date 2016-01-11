var _ = require('lodash');
require('angular');

module.exports = angular.module('guru-location-controller-module', [])
    .controller('locationController', [ function (menuService) {
        var ctrl = this;
        ctrl.section = "location";

        /*	setting the flags for XML generator summary on the Menu service
         and the section name to be shown and to be navigated to in regard to Location.
        */
        function _activate() {
            menuService.setSectionName(ctrl.section);
            menuService.setParentMenu('location');
            menuService.setIsGenerateSummaryAllowed(true);
        }

        _activate();

        function downloadUpdateDetails() {
            console.log("update");
        }

        function downloadInsertDetails() {
            console.log("insert");
        }

        function downloadDeleteDetails() {
            console.log("delete");
        }

        _.extend(ctrl, {
            downloadUpdateDetails: downloadUpdateDetails,
            downloadInsertDetails: downloadInsertDetails,
            downloadDeleteDetails: downloadDeleteDetails

        });

}]);