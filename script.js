alert("Bienvenido a Cabañas Rio")
alert("Realice su reserva")

class Cabanas {
    constructor(id, nombre, camas, precio){
        this.id = id
        this.nombre = nombre
        this.camas = camas
        this.precio = precio
    }
    informacion (){
        return `hospedaje con ${this.camas} camas`
    }
    
}

const cabana1 = new Cabanas(1,"Camping Lago", 1, 12000)
const cabana2 = new Cabanas(2,"Camping Bosque", 1, 10000)
const cabana3 = new Cabanas(3,"Glamping Lago", 2, 20000)
const cabana4 = new Cabanas(4,"Glamping Bosque", 2, 15000)
const cabana5 = new Cabanas(5,"Cabaña Alba", 3, 25000)
const cabana6 = new Cabanas(6,"Cabaña Bosco", 3, 30000)

const cabanasRio = [cabana1, cabana2, cabana3, cabana4, cabana5, cabana6]

let numero
do{
    numero = parseInt(prompt("ingrese el numero de personas a hospedarse"))
    if(numero <1 || numero > 3){
        alert("No disponible")
    }

}while(numero <1 || numero > 3)


    if(numero == 1){    
        console.log("tenemos disponible para usted")
        console.log(cabanasRio.filter(cabania => cabania.camas == 1))
        
    }else if(numero == 2){
        console.log(`Tenemos disponible para usted`)
        console.log(cabanasRio.filter(cabania => cabania.camas == 2))
    }else if(numero == 3){
        console.log(`Tenemos disponible para usted`)
        console.log(cabanasRio.filter(cabania => cabania.camas == 3))
    }


let reservaUno, reservaDos, reservaTres


while(numero ==1){
    reservaUno = parseInt(prompt(`ingrese el ID de la cabaña que reservará`))

    if(reservaUno == 1){
        const nombre = prompt("ingrese su nombre")
        const cedula = parseInt(prompt("ingrese su cedula"))
        console.log(`${nombre} con cedula ${cedula} a reservado exitosamente CAMPING LAGO`)
        break
    }else if (reservaUno == 2){
        const nombre1 = prompt("ingrese su nombre")
        const cedula1 = parseInt(prompt("ingrese su cedula"))
        console.log(`${nombre1} con cedula ${cedula1} a reservado exitosamente CAMPING BOSQUE`)
        break   
    }else{
        console.log("cabaña no disponible")
    }
}

while(numero ==2){
    reservaDos = parseInt(prompt(`ingrese el ID de la cabaña que reservará`))

    if(reservaDos == 3){
        const nombre = prompt("ingrese su nombre")
        const cedula = parseInt(prompt("ingrese su cedula"))
        console.log(`${nombre} con cedula ${cedula} a reservado exitosamente GLAMPING LAGO`)
        break
    }else if (reservaDos == 4){
        const nombre1 = prompt("ingrese su nombre")
        const cedula1 = parseInt(prompt("ingrese su cedula"))
        console.log(`${nombre1} con cedula ${cedula1} a reservado exitosamente GLAMPING BOSQUE`)
        break   
    }else{
        console.log("cabaña no disponible")
    }
}

while(numero ==3){
    reservaTres = parseInt(prompt(`ingrese el ID de la cabaña que reservará`))

    if(reservaTres == 5){
        const nombre = prompt("ingrese su nombre")
        const cedula = parseInt(prompt("ingrese su cedula"))
        console.log(`${nombre} con cedula ${cedula} a reservado exitosamente CABAÑA ALBA`)
        break
    }else if (reservaTres == 6){
        const nombre1 = prompt("ingrese su nombre")
        const cedula1 = parseInt(prompt("ingrese su cedula"))
        console.log(`${nombre1} con cedula ${cedula1} a reservado exitosamente CABAÑA BOSCO`)
        break   
    }else{
        console.log("cabaña no disponible")
    }
}





