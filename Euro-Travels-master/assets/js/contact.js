/*------------------------------------------
 Contact form
 ------------------------------------------*/

$(document).ready(function () {
    $( '.sr-button' ).click(function() {
        $( "#hidden" ).show( 1000 );
    });
    $("#signup").click(function(e){
         $("#signup").button('loading');
        setTimeout(function(){
            window.location.href = "chef.html";
        }, 1000)
        
    })
    
    
});


