function origin(val1, val2, sum){
    sum (val1 + val2)
}

origin(2, 3, function(result){
    console.log("Risultato: ", result)
})