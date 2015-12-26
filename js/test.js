	app.controller('test',function($scope,$http,$routeParams){
		console.log("test---！");
		console.log(URL.upload);
		var url="http://127.0.0.1:8090/studys/util";
		$scope.ceshi=function(){
			$http.get(url).success(function(data) {
				$scope.data=data;
              console.log(data);
            }).error(function(error){
            	console.log(error);
        	});
       }
	})
	.controller('tags', function($scope, $http) {
	  $scope.tags = [
	    { text: 'Tag1' },
	    { text: 'Tag2' },
	    { text: 'Tag3' }
	  ];
	
	  $scope.tags1 = ['Tag 1', 'Tag 2'] 
	
	
	  
	  $scope.superheroes = [
	    'Batman', 
	    'Superman', 
	    'Flash', 
	    'Iron Man', 
	    'Hulk', 
	    'Wolverine', 
	    'Green Lantern', 
	    'Green Arrow', 
	    'Spiderman'
	  ];
	  
	  $scope.log = [];
	   
	  $scope.loadSuperheroes = function(query) {
	    // An arrays of strings here will also be converted into an
	    // array of objects
	    return $http.get('superheroes.json');
	  };
	  
	  $scope.tagAdded = function(tag) {
	    console.log(tag.text);
	    $scope.log.push('Added: ' + tag.text);
	  };
	  
	  $scope.tagRemoved = function(tag) {
	    console.log(tag.text);
	    $scope.log.push('Removed: ' + tag.text);
	  };
	});