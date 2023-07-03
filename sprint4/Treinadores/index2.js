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
    console.log(objDados)
    var information = document.getElementById("informacoes")
    console.log()
    for(var i = 0; i < objDados.treinadores.length; i++){
    
        information.innerHTML += `<div class="col-12 col-lg-4 col-md-6">
        <div class="card h-100">
          <img  src="${objDados.treinadores[i].foto}" width = "354" height="354" class="card-img-top" alt="...">
          <div class="card-body bg-body-secondary">
            <ul  class="list-group list-group-flush">
              <li class="list-group-item bg-body-transparent bg-dark-subtle">${objDados.treinadores[i].nome}</li>
              <li class="list-group-item bg-dark-subtle">${objDados.treinadores[i].sobrenome}</li>
              <li class="list-group-item bg-dark-subtle">${objDados.treinadores[i].email}</li>
              <li class="list-group-item bg-dark-subtle">${objDados.treinadores[i].telefone}</li>
            </ul>
            <div class="card-body bg-body-secondary">
            </div>
          </div>
        </div>
      </div>`
      console.log(objDados.treinadores[i].nome)
    }
    return objDados;
}
window.onload = () => {
    leDados()
    }
    function imprimir(dados){

        
    }


