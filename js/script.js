import { musicas } from "./musicas.js";
import { tirarEnfase, destacar, editarCabecalho, editarMusica, editarTraducao, editarVideo } from "./manipularTela.js";


const img_menu = document.querySelector('.menu')

img_menu.addEventListener('click', (event) =>{
    let obj = event.target
    const divs_nav = document.querySelectorAll('nav div')


    divs_nav.forEach(div =>{
        if(div.style.display == 'flex'){
            div.style.display = 'none'
            obj.style.width = "48px"
            obj.style.height = "48px"
        } else {
            div.style.display = 'flex'
            obj.style.width = "20px"
            obj.style.height = "20px"
        }
    })
    

})



    musicas.forEach(element => {
        let nav = document.querySelector('nav')
        
        let p = document.createElement('p')
        let div = document.createElement('div')
        div.style.display = 'flex'
        let img = document.createElement("img")
        img.src="https://img.icons8.com/plasticine/20/hand-right.png"
        
    
        div.appendChild(img)
        div.appendChild(p)
        
        p.setAttribute('id', element.id)
        p.addEventListener('click', atualizarTela)
        p.textContent = `${element.id} - ${element.musica} (${element.nomeArtista})`
        
     
        nav.appendChild(div)
        img.classList.add('invisivel')

    });




function atualizarTela(event){
        const p = event.target
       

        const id = parseInt(p.id) -1 
        tirarEnfase()
        destacar(p)

        editarCabecalho(id)
        editarMusica(id)
        editarTraducao(id)
        editarVideo(id)
}

