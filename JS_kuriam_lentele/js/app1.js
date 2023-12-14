document.getElementById('tableForm').addEventListener('submit', (e)=>{
    e.preventDefault();  //numatytosios elgsenos keitimas
    let table = document.createElement('table');
    document.querySelector('.table').appendChild(table);
    for(let i=0;i<=document.getElementById('rows').value;i++){
        let tr=document.createElement('tr');
        for(let j=0;j<=document.getElementById('columns').value;j++){
            let td=document.createElement('td');
            td.textContent = "Man patinka JavaScript";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

});