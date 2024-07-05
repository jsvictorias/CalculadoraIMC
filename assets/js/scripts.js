document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario');
    const backButton = document.querySelector('.back-btn');
    const card = document.querySelector('.thecard');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEvento(evento) {
        evento.preventDefault(); 

        const nome = formulario.querySelector('.nome').value;
        const idade = formulario.querySelector('.idade').value;
        const altura = formulario.querySelector('.altura').value;
        const peso = formulario.querySelector('.peso').value;

        pessoas.push({
            nome: nome,
            idade: idade,
            altura: altura,
            peso: peso
        });

        console.log(pessoas);

        const imc = calcularIMC(peso, altura);
        resultado.innerHTML += `O IMC de ${nome} é igual a ${imc}`;

        card.classList.add('rotate-card');
    }

    function calcularIMC(peso, altura) {
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        let imc = peso / (altura ** 2);
        console.log(`O IMC é igual a ${imc.toFixed(2)}`);
        return imc.toFixed(2);
    }

    formulario.addEventListener('submit', recebeEvento);

    backButton.addEventListener('click', (evento) => {
        evento.preventDefault(); 
        card.classList.remove('rotate-card');
        formulario.reset();
        resultado.innerHTML = ''; 
    });
});
