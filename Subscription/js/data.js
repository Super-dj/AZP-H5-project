/*
 * 说明：获取数据工具类
 * 创建人：ch
 * 创建时间：2018/3/6 11:30
 */
(function(c) {
  /*
   *	获取机构列表分页
   * @param {String} orgName 机构名称
   * @param {String} orgType 机构类型
   * @param {String} pageNum 页码
   * @param {String} pageSize 每页条数
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getOrgListPage(
    orgName,
    orgType,
    pageNum,
    pageSize,
    successCB,
    errorCB
  ) {
    $.ajax(window.API_CONFIG.getOrgListPage, {
      data: {
        orgName: orgName,
        orgGrade: orgType,
        pageNum: pageNum,
        pageSize: pageSize
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取openId
   * @param {String} code code
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getOpenid(code, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getOpenid, {
      data: {
        code: code
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取机构详情
   * @param {String} orgId 机构Id
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getOrgDetail(orgId, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getOrgDetail, {
      data: {
        orgCode: orgId
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取机构图片列表
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getOrgListImg(successCB, errorCB) {
    $.ajax(window.API_CONFIG.getOrgListImg, {
      data: {},
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取机构列表
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getOrgList(successCB, errorCB) {
    $.ajax(window.API_CONFIG.getOrgList, {
      data: {},
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取信用卡详情
   * @param {String} loanId 贷款id
   * @param {String} openId 客户信息
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getLoanDetail(loanId, openId, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getLoanDetail, {
      data: {
        id: loanId,
        openId: openId
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取信用卡详情
   * @param {String} cardId 信用卡id
   * @param {String} openId 客户信息
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getCardInfo(cardId, openId, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getCardInfo, {
      data: {
        id: cardId,
        openId: openId
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取员工信息
   * @param {String} openId 客户信息
   * @param {String} starffNum 员工工号
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getStaffInfo(openId, starffNum, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getStaffInfo, {
      data: {
        openId: openId,
        jobNumber: starffNum
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取客户信息
   * @param {String} openId 客户信息
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getCustomerInfo(openId, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getCustomerInfo, {
      data: {
        openId: openId
      },
      type: "POST",
      dataType: "json",
      async: false,
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }

  /*
   *	信用卡申请
   * @param {String} name 客户姓名
   * @param {String} idNo 身份证号
   * @param {String} mobile 手机号
   * @param {String} address 居住地址
   * @param {String} workUnit 工作单位
   * @param {String} openId 客户编号
   * @param {String} orgCode 机构编号
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function applyCreditCard(openId, name, mobile, address, successCB, errorCB) {
    $.ajax(window.API_CONFIG.applyCreditCard, {
      data: {
        openId: openId,
        name: name,
        mobile: mobile,
        address: address
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	预约贷款
   * @param {String} name 客户姓名
   * @param {String} idNo 身份证号
   * @param {String} mobile 手机号
   * @param {String} amount 贷款数量
   * @param {String} loanUse 贷款用途
   * @param {String} openId 客户编号
   * @param {String} orgCode 机构编号
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function apointmentLoans(
    openId,
    name,
    mobile,
    address,
    orgCode,
    amount,
    loanUse,
    successCB,
    errorCB
  ) {
    $.ajax(window.API_CONFIG.apointmentLoans, {
      data: {
        openId: openId,
        name: name,
        mobile: mobile,
        address: address,
        orgCode: orgCode,
        amount: amount,
        loanUse: loanUse
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	内部员工绑定
   * @param {String} name 客户姓名
   * @param {String} idNo 身份证号
   * @param {String} mobile 手机号
   * @param {String} recName 联系人姓名
   * @param {String} recJobNumber 联系人手机号
   * @param {String} openId 客户编号
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function staffBinding(
    openId,
    name,
    jobNumber,
    mobile,
    position,
    successCB,
    errorCB
  ) {
    $.ajax(window.API_CONFIG.staffBinding, {
      data: {
        openId: openId,
        userName: name,
        jobNumber: jobNumber,
        mobile: mobile,
        position: position
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	完善信息接口
   * @param {String} name 客户姓名
   * @param {String} idNo 身份证号
   * @param {String} mobile 手机号
   * @param {String} recName 联系人姓名
   * @param {String} recJobNumber 联系人手机号
   * @param {String} openId 客户编号
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function addCustomerInfo(
    openId,
    name,
    idNo,
    mobile,
    recJobNumber,
    recName,
    successCB,
    errorCB
  ) {
    $.ajax(window.API_CONFIG.addCustomerInfo, {
      data: {
        openId: openId,
        name: name,
        idNo: idNo,
        mobile: mobile,
        recJobNumber: recJobNumber,
        recName: recName
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取信用卡申请列表带有分页
   * @param {String} openId 公众号身份标识
   * @param {String} pageNum 页码
   * @param {String} pageSize 每页显示数量
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getCardListPage(openId, pageNum, pageSize, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getCardListPage, {
      data: {
        openId: openId,
        pageNum: pageNum,
        pageSize: pageSize
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	获取贷款申请列表
   * @param {String} openId 公众号身份标识
   * @param {String} pageNum 页码
   * @param {String} pageSize 每页显示数量
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getLoanListPage(openId, pageNum, pageSize, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getLoanListPage, {
      data: {
        openId: openId,
        pageNum: pageNum,
        pageSize: pageSize
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   *	验证申请人是否具有申请信用卡资格
   * @param {String} openId 公众号身份标识
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function checkIsCanCard(openId, successCB, errorCB) {
    $.ajax(window.API_CONFIG.checkIsCanCard, {
      data: {
        openId: openId
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   * 保存商户回访记录
   * @param {String} openId 公众号身份标示
   * @param {String} jobNumber 员工工号
   * @param {String} userName 员工姓名
   * @param {String} merchantId 商户ID
   * @param {String} merchantName 商户名称
   * @param {String} legalPerson 商户法人
   * @param {String} visitStars 回访星级
   * @param {String} returnVisitRecord	 回访记录
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function saveMerchantReturnVisit(
    openId,
    jobNumber,
    userName,
    merchantId,
    merchantName,
    legalPerson,
    visitStars,
    returnVisitRecord,
    successCB,
    errorCB
  ) {
    $.ajax(window.API_CONFIG.saveMerchantReturnVisit, {
      data: {
        openId: openId,
        jobNumber: jobNumber,
        userName: userName,
        merchantId: merchantId,
        merchantName: merchantName,
        legalPerson: legalPerson,
        visitStars: visitStars,
        returnVisitRecord: returnVisitRecord
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   * 获取商户回访信息
   * @param {String} openId 公众号身份标示
   * @param {String} jobNumber 员工号
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getMerchantReturnVisitInfo(openId, jobNumber, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getMerchantReturnVisitInfo, {
      data: {
        openId: openId,
        jobNumber: jobNumber
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  /*
   * 获取商户信息
   * @param {String} merchantNumber 商户编码
   * @param {Function} successCB 成功回调
   * @param {Function} errorCB 失败回调
   */
  function getMerchantInfo(merchantNumber, successCB, errorCB) {
    $.ajax(window.API_CONFIG.getMerchantInfo, {
      data: {
        merchantNumber: merchantNumber
      },
      type: "POST",
      dataType: "json",
      timeout: window.GLOBAL_CONFIG.timeOut,
      success: function(data) {
        successCB && successCB(data);
      },
      error: function(xhr, type, error) {
        errorCB;
      }
    });
  }
  c.dataUtil = {
    addCustomerInfo: addCustomerInfo,
    getCustomerInfo: getCustomerInfo,
    getStaffInfo: getStaffInfo,
    getOrgList: getOrgList,
    staffBinding: staffBinding,
    apointmentLoans: apointmentLoans,
    applyCreditCard: applyCreditCard,
    getOrgListPage: getOrgListPage,
    getOrgListImg: getOrgListImg,
    getOrgDetail: getOrgDetail,
    getOpenid: getOpenid,
    getCardListPage: getCardListPage,
    getLoanListPage: getLoanListPage,
    getCardInfo: getCardInfo,
    getLoanDetail: getLoanDetail,
    checkIsCanCard: checkIsCanCard,
    saveMerchantReturnVisit: saveMerchantReturnVisit,
    getMerchantReturnVisitInfo: getMerchantReturnVisitInfo,
    getMerchantInfo: getMerchantInfo
  };
})(window);
