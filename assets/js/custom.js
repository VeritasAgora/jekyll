function showSearch() {
   var sw = document.getElementById('search-wrapper');
   var b = document.getElementById('icon-search');
   var h = document.getElementById('header');
   if (sw.style.display === 'none') {
     sw.style.display = 'block';
     b.className = 'icon-close';
     h.style.borderBottom = '0px'
   } else {
     sw.style.display = 'none';
     b.className = 'icon-search';
     h.style.borderBottom = '1px solid'
   }
 }