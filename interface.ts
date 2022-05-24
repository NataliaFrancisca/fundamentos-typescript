// posso definir como opcional também

interface Player {
    id: number;
    name: string;
}

let newPlayer: Player = {
    id: 1,
    name: 'João'
}

function registerNewPlayer(newPlayer: Player){
    console.log(`Olá ${newPlayer.name}!`); 
}

// READONLY

interface Artista {
    id: number;
    name: string;
	readonly userName: string;
}

let newArtista: Artista = {
    id: 1,
    name: 'João',
	userName: 'joaoCleiton'
}

// newArtista.userName = "cleiton"; 