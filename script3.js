
/*--------------DOM -------------------*/

const Start=document.getElementById("btnIntro");






/* 
---------------Eventos-------------------------- */
/* Cuando el usuario le da click al boton de comenzar, este envento se encarga de retirar el modad
toogle se usa para que si ya tiene esa clase, se la retire, y si no la tiene se la coloque */
Start.addEventListener('click', ()=> {
    Start.parentNode.parentNode.parentNode.classList.toggle('hide-modal');
    document.querySelector('body').classList.toggle('no-scroll')
    playAudio('intro');
});


