var WXconfig= (function(){
	
	function getxiKey() {
		var jsKey, noncestr, timestamp, appId, ajaxHeader = {};
		//组装头部信息
		ajaxHeader = {
			Accept: "application/json; charset=utf-8",
		};
		// 获取 秘钥
		$.ajax({
			url: HOST_CONFIG+"api/wx/getWxJsKey",
			type: "POST",
			async: false,
			data: {
				url: encodeURIComponent((window.location.href).split('#')[0])
			},
			headers: ajaxHeader,
			success: function (res) {
				if (res.success) {
					var data = res.data;
					jsKey = data.jsKey; // 签名
					noncestr = data.noncestr; // 随机字符串
					timestamp = data.timestamp; // 时间戳
					appId = data.appId; // 小程序apId
					wx.config({
						debug: false,
						appId: appId,
						timestamp: timestamp,
						nonceStr: noncestr,
						signature: jsKey,
						jsApiList: ['checkJsApi', 'scanQRCode']
					})
				} else {
					console.log('获取秘钥信息失败', res);
				}
			},
			error: function (res) {
				console.log('调取秘钥接口失败', res);
			}
		})
	
	}
	function errorListenner(){
		wx.error(function (res) {
			console.log("微信配置错误", res);
		});
	}
	
	function checkApiListenner(){
		wx.ready(function () {
			wx.checkJsApi({
				jsApiList: ['scanQRCode'],
				success: function (res) {}
			});
		});
	}
	
	return {
		init:function(){
			getxiKey();
			errorListenner();
			checkApiListenner();
		}
	}
})();

WXconfig.init();
