const mario = document.querySelector('.mario');  /* assim liga html com o js */
const pipe = document.querySelector('.pipe');  /* assim liga html com o js */


const jump = () => {                   /* funçao de add e remover jump */
    mario.classList.add('jump');

    setTimeout(() =>{                         /* funçao de acionar um tempo (() => {},tempo)*/

        mario.classList.remove('jump');
 
    },500);

}

/* loop pra verificar se e pra reeniciar o jogo */
const loop = setInterval(() => {                                    /* funçao de acionar um tempo (() => {},tempo)*/

    const pipePosition = pipe.offsetLeft;                                          /* pegar o deslocamento a  esquerda */
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');  /* pegar o estilo da hora que para */


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';                               /* parar a animação do pipe*/
        pipe.style.left = `${pipePosition}px`;                          /* ficar parado onde bateu */

        mario.style.animation = 'none';                                   /* parar a animação do mario */
        mario.style.bottom = `${marioPosition}px`;                          /* ficar parado onde bateu */

        mario.src = 'game-over.png';
        mario.style.width = '75px'
        mario.style.marginleft = '50px'

        clearInterval(loop)                                           /* parar loop  */

    }

}, 10);



document.addEventListener('keydown', jump);  /* quando precisionar uma tecla ocorre o evento jump */


