const formEl = document.querySelector("#form-api");


formEl.addEventListener("submit", evento => {
    evento.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);  
    
        fetch('../dados.json')
        .then(response => {
            response.json().then((dados) => {
                
                if(data.nome == 'Davi'){
                    val = JSON.parse(data.valor) //Convertendo a informação

                    dados.funcionarios[1].Entradas += val //Atualiza o valor do faturamento no DB
                    console.log(data.nome)
                    console.log(data.metPag)
            
                    if(data.metPag == 'Dinheiro'){
                        dados.metPag.map((metPag) => {
                            metPag.Dinheiro[0].valor += val
                            console.log(metPag.Dinheiro[0].valor)
                        })
                    }
                    if(data.metPag == 'PIX'){
                            dados.metPag.map((metPag) => {
                                metPag.pix[0].valor += val
                                console.log(metPag.pix[0].valor)
                            })
                    }
                    if(data.metPag == 'Débito'){
                            dados.metPag.map((metPag) => {
                                metPag.Debito[0].valor += val
                                console.log(metPag.Debito[0].valor)
                         })
                    } 
                    if(data.metPag == 'Crédito') {
                        dados.metPag.map((metPag) => {
                            metPag.Credito[0].valor += val
                            console.log(metPag.Credito[0].valor)
                        })
                    } 
                    alert('Entrada registrada!')
                }

                if(data.nome == 'Anderson'){
                    val = JSON.parse(data.valor) //Convertendo a informação

                    dados.funcionarios[1].Entradas += val //Atualiza o valor do faturamento no DB
                    console.log(data.nome)
                    console.log(data.metPag)

                    if(data.metPag == 'Dinheiro'){
                        dados.metPag.map((metPag) => {
                            metPag.Dinheiro[0].valor += val
                            console.log(metPag.Dinheiro[0].valor)
                        })
                    }
                    if(data.metPag == 'PIX'){
                            dados.metPag.map((metPag) => {
                                metPag.pix[0].valor += val
                                console.log(metPag.pix[0].valor)
                            })
                    }
                    if(data.metPag == 'Débito'){
                            dados.metPag.map((metPag) => {
                                metPag.Debito[0].valor += val
                                console.log(metPag.Debito[0].valor)
                         })
                    } 
                    if(data.metPag == 'Crédito') {
                        dados.metPag.map((metPag) => {
                            metPag.Credito[0].valor += val
                            console.log(metPag.Credito[0].valor)
                        })
                    } 
                    alert('Entrada registrada!')
                }

                if(data.nome == 'Michela'){
                    val = JSON.parse(data.valor) //Convertendo a informação

                    dados.funcionarios[1].Entradas += val //Atualiza o valor do faturamento no DB
                    console.log(data.nome)
                    console.log(data.metPag)

                    if(data.metPag == 'Dinheiro'){
                        dados.metPag.map((metPag) => {
                            metPag.Dinheiro[0].valor += val
                            console.log(metPag.Dinheiro[0].valor)
                        })
                    }
                    if(data.metPag == 'PIX'){
                            dados.metPag.map((metPag) => {
                                metPag.pix[0].valor += val
                                console.log(metPag.pix[0].valor)
                            })
                    }
                    if(data.metPag == 'Débito'){
                            dados.metPag.map((metPag) => {
                                metPag.Debito[0].valor += val
                                console.log(metPag.Debito[0].valor)
                         })
                    } 
                    if(data.metPag == 'Crédito') {
                        dados.metPag.map((metPag) => {
                            metPag.Credito[0].valor += val
                            console.log(metPag.Credito[0].valor)
                        })
                    } 
                    alert('Entrada registrada!')
                }

                if(data.nome == 'Michel'){
                    val = JSON.parse(data.valor) //Convertendo a informação

                    dados.funcionarios[1].Entradas += val //Atualiza o valor do faturamento no DB
                    console.log(data.nome)
                    console.log(data.metPag)

                    if(data.metPag == 'Dinheiro'){
                        dados.metPag.map((metPag) => {
                            metPag.Dinheiro[0].valor += val
                            console.log(metPag.Dinheiro[0].valor)
                        })
                    }
                    if(data.metPag == 'PIX'){
                            dados.metPag.map((metPag) => {
                                metPag.pix[0].valor += val
                                console.log(metPag.pix[0].valor)
                            })
                    }
                    if(data.metPag == 'Débito'){
                            dados.metPag.map((metPag) => {
                                metPag.Debito[0].valor += val
                                console.log(metPag.Debito[0].valor)
                         })
                    } 
                    if(data.metPag == 'Crédito') {
                        dados.metPag.map((metPag) => {
                            metPag.Credito[0].valor += val
                            console.log(metPag.Credito[0].valor)
                        })
                    } 
                    alert('Entrada registrada!')
                }
            })
        })   
})