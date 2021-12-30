// Variables & Sélecteurs
const images = document.querySelectorAll('.containerImages img');
const suivant = document.querySelector('.right');
const precedant = document.querySelector('.left');
const selects = document.querySelectorAll('.select');

images[0].style.opacity = '1';

let index = 0;

// Événements
suivant.addEventListener('click', imageSuivante);
precedant.addEventListener('click', imagePrecedante);
document.addEventListener('keydown', keypress);

//Fonctions
function imageSuivante(e)
{
    e.preventDefault();

    if(index < 2)
    {
        images[index].classList.remove('imageAffiche');
        images[index].classList.add('imageMasque');
        selects[index].classList.remove('activeSelect');
        index++;
        images[index].classList.add('imageAffiche');
        images[index].classList.remove('imageMasque');
        selects[index].classList.add('activeSelect');
    }
    else if(index === 2)
    {
        images[index].classList.remove('imageAffiche');
        images[index].classList.add('imageMasque');
        selects[index].classList.remove('activeSelect');
        index = 0
        images[index].classList.add('imageAffiche');
        images[index].classList.remove('imageMasque');
        selects[index].classList.add('activeSelect');
    }
}

function imagePrecedante(e)
{
    e.preventDefault();

    if(index > 0)
    {
        images[index].classList.remove('imageAffiche');
        images[index].classList.add('imageMasque');
        selects[index].classList.remove('activeSelect');
        index--;
        images[index].classList.add('imageAffiche');
        images[index].classList.remove('imageMasque');
        selects[index].classList.add('activeSelect');
    }
    else if(index === 0)
    {
        images[index].classList.remove('imageAffiche');
        images[index].classList.add('imageMasque');
        selects[index].classList.remove('activeSelect');
        index = 2
        images[index].classList.add('imageAffiche');
        images[index].classList.remove('imageMasque');
        selects[index].classList.add('activeSelect');
    }
}

function keypress(e)
{
    if(e.keycode === 37)
    {
        imagePrecedante;
    }
    else if(e.keycode === 39)
    {
        imageSuivante;
    }
}

selects.forEach(select =>
{
    select.addEventListener('click', function()
    {
        for(let i = 0 ; i < selects.length ; i++)
        {
            selects[i].classList.remove('activeSelect');
        }
        this.classList.add('activeSelect');

        images[index].classList.remove('imageAffiche');
        images[index].classList.add('imageMasque');
        index = this.getAttribute('data-clic') - 1;
        selects[index].classList.add('activeSelect');
        images[index].classList.add('imageAffiche');
        images[index].classList.remove('imageMasque');
    });
});
