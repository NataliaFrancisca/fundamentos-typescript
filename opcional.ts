type Funcionario = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}


// funciona legal pois eu declarei o isAdmin como opcional
let newFuncionario: Funcionario = {
    name: 'Maria',
    email: 'maria@mail.com',
    age: 23
}

