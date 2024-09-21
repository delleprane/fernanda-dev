
export const about = {
    title: "Front-end",
    content: `Sou uma Desenvolvedora Front-End apaixonada por tecnologia, especializada em React.js, React Hooks, JavaScript e TypeScript. Desde o início da minha jornada, sempre tive curiosidade por entender o que acontece nos bastidores das melhores experiências digitais, e essa busca me levou a trabalhar em projetos significativos com empresas renomadas como MadeiraMadeira e Huia.
    
    Durante minha trajetória, desenvolvi interfaces interativas e intuitivas, sempre com foco em otimização de performance e segurança. Acredito que cada linha de código deve refletir não só eficiência, mas também criar uma experiência que cative o usuário. Além do front-end, tenho um entendimento profundo do back-end, o que me permite integrar soluções completas.

    Estou constantemente aprimorando meus conhecimentos, atualmente explorando Segurança da Informação para garantir que minhas aplicações sejam não apenas bonitas e funcionais, mas também seguras. Minha combinação de habilidades técnicas e visão estratégica, vinda da minha formação em marketing digital, me ajuda a criar soluções que impactam tanto o usuário final quanto o negócio como um todo.`,

    skills: {
        title: 'Minhas principais habilidades incluem:',
        ability: [
            'React.js, React Hooks, JavaScript, TypeScript, Node.js',
            'CSS, SASS, Styled Components: Tailwind CSS',
            'Consumo de APIs com Axios, Integração com APIs externas',
            'Metodologias ágeis: Scrum',
            'Gerenciamento de estados, SEO, Manipulação de objetos complexos',
            'Desenvolvimento de sites responsivos, interfaces centradas no usuário, foco em performance e segurança'
        ]
    }
}



export const projects = [
    {
        title: "Organo",
        content: `Este projeto é uma aplicação React para criar e 
        gerenciar um organograma de personagens de RPG. Os usuários podem 
        cadastrar personagens com detalhes como nome, guilda, imagem, raça, 
        classe e informações adicionais. O projeto foi desenvolvido para facilitar 
        a organização e visualização de personagens em jogos de RPG.`,
        features: {
            title: 'Funcionalidades',
            text: 'Cadastro de Personagens: Adicione personagens com informações detalhadas.',
            list: [
                'Nome', 'Guilda', 'Imagem', 'Raça', 'Classe', 'Informações adicionais'
            ],
            technology: {
                title: 'Tecnologias',
                list: ['React', 'JavaScript', 'CSS3']
            }
        },
        github: 'https://github.com/delleprane/organo',
        url: 'https://organo-flax-zeta.vercel.app'
    },

    {
        title: "Projeto Front end de Cadastro de Clientes",
        content: `Este projeto é a interface front-end para o backend de cadastro que pode ser encontrado em Clients-CRUD-backend. 
        Desenvolvido em TypeScript que implementa funcionalidades de cadastro, listagem e deleção de clientes.`,
        features: {
            title: 'Funcionalidades',
            text: 'Liste, Cadastre e Delete usuários de nosso banco de dados.',
            list: [
                ' Cadastro de Clientes: Permite criar novos registros de clientes no banco de dados.',
                ' Listagem de Clientes: Retorna a lista de todos os clientes cadastrados.',
                ' Deleção de Clientes: Remove clientes específicos do banco de dados com base em seu ID.'
            ],
            technology: {
                title: 'Tecnologias',
                list: ['React', 'Vite.js', 'Styled Components: Tailwind CSS', 'Consumo de API -Clients-CRUD-backend- com Axios']
            }
        },
        github: 'https://github.com/delleprane/Clients-CRUD-frontend',
        url: 'https://clients-crud-frontend.vercel.app'
    },

    {
        title: "Projeto Backend de Cadastro de Clientes",
        content: `Este projeto é um backend desenvolvido em TypeScript que implementa 
        funcionalidades de cadastro, listagem e deleção de clientes. A aplicação utiliza
        o Fastify como framework de servidor, Prisma como ORM (Object-Relational Mapping) 
        MongoDB Atlas como banco de dados. O front end pode ser encontrado em 
        Clients-CRUD-frontend`,
        features: {
            title: 'Funcionalidades',
            text: '',
            list: [
                ' Cadastro de Clientes: Permite criar novos registros de clientes no banco de dados.',
                ' Listagem de Clientes: Retorna a lista de todos os clientes cadastrados.',
                ' Deleção de Clientes: Remove clientes específicos do banco de dados com base em seu ID.'
            ],
            technology: {
                title: 'Tecnologias',
                list: ['MongoDB Atlas', 'TypeScript', 'Fastify', 'Prisma']
            }
        },
        github: 'https://github.com/delleprane/Clients-CRUD-backend',
        url: 'https://clients-crud-backend.onrender.com'
    },

    {
        "title": "Tabela FIPE e Exercícios",
        "content": "Este projeto foi desenvolvido como uma aplicação web para praticar e demonstrar diversas técnicas avançadas de desenvolvimento front-end.",
        "features": {
            "title": "Funcionalidades",
            "text": "",
            "list": [
                "Máscaras de Entrada: Implementação de máscaras para formatação de campos de input.",
                "Integração com APIs: Consumo de APIs externas para obtenção e envio de dados.",
                "Edição Dinâmica de Conteúdo: Funcionalidade que permite a edição de conteúdos de forma dinâmica.",
                "Consulta à Tabela FIPE: Campos personalizados para consulta de dados da Tabela FIPE, com retorno de informações detalhadas sobre veículos."
            ],
            "technology": {
                "title": "Tecnologias Utilizadas",
                "list": ["React", "JavaScript", "CSS", "Consumo de API -Rick e Morty- com Axios"]
            }
        },
        "github": "https://github.com/delleprane/tabela-fipe",
        "url": "https://tabela-fipe-rho.vercel.app"
    }
    
]

export const education = [
    {
        name: 'Curso Superior de Tecnologia (CST), Segurança da informação',
        institution: 'FMU',
        link: 'https://www.linkedin.com/in/fernanda-delleprane/details/education/',
        certificationImage: 'images/logo-fmu.webp',
    },
    {
        name: 'Desenvolvimento Web Full Stack',
        institution: 'Ironhack',
        link: 'https://www.linkedin.com/in/fernanda-delleprane/details/education/',
        certificationImage: 'images/ironhack-logo.png',
        certification: '/docs/ironhack.pdf'
    },
    {
        name: 'Marketing',
        institution: 'Universidade Estacio de Sa',
        link: 'https://www.linkedin.com/in/fernanda-delleprane/details/education/',
        certificationImage: 'images/estacio-logo.png',
    },
]

export const reviews = [
    {
        title: "Lucas Matheus",
        subTitle: "Software Engineer | React | Nextjs | Typescript",
        content: "Tive o prazer de trabalhar com a Fernanda por cerca de um ano e meio, pude acompanhar seu desenvolvimento em diversas áreas de atuação. Sempre mostrou versatilidade e agilidade diante dos desafios apresentados no dia a dia, além de estar sempre disposta a aprender e ensinar, foi com certeza uma ótima companheira de equipe e trabalho!"
    },
    {
        title: "Guilherme Almeida",
        subTitle: "Software Engineer | Typescript | React | React Native",
        content: "Fernanda foi uma das melhores pessoas com quem já trabalhei. Sua mente clara e companheirismo nos ajudaram muito em nossa relação no trabalho e, principalmente, fizeram com que o sucesso em nossa squad fosse mais visível. Uma profissional dedicada e atenciosa, indicaria pra qualquer pessoa!"
    },
]

export const experience = [
    {
        title: "Analista de desenvolvimento de sistemas Front-end",
        subTitle: "MadeiraMadeira",
        time: "2022 - 2024",
        content: `Minha jornada como Desenvolvedora Front-end na MadeiraMadeira foi marcada por desafios que me permitiram crescer tanto tecnicamente quanto estrategicamente. Trabalhar com React.js, JavaScript, TypeScript e Node.js me deu a oportunidade de desenvolver soluções que não apenas funcionavam, mas agregavam valor real ao negócio. 
        Na Equipe de Analytics, ao lado de profissionais de marketing, dados e desenvolvimento, ajudei a padronizar eventos de coleta de dados, gerando insights cruciais que influenciaram decisões estratégicas baseadas em fatos. Foi emocionante ver como o meu trabalho diretamente impactou as decisões da empresa. Já na Equipe Navcon, cada melhoria de SEO, cada bug corrigido e cada nova página criada me dava a satisfação de aprimorar a experiência dos nossos usuários, tornando o ambiente de compras online mais intuitivo e agradável.
        Adoro colaborar em squads multidisciplinares, onde minha habilidade de comunicação e meu espírito colaborativo me ajudam a encontrar soluções criativas. Sou apaixonada por metodologias ágeis como Scrum e continuo em uma busca constante por aprender e inovar para oferecer as melhores soluções.`,
        tech: 'React.js, JavaScript, TypeScript, Node.js, CSS, Sass, Scrum',
    },
    {
        title: "Analista de desenvolvimento de sistemas Front-end",
        subTitle: "Huia",
        time: "2021 - 2022",
        content: `Minha experiência na Huia foi como um grande laboratório de criatividade e inovação. Como Desenvolvedora Front-end, tive a oportunidade de trabalhar com JavaScript, React, Strapi CMS e Tailwind, onde ajudei a criar soluções que conectavam os objetivos de negócio com uma experiência do usuário intuitiva e personalizada.
        O momento mais gratificante foi quando implementei o Strapi CMS para nossos clientes. Isso não apenas os empoderou a criar e gerenciar suas próprias páginas, mas trouxe uma autonomia que mudou a forma como viam seus negócios online. Saber que eu estava entregando algo que facilitava suas vidas foi muito recompensador. Cada landing page que criei foi pensada para ser funcional e visualmente atrativa, sempre com foco em performance e responsividade.
        Trabalhar com metodologias ágeis como Scrum me permitiu colaborar de perto com equipes multidisciplinares, mantendo o usuário no centro de tudo que fazia. Cada desafio era uma nova oportunidade para criar algo especial, e cada vitória compartilhada com o time me impulsionava a ir além.`,
        tech: 'React.js, JavaScript, Strapi CMS, Tailwind CSS, CSS, Styled Components'
    },
]


export const contact = {
    content: "Estou sempre aberta a novas ideias, desafios e colaborações. Se você tem um projeto em mente, uma pergunta, ou apenas quer conversar sobre desenvolvimento, ficarei feliz em ouvir de você. Vamos conectar e construir algo incrível juntos!",
    linkedin: { url: "https://linkedin.com/in/fernanda-delleprane/", name: 'Linkedin' },
    email: { url: "fernandadelleprane@gmail.com", name: 'E-mail' },
    github: { url: "https://github.com/delleprane", name: "Github" },

}

export const menu = ["Sobre", "Educação", "Projetos", "Reviews", "Experiência", "Contato"]


// Content Web

export const buttonCV = "Baixar curriculo"
export const buttonCertification = ' Baixe o certificado'
export const buttonContact = "Entre em contato"
export const contactNumber = '+5524981330445'
export const whastapp = 'Whatsapp'
