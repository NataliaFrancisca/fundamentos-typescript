// Compilação

function showTicketConcert(user: string, ticket: number){
    console.log(`Olá ${user}. Seu número de bilhet é ${ticket}`)
}

showTicketConcert('Nat', 123);

function showTicketMovie(user: string |null, ticket: number){
    console.log(`Olá ${user ?? 'Usuário Padrão'}. Seu número de bilhet é ${ticket}`)
}

showTicketMovie(null, 123);