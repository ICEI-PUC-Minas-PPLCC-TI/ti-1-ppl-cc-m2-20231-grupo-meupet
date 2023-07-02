(function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', evt => {
        evt.preventDefault();

        const nome = document.querySelector('#nome');
        const idade = document.querySelector('#idade');
        const especie = document.querySelector('#especie');
        const local = document.querySelector('#local');
        const desc = document.querySelector('#desc');
        const foto = document.querySelector('#foto');
        const pet = {
            'nome': nome.value,
            'idade': idade.value,
            'especie': especie.value,
            'local': local.value,
            'desc': desc.value,
            'foto': foto.value
        };

        if(localStorage.getItem('PETS_PERDIDOS') === null) {
            localStorage.setItem('PETS_PERDIDOS', JSON.stringify([pet]));
        } else {
            const oldpets = JSON.parse(localStorage.getItem('PETS_PERDIDOS'));
            oldpets.push(pet);
            localStorage.setItem('PETS_PERDIDOS', JSON.stringify(oldpets));
        }

        evt.target.reset();
    });
})()