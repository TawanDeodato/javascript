// Estudos sobre addEventListener no JavaScript:

const c1 = document.getElementById("c1")
const curso = [...document.querySelectorAll(".curso")]

// const clicou = () => { alert("clicou") }
// c1.addEventListener("click", () => { alert("clicou") })

curso.map((el) => {
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(`${el} foi clicado`) // Veja no console do DevTools do google
    })
})

// c1.addEventListener("click", (evt) => { 
//     const el = evt.target
//     el.classList.add("destaque") 
// })