let faturamento = document.querySelector("#fat");
let entrada = document.querySelector("#ent");
let saida = document.querySelector("#saida");
let saldo = document.querySelector("#saldo")
const ctx = document.querySelector("#myChart");

// INFORMAÇÕES DO MENU PRINCIPAL

fetch("../dados.json").then((response => { //Recolhendo dados do arquivo JSON local
    response.json().then((dados) => {
        dados.financeiro.map((financeiro) => { // Realizando a colocação dos dados no HTML
            faturamento.innerHTML +=  financeiro.Faturamento;
            entrada.innerHTML += financeiro.Entradas;
            saida.innerHTML += financeiro.Saidas;
            saldo.innerHTML += (financeiro.Caixa + financeiro.Entradas)- financeiro.Saidas
        })
         // Plotando o gráfico na tela com os dados obtidos
         new Chart(ctx, {
            type: 'bar',
            data: {
            labels: [dados.funcionarios[0].nome, dados.funcionarios[1].nome, dados.funcionarios[3].nome, dados.funcionarios[4].nome],
            datasets: [{
                label: 'Faturamento',
                backgroundColor:'#ad8f72',
                data: [dados.funcionarios[0].Entradas, dados.funcionarios[1].Entradas, dados.funcionarios[3].Entradas, dados.funcionarios[4].Entradas],
                borderWidth: 1
            }]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });
    })
}))


