// Perguntas do quiz
const questions = [
  {
    question: "Qual é o principal desafio do agronegócio sustentável?",
    options: ["Garantir a produtividade sem prejudicar o meio ambiente", "Aumentar as áreas de cultivo em áreas urbanas"],
    correctAnswer: 0
  },
  {
    question: "A agricultura orgânica é uma alternativa para a sustentabilidade no agronegócio?",
    options: ["Sim, ela evita o uso de pesticidas e produtos químicos", "Não, ela é muito prejudicial ao meio ambiente"],
    correctAnswer: 0
  },
  {
    question: "O que é a agrofloresta?",
    options: ["Sistema de produção agrícola que combina árvores com cultivos", "Um tipo de cultivo exclusivamente voltado para monocultura"],
    correctAnswer: 0
  },
  {
    question: "O que significa 'economia circular' no contexto do agronegócio?",
    options: ["Reduzir a quantidade de resíduos e reaproveitar recursos", "Focar no aumento do uso de fertilizantes químicos"],
    correctAnswer: 0
  },
  {
    question: "O que é a certificação ambiental para produtos agrícolas?",
    options: ["Um selo que garante que o produto foi produzido de forma sustentável", "Uma autorização para aumentar o uso de agrotóxicos"],
    correctAnswer: 0
  },
  {
    question: "O uso de tecnologias como drones e sensores no agronegócio pode ajudar a?",
    options: ["Aumentar a produção sem comprometer o meio ambiente", "Substituir os agricultores nas fazendas"],
    correctAnswer: 0
  },
  {
    question: "Quais são as principais fontes de energia renovável no agronegócio?",
    options: ["Solar e eólica", "Carvão e petróleo"],
    correctAnswer: 0
  },
  {
    question: "A pecuária sustentável busca diminuir os impactos ambientais através de?",
    options: ["Uso racional da água e pastagem rotacionada", "Aumento do número de animais por hectare"],
    correctAnswer: 0
  }
];

// Variáveis do quiz
let currentQuestionIndex = 0;
let score = 0;
let userAnswer = null; // Armazenar a resposta selecionada

// Função para exibir a próxima pergunta
function nextQuestion() {
  // Verifica se o usuário já selecionou uma resposta
  if (userAnswer === null) {
    alert("Por favor, selecione uma resposta!");
    return;
  }

  // Verifica se a resposta está correta
  if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  // Atualiza o índice para a próxima pergunta
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

// Função para exibir a pergunta atual
function showQuestion() {
  const question = questions[currentQuestionIndex];

  // Atualiza o texto da pergunta e das opções
  document.getElementById("question-text").textContent = question.question;
  document.getElementById("option-1").textContent = question.options[0];
  document.getElementById("option-2").textContent = question.options[1];

  // Resetando o estado do botão para "Próxima" e as alternativas
  document.getElementById("next-button").disabled = true;
  document.querySelector("input[name='answer']:checked")?.checked = false; // Limpar seleção anterior
  userAnswer = null; // Limpar a resposta armazenada

  // Adiciona o evento de seleção de resposta
  const options = document.getElementsByName("answer");
  options.forEach(option => {
    option.addEventListener('change', () => {
      userAnswer = parseInt(option.value);
      document.getElementById("next-button").disabled = false;
    });
  });
}

// Função para mostrar o resultado final
function showResult() {
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  document.getElementById("result-text").textContent = `Sua pontuação foi: ${score} de ${questions.length}`;
  document.getElementById("quiz-container").style.display = "none";
}

// Função para reiniciar o quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

// Inicializa o quiz ao carregar a página
window.onload = showQuestion();
