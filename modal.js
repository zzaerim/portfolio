const openButton = document.querySelectorAll('.button');
const closeButton = document.querySelectorAll('.closeBtn');

const openModalButton = function(event) {
    const openTarget =  event.target.dataset.targetModal;
    console.log(`openTarget : ${openTarget}`);
    const targetModal = document.querySelector(`#${openTarget}`);

    targetModal.classList.remove('none-visible');
    targetModal.classList.add('visible');
};

const onClickCloseButton = function(event) {
    const closeTarget =  event.target.dataset.targetModal;
    const targetModal = document.querySelector(`#${closeTarget}`);
    console.log(`closeTarget : ${closeTarget}`);
    targetModal.classList.remove('visible');
    targetModal.classList.add('none-visible');
};

// "이름 : " + name ->  `이름 : ${name}`  ---> template literal
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals    

// template string 

// getElementClassName, queryselectAll 등은 유사배열
// 유사배열을 배열로 만들어줌 => Array.from 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call

Array.from(openButton).forEach(button => button.addEventListener('click', openModalButton));

Array.from(closeButton).forEach(button => button.addEventListener('click', onClickCloseButton));