function ValidCEP(){

    let cep = $("#cep");
    let mensagem = new View( $("#notificationUser") );
    
    //Verifica se campo cep possui valor informado.
    if (cep.val() != "") {

        //Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep.val())) {

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/"+ cep.val()+"/json/?callback=?", function(dados) {

                if (!("erro" in dados)) {

                    $('#endereco').val(dados.logradouro);
                    $('#bairro').val(dados.bairro);
                    $('#cidade').val(dados.localidade);
                }
                else{
                    mensagem.cepInvalid('Cep não encontrado');

                    cep.focus();
                }
                });
            }
            else{                
               
                mensagem.cepInvalid('Cep inválido');

                cep.focus();

            }
        }
    
}

function addEstados(Element){

    let cData = '';
    let aEstados = ['SP','AC', 'AL' , 'AP' , 'AM' , 'BA' , 'CE' , 'DF' , 'ES', 
                    'GO', 'MA', 'MT', 'MS', 'MG','PA','PB','PR','PE','PI','RJ',
                    'RN', 'RS', 'RO' , 'RR', 'SC', 'SE', 'TO' ]


    for (let i = 0; i < aEstados.length; i++){

        cData += `<option>` + aEstados[i] + `</option>`
    }
    
    Element.innerHTML =   `<select>` + cData + `</select>`;

}