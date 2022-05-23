type Profile = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

// para ser os dois types
// tenho a união
type PlayerInfo = Profile & Char;

type PlayerInfoTwo = Profile & {
    nickname: string;
    level: number;
}

let infoUser: PlayerInfo = {
    id: 212,
    name: 'helped',
    nickname: "helpinho",
    level: 32
}