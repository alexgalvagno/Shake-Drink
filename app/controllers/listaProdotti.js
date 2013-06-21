function searchProdotti() {
	var data = [];
	
	for (var i = 0, j = attivita.length; i < j; i++)
	{
		data.push({
			id: i,
			title: 'Title' + 1
		});
	}
			
	var rows = [];
	_.each(data, function(item) {
		rows.push(Alloy.createController('rowProdotti', {
			id: item.id,
			title: item.title,
		}).getView());
	});
	
	$.table.setData(rows);
	$.activityIndicator.hide();
	$.listaProdotti.remove($.activityIndicator);
}

$.activityIndicator.show();
searchProdotti();