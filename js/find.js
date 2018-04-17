
function searchBookmarks() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchTools');
    filter = input.value.toUpperCase();
    ul = document.getElementById("linkList");
    li = document.querySelectorAll('h3');
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        if(typeof a!='undefined'){
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                    jQuery(li[i]).nextUntil('h3').css('display','block')
                } else {
                    li[i].style.display = "none";
                    jQuery(li[i]).nextUntil('h3').css('display','none')
                }
            }
    }
}


jQuery(document).ready(function(){
	$('#TOC').on('click',function(){
		if($(this).is(':checked')){
			$('#toc-span').html('-');
		}else{
			$('#toc-span').html('+');
		}
	})
});