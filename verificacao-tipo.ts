// Fundamentos do TypeScript

const userName = 'Rodrigo';

// userName(); não é uma função, e sim uma string

const user = {
    name: 'nat',
    email: 'nat@mail.com'
}

// console.log(user.phone); essa propriedade não existe


// se não definir o tipo dos parametros, vai ser considerado 
// any, então pode ter erro no futuro.
function sum(a: number, b:number){
    return a + b;
}

sum(10,2);
// sum ('11', 2); erro


