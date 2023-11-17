// telefon.js
const connection = new XMLHttpRequest();
connection.open('GET', 'http://localhost:3000/getposts');
connection.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        const tableBody = document.getElementById('table-body');
        data.forEach(row => {
            const tr = document.createElement('tr');
            const tdNavn = document.createElement('td');
            const tdTelefonnummer = document.createElement('td');
            tdNavn.textContent = row.navn;
            tdTelefonnummer.textContent = row.telefonnummer;
            tr.appendChild(tdNavn);
            tr.appendChild(tdTelefonnummer);
            tableBody.appendChild(tr);
        });
    }
};
connection.send();