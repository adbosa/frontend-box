//Source of data
const urlSite = "http://kenzie-olimpiadas.herokuapp.com/paises"

fetch(urlSite)
.then(response => response.json())
.then(data => insertDataIntoTheBoard(data))

// Anchor the medals board in the script
let medalBoard = document.querySelector(".board")

function createLine(position, country, url, goldMedals, silverMedals, bronzeMedals){
    //Create a line for our board and set class "line"
    let line = document.createElement("div")
    line.classList.add("line")

    let rankColumn      = createRankColumn(position)
    let countryColumn   = createCountryColumn(country, url)
    let goldColumn      = createGoldColumn(goldMedals)
    let silverColumn    = createSilverColumn(silverMedals)
    let bronzeColumn    = createBronzeColumn(bronzeMedals)
    let totalColumn    = createTotalColumn(goldMedals, silverMedals, bronzeMedals)

    line.appendChild(rankColumn)
    line.appendChild(countryColumn)
    line.appendChild(goldColumn)
    line.appendChild(silverColumn)
    line.appendChild(bronzeColumn)
    line.appendChild(totalColumn)
    
    //Append the filled line to page inside the board section
    medalBoard.appendChild(line)
}

function createRankColumn(position){
    let rankColumn = document.createElement("div")
    rankColumn.classList.add("column", "rank")
    let contents = document.createElement("span")
    contents.innerText = `${position}º`
    rankColumn.appendChild(contents)
    return rankColumn
}
function createCountryColumn(country, url){
    let countryColumn = document.createElement("div")
    countryColumn.classList.add("column", "country")
    let countryFlag = document.createElement("img")
    countryFlag.src = url
    countryFlag.alt = `Flag of ${country}`
    let contents = document.createElement("span")
    contents.innerText = country
    countryColumn.appendChild(countryFlag)
    countryColumn.appendChild(contents)
    return countryColumn
}
function createGoldColumn(goldMedals){
    let goldColumn = document.createElement("div")
    goldColumn.classList.add("column", "g_medal")
    let contents = document.createElement("span")
    contents.innerText = goldMedals
    goldColumn.appendChild(contents)
    return goldColumn
}
function createSilverColumn(silverMedals){
    let silverColumn = document.createElement("div")
    silverColumn.classList.add("column", "s_medal")
    let contents = document.createElement("span")
    contents.innerText = silverMedals
    silverColumn.appendChild(contents)
    return silverColumn
}
function createBronzeColumn(bronzeMedals){
    let bronzeColumn = document.createElement("div")
    bronzeColumn.classList.add("column", "b_medal")
    let contents = document.createElement("span")
    contents.innerText = bronzeMedals
    bronzeColumn.appendChild(contents)
    return bronzeColumn
}
function createTotalColumn(goldMedals, silverMedals, bronzeMedals){
    let totalColumn = document.createElement("div")
    totalColumn.classList.add("column", "total")
    let contents = document.createElement("span")
    let totalMedals = goldMedals + silverMedals + bronzeMedals
    contents.innerText = totalMedals
    totalColumn.appendChild(contents)
    return totalColumn
}

function insertDataIntoTheBoard(countryScoreboard){
    for (let index = 0; index < countryScoreboard.length; index++) {
        position = index + 1
        createLine(
            position,
            countryScoreboard[index].country,
            countryScoreboard[index].flag_url,
            countryScoreboard[index].medal_gold,
            countryScoreboard[index].medal_silver,
            countryScoreboard[index].medal_bronze
        )
    }
}