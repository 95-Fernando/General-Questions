const buttons = document.querySelectorAll(".button")
const questionsContainer = document.querySelectorAll(".question__container")

buttons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        const question = e.currentTarget.parentElement.parentElement;

        questionsContainer.forEach((item) =>{
           console.log(item)
           if(question != item){
            item.classList.remove("show__text")
           }
        })
        question.classList.toggle("show__text")
    })
})