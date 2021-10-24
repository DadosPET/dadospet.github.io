import { PetWebsiteData, PetMemberType, PetColorScheme } from './content-model'

export const petDefaultDescriptionsLibrary = {
  model:
    'Composto por estudantes de Ciência da Computação do Centro de Informática da Universidade Federal de Pernambuco e uma professora tutora, temos como objetivo aproximar as pessoas da computação em suas diversas vertentes — seja com atividades voltadas ao público externo que ainda não ingressou na área ou direcionadas a estudantes do centro.',
  head:
    'O PET-Informática é um programa da Universidade Federal de Pernambuco formado por pessoas alunas de Ciência da Computação. Organizamos cursos, palestras, workshops e olimpíadas para as pessoas alunas da graduação e toda a comunidade local.',
  website:
    'Somos pessoas alunas do Centro de Informática da Universidade Federal de Pernambuco que estão envolvidas em atividades de ensino, pesquisa e extensão, buscando melhorar a experiência da graduação para toda a comunidade acadêmica.',
}

export const imageLocations = {
  local: 'images',
  cdn: '/images/',
}

export const targetImageLocation = imageLocations.cdn;

export const petWebsiteData: PetWebsiteData = {
  announcement: {
    visible: false,
    colorScheme: PetColorScheme.LaranjaGradiente,
    shortDescription: 'A seleção 2021 do PET foi prorrogada!',
    longDescription:
      'A seleção 2021 do PET foi prorrogada! Inscreva-se até o dia 21 de março.',
    callToAction: {
      text: 'Inscreva-se',
      url: 'https://pet.cin.ufpe.br/selecao',
    },
  },
  hero: {
    title: null,
    text: null,
    circleImage: {
      url: `${targetImageLocation}/logos/teste-logo.png`,
      alternativeText:
        'Logotipo da comissão DadosPET',
      credits: '',
    },
    presentationImage: {
      url: `${targetImageLocation}/photos/presentation.jpg`,
      alternativeText:
        '',
      credits: 'https://br.freepik.com/vetores/fundo',
    },
    entries: [
      {
        title: 'Dados Abertos',
        icon: 'ri-open-source-fill',
        text:
          'Segundo a definição da Open Knowledge Internacional, em suma, dados são abertos quando qualquer pessoa pode livremente acessá-los, utilizá-los, modificá-los e compartilhá-los para qualquer finalidade, estando sujeito a, no máximo, exigências que visem preservar sua proveniência e sua abertura. Isso geralmente é satisfeito pela publicação dos dados em formato aberto e sob uma licença aberta.',
      },
    ],
  },
  activities: [
    {
      title: 'Centralização e Organização de dados da CENAPET',
      text:
        '<p>Desde a sua fundação, a CENAPET produziu diversos dados. Apesar de que parte dessas informações estejam disponíveis no atual site da CENAPET, mantido pela diretoria, é possível que diversos documentos e dados importantes foram perdidos ao longo dos anos. Diferentes estruturas da CENAPET poderiam se beneficiar de um acesso simples e transparente sobre algumas características importantes que as gestões das diretorias puderam obter ao longo do tempo. Este projeto tem como objetivo criar um diálogo com a atual diretoria da CENAPET de forma que as informações relevantes para a comunidade PETiana possam ser documentadas e disponibilizadas publicamente.</p>',
      images: [{
        url: `${targetImageLocation}/logos/logo_atividade_cenapet.png`,
        alternativeText:
          'Logotipo da CENAPET com o fundo roxo.',
        credits: '',
      }],
      // callToAction: {
      //   text: 'Saiba mais no site oficial',
      //   url: 'https://opei.cin.ufpe.br/',
      // },
    },
    {
      title: 'Construção do site da comissão DadosPET',
      text:
        'A visibilidade e transparência são assuntos frequentes nos ambientes de discussão em eventos PET. Por esse motivo, diversas comissões e grupos de trabalhos criados no contexto da CENAPET buscam preencher um espaço nas redes sociais. A comissão DadosPET também busca adotar essa estratégia, além da definição de um website que tornará transparente as atividades, composição e objetivos da comissão. Além disso, o site também será utilizado para fornecer uma API de acesso aos dados coletados e estruturados pela comissão.',
      images: [{
        url: `${targetImageLocation}/logos/logo_atividade_site.png`,
        alternativeText:
          'Diversos logotipos de navegadores e tecnologias de desenvolvimento web com o fundo roxo.',
        credits: '',
      }],
    },
    {
      title: 'Centralização de dados de CLAAs e representações institucionais de grupos PET nas IES (CLAA, InterPET, ...)',
      text:
          'A centralização de dados de CLAA tem como objetivo inicial a criação de um documento que contenha informações sobre todos os CLAA presentes em diferentes universidades. Essas informações contemplarão listas de contatos, lista de representantes (docentes e discentes), períodos de representação, entre outros. Um mecanismo poderá ser implementado para manter este documento atualizado, o que pode incluir o contato com diferentes organizações como os InterPETs de cada universidade (também conhecidos como CEPETs).',
      images: [{
        url: `${targetImageLocation}/logos/logo_atividade_claa.png`,
        alternativeText:
          'Três desenhos minimalistas de prédios que representam universidades com o fundo roxo. Existe uma linha pontilhada conectando os três desenhos.',
        credits: '',
      }],
      // callToAction: {
      //   text: 'Acesse o site',
      //   url: 'https://pet.cin.ufpe.br/ferias.py/',
      // },
    },
    {
      title: 'Centralização e Organização de dados de eventos PET',
      text:
          'Atualmente, os eventos PET são as principais atividades no contexto da CENAPET que produz periodicamente uma grande quantidade de informações dos grupos. Dentre essas informações, estão inclusos os trabalhos publicados, a lista de participantes e as métricas de participação nesses eventos. Essas informações podem ser utilizadas para tornar mais transparente os dados do programa. O portal oficial SIGPET possuí um acesso muito limitado, e por este motivo diversas informações de interesse público não podem ser acessadas. Por isso, o projeto de Centralização e Organização de dados de eventos PET da comissão DadosPET tem como objetivo suprir essa demanda. Para isso, é necessário manter contato com cada comissão organizadora para padronizar, coletar e estruturar os dados que serão posteriormente disponibilizados para a comunidade.',
      images: [{
        url: `${targetImageLocation}/logos/logo_atividade_eventos.png`,
        alternativeText:
          'Logotipo do vigésimo quinto e vigésimo sexto enapet com o fundo roxo. Uma reticências também está inserida na parte inferior direita da figura.',
        credits: '',
        }],
    },
    {
      title: 'Prototipação de aplicações',
      text:
          'O principal objetivo da comissão DadosPET consiste na coleta, estruturação, centralização e disponibilização de dados do programa no contexto da CENAPET. Esses dados podem ser utilizados por qualquer pessoa para realizar qualquer tipo de atividade ou projeto. Contudo, diversos membros da comissão têm interesses no potencial que esse tipo de centralização de dados pode possibilitar. Por isso a comissão considera dentre as suas atividades o desenvolvimento de diversos protótipos que podem ser desenvolvidos para resolver problemas no contexto do PET. Alguns exemplos de aplicações consideram a indexação de publicações em eventos PET e aplicativos para consulta de encaminhamentos. Os projetos desenvolvidos serão disponibilizados publicamente no site GitHub, e também incorporados no site da comissão sempre que possível.',
      images: [{
        url: `${targetImageLocation}/logos/logo_atividade_aplicacoes.png`,
        alternativeText:
          'Ao lado esquerdo da figura existem quatro logos empilhados de planilhas do google com cores verdes. No centro da imagem existe uma flecha branca apontando para a direita. Na direita da figura existe um desenho que contém um computador de ondem saem gráficos, desenhos de documentos digitais e outros símbolos que remetem a ideia de análises de dados.',
        credits: '',
        }],
      // callToAction: {
      //   text: 'Acesse o manual',
      //   url: 'https://pet.cin.ufpe.br/manual/',
      // },
    },
  ],
  members: [
    {
      name: 'Bruno Meyer',
      type: PetMemberType.Current,
      cinLogin: 'PET Computação UFPR (Egresso)',
      photoUrl: `${targetImageLocation}/members/bruno-meyer.png`,
      linkedinUrl: 'https://www.linkedin.com/in/bruno-meyer-a37b43160/',
    },
    {
      name: 'Carlos Alexandre',
      type: PetMemberType.Current,
      cinLogin: 'GET Engenharia Computacional UFJF (Egresso)',
      photoUrl: `${targetImageLocation}/members/carlos-alexandre.png`,
      linkedinUrl: '',
    },
    {
      name: 'Diego Silva',
      type: PetMemberType.Current,
      cinLogin: 'PET Engenharias UEFS',
      photoUrl: `${targetImageLocation}/members/diego-silva.png`,
      linkedinUrl: 'https://www.linkedin.com/in/di3gocs/',
    },
    {
      name: 'Mateus Edival',
      type: PetMemberType.Current,
      cinLogin: 'PET Computação UNIOESTE (Egresso)',
      photoUrl: `${targetImageLocation}/members/mateus-edival.png`,
      linkedinUrl: 'https://www.linkedin.com/in/mateus-edival-6815b7186/',
    },
    {
      name: 'Nathan Oliveira',
      type: PetMemberType.Current,
      cinLogin: 'PET Computação ',
      photoUrl: `${targetImageLocation}/members/nathan-oliveira.jfif`,
      linkedinUrl: '',
    },
    {
      name: 'Aline Correia',
      type: PetMemberType.Egress,
      photoUrl: ``,
    },
  ],
  faqEntries: [
    {
      question: 'Como entro no DadosPET?',
      answer:
        'Através do nosso <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark" href="https://forms.gle/aRz41wEpAjKrvRHfA">formulário de inscrição</a>.',
    },
    {
      question: 'Quem pode participar do DadosPET?',
      answer:
        'Qualquer pessoa é bem vinda! Não é necessário ter experiência com informática. Podem ser pessoas egressas ou que recém ingressaram no programa..',
    },
    {
      question: 'Preciso ser da área da Computação para participar da comissão?',
      answer:
        'Não, todas as áreas de conhecimento são bem-vindas e adicionam uma visão única a comissão.',
    },
    {
      question: 'Como entro em contato?',
      answer:
        'Você pode entrar em contato através do nosso e-mail: <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:dadospet@gmail.com">dadospet@gmail.com</a>.',
    },
    {
      question: 'O que é o PET?',
      answer:
        'O <strong>Programa de Educação Tutorial</strong> foi criado para apoiar atividades que integram ensino, pesquisa e extensão. O PET proporciona às pessoas alunas, sob orientação de uma pessoa tutora, a realização de atividades extracurriculares que complementem a formação acadêmica da comunidade estudantil e, ao mesmo tempo, atendam necessidades do próprio curso de graduação.',
    },
  ],
  contactUrls: [
    // {
    //   name: 'Facebook',
    //   label: '@petinformatica',
    //   icon: 'ri-facebook-circle-fill',
    //   url: 'https://fb.me/petinformatica',
    // },
    {
      name: 'E-mail',
      label: 'dadospet@gmail.com',
      icon: 'ri-mail-fill',
      url: 'mailto:dadospet@gmail.com',
    },
    {
      name: 'GitHub',
      label: 'DadosPET',
      icon: 'ri-github-fill',
      url: 'https://github.com/DadosPET',
    },
    {
      name: 'Instagram',
      label: 'Em breve...',
      icon: 'ri-instagram-fill',
      url: '#',
    },
  ],
  externalLinks: [
    {
      text: 'Regimento',
      url: 'https://drive.google.com/file/d/1j_2GUzWuSuTSuASV87Ym8InuI4ipOg1p/view?usp=sharing',
    },
    {
      text: 'Formulário de Inscrição',
      url: 'https://forms.gle/aRz41wEpAjKrvRHfA',
    },
  ],
}
