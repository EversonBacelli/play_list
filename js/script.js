import { musicas } from "./musicas.js";
import { tirarEnfase, destacar, editarCabecalho, editarMusica, editarTraducao, editarVideo } from "./manipularTela.js";
const url = 'http://127.0.0.1:5500/js/musicas.json';



    musicas.forEach(element => {
        let nav = document.querySelector('nav')
        
        let p = document.createElement('p')
        let div = document.createElement('div')
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

