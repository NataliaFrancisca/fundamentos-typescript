type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point){
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 102, y: 123});


type User = {
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
}
