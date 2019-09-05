// 获取秘钥

var wxConfig = function (secKeyUrl, secKeydata, debugvalue, jsApiListValue) {
    var jsKey, noncestr, timestamp, appId, ajaxHeader = {};
    $(document).ready(function () {
        //组装头部信息
        ajaxHeader = {
            Accept: "application/json; charset=utf-8",
        }
        // 获取 秘钥
        $.ajax({
            url: secKeyUrl,
            type: "POST",
            async: false,
            data: {
                url: secKeydata
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
                        debug: debugvalue,
                        appId: appId,
                        timestamp: timestamp,
                        nonceStr: noncestr,
                        signature: jsKey,
                        jsApiList: jsApiListValue
                    })
                } else {
                    console.log('获取秘钥信息失败', res);
                }
            },
            error: function (res) {
                console.log('调取秘钥接口失败', res);
            }
        })
    });
    wx.error(function (res) {
        console.log("微信配置错误", res);
    });

}


var secKeyUrl = "https://demo.jsruiyin.com/yxpt/api/wx/getWxJsKey"; // 获取签名，随机字符串，时间戳，小程序开发apid的地址
var secKeydata = encodeURIComponent((window.location.href).split('#')[0]); //获取签名地址请求参数
var debugvalue = false; //开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
var jsApiListValue = ['checkJsApi', 'scanQRCode']; //必填，需要使用的JS接口列表
wxConfig(secKeyUrl, secKeydata, debugvalue, jsApiListValue);