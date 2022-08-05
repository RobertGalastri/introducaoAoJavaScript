function retornaNumPares(array){
    let numPar = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            numPar.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!!`);
        }
    }
    console.log('Os números pares são:', numPar)
}

let array = [2, 4, 5, 7, 8, 12, 17];

retornaNumPares(array);