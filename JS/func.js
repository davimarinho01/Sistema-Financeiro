//INFORMAÇÔES DA ABA FUNCIONARIOS

let divFunc = document.querySelector(".cards");

fetch("../dados.json").then((response => {
    response.json().then((dados => {
        dados.funcionarios.map((funcionarios) => {
            divFunc.innerHTML += 
            `<div class="card">
                <p id=func_list>
                    <span class="nome">${funcionarios.nome}</span><br>
                    <span class="cargo">Cargo: <b>${funcionarios.cargo}</b></span>
                    <span>Faturamento: <b>${funcionarios.Entradas}</b></span><br>
                </p> 
            </div>`
        });
    }))
}))