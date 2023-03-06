var items=document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent='hello';
for(var i=0;i<items.length;i++){
items[i].style.fontWeight="bold";}