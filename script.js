// Para cadastrar um filme, copie um bloco { ... } da lista abaixo e troque os dados.
// Pôster: deixe poster: "" e salve a imagem como img/<id>.jpg, ou informe o caminho em "poster".

const filmes = [
    // FILMES DE AÇÃO
    {
        id: "mad-max",
        titulo: "Mad Max: Estrada da Fúria",
        poster: "",
        ano: 2015,
        generos: ["acao"],
        sinopse: "Em um mundo devastado pela escassez de recursos, Max Rockatansky tenta sobreviver sozinho até ser capturado pelo tirano Immortan Joe. Durante uma fuga liderada pela guerreira Furiosa, ele acaba se juntando a um grupo que busca liberdade e proteção. Juntos, enfrentam uma perseguição perigosa pelo deserto."
    },

    {
        id: "john-wick",
        titulo: "John Wick",
        poster: "",
        ano: 2014,
        generos: ["acao"],
        sinopse: "Após a morte de sua esposa, John Wick tenta encontrar conforto na companhia de um cachorro que ela deixou como último presente. Quando criminosos invadem sua casa e tiram dele tudo o que ainda lhe restava, John decide voltar à vida de assassino de aluguel. Sua busca por vingança acaba despertando a atenção do submundo do crime."
    },

    {
        id: "batman-cavaleiro-das-trevas",
        titulo: "Batman: O Cavaleiro das Trevas",
        poster: "",
        ano: 2008,
        generos: ["acao"],
        sinopse: "Batman continua sua luta contra o crime em Gotham City, contando com o apoio do comissário Gordon e do promotor Harvey Dent. Porém, a cidade passa a enfrentar uma ameaça imprevisível com a chegada do Coringa, um criminoso que deseja espalhar o caos. Diante de seus planos, Batman precisa enfrentar um dos maiores desafios de sua jornada."
    },

    {
        id: "missao-impossivel-efeito-fallout",
        titulo: "Missão: Impossível – Efeito Fallout",
        poster: "",
        ano: 2018,
        generos: ["acao"],
        sinopse: "Após uma missão fracassada, Ethan Hunt e sua equipe precisam recuperar materiais perigosos antes que caiam nas mãos de uma organização criminosa. Com o tempo se esgotando, eles enfrentam perseguições, traições e decisões difíceis. A missão coloca em risco não apenas suas vidas, mas também a segurança de milhares de pessoas."
    },

    {
        id: "top-gun-maverick",
        titulo: "Top Gun: Maverick",
        poster: "",
        ano: 2022,
        generos: ["acao"],
        sinopse: "Depois de décadas servindo à Marinha, Pete Maverick Mitchell continua sendo um piloto excepcional, mas seu comportamento desafiador ainda gera conflitos com seus superiores. Convocado para treinar uma equipe de jovens pilotos, ele precisa prepará-los para uma missão extremamente perigosa. Durante o treinamento, também enfrenta lembranças e questões de seu passado."
    },

    {
        id: "homem-aranha-atraves-do-aranhaverso",
        titulo: "Homem-Aranha: Através do Aranhaverso",
        poster: "",
        ano: 2023,
        generos: ["acao", "animacao"],
        sinopse: "Miles Morales retorna para uma nova aventura pelo multiverso após reencontrar Gwen Stacy. Ao conhecer diferentes versões do Homem-Aranha, ele descobre a existência de uma sociedade responsável por proteger as realidades. Entretanto, Miles passa a questionar suas regras e precisa enfrentar escolhas que podem mudar o destino de todos."
    },
    
    // FILMES DE ANIMAÇÃO
    {
        id: "toy-story",
        titulo: "Toy Story",
        poster: "",
        ano: 1995,
        generos: ["animacao", "comedia"],
        sinopse: "Woody é um brinquedo que sempre foi o favorito de seu dono, Andy, até a chegada de Buzz Lightyear, um boneco espacial cheio de recursos. Sentindo-se ameaçado, Woody acaba entrando em conflito com o novo brinquedo. Os dois precisam superar suas diferenças quando acabam longe de casa."
    },

    {
        id: "shrek",
        titulo: "Shrek",
        poster: "",
        ano: 2001,
        generos: ["animacao", "comedia"],
        sinopse: "Shrek é um ogro que vive tranquilamente em seu pântano até ter seu lar invadido por criaturas de contos de fadas. Para recuperar sua tranquilidade, ele aceita uma missão proposta pelo governante Lorde Farquaad. Ao lado de um falante Burro, Shrek parte para resgatar uma princesa que guarda seus próprios segredos."
    },

    {
        id: "soul",
        titulo: "Soul",
        poster: "",
        ano: 2020,
        generos: ["animacao", "drama"],
        sinopse: "Joe Gardner é um professor de música que sonha em se tornar um grande músico de jazz. Quando finalmente surge uma oportunidade de realizar seu sonho, um acontecimento inesperado muda completamente seus planos. Em uma jornada por um mundo diferente, Joe começa a refletir sobre o verdadeiro significado da vida."
    },

    {
        id: "como-treinar-seu-dragao",
        titulo: "Como Treinar o Seu Dragão",
        poster: "",
        ano: 2010,
        generos: ["animacao", "acao"],
        sinopse: "Soluço é um jovem viking que vive em uma comunidade onde combater dragões é uma tradição. Ao encontrar um dragão ferido, ele decide ajudá-lo em vez de enfrentá-lo. Essa amizade inesperada transforma sua maneira de enxergar os dragões e desafia os costumes de seu povo."
    },

    {
        id: "ratatouille",
        titulo: "Ratatouille",
        poster: "",
        ano: 2007,
        generos: ["animacao", "comedia"],
        sinopse: "Remy é um rato apaixonado por culinária que sonha em se tornar um grande chef em Paris. Apesar dos obstáculos impostos por sua condição, ele encontra uma oportunidade inesperada ao conhecer Linguini, um jovem funcionário de um restaurante. Juntos, eles tentam provar que talento pode surgir dos lugares mais improváveis."
    },

    {
        id: "viva-a-vida-e-uma-festa",
        titulo: "Viva: A Vida é uma Festa",
        poster: "",
        ano: 2017,
        generos: ["animacao", "drama"],
        sinopse: "Miguel é um menino apaixonado por música que sonha em seguir os passos de seu ídolo, apesar da proibição musical existente em sua família. Durante uma celebração do Dia dos Mortos, ele acaba entrando acidentalmente no mundo dos mortos. Lá, inicia uma jornada para descobrir a história de seus antepassados e compreender o verdadeiro significado da família."
    },
    
    // FILMES DE COMÉDIA
    {
        id: "as-branquelas",
        titulo: "As Branquelas",
        poster: "",
        ano: 2004,
        generos: ["comedia"],
        sinopse: "Dois agentes do FBI, Marcus e Kevin Copeland, recebem a missão de proteger duas jovens herdeiras de uma possível ameaça. Após um acidente que compromete a operação, os agentes precisam assumir a identidade das irmãs para concluir o trabalho. A situação provoca uma série de confusões e momentos inesperados."
    },

    {
        id: "gente-grande",
        titulo: "Gente Grande",
        poster: "",
        ano: 2010,
        generos: ["comedia"],
        sinopse: "Cinco amigos de infância voltam a se encontrar muitos anos depois para homenagear seu antigo treinador de basquete. Reunidos com suas famílias durante um fim de semana, eles revivem lembranças e enfrentam situações divertidas. A experiência também os faz perceber como a amizade continua importante mesmo depois de tantos anos."
    },

    {
        id: "se-beber-nao-case",
        titulo: "Se Beber, Não Case!",
        poster: "",
        ano: 2009,
        generos: ["comedia"],
        sinopse: "Após uma despedida de solteiro em Las Vegas, três amigos acordam sem lembrar do que aconteceu durante a noite. Para piorar, o noivo desapareceu e ninguém sabe onde encontrá-lo. Enquanto tentam reconstruir os acontecimentos, eles descobrem uma sequência de situações completamente inesperadas."
    },

    {
        id: "escola-de-rock",
        titulo: "Escola de Rock",
        poster: "",
        ano: 2003,
        generos: ["comedia"],
        sinopse: "Dewey Finn é um músico desempregado que acaba assumindo o lugar de um professor em uma escola particular. Ao descobrir o talento musical de seus alunos, ele decide formar uma banda escondida da direção. A experiência transforma a rotina das crianças e faz Dewey redescobrir sua paixão pela música."
    },

    {
        id: "o-auto-da-compadecida",
        titulo: "O Auto da Compadecida",
        poster: "",
        ano: 2000,
        generos: ["comedia", "drama"],
        sinopse: "João Grilo e Chicó são dois amigos que sobrevivem com pequenos trabalhos e histórias inventadas no sertão nordestino. Entre confusões, golpes e encontros com figuras poderosas da região, eles acabam envolvidos em situações inesperadas. A narrativa mistura humor, cultura popular e reflexões sobre justiça e fé."
    },

    // FILMES DE DRAMA
    {
        id: "a-espera-de-um-milagre",
        titulo: "À Espera de um Milagre",
        poster: "",
        ano: 1999,
        generos: ["drama"],
        sinopse: "Paul Edgecomb trabalha como guarda em um corredor da morte e conhece John Coffey, um prisioneiro condenado por um crime terrível. Apesar de sua aparência imponente, John demonstra uma personalidade gentil e habilidades extraordinárias. A convivência entre os dois leva Paul a questionar tudo o que acredita sobre justiça e humanidade."
    },

    {
        id: "forrest-gump",
        titulo: "Forrest Gump",
        poster: "",
        ano: 1994,
        generos: ["drama", "romance"],
        sinopse: "Forrest Gump é um homem simples que, apesar das dificuldades enfrentadas desde a infância, vive experiências extraordinárias. Ao longo de sua trajetória, participa de acontecimentos importantes da história dos Estados Unidos e conhece diferentes pessoas. Mesmo diante de tantas mudanças, seu maior desejo continua sendo reencontrar seu grande amor, Jenny."
    },

    {
        id: "sociedade-dos-poetas-mortos",
        titulo: "Sociedade dos Poetas Mortos",
        poster: "",
        ano: 1989,
        generos: ["drama"],
        sinopse: "Em uma escola tradicional e rigorosa, um novo professor de literatura chega com métodos de ensino pouco convencionais. Inspirados por suas aulas, alguns estudantes começam a questionar as expectativas impostas pela sociedade e a descobrir suas próprias paixões. Essa transformação muda a maneira como enxergam a vida e o futuro."
    },

    {
        id: "whiplash",
        titulo: "Whiplash",
        poster: "",
        ano: 2014,
        generos: ["drama"],
        sinopse: "Andrew Neiman é um jovem baterista determinado a alcançar a excelência musical. Ao entrar em uma das melhores escolas de música do país, passa a estudar com um professor extremamente exigente e autoritário. A busca pela perfeição transforma sua rotina em uma intensa disputa entre talento, pressão e limites pessoais."
    },

    {
        id: "titanic",
        titulo: "Titanic",
        poster: "",
        ano: 1997,
        generos: ["drama", "romance"],
        sinopse: "Durante a viagem inaugural do luxuoso Titanic, a jovem Rose conhece Jack, um passageiro de origem humilde. Apesar de pertencerem a mundos diferentes, os dois desenvolvem uma ligação especial. O romance acontece em meio a uma viagem que entra para a história por sua tragédia."
    },

    {
        id: "la-la-land",
        titulo: "La La Land: Cantando Estações",
        poster: "",
        ano: 2016,
        generos: ["drama", "romance"],
        sinopse: "Mia é uma aspirante a atriz e Sebastian é um pianista apaixonado por jazz que sonha em abrir seu próprio clube. Os dois se conhecem em Los Angeles e desenvolvem um relacionamento enquanto perseguem seus objetivos profissionais. Ao longo dessa jornada, precisam lidar com os desafios de conciliar amor e ambição."
    },
    
    // FILMES DE ROMANCE
    {
        id: "orgulho-e-preconceito",
        titulo: "Orgulho e Preconceito",
        poster: "",
        ano: 2005,
        generos: ["romance"],
        sinopse: "Elizabeth Bennet vive com sua família na Inglaterra do século XIX, onde o casamento é visto como uma importante forma de garantir o futuro das jovens. Ao conhecer o reservado e aparentemente arrogante Sr. Darcy, ela desenvolve uma opinião negativa sobre ele. Com o passar do tempo, encontros e acontecimentos fazem os dois reconsiderarem seus sentimentos e julgamentos."
    },

    {
        id: "diario-de-uma-paixao",
        titulo: "Diário de uma Paixão",
        poster: "",
        ano: 2004,
        generos: ["romance"],
        sinopse: "Noah e Allie se conhecem durante um verão e vivem uma intensa história de amor, apesar das diferenças sociais entre suas famílias. Com o passar dos anos, os caminhos dos dois se separam, mas os sentimentos permanecem. Uma história contada por meio das lembranças de um homem que deseja manter vivo um grande amor."
    },

    {
        id: "como-eu-era-antes-de-voce",
        titulo: "Como Eu Era Antes de Você",
        poster: "",
        ano: 2016,
        generos: ["romance"],
        sinopse: "Louisa Clark é uma jovem que aceita trabalhar como cuidadora de Will Traynor, um homem que ficou tetraplégico após um acidente. Apesar das diferenças entre suas personalidades, os dois desenvolvem uma relação que transforma suas vidas. A convivência faz com que ambos questionem seus planos, sentimentos e perspectivas sobre o futuro."
    },

    {
        id: "10-coisas-que-eu-odeio-em-voce",
        titulo: "10 Coisas que Eu Odeio em Você",
        poster: "",
        ano: 1999,
        generos: ["romance"],
        sinopse: "Bianca deseja namorar, mas seu pai estabelece uma condição: ela só poderá sair com alguém quando sua irmã mais velha, Kat, também começar a namorar. Para resolver a situação, um colega de escola organiza um plano envolvendo um jovem misterioso. Entre provocações e encontros inesperados, sentimentos começam a surgir."
    },
    
    // FILMES DE TERROR
    {
        id: "invocacao-do-mal",
        titulo: "Invocação do Mal",
        poster: "",
        ano: 2013,
        generos: ["terror"],
        sinopse: "O casal de investigadores paranormais Ed e Lorraine Warren é chamado para ajudar uma família que enfrenta acontecimentos assustadores em sua nova casa. Conforme investigam o local, eles descobrem sinais de uma presença sobrenatural cada vez mais ameaçadora. A investigação coloca todos diante de um perigo difícil de compreender."
    },

    {
        id: "hereditario",
        titulo: "Hereditário",
        poster: "",
        ano: 2018,
        generos: ["terror"],
        sinopse: "Após a morte da matriarca da família Graham, acontecimentos perturbadores começam a afetar seus descendentes. Annie, sua filha, passa a descobrir segredos relacionados ao passado familiar enquanto enfrenta situações cada vez mais assustadoras. Aos poucos, a família percebe que está envolvida em algo muito mais sombrio do que imaginava."
    },

    {
        id: "corra",
        titulo: "Corra!",
        poster: "",
        ano: 2017,
        generos: ["terror"],
        sinopse: "Chris é um jovem que acompanha sua namorada Rose em uma visita à família dela. Inicialmente recebido com simpatia, ele começa a perceber comportamentos estranhos entre os moradores da casa. Conforme os acontecimentos se tornam mais inquietantes, Chris descobre que aquela visita esconde algo assustador."
    },

    {
        id: "it-a-coisa",
        titulo: "It: A Coisa",
        poster: "",
        ano: 2017,
        generos: ["terror"],
        sinopse: "Em uma pequena cidade, um grupo de crianças começa a investigar o desaparecimento de jovens moradores. Durante suas descobertas, eles encontram uma entidade assustadora que assume a forma de seus maiores medos. Unidos pela amizade, precisam enfrentar a criatura que ameaça a cidade."
    },

    {
        id: "o-exorcista",
        titulo: "O Exorcista",
        poster: "",
        ano: 1973,
        generos: ["terror"],
        sinopse: "Chris MacNeil começa a perceber mudanças assustadoras no comportamento de sua filha Regan. Após procurar ajuda médica sem encontrar explicações, ela busca o auxílio de dois sacerdotes. Os religiosos passam a enfrentar um caso que desafia sua fé e os limites do sobrenatural."
    },

    {
        id: "um-lugar-silencioso",
        titulo: "Um Lugar Silencioso",
        poster: "",
        ano: 2018,
        generos: ["terror"],
        sinopse: "Em um mundo dominado por criaturas que atacam qualquer pessoa que faça barulho, uma família precisa viver em completo silêncio para sobreviver. Utilizando sinais e cuidados constantes, os integrantes tentam manter a segurança de seu lar. Porém, um acontecimento inesperado ameaça colocar todos em perigo."
    }
];


// ------------------------------------------------------
// CONFIGURAÇÕES
// ------------------------------------------------------
// Filmes do carrossel da página inicial (use ids da lista acima)
const IDS_DESTAQUE = [
    "mad-max",
    "toy-story",
    "o-auto-da-compadecida",
    "la-la-land",
    "invocacao-do-mal"
];

// Pôsteres: se o campo "poster" estiver vazio, o site procura img/<id>.jpg
const PASTA_POSTERS = "img/";
const EXTENSAO_POSTER = ".jpg";

// Páginas do site
const PAGINA_DETALHES = "detalhes.html";

const AVATAR_PADRAO =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%232a2a2a'/%3E%3Ccircle cx='50' cy='38' r='16' fill='%23888'/%3E%3Cpath d='M22 85c0-15.5 12.5-28 28-28s28 12.5 28 28' fill='%23888'/%3E%3C/svg%3E";

// ------------------------------------------------------
// DADOS SALVOS NO NAVEGADOR (localStorage)
// ------------------------------------------------------
const STORAGE_KEYS = {
    favoritos: "cine-favoritos",
    assistidos: "cine-assistidos",
    queroAssistir: "cine-quero-assistir",
    avaliacoes: "cine-avaliacoes",
    comentarios: "cine-comentarios",
    perfil: "cine-perfil"
};

function lerListaSalva(chave) {
    try {
        const dados = JSON.parse(localStorage.getItem(chave));
        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        return [];
    }
}

function lerObjetoSalvo(chave) {
    try {
        const dados = JSON.parse(localStorage.getItem(chave));
        return dados && typeof dados === "object" && !Array.isArray(dados) ? dados : {};
    } catch (erro) {
        return {};
    }
}

function salvar(chave, valor) {
    try {
        localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
        console.warn("Não foi possível salvar os dados:", erro);
    }
}

let favoritos = lerListaSalva(STORAGE_KEYS.favoritos);
let assistidos = lerListaSalva(STORAGE_KEYS.assistidos);
let queroAssistir = lerListaSalva(STORAGE_KEYS.queroAssistir);
let avaliacoes = lerObjetoSalvo(STORAGE_KEYS.avaliacoes);   // { idFilme: nota de 0 a 5 }
let comentarios = lerObjetoSalvo(STORAGE_KEYS.comentarios); // { idFilme: [{ texto, data }] }

// ------------------------------------------------------
// FUNÇÕES AUXILIARES
// ------------------------------------------------------
const $ = (seletor, raiz = document) => raiz.querySelector(seletor);

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caractere]);
}

// Tira acentos e deixa minúsculo, para "acao" encontrar "Ação"
function semAcento(texto) {
    return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

function formatarNota(nota) {
    return String(nota).replace(".", ",");
}

function nomeGenero(genero) {
    const nomes = {
        acao: "Ação",
        animacao: "Animação",
        comedia: "Comédia",
        drama: "Drama",
        romance: "Romance",
        terror: "Terror"
    };
    return nomes[genero] || genero;
}

function urlDoPoster(filme) {
    return filme.poster || `${PASTA_POSTERS}${filme.id}${EXTENSAO_POSTER}`;
}

function alternarItem(lista, id) {
    return lista.includes(id)
        ? lista.filter(item => item !== id)
        : [...lista, id];
}

function criarPlaceholder(titulo) {
    const div = document.createElement("div");
    div.className = "poster-placeholder";
    div.setAttribute("role", "img");
    div.setAttribute("aria-label", `Pôster indisponível: ${titulo}`);
    div.innerHTML = "<span>🎬</span><small></small>";
    div.querySelector("small").textContent = titulo;
    return div;
}

// Imagens que falham: pôster vira um quadro com o título, avatar vira o padrão
document.addEventListener("error", evento => {
    const img = evento.target;
    if (!(img instanceof HTMLImageElement) || !img.complete) return;

    if (img.classList.contains("poster-filme")) {
        console.info("Pôster não encontrado:", img.getAttribute("src"));
        img.replaceWith(criarPlaceholder(img.dataset.titulo || "Sem título"));
        return;
    }

    if (img.closest(".perfil-usuario") && !img.dataset.avatarPadrao) {
        img.dataset.avatarPadrao = "sim";
        img.src = AVATAR_PADRAO;
    }
}, true);

// ------------------------------------------------------
// CARDS DOS FILMES (catálogo, carrossel e coleção)
// ------------------------------------------------------
function criarCard(filme) {
    const favorito = favoritos.includes(filme.id);
    const assistido = assistidos.includes(filme.id);
    const naLista = queroAssistir.includes(filme.id);

    const titulo = escaparHTML(filme.titulo);
    const idUrl = encodeURIComponent(filme.id);
    const urlDetalhes = `${PAGINA_DETALHES}?id=${idUrl}`;
    const nota = avaliacoes[filme.id];

    return `
        <article class="card-filme">
            <a class="link-poster" href="${urlDetalhes}" aria-label="Ver detalhes de ${titulo}">
                <img class="poster-filme" src="${escaparHTML(urlDoPoster(filme))}"
                    alt="Pôster de ${titulo}" data-titulo="${titulo}" loading="lazy">
            </a>
            <div class="informacoes-filme">
                <span class="ano-filme">${filme.ano}</span>
                <h3><a href="${urlDetalhes}">${titulo}</a></h3>
                <p class="generos-filme">${filme.generos.map(nomeGenero).join(" • ")}</p>
                ${typeof nota === "number" ? `<span class="nota-card" title="Sua nota">★ ${formatarNota(nota)}</span>` : ""}
                <p class="sinopse-filme">${escaparHTML(filme.sinopse)}</p>
                <div class="acoes-filme">
                    <button type="button" class="botao-lista ${favorito ? "selecionado" : ""}"
                        data-acao="favorito" data-id="${escaparHTML(filme.id)}" aria-pressed="${favorito}">
                        ${favorito ? "♥ Favoritado" : "♡ Favoritar"}
                    </button>
                    <button type="button" class="botao-lista ${assistido ? "selecionado" : ""}"
                        data-acao="assistido" data-id="${escaparHTML(filme.id)}" aria-pressed="${assistido}">
                        ${assistido ? "✓ Assistido" : "Marcar assistido"}
                    </button>
                    <button type="button" class="botao-lista ${naLista ? "selecionado" : ""}"
                        data-acao="quero-assistir" data-id="${escaparHTML(filme.id)}" aria-pressed="${naLista}">
                        ${naLista ? "✓ Quero assistir" : "+ Quero assistir"}
                    </button>
                    <a class="botao-lista botao-detalhes" href="${urlDetalhes}">Detalhes</a>
                </div>
            </div>
        </article>
    `;
}

function exibirFilmes(lista, elemento) {
    if (!elemento) return;
    elemento.innerHTML = lista.map(criarCard).join("");
}

// Botões de favoritar / assistido / quero assistir dos cards
document.addEventListener("click", evento => {
    const botao = evento.target.closest("button[data-acao]");
    if (!botao) return;

    const id = botao.dataset.id;
    if (!filmes.some(filme => filme.id === id)) return;

    if (botao.dataset.acao === "favorito") {
        favoritos = alternarItem(favoritos, id);
        salvar(STORAGE_KEYS.favoritos, favoritos);
    }

    if (botao.dataset.acao === "assistido") {
        assistidos = alternarItem(assistidos, id);
        salvar(STORAGE_KEYS.assistidos, assistidos);
    }

    if (botao.dataset.acao === "quero-assistir") {
        queroAssistir = alternarItem(queroAssistir, id);
        salvar(STORAGE_KEYS.queroAssistir, queroAssistir);
    }

    atualizarTudo();
});

// ------------------------------------------------------
// PÁGINA DE FILMES (filmes.html): busca e filtro
// ------------------------------------------------------
const listaCatalogo = $(".catalogo .lista-filmes");
const campoBusca = $("#busca");
const filtroGenero = $("#genero");
const mensagemVazia = $("#mensagem-vazia");

function atualizarCatalogo() {
    if (!listaCatalogo) return;

    const termo = semAcento((campoBusca ? campoBusca.value : "").trim());
    const generoSelecionado = filtroGenero ? filtroGenero.value : "todos";

    const resultado = filmes.filter(filme => {
        const correspondeBusca = semAcento(filme.titulo).includes(termo);
        const correspondeGenero =
            generoSelecionado === "todos" || filme.generos.includes(generoSelecionado);
        return correspondeBusca && correspondeGenero;
    });

    exibirFilmes(resultado, listaCatalogo);

    if (mensagemVazia) mensagemVazia.hidden = resultado.length > 0;
}

function configurarCatalogo() {
    // Vindo da página inicial (filmes.html?genero=acao), já aplica o gênero
    const generoDaUrl = new URLSearchParams(window.location.search).get("genero");
    if (filtroGenero && generoDaUrl && [...filtroGenero.options].some(opcao => opcao.value === generoDaUrl)) {
        filtroGenero.value = generoDaUrl;
    }

    if (campoBusca) campoBusca.addEventListener("input", atualizarCatalogo);
    if (filtroGenero) filtroGenero.addEventListener("change", atualizarCatalogo);
}

// ------------------------------------------------------
// PÁGINA INICIAL (index.html): carrossel de destaques
// ------------------------------------------------------
const carrosselFilmes = $(".carrossel-filmes");

function atualizarDestaques() {
    if (!carrosselFilmes) return;

    const lista = IDS_DESTAQUE
        .map(id => filmes.find(filme => filme.id === id))
        .filter(Boolean);

    // Mantém a posição do carrossel ao atualizar
    const posicao = carrosselFilmes.scrollLeft;
    carrosselFilmes.style.scrollBehavior = "auto";
    exibirFilmes(lista, carrosselFilmes);
    carrosselFilmes.scrollLeft = posicao;
    carrosselFilmes.style.scrollBehavior = "";
}

function configurarCarrossel() {
    const botaoAnterior = $(".carrossel .anterior");
    const botaoProximo = $(".carrossel .proximo");
    if (!carrosselFilmes) return;

    const passo = () => Math.max(carrosselFilmes.clientWidth * 0.8, 230);

    if (botaoAnterior) {
        botaoAnterior.addEventListener("click", () => {
            carrosselFilmes.scrollBy({ left: -passo(), behavior: "smooth" });
        });
    }

    if (botaoProximo) {
        botaoProximo.addEventListener("click", () => {
            carrosselFilmes.scrollBy({ left: passo(), behavior: "smooth" });
        });
    }
}

// ------------------------------------------------------
// PÁGINA DE PERFIL (perfil.html): perfil e coleção
// ------------------------------------------------------
const perfilNome = $(".perfil-usuario h2");
const perfilBio = $(".perfil-usuario p");

// Os textos que já estão no HTML servem como padrão
const PERFIL_PADRAO = {
    nome: perfilNome ? perfilNome.textContent.trim() : "",
    bio: perfilBio ? perfilBio.textContent.trim() : ""
};

let perfil = { ...PERFIL_PADRAO, ...lerObjetoSalvo(STORAGE_KEYS.perfil) };

function mostrarPerfil() {
    if (perfilNome) perfilNome.textContent = perfil.nome;
    if (perfilBio) perfilBio.textContent = perfil.bio;
}

function editarPerfil() {
    const novoNome = prompt("Digite seu nome:", perfil.nome);
    if (novoNome === null) return;

    const novaBio = prompt("Digite sua bio:", perfil.bio);
    if (novaBio === null) return;

    perfil = {
        nome: novoNome.trim() || PERFIL_PADRAO.nome,
        bio: novaBio.trim() || PERFIL_PADRAO.bio
    };
    salvar(STORAGE_KEYS.perfil, perfil);
    mostrarPerfil();
}

function configurarPerfil() {
    const secao = $(".perfil-usuario");
    if (!secao) return;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.id = "btn-editar-perfil";
    botao.className = "botao-editar-perfil";
    botao.textContent = "Editar perfil";
    botao.addEventListener("click", editarPerfil);
    secao.append(botao);

    // Se a imagem externa já falhou antes deste script rodar, troca pelo avatar padrão
    const avatar = $("img", secao);
    if (avatar && avatar.complete && avatar.naturalWidth === 0 && !avatar.dataset.avatarPadrao) {
        avatar.dataset.avatarPadrao = "sim";
        avatar.src = AVATAR_PADRAO;
    }

    mostrarPerfil();
}

// As três listas da coleção (cada botão abre e fecha a sua lista)
const COLECOES = [
    { botao: "#botao-favoritos", lista: "#favoritos", dados: () => favoritos,
      vazio: "Você ainda não favoritou nenhum filme." },
    { botao: "#botao-assistidos", lista: "#assistidos", dados: () => assistidos,
      vazio: "Você ainda não marcou nenhum filme como assistido." },
    { botao: "#botao-quero-assistir", lista: "#quero-assistir", dados: () => queroAssistir,
      vazio: "Sua lista de filmes para assistir está vazia." }
]
    .map(item => ({ ...item, botaoEl: $(item.botao), listaEl: $(item.lista) }))
    .filter(item => item.botaoEl && item.listaEl);

function atualizarColecoes() {
    COLECOES.forEach(item => {
        const lista = filmes.filter(filme => item.dados().includes(filme.id));

        // Mostra a quantidade no botão, guardando o texto original
        if (!item.botaoEl.dataset.rotulo) {
            item.botaoEl.dataset.rotulo = item.botaoEl.textContent.trim();
        }
        item.botaoEl.textContent = `${item.botaoEl.dataset.rotulo} (${lista.length})`;

        item.listaEl.classList.add("lista-colecao");
        item.listaEl.innerHTML = lista.length
            ? `<div class="lista-filmes">${lista.map(criarCard).join("")}</div>`
            : `<p class="mensagem-vazia">${item.vazio}</p>`;
    });
}

// Abre uma lista e fecha as outras (clicar de novo fecha)
function alternarColecao(alvo) {
    const abrir = alvo.listaEl.hidden;

    COLECOES.forEach(item => {
        const aberto = item === alvo && abrir;
        item.listaEl.hidden = !aberto;
        item.botaoEl.setAttribute("aria-expanded", String(aberto));
    });
}

function configurarColecao() {
    COLECOES.forEach(item => {
        item.botaoEl.addEventListener("click", () => alternarColecao(item));
    });

    // perfil.html#favoritos já abre a lista
    const hash = window.location.hash.slice(1);
    const inicial = COLECOES.find(item => item.listaEl.id === hash);
    if (inicial) alternarColecao(inicial);
}

// ------------------------------------------------------
// PÁGINA DE DETALHES (detalhes.html?id=...)
// ------------------------------------------------------
let filmeAtual = null;

function atualizarBotoesDetalhes() {
    if (!filmeAtual) return;

    const botoes = [
        ["#botao-favoritar", favoritos, "♥ Remover dos favoritos", "Adicionar aos favoritos"],
        ["#botao-assistido", assistidos, "✓ Assistido (desmarcar)", "Marcar como assistido"],
        ["#botao-lista", queroAssistir, "✓ Na minha lista", "Quero assistir"]
    ];

    botoes.forEach(([seletor, lista, textoAtivo, textoInativo]) => {
        const botao = $(seletor);
        if (!botao) return;

        const ativo = lista.includes(filmeAtual.id);
        botao.textContent = ativo ? textoAtivo : textoInativo;
        botao.setAttribute("aria-pressed", String(ativo));
        botao.classList.toggle("selecionado", ativo);
    });
}

function comentariosDe(id) {
    const lista = Array.isArray(comentarios[id]) ? comentarios[id] : [];
    // aceita comentários antigos, salvos só como texto
    return lista.map(item => typeof item === "string" ? { texto: item, data: null } : item);
}

function configurarDetalhes() {
    const secao = $(".detalhes-filme");
    if (!secao) return;

    const secaoComentarios = $("section.comentarios");
    const id = new URLSearchParams(window.location.search).get("id");
    filmeAtual = filmes.find(filme => filme.id === id) || null;

    // Filme não encontrado
    if (!filmeAtual) {
        secao.classList.add("sem-filme");
        secao.innerHTML = `
            <h2>Filme não encontrado</h2>
            <p>Não encontramos o filme que você procura. Ele pode ter sido removido ou o link está incompleto.</p>
            <a class="botao-voltar" href="filmes.html">Voltar ao catálogo</a>
        `;
        if (secaoComentarios) secaoComentarios.hidden = true;
        document.title = "Filme não encontrado | Cine";
        return;
    }

    // Informações do filme
    document.title = `${filmeAtual.titulo} | Cine`;
    $("#titulo-filme").textContent = filmeAtual.titulo;
    $("#ano-filme").textContent = `Ano: ${filmeAtual.ano}`;
    $("#genero-filme").textContent = `Gêneros: ${filmeAtual.generos.map(nomeGenero).join(", ")}`;
    $("#sinopse-filme").textContent = filmeAtual.sinopse;

    const poster = $("#poster-filme");
    poster.classList.add("poster-filme");
    poster.dataset.titulo = filmeAtual.titulo;
    poster.alt = `Pôster de ${filmeAtual.titulo}`;
    poster.src = urlDoPoster(filmeAtual);

    // Botões de lista
    [["#botao-favoritar", "favoritos"], ["#botao-assistido", "assistidos"], ["#botao-lista", "queroAssistir"]]
        .forEach(([seletor, chave]) => {
            const botao = $(seletor);
            if (!botao) return;

            botao.addEventListener("click", () => {
                if (chave === "favoritos") favoritos = alternarItem(favoritos, filmeAtual.id);
                if (chave === "assistidos") assistidos = alternarItem(assistidos, filmeAtual.id);
                if (chave === "queroAssistir") queroAssistir = alternarItem(queroAssistir, filmeAtual.id);

                salvar(STORAGE_KEYS.favoritos, favoritos);
                salvar(STORAGE_KEYS.assistidos, assistidos);
                salvar(STORAGE_KEYS.queroAssistir, queroAssistir);
                atualizarBotoesDetalhes();
            });
        });

    configurarAvaliacaoDetalhes();
    configurarComentariosDetalhes();
}

function configurarAvaliacaoDetalhes() {
    const campo = $(".avaliacao-filme #avaliacao");
    if (!campo) return;

    const saida = document.createElement("output");
    saida.id = "valor-avaliacao-filme";
    saida.setAttribute("for", "avaliacao");

    const limpar = document.createElement("button");
    limpar.type = "button";
    limpar.className = "botao-lista";
    limpar.textContent = "Limpar nota";

    campo.after(saida, limpar);

    function mostrarNota() {
        const nota = avaliacoes[filmeAtual.id];

        if (typeof nota === "number") {
            campo.value = nota;
            saida.textContent = `★ ${formatarNota(nota)} / 5`;
            limpar.hidden = false;
        } else {
            campo.value = 2.5;
            saida.textContent = "Ainda sem nota. Arraste para avaliar.";
            limpar.hidden = true;
        }
    }

    campo.addEventListener("input", () => {
        avaliacoes[filmeAtual.id] = Number(campo.value);
        salvar(STORAGE_KEYS.avaliacoes, avaliacoes);
        mostrarNota();
    });

    limpar.addEventListener("click", () => {
        delete avaliacoes[filmeAtual.id];
        salvar(STORAGE_KEYS.avaliacoes, avaliacoes);
        mostrarNota();
    });

    mostrarNota();
}

function configurarComentariosDetalhes() {
    const formulario = $("#form-comentario");
    const lista = $(".lista-comentarios");
    const titulo = $("section.comentarios h2");
    if (!formulario || !lista) return;

    const campo = formulario.querySelector("textarea");
    campo.maxLength = 500;

    function renderizar() {
        const itens = comentariosDe(filmeAtual.id);

        if (titulo) titulo.textContent = `Comentários (${itens.length})`;

        lista.innerHTML = itens.length
            ? itens.map((item, indice) => `
                <article class="comentario">
                    <p>${escaparHTML(item.texto)}</p>
                    <div class="rodape-comentario">
                        <small>${item.data ? new Date(item.data).toLocaleDateString("pt-BR") : ""}</small>
                        <button type="button" class="remover-comentario" data-indice="${indice}"
                            aria-label="Excluir comentário">Excluir</button>
                    </div>
                </article>
            `).join("")
            : `<p class="mensagem-vazia">Seja o primeiro a comentar.</p>`;
    }

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        const texto = campo.value.trim();
        if (!texto) {
            campo.focus();
            return;
        }

        comentarios[filmeAtual.id] = [
            ...comentariosDe(filmeAtual.id),
            { texto, data: new Date().toISOString() }
        ];
        salvar(STORAGE_KEYS.comentarios, comentarios);

        formulario.reset();
        renderizar();
    });

    lista.addEventListener("click", evento => {
        const botao = evento.target.closest(".remover-comentario");
        if (!botao) return;

        const indice = Number(botao.dataset.indice);
        comentarios[filmeAtual.id] = comentariosDe(filmeAtual.id).filter((_, i) => i !== indice);
        salvar(STORAGE_KEYS.comentarios, comentarios);
        renderizar();
    });

    renderizar();
}

// ------------------------------------------------------
// PÁGINA SOBRE (sobre.html): formulário de feedback
// ------------------------------------------------------
function configurarFeedback() {
    const formulario = $("#form-feedback");
    if (!formulario) return;

    const campoNome = $("#nome", formulario);
    const campoEmail = $("#email", formulario);
    const campoNota = $("#avaliacao", formulario);
    const campoMensagem = $("#mensagem", formulario);
    if (!campoNome || !campoEmail || !campoNota || !campoMensagem) return;

    // O JavaScript passa a validar; sem ele, vale a validação do navegador
    formulario.noValidate = true;
    campoMensagem.maxLength = 500;

    // Elementos que o HTML não tem: erros, nota ao vivo, contador e confirmação
    function garantirErro(campo) {
        let erro = document.getElementById(`erro-${campo.id}`);
        if (!erro) {
            erro = document.createElement("span");
            erro.className = "erro-campo";
            erro.id = `erro-${campo.id}`;
            erro.setAttribute("role", "alert");
            erro.hidden = true;
            campo.after(erro);
            campo.setAttribute("aria-describedby", erro.id);
        }
        return erro;
    }

    [campoNome, campoEmail, campoMensagem].forEach(garantirErro);

    const valorNota = document.createElement("output");
    valorNota.id = "valor-avaliacao";
    valorNota.setAttribute("for", "avaliacao");
    const rotuloNota = $('label[for="avaliacao"]', formulario);
    if (rotuloNota) rotuloNota.append(" ", valorNota);

    const contador = document.createElement("small");
    contador.className = "contador";
    contador.id = "contador-mensagem";
    document.getElementById("erro-mensagem").after(contador);

    const confirmacao = document.createElement("p");
    confirmacao.id = "feedback-confirmacao";
    confirmacao.className = "mensagem-confirmacao";
    confirmacao.setAttribute("role", "status");
    confirmacao.hidden = true;
    formulario.after(confirmacao);

    let temporizador;

    function mostrarErro(campo, mensagem) {
        const erro = garantirErro(campo);

        campo.classList.toggle("invalido", Boolean(mensagem));
        campo.setAttribute("aria-invalid", mensagem ? "true" : "false");
        erro.textContent = mensagem;
        erro.hidden = !mensagem;
        return !mensagem;
    }

    function validarNome() {
        const valor = campoNome.value.trim();
        if (!valor) return mostrarErro(campoNome, "Digite seu nome.");
        if (valor.length < 2) return mostrarErro(campoNome, "O nome precisa ter pelo menos 2 letras.");
        return mostrarErro(campoNome, "");
    }

    function validarEmail() {
        const valor = campoEmail.value.trim();
        if (!valor) return mostrarErro(campoEmail, "Digite seu e-mail.");
        if (!campoEmail.checkValidity() || !/\S+@\S+\.\S+/.test(valor)) {
            return mostrarErro(campoEmail, "Digite um e-mail válido, como nome@exemplo.com.");
        }
        return mostrarErro(campoEmail, "");
    }

    function validarMensagem() {
        const valor = campoMensagem.value.trim();
        if (!valor) return mostrarErro(campoMensagem, "Escreva seu comentário.");
        if (valor.length < 10) return mostrarErro(campoMensagem, "O comentário precisa ter pelo menos 10 caracteres.");
        return mostrarErro(campoMensagem, "");
    }

    function atualizarNota() {
        valorNota.textContent = formatarNota(campoNota.value);
    }

    function atualizarContador() {
        contador.textContent = `${campoMensagem.value.length}/${campoMensagem.maxLength}`;
    }

    const validacoes = [
        [campoNome, validarNome],
        [campoEmail, validarEmail],
        [campoMensagem, validarMensagem]
    ];

    // Depois de um erro, o campo é revalidado enquanto a pessoa digita
    validacoes.forEach(([campo, validar]) => {
        campo.addEventListener("input", () => {
            if (campo.getAttribute("aria-invalid") === "true") validar();
        });
    });

    campoNota.addEventListener("input", atualizarNota);
    campoMensagem.addEventListener("input", atualizarContador);

    formulario.addEventListener("reset", () => {
        // espera o navegador restaurar os valores padrão
        setTimeout(() => {
            atualizarNota();
            atualizarContador();
            validacoes.forEach(([campo]) => mostrarErro(campo, ""));
        }, 0);
    });

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        const resultados = validacoes.map(([, validar]) => validar());

        if (resultados.includes(false)) {
            confirmacao.hidden = true;
            const primeiro = validacoes.find(([campo]) => campo.getAttribute("aria-invalid") === "true");
            if (primeiro) primeiro[0].focus();
            return;
        }

        const primeiroNome = campoNome.value.trim().split(/\s+/)[0];
        const nota = formatarNota(campoNota.value);

        confirmacao.textContent =
            `Obrigado, ${primeiroNome}! Sua nota (${nota}/5) e seu comentário foram registrados nesta demonstração.`;
        confirmacao.hidden = false;

        clearTimeout(temporizador);
        temporizador = setTimeout(() => {
            confirmacao.hidden = true;
        }, 6000);

        formulario.reset();
    });

    atualizarNota();
    atualizarContador();
}

// ------------------------------------------------------
// ATALHOS: IR PARA O FINAL / VOLTAR AO TOPO (todas as páginas)
// ------------------------------------------------------
const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
let botaoTopo = null;
let botaoFim = null;

function rolarPara(posicao) {
    window.scrollTo({
        top: posicao,
        behavior: reduzirMovimento.matches ? "auto" : "smooth"
    });
}

function atualizarAtalhos() {
    const rolagem = window.scrollY;
    const maximo = document.documentElement.scrollHeight - window.innerHeight;

    if (botaoTopo) botaoTopo.hidden = rolagem < 400;
    if (botaoFim) botaoFim.hidden = maximo - rolagem < 200;
}

function configurarAtalhos() {
    // Link "Ir para o final" no menu
    const menu = $("header nav ul");
    if (menu) {
        const item = document.createElement("li");
        item.innerHTML = '<a href="#" class="link-fim" data-rolar="fim">Ir para o final</a>';
        menu.append(item);
    }

    // Botões flutuantes ↑ e ↓
    const grupo = document.createElement("div");
    grupo.className = "atalhos-pagina";
    grupo.setAttribute("role", "group");
    grupo.setAttribute("aria-label", "Atalhos de rolagem");
    grupo.innerHTML = `
        <button type="button" class="botao-atalho" id="btn-topo" data-rolar="topo"
            aria-label="Voltar ao topo" title="Voltar ao topo" hidden>↑</button>
        <button type="button" class="botao-atalho" id="btn-fim" data-rolar="fim"
            aria-label="Ir para o final" title="Ir para o final">↓</button>
    `;
    document.body.append(grupo);

    botaoTopo = $("#btn-topo");
    botaoFim = $("#btn-fim");

    document.addEventListener("click", evento => {
        const gatilho = evento.target.closest("[data-rolar]");
        if (!gatilho) return;

        evento.preventDefault();

        if (gatilho.dataset.rolar === "topo") rolarPara(0);
        if (gatilho.dataset.rolar === "fim") rolarPara(document.documentElement.scrollHeight);
    });

    window.addEventListener("scroll", atualizarAtalhos, { passive: true });
    window.addEventListener("resize", atualizarAtalhos);
}

// ------------------------------------------------------
// INICIALIZAÇÃO
// ------------------------------------------------------
function atualizarTudo() {
    atualizarCatalogo();
    atualizarDestaques();
    atualizarColecoes();
    atualizarBotoesDetalhes();
}

configurarCatalogo();
configurarCarrossel();
configurarPerfil();
configurarColecao();
configurarDetalhes();
configurarFeedback();
configurarAtalhos();

atualizarTudo();
atualizarAtalhos();
