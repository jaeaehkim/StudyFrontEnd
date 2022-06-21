let boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index+1}`);
    console.log(boxEl.textContent);
    console.log(index, boxEl);
    
})