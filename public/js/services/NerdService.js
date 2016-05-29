/**
 * Created by Ali on 2016-05-28.
 */

angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    return{
        getNerd:getNerd,
        createNerd:createNerd,
        deleteNerd:deleteNerd
    };

    function getNerd(){
        return $http.get('/api/nerds');
    }

    function createNerd(nerdData){
        return $http.post('/api/nerds' + nerdData);
    }

    function deleteNerd(id){
        return $http.delete('/api/nerds' + id);
    }
}]);
