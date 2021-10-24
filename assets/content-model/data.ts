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
      name: 'Tomás Nascimento',
      type: PetMemberType.Current,
      cinLogin: 'tnpb',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794460/pet-website/members/tomas-nascimento.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/tom%C3%A1s-nascimento-4a2260200/',
    },
    {
      name: 'Ernesto Gonçalves',
      type: PetMemberType.Current,
      cinLogin: 'egln',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794238/pet-website/members/ernesto-goncalves.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ergdln/',
    },
    {
      name: 'Josué Fidelis',
      type: PetMemberType.Current,
      cinLogin: 'jfon',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794084/pet-website/members/josue-fidelis.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/josu%C3%A9-fidelis-2059411a2/',
    },
    {
      name: 'Robson Oliveira',
      type: PetMemberType.Current,
      cinLogin: 'ropj',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794459/pet-website/members/robson-oliveira.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ropj/',
    },
    {
      name: 'Matheus Alves',
      type: PetMemberType.Current,
      cinLogin: 'maa2',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794305/pet-website/members/matheus-alves.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/matheus-alves-almeida-0a2947180/',
    },
    {
      name: 'Aline Gouveia',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/aline-gouveia.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/aline-gouveia/',
    },
    {
      name: 'André Vasconcelos',
      type: PetMemberType.Current,
      cinLogin: 'alpvj',
      photoUrl: `${targetImageLocation}/members/andre-luis-vasconcelos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/andrevas86/',
    },
    {
      name: 'César Silva',
      type: PetMemberType.Current,
      cinLogin: 'accs2',
      photoUrl: `${targetImageLocation}/members/cesar-silva.jpg`,
    },
    {
      name: 'Marconi Gomes',
      type: PetMemberType.Current,
      cinLogin: 'mgrf',
      photoUrl: `${targetImageLocation}/members/marconi-gomes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/MarconiGRF/',
      personalWebsiteUrl: 'https://marconi.dev.br/',
    },
    {
      name: 'Simone Santos',
      type: PetMemberType.Tutor,
      cinLogin: 'scs',
      photoUrl: `${targetImageLocation}/members/simone-santos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/simone-santos-0562a228/',
      personalWebsiteUrl: 'http://lattes.cnpq.br/3675858428545219',
    },
    {
      name: 'Pedro Basilio',
      type: PetMemberType.Current,
      cinLogin: 'pcsb',
      photoUrl: `${targetImageLocation}/members/pedro-basilio.jpg`,
    },
    {
      name: 'Luan Brito',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/luan-brito.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/luan-brito-1b802a152/',
    },
    {
      name: 'José Bezerra',
      type: PetMemberType.Current,
      cinLogin: 'jbmn2',
      photoUrl: `${targetImageLocation}/members/jose-bezerra.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/j0s3bezerra/',
    },
    {
      name: 'Gabriel Nogueira',
      type: PetMemberType.Current,
      cinLogin: 'gnl2',
      photoUrl: `${targetImageLocation}/members/gabriel-nogueira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/gabriel-n-132451122/',
      personalWebsiteUrl: 'https://gabrielnogueiralt.github.io/',
    },
    {
      name: 'Erick Almeida',
      type: PetMemberType.Current,
      cinLogin: 'eaor',
      photoUrl: `${targetImageLocation}/members/erick-almeida.jpg`,
      linkedinUrl: 'https://linkedin.com/in/risodev',
      personalWebsiteUrl: 'https://riso.dev/',
    },
    {
      name: 'Aline Correia',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/aline-correia.jpg`,
    },
    {
      name: 'Camila Brendel',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/camila-brendel.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/camila-brendel-931a6210b/',
    },
    {
      name: 'Danilo Ribeiro',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/danilo-ribeiro.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/danilodnr2/',
    },
    {
      name: 'Divino Neto',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/divino-neto.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/dgmneto/',
    },
    {
      name: 'Edjan Michiles',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/edjan-michiles.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/edjanmichiles/',
    },
    {
      name: 'Éden Ernandes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/eden-ernandes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/edensantana/',
    },
    {
      name: 'Ermano Arruda',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ermano-arruda.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ermanoarruda/',
    },
    {
      name: 'Felipe Araújo',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/felipe-araujo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/felipeb-maraujo/',
    },
    {
      name: 'Fernando Fonseca',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/fernando-fonseca.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/fernando-fonseca-b6007333/',
    },
    {
      name: 'Filipe Fernando',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/filipe-fernando.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/fernando-fonseca-b6007333/',
    },
    {
      name: 'Henrique Caúla',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/henrique-caula.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/henrique-ca%C3%BAla-561312169/',
    },
    {
      name: 'Higor Cavalcanti',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/higor-cavalcanti.jpg`,
    },
    {
      name: 'Larícia Mota',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/laricia-mota.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lariciamota/',
    },
    {
      name: 'Lucas Cardoso',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lucas-cardoso.jpg`,
    },
    {
      name: 'Lavínia Paganini',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lavinia-paganini.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lavinia-paganini/',
    },
    {
      name: 'Lucas Santana',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lucas-santana.png`,
      linkedinUrl: 'https://www.linkedin.com/in/lcssantana/',
    },
    {
      name: 'Leonardo Andrade',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/leonardo-andrade.jpg`,
    },
    {
      name: 'Gus Stor',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/gus-stor.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/gus-stor-746597b4/',
    },
    {
      name: 'Leonardo Galdino',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/leonardo-galdino.png`,
      linkedinUrl: 'https://www.linkedin.com/in/leonardo-galdino-81969814b/',
    },
    {
      name: 'Lucas Valença',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lucas-valenca.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lvrma/',
    },
    {
      name: 'Marcela Azevedo',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/marcela-azevedo.png`,
      linkedinUrl: 'https://www.linkedin.com/in/marcela-azevedo-b64a5013b/',
    },
    {
      name: 'Maria Gabriela',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/maria-gabriela.jpg`,
      linkedinUrl:
        'https://www.linkedin.com/in/maria-gabriela-cardoso-002506b5/',
    },
    {
      name: 'Claudio Carvalho',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/claudio-carvalho.png`,
      linkedinUrl: 'https://www.linkedin.com/in/claudiocarvalhoo/',
    },
    {
      name: 'Ramon Saboya',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ramon-saboya.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ramonsaboya/',
    },
    {
      name: 'Rodrigo Rodrigues',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/rodrigo-rodrigues.png`,
      linkedinUrl: 'https://www.linkedin.com/in/rods/'
    },
    {
      name: 'Ullayne Fernandes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ullayne-fernandes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ullayne/'
    },
    {
      name: 'Marlon Reghert',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/marlon-reghert.png`,
      linkedinUrl: 'https://www.linkedin.com/in/marlon-alves-325315b9',
    },
    {
      name: 'Maria Luiza Vieira',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/maria-luiza-vieira.png`,
      linkedinUrl: 'https://www.linkedin.com/in/maria-luiza-menezes-vieira-44662a152',
    },
    {
      name: 'Marina Haack',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/marina-haack.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/marinahaack',
    },
    {
      name: 'Maria Júlia Godoy',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/maria-julia-godoy.png`,
      linkedinUrl: 'https://www.linkedin.com/in/mariajuliagodoy',
    },
    {
      name: 'Matheus Borba',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/matheus-borba.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/borba-matheus/',
    },
    {
      name: 'Pedro Rossi',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/pedro-rossi.png`,
      linkedinUrl: 'https://www.linkedin.com/in/pgrr97/',
    },
    {
      name: 'Pedro Torres',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/pedro-torres.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/pedrootorres/',
    },
    {
      name: 'Pedro Tôrres',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/pedro-torres-2.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/t0rr3sp3dr0',
    },
    {
      name: 'Rafael Nunes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/rafael-nunes.png`,
    },
    {
      name: 'Rodrigo Calegario',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/rodrigo-calegario.png`,
      linkedinUrl: 'https://www.linkedin.com/in/rodrigo-calegario-32b7aa38/',
    },
    {
      name: 'Ruy Brito',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ruy-brito.png`,
      linkedinUrl: 'https://www.linkedin.com/in/ruy-brito/',
    },
    {
      name: 'Simone Cohen',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/simone-cohen.png`,
      linkedinUrl: 'https://www.linkedin.com/in/simone-cohen-3b14a614a/',
    },
    {
      name: 'Tomer Simis',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/tomer-simis.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/tomersimis/',
    },
    {
      name: 'Valdemiro Vieira',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/valdemiro-vieira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/vrvs/',
    },
    {
      name: 'Victor Monteiro',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/victor-monteiro.jpg`,
    },
    {
      name: 'Wilton Ramos',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/wilton-ramos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/wilton-ramos/',
    }
  ],
  faqEntries: [
    {
      question: 'O que é o PET?',
      answer:
        'O <strong>Programa de Educação Tutorial</strong> foi criado para apoiar atividades que integram ensino, pesquisa e extensão. O PET proporciona às pessoas alunas, sob orientação de uma pessoa tutora, a realização de atividades extracurriculares que complementem a formação acadêmica da comunidade estudantil e, ao mesmo tempo, atendam necessidades do próprio curso de graduação.',
    },
    {
      question: 'O que é o PET-Informática?',
      answer:
        '<strong>PET-Informática</strong> é o PET do curso de Ciência da Computação da Universidade Federal de Pernambuco, composto por pessoas alunas bolsistas e não bolsistas, sob a orientação de uma pessoa professora tutora — atualmente a professora <strong>Simone Santos</strong>.',
    },
    {
      question: 'Como entro no PET?',
      answer:
        'Periodicamente, com a saída de antigos integrantes, são abertas novas vagas para o grupo. A abertura do processo seletivo é divulgada nas nossas <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="#contato">redes sociais</a> através do lançamento do Edital de Convocação. O processo seletivo se resume em três etapas: a primeira, onde as pessoas inscritas enviam currículos e outros documentos sobre a vida acadêmica, e outras duas, onde são realizadas dinâmicas em grupo e entrevistas. O processo é aberto para pessoas alunas de Ciência da Computação da UFPE que estejam entre o 1º e o 7º período.',
    },
    {
      question: 'Quem pode participar do PET?',
      answer:
        'Diretamente, apenas pessoas alunas de Ciência da Computação que não tenham nenhuma reprovação pendente no histórico escolar. Entretanto, integrantes de outros cursos, servidores e a comunidade em geral são mais do que convidadas a participarem como voluntários de atividades (como a OPEI) conosco, além de assistirem às palestras e aos workshops.',
    },
    {
      question:
        'Por que pessoas alunas de Engenharia da Computação e de Sistemas de Informação não podem participar do PET?',
      answer:
        'Quando um grupo PET é criado, ele fica associado a um curso de graduação da Universidade e fica restrito àquele curso. Quando o PET-Informática foi criado, ele foi associado ao antigo curso de Informática, que foi substituído pelo curso de Ciência da Computação. Por este motivo, o grupo só pode receber pessoas alunas desse curso.',
    },
    {
      question: 'Como agendar uma visita institucional?',
      answer:
        'Para agendar uma visita, a pessoa professora que deseja trazer a turma ao centro precisa mandar um e-mail para o CIn através de <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:ncsf@cin.ufpe.br">ncsf@cin.ufpe.br</a> ou <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:rvsj2@cin.ufpe.br">rvsj2@cin.ufpe.br</a> informando a instituição, o tamanho da turma e o dia e horários desejados. Nós, em conjunto com o Centro, veremos a possibilidade da vaga e confirmamos a visita.',
    },
    {
      question: 'Como participo da OPEI?',
      answer:
        '<strong>Se você é uma pessoa aluna:</strong> a inscrição para a OPEI é realizada por intermédio de uma pessoa professora responsável. Caso você queira participar, verifique com a escola se existe uma pessoa professora responsável pelo cadastro de estudantes. Caso não tenha, procure uma pessoa professora que possa se responsabilizar pelo cadastro da escola através do formulário disponível no <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="https://opei.cin.ufpe.br/">site da OPEI</a>. É importante que o regulamento seja seguido pelas pessoas alunas e professoras.<br><br><strong>Se você é uma pessoa professora ou diretora:</strong> Leia o regulamento que está disponível na aba "Quero me inscrever" no <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="https://opei.cin.ufpe.br/">site da OPEI</a> e cadastre a sua escola.',
    },
    {
      question: 'Como entro em contato?',
      answer:
        'Você pode entrar em contato com o PET-Informática através das nossas <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark" href="#contato">redes sociais</a> ou mandar um e-mail para a gente: <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:pet@cin.ufpe.br">pet@cin.ufpe.br</a>. No CIn, você pode visitar a nossa sala que fica no Bloco A, pertinho da Copa. Você também pode falar diretamente com qualquer pessoa petiana pelos corredores ou redes sociais.',
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
