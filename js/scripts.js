//ativação e desativação das marcações em gênero, para manter apenas um ativo
document.querySelectorAll(".btn-genero").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".btn-genero").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
    });
});

//armazenamento dos interesses e lista para serem exibidos
const inputInteresse = document.getElementById("novoInteresse");
const listaInteresses = document.getElementById("listaInteresses");

document.getElementById("addInteresse").addEventListener("click", () => {
    if (inputInteresse.value.trim() !== "") {
        //criar elemento na lista
        const li = document.createElement("li");
        //adiciona o que foi digitado na lista
        li.textContent = inputInteresse.value;
        //adiciona a lista na tela
        listaInteresses.appendChild(li);
        //limpa a entrada para nova adição de interesses
        inputInteresse.value = "";
    }
});

document.getElementById("enviarForm").addEventListener("click", () => {

    //coleta dos dados inseridos
    const idade = document.getElementById("idade").value.trim();
    const genero = document.querySelector(".btn-genero.ativo")?.textContent;
    const formacao = document.getElementById("formacao").value.trim();
    const habilidades = document.getElementById("habilidades").value.trim();
    const sobre = document.getElementById("sobre").value.trim();
    const interesses = listaInteresses.children.length;

    //validação para entradas obrigatórias
    if (idade === "") {
        alert("Por favor, preencha sua idade.");
        return;
    }

    if (idade <= 15) {
        alert("Sua idade não é permitida para a vaga de estágio.");
        return;
    }

    if (!genero) {
        alert("Por favor, selecione seu gênero.");
        return;
    }

    if (formacao === "") {
        alert("Por favor, informe sua formação.");
        return;
    }

    if (interesses === 0) {
        alert("Adicione pelo menos um assunto de interesse.");
        return;
    }

    if (habilidades === "") {
        alert("Por favor, informe suas habilidades.");
        return;
    }

    alert(
        "Dados enviados com sucesso!"
    );
});
