 let botao = document.querySelector('#Enviar');

  botao.addEventListener('click', () => {

    let email = document.querySelector('#email').value
    let name = document.querySelector('#name').value
    let inputContato = document.querySelector('#ctt').value
    let inputMensagem = document.querySelector('#mensagem').value
     

     if (email && name && inputContato && inputMensagem) {
      alert('Registro realizado com sucesso!')
     } else {
        alert('Por favor, preencha todos os campos!')
     }  
 });

let botaoContato = document.querySelector("#Contato")
let modal = document.querySelector("dialog")
let botaoClose = document.querySelector("#close")

botaoContato.onclick = function(){
  modal.showModal()
}
botaoClose.onclick = function (){
  modal.close()
}


document.querySelector('#coracao1').addEventListener('click',()=>{
  document.querySelector('#coracao1').style.display = 'none'
  document.querySelector('#coracaover1').style.display = 'block'
})
document.querySelector('#coracaover1').addEventListener('click',()=>{
  document.querySelector('#coracao1').style.display = 'block'
  document.querySelector('#coracaover1').style.display = 'none'
  
})

