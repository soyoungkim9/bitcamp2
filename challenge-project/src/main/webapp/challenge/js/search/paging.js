var = pageCount

$('#priceSearch').click(() => {
	$.ajax({
		dataType : 'json',
		type: 'POST',
		async: false,
		traditional : true,
		url: serverRoot + '/json/program/pList/'+pageCount+'/12',
		data: {
			minPrice : $('#from_id').val(),
			maxPrice : $('#to_id').val()
		}
	}).done(function(data){

		for(var i = 0; i < data.length; i++) {
			$('#aaa').html(cardBodyFn({list:data}));
		}
		loadCards(data);
	})

});

