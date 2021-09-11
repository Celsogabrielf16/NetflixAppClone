import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy{

  tamanho = 'w-50 h-50'

  populares = [

    {
      indice: 0,
      nome: 'The Walking Dead',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
      lancamento: '2010',
      avaliacao: 81,
      duracao: '10 Temporadas',
      categorias: ['Action & Adventure', 'Drama', 'Sci-Fi & Fantasy'],
      faixaetaria: 16,
      titulodescricao: 'Lute contra os mortos. Tema os vivos.',
      descricao: 'Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.',
    },
    {
      indice: 1,
      nome: 'Sweet Tooth',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rgMfhcrVZjuy5b7Pn0KzCRCEnMX.jpg',
      lancamento: '2021',
      avaliacao: 80,
      duracao: '1 Temporada',
      categorias: ['Drama', 'Sci-Fi & Fantasy'],
      faixaetaria: 14,
      titulodescricao: 'Brasil: top 2 de hoje',
      descricao: 'Baseada na adorada HQ da DC e com produção executiva de Susan Downey e Robert Downey Jr., Sweet Tooth é um conto de fadas pós-apocalíptico sobre um menino-cervo e um nômade solitário que embarcam juntos em uma aventura extraordinária.',
    },
    {
      indice: 2,
      nome: 'Lupin',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg',
      lancamento: '2021',
      avaliacao: 79,
      duracao: '1 Temporada',
      categorias: ['Crime', 'Drama', 'Mistério'],
      faixaetaria: 16,
      titulodescricao: 'Brasil: top 4 de hoje',
      descricao: 'Na adolescência, a vida de Assane Diop dá uma guinada radical quando seu pai morre após ser acusado de um crime que não cometeu. Vinte e cinco anos depois, Assane se inspira em "Arsène Lupin, o Ladrão de Casaca" para vingá-lo.',

    },
    {
      indice: 3,
      nome: 'Lúcifer',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      lancamento: '2016',
      avaliacao: 85,
      duracao: '5 temporadas',
      categorias: ['Crime', 'Sci-Fi & Fantasy'],
      faixaetaria: 16,
      titulodescricao: 'Brasil: top 9 de hoje',
      descricao: 'Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.',
    },
    {
      indice: 4,
      nome: 'Ragnarok',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg',
      lancamento: '2020',
      avaliacao: 81,
      duracao: '2 Temporadas',
      categorias: ['Drama', 'Sci-Fi & Fantasy', 'Mistério'],
      faixaetaria: 16,
      titulodescricao: 'É aqui que tudo começa.',
      descricao: 'Em uma cidade norueguesa envenenada pela poluição e abalada por geleiras derretendo, o fim dos tempos parece real. Só uma lenda poderá combater um mal antigo.',
    },
    {
      indice: 5,
      nome: 'Grey Anatomy',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      lancamento: '2005',
      avaliacao: 8,
      duracao: '17 Temporadas',
      categorias: ['Drama'],
      faixaetaria: 14,
      titulodescricao: 'A vida que você salva pode ser sua.',
      descricao: 'Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho.',
    }


  ]

  emalta = [

    {
      indice: 6,
      nome: 'Cobra Kai',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/obLBdhLxheKg8Li1qO11r2SwmYO.jpg',
      lancamento: '2018',
      avaliacao: 81,
      duracao: '3 Temporadas',
      categorias: ['Action & Adventure', 'Drama'],
      faixaetaria: 12,
      titulodescricao: 'Cobra Kai never dies.',
      descricao: 'Esta sequência de Karate Kid pega 30 anos depois dos eventos do All Valley Karate Tournament de 1984 e encontra Johnny Lawrence em busca de redenção reabrindo o infame dojo de karate Cobra Kai . Isso reacende sua antiga rivalidade com o bem-sucedido Daniel LaRusso, que vem trabalhado para manter o equilíbrio em sua vida sem o seu mentor Miyagi.',
    },
    {
      indice: 7,
      nome: 'Peaky Blinders',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
      lancamento: '2013',
      avaliacao: 86,
      duracao: '5 Temporadas',
      categorias: ['Crime', 'Drama'],
      faixaetaria: 18,
      titulodescricao: 'Londres é para tomar',
      descricao: 'Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar.',
    },
    {
      indice: 8,
      nome: 'Ponto Cego',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pYyKZZlb3nd5ASbiuIxva718bp2.jpg',
      lancamento: '2015',
      avaliacao: 73,
      duracao: '5 Temporadas',
      categorias: ['Crime', 'Drama', 'Action & Adventure'],
      faixaetaria: 14,
      titulodescricao: 'Remendando seu passado. Uma tatuagem de cada vez.',
      descricao: 'Misteriosa mulher é encontrada na Times Square, sem quaisquer lembranças de quem ela é e de como chegou ali. As únicas pistas que ela possui são as tatuagens que cobrem todo o seu corpo. Um agente do FBI passa a ajudá-la enquanto buscam a verdade.',
    },
    {
      indice: 9,
      nome: 'Rick & Morty',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
      lancamento: '2013',
      avaliacao: 87,
      duracao: '5 Temporadas',
      categorias: ['Animação', 'Comédia', 'Sci-Fi & Fantasy', 'Action & Adventure'],
      faixaetaria: 16,
      titulodescricao: 'A ciência faz sentido, família não.',
      descricao: 'Rick é um velho mentalmente desequilibrado, mas cientificamente talentoso que se reconectou recentemente com sua família. Ele passa a maior parte do tempo envolvendo o jovem neto Morty em aventuras perigosas e estranhas no espaço e em universos alternativos. Compostos à vida familiar já instável de Morty, esses eventos causam muito sofrimento a Morty em casa e na escola.',
    },
    {
      indice: 10,
      nome: 'O Dilema das Redes',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ca2o7afA65YGoc9hsmwobIivsQ.jpg',
      lancamento: '2020',
      avaliacao: 76,
      duracao: '1h 29m',
      categorias: ['Documentário', 'Drama'],
      faixaetaria: 12,
      titulodescricao: 'A tecnologia que nos conecta também nos controla.',
      descricao: 'Especialistas em tecnologia e profissionais da área fazem um alerta: as redes sociais podem ter um impacto devastador sobre a democracia e a humanidade.',
    },
    {
      indice: 11,
      nome: 'Godzilla vs. Kong',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      lancamento: '2021',
      avaliacao: 80,
      duracao: '1h 53m',
      categorias: ['Ação', 'Ficçãocientífica' , 'Aventura'],
      faixaetaria: 14,
      titulodescricao: 'Um dos dois cairá',
      descricao: 'Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.',
    }

  ]

  assistirnovamente = [

    {
      indice: 12,
      nome: 'Homem-Aranha: De Volta ao Lar',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg',
      lancamento: '2017',
      avaliacao: 74,
      duracao: '2h 13m',
      categorias: ['Ação', 'Aventura', 'Ficção científica', 'Drama'],
      faixaetaria: 12,
      titulodescricao: 'O dever de casa pode esperar. A cidade não.',
      descricao: 'Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.',
    },
    {
      indice: 13,
      nome: 'Liga da Justiça de Zack Snyder',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      lancamento: '2021',
      avaliacao: 84,
      duracao: '4h 2m',
      categorias: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      faixaetaria: 16,
      titulodescricao: 'Caído. Ressuscitado. Unidos.',
      descricao: 'Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.',
    },
    {
      indice: 14,
      nome: 'Infiltrado ',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ef2ozkE4AiWwRnyfc9s05sEtAIT.jpg',
      lancamento: '2021',
      avaliacao: 78,
      duracao: '1h 59m',
      categorias: ['Crime', 'Ação'],
      faixaetaria: 16,
      titulodescricao: 'A one man army.',
      descricao: 'Harry, conhecido apenas como H, é um homem misterioso que trabalha para uma empresa de carros-fortes e movimenta grandes quantias de dinheiro pela cidade de Los Angeles. Quando, ao impedir um assalto, ele surpreende a todos com suas habilidades de combate, suas verdadeiras intenções começam a ser questionadas e um plano maior é revelado.',
    },
    {
      indice: 15,
      nome: 'Mortal Kombat',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      lancamento: '2021',
      avaliacao: 75,
      duracao: '1h 50m',
      categorias: ['Ação', 'Fantasia', 'Aventura'],
      faixaetaria: 10,
      titulodescricao: 'Get over here.',
      descricao: 'Nova aventura baseada no videogame Mortal Kombat. Na história, um jovem que nunca treinou artes marciais acaba envolvido em um gigantesco torneio de luta envolvendo guerreiros da Terra e lutadores e outras dimensões.',
    },
    {
      indice: 16,
      nome: 'Velozes & Furiosos 9',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8L4Mep3KDUK4ztUgf2HlPvUVzZy.jpg',
      lancamento: '2021',
      avaliacao: 80,
      duracao: '2h 25m',
      categorias: ['Ação', 'Aventura', 'Thriller'],
      faixaetaria: 14,
      titulodescricao: 'Todos os caminhos levam a isso',
      descricao: 'Dominic Toretto e sua família precisam enfrentar o seu irmão mais novo Jakob, um assassino mortal que está trabalhando com uma antiga inimiga, a cyber-terrorista Cipher.',
    },
    {
      indice: 17,
      nome: 'Vingadores: Guerra Infinita',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg',
      lancamento: '2018',
      avaliacao: 83,
      duracao: '3h 2m',
      categorias: ['Aventura', 'Ação', 'Ficção científica'],
      faixaetaria: 14,
      titulodescricao: 'Um universo inteiro. De uma vez por todas.',
      descricao: 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.',
    }

  ]

  originaisnetflix = [

    {
      indice: 18,
      nome: 'Bird Box',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg',
      lancamento: '2018',
      avaliacao: 69,
      duracao: '2h 4m',
      categorias: ['Thriller', 'Drama', 'Ficção científica'],
      faixaetaria: 16,
      titulodescricao: 'Feche os olhos para sobreviver.',
      descricao: 'Num mundo pós-apocalíptico, Malorie (Sandra Bullock) e os seus filhos precisam chegar a um refúgio para escapar do "Problema", criaturas que ao serem vistas fazem com que as pessoas se tornem extremamente violentas. De olhos vendados para não serem infectados, a família segue o curso de um rio para chegar à segurança.',
    },
    {
      indice: 19,
      nome: 'Stranger Things ',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/MPw2zpGnJjW3Tl1mZXGjYNlx5X.jpg',
      lancamento: '2016',
      avaliacao: 86,
      duracao: '3 Temporadas',
      categorias: ['Sci-Fi & Fantasy', 'Mistério', 'Drama'],
      faixaetaria: 16,
      titulodescricao: 'It only gets stranger…',
      descricao: 'Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.',
    },
    {
      indice: 20,
      nome: 'The Umbrella Academy',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uYHdIs5O8tiU5p6MvUPd2jElOH6.jpg',
      lancamento: '2019',
      avaliacao: 87,
      duracao: '2 Temporadas',
      categorias: ['Action & Adventure', 'Sci-Fi & Fantasy', 'Drama'],
      faixaetaria: 16,
      titulodescricao: 'Super. Disfuncional. Família.',
      descricao: 'Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.',
    },
    {
      indice: 21,
      nome: 'La casa de papel',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xbWU5kx85MrvWAvlh1jCHXyJk3Z.jpg',
      lancamento: '2017',
      avaliacao: 83,
      duracao: '2 Temporadas',
      categorias: ['Crime', 'Drama'],
      faixaetaria: 16,
      titulodescricao: 'O roubo perfeito.',
      descricao: 'Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros. ',
    },
    {
      indice: 22,
      nome: 'Elite',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f4YhTnCQQlGDohhq9AEQDA4B54C.jpg',
      lancamento: '2018',
      avaliacao: 82,
      duracao: '4 Temporadas',
      categorias: ['Crime', 'Mistério', 'Drama'],
      faixaetaria: 18,
      titulodescricao: 'Brasil: top 1 de hoje',
      descricao: 'Após três jovens da escola pública serem transferidos para um conceituado colégio de elite, o conflito entre classes acaba levando a um assassinato.',
    },
    {
      indice: 23,
      nome: 'Daybreak',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r0o7OBPCmRXJypYG8l6iFYUGD99.jpg',
      lancamento: '2019',
      avaliacao: 73,
      duracao: '1 Temporada',
      categorias: ['Sci-Fi & Fantasy', 'Action & Adventure'],
      faixaetaria: 16,
      titulodescricao: 'Welcome to the apocalypse, bitches.',
      descricao: 'Após o apocalipse, um garoto procura a amada em uma Los Angeles tomada por zumbis e gangues no estilo Mad Max.',
    }

  ]

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    window.scrollTo(0, 0)
  }



}
