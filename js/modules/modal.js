function showModalContent(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide'); 
    document.body.style.overflow = "hidden";
    
    if (modalTimerId) {
      clearInterval(modalTimerId);
  }
   
   
 }
function closeModalContent(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show'); 
    document.body.style.overflow = "";

 }

function modal (triggerSelector, modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector),
    modalTrigger = document.querySelectorAll(triggerSelector);


 modalTrigger.forEach(item => { 
 item.addEventListener('click', () => {
      showModalContent(modalSelector, modalTimerId);
  });
});

  modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == '' ) {
          closeModalContent(modalSelector);
      }
      
  });

  document.addEventListener('keydown', (e) => {
      if(e.code === "Escape" && modal.classList.contains('show')) {
          closeModalContent(modalSelector);
      }
  });


function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    showModalContent(modalSelector, modalTimerId);
    window.removeEventListener('scroll', showModalByScroll);
}}

window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModalContent};
export {showModalContent};