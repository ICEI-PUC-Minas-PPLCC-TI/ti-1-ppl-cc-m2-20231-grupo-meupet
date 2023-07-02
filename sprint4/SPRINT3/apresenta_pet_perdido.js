(function () {
    if (localStorage.getItem('PETS_PERDIDOS') === null) return;
    document.querySelector('#nothing').remove();

    const ROWS = 3;

    const cnt = document.querySelector('#container');
    const pets = JSON.parse(localStorage.getItem('PETS_PERDIDOS'));
    const numrows = Math.ceil(pets.length / ROWS);
    const rows = [];


    for (let i = 0; i < numrows; i++) {
        const row = document.createElement('div');
        row.classList.add('row', 'row-cols-3');
        cnt.appendChild(row);
        rows.push(row);
    }

    pets.forEach((pet, i) => {
        const col = document.createElement('div');
        const idx = Math.floor(i / ROWS);

        col.classList.add('col', 'btn');
        col.style.backgroundImage = `url(${pet['foto']})`;
        col.innerHTML = `<div class='list-group'><div class='list-group-item list-group-item-action flex-column align-items-start active'><div class='d-flex w-100 justify-content-between'><h5 class='mb-1'>${pet['nome']}</h5><small>${pet['idade']}</small></div><p class='mb-1'>${pet['desc']}</p><small>${pet['local']}</small><small>${pet['especie']}</small></div></div>`

        col.addEventListener('mouseover', () => {
            col.firstChild.style.display = 'block';
            col.style.backgroundImage = 'none';
        });

        col.addEventListener('mouseout', () => {
            col.firstChild.style.display = 'none';
            col.style.backgroundImage = `url(${pet['foto']})`;
        });

        rows[idx].appendChild(col);
    });
})();