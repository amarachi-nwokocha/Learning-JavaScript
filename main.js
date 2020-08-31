const multiplier = document.getElementById('value1').value;
 let range = document.getElementById('value2').value;
 const table = document.getElementById('tables')


function timesTable() {
    let range = document.getElementById('value2').value;
    const multiplier = document.getElementById('value1').value;

    let displayTable = '';
    for (let i=1; i<=range; i++) {

      displayTable +=  multiplier + " x " + i +" = "+ multiplier*i + "<br>";
     
    }
    const table = document.getElementById('tables').innerHTML = displayTable;
 }
