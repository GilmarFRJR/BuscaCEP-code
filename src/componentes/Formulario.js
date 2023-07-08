import React, { useState } from 'react'


function Formulario(){

    const [cep, setCep] = useState('')
    const [dadosAPI, setDadosAPI] = useState('')


    function pegarCEP(txt){

        setCep(txt.target.value)

    }


    function pegarDadosAPI(){

        if (cep.length === 0){
            return
        } else if (cep.length !== 8){

            alert('Cep inválido')
            setCep('')
            return

        } else {

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
                
                if (data.erro || Object.keys(data).length === 0){
                alert('Esse cep não existe')
            }   else setDadosAPI(data)
            }
            )
            .catch((error) => console.log(error))

        }

    }


    function enviar(){
        window.location.reload()
    }


    return(

        <div id="container">

        <p>Cadastro</p>

        <div id="containerInputs">

         <div id="nome-email">

            <div className="inputs">

                <label for="nome">Seu Nome:</label><br />
                <input type="text" id="nome" />

            </div>
           


            <div className="inputs">

                <label for="email">Seu E-mail:</label><br />
                <input type="email" id="email" />

            </div>

         </div>


         <div id="cep-endereco-bairro">

            <div className="inputs">

                <label for="cep">Seu CEP:</label>
                <input type="number" id="cep" onChange={ pegarCEP } onBlur={ pegarDadosAPI } />

            </div>


            <div className="inputs">

                <label for="endereco">Seu Endereço:</label>
                <input type="text" id="endereco" value={dadosAPI.logradouro} />

            </div>


            <div className="inputs">

                <label for="bairro">Seu Bairro:</label>
                <input type="text" id="bairro" value={dadosAPI.bairro} />

            </div>

         </div>


         <div id="cidade-estado-numero">

            <div className="inputs">

                <label for="cidade">Sua Cidade:</label>
                <input type="text" id="cidade" value={dadosAPI.localidade} />

            </div>


            <div className="inputs">

                <label for="estado">Seu Estado:</label>
                <input type="text" id="estado" value={dadosAPI.uf} />

            </div>


            <div className="inputs">

                <label for="numero">Número da Sua Casa:</label>
                <input type="text" id="numero" />

            </div>

         </div>


            <div id="botao">

                <button onClick={ enviar }>Enviar</button>

            </div>


        </div>

    </div>
    
    )

}


export default Formulario