const logomenu=document.querySelector('.logomenuimg');
const contitems = document.querySelector('.contItems');
const items = document.querySelectorAll('.items');

logomenu.addEventListener('click',()=>{
    if(contitems.className==='contItems'){
        contitems.className+=' responsive';
        logomenu.style.width="30px"
        logomenu.style.height="30px"
        logomenu.style.marginTop="10px"
        logomenu.src="ressources/close.svg";
    }
    else{
        contitems.className='contItems';
        logomenu.style.width="40px"
        logomenu.style.height="40px"
        logomenu.style.marginTop="10px"
        logomenu.src="ressources/menu.svg";
    }
})

// enlever le menu quand on clique sur un lien
items.forEach(item =>{
    item.addEventListener('click',()=>{
        contitems.className='contItems';
        logomenu.src="ressources/menu.svg";
    })

})