// Função para comprar carro
function comprarCarro(modelo) {
    alert(`Você comprou o carro: ${modelo}`);
}

// Função para validar o formulário de cadastro
function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (nome && telefone && email && senha) {
        alert('Cadastro realizado com sucesso!');
        return true;
    } else {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
}

