//get the items
//get average of items

function average(sum,items) {
  console.log("hi");
  object=items;
  object.reduce(items);
  var average = sum+items;

}
//problem2
// var cost = [];
//runs through items
//finds costUSD
//if between 14&18
var costAmount = items.filter(function(currentItem,index,array) {
console.log(currentItem.currency_code).indexOf('USD');{
  return true;
}

  if(costUSD.price <= 18 && object.price >= 14){
    cost.push(costUSD.title);
  }
});
console.log(cost);

//prob3
//samem syntax
//which propery gives me GBP
//if object.currency_code === "GBP"
//dont push
//dont push variable only array
var currency = items.filter(function(GBP) {
  if(currency.currency_code === GBP){

}
});
console.log(currency);


//get items made of wood
var itemsMadeOfWood = items.filter(function(itme,i,arr) {
  // console.log(items.materials.indexOf('wood'));
  if(item.materials.indexOf('wood')!== -1){
    return true;
  }
});
console.log(itemsMadeOfWood);


[1,5,2,7].reduce(function(returnValueSoFar, currentItem,index, array) {
  return  returnValueSoFar + currentItem;
}, 0);

[1,5,2,7].reduce(function(a,b) {return a+b;}, 0);

})

//get the oldest person in the group
var oldestPerson = people.reduce(function(retrunVal, curr,i,arr) {
  if(returnVal.birthYear < curr.birthYear){
    return returnVal;
  } else {
    return curr;
  }
});
console.log(oldestPerson);
