var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


/*Form Validation*/

function validateForm() {
  var name = document.getElementById("name");
  var phonenum = document.getElementById("phone");
  var gmail= document.getElementById("email");
  var phone = phonenum.value.trim();

  if(name.value.length < 4){
    alert("Name should at least consist of 4 letters");
    return false;
  }

  else if(!gmail.value.endsWith("gmail.com")){
    alert("Email should end with @gmail.com");
    return false;
  }

  else if(!phone.startsWith("+62")) {
    alert("Phone number must start with '+62'.");
    return false;
  }

  else if(!/^\+62\d+$/.test(phone)) {
    alert("Phone number should consist of numeric digits only.");
    return false;
  }

  else if(phonenum.value.length < 13 || phonenum.value.length > 14){
    alert("Phone number invalid");
    return false;
  }

  alert("Sucessful!")
  return true;
}