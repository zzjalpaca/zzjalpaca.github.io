var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 640;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
	var version = parseFloat(RegExp.$1);
	if (version > 2.3) {
		document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi,user-scalable=no">');
	} else {
		document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi,user-scalable=no">');
	}
} else {
	document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi,user-scalable=no">');
}


$(".mjCont").find("p").find("span").css("font-size","24px");
$(".mjCont").find("p").find("span").css("line-height","30px");
