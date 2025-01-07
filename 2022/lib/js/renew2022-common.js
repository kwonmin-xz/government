// ie closest polyfill
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
 }
 
 if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
	   var el = this;
 
	   do {
		  if (el.matches(s)) return el;
		  el = el.parentElement || el.parentNode;
	   } while (el !== null && el.nodeType === 1);
	return null;
	};
 }
 
// ie foreach
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

let pc_accordion = document.querySelectorAll('.accordion');
let pc_accordion_toggle = document.querySelectorAll('.accordion .toggle');

if( pc_accordion ){
	for(let j = 0; j < pc_accordion_toggle.length; j++) {
		let _this = pc_accordion_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.list');
			let cont = _list.querySelector('.content-wrap');

			if( _list.classList.contains('on') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('on')}
				});

				let x = document.getElementsByClassName('ir')[0];
				x.innerText="아코디언 닫기";
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('on');}
				});
				

				let x = document.getElementsByClassName('ir')[0];
				x.innerText="아코디언 열기";

				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}



// pc_accordion2
let pc_accordion2 = document.querySelectorAll('.accordion2');
let pc_accordion2_toggle = document.querySelectorAll('.accordion2 .toggle');

if( pc_accordion2 ){
	for(let j = 0; j < pc_accordion2_toggle.length; j++) {
		let _this = pc_accordion2_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.list');
			let cont = _list.querySelector('.aco-cont');

			if( _list.classList.contains('off') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('off')}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('off');}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}


// pc_accordion3
let pc_accordion3 = document.querySelectorAll('.accordion3');
let pc_accordion3_toggle = document.querySelectorAll('.accordion3 .toggle');

if( pc_accordion3 ){
	for(let j = 0; j < pc_accordion3_toggle.length; j++) {
		let _this = pc_accordion3_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.tab02-info');
			let cont = _list.querySelector('.aco-cont');

			if( _list.classList.contains('off') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('off')}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('off');}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}

// pc_accordion4
let pc_accordion4 = document.querySelectorAll('.accordion4');
let pc_accordion4_toggle = document.querySelectorAll('.accordion4 .toggle');

if( pc_accordion4 ){
	for(let j = 0; j < pc_accordion4_toggle.length; j++) {
		let _this = pc_accordion4_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.list');
			let cont = _list.querySelector('.content-wrap');

			if( _list.classList.contains('off') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('off')}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('off');}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}

// modal layer
let pc_modal_wrap = document.querySelectorAll('.modal-blocker');
let pc_modal_open = document.querySelectorAll('.modal-open');
let pc_modal_close = document.querySelectorAll('.modal-close');
let pc_body = document.querySelector('body');

if( pc_modal_wrap ){
	for(let i =0 ; i < pc_modal_open.length ; i++ ){
		let _btn_open = pc_modal_open[i];

		_btn_open.addEventListener('click', function(e){
			e.preventDefault();

			let _href = this.getAttribute('href').replace(/\#/g,'');
			let _layer = document.getElementById(_href);

			let tl = new TimelineMax({
				onStart: function(){
					_layer.classList.add('on');
					pc_body.classList.add('overflow');
				}
			});
			
			tl.to(_layer, {duration: 0, opacity: 0}).to(_layer, {duration: 0.15, opacity: 1});
		});
	}

	for(let i =0 ; i < pc_modal_close.length ; i++ ){
		let _btn_close = pc_modal_close[i];

		_btn_close.addEventListener('click', function(e){
			e.preventDefault();
			let _layer = this.closest('.modal-blocker');

			let tl = new TimelineMax({
				onComplete: function(){
					_layer.classList.remove('on');
					pc_body.classList.remove('overflow');
				}
			});
			
			tl.to(_layer, {duration: 0.15, opacity: 0});
		});
	}
}

function modal_close(){
	let _layer = document.querySelector('.modal-blocker.on');

	let tl = new TimelineMax({
		onComplete: function(){
			_layer.classList.remove('on');
			pc_body.classList.remove('overflow');
		}
	});
	
	tl.to(_layer, {duration: 0.15, opacity: 0});
}

function fn_datepicker(){
	// datepicker
	$.datepicker.setDefaults({
		showOn: 'button',
		buttonText: '날짜 선택',
		buttonImageOnly: false,
		showButtonPanel: true,
		currentText: '오늘',
		closeText: '달력 닫기',
		dateFormat: 'yy.mm.dd',
		showOtherMonths: true,
		prevText: '다음 달',
		nextText: '이전 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		changeYear: true,
		changeMonth : true
	});
	$('.datepicker input').datepicker();
}

$(function(){
	// 레이어 안에서 탭이동
	if( $('.modal').length > 0 ){
		var lm = $('.modal-blocker');
		var lmObj = lm.children(".modal");
		var lmObjTabbable = lmObj.find("button, input:not([type='hidden']), select, iframe, textarea, [href], [tabindex]:not([tabindex='-1'])");
		var lmObjTabbableFirst = lmObjTabbable && lmObjTabbable.first();
		var lmObjTabbableLast = lmObjTabbable && lmObjTabbable.last();
	
		lmObjTabbableLast.on("keydown", function(event) {
			if (!event.shiftKey && (event.keyCode || event.which) === 9) {
				event.preventDefault();
				lmObjTabbableFirst.focus();
			}
		});
	  
	}

	//main tab
	$(document).on('click', '[role="tab"]', function(e){
		e.preventDefault();
		
		var targetId = $(this).attr('aria-controls');
		var $this = $('#'+targetId);
		
		$(this).closest('[role="tablist"]').find('[role="tab"]').attr('aria-selected', false);
		$(this).attr('aria-selected', true);
		
		if( $(this).closest('.tab-area').hasClass('tab-layer') ){
			$(this).closest('.tab-area').find('.tab-cont-wrap').attr('hidden', true);
			$(this).parent().find('.tab').removeClass('on');
			$(this).addClass('on');
			$($this).removeAttr('hidden');
		}
		else {
			$(this).closest('.tab-area').find('.tab-cont').attr('hidden', true);
			$($this).removeAttr('hidden');
		}
		
	});

	
	//
	$(document).on('click', '.btn-pop-ctrl', function(){
		$(this).closest('.pop-ctrl-btn').find('.btn-pop-ctrl').removeClass('disabled');
		$(this).addClass('disabled');
		$(this).closest('.pop-search').find('.pop-roll-cont').toggleClass('on');
	});

	
	// date picker
	if ($(".datepicker").length > 0) fn_datepicker();

	// 검색영역
	$('.main-input-search-pc').keyup(function() {
		var inputKey = $('.main-input-search-pc').val();
		
		if (0 < inputKey.length) {
			$('.keyword-layer').attr('style', 'display:block; z-index:9999;');
		} else {
			$('.keyword-layer').attr('style', 'display:none;');
		}
		
	});

	$('.main-input-search-mb').keyup(function() {
		var inputKey2 = $('.main-input-search-mb').val();
				
		if (0 < inputKey2.length) {
			$('.keyword-layer.mb').attr('style', 'display:block; z-index:9999;');
		} else {
			$('.keyword-layer.mb').attr('style', 'display:none;');
		}
	});	
	
	$(document).click(function(e){
		if (!$(e.target).is('.search-box')) {
			$('.keyword-layer').attr('style', 'display:none;');
		}
	});


	
	// tooltip
	if( $('.renew-tooltip').length > 0 ){
		$(document).on('click', '.tooltip-btn', function(){
			$(this).closest('body').find('.renew-tooltip').removeClass('on');
			$(this).closest('.renew-tooltip').toggleClass('on');
		});
		$(document).on('click', '.tooltip-close', function(){
			$(this).closest('.renew-tooltip').removeClass('on');
		});
	}

	//서민금융 검색옵션
	$(document).on('click', '.btn-option', function(){
		$(this).toggleClass('on');
		$(this).closest('.renew-sub-search-box').find('.option-box').toggleClass('on');
	});

	//  
	if( $('.renew-sub-search-box').length > 0 ){
		$('.option-detail-box').each(function(){
			var _chk = $(this).find('[type="checkbox"]')
			
			_chk.on('change', function(){
				var _chk_leng01 = $(this).closest('.option-value-wrap').find('[type="checkbox"]:not(.all-chk):checked').length;
				
				if( $(this).hasClass('all-chk') ) {
					if( $(this).is(':checked') ){
						$(this).closest('.option-value-wrap').find('[type="checkbox"]:not(.all-chk)').prop('checked', false)
					}
				}
				else {
					$(this).closest('.option-value-wrap').find('[type="checkbox"].all-chk').prop('checked', false)
				}
				
				if( _chk_leng01 == 0 && $(this).closest('.option-value-wrap').find('[type="checkbox"].all-chk').not(':checked') ){
					$(this).closest('.option-value-wrap').find('[type="checkbox"].all-chk').prop('checked', true)
				}
			});
		});
		
		$(document).on('click', '.chk-reset', function(){
			$(this).closest('.option-box-wrap').find('[type="checkbox"]').prop('checked', false);
			$(this).closest('.option-box-wrap').find('[type="checkbox"].all-chk').prop('checked', true);
		});
	}

	
	//swiper
	// .button disabled class  
	$(document).on('click', '.button.disabled', function(e){
		e.preventDefault();
	});

	// .pagination disabled class  
	$(document).on('click', '.pagination .control.disabled', function(e){
		e.preventDefault();
	});

	// 메인 - 메인비주얼
	let mainTopBanner = {};
	if ( $('.visual-wrap .swiper-slide').length == 1) {
		mainTopBanner = {
			loop: true,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination-main",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		}
	} else {
		mainTopBanner = {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 4000,
				disabledOnInteration: false,
			},
			pagination: {
				el: ".swiper-pagination-main",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},			
		}
	}
	var banner_swiper = new Swiper('.visual-wrap', mainTopBanner);
	
	$('.swiper-button-stop').click(function(){
		banner_swiper.autoplay.stop();
		$('.swiper-button-stop').removeClass('on');
		$('.swiper-button-play').addClass('on');
		$('.swiper-button-play').focus();
	});
	$('.swiper-button-play').click(function(){
		banner_swiper.autoplay.start();
		$('.swiper-button-play').removeClass('on');
		$('.swiper-button-stop').addClass('on');
		$('.swiper-button-stop').focus();
	});

	
	$('.main-visual .visual-wrap .swiper-slide a').on({
		focus : function(){
		   banner_swiper.slideTo(0);
		   banner_swiper.autoplay.stop();
		   $('.swiper-button-stop').removeClass('on');
		   $('.swiper-button-play').addClass('on');
		}
	 });

	 // 메인 - 보조금24 (로그인 전 스와이퍼 영역)
	 if( $('.main-subsidy-wrap').length > 0 ){
		 var main_subsidy_swiper = new Swiper('.main-subsidy-wrap', {
			 slidesPerView: 1,
			 spaceBetween: 12,
			 loop: true,
			 pagination: {
				 el: ".swiper-pagination",
				 type: "fraction",
			 },
			 navigation: {
				 nextEl: ".swiper-button-next9",
				 prevEl: ".swiper-button-prev9",
			 },
		 });
		 
	 }
	
	// 메인 - MY 정보
	if( $('.memory-wrap').length > 0 ){
		var visual_swiper = new Swiper('.memory-wrap', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: false,
			pagination: {
				el: ".swiper-pagination2",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next2",
				prevEl: ".swiper-button-prev2",
			},
		});
	}
	
	// 메인 - 자주찾는 서비스 
	if( $('.frequent-swiper-wrap').length > 0 ){
		var frequent_swiper = new Swiper('.frequent-swiper-wrap', {
			slidesPerView: 8,
			spaceBetween: 16,
			slidesPerGroup: 8,
			pagination: {
				el: ".swiper-pagination",
				renderBullet: function (index, className) {
					return '<span class="' + className + '" aria-label="'+ (index + 1) +'"></span>';
				}
			},
			navigation: {
				nextEl: ".swiper-button-next3",
				prevEl: ".swiper-button-prev3",
			},
		});
	}

	// 메인 - 자주찾는 서비스 - 모바일
	if( $('.frequent-swiper-wrap-mb').length > 0 ){
		var frequent_swiper = new Swiper('.frequent-swiper-wrap-mb', {
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: ".swiper-pagination",
			},
			navigation: {
				nextEl: ".swiper-button-next3-mb",
				prevEl: ".swiper-button-prev3-mb",
			},
			
		});
	}


	// 툴팁 닫기  
	$(document).on('click', '.tooltip .tooltip-close', function(){
		$(this).closest('.tooltip').hide();
	});

	// 메인 - 원스톱 서비스
	if( $('.onestop-swiper').length > 0 ){
		var onestop_swiper = new Swiper('.onestop-swiper', {
			slidesPerView: 7,
			spaceBetween: 20,
			slidesPerGroup: 7,
			pagination: {
				el: ".swiper-pagination",
				renderBullet: function (index, className) {
					return '<span class="' + className + '" aria-label="'+ (index + 1) +'"></span>';
				}
			},
			navigation: {
				nextEl: ".swiper-button-next4",
				prevEl: ".swiper-button-prev4",
			},
			breakpoints: {
				// pc 
				1280: {
					slidesPerView: 5,
					spaceBetween: 20,
					slidesPerGroup: 5,
				},
				720: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
			}
		});
	}


	// 메인 - 이달의 영상 뉴스
	if( $('.video-news-box').length > 0 ){
		var video_swiper = new Swiper('.video-news-box', {
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next6",
				prevEl: ".swiper-button-prev6",
			},
			observer: true,
			observeParents: true,
		});
	}

	// 메인 - 공모전
	if( $('.competition-news-box').length > 0 ){
		var competition_swiper = new Swiper('.competition-news-box', {
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next7",
				prevEl: ".swiper-button-prev7",
			},
			observer: true,
			observeParents: true,
		});
	}

	// 메인 - 하단 배너
	let mainBotBanner = {};
	if ( $('.banner-wrap .swiper-slide').length == 1) {
		mainBotBanner = {
			slidesPerView: 1,
			spaceBetween: 20,
			autoplay: false,
			loop:true,
			pagination: {
				el: ".swiper-pagination8",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next8",
				prevEl: ".swiper-button-prev8",
			},
		}
	} else {
		mainBotBanner = {
			slidesPerView: 1,
			loop:true,
			autoplay: {
				delay: 3000,
				disabledOnInteration: false,
			},
			pagination: {
				el: ".swiper-pagination8",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next8",
				prevEl: ".swiper-button-prev8",
			},
		}
	}
	var bot_banner_swiper = new Swiper('.banner-wrap', mainBotBanner);

	if( $('.banner-wrap').length > 0 ){
		$('.swiper-button-stop8').click(function(){
			bot_banner_swiper.autoplay.stop();
			$('.swiper-button-stop8').removeClass('on');
			$('.swiper-button-play8').addClass('on');
			$('.swiper-button-play8').focus();
		});
		$('.swiper-button-play8').click(function(){
			bot_banner_swiper.autoplay.start();
			$('.swiper-button-play8').removeClass('on');
			$('.swiper-button-stop8').addClass('on');
			$('.swiper-button-stop8').focus();
		});
	}
	
	$('.banner-box .banner-wrap .swiper-slide a').on({
		focus : function(){
			bot_banner_swiper.slideTo(0);
			bot_banner_swiper.autoplay.stop();
		   $('.swiper-button-stop8').removeClass('on');
		   $('.swiper-button-play8').addClass('on');
		}
	 });

	// 국민소통채널 배너
	if( $('.channel-slide-new').length > 0 ){
		var channel_swiper = new Swiper('.channel-slide-new', {
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 12,
			navigation: {
				nextEl: ".swiper-button-next10",
				prevEl: ".swiper-button-prev10",
			},
			breakpoints: {
				// pc 
				1024: {
					slidesPerView: 4,
					spaceBetween: 10,
					slidesPerGroup: 4,
				},
				720: {
					slidesPerView: 3,
					spaceBetween: 10,
					slidesPerGroup: 3,
				},
			}
		});
	}

	if( $('.subsidy-swiper').length > 0 ){
		var subsidy_swiper = new Swiper('.subsidy-swiper', {
			slidesPerView: "auto",
			spaceBetween: 12,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				// pc 버전
				750: {
					slidesPerView: "1",
					spaceBetween: 0,
				},
			}
		});
	}

	$('.tit-link-box a.more').click(function(){
		$('.fre_layer_box').show();
	})

});

//시스템팝업 레이어 : 페이지 로딩시 자동으로 뜨는 레이어
function openModal_loading() {
	// 모달의 각 구성 요소 선택
	var layerWrap = jQuery('.system_pop'),
		layerTitle = layerWrap.find('.system_pop_tit'),
		layerCont = layerWrap.find('.system_pop_body'),
		layerFoot = layerWrap.find('.system_pop_footer'),
		layerbody = layerWrap.find('.system_pop_body>p'),
		btnClose = layerWrap.find('.btn-dayclose');

	// 모달 높이 조절 함수
	function adjustModalHeight() {
		var layerTitleHeight = layerTitle.outerHeight()+ layerbody.outerHeight(),
			layerFootHeight = layerFoot.outerHeight(),
			windowHeight = jQuery(".system_pop").height();
		var maxHeightValue = windowHeight - layerTitleHeight - layerFootHeight;
		if (jQuery(window).width() <= 805) {
			// 화면 폭이 805 이하일 때
			layerCont.css({
				'max-height': maxHeightValue  + 'px',
				'height': 'auto'
			});
		} else {
			layerCont.css({
				'max-height': maxHeightValue  + 'px',
				'height': 'auto'
			});
		}
	}

	// 창 크기 조절 이벤트 핸들러 등록
	jQuery(document).ready(adjustModalHeight);
	jQuery(window).resize(adjustModalHeight);

	// 닫기 버튼 클릭 이벤트 처리
	btnClose.on('click', function (e) {
		e.preventDefault();
		
		if (jQuery('.layer_modal.on').length === 0) {
			jQuery('html').removeClass('overflow');
			layerWrap.removeClass('on');
		}
	});
}

jQuery(document).ready(function(){

	jQuery('html').toggleClass('overflow', jQuery('.system_pop.on').length > 0);
	
	// 자동 modal 실행 함수
	openModal_loading();
});
