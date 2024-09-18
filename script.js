const paragraph = document.getElementById('words');
const button = document.getElementById('button-id');

button.addEventListener('click', function() { 
    paragraph.textContent = 'New words have appeared!';
});