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

const squirtleBtn = document.createElement("button")
squirtleBtn.id = "pokeBtn"
squirtleBtn.addEventListener("click",() => {
    Container.innerHTML=""
    pokeData = 7
    getApi(pokeData)
})

const squirtleImg = document.createElement("img")
squirtleImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
squirtleBtn.appendChild(squirtleImg)

const section = document.createElement("section");
section.appendChild(bulbasurBtn);
section.appendChild(charmanderBtn)
section.appendChild(bulbasurBtn)

document.getElementById("btnsContainer").appendChild(section)

function devolve(pokeData) {
    if (pokeData >= 2 && pokeData <= 9) {
        getApi (--pokeData);
    } else {
       getApi(pokeData) 
    }
}

function evolve(pokeData) {
    if (pokeData >= 1 && pokeData <= 9){
        getApi(--pokeData)
    }else{
        getApi(pokeData)
    }
}

const Container = document.createElement("div");

const renderPokemon = (data) => {
    const image = document.createElement("img")
    image.id = "gif"
    image.alt = "No gif found"
    image.src = data.sprites.versions ["generation-v"] ["black-white"].animated.front_default
}


section.id = "pokeCard"

const idNumber = document.createElement("p")
idNumber.id = "number"
idNumber.textContent = `No° ${data.id}`

const Name = document.createElement("p")
Name.id = "header"
Name.textContent = data.name

const Type = document.createElement ("p")
Type.textContent = data.types[0].type.name
Type.id = "pokeType"

const widhtPokemon = document.createElement("figure")
widhtPokemon.id = "info"

const widhtTittle = document.createElement("h5")
widhtTittle.id = "texttittle"
widhtTittle.textContent= "Weight"

const widhtText = document.createElement("p")
widhtText.id = "text"
widhtPokemon.appendChild(widhtText)
widhtPokemon.appendChild(widhtTittle)


const heightPokemon = document.createElement("figure")
heightPokemon.id = "info"

const heightTittle = document.createElement("h5")
heightTittle.id = "text"
heightTittle.textContent="Height"

const heightText = document.createElement("p")
heightText.id = "text"

heightPokemon.appendChild(heightText)
heightPokemon.appendChild(heightTittle)

const backPokemon = document.createElement("figure")
backPokemon.id = "info"

const backTittle = document.createElement("h5")
backTittle.id = "text"
backTittle.textContent="Back"

const backImage = document.createElement("img")
backImage.id = "gif"
backImage.src =
data.sprites.versions["generation-v"]["black-white"].animated.back_default

backPokemon.appendChild(backTittle)
backPokemon.appendChild(backImage)



const devolveButton = document.createElement("button")
devolveButton.id = "options"
devolveButton.textContent = "Devolve"
devolveButton.addEventListener("click", () => {
    Container.innerHTML = ""
    devolve(data.id)
})







    Container.appendChild(image)
    Container.appendChild(section)