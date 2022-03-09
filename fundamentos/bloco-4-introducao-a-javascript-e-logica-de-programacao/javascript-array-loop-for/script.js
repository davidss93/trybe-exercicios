let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
    soma = 0;
    soma += numbers[index];
    let media = soma / numbers.length;
    if (index >= numbers.length){;
    console.log(media);
}
}