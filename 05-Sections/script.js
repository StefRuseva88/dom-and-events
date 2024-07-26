function create(words) {
 let divContent = document.getElementById('content'); 
 
   for (let i = 0; i < words.length; i++) {
      let newDiv = document.createElement('div');
      let newParagraph = document.createElement('p');
      newParagraph.textContent = words[i];
      newParagraph.style.display = 'none';

      newDiv.appendChild(newParagraph);
      divContent.appendChild(newDiv);

      newDiv.addEventListener('click', function() {
         newParagraph.style.display = '';
      });
   }
}