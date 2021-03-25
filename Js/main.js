'use strict'



// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction(){
//     if(window.pageYOffset > sticky){
//         header.classList.add("sticky");
//     }else{
//         header.classList.remove("sticky");
//     }
// }

const typed = new Typed('.typed', {
    strings:[
        'Full Stack Developer Jr.'
    ],

    typeSpeed: 100, //Velocidade em milisegundos para por uma letra
    startDelay: 300, //Tempo de retraso ao iniciar a animacao
    backSpeed: 100, //Velocidade em milisegundos para deletar uma letra
    smartBackspace: true, //deletar as palavras que som novas em uma cades
    shufle: false, // alterar o ordem das palavras ao escrever
    backDelay: 1000, // Tempo de espera depois de terminar a palavra escrita
    loop: true, //Loop do array
    loopCount: false, //Cantidade de vezes ao repetir o array  false = infinite
    showCursor: true, // Mostrar cursos piscando
    cursorChar: '|', // Carater paro o cursos
    contentType: 'html' // 'hmtl' ou 'null' para texto sin formato
})