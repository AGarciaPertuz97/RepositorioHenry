//FUNCION AND
function mayorYMenorYPar(num){
if(num > 5 && num < 10 && num % 2 ===0 ) console.log(true);
else console.log(false);
}


mayorYMenorYPar(8)




//FUNCION OR
function operadorOr(str){
    if(str === "Henry" || str.length < 2) console.log(true);
    else console.log(false);
}

operadorOr("Javascript");



function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true)
    else console.log(false);
}

condicionCompleja(8)
condicionCompleja(5)
condicionCompleja(10)
condicionCompleja(2)
condicionCompleja(3)


function negacion(permiso){
    if (!permiso) console.log('Tiene permiso');
}

negacion(true);
negacion(false);

