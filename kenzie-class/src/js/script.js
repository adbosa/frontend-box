const urlSite = "http://kenzie-olimpiadas.herokuapp.com/paises"

fetch(urlSite)
.then(response => response.json())
.then(data => tratarDadosMedalhas(data))

//Ancorando linhas de clasificação no quadro de medalhas
let quadroMedalhas = document.querySelector(".quadro-medalhas")

function criarLinha(position, country, flag, medal_gold, medal_silver, medal_bronze){
    //Criando linha do quadro de medalhas
    let linha = document.createElement("div")
    //Adicionando a classe linha a div
    linha.classList.add("linha")
    //COLUNAS
    let coluna_rank         = criarColunaRank(`${position}º`)
    let coluna_medal_gold   = criarColunaMedalGold(medal_gold)
    let coluna_medal_silver = criarColunaMedalSilver(medal_silver)
    let coluna_medal_bronze = criarColunaMedalBronze(medal_bronze)
    let coluna_total        = criarColunaTotal(medal_gold+medal_silver+medal_bronze)
    let coluna_country      = criarColunaCountry(country,flag)
    //Alimentando a linhas com os dados obtidos
    linha.appendChild(coluna_rank)
    linha.appendChild(coluna_country)
    linha.appendChild(coluna_medal_gold)
    linha.appendChild(coluna_medal_silver)
    linha.appendChild(coluna_medal_bronze)
    linha.appendChild(coluna_total)
    //Amarrando a linha ao html
    quadroMedalhas.appendChild(linha)
}

function criarColunaRank(posicao){
    //Criando coluna interna a linha
    let coluna_rank = document.createElement("div")
    //Adicinando as classes coluna e especificando o dado
    coluna_rank.classList.add("coluna", "coluna-rank")
    //Cria o conteudo para a coluna    
    let conteudo = document.createElement("span")
    conteudo.innerText = posicao
    //Anexando conteudo à Coluna
    coluna_rank.appendChild(conteudo)

    return coluna_rank
}

function criarColunaCountry(pais, url){
    //Criando coluna interna a linha
    let coluna_country = document.createElement("div")
    //Adicinando as classes coluna e especificando o dado
    coluna_country.classList.add("coluna", "coluna-country")
    //Pegando a imagem da bandeira do pais
    let bandeira = document.createElement("img")
    bandeira.src = url
    bandeira.alt = `Bandeira do país: ${pais}`
    //Cria o conteudo para a coluna    
    let conteudo = document.createElement("span")
    conteudo.innerText = pais
    //Anexando conteudo à Coluna
    coluna_country.appendChild(bandeira)
    coluna_country.appendChild(conteudo)

    return coluna_country
}

function criarColunaMedalGold(nMedalhas){
    //Criando coluna interna a linha
    let coluna_medal_gold = document.createElement("div")
    //Adicinando as classes coluna e especificando o dado
    coluna_medal_gold.classList.add("coluna", "coluna-medal_gold")
    //Cria o conteudo para a coluna    
    let conteudo = document.createElement("span")
    conteudo.innerText = nMedalhas
    //Anexando conteudo à Coluna
    coluna_medal_gold.appendChild(conteudo)

    return coluna_medal_gold
}

function criarColunaMedalSilver(nMedalhas){
    //Criando coluna interna a linha
    let coluna_medal_silver = document.createElement("div")
    //Adicinando as classes coluna e especificando o dado
    coluna_medal_silver.classList.add("coluna", "coluna-medal_silver")
    //Cria o conteudo para a coluna    
    let conteudo = document.createElement("span")
    conteudo.innerText = nMedalhas
    //Anexando conteudo à Coluna
    coluna_medal_silver.appendChild(conteudo)

    return coluna_medal_silver
}

function criarColunaMedalBronze(nMedalhas){
    //Criando coluna interna a linha
    let coluna_medal_bronze = document.createElement("div")
    //Adicinando as classes coluna e especificando o dado
    coluna_medal_bronze.classList.add("coluna", "coluna-medal_bronze")
    //Cria o conteudo para a coluna    
    let conteudo = document.createElement("span")
    conteudo.innerText = nMedalhas
    //Anexando conteudo à Coluna
    coluna_medal_bronze.appendChild(conteudo)

    return coluna_medal_bronze
}

function criarColunaTotal(total){
    //Criando coluna interna a linha
    let coluna_total = document.createElement("div")
    //Adicinando as classes coluna e especificando o dado
    coluna_total.classList.add("coluna", "coluna-total")
    //Cria o conteudo para a coluna    
    let conteudo = document.createElement("span")
    conteudo.innerText = total
    //Anexando conteudo à Coluna
    coluna_total.appendChild(conteudo)

    return coluna_total
}

function tratarDadosMedalhas(arrayPaises){
    for(let i = 0; i<arrayPaises.length; i++){
        let pais = arrayPaises[i]

        criarLinha(
            i+1,
            pais.country,
            pais.flag_url,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze,
        )
    }
}
