import React from "react";

const states = ['Rio de janeiro', 'São Paulo', 'Minas Gerais', 'Amapá', 'Amazonas', 'Ceará', 'Acre', 'Macapá', 'Mato Grosso', 'Bahia', 'Rio Grande do Sul', 'Pará', 'Pernanbuco', 'Espirito Santo'];

class Form extends React.Component {
 render() {
     return(
        <div>
            <h1> Formulário de cadastro de currículo </h1>
            <form>
        <fieldset>
            <legend>Dados Pessoais</legend>
                <div>
                Nome Completo:
                <input name="name" 
                type="text"
                maxLength= "40"
                required
                placeholder=" digite seu nome completo"
                />
                </div>
                <div>
                E-mail:
                <input name="email"
                maxLength="50"
                required
                placeholder=" digite seu E-mail" />
                </div>
                <div>
                CPF:
                <input name="cpf"
                maxLength="11"
                required
                placeholder=" digite seu CPF" />
                </div>
                <div>
                Endereço:
                <input name="endereco"
                maxLength="200"
                required
                placeholder=" digite seu endereco completo" />
                </div>
                <div>
                Cidade:
                <input name="cidade"
                maxLength="28"
                required 
                placeholder=" digite sua cidade" />   
                </div>
                <div>
                Estado:
                <select name="estado" required
                 >
                <option value=""> Selecione</option>
                {
                    states.map((state, id) => (<option key={id}>{state}</option> 
                    ))
                }                
                </select>
                </div> 
                <div>
                    <label htmlFor="casa">
                    <input name="tipoCasa" id="casa" type="radio" value="casa"/> Casa
                    </label>                   
                
                    <label htmlFor="apartamento">
                    <input name="tipoapartamento" id="apartamento" type="radio" value="apartamento"/> Apartamento
                    </label>                    
                </div>              
                
                
                </fieldset>
            </form>
        </div>
     )
 }
}

export default Form;