var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='coral'
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0 ;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green"
}