(function() {
    'use strict';
    angular
        .module('fleetApp')
        .factory('Traccar', Traccar);

    Traccar.$inject = ['$resource', 'DateUtils'];

    function Traccar ($resource, DateUtils) {
        var resourceUrl =  'api/traccar/:id';

        return $resource(resourceUrl, {}, {
            'importDevices': { method:'GET', url: 'api/traccar/importDevices' }
        });
    }
})();
