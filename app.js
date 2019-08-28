function onFormSubmit() {
    // getting the values of the form
    var form = document.getElementById('my-form');
    console.log(form);
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value; 
    console.log(name);
    console.log(email);
    var table = document.getElementById("my-table").getElementsByTagName("tbody")[0];
    console.log(table);
    var newRow = table.insertRow();
    let cell = newRow.insertCell(0);
    cell.innerHTML = name;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = email;

    // add to the table:
    // check out documentation to get from bdy and insert a new row with the entry values
}
function playSong(){
    var audio = new Audio('./assets/LaCampanella.mp3')
    audio.play();
}