var API_PATH = "";
var LOCAL_PATH = "http://127.0.0.1:8088/stuapi";
var READ_IMAGE="http://127.0.0.1:8008";//图片服务
var CESHI="http://127.0.0.1:8088/api/data/callback";
var WX_TOKEN="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx01fbb1d7caa7e7a6&secret=d4624c36b6795d1d99dcf0547af5443d";
var URL_SPRING="http://127.0.0.1:8089/Gift/role/json";
var URL_SPRINT_STRING="http://127.0.0.1:8089/Gift/role/print";
var URL={
	upload : LOCAL_PATH+"/file/upload",//图片上传
	sort : LOCAL_PATH+"/data/sort",
	ceshi : LOCAL_PATH + "/api/data/callback",
	
	
}