
function CommitData(oPerson){
  
    console.log(oPerson._Genero.val() );
    
    let cJson = JSON.parse( formatJson(oPerson) );
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/post',
        data:   cJson,
        success: function(data){
            //do something with the data via front-end framework
            location.reload();
        }
    });
    
}


function formatJson(oPerson){

    let cVar
    let gender = '3' //Outros.
    let whatsapp = '2' //Não.

    //Genero.
    if (oPerson._Genero.val() == 'Masculino'){
        gender = '1'
    }else if(oPerson._Genero.val() == 'Feminino') {
        gender = '2'
    }

    //Whatsapp.
    if (oPerson._Whatsapp.val() == 'Sim'){
        whatsapp = '1'
    };

    cVar = JSON.stringify({ 
        
        nome: oPerson._Nome.val(),
        dtnasc: oPerson._DtNasc.val(),      
        telefone: oPerson._Telefone.val(),                    
        celular: oPerson._Celular.val(),
        whatsapp: whatsapp,
        genero: gender,
        cep: oPerson._CEP.val(),
        cidade: oPerson._Cidade.val(),
        estado: oPerson._Estado.val(),
        endereco: oPerson._Endereco.val(),
        bairro: oPerson._Bairro.val(),
        numero: Number(oPerson._EndNum.val()),
        complemento: oPerson._Complemento.val(),
        observacao: oPerson._Observacao.val()

    }); 

    return cVar
}