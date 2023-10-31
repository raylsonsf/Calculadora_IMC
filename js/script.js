 

function changeImage(gender) {
    const figuraElement = document.getElementById("figura");
    if (gender === "mulher") {
        figuraElement.src = "img/mulher.png";
    } else if (gender === "homem") {
           figuraElement.src = "img/homem.png" ;
    }
}
// Função para alterar o background com base no gênero
function changeBackground(genero) {
    var calculadora = document.getElementById('Calculadora');

    if (genero === 'mulher') {
        calculadora.style.backgroundColor = 'rgb(187, 64, 85)'; // Altere a cor de fundo para rosa (ou a cor desejada).
    } else if (genero === 'homem') {
        calculadora.style.backgroundColor = 'rgb(49, 40, 170)'; // Altere a cor de fundo para azul (ou a cor desejada).
    }
}



    //Calculadora
function calcular() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const result = peso / (altura * altura);
    const resultadoElement = document.getElementById("resultado");

    
     if (result < 18.5) {
        mensagem = "<br> Abaixo do peso <br> Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
    } else if (result >= 18.6 && result < 24.9) {
        mensagem = "<br> Peso Ideal <br> Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
    } else if (result >= 25 && result < 29.9) {
        mensagem = "<br> Levemente acima do peso <br> Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.";
    } else if (result >= 30 && result < 34.9) {
        mensagem = "<br> Obesidade grau I <br> Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
    } else if (result >= 35 && result < 39.9) {
        mensagem = "<br> Obesidade grau II (severa) <br> Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.";
    } else {
        mensagem = " <br> Obesidade III (mórbida) <br> Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.";
    }
    resultadoElement.innerHTML =" Seu IMC é: " + result.toFixed(2) +  mensagem;
}
