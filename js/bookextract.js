
var bookArr=[];

jQuery(function($){
	
	//bookArr=collect($("#main"));
	var request = $.ajax({
	  url: "read.html",
	  method: "GET",
	  dataType: "html"
	});
	request.done(function( data ) {
	  $( "body" ).html( data );
	  mycollect();
	  
	});
	request.fail(function( jqXHR, textStatus ) {
	  alert( "Request failed: " + textStatus );
	});

});

function mycollect(){
	console.log("length of anchor: "+ $("a").length);
	$("a").each(function(count){
		
		var item={};
		var $this=$(this);
		item.title=$this.html();
		item.topic=$this.attr("title");
		item.href=$this.attr("href");
		item.subtopic=$this.attr("data-sub");
		item.createdate=$this.attr("ADD_DATE");
		item.moddate= $this.attr("LAST_MODIFIED") || $this.attr("ADD_DATE");
		console.log(count+". "+item.moddate);
		//item.createdate= new Date(item.createdate);
		//item.moddate= new Date(item.moddate)
		//console.log(count+". "+item.moddate);
		
		bookArr.push(JSON.stringify(item));
	});
	
	
	var textToSave=bookArr;
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'myFile.txt';
	hiddenElement.click();
}


function collect($elem){
	var resultArr=[];
	$elem.children("DT").each(function(count){
		var result={};
		if($(this).children("h3").length>0){
			result.folder=$(this).children("h3").html();
			console.log("result.folder$(this).next().length :"+ $(this).next().length);
			console.log("result.folder :"+result.folder);
			result.folderitem=collect($(this).next());	
			
		}
		else if($(this).children("a").length>0){
			result.folder="NA";
			result.folderitem=[];
			result.title=$(this).children("a").html();
			console.log("result.title :"+result.title);
			result.href=$(this).attr("href");
			result.adddate=$(this).attr("ADD_DATE");
			//(!typeof $(this).attr("LAST_MODIFIED")=="undefined") ? result.lastdate=$(this).attr("LAST_MODIFIED"):result.lastdate="NA";
			resultArr.push(result);
		}
		console.log("***************************");
	});
	console.log("-----------------------------------");
	return resultArr;
	
}
