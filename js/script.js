import { musicas } from "./musicas.js";

const url = 'http://127.0.0.1:5500/js/musicas.json';



    musicas.forEach(element => {
        let nav = document.querySelector('nav')
        let p = document.createElement('p')
        
        p.setAttribute('id', element.id)
        p.addEventListener('click', atualizarTela)
        p.textContent = `${element.id} - ${element.musica} (${element.nomeArtista})`
        nav.appendChild(p)

    });




function atualizarTela(event){
        const id = parseInt(event.target.id) -1

        let head = document.querySelector('.head')
        let nomeMusica = head.children[1]
        let nomeArtista = head.children[2]
        nomeMusica.textContent = "Nome da Musica: " + " " + musicas[id].musica
        nomeArtista.textContent = "Artista: " + " " + musicas[id].nomeArtista


        let musica = document.querySelector('.musica')
        let titulo = musica.children[0]
        titulo.textContent = musicas[id].musica
        let letra = musica.children[1]
        letra.innerHTML = ''
        letra.textContent = musicas[id].letra

        let traducao = document.querySelector('.traducao')
        let titulo_t = traducao.children[0]
        titulo_t.textContent = "Traduzir"
        let letra_t = traducao.children[1]
        letra_t.innerHTML = ''
        letra_t.textContent = musicas[id].letra
        
        let componentes_video = document.querySelector('.video')
        let img1_video = componentes_video.children[0]
        img1_video.src = musicas[id].img1

        let video = componentes_video.children[1]
        video.src = musicas[id].url_musica
        let img2_video = componentes_video.children[2]
        img2_video.src = musicas[id].img2



}
