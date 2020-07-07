$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/CategoryRestService/FindAll"
    }).then(function(data) {
    	$.each(data,function(i,obj){
    		var item="<tr> <th scope = 'row'>"+ obj.id+ "</th>"+
    		"<td>"+ obj.name+"</td>"+
    		"<td>"+ obj.description+"</td>";
    	   content=content.concat(item);
    	} );
        $('.table-to-insert').append(content);
    });
});