let baseurl = "https://pokeapi.co/api/v2/pokemon/?limit=48&offset=0"

let modalsprite = document.querySelector('.pokeimg');
let thing = document.querySelector('.content')

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
    container2.innerHTML += `<button onclick="getPokemonList('${data.previous}')"><</button>`
    container2.innerHTML += `<button onclick="getPokemonList('${data.next}')">></button>`
})
}

getPokemonList(baseurl)

function getPokemonInfo(url){
  // console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('#modal').classList.toggle('active');thing.innerHTML= `<img src='https://i.pinimg.com/originals/c2/3e/bc/c23ebc7189be56ba63b5b356692a2c9e.jpg'><br>Who the hell is looking at my code? `
    //modalsprite.innerHML = `<img src=${data.sprites.other["official-artwork"].front_default}>`
    //document.querySeector('.type').innerHTML =`${data.types[0].type.name}`; 
    //dcument.querySelector('.baseexp').inerHTML =`${data.base_experience}`;
    //document.querySelector('.heigt').innerHTML =`${data.height}`;
    //document.querySelector('.weight').innerTML =`${data.weight}`;
    //document.querySelector('.bilities').innerHTM = `${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`
  })
}

function closemodal(){
  document.querySelector('#modal').classList.remove('active')
}

/*
document.querySelector('.pokename').innerHTML =`${data.id} : ${data.species.name}`; document.querySelector('#modal').classList.toggle('active');
    modalsprite.innerHTML = `<img src=${data.sprites.other["official-artwork"].front_default}>`
    document.querySelector('.type').innerHTML =`${data.types[0].type.name}`; 
    document.querySelector('.baseexp').innerHTML =`${data.base_experience}`;
    document.querySelector('.height').innerHTML =`${data.height}`;
    document.querySelector('.weight').innerHTML =`${data.weight}`;
    document.querySelector('.abilities').innerHTML = `${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`

*/