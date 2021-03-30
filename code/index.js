var StudentName = localStorage.getItem('username');
document.getElementById('StudentName').innerHTML=StudentName;

function clearall() {localStorage.clear();}