let app = ()=>{
    let form = document.querySelector(".form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let input = document.querySelector(".input").value;
        if(input.length == 8){
           getData(input);

        }else{
            alert("CEP INVALIDO!")
        }
    })

    
    let getData = (value) =>{
        let url =`https://viacep.com.br/ws/${value}/json/`
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                showData(data);           
            })
        }) 
    }
    let showData = (data)=> {
        let ul = document.querySelector(".list");
        let cep = document.createElement("li");
        cep.setAttribute("class", "listItem");
        ul.appendChild(cep);
        cep.innerHTML = `${data.cep}`;

        let rua = document.createElement("li");
        rua.setAttribute("class", "listItem");
        ul.appendChild(rua);
        rua.innerHTML = `${data.logradouro}`;

        
        let bairro = document.createElement("li");
        bairro.setAttribute("class", "listItem");
        ul.appendChild(bairro);
        bairro.innerHTML = `${data.bairro}`;

        let localidade = document.createElement("li");
        localidade.setAttribute("class", "listItem");
        ul.appendChild(localidade);
        localidade.innerHTML = `${data.localidade}`;

        let uf = document.createElement("li");
        uf.setAttribute("class", "listItem");
        ul.appendChild(uf);
        uf.innerHTML = `${data.uf}`;







}


}

app();