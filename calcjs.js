function insert(num) {
 	$('.display').val($('.display').val() + num);
 }
 function c()
 {
 	$('.display').val('');
 }
 function equal()
 {
 	var x=$('.display').val();
 	
 	if(x.charAt(0)=='/'){
 	$('.display').val('error');}
 	if(x.charAt(0)=='%'){
 	$('.display').val('error');}
 	if(x.charAt(0)=='*'){
 	$('.display').val('error');}
 	
     
     	
 	
 		// $('.display').val("error")
 	
$('.display').val(eval($('.display').val()))

 }
 function del()
 {
 	var x=$('.display').val();
 	$('.display').val(x.substring(0,x.length-1));
 }
 function fact(num)
 { $('.display').val($('.display').val() + num);
   var x=$('.display').val();
   
    if(x.charAt(0)=='!')
    	$('.display').val("");
      else
      {
 	
 	 // $('.display').val($('.display').val() + '!');

 	 var w=$('.display').val();
        var j=1;
 	 for (var i = 1; i <= w; i++) {
 	 	 i*=j;

 	 }
 	

 	  $('.display').val(i);
 	}
	 	 
 }