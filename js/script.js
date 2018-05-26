
// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });
});


// Portfolio Portfolio Caption








// Highlight Nav on Scroll -debug


/*
$(document).ready(function(){

   document.("section").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
   });

});

*/
