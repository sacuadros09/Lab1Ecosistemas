let pokeData

async function getApi(pokeData) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeData}`)
    const data = await response.json()
    Pokemons(data)
}

const bulbasurBtn = document.createElement("button")
bulbasurBtn.id = "pokeBtn"
bulbasurBtn.addEventListener("click", () => {
    Container.innerHTML = "";
    pokeData = 1
    getApi(pokeData)
})

const bulbasurImg = document.createElement("img")
bulbasurImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
bulbasurBtn.appendChild(bulbasurImg)

const charmanderBtn = document.createElement("button")
charmanderBtn.id = "pokeBtn"
charmanderBtn.addEventListener("click",() => {
    Container.innerHTML= ""
    pokeData = 4
    getApi(pokeData)
})
const charmanderImg = document.createElement("img")
charmanderImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
charmanderBtn.appendChild(charmanderImg)


const section = document.createElement("section");
section.appendChild(bulbasurBtn);


document.getElementById("btnsContainer").appendChild(section);



const Container = document.createElement("div");


    Container.appendChild(image)
    Container.appendChild(section)