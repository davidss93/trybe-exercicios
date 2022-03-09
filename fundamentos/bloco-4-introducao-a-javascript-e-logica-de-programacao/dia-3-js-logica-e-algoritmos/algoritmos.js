let userName = 'David Santos';
let userPassword = 1234;
let access = true;

if (userName === 'David Santos');


let quantidade = 1;
let bag = 0;

//===========================================

//2. 

if (access === true) {
    for (let indexPaes = 0; indexPaes <= quantidade; indexPaes += 1) {
        bag = indexPaes;
        if (bag === 0) {
        console.log('A sacola está vazia');
    }
    else if (bag === 1) {
        console.log('Existe ' + bag + '  pão na sacola')
    }

  }

}
else {
   console.log('Existem ' + bag + ' pães na sacola')
}

// =====================================


//3. Análise de código
// Ingredientes do Xtudão: Pão, 3 pedaços de queijos, pão, 3 pedaços de queijo e fecha com pão de fechamento.

for(let index = 0; index < 2; index += 1) {
    console.log('Adiciona pão');

    for(let indexQueijo = 0 ; indexQueijo <=3; indexQueijo += 1) {
        console.log('Adiciona queijo');
    }
}
console.log('Adiciona pão de fechamento');