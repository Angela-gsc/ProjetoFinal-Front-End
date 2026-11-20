// Esse arquivo serve para cadastrar todos os filmes que estarão disponíveis no site.

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