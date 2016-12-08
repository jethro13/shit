"use strict";

console.log('ok');

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
    let montant = Math.round(Math.random()*1000);
    lignesCdes.push([myCli, myTva, montant]);
}
  return lignesCdes;


}
let tab = [];
let tab2 = [];
let max = 0;
var min = 2000;
for (let o of init()){
  tab2 = o;
  }
  for (let i = 0;i<tab2.length;i++){
    if (tab.indexOf(tab2[0].name === -1)) {
      tab.push(tab2[0]);

    }
  }
  console.log(tab);

//const ready = function() {
//}
//sdocument.addEventListener("DOMContentLoaded", ready);
