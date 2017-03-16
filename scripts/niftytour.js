/* File Name: niftytour.js
Date: 02/19/17
Programmer: Jeanie Housden */



      <script type="text/javascript">
	jQuery(function($){
    	$( '.menu-btn' ).click(function(){
    		$('.responsive-menu').addClass('expand')
    		$('.menu-btn').addClass('btn-none')
    	})
    	
    	 $( '.close-btn' ).click(function(){
    		$('.responsive-menu').removeClass('expand')
    		$('.menu-btn').removeClass('btn-none')
    	})
  	})
 </script>