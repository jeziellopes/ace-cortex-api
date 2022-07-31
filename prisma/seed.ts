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
