const list = [9, 22, 30, 5, 10, 23, 1, 3];
var target = 3;

document.getElementById("array").innerHTML = list;
document.getElementById("target").innerHTML = target;

list.sort(function(a, b) {return a - b;});  //ordena o array int

function buscaBinaria(list, target){
    /* Presume que a lista está ordenada */
    var indice_metade = list.length/2;

    if(list[indice_metade] == target){
        return "Achei!";
    }
    else{
        if(target < list[indice_metade] && list.length > 1){
            
            return buscaBinaria(list.slice(0, indice_metade), target);   //Busca Binária recursiva
        }
        else{
            if(target > list[indice_metade] && list.length > 1){

                return buscaBinaria(list.slice(indice_metade, list.length), target);
            }
            else{
                
                return "Número não encontrado.";
            }
        }
    }
}

document.getElementById("buscaBinaria").innerHTML = buscaBinaria(list, target);