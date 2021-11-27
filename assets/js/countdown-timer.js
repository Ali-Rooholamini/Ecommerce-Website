
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var demos = document.getElementsByClassName("demos");
  for(i=0;i<demos.length;i++)
  {
    demos[i].innerHTML = "<span id=#days class=days-time>" + days + "</span>" 
    + "<span id=#hours class=hours-time>" + hours  + "</span>"
    + "<span id=#minutes class=minutes-time>" + minutes + "</span>"
    + "<span id=#seconds class=seconds-time>" + seconds + "</span>";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    for(i=0;i<demos.length;i++)
    {
      demos[i].innerHTML = "";
    }

    // blur effect
    var blur_product = document.getElementsByClassName("blur-null");
    for(i=0;i<blur_product.length;i++)
    {
      blur_product[i].classList.add("blur-product");
    }

    // expired-demo
    var expired_demo = document.getElementsByClassName("expired-demo");
    for(i=0;i<expired_demo.length;i++)
    {
      expired_demo[i].classList.add("expired");
    }

    // expired
    var expired = document.getElementsByClassName("expired");
    for(i=0;i<expired.length;i++)
    {
      expired[i].innerHTML = "<span>فروش ویژه محصول به پایان رسید</span>";
    }

  }
}, 1000);

// owl-carousel ----------------------
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    rtl:true,
    loop:true,
    margin: 10,
    nav:true,
    center:true,
    dots:false,
    autoplay: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:true,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
  });
});

// zoomy product-image -------------------
var urls = [
  'assets/img/product-page/2J875AA-1_T1608623882.png',
  'assets/img/product-page/head-set-2.png'
];
var options = {
  //thumbLeft:true,
  //thumbRight:true,
  //thumbHide:true,
  // width:300,
  // height:500,
};
$('#el').zoomy(urls,options);