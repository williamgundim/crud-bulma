class View{

    constructor(div){

        this._div = div;

        this._div.removeClass('notification is-warning');
        this._div.html('');

    }

    sucess(){
        
        //Adiciona os elementos do método template na pagina index.html
        let element = `<button class="delete"></button>
                   <h2 class="title is-3">Cadastrado realizado com sucesso!</h2>`

        this._div.html(element);
        this._div.removeClass('notification is-warning');
        this._div.addClass('notification is-info');
    }
    
    error(cCampo){

        //Adiciona os elementos do método template na pagina index.html
        let element = `<button class="delete"></button>
                   <h2 class="title is-3"> Preencha o campo ` + cCampo +`</h2>`

        this._div.html(element);
        this._div.addClass('notification is-warning');

    }

    cepInvalid(cMsg){
       
        //Adiciona os elementos do método template na pagina index.html
        let element = `<button class="delete"></button>
                   <h2 class="title is-3"> ` + cMsg + `</h2>`

        this._div.html(element);
        this._div.addClass('notification is-warning');

    }
    
}