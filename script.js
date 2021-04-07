const submit = document.querySelector('[type="submit"]'),
      input = document.querySelector('form input'),
      list = document.querySelector('ul'),
      modal = document.querySelector('.modal');
function addItem(string){
    let tmp = `
    <li>
        <div class="element">
            <span>${string}</span>
            <div class="icons">
                <button><i class="material-icons done">done</i></button>
                <button><i class="material-icons edit">edit</i></button>
                <button><i class="material-icons delete">delete</i></button>
            </div>
        </div>
    </li>
    `;
    list.innerHTML += tmp;
}
function findLi(childElement){
    while(childElement.tagName != 'LI'){
        childElement = childElement.parentElement;
    }
    return childElement;
}
function init(){
    modal.classList.add('hide');
}

submit.addEventListener('click',e =>{
    e.preventDefault();
    addItem(input.value);
    input.value = '';
});

document.querySelectorAll('.done').forEach(item => {
    item.addEventListener('click' , e => {
        e.preventDefault();
        findLi(e.target).querySelector('span').style.cssText += 'text-decoration:line-through;text-decoration-color:green;';

    });
});

document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click',e => {
        e.preventDefault();
        findLi(e.target).remove();
    });
});

document.querySelectorAll('.edit').forEach(item => {
    item.addEventListener('click',e => {
        let string;
        let insertValue;
        e.preventDefault();
        string = findLi(e.target).querySelector('span').textContent;
        insertValue = `
        <input type="text" value="${string}">
        `;
        findLi(e.target).querySelector('span').insertAdjacentHTML('afterend',insertValue);
        findLi(e.target).querySelector('.delete').remove();
        findLi(e.target).querySelector('span').remove();
        findLi(e.target).querySelector('.edit').remove();
        

    });
});

init();