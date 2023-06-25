function leDados(){
    let dados = localStorage.getItem('db');
    let objDados={};


    if(dados){
        objDados= JSON.parse(dados);

    }
    else{
        objDados={treinadores: [
            {email: "antonio123@hotmail.com", nome:"Antônio", sobrenome:"Limões", telefone:"31987654321", foto:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos%2Fhomens&psig=AOvVaw2d5vDs3NwA-yzx9RGYpw7k&ust=1687806948642000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJD4_v6Q3_8CFQAAAAAdAAAAABAE"},
            {email: "igor123@hotmail.com", nome:"Igor", sobrenome:"Sales", telefone:"31999999999",foto:"https://thumbs.dreamstime.com/b/retrato-de-um-homem-maduro-que-sorri-na-c%C3%A2mera-imagem-conservada-em-estoque-86744321.jpg"},
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


