//callback base somma

function origin(val1, val2, sum){
    sum (val1 + val2);
}

origin(2, 3, function(result){
    console.log("Risultato addizione: ", result)
})


//callback e passaggio di parametri

function one(par1, par2, callback){
   let subtraction = par1 - par2;
    console.log("Risultato sottrazione:", subtraction);
    callback(subtraction); 
    //callback(subtraction); : richiamo la funzione che ho
    // inseritao come parametro nella funzione principale
    // e le passo subtraction come parametro
}

one(5, 2, function(result){ 
    console.log("uso la callback", result);
});
//function(result){ ... } → è il callback, 
//cioè una funzione anonima che viene passata come parametro.


//callback annidate
function prima(valore1, valore2, parFunz){
    parFunz (valore1 + valore2);
}

prima(4, 2, function(risultato1){
    console.log("Risultato addizione: ", risultato1)
})

function seconda(prima, risultato1, somma){
    somma (prima + risultato1);
}

seconda(2, 3, function(risultato2){
    console.log("Risultato addizione: ", risultato2)
})
