function seletor() {
    if (form.cor.value == "azul/amarelo") {
        document.write(modalidade[0])
        document.write(nomeTime[0])
        document.write(qntdJogadores[0])
        document.write('<img src="https://i.guim.co.uk/img/media/c15695433fb1871e73851c41ad963f3b7c562767/0_164_2000_1200/master/2000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=4caeaf1efff5f24602d3609ed0b33f42">')
    } else if (form.cor.value == "azul/vermelho") {
        document.write(modalidade[1])
        document.write(nomeTime[1])
        document.write(qntdJogadores[1])
        document.write('<img src="https://img.elo7.com.br/product/main/2F44F71/painel-paris-saint-germain-1-00m-decoracao-de-festa.jpg">')
    } else {
        document.write(modalidade[2])
        document.write(nomeTime[2])
        document.write(qntdJogadores[2])
        document.write('<img src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c">')
    }
}

corPredominante = ["azul/amarelo", "azul/vermelho", "preto"]
nomeTime = ["Los Angeles Rams", " Paris Saint-Germain", "Fúria"]
modalidade = ["Futebol Americano", "Futebol", "Counter-Strike"]
qntdJogadores = ["11 jogadores", "11 jogadores", "5 jogadores"]