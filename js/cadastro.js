let btn_cadastrar = document.getElementById("btn_cadastrar")
let janela_cadastro = document.getElementById("cadastro")
let botao_cancelar = document.getElementById("btn_cancelar")
let inp_nome = document.getElementById("inp_nome")
let inp_cidade = document.getElementById("inp_cidade")
let inp_numero = document.getElementById("inp_numero")
let inp_email = document.getElementById("inp_email") 
let btn_salvar = document.getElementById("btn_salvar")
let container_cadastro = document.getElementById("container_cadastro")
let rodape = document.getElementById("rodape")
let div_editar = document.getElementById("div_editar")



function MostrarCadastro(e){
    e.preventDefault()
    janela_cadastro.removeAttribute("id")
    janela_cadastro.classList.add("cadastro")
}

function ExcluirCadastro(e){
    e.preventDefault()
    container_cadastro.removeChild(e.target.parentNode.parentNode)
}

function EditarCadastro(e){
    let altera_input_nome = document.getElementById("altera_input_nome")
    let altera_input_email = document.getElementById("altera_input_email")
    let altera_input_cidade = document.getElementById("altera_input_cidade")
    let altera_input_numero = document.getElementById("altera_input_numero")
    let btn_salvar_alteracao = document.getElementById("btn_salvar_editar")
    e.preventDefault()

    altera_input_nome.value = e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    altera_input_email.value = e.target.parentNode.previousSibling.previousSibling.previousSibling.innerText
    altera_input_numero.value = e.target.parentNode.previousSibling.previousSibling.innerText
    altera_input_cidade.value = e.target.parentNode.previousSibling.innerText

    console.log(altera_input_nome.value)

    div_editar.classList.remove("div_editar")
    div_editar.classList.add("div_editar1")

  
    btn_salvar_alteracao.removeEventListener("click", salvarAlteracoes);
    btn_salvar_alteracao.addEventListener("click", salvarAlteracoes);

    let btn_cancelar_alteracao = document.getElementById("btn_cancelar_editar")

    btn_cancelar_alteracao.addEventListener("click",()=>{
        div_editar.classList.remove("div_editar1")
        div_editar.classList.add("div_editar")
    })

  
    function salvarAlteracoes() {
        e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText = altera_input_nome.value
        e.target.parentNode.previousSibling.previousSibling.previousSibling.innerText = altera_input_email.value
        e.target.parentNode.previousSibling.previousSibling.innerText = altera_input_numero.value
        e.target.parentNode.previousSibling.innerText = altera_input_cidade.value

        div_editar.classList.remove("div_editar1")
        div_editar.classList.add("div_editar")

        
        btn_salvar_alteracao.removeEventListener("click", salvarAlteracoes);
    }
}

function CancelarCadastro(e){
    e.preventDefault()
    janela_cadastro.classList.remove("cadastro")
    janela_cadastro.setAttribute("id","cadastro")

    inp_cidade.value = ""
    inp_nome.value = ""
    inp_email.value  = ""
    inp_numero.value = ""
}
let contador = 0;
function SalvarCadastro(e){
    contador +=1;
    e.preventDefault()

    if(inp_nome.value==""||inp_cidade.value == ""|| inp_numero.value == ""|| inp_email.value == ""){
        alert("Preencha todos os campos !")
    }else{
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let regex2 = /([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})/
    
        if(regex.test(inp_email.value) && regex2.test(inp_numero.value)){

        let div_pai = document.createElement("div")
        div_pai.setAttribute("id",`div${contador}`)
        div_pai.classList.add("div_pai")    


        let div_nome = document.createElement("div")
        div_nome.nex
        div_nome.classList.add("cadastro_finalizado")
        div_nome.setAttribute("id",`id_nome${contador}`)
        let p_nome = document.createElement("p")
        p_nome.innerHTML = inp_nome.value
        div_nome.appendChild(p_nome)

        let div_cidade = document.createElement("div")
        div_cidade.classList.add("cadastro_finalizado")
        div_cidade.setAttribute("id",`id_cidade${contador}`)
        let p_cidade = document.createElement("p")
        p_cidade.innerHTML = inp_cidade.value
        div_cidade.appendChild(p_cidade)

        let div_numero = document.createElement("div")
        div_numero.setAttribute("id",`id_numero${contador}`)
        div_numero.classList.add("cadastro_finalizado")
        let p_numero = document.createElement("p")
        p_numero.innerHTML = inp_numero.value
        div_numero.appendChild(p_numero)

        let div_email = document.createElement("div")
        div_email.setAttribute("id",`iguala_email${contador}`)
        div_email.classList.add("iguala_email")
        let p_email = document.createElement("p")
        p_email.innerHTML = inp_email.value
        div_email.appendChild(p_email)

        let div_btns = document.createElement("div")
        div_btns.classList.add("cadastro_finalizado")
        
        let btn_editar = document.createElement("button")
        btn_editar.setAttribute("id","btn_editar")
        btn_editar.classList.add("editar_div")
        btn_editar.innerHTML = "Editar"
        
        let btn_excluir = document.createElement("button")
        btn_excluir.innerHTML = "Excluir"
        btn_excluir.setAttribute("id","btn_excluir")
        btn_excluir.classList.add("excluir_div")
        div_btns.appendChild(btn_editar)
        div_btns.appendChild(btn_excluir)

        div_pai.appendChild(div_nome)
        div_pai.appendChild(div_email)
        div_pai.appendChild(div_numero)
        div_pai.appendChild(div_cidade)
        div_pai.appendChild(div_btns)


      container_cadastro.appendChild(div_pai)
        
        janela_cadastro.classList.remove("cadastro")
        janela_cadastro.setAttribute("id","cadastro")

        inp_cidade.value = ""
        inp_nome.value = ""
        inp_email.value  = ""
        inp_numero.value = ""

      }else{
        alert("Email ou número de celular inválidos")
      }
        
        
    }


 let btn_excluir = document.querySelectorAll(".excluir_div")

for(let i = 0;i < btn_excluir.length;i++){
    btn_excluir[i].addEventListener("click",ExcluirCadastro)
}

let btn_editar = document.querySelectorAll(".editar_div")
for(let i = 0; i<btn_editar.length;i++){
    btn_editar[i].addEventListener("click",EditarCadastro)
}
}

btn_cadastrar.addEventListener("click",MostrarCadastro)
botao_cancelar.addEventListener("click",CancelarCadastro)
btn_salvar.addEventListener("click",SalvarCadastro)


