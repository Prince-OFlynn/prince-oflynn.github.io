console.log("from script file");
function toggleMe(a) {
   var e = document.getElementById(a);
   var toggleIcon = document.getElementById('toggle-icon');
   if(!e) return true;

   if(e.style.display == "none") {
      e.style.display = "block";
      toggleIcon.innerHTML = '-';
   }
   else {
      e.style.display = "none";
      toggleIcon.innerHTML = '+';
   }
   return true;
}