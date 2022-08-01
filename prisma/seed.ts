const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const annualIncomeData = [
  {
    description: 'Até R$ 10 milhões'
  },
  {
    description: 'De R$ 10 a R$ 50 milhões'
  },
  {
    description: 'De R$ 50 a R$ 200 milhões'
  },
  {
    description: 'De R$ 200 a R$ 500 milhões'
  },
  {
    description: 'Acima de R$ 500 milhões'
  }
]

const companyData = [
  {
    name: 'Ace Cortex',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '12580915000100',
    about: 'A ACE Cortex desenvolve empresas, pessoas e negócios por meio da inovação, capacitando, solucionando desafios, gerando resultados e promovendo a transformação cultural.',
    demand: 100000000,
    annualIncome: {
      connect: { id: 1 }
    }
  },
  {
    name: 'Future Dojo',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/10/Wallpaper-5-1024x576.png',
    taxId: '40879723000127',
    about: 'A Future Dojo é a escola digital das competências do futuro. Destrave o seu crescimento e aprimore as suas habilidades de inovação e human skills com a joint venture entre a ',
    demand: 50000000,
    annualIncome: {
      connect: { id: 2 }
    }
  },
  {
    name: 'Zebra',
    photo: 'https://acestartups.com.br/wp-content/uploads/2022/03/Wallpaper-2-1024x576.png',
    taxId: '40333582000142',
    about: 'A partir de  questionamentos sobre o mercado de câmbio surge a Zebra, uma fintech que traz o câmbio justo para todo negócio e a agilidade e acessibilidade a todo tipo de empresa.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 3 }
    }
  },
  {
    name: 'EcoMud',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '35077906000199',
    about: 'Com soluções de baixo custo para o setor da construção civil, a startup tem como foco principal a pavimentação de estradas. As tecnologias utilizadas pela EcoMud possuem como matéria prima principal os rejeitos da mineração.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 4 }
    }
  },
  {
    name: 'Track.CO',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '07304605000115',
    about: 'A statup é referência no país para o monitoramento e gestão de satisfação de clientes. A Track é especialista no monitoramento do Net Promoter Score (NPS), principal indicador-chave de desempenho de satisfação de clientes do mundo e atua também na América Latina. ',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 4 }
    }
  },
  {
    name: 'Galax Pay',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '30765018000145',
    about: 'Focada em automatização das cobranças e redução da inadimplência, a plataforma auxilia empresas a gerenciar seus recebimentos, seja por boleto ou cartão de crédito. Entre os serviços oferecidos estão o recebimento recorrente por cartão de crédito, emissão automatizada de boletos bancários, emissões automáticas de NFS-e, pagamento de contas e realização de transferências;',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 4 }
    }
  },
  {
    name: 'Buser',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '29365880000181',
    about: 'A plataforma conecta viajantes a outras pessoas interessadas na mesma viagem. Juntas, elas podem fretar um ônibus junto à empresas de transporte executivo especializadas, possibilitando economias de até 60%.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 4 }
    }
  },
  {
    name: 'Tag',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '26937669000106',
    about: 'Referência no mercado hoteleiro, a Tag opera em seis países da América Latina. Atualmente, a startup oferece três produtos específicos para a hotelaria e tem como objetivo transformar a experiência dos hóspedes desde o primeiro contato com o hotel.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 5 }
    }
  }, {
    name: 'Psicologia Viva',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '10960702000170',
    about: 'O marketplace de consultórios virtuais é focado na área de Psicologia. A plataforma tem a missão de promover a educação da sociedade do quão importante é ter equilíbrio emocional e saúde mental. A startup facilita o acesso ao serviço de psicologia por videoconferência em um ambiente criptografado de qualquer lugar e quando for necessário.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 4 }
    }
  }, {
    name: 'Sympla',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '14512528000154',
    about: 'A empresa conecta pessoas a experiências únicas, desde o momento de descoberta à realização do evento. Na plataforma, é possível criar, organizar, gerir e divulgar eventos. A Sympla é líder de mercado de eventos do Brasil.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 5 }
    }
  }, {
    name: 'SemSenha.com',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '17977853000180',
    about: 'A startup promete falicitar e tornar mais seguro o acesso a internet utilizando seus Hotspots WiFi. Com o serviço da empresa, o usuário consegue identificar e interagir com clientes, exibir publicidade, acompanhar e gerenciar o desempenho dos Hotspots, oferecer internet de qualidade e ainda aumentar o seu faturamento.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 4 }
    }
  }, {
    name: 'Ipê Digital',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '46828296000134',
    about: 'A startup oferece softwares simples e eficientes para que pequenas e médias empresas consigam impulsionar os seus negócios. A Ipê Digital tem mais de 2.600 clientes em cerca de 750 cidades brasileiras. ',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 4 }
    }
  }, {
    name: 'Fina',
    photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
    taxId: '03856277000109',
    about: 'A fintech adianta recebíveis futuros de fornecedores de determinadas empresas parceiras. Com o processo é 100% online e automatizado, a Fina garante a redução da burocracia, do tempo da operação e dos custos.',
    demand: 1000000000,
    annualIncome: {
      connect: { id: 5 }
    }
  }

]

async function main () {
  await prisma.company.deleteMany()
  console.log('🚮 Deleted companies')
  await prisma.annualIncome.deleteMany()
  console.log('🚮 Deleted annual incomes ')

  console.log('🌱 Start seeding Annual Income...')

  for (const a of annualIncomeData) {
    const annualIncome = await prisma.annualIncome.create({
      data: a
    })
    console.log(`✅ Created Annual Income with id: ${annualIncome.id}`)
  }

  console.log('🌱 Start seeding Companies..')
  for (const u of companyData) {
    const user = await prisma.company.create({
      data: u
    })
    console.log(`✅ Created Company with id: ${user.id}`)
  }
  console.log('🏁 Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
