function salvar(){
    let form = document.getElementById("form-cadastro");
    let nome = form.nome.value;
    let especie = form.especie.value;
    let altura = form.altura.value;

    if(nome == ""){
        alert("Preencha o nome da planta");
        return false;
    }
    if(especie.trim() == ""){
        alert("Preencha a espécie da planta");
        return false;
    }
    if(altura.trim() == ""){
        alert("Preencha a altura da planta");
        return false;
    }
    
    
    form.nome.value = "";
    form.especie.value = "";
    form.altura.value = "";

    
    alert("Planta cadastrada com sucesso");
}
