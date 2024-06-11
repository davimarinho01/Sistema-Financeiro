const ctx = document.querySelector("#myChart");

// INFORMAÇÕES DO MENU PRINCIPAL

fetch("../dados.json").then((response => { //Recolhendo dados do arquivo JSON local
    response.json().then((dados) => {

        dados.metPag.map((metPag) => {
            console.log("Dados Recebidos!");
            // Plotando o gráfico na tela com os dados obtidos  
            new Chart(ctx, {
                type: 'bar',
                data: {
                labels: [metPag.pix[0].met, metPag.Dinheiro[0].met, metPag.Credito[0].met, metPag.Debito[0].met],
                datasets: [{
                    label: 'Faturamento',
                    backgroundColor:'#ad8f72',
                    data: [metPag.pix[0].valor, metPag.Dinheiro[0].valor, metPag.Credito[0].valor, metPag.Debito[0].valor],
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
        
         
    })
}))