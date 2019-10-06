document.querySelector(".form"),addEventListener("load", function(event){

    let Estado = document.getElementById("itensestado");

    addEstados(Estado);
    
} )


burger = document.querySelector('.burger');

nav = document.querySelector('#' + burger.dataset.target );

burger.addEventListener('click', function(){

        // Get the target from the "data-target" attribute
        const target = burger.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        burger.classList.toggle('is-active');
        $target.classList.toggle('is-active');
})
