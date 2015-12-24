 	app.controller('testCtrl',function($scope,$http,$routeParams){
		console.log("main加载！");
	})
 	
 	.controller('sortable',function($scope,$http,$timeout,$httpParamSerializer){
 		var url="http://localhost:8080/qyhaomarket/category/ceshi";
 		var sortable=$( "#sortable" );
		sortable.sortable();
//  	$( "#sortable" ).disableSelection();
//		var sort=sortable( sortable , "id"); 
//		console.log(sort);
		sortable.sortable({ stop: function(event, ui) { 
			console.log(event);
			//console.log($(".sort").attr("id"));
			var len=document.getElementsByClassName("sort");
			var t=new Array();
			for(var i=0;i<len.length;i++){
				var id=len[i].getAttribute("id");
				t[i]=id;
//				console.log(id);
			}
			$http.get(url+"?sort="+t).success(function(data) {
              console.log(data);
            }).error(function(error){
            	console.log(error);
            });
			console.log(t);
//			console.log(len);
		} });
 		
	})
 	
 	
 	.controller('study',function($scope,$http,$timeout,$httpParamSerializer){
 		var url="http://127.0.0.1:8088/studys/util";
 		$scope.book={};
 		
 		$scope.Utilget=function(){
			$http.get(url+"/list").success(function(data) {
				$scope.data=data;
              console.log(data);
            }).error(function(error){
            	console.log(error);
            });
		}
 		
		$scope.studyUtil=function(){
			var oldTime=new Date();
			
			$scope.book.title="java and Grails";
			$http({
				url :url,
				method :"post",
				data :$httpParamSerializer($scope.book),
				//params:{"title":"woshixiaobao"},params这个参数会把参数添加到URL后面
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}) 
			.success(function(data,status){
				$scope.data=data;
				var newTime=new Date();
				console.log(newTime-oldTime);
				console.log(data);
			}).error(function(error){
				console.log(error);
			}); 
		}
	})
 	
 	
 	.controller('image',function($scope,$http,$timeout,Upload){
		console.log("image！");
		
		$scope.ceshi=function(){

	    	$http.get("http://127.0.0.1:8080/studys/util/order").success(function(data){
	    		$scope.data=data;
	    	})
		}
		$scope.upload = function (files,ngName,index) {
			console.log(ngName);

		        if (files && files.length) {
		            for (var i = 0; i < files.length; i++) {
		                var file = files[i];
		                console.log(file);
		                Upload.upload({
		                    url: "http://127.0.0.1:8088/api/util/file/upload",
		                   // fields: {'username': $scope.username},
		                    file: file,
		                    fileFormDataName: 'myFile'
		                }).progress(function (evt) {
		                    //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
		                    //console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
		                }).success(function (data, status, headers, config) {
		                	$timeout(function() {
		                    	var imgJson = angular.fromJson(data);
		                    	console.log(imgJson);
		                    	if(ngName=='logo')$scope.qyhao.logo = imgJson.fileUrl;
		                    	if(ngName=='img')$scope.qyhao.img = imgJson.fileUrl;
		       
		                    });
		                }).error(function (data, status, headers, config) {
		                    console.log('error status: ' + status);
		                })
		            }
		        }
		    };
		    
		    $scope.urlStr = function(tempurl){
		    	if(tempurl && tempurl!=null){
			    	if(tempurl.indexOf('/temp/')>-1){
			    		tempurl = "http://127.0.0.1:8080/"+tempurl.substring(tempurl.indexOf('/temp/'),tempurl.length);
			    	}else tempurl = API_PATH+tempurl;
		    	}else{
		    	}
		    	return tempurl;
		    }
	})
 	
 	.controller('rest',function($scope,$http,$routeParams){
		console.log("----------------！");
		$scope.data="";
		var url="http://127.0.0.1:8090/studys/book";
		
		
		$scope.getTest=function(){
			$http.get(url).success(function(data) {
				$scope.data=data;
              console.log(data);
            }).error(function(error){
            	console.log(error);
            });
		}
		
		$scope.putTest=function(){
			$http.put(
				url+"/2", 
				{"title":"wwwwwwwwwwwwww"}
			).success(function(data){
				$scope.data=data;
				console.log(data);
			}).error(function(error){
				console.log(error);
			});
		}
		
		$scope.postTest=function(){
			$http({
					url :url,
					method :"post",
					data :{"title":"hahahahah"}
					//params:{"title":"woshixiaobao"},params这个参数会把参数添加到URL后面
				}) 
				.success(function(data,status){
					$scope.data=data;
					console.log(data);
				}).error(function(error){
					console.log(error);
				}); 
		}
		
		$scope.deleteTest=function(){
			$http.delete(url+"/3").success(function(data){
				$scope.data=data;
				console.log(data);
			}).error(function(error){ 
				console.log(error);
			});
		}
		
		$scope.getindex=function(){
			$http.get(url).success(function(data) {
				$scope.data=data;
              console.log(data);
            }).error(function(error){
            	console.log(error);
            });
		}
		
		$scope.getcreate=function(){
			$http.get(url+"/create").success(function(data) {
				$scope.data=data;
              console.log(data);
            }).error(function(error){
            	console.log(error);
            });
		}
		
		$scope.postsave=function(){
			$http({
					url :url,
					method :"post",
					data :{"title":"hahahahah"}
					//params:{"title":"woshixiaobao"},params这个参数会把参数添加到URL后面
				}) 
				.success(function(data,status){
					$scope.data=data;
					console.log(data);
				}).error(function(error){
					console.log(error);
				}); 
		}
		
		$scope.getshow=function(){
			$http.get(url+"/1").success(function(data) {
				$scope.data=data;
              console.log(data);
            }).error(function(error){
            	console.log(error);
            });
		}
		
		
		$scope.atoken=function(){
			$http.get("http://beta.open.an360.cn/api/auth/app").success(function(data) {
				$scope.data=data;
              console.log(data);
            }).error(function(error){
            	console.log(error);
            });
		}
		
		$scope.setHeader=function(){
			$http({
					url :"http://127.0.0.1:8090/studys/image/list",
					method :"post",
					//headers:{"hh":"hh"}
					data :{"title":"hahahahah"}
					//params:{"title":"woshixiaobao"},params这个参数会把参数添加到URL后面
				}) 
				.success(function(data,status){
					//$scope.data=data;
					console.log(data);
				}).error(function(error){
					console.log(error);
				});
		}
		
		$scope.ceshi=function(){
	        var tt="woshixiaobao小宝";
	        $http.get("http://127.0.0.1:8084/api/book?title=ejfeo&content="+tt).success(function(data) {
	             console.log(data);
	        });
	    }

      $scope.ceshipost=function(){
      	var data={};
      	//data.userId="123";
      	data.username="xiaobao";
      	data.password="123456";
        $http({
          url:"http://127.0.0.1:8084/api/login",
          //url:"http://127.0.0.1:8080/qyhaomarket/goods/ceshi",
          method:"post",
          data:$.param(data),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }) 
        .success(function(data,status){
          console.log(data);
        }); 
      }
      
      $scope.ceshiput=function(){
      	var data={};
      	data.title="www.baidu.com";
			$http.put(
				"http://127.0.0.1:8084/api/login", 
				$.param(data)
			).success(function(data){
				$scope.data=data;
				console.log(data);
			}).error(function(error){
				console.log(error);
			});
		}
      
      $scope.ceshidelete=function(){
      	var data={};
      	data.userId="2";
			$http.delete(
				"http://127.0.0.1:8084/api/login",
				$.param(data)
				).success(function(data){
				$scope.data=data;
				console.log(data);
			}).error(function(error){ 
				console.log(error);
			});
		}
      
		
	});
	
 

    
    	