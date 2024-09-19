
export const about = {
    title: "Front-end",
    content: `Sou Desenvolvedora Front-End especializada em React.js, React Hooks, JavaScript e TypeScript, com sólida experiência em grandes projetos e uma paixão por criar interfaces interativas e intuitivas. Minha jornada no desenvolvimento começou com a curiosidade por entender o que acontece nos bastidores das melhores experiências digitais.
Trabalhei em empresas renomadas como MadeiraMadeira e Huia, onde fui responsável por desenvolver soluções escaláveis, eficientes e centradas no usuário. Minha atuação incluiu desde o gerenciamento de estados complexos até o consumo de APIs com Axios, sempre buscando otimizar a performance e garantir a melhor experiência possível.
Tenho ampla prática em CSS, SASS e Tailwind, criando layouts responsivos e modernos, além de uma sólida habilidade na manipulação de objetos e boas práticas em Node.js, garantindo que as aplicações funcionem perfeitamente tanto no front quanto no back-end. Também sou adepta de metodologias ágeis, como o Scrum, e trabalho muito bem em squads multidisciplinares, onde a colaboração e a comunicação eficaz são chave.
Atualmente, estou ampliando meus conhecimentos em Segurança da Informação pela FMU, o que me proporciona uma visão ainda mais completa sobre como criar aplicações não apenas funcionais, mas também seguras.
Combinando meu background em marketing digital com minha expertise técnica, consigo trazer uma perspectiva estratégica para os projetos, unindo a necessidade de performance à experiência do usuário. Minha formação em marketing e experiência em grandes empresas me deram uma base sólida para entender o impacto das decisões de desenvolvimento no negócio como um todo. `,
    skills:
    {
        title: 'Minhas principais habilidades incluem:',
        ability: ['React.js, React Hooks,JavaScript, TypeScript, Node.js'
            , 'CSS, SASS, Tailwind CSS', 'Axios, Consumo de API`s', 'Metodologia agil, Scrum', 'Gerenciamento de estados, SEO, Manipulacao de objetos', 'Sites responsivos, Desenvolvimento de interfaces centradas no usuário, foco em performance e segurança']
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
        content: `Este projeto é a interface front-end para o backend de cadastro, listagem e 
        deleção de clientes, que pode ser encontrado em Clients-CRUD-backend.`,
        features: {
            title: 'Funcionalidades',
            text: 'Cadastro de clientes: Busque a lista de clientes, cadastre novos e delete em nosso banco de dados .',
            list: [
                'Nome', 'E-mail'
            ],
            technology: {
                title: 'Tecnologias',
                list: ['React', 'Vite.js', 'Tailwind CSS', 'Axios']
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
        title: "Tabela fipe e Exercicios",
        content: `Este projeto é uma aplicação desenvolvida para praticar e demonstrar várias técnicas de desenvolvimento 
        web.`,
        features: {
            title: 'Funcionalidades',
            text: '',
            list: [
                '  Máscaras de Entrada: Implementação de máscaras para campos.',
                '  Consumo de APIs: Integração com APIs externas para obter e enviar dados.',
                '  Edição de Conteúdos: Funcionalidade para editar conteúdos dinâmicos.',
                '  Consulta à Tabela FIPE: Criação de campos e retorno personalizado a partir de consultas na tabela FIPE de carros.'
            ],
            technology: {
                title: 'Tecnologias',
                list: ['React', 'Javascript', 'CSS', 'Axios']
            }
        },
        github: 'https://github.com/delleprane/tabela-fipe',
        url: 'https://tabela-fipe-rho.vercel.app'
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
        title: "Analista front-end",
        subTitle: "MadeiraMadeira",
        time: "2022 - 2024",
        content: `Desenvolvedora Front-end com sólida experiência em React.js, JavaScript, TypeScript e Node.js, atuando em projetos que aliam desenvolvimento técnico e visão estratégica.
            Na Equipe de Analytics, trabalhei em uma equipe multidisciplinar de desenvolvimento, marketing e dados, onde padronizei eventos para coleta de dados e forneci insights cruciais que suportaram decisões estratégicas orientadas a fatos. Na Equipe Navcon, foquei em melhorias de SEO, correção de bugs e criação de novas páginas, aprimorando a experiência do usuário e otimizando o ambiente de compras online.
            Proficiente em metodologias ágeis como Scrum, tenho habilidades em CSS e Sass, além de uma forte capacidade de comunicação e colaboração em squads multidisciplinares. Busco constantemente aprimorar minhas competências para entregar soluções inovadoras e eficientes.
            `,
        tech: 'React.js, JavaScript, TypeScript, Node.js, CSS, Sass, Scrum',
    },

    {
         title: "Front-end",
        subTitle: "Huia",
        time: "2021 - 2022",
        content: `Desenvolvedora Front-end com ampla experiência em JavaScript, React, Strapi CMS, Tailwind, CSS e Styled Components. Tenho um histórico comprovado de criar soluções que equilibram inovação técnica e facilidade de uso.
            Na Huia, um estúdio digital, desempenhei um papel essencial na criação de landing pages personalizadas. Para capacitar os clientes com mais autonomia, implementei o Strapi CMS, permitindo que criassem e gerenciassem suas próprias páginas, selecionando layouts e componentes de acordo com suas necessidades. Essa solução simplificou a edição de conteúdo e garantiu uma experiência web responsiva e eficiente.
            Minha abordagem é sempre centrada no usuário, com foco em entregar produtos funcionais e de alta qualidade. Tenho experiência em colaborar com equipes multidisciplinares, aplicando metodologias ágeis como Scrum para garantir que os projetos sejam concluídos com excelência.
            `,
        tech: 'React.js, JavaScript, Strapi CMS, Tailwind CSS, CSS, Styled Components'
        
    },
]

export const contact = {
    content: "Estou sempre aberta a novas ideias, desafios e colaborações. Se você tem um projeto em mente, uma pergunta, ou apenas quer conversar sobre desenvolvimento, ficarei feliz em ouvir de você. Vamos conectar e construir algo incrível juntos!",
    linkedin:{ url:"https://linkedin.com/in/fernanda-delleprane/", name:'Linkedin'},
    email:{url: "fernandadelleprane@gmail.com", name:'E-mail'},
    github:{url: "https://github.com/delleprane", name:"Github"},
    
}

export const menu = ["Sobre", "Projetos", "Reviews", "Experiencia", "Educacao" , "Contato"]


// Content Web

export const buttonCV = "Baixar curriculo"
export const buttonContact = "Entre em contato"
export const contactNumber ='+5524981330445'
export const whastapp = 'Whatsapp'
