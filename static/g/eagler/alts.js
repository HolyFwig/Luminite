function view_alts() {
	const w = 530;
	const h = 450;
	var win = window.open("", "_blank", 
		"top=" + Math.round((window.screen.height - h) / 2.0) + "," +
		"left=" + Math.round((window.screen.width - w) / 2.0) + "," +
		"width=" + w + ",height=" + h + ",menubar=0,status=0,titlebar=0,toolbar=0"
	);
	win.document.write(
		"<html><head><title>Eaglercraft URLs</title><style type=\"text/css\">" +
		"a,a:link,a:hover,a:visited{color: white;}" +
		"a:active{color: yellow;}li{margin:10px 0px;}</style></head>" +
		"<body style=\"color:white;background-color:black;font-family:sans-serif;padding:20px;font-size:1.8em;overflow:hidden;\">" +
		"<h4>Official Eaglercraft URLs:</h4>" +
		"<ul>" +
		"<li><a href=\"javascript:window.top.open('https://g.deev.is/eaglercraft/');window.close();\">" +
		"https://g.deev.is/eaglercraft/</a></li>" +
		"<li><a href=\"javascript:window.top.open('https://eaglercraft.net/');window.close();\">" +
		"https://eaglercraft.net/</a></li>" +
		"<li><a href=\"javascript:window.top.open('https://eaglercraft.org/');window.close();\">" +
		"https://eaglercraft.org/</a></li>" +
		"<li><a href=\"javascript:window.top.open('https://eaglercraft.me/');window.close();\">" +
		"https://eaglercraft.me/</a></li>" +
		"</ul>" +
		"</body></html>"
	);
}