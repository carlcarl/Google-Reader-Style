// ==UserScript==
// @name        Pure Reader by carlcarl
// @description Pure Reader for Opera, Chrome and Firefox
// @include      https://*.google.com/reader/view/*
// @include      http://*.google.com/reader/view/*
// @include      htt*://*.google.*/reader/view*
// @author      carlcarl
// ==/UserScript==


(function(){

	window.onload = function ()
	{
		var hide = '#right-section{display:none;}#logo-container{display:none;}#sections-header{display:none;}#lhn-recommendations{display:none;}#title-and-status-holder{display:none;}#logo-section{display:none;}';

		var size = '#viewer-header-container, #viewer-header{height:34px;}#lhn-add-subscription-section{height:40px;width:250px;}.scroll-tree li.folder .link, .scroll-tree li.sub{height: 23px;}#top-bar{height: 50px;}.lhn-section-primary{height:25px;}#scrollable-sections-holder{width:250px;}#nav,#logo-container,#lhn-add-subscription-section,#scrollable-sections-top-shadow,#scrollable-sections-bottom-shadow{width:250px;}';

		var pureReaderCSS = hide + size + 'body, #lhn-selectors, #viewer-header-container, #viewer-header{background:rgb(246,246,246);text-rendering:optimizeLegibility;}.lhn-section-primary, .folder .link{background:rgb(246,246,246) !important;}#star-selector, #directory-selector, #trends-selector,  .sub, .sub a.link{background:rgb(246,246,246) !important;border-bottom-color: rgb(235, 235, 235);border-bottom-style: solid;border-bottom-width: 1px;}.sub-link, .overview-metadata, #current-entry.read .entry-container .entry-body{color: rgb(88, 88, 88);}.scroll-tree li a .name-unread, #nav a, #nav a .text, #nav .link, .scroll-tree li a .name, #sub-tree-header, .entry-container .entry-title a, .entry-container .entry-body a{color: rgb(88, 88, 88);}.scroll-tree li{margin-top:0;margin-bottom:0;}#left-section{width:90%;margin-left:3%;margin-top:3%;}.unread-count, .sub-unread-count{float:right;margin-right:20px;}#lhn-subscriptions-minimize{left:5px;}#sub-tree-header{padding-left:20px;}.folder .folder .folder-toggle{margin-left: 13px;}.folder .folder > a > .icon { margin-left: 28px;}.folder .folder > ul .icon { margin-left: 35px;}.folder .sub-icon { margin-left: 27px;}.section-minimize{left:5px;}#lhn-selectors .selector{padding-left: 20px;}#lhn-selectors #star-selector .selector-icon, #lhn-selectors #trends-selector .selector-icon{margin-left: 11px;}#lhn-selectors .lhn-section-secondary .selector.no-icon{padding-left: 52px;}#viewer-header-container{position:absolute; top:94%;width:78%;z-index:1001;right:18px;padding-top:5px;}#item-up-down-buttons{position:absolute;left:2%;}#viewer-refresh{margin-left:15%;}#nav{/*overflow-y:scroll;*/}#chrome{margin-left:250px;}.card{padding-left:3%;padding-top:3%;}#viewer-top-controls-container{margin-top:-18px;}.selectors-footer{border-bottom-width:0;}';

		var head = document.getElementsByTagName('head')[0];
		var style = document.createElement('style');
		var rules = document.createTextNode(pureReaderCSS);

		style.type = 'text/css';

		if(style.styleSheet) {
			style.styleSheet.cssText = rules.nodeValue;
		} else {
			style.appendChild(rules);
		}
		head.appendChild(style);

	}
})();

