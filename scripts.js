let baseurl = "https://pokeapi.co/api/v2/pokemon/?limit=48&offset=0"

let modalsprite = document.querySelector('.pokeimg');

function getPokemonList(url){
  window.scrollTo(0,0)
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let pokemon = data.results;
    console.log(pokemon);
    let container = document.querySelector(".pokemon-list-container");
    let container2 = document.querySelector('.npbtn');
    container.innerHTML = ''
    pokemon.forEach(btn => {
        container.innerHTML += `<button class='pokebutton' onclick="getPokemonInfo('${btn.url}')"> ${btn.name}</button>`;
    })
    container2.innerHTML = `<i onclick="getPokemonList('${data.previous}')" class="fas fa-arrow-circle-left"></i><i onclick="getPokemonList('${data.next}')" class="fas fa-arrow-circle-right"></i>`
})
}

getPokemonList(baseurl)

function getPokemonInfo(url){
  // console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // types
    // abilities
    let types = data.types
    let typecont = document.querySelector('.type')
    typecont.innerHTML = innerHTML = ``
    let abilitycont = document.querySelector('.abilities');
    abilitycont.innerHTML = ``
    types.forEach(t => {
      typecont.innerHTML +=`<span class='descspan'>${t.type.name}</span> `; 
    })
    let colorlist= {
      "grass":'#68f60a',
      "fire":'#f67e0d',
      "water":'#0a79be',
      "normal":'#aca974',
      "flying":'#5eb9b4',
      "bug":'#bddd6e',
      "poison":'#a819d7',
      "electric":'#fffa25',
      "ground":'#bfac22',
      "fighting":'#e8121a',
      "psychic":'#f55792',
      "rock":'#786b3f',
      "ice":'#1a94a3',
      "ghost":'#bd98cb',
      "dragon":'#8b56fe',
      "dark":'#504f4f',
      "steel":'#7b8e8a',
      "fairy":'#ffa0c2',
    };
    document.querySelector('.content').style.background = colorlist[data.types[0].type.name]
    document.querySelector('.pokename').innerHTML =`${data.id} : <span class='descspan'>${data.species.name}</span>`; 
    document.querySelector('#modal').classList.toggle('active');
    modalsprite.innerHTML = `<img src=${data.sprites.other["official-artwork"].front_default}>`
    document.querySelector('.baseexp').innerHTML =`<span class='descspan'>${data.base_experience}</span>`;
    document.querySelector('.height').innerHTML =`<span class='descspan'>${data.height}</span>`;
    document.querySelector('.weight').innerHTML =`<span class='descspan'>${data.weight}</span>`;
    let abilities = data.abilities
    abilities.forEach(a => {
      abilitycont.innerHTML += `<span class='descspan'>${a.ability.name}</span>`
    })
  })
}

function closemodal(){
  document.querySelector('#modal').classList.remove('active')
}
