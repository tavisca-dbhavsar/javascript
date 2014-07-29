window.onload=function(){

var btnhotel=document.getElementById("hotelid");
var btncar=document.getElementById("carid");
var btnreload=document.getElementById("reloadid");


btnreload.onclick=function (){
		window.location.reload();
}


btnhotel.onclick=function(){
 	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{

		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
			var obj=JSON.parse(xmlhttp.responseText);

			var i=0;

			while(obj.deals[i]!='undefined')
			{
				var div =document.createElement("div");
				if(i%2==0){
				div.style.backgroundColor='lightblue';}
				else
				div.style.backgroundColor='lightyellow';
			
			document.body.appendChild(div);
			div.innerHTML="HotelId :  "+obj.deals[i].hotelId+"<br>"
												+"HotelName :  "+obj.deals[i].hotelName+"<br>"
												+"Title : "+obj.deals[i].title+"<br>"
												+"Description  :"+obj.deals[i].description+"<br>"
												+"Image  :"+show_image(obj.deals[i].imageUrl,50,50);
			i++;
			}
		}
	}
	 function show_image(src, width, height) {
 	    
          var img = document.createElement("img");
          img.src = src;
          img.width = width;
          img.height = height;
          // img.alt = alt;

          // This next line will just add it to the <body> tag
         document.body.appendChild(img);
    }
//xmlhttp.open("GET","http://dev-mystique.tavisca.com/apis",true);
//xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=m53hupizn4watlrww54xe4h4",true);
xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=m53hupizn4watlrww54xe4h4&&$filter=Type eq 'hotel'",true);


xmlhttp.send();
}


//------car-------

btncar.onclick=function(){

 	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{

		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
			var obj=JSON.parse(xmlhttp.responseText);

			var i=0;

			while(obj.deals[i]!='undefined')
			{
					var div =document.createElement("div");
				if(i%2==0){
					div.style.backgroundColor='lightblue';
		    	}
				else{
					div.style.backgroundColor='lightyellow';
		   		}
			document.body.appendChild(div);
			div.innerHTML="Rental CompanyName : "+obj.deals[i].rentalCompanyName+"<br>"
												+"Rental CompanyCode :  "+obj.deals[i].rentalCompanyCode+"<br>"
												+"Title : "+obj.deals[i].title+"<br>"
												+"Description  :"+obj.deals[i].description+"<br>"
												+"Image  :"+show_image(obj.deals[i].imageUrl,50,50);
			i++;
			}
		}
	}
	 function show_image(src, width, height) {
 	     
          var img = document.createElement("img");
          img.src = src;
          img.width = width;
          img.height = height;

        
          // img.alt = alt;

          // This next line will just add it to the <body> tag
         document.body.appendChild(img);
    }
//xmlhttp.open("GET","http://dev-mystique.tavisca.com/apis",true);
//xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=m53hupizn4watlrww54xe4h4",true);
xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=m53hupizn4watlrww54xe4h4&&$filter=Type eq 'car'",true);


xmlhttp.send();
}



}//window end