window.addEventListener("DOMContentLoaded", function(){
    const question_lists = document.querySelectorAll(".questions__sm .questions__list");
    const answers_lists = document.querySelectorAll(".questions__sm .answer");

    question_lists.forEach( el => {
        el.addEventListener('click', ()=>{
            answers_lists.forEach(item => {
                item.classList.remove("active");
            })
            
            let answer = el.querySelector(".answer");
            answer.classList.add("active")
        })
    })
})