
function hasJqueryObject($elem) { return $elem.length > 0 }
var UI = UI || {};


var scrollHeight = 0;
	scrollHeight = $(document).scrollTop();

function popupOpen(obj,ty,timer){
	var tar = $('#mw-'+obj);
	$('body').css('overflow', 'hidden');
	function mwOpen(){
		if(timer >= 0){
			setTimeout(function(){
				if(tar.hasClass('popBtm')){
					tar.addClass('show');
				}else{
					tar.show().addClass('show');
				}
			}, timer);
		}else{
			tar.show().addClass('show');
			if(tar.hasClass('ndim')){
				tar.css('left',0);
			}
			tar.find('.content').scrollTop(0);
		}
		tar.click(function(e){
			if(!$(this).hasClass('ndim')){
				if(!$('[class*="ly"]').find('.wrap').has(e.target).length) {
					if($(this).hasClass('popBtm')){
						$('body').css('overflow', '');
						$('[class*="ly"]').removeClass('show');
						window.onscroll=function(){};
					}else{
						popupClose(obj,'mw');
					}
				}
			}
		});
	}
	function mwOpenFix(){
		if(timer >= 0){
			setTimeout(function(){
				if(tar.hasClass('popBtm')){
					tar.addClass('show');
				}else{
					tar.show().addClass('show');
				}
			}, timer);
		}else{
			tar.show().addClass('show');
			if(tar.hasClass('ndim')){
				tar.css('left',0);
			}
			tar.find('.content').scrollTop(0);
		}
		tar.click(function(e){
			if(!$(this).hasClass('ndim')){
				if(!$('[class*="ly"]').find('.wrap').has(e.target).length) {
					popupClose(obj,'mwf');
				}
			}
		});
		scrollHeight = $(document).scrollTop();
		$('#wrapper').css('position', 'fixed');
		$('#wrapper').css('top', - scrollHeight);
	}
	if( ty === 'pc' ){ //pc
		tar.show();
	}else if( ty === 'mw'){ //mobile
		mwOpen();
		var x=window.scrollX, y=window.scrollY;
		window.onscroll=function(){window.scrollTo(x, y)};
	}else if( ty === 'mwb'){
		mwOpen();
		$('html,body').css('position','fixed');
	}else if( ty === 'mwf'){ //mobile > #wrap
		mwOpenFix();
	}
	if(obj === 'srch') {
		$(document).scrollTop(0);
	}
}
function popupClose(obj,ty){
	var tar = $('#mw-'+obj);
	if( ty === 'pc' ){
		tar.hide().removeClass('show');
	}else if( ty === 'mw' ){
		if(tar.hasClass('popBtm')){
			tar.removeClass('show');
		}else{
			tar.hide().removeClass('show');
		}
		$('html,body').css('position','');
		window.onscroll=function(){};
	}else if( ty === 'mwf' ){
		if(tar.hasClass('popBtm')){
			tar.removeClass('show');
		}else{
			tar.hide().removeClass('show');
		}
		$('#wrapper').css('top',0);
		$('#wrapper').css('position','relative');
		$(document).scrollTop(scrollHeight);
	}

	if(!$('.ly-pop').hasClass('show')) {
		$('body').css('overflow', '');
	}
}

// 맵
function mapBusstop(){
	var map = $(".bus-busstop .btn-wrap"),
		table = map.parents("table").find("tr:first-child"),
		summery = map.parents(".table").find(".summary");

	var popList = $(".ly-pop .list-item");

	map.off("click").on("click", function(e){
		if(map.hasClass("active")) {
			map.removeClass("active");
			table.siblings().show();
			summery.hide();
		} else {
			map.addClass("active");
			table.siblings().hide();
			summery.show();
		}
	})

	popList.off("click").on("click", function (e) {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})
}

// 팝업센터
const popupCenter = ({url, title, w, h}) => {
	var dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
	var dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var systemZoom = width / window.screen.availWidth;
	var left = (width - w) / 2 / systemZoom + dualScreenLeft
	var top = (height - h) / 2 / systemZoom + dualScreenTop
	var newWindow = window.open(url, title,
		`
      scrollbars=no,
      width=${w}, 
      height=${h}, 
      top=${top}, 
      left=${left}
      `
	)

	if (window.focus) newWindow.focus();
}

// 메뉴
UI.acc = {
	init: function(){
		var wrap = $("#wrapper");
		var menuBtn = wrap.find($(".menu-switch"));
		var menu = wrap.find($(".menu-box-list"));

		menu.off("click").on("click", function(e){
			$(".menu-box-list").removeClass("active");
			$(this).addClass("active");
		});

		menuBtn.on("click", function (){
			wrap.toggleClass("active");

			if (wrap.hasClass("active")) {

				menu.each(function(idx) {
					var target = $(this);
					var subMenu = target.find($(".menu-sub"));

					target.hover(function() {
						subMenu.addClass('hover');
					}, function() {
						subMenu.removeClass('hover');
					});
				});


			}
		});

	}
}
// 달력
UI.datepicker = {
	init: function (){
		var calendar = $(".datepicker");

		calendar.datepicker({dateFormat :"yy-mm-dd"});
		calendar.datepicker('setDate', new Date());

		$.datepicker.setDefaults({
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			showMonthAfterYear: true,
			yearSuffix: '년'
		});
	}
}
// 필터 테이블
UI.tableFilter = {
	init: function (){
		var table = $(".table-header tr"),
			parent = table.parents(".content-header"),
			moreBtn = $(".btn-more"),
			line = moreBtn.parents(".table-header").find("table tr:first-child"),
			header  = $(".table-header .table-more"),
			moreArea = $(".table-more");

		// 필터에 more 버튼 추가 및 2번째 dep hidden
		parent.each(function(idx) {
			var table = $(this).find(".table-header tr");

			if ( table.length > 1 && header.length > 0) {
				moreArea.siblings("table").find("tr:first-child").siblings().hide();
				moreArea.removeClass("hide").addClass('show');
			}
		});

		moreBtn.on("click", function (){
			if (moreBtn.hasClass("active")){
				line.siblings().hide();
				$(this).removeClass("active");
			} else {
				line.siblings().show();
				$(this).addClass("active");
			}
		})

		// 필터에 selectbox disabeld 스위치
		$(".chk-disabled input").on("change", function () {
			if($(this).prop('checked')) {
				$(this).parent().siblings().children().attr("disabled", true);
			}else{
				$(this).parent().siblings().children().attr("disabled", false);
			}
		});
	}
}
// 테이블 정렬 아이콘
UI.tableArrow = {
	init: function (){
		var table = $(".table thead th");

		if($("body").hasClass("admin")) {
			table.on("click", function () {
				if (!$(this).hasClass("arrow-no")) {
					if ($(this).hasClass("up")) {
						$(this).removeClass("up");
						$(this).addClass("down");
					} else {
						$(this).addClass("arrow");
						$(this).addClass("up");
						$(this).removeClass("down");
					}
				}
			})
		}
	}
}
// 드롭박스
UI.dropDown = {
	init: function (){
		var _this = $(".dropdown-wrap .dropdown-btn");

		_this.each(function(idx){
			var _this = $(this),
				dropMenu = _this.siblings(),
				dropItem = dropMenu.find(".dropdown-item"),
				dropAll = dropMenu.find(".dropdown-all-check"),
				dropNone = dropMenu.find(".dropdown-all-none"),
				dropWrap = _this.parents(".dropdown-wrap");

			_this.on("click", function(e){

				if (dropWrap.hasClass("active")) {
					dropWrap.removeClass("active");
				} else if ($('.dropdown-wrap.active').length >= 1){
					$('.dropdown-wrap').removeClass("active");
					dropWrap.addClass("active");
				} else {
					dropWrap.addClass("active");
				}

				// option 선택시 아이콘추가 + selected  class추가
				dropItem.off("click").on("click", function (){
					$(this).toggleClass("selected");
					$(this).find(".icon").toggleClass("icon-check");
				})
			})

			// 전체선택
			dropAll.on("click", function (){
				dropItem.addClass("selected").find(".icon").addClass("icon-check");
			})
			// 전체해제
			dropNone.on("click", function (){
				dropItem.removeClass("selected").find(".icon").removeClass("icon-check");
			})
		})

		$(document).mouseup(function (e){
			var wrap = _this.parents(".dropdown-wrap");

			if(wrap.has(e.target).length === 0){
				wrap.removeClass("active");
			}
		});
	}
}
// 탭
UI.tab = {
	init: function(){
		var tab = $(".tab-menu").find(".tab-menu-item");

		tab.on("click", function () {
			var idx = $(this).index(),
				wrap = $(this).parents(".tab-wrap"),
				item = wrap.find(".tab-menu li"),
				sec = wrap.find(".tab-area");

			item.removeClass("active");
			item.eq(idx).addClass("active");
			sec.removeClass("active");
			sec.eq(idx).addClass("active");
		})
	}
}
// 테이블 푸터
UI.contentHeight = {
	init:function () {
		var footer = $(".admin").find("#wrapper .content .table-footer"),
			content = $(".admin").find("#wrapper .content");
		if(footer.length === 0) {
			content.css("height", "calc(100% - 38px)");
		}
	}
}

// 맵 - 메뉴접기
UI.mapMenu = {
	init: function (){
		// left menu open
		var left = $(".side-menu > .side-menu-button"),
			menu = left.parents(".side-menu"),
			menuWidth = left.parents(".side-menu").innerWidth();
		// right menu open
		var right = $(".side-menu-right > .side-menu-button"),
			rMenu = right.parents(".side-menu-right"),
			rMenuWidth = right.parents(".side-menu-right").innerWidth();

		// left popup move
		var busStop = $("#wrapper .bus-busstop"),
			busDetail = $("#wrapper .bus-detail");

		// 위치보기 선택
		var monitor = $(".monitor-menu"),
			monitorBtn = monitor.find(".monitor-info .btn"),
			monitorFold = monitor.find(".monitor-area"),
			monitorItem = monitorFold.find(".monitor-detail-item .btn");



		left.off("click").on("click", function(e){
			if(left.hasClass("active")) {
				left.removeClass("active");
				menu.css("left", - menuWidth);
				if(busDetail.length > 0) {
					busDetail.css("left", busDetail.position().left - menuWidth );
				}
				if (busStop.length > 0) {
					busStop.css("left", busStop.position().left - menuWidth);
				}
			} else {
				left.addClass("active");
				menu.css("left", 0);

				if(busDetail.length > 0) {
					busDetail.css("left", busDetail.position().left + menuWidth );
				}
				if (busStop.length > 0) {
					busStop.css("left", busStop.position().left + menuWidth );
				}
			}
		})

		right.off("click").on("click", function(e){
			if(right.hasClass("active")) {
				right.removeClass("active");
				rMenu.css("right", 0);
			} else {
				right.addClass("active");
				rMenu.css("right", - rMenuWidth);
			}
		})

		monitorBtn.on("click", function (e) {
			monitorFold.toggle();
			monitorBtn.toggleClass("active");
		});

		monitorItem.on("click", function (e) {
			$(this).parents(".monitor-detail-item").addClass("active").siblings().removeClass("active");
		})


		var popLeft = $(".ly-pop").find(".pop-side-menu > .side-menu-button"),
			popLeftMenu = $(".ly-pop").find(".pop-side-menu"),
			popLeftWidth = popLeftMenu.innerWidth(),
			popBusStop = popLeftMenu.siblings(".map-wrap").find(".bus-busstop");

		popLeft.off("click").on("click", function(e) {
			var popBusStopLeft = popBusStop.position().left;

			if(popLeft.hasClass("active")) {
				popLeft.removeClass("active");
				popLeftMenu.css("left", - popLeftWidth);
				popBusStop.css("left", popBusStopLeft - popLeftWidth);
			} else {
				popLeft.addClass("active");
				popLeftMenu.css("left", 0);
				popBusStop.css("left", popLeftWidth + popBusStopLeft);
			}
		});
	}
}
// 맵 - 아이콘 / 팝업
UI.mapIcon = {
	init: function (){
		var user = $(".map-icon-user"),
			busstop = $(".map-icon-busstop"),
			bus = $(".map-icon-bus"),
			busPopup = $(".bus-detail");

		if(user.length) {
			user.on("click", function(e){
				if($(this).hasClass("active")) {
					$(this).removeClass("active");
				} else {
					$(this).addClass("active");
				}
			})
		}

		if(busstop.length) {
			var close = busstop.find(".icon-close");

			close.on("click", function (e) {
				e.stopPropagation();
				busstop.removeClass("active");
			})

			busstop.on("click", function(e){
				busstop.siblings(".map-icon-busstop").removeClass("active");
				$(this).addClass("active");
			})
		}

		if(bus.length) {
			var close = busPopup.find(".icon-close");

			bus.on("click", function (e) {
				busPopup.show();
			});

			close.on("click", function (e) {
				busPopup.hide();
			});
		}
	}
}
// 맵 - 차 GPS 디테일
UI.carGps = {
	init: function (){
		var table = $(".table-select tbody tr"),
			monitor = $(".monitor-detail .monitor-detail-item .btn");

		table.each(function(idx) {
			var td = $(this),
				right = $(".map .side-menu-right > .side-menu-button"),
				rMenu = right.parents(".side-menu-right"),
				rMenuWidth = right.parents(".side-menu-right").innerWidth();

			td.on("click", function(e){
				td.addClass("active").siblings().removeClass("active");

				if(right.length > 0) {
					if(right.hasClass("active")) {
						right.removeClass("active");
						rMenu.css("right", 0);
					}
				}
			});
		})

		monitor.each(function (idx) {
			var btn = $(this),
				item = btn.parents(".monitor-detail-item");

			btn.on("click", function (e) {
				item.addClass("active").siblings().removeClass("active");
			});
		})
	}
}




// 팝업 - acc tap
UI.popAcc = {
	init: function (){
		var acc = $(".acc .acc-item");

		acc.each(function(idx){
			var _this = $(this),
				subItem = _this.find(".acc-item-tit");

			var test = _this.find(".acc-sub");

			_this.click(function () {
				_this.toggleClass("active");
				// $(this).toggleClass("active"); // this just rotates the expander arrow
			});
		})
	}
}
// 팝업 - 체크박스따라 display 전환
UI.popChk = {
	init: function () {
		var trigger = $(".evt-chk-trigger");

		trigger.each(function(idx) {
			var trigger = $(this),
				total = trigger.find(".chk-total input"),
				tagless = trigger.find(".chk-tagless input"),
				targetT = trigger.parents(".table-header").siblings(".table-header").find(".evt-chk-target .chk-total"),
				targetQR = trigger.parents(".table-header").siblings(".table-header").find(".evt-chk-target .chk-QR"),
				targetTL = trigger.parents(".table-header").siblings(".table-header").find(".evt-chk-target .chk-tagless");

			if(total.length > 0) {
				if(total.is(':checked')) {
					targetT.show();
					targetQR.hide();
				} else {
					targetT.hide();
					targetQR.show();
				}

				total.on("click", function () {
					if(total.is(':checked')) {
						targetT.show();
						targetQR.hide();
					} else {
						targetT.hide();
						targetQR.show();
					}
				});
			}

			if(tagless.length > 0) {
				if(tagless.is(':checked')) {
					targetTL.show();
				} else {
					targetTL.hide();
				}

				tagless.on("click", function () {
					if(tagless.is(':checked')) {
						targetTL.show();
					} else {
						targetTL.hide();
					}
				});
			}
		});
	}
}

$(function(){
	UI.$window = $(window);
	UI.$body = $("body");
	//어드민
	hasJqueryObject(UI.$body.find(".content")) && UI.contentHeight.init();
	hasJqueryObject(UI.$body.find(".menu-box")) && UI.acc.init();
	hasJqueryObject(UI.$body.find(".datepicker-wrap")) && UI.datepicker.init();
	hasJqueryObject(UI.$body.find(".table-header")) && UI.tableFilter.init();
	hasJqueryObject(UI.$body.find(".table")) && UI.tableArrow.init();
	hasJqueryObject(UI.$body.find(".dropdown-wrap")) && UI.dropDown.init();
	hasJqueryObject(UI.$body.find(".tab-menu")) && UI.tab.init();
	//맵
	hasJqueryObject(UI.$body.find(".side-menu")) && UI.mapMenu.init();
	hasJqueryObject(UI.$body.find(".table-select")) && UI.carGps.init();
	hasJqueryObject(UI.$body.find("i[class^=map-icon-]")) && UI.mapIcon.init();
	//팝업
	hasJqueryObject(UI.$body.find(".evt-chk-trigger")) && UI.popChk.init();
	hasJqueryObject(UI.$body.find(".acc-wrap")) && UI.popAcc.init();
});