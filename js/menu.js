
export default function visualizarMenu(){
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
}