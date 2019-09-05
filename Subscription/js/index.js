var assembleInit = (function() {
	//创建vm实例
	var vm = null;
	var _this;

	return {
		init: function() {
			vm = new Vue({
				el: "#index",
				data: {
					indexFootIcon: window.localStorage.INDEXTAB ? (window.localStorage.INDEXTAB == "tab1" ? "../img/nav-app-active.png" : "../img/nav-app.png") : "../img/nav-app-active.png",
					mineFootIcon: window.localStorage.INDEXTAB ? (window.localStorage.INDEXTAB == "tab2" ? "../img/nav-my-active.png" : "../img/nav-my.png") : "../img/nav-my.png",
					tab3window: false,
					activeTab: window.localStorage.INDEXTAB ? window.localStorage.INDEXTAB : "tab1",
					quotaAndRepaymentInfo:{currentQuota:"",loanQuota:"",monthRepayment:"",uesdQuota:""},
					hotCommoditiesList:[],
					customerNo:"",
					isCredit:0,
					bankCardList:[]
				},
				created: function() {
					_this = this;
					_this.init()
				},
				mounted: function() {
					$("#tab3").css("top", $("body").height())
				},
				filters:{
					subLastFour:function(val){
						return val.substring(val.length-4)
					}
				},
				methods: {
					init: function() {
						//此处调取后台接口
						window.dataUtil.getIsCredit(1,function(res) {
							console.log('===获取是否授信===' + JSON.stringify(res));
							if(res.SystemCode == 0) {
								_this.customerNo = res.data.customerNo; 
								_this.isCredit= res.data.isCredit;
								window.dataUtil.getQuotaAndRepaymentInfo(_this.customerNo,function(res) {
									console.log('===获取即刻分期额度和还款信息===' + JSON.stringify(res));
									if(res.SystemCode == 0) {
										_this.quotaAndRepaymentInfo = res.data; //
									} else if(res.systemCode == 1){
										$.toast("获取分期信息失败");
									}
								}, function(xhr, type, err) {
									$.toast('服务器异常，请稍后重试');
								})
								window.dataUtil.getBankCardList(_this.customerNo,function(res) {
									console.log('===获取银行卡列表===' + JSON.stringify(res));
									if(res.SystemCode == 0) {
										_this.bankCardList = res.data; //
									} else if(res.systemCode == 1){
										$.toast("获取银行卡列表失败");
									}
								}, function(xhr, type, err) {
									$.toast('服务器异常，请稍后重试');
								})
							} else if(res.systemCode == 1){
								$.toast("获取是否授信失败");
							}
						}, function(xhr, type, err) {
							$.toast('服务器异常，请稍后重试');
						})
						
						window.dataUtil.getHotCommoditiesList(function(res) {
							console.log('===获取热门商品列表===' + JSON.stringify(res));
							if(res.SystemCode == 0) {
								_this.hotCommoditiesList = res.data; //赋值列表信息数据
							} else if(res.systemCode == 1){
								$.toast("获取分期信息失败");
							}
						}, function(xhr, type, err) {
							$.toast('服务器异常，请稍后重试');
						})
					},
					toRiseMoneyPage: function(customerNo, e) {
						if(e) {
							var dom = e.target;
							dom.style.borderColor = "#ff9200";
							dom.style.backgroundColor = "#ff9200";
							setTimeout(function() {
								dom.style.borderColor = "white";
								dom.style.backgroundColor = "transparent";
							}, 200)
							window.localStorage.INDEXTAB = "tab1";
						} else {
							window.localStorage.INDEXTAB = "tab2";
						}

						window.location.href = '../html/pages/riseMoney.html?customerNo=' + customerNo;
					},
					goGiveBackPlanPage: function(customerNo, tab) {
						if(tab == "tab1") {
							window.localStorage.INDEXTAB = "tab1";
						} else if(tab == "tab2") {
							window.localStorage.INDEXTAB = "tab2";
						}
						window.location.href = '../html/pages/backScan.html?customerNo=' + customerNo;
					},
					goMyBillPage: function(customerNo, tab) {
						customerNo = customerNo;
						if(tab == "tab1") {
							window.localStorage.INDEXTAB = "tab1";
						} else if(tab == "tab2") {
							window.localStorage.INDEXTAB = "tab2";
						}
						window.location.href = '../html/pages/myBill.html?customerNo=' + customerNo;
					},
					goScan: function(customerNo) {
						if(_this.isCredit==0){
							window.location.href = '../html/pages/completeInfo.html?customerNo=' + customerNo;
						}else if(_this.isCredit==1){
							window.location.href = '../html/pages/qr_scan.html?customerNo=' + customerNo;
						}
						
					},
					goMybankCard: function(customerNo) {
						window.localStorage.INDEXTAB = "tab2";
						window.location.href = '../html/pages/myBankCard.html?customerNo=' + customerNo;
					},
					goAddBankCard: function(customerNo) {
						window.location.href = '../html/pages/addBankCard.html?customerNo=' + customerNo
					},
					tapIndex: function() {
						if(_this.activeTab!="tab1"){
							_this.closeTab3();
							_this.indexFootIcon = "../img/nav-app-active.png";
							_this.mineFootIcon = "../img/nav-my.png";
							window.localStorage.INDEXTAB = "tab1";
							_this.activeTab = "tab1";
						}
					},
					tapMine: function() {
						if(_this.activeTab!="tab2"){
							_this.closeTab3();
							_this.indexFootIcon = "../img/nav-app.png";
							_this.mineFootIcon = "../img/nav-my-active.png";
							window.localStorage.INDEXTAB = "tab2";
							_this.activeTab = "tab2"
						}
					},
					slideUpBankCard: function() {
						if(_this.tab3window == false) {
							$("#tab3").css("display", "block");
							$("#tab3").animate({
								"top": "41px"
							}, 500)
							_this.tab3window = true;
						} else {
							_this.closeTab3();
						}

					},
					closeTab3: function() {
						$("#tab3").animate({
							"top": $("body").height()
						}, 500, function() {
							$("#tab3").css("display", "none");
						})
						_this.tab3window = false;
					}
				},

			});
		}
	}
})(window);