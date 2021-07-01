import  Modal  from './modal.js'


const checkButtons = document.querySelectorAll(".actions a.check")
const del = document.querySelectorAll(".delete")
const modal = Modal()
const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")


checkButtons.forEach(element=>{

    element.addEventListener("click",handleClick)
})



const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(element=>{

    element.addEventListener("click",(event)=> handleClick(event,false))
})


function handleClick(event,check = true){
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete" 
    const roomId = document.querySelector("#room-id").dataset.id     //MONTAR A URL PARA ONDE O FORMULARIO SERÁ ENVIADO
    const questionId = event.target.dataset.id
    const form = document.querySelector(".modal form")
    form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`)



    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML =`Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim , ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open(event)
}