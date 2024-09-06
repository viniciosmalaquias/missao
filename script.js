const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é um dos princípios fundamentais do desenvolvimento sustentável?",
        alternativas: [
            {
                texto:"Equidade social",
                afirmacao: "O desenvolvimento sustentável busca promover a equidade social, garantindo que os benefícios do crescimento econômico sejam distribuídos de maneira justa entre todas as camadas da sociedade."
            },
            {
                texto: "Maximização dos lucros a curto prazo",
                afirmacao: "Maximizar os lucros a curto prazo não é um princípio do desenvolvimento sustentável, que prioriza a longevidade e o equilíbrio econômico, social e ambiental."
            }
           
        ]
    },
    {
        enunciado: "Como o desenvolvimento sustentável pode impactar a economia local?",
        alternativas: [
            {
                texto: "Geração de empregos verdes.",
                afirmacao: "O desenvolvimento sustentável pode estimular a criação de empregos verdes e novas oportunidades econômicas em setores que promovem a conservação ambiental e a eficiência energética."
            },
            {
                texto: "Aumento da desigualdade econômica",
                afirmacao: "O desenvolvimento sustentável tem como objetivo reduzir a desigualdade econômica, promovendo a inclusão e a justiça social, ao invés de aumentar a disparidade."
            }
           
        ]
    },
    {
        enunciado: "Qual é uma estratégia comum para alcançar os objetivos de desenvolvimento sustentável?",
        alternativas: [
            {
                texto: "Investimento em energia renovável",
                afirmacao:"Investir em fontes de energia renovável, como solar e eólica, é uma estratégia crucial para reduzir a pegada de carbono e promover a sustentabilidade ambiental."
            },
            {
                texto: "Aumento da produção industrial sem regulamentação",
                afirmacao:"A produção industrial desregulada pode ser prejudicial para a sustentabilidade, e não é uma estratégia alinhada com os objetivos do desenvolvimento sustentável."
            }
        ]
    }  
];
        let atual= 0;
        let perguntaAtual;
        let historiaFinal="";

        function mostraPergunta(){
            if(atual>= perguntas.length) {
                mostraResultado();
                return;
            }
            perguntaAtual = perguntas[atual];
            caixaPerguntas.textContent = perguntaAtual.enunciado;
            caixaAlternativas.textContent = "";
            textoResultado.textContent = "";
            mostraAlternativas ();
        }

        function mostraAlternativas () {
            for (const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativa = document.createElement("button");
                botaoAlternativa.textContent = alternativa.texto;
                botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa) );
                caixaAlternativas.appendChild(botaoAlternativa) ;
            }
        }
         function respostaSelecionada (opcaoSelecionada) {
            const afirmacao = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacao + " ";
            atual++
            mostraPergunta () ;
         }

         function mostraResultado () {
            caixaPerguntas.textContent = "Resumindo...";
            textoResultado.textContent = historiaFinal;
            caixaAlternativas.textContent = "";
         }
            mostraPergunta();


