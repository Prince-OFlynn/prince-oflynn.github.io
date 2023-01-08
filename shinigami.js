console.log("from script file");
function toggleMe(a) {
   var e = document.getElementByClassName("collapsible");
   if(!e) return true;

   if(e.style.display == "none") {
      e.style.display = "block"
   }
   else {
      e.style.display = "none"
   }
   return true;
}