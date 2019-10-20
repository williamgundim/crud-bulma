class appController{

    constructor(){

        this._Nome          = $("#nome");
        this._Genero        = $("#genero option:selected"); 
        this._DtNasc        = $("#dtnasc");
        this._Celular       = $("#celular");
        this._Whatsapp      = $("#whatsapp option:selected");
        this._Telefone      = $("#telefone");
        this._CEP           = $("#cep");
        this._Endereco      = $("#endereco");
        this._EndNum        = $("#numero");
        this._Cidade        = $("#cidade");
        this._Bairro        = $("#bairro");
        this._Estado        = $("#itensestado option:selected");
        this._Complemento   = $("#complemento");
        this._Observacao    = $("#obs");

        this._ViewMensagem = new View( $("#notificationUser") );
    }

    adiciona(event){
        
        event.preventDefault();

        //post
        CommitData(this);

        if (this.validForm()){

            this._ViewMensagem.sucess();

        }

    }

    validForm(){

        //Nome precisa ser preenchido.
        if (this._Nome.val()== '') {
            this._ViewMensagem.error('Nome');
            return false;
        }

        //Celular.
        if (this._Celular.val() == '') {
            this._ViewMensagem.error('Telefone Celular');
            return false;
        }

        //Data Nascimento.
        if (this._DtNasc.val() == '') {
            this._ViewMensagem.error('Data Nascimento');
            return false;
        }

        //CEP.
        if (this._CEP.val() == '') {
            this._ViewMensagem.error('CEP');
            return false;
        }

        //Número.
        if (this._EndNum.val() == '') {
            this._ViewMensagem.error('Número');
            return false;
        }


        return true

    }

}
