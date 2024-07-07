document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario');
    const backButton = document.querySelector('.back-btn');
    const card = document.querySelector('.thecard');
    const resultado = document.querySelector('.resultado');
    const botao = document.querySelector('.send-btn');
    const pessoas = [];
    
    const nomeInput = formulario.querySelector('.nome');
    const idadeInput = formulario.querySelector('.idade');
    const alturaInput = formulario.querySelector('.altura');
    const pesoInput = formulario.querySelector('.peso');

    // Função de validação
    function validarFormulario() {
        const nome = nomeInput.value.trim();
        const idade = idadeInput.value.trim();
        const altura = alturaInput.value.trim();
        const peso = pesoInput.value.trim();

        const alturaValida = altura !== '' && !isNaN(altura) && parseFloat(altura) > 0;
        const pesoValido = peso !== '' && !isNaN(peso) && parseFloat(peso) > 0;

        if (nome && idade && alturaValida && pesoValido) {
            botao.classList.remove('btn-disabled');
            botao.classList.add('btn-enabled');
            botao.disabled = false;
            
        } else {
            botao.classList.remove('btn-enabled');
            botao.classList.add('btn-disabled');
            botao.disabled = true;
            
        }
    }

    // função principal 
    function recebeEvento(evento) {
        evento.preventDefault(); // impossibilita o site de recarregar quando o botão for apertado

        const nome = nomeInput.value.trim();
        const idade = idadeInput.value.trim();
        const altura = alturaInput.value.trim();
        const peso = pesoInput.value.trim();

        pessoas.push({ nome, idade, altura, peso });

        console.log(pessoas); 

        const imc = calcularIMC(peso, altura);
        resultado.innerHTML += `O IMC de ${nome} é igual a ${imc}`;

        card.classList.add('rotate-card');
    }

    function calcularIMC(peso, altura) {
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        let imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    formulario.addEventListener('submit', recebeEvento);
    backButton.addEventListener('click', (evento) => {
        evento.preventDefault(); 
        card.classList.remove('rotate-card');
        formulario.reset();
        resultado.innerHTML = ''; 
        validarFormulario(); // Revalida o formulário após o reset
    });

    // Adiciona os eventos de input para validação em tempo real
    nomeInput.addEventListener('input', validarFormulario);
    idadeInput.addEventListener('input', validarFormulario);
    alturaInput.addEventListener('input', validarFormulario);
    pesoInput.addEventListener('input', validarFormulario);

    // Inicializa a validação no carregamento da página
    validarFormulario();
});
