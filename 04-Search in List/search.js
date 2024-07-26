function search() {
   let searchValue = document.getElementById('searchText').value;
   let listItems = document.querySelectorAll('li');
   let resultDiv = document.getElementById('result');

   let maches = 0;

   for (i = 0; i < listItems.length; i++) {
      if(listItems[i].textContent.toLowerCase().includes(searchValue.toLowerCase())) {
         listItems[i].style.fontWeight = 'bold';
         listItems[i].style.textDecoration = 'underline';
         maches++;
      }
      else {
         listItems[i].style.fontWeight = '';
         listItems[i].style.textDecoration = '';
      }
   }

   resultDiv.textContent = `${maches} matches found`
}
