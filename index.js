let autosI = require("./autos");
let concesionaria = {
      autos: autosI,
      buscarAutos : function(patente){
         let variable = null;
         this.autos.forEach(function (element){   // recorre el array 
            if (element.patente == patente) { //el parametro elemento contiene el objeto y .patente me trae ese valor para comparar
               variable = element;
            } 
         })
         return variable;
      },
      venderAuto: function(patente){
         let vender = this.buscarAutos(patente); //asigno a una variable el carro buscado
         vender.vendido = true; // le cambio el estado de vendido
         return vender;    
      },
      autosParaLaVenta: function(){
         let listaAutos = this.autos.filter(function(patente){ //realizo el filtro con filter y el resultado lo llevo a una variable
            return patente.vendido == false;  // la condición es que sea = false
         })
         return listaAutos;
      },
      autosNuevos: function(){
         let autoN = this.autosParaLaVenta().filter(function(carros){
            return carros.km < 100;
         })
         return autoN;
      },
      listaDeVentas: function(){
         let listaN = this.autos.filter(function(precios){  //Vuelvo a filtrar para traer todos los vehiculos
            return precios.vendido == true;
         })
         let nLista =[];
         nLista = listaN.map(function(precio){  // Con el .map puedo traer solo el precio y tenerlo en un array
            return precio.precio;   
         })
         return nLista;
      },
      totalDeVentas: function(){
         let tVentas = this.listaDeVentas().reduce(function(acum,item){
            return acum + item;
         },0);
         return tVentas;
      },
      puedeComprar: function(auto,persona){
         //console.log(auto);
         if(persona.capacidadDePagoTotal>auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio/auto.cuotas) ){
            return true
         }
         else{
            return false
         }
      },
      autosQuePuedeComprar: function(personaN){
         let autosV = this.autosParaLaVenta();
         let puedeComprar = this.puedeComprar(autosV,personaN);
         let nArray =[];
          for (let i = 0; i < autosV.length; i++) {
            if (this.puedeComprar(autosV[i],personaN) == true){
                nArray.push(autosV[i]); 
             }       
         }
         return nArray;

      } 
}


console.log(concesionaria.autosQuePuedeComprar({capacidadDePagoEnCuotas: 30000, capacidadDePagoTotal: 100000000 }));
