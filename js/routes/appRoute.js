var app=angular.module("study", ['ngRoute','ngFileUpload','ngTagsInput']);

app.config(['$routeProvider',function ($routeProvider) {  
    $routeProvider  
        .when('/list', {  
            templateUrl: 'views/edit.html'
        })  
        .when('/list/:id', {  
            templateUrl: 'views/list.html',  
            //controller: 'RouteDetailCtl'  
        })  
        .when('/upload', {  
            templateUrl: 'views/imageUpload.html',  
            //controller: 'RouteDetailCtl'  
        })  
        .when('/rest', {  
            templateUrl: 'views/rest.html',  
            //controller: 'RouteDetailCtl'  
        }) 
        .when('/test', {  
            templateUrl: 'views/test.html',  
            //controller: 'RouteDetailCtl'  
        }) 
        .when('/ngtags', {  
            templateUrl: 'views/ngtags.html',  
            //controller: 'RouteDetailCtl'  
        }) 
        .when('/study', {  
            templateUrl: 'views/study.html',  
            //controller: 'RouteDetailCtl'  
        })
        .when('/sortable', {
            templateUrl: 'views/sortable.html',  
            //controller: 'RouteDetailCtl'  
        }) 
        .otherwise({  
            redirectTo: '/list'  
        });  
}]);
