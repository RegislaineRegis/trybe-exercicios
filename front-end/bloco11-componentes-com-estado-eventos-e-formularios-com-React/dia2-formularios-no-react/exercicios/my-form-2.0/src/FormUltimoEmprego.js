import React from 'react';

class FormUltimoEmprego extends React.Component {
  render() {
    return (
        <>
      <fieldset>
        <legend>Dados Prossionais</legend>
        <div>
          <p>Resumo do Curriculo:</p>
          <textarea name="resumo" maxLength="1000" required />
        </div>
        <div>
          <p>Cargo:</p>
          <input
            name="cargo"
            maxLength="40"
            required
            onMouseEnter={() => {
              alert("Preencha com cuidado esta informação.");
            }}
          />
        </div>
        <div>
          <p>Descrição do Cargo:</p>
          <textarea name="descrição" maxLength="500" required />
        </div>          

      </fieldset>
       <button> Enviar</button>
       <button> Limpar </button>
       </>
    );
  }
}

export default FormUltimoEmprego;
