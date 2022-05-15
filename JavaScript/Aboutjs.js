$(document).ready(function(){
     //navmanu dropdown
     const items = $("#navlinks")
     items.hide()
     $("#Logo").mouseenter(function(){
         $(items).slideDown("slow")
     })
 
     $("#navlinks").mouseleave(function(){
         $(items).slideUp()
     })
     
})