function getEmoteList (term) {
	var reqURL = "http://www.myfreecams.com/mfc2/php/user_chat_images.php?lookup=1&lookup_value=" + term + "&search_type=shortcut&" + Math.random();
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.open("GET", reqURL, true);
	xmlhttp.send();

	return xmlhttp.responseText;
}
