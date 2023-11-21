$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  
  const swedish = document.getElementById('#Swededish');
  const english = document.getElementById('#English');
   function language() {
    var spark = $("#language").val();
    if(spark ==="English"){
      $("#Swededish").hide();
      $("#English").show();
    }else if(spark ==="Swededish"){
      $("#Swededish").show();
      $("#English").hide();
    }
    
   }
   function sendEmail() {
    var to = document.getElementById("to").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // You would typically send this data to a server, and the server would handle the email sending.
    // For demonstration purposes, let's just log the details to the console.
    console.log("To: " + to);
    console.log("Subject: " + subject);
    console.log("Message: " + message);

    // Clear the form after sending (optional)
    document.getElementById("emailForm").reset();
   document.getElementById("thankYouMessage").style.display = "block";
   setTimeout(function () {
    location.reload();
  }, 2000)
  
}

