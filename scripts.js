let baseurl = "https://pokeapi.co/api/v2/pokemon/?limit=48&offset=0"

let modalsprite = document.querySelector('.pokeimg');

function getPokemonList(url){
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
    let abilitycont = document.querySelector('.abilities')
    abilitycont.innerHTML = ``
    types.forEach(t => {
      typecont.innerHTML +=`|${t.type.name}|  `; 
    })
    document.querySelector('.pokename').innerHTML =`${data.id} : ${data.species.name}`; 
    document.querySelector('#modal').classList.toggle('active');
    modalsprite.innerHTML = `<img src=${data.sprites.other["official-artwork"].front_default}>`
    document.querySelector('.baseexp').innerHTML =`${data.base_experience}`;
    document.querySelector('.height').innerHTML =`${data.height}`;
    document.querySelector('.weight').innerHTML =`${data.weight}`;
    let abilities = data.abilities
    abilities.forEach(a => {
      abilitycont.innerHTML += `|${a.ability.name}|  `
    })
  })
}

function closemodal(){
  document.querySelector('#modal').classList.remove('active')
}
