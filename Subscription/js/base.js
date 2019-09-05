var baseJs = {
  /*获取地址栏参数*/
  GetQueryString: function(name, default_value) {
    //获取超链接数据
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return default_value;
  }
};

var wxconfig = {
  appId: "wxaa84e0338222f222",
  productWWW: "https://www.gnnsyh.com/guanNanNongShang/html/pages/",
  devWWW: "http://demo.jsruiyin.com/guanNanNongShang/html/pages/"
};

/*全局常量*/
window.GLOBAL_CONFIG = {
  timeOut: 30000
};

/*后台地址*/
window.HOST_CONFIG = "http://demo.jsruiyin.com/yxpt/"; //内网测试
window.USER = 'common';
//window.USER = 'master';

/*接口地址*/
window.API_CONFIG = {
  //获取贷款详情
  getLoanDetail: HOST_CONFIG + "api/bank/business/getLoan",
  //获取信用卡详情
  getCardInfo: HOST_CONFIG + "api/bank/business/getCard",
  //提交客户信息
  addCustomerInfo: HOST_CONFIG + "api/bank/customer/binding",
  //获取客户信息
  getCustomerInfo: HOST_CONFIG + "api/bank/customer/get",
  //获取员工信息
  getStaffInfo: HOST_CONFIG + "api/bank/staff/get",
  //获取机构列表
  getOrgList: HOST_CONFIG + "api/bank/basics/orgList",
  //获取机构列表分页
  getOrgListPage: HOST_CONFIG + "api/bank/basics/orgListPage",
  //内部员工绑定
  staffBinding: HOST_CONFIG + "api/bank/staff/binding",
  //预约贷款
  apointmentLoans: HOST_CONFIG + "api/bank/business/loan",
  //申请信用卡
  applyCreditCard: HOST_CONFIG + "api/bank/business/card",
  //获取机构图片列表
  getOrgListImg: HOST_CONFIG + "api/bank/basics/orgListImg",
  //获取机构详情
  getOrgDetail: HOST_CONFIG + "api/bank/basics/get",
  //获取openId
  getOpenid: HOST_CONFIG + "api/bank/basics/getOpenId",
  //获取信用卡列表
  getCardListPage: HOST_CONFIG + "api/bank/business/cardListPage",
  //获取贷款列表
  getLoanListPage: HOST_CONFIG + "api/bank/business/loanListPage",
  //查看当前人是否有资格继续申请信用卡
  checkIsCanCard: HOST_CONFIG + "api/bank/business/isCanCard",
  // 保存商户回访记录
  saveMerchantReturnVisit: HOST_CONFIG + "api/bank/merchantReturnVisit/binding",
  //获取商户回访信息
  getMerchantReturnVisitInfo: HOST_CONFIG + "api/bank/merchantReturnVisit/get",
  // 获取商户信息
  getMerchantInfo: HOST_CONFIG + "api/bank/importMerchantInfo/getMerchantInfo"
};
