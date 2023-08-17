const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random()*101)
}

const list = ['hero','villain']
var vcount = 0
var hcount = 0
var horv = ""

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    players.forEach((item,index)=>{
        if (vcount < hcount){
            vcount += 1
            detailedPlayers.push({
                name:item,
                strength: getRandomStrength(),
                image: "images/super-" + (index+1) + ".png",
                type: list[1]
            })
        }
        else if (vcount > hcount){
            hcount += 1
            detailedPlayers.push({
                name:item,
                strength: getRandomStrength(),
                image: "images/super-" + (index+1) + ".png",
                type: list[0]
            })
        }
        else{
            horv = list[Math.floor(Math.random()*2)]
            if (horv == list[0]){hcount += 1}else{vcount += 1}
            detailedPlayers.push({
                name:item,
                strength: getRandomStrength(),
                image: "images/super-" + (index+1) + ".png",
                type: horv
            })
        }
    })

    return detailedPlayers;
}

console.log(initPlayers(PLAYERS))

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i<players.length; i++){
        let frag = `<div class="player"><img src="${players[i].image}" alt=""><div class="name">${players[i].name}</div><div class="strength">${players[i].strength}</div></div>`
        if (players[i].type == type){
            frag = `<div class="player"><img src="${players[i].image}" alt=""><div class="name">${players[i].name}</div><div class="strength">${players[i].strength}</div></div>`
        }
        fragment += frag
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}