// src/lib/jornal/posts.mock.ts
import LulaSoberaniaImg from "../../assets/jornal/lula_soberania.jpeg";
import AtoImg from "../../assets/jornal/lula_encontra_motoristas.jpeg";

import MiguelLobato from "../../assets/jornal/ocupcao-miguel-lobato.png"
import CurtaMetragem from "../../assets/jornal/curta-metragem.png" 

import type { Post } from "./types";

export const postsMock: Post[] = [
  // =========================
  // TRIBUNA (7)
  // =========================
  {
    id: 101,
    slug: "em-defesa-da-soberania-nacional-lula-presidente",
    type: "tribuna",
    title: "Em defesa da soberania nacional, Lula presidente!",
    excerpt:
      "O ano de 2026 terá como grande evento político no cenário nacional as eleições gerais que ocorrerão efetivamente entre os dias 16 de agosto e 25 de outubro. O presidente Luís Inácio Lula da Silva (PT) é favorito a conquistar seu quarto mandato, um dos maiores feitos no país.",
    author: "Gabriel Araújo",
    publishedAt: "2026-02-03",

    tags: [
      "SOBERANIA NACIONAL",
      "LULA",
      "ELEIÇÕES 2026",
      "POLÍTICA BRASILEIRA",
      "GOVERNO DEMOCRÁTICO-POPULAR",
    ],
    coverImage: LulaSoberaniaImg,
    coverCaption: "Luiz Inácio Lula da Silva",
    coverCredit: "Arquivo MNLM",

    // Mock “igual ao layout” dos prints: headings + destaques + imagem left + imagem right
    content: [
      {
        type: "paragraph",
        text:
          "O atual governo democrático-popular do presidente Lula está sendo marcado por grandes retomadas de políticas públicas fundamentais para a sobrevivência da classe trabalhadora e para retomada do crescimento econômico. Mas também teve características de se encontrar em um cerco político bastante delicado, o que faz com que sua orientação política seja tímida no que tange os grandes temas nacionais que poderiam dar perenidade para as referidas políticas públicas voltadas para atender a classe trabalhadora mais empobrecida e massacrada pelos anos e ferramentas econômicas do neoliberalismo.",
      },
      {
        type: "paragraph",
        text:
          "Esse cerco político em que o governo se encontra desde antes de tomar posse por si só já nos mostra que a burguesia nacional e o imperialismo não conseguem mais suportar nem mesmo um governo democrático-popular que tem uma ação política moderada. Muito dessa situação pode ser explicada pela constante queda na taxa de lucro dos capitalistas, a financeirização e a especulação econômica, o que resulta em maior instabilidade política e econômica desembocando em períodos políticos de confronto de forma mais aberta entre as classes sociais em disputa.",
      },

      { type: "heading", level: 2, text: "O 8 de Janeiro e a Resistência Popular" },

      {
        type: "paragraph",
        text:
          "Nesse contexto, o que vivenciamos no 08 de janeiro de 2023 não foi um raio em céu azul, mas uma expressão política da tentativa de minar qualquer perspectiva de soberania nacional e desenvolvimento econômico autônomo de nossa pátria, que só não teve o processo golpista findado porque não foi amparado pelas amplas massas do país que já haviam demonstrado disposição de resistir quando rechaçou o golpe de 2016 e a fraude eleitoral de 2018 nas urnas em outubro de 2022, bem como com as mais de 350 mil pessoas nas ruas no histórico 01 de janeiro de 2023 onde o maior líder político e popular do país tomava posse como presidente da república pela terceira vez.",
      },

      {
        type: "highlight",
        title: "Dimensão Estratégica",
        text:
          "Tentar criar um clima político de derrubada do governo e de minar uma alternativa com potencialidade de desembocar em um processo político que efetive nossa soberania nacional e coloque em prática um programa político-econômico das tão sonhadas reformas de base que são a chave do desenvolvimento da nossa pátria.",
      },

      {
        type: "highlight",
        title: "Dimensão Tática",
        text:
          "Com o desgaste do governo democrático-popular e de personalidades que o compõem, o mesmo se encontraria mais fragilizado e desmoralizado diante das massas.",
      },

      {
        type: "image",
        image: AtoImg,
        align: "left",
        caption: "luiz inacio lula da silva em encontro com motoristas",
        credit: "Ricardo Stuckert, 2026",
      },

      {
        type: "paragraph",
        text:
          "São duas dimensões de um mesmo processo, aquilo que o companheiro Florestan Fernandes caracterizou muito bem enquanto contrarrevolução prolongada, um constante assédio e ataques contra o processo revolucionário e de libertação nacional, conduzido pelo imperialismo, seus sócios da burguesia nacional e por elementos do aparato de Estado.",
      },
      {
        type: "paragraph",
        text:
        "O Governo Federal e a esquerda parecem querer morrer abraçados a impopularidade do Supremo Tribunal Federal (STF). As forças populares nos últimos anos ao invés de adotarem uma postura de vanguarda na frente ampla, atuam como o traseiro nessa frente. Ao invés de ter a frente ampla enquanto elemento tático para implementação de seu programa, as forças populares se deixam levar por interesses de determinados elementos atrasados da frente ampla."
      },

      { type: "heading", level: 2, text: "Autonomia Política e Projeto Nacional" },

      {
        type: "paragraph",
        text:
          "E é por se vincular com determinados elementos desse campo político que a popularidade da esquerda às vezes cai, como também é por estar em uma situação debilitada com a população por conta dessa referida aliança que quando o imperialismo desfere uma ofensiva contundente e essa burguesia nacional associada ao imperialismo pula do barco, que a esquerda não encontra tempo hábil para realizar uma manobra política que a sustente relativamente no poder político. O golpe de 2016 exemplifica muito bem esse tipo de situação.",
      },

      {
        type: "paragraph",
        text:
          "Que é necessário haver diálogos, negociações e composições, isso não há como negar. Foram de suma importância para o processo de reconstrução do país e a retomada das políticas públicas para atender a população mais necessitada, e também para punir alguns golpistas. Agora o que não se pode é perder a identidade e a cultura política, abrir mão de princípios e de procurar alcançar os objetivos historicamente característicos da esquerda no país."
      },

      {
        type: "image",
        image: LulaSoberaniaImg,
        align: "right",
        caption: "Lula em caminhada com movimentos populares",
        credit: "Arquivo MNLM",
      },

      {
        type: "paragraph",
        text:
          "As limitações dessa orientação política é algo que está colocado para o momento em que estamos vivendo, persistir nessa posição é nos levar para o caminho de uma derrota de magnitude imensurável e de enorme complexidade para contornar.",
      },

      {
        type: "paragraph",
        text:
          "O presidente Lula e as organizações populares possuem experiência e capacidade de se destacar como vanguarda no processo de defesa dos interesses nacionais e de concretização de um programa de reformas de bases. Para isso é necessário ter coragem e iniciativa política, que devem partir das nossas principais lideranças e organizações; é preciso ganhar autonomia ante os elementos mais atrasados da frente ampla e lhes impor as pautas fundamentais para o alcance desse programa nacionalista. De contrário, se ficarmos à reboque da burguesia, seremos levados para um terreno em que podemos ser facilmente abatidos por nossos principais inimigos."
      },

      {
        type: "paragraph",
        text:
          "O presidente Lula quando quis e quando a situação histórica lhe permitiu, já deu vários exemplos de exercício de poder político para a defesa da soberania nacional e do papel do Brasil como protagonista na dinâmica geopolítica. As organizações populares e patrióticas precisam trabalhar para impulsionar essa característica do presidente Lula, para que nos momentos de batalhas decisivas o mesmo esteja pronto e confiante de conduzir a nação para o processo de verdadeira libertação nacional."
      }
    ],
  },

  {
    id: 102,
    slug: "ocupacao-miguel-lobato",
    type: "tribuna",
    title: "Ocupação Miguel Lobato produz CURTA-METRAGEM documental para mostrar a realidade e pressionar as autoridades públicas",
    excerpt:
      "O ano de 2026 começou com muitas atividades de resistência e luta na Ocupação Miguel Lobato em Marabá, no sudeste do Pará. Localizada em área abandonada pela Companhia Nacional de Abastecimento-CONAB, hoje a comunidade é um território de resistência política, social e cultural no meio urbano no bairro onde está inserida.",
    author: "Agá",
    publishedAt: "2026-01-28",
    tags: ["MORADIA DIGNA", "MNLM", "MARABÁ", "DIREITO A CIDADE", "LUTA SOCIAL", "DOCUMENTÁRIO"],
    coverImage: MiguelLobato,
    coverCaption: "Comunidade da Ocupação Miguel Lobato durante atividade cultural (Arte: MNLM)",
    coverCredit: "Arquivo MNLM",
    content: [
      {
        type: "paragraph",
        text:
          'O mês de janeiro trouxe rodas de conversa e cine-debate no dia 15/01/2026, culminando na produção de um filme documental protagonizado pela comunidade da ocupação. Intitulado **"CONAB E SPU, NÃO NOS ABANDONEM!: a luta da Ocupação Miguel Lobato em Marabá-PA"**, o curta-metragem foi pensado, realizado e protagonizado coletivamente pela militância da Ocupação Miguel Lobato, com apoio de toda a organização e comissões do Movimento Nacional de Luta pela Moradia-MNLM.',
      },
      {
        type: "paragraph",
        text:
          'A produção audiovisual se manifesta como uma resposta ao processo de descumprimento dos prazos assumidos pelo CONAB/SPU, bem como à situação de marginalização e desumanização a que estão submetidas essas famílias pela burocracia estatal.'
      },
      {
        type: "heading",
        level: 2,
        text: 
          'Dois anos de promessas não cumpridas'
      },
      {
        type: "paragraph",
        text:
          'Há cerca de dois anos, a militância vem tentando negociar com a Secretaria do Patrimônio da União-SPU e CONAB a concretização de uma permuta – uma troca, em que a SPU pode disponibilizar outras áreas para as famílias.'
      },
      {
        type: "highlight",
        text: '**"Ocupar, resistir para morar"** – este lema se torna cada vez mais consciente diante das dificuldades, que revelam o significado de pertencer à classe trabalhadora e da população sem-teto e em luta por moradia digna.'
      },
      {
        type: "heading",
        level: 2,
        text:
          'Próximos passos da luta'
      },
      {
        type: "paragraph",
        text: 'Consolidando-se a permuta, o próximo objetivo é submeter o projeto habitacional em edital do Ministério das Cidades e garantir moradia digna para todas as famílias da Ocupação Miguel Lobato – crianças, idosos, homens, mulheres chefes de família e pessoas com deficiência.'
      },
      {
        type: 'image',
        image: CurtaMetragem,
        align: "right",
        caption: "Momento da produção do curta-metragem documental (Arquivo: MNLM)",
        credit: "Arquivo MNLM",
      },
      {
        type: 'paragraph',
        text:
          'O trailer da produção está disponível no canal do MNLM no YouTube, "TV Movimento", e o filme completo "CONAB E SPU, NÃO NOS ABANDONEM!" pode ser acessado no Bitchute – plataforma alternativa, já que o material foi censurado em outras redes.'
      },
      {
        type: 'paragraph',
        text:
          'A comunidade também conta com uma página no Instagram, convidando a todas e todos a seguir, curtir e compartilhar, para fortalecer a visibilidade e a pressão política em favor das famílias, por vida e moradia dignas.'
      },
      {
        type: 'paragraph',
        text:
          'Texto: Agá (coordenadora e educadora popular do MNLM) e Vinícius Sousa Silva e Brito (formado em História - UNIFESSPA, militante social e ativista cultural).'
      },
      
    ],
  },
];
