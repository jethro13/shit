"use strict";
let lignesCdes = [];
let clients = [
  {name : "client1" ,code : "cl1"},
  {name : "client2" ,code : "cl2"},
  {name : "client3" ,code : "cl3"},
  {name : "client4" ,code : "cl4"},
  {name : "client5" ,code : "cl5"},
  {name : "client6" ,code : "cl6"}
];
let tva = [2,10,20.6];
var init = function (){
  for (let i=0;i<1000;i++){
    let idxTva=Math.round(Math.random()*2);
    let myTva = tva[idxTva];
    let idxCli=Math.round(Math.random()*5);
    let myCli = clients[idxCli];
    let montant = Math.random()*1000;
    lignesCdes.push([myCli, myTva, montant]);
}
  return lignesCdes;
}
console.log(init());
