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
            // console.log(autosV[i])
            if (this.puedeComprar(autosV[i],personaN) == true){
                nArray.push(autosV[i]); 
                //console.log(nArray);
             }       
         }
         let resultado = nArray.filter(function(valor){
               return valor.vendido == false;
         })
         return resultado

         //nArray.forEach(function(dato){
            //console.log(dato);
         //})
         //let prueba = nArray.filter(function (){

         //})
         //return nArray.forEach(function(dato){
            //console.log(dato);
         //});
      } 
}


console.log(concesionaria.autosQuePuedeComprar({capacidadDePagoEnCuotas: 30000, capacidadDePagoTotal: 100000000 }));
//console.log(concesionaria.autosQuePuedeComprar({capacidadDePagoEnCuotas: 30000, capacidadDePagoTotal: 100000000 }));

//buscarAutos("JJK116")
//console.log(autosI);
//console.log(concesionaria.autos);












/*
// let autos = require("./autos"); 
// const concesionaria = {
//        autos: autos
// };

// //console.log(autos);

// function nBuscar(texto){
    
//     for(let i=0; i<autos.length;i++){
//         if(autos[i].patente === texto){
//             return autos[i];
//         }
//         else{
//             return null;
//         }
//     }
        
//     // let buscar = autos.find(function(bPatente){
//     //     return bPatente.patente == texto;
//     // })
//     // console.log(buscar);
// },


// nBuscar("APL123");

let autos = require("./autos"); 
let concesionaria = {
   autos: autos,
 
   buscarAuto: function buscarAuto(patente){
                              for(let i=0; i<autos.length;i++){
                                 if(autos[i].patente === patente)                                     {
                                      return autos[i];
                                      }
                                       else
                                           return null;
                                       }
                                     },

   venderAuto: function venderAuto(patente){
                              const auto = this.buscarAuto(patente);
                              if(auto){
                                 auto.vendido = true;
                              }
   },
   autosParaLaVenta: function(){
      return autos = this.autos.filter(function(elemento){
         return !elemento.vendido;
      })
   }

}

console.log(autos);
console.log(autos.buscarAuto.patente("JJK116"));

/*
let autos = require("./autos"); 
let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente){
                              for(let i=0; i<autos.length;i++){
                                 if(autos[i].patente === patente)                                     {
                                      return autos[i];
                                      }
                                       else
                                           return null;
                                       }
                                     },

   venderAuto: function (patente){
            let autos = this.buscarAuto(patente);
                    if(autos){
                            autos.vendido = true;
                       }
   },
   autosParaLaVenta: function (){
      let vehiculo = this.autos.filter(function(patente){
         return patente.vendido == false;
      });
      return vehiculo;
},
   autosNuevos: function (){
      let vehiculo = this.autosParaLaVenta().filter(function(patente){
         return patente.km < 100;
      })
         
      return vehiculo;
   } 
 listaDeVentas: function(){
      let ventas = this.autos.filter(function(patente){
         return patente.vendido == true;
      });
      let lista = [];
      ventas.forEach(function(valor){
         lista.push(valor.precio);
      })
      return lista;
   },
   totalDeVentas: function(){
            let totalVentas = this.listaDeVentas().reduce((acum,item) => {
               return acum + item;
            },0);
            return totalVentas;
   }

}
*/