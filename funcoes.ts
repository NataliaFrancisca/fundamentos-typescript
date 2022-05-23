function showMessages(message: string):void{
    console.log(message);
}

// vai definir o retorno como number
// pq ele entendeu que o retorno é do type number
function showNumber(a: number){
    return a;
}

// mas também posso definir o type dessa função
function showMyNumber(a: number):number{
    const result = a + 2;
    return result;
}