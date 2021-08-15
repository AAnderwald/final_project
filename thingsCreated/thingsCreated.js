var slideIndex = 0;
showSlides();

function showSlides() 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var imgAlls = document.getElementsByClassName("imgAll");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < imgAlls.length; i++) 
  {
    imgAlls[i].className = imgAlls[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  imgAlls[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}
