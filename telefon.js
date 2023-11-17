fetch('telefon.json')
  .then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('table-body');
    data.forEach(row => {
        const tr = document.createElement('tr');
        const tdNavn = document.createElement('td');
        const tdTelefonnummer = document.createElement('td');
        tdNavn.textContent = row.navn;
        tdTelefonnummer.innerHTML = `<a href="tel:${row.telefonnummer}">${row.telefonnummer}</a>`;
        tr.appendChild(tdNavn);
        tr.appendChild(tdTelefonnummer);
        tableBody.appendChild(tr);
    });});

