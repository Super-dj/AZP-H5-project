var getOpenId=(function(){
	var handleApiName;
	function wxLogin(){
		var page=window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.indexOf(".html")+5)
		var url;
		if(HOST_CONFIG=="https://www.gnnsyh.com/yxpt/"){
			url= encodeURIComponent(wxconfig.productWWW+page);//生产环境
		}else{
			url= encodeURIComponent(wxconfig.devWWW+page);
		}
		
		window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' + 
		'appid='+wxconfig.appId+'&redirect_uri='+ url
		+ '&response_type=code&scope=snsapi_userinfo&state='+baseJs.GetQueryString("id", "")+'#wechat_redirect';
	}
	function getOpenid(code){
		handleApiName=window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.indexOf(".html"));
		var openId=localStorage.OPENID;
		if(openId){
			eval(handleApiName+".init('"+openId+"')");
		}else{
			window.dataUtil.getOpenid(code,function(res) {
				console.log('===获取openId===' + JSON.stringify(res));
				if(res.success) {
					console.log("获取openId成功");
					console.log(handleApiName+".init("+res.data+")");
					eval(handleApiName+".init('"+res.data+"')");
	//				completeInfo.init(res.data);
	//				sessionStorage.setItem('openId', JSON.stringify(res.openId));
				} else{
					$.toast("获取openId失败");
				}
			}, function(xhr, type, error) {
				$.toast('服务器异常，请稍后重试');
			})
		}
		
		
		
//		this.$axios.get("/weChat/wxMessage/getOpenId", {
//		params: {
//			code:_this.getQueryString("code")
//		}
//		})
//		.then(function(data) {	
////					debugger
//			console.log(data);
//			_this.openId = data.data.openId
//			sessionStorage.setItem('openId', JSON.stringify(_this.openId));
//		})
//		.catch(function(err) {
//			console.log(err)
//		});
//				
	}
	
	return {
		init:function(){
			if(window.USER=="master"){
				var code=baseJs.GetQueryString("code", "")
				if(code!=""){
					getOpenid(code);
				}else{
					wxLogin();
				}
			}else if(window.USER=="common"){
				// console.log("初始化嘻嘻嘻")
				handleApiName=window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.indexOf(".html"));
//				eval(handleApiName+".init('oBHlH568ndCcclAtaw26rr3C0FXs')");
				eval(handleApiName+".init('oBHlH56Avwbl9GsjCIwQhtsQfccc')");
			}
			
		}
		
	}
}())
getOpenId.init()

