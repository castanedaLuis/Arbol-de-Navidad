
function arbolNvidad(tamaño)
{

        nr=prompt("Introduzca la altura");
        nr=parseInt(nr);
        

        let arbol = "";
        const arbolObj ={
            asterico:  "*",
            barra:  "_",
            tronco:  "#",
    };
    const {asterico, barra, tronco} = arbolObj;

    for(let i=1; i<=nr; i++){
        arbol = arbol.concat(barra.repeat(nr - i), asterico.repeat(i+i-1), barra.repeat(nr - i),'\n');
    }
    arbol = arbol.concat(barra.repeat(nr - 1), tronco, barra.repeat(nr - 1), '\n')
    arbol = arbol.concat(barra.repeat(nr - 1), tronco, barra.repeat(nr - 1))
    
    return arbol;
}




let tamano = 5;
const crearArbol = arbolNvidad(tamano);
console.log(crearArbol);
document.write(crearArbol);