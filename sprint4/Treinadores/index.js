function leDados(){
    let dados = localStorage.getItem('db');
    let objDados={};


    if(dados){
        objDados= JSON.parse(dados);

    }
    else{
        objDados={treinadores: [
            {email: "antonio123@hotmail.com", nome:"Antônio", sobrenome:"Limões", telefone:"31987654321", foto:"https://burst.shopifycdn.com/photos/smiling-man-in-blue.jpg?width=1200&format=pjpg&exif=1&iptc=1"},
            {email: "igor123@hotmail.com", nome:"Igor", sobrenome:"Sales", telefone:"31999999999",foto:"https://img.freepik.com/fotos-gratis/retrato-de-homem-feliz-e-sorridente_23-2149022620.jpg"},
            {email: "erik@hotmail.com", nome:"Erik", sobrenome:"Costa", telefone:"31988888888", foto:"https://st2.depositphotos.com/1743476/11581/i/450/depositphotos_115812380-stock-photo-cool-african-man.jpg"}]
        }
    }
    return objDados;

}

function mostrarSenha(){

    if(document.getElementById('mostrasenha').checked){
        document.getElementById('senha').type = 'text';
        document.getElementById('confirmasenha').type = 'text';
    }
    else{
        document.getElementById('senha').type = 'password';
        document.getElementById('confirmasenha').type = 'password';
    }



}

function salvaDados(dados){
    localStorage.setItem('db', JSON.stringify(dados))

}


function adicionarTreinador(evt){
    evt.preventDefault();
    let objDados = leDados();
    

    // incluir novo treinador

    const strEmail = document.getElementById ('email').value;
    const strSenha = document.getElementById ('senha').value;
    const strConfirmasenha = document.getElementById ('confirmasenha').value;
    const strNome = document.getElementById('nome').value;
    const strSobrenome = document.getElementById('sobrenome').value;
    const strEndereço = document.getElementById('endereço').value;
    const strTelefone  = document.getElementById('telefone').value;
    const strFoto = document.getElementById('foto').value;

    if(strSenha != strConfirmasenha){
        alert('As senhas não batem!')
        return 
    }
    else{


    let novoTreinador = {
        email : strEmail,
        senha : strSenha,
        confirmasenha : strConfirmasenha,
        nome : strNome,
        sobrenome : strSobrenome,
        endereço : strEndereço,
        telefone : strTelefone,
        foto : strFoto
    };
    objDados.treinadores.push (novoTreinador);
    
    //salvar no localstorage
    salvaDados (objDados);
    document.querySelector('#formulario').reset();
    
    }
    console.log("SALVOU!!!!!!!!!!!!!")
}


function imprimeDados(evt){
    evt.preventDefault();
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados= leDados();
    for(i=0; i<objDados.treinadores.length; i++){
        strHtml += `<p>(${objDados.treinadores[i].email} - ${objDados.treinadores[i].nome} - ${objDados.treinadores[i].sobrenome} </p>`
    
    }
    tela.innerHTML = strHtml;


}

window.onload = () => {
    //configuração do botão
    
    document.querySelector ('#formulario').addEventListener ('submit', adicionarTreinador);
    document.getElementById ('mostrasenha').addEventListener ('change', mostrarSenha);
}



















