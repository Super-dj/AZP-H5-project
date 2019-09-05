let lastPageUrl =  document.referrer||"http://testm.azpzb.cn/downloadAPP.html";
var jsKey, noncestr, timestamp, appId, ajaxHeader = {};
$(document).ready(function () {
  //组装头部信息
  ajaxHeader = {
    Accept: "application/json; charset=utf-8",
  };

  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${"wxd7c3a18373458be7"}&redirect_uri=${encodeURIComponent(lastPageUrl)}&response_type=json&scope=snsapi_userinfo&state=STATE#wechat_redirect`

  // 获取 秘钥
  // $.ajax({
  //   url: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${"wxd7c3a18373458be7"}&redirect_uri=${encodeURIComponent(lastPageUrl)}&response_type=json&scope=snsapi_userinfo&state=STATE#wechat_redirect`,
  //   type: "POST",
  //   async: false,
  //   data: {
  //     url: (window.location.href).split('#')[0]
  //   },
  //   headers: ajaxHeader,
  //   success: function (res) {
  //     console.log(res);
  //     if (res.success) {
  //       var data = res.data;
  //       jsKey = data.jsKey; // 签名
  //       noncestr = data.noncestr; // 随机字符串
  //       timestamp = data.timestamp; // 时间戳
  //       appId = data.appId; // 小程序apId
  //       wx.config({
  //         debug: true,
  //         appId: appId,
  //         timestamp: timestamp,
  //         nonceStr: noncestr,
  //         signature: jsKey,
  //         jsApiList: ['checkJsApi', 'scanQRCode']
  //       })
  //     } else {
  //       console.log(res);
  //     }
  //   },
  //   error: function (res) {
  //     console.log(res);
  //   }
  // })
});
