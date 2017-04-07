$('.btn').on('click', function () {
	chrome.tabs.executeScript(null, { file: 'writeFile.js' }, function(res){

	});
	//chrome.tabs.getSelected(null, function (tab) {//获取当前tab
	//
	//});
});
