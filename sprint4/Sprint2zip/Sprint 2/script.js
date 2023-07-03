const foto = document.querySelector('#foto');
const especie = document.querySelector('#especie');
const sexo = document.querySelector('#sexo');
const loc = document.querySelector('#loc');
const desc = document.querySelector('desc');
const pet = 
{
    'photo': photo.value,
    'especie': especie.value,
    'sexo': sexo.value,
    'loc': loc.value,
    'desc': desc.value,
};

if(localStorage.getItem('PETS_ACHADO') === null) 
{
    localStorage.setItem('PETS_ACHADO', JSON.stringify([pet]));
} else 
{
    const oldpets = JSON.parse(localStorage.getItem('PETS_ACHADO'));
    oldpets.push(pet);
    localStorage.setItem('PETS_ACHADO', JSON.stringify(oldpets));
}
