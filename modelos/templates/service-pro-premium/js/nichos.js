const nichos = {
  academia: {
    nome: "Iron Shape",
    corPrimaria: "#8b5cf6",
    corSecundaria: "#1a1a2e",
    hero: {
      tipo: "video",
      src: "assets/video/treino.mp4",
      headline: "Transforme seu corpo com acompanhamento profissional",
      subheadline: "Treinos personalizados para todos os níveis",
      cta1: { texto: "Agendar Aula Grátis", link: "#agendamento" },
      cta2: { texto: "Falar no WhatsApp", link: "https://wa.me/..." }
    },
    blocosAtivos: ["hero","diferencial","servicos","processo","antesDepois","planos","agendamento","avaliacoes","faq","localizacao","ctaFinal"],
    diferenciais: [
      { icone: "🏋️", titulo: "Equipamentos Novos", desc: "Aparelhos importados de última geração" },
      { icone: "👨‍🏫", titulo: "Profissionais Certificados", desc: "Equipe com formação superior em Educação Física" },
      { icone: "⏰", titulo: "Horário Flexível", desc: "Aberto das 5h às 23h, todos os dias" },
      { icone: "🧘", titulo: "Aulas Coletivas", desc: "Spinning, jump, yoga e muito mais" }
    ],
    servicos: [
      { icone: "💪", titulo: "Musculação", desc: "Equipamentos modernos e acompanhamento de professor" },
      { icone: "🔥", titulo: "Treino Funcional", desc: "Alta queima calórica e condicionamento físico" },
      { icone: "🥊", titulo: "Boxe & Muay Thai", desc: "Artes marciais para defesa pessoal e preparo" },
      { icone: "👤", titulo: "Personal Trainer", desc: "Atendimento exclusivo e individualizado" }
    ],
    processo: [
      { titulo: "Agende sua aula experimental", desc: "Escolha o melhor horário e venha conhecer" },
      { titulo: "Faça uma avaliação física", desc: "Nossos profissionais analisam seu perfil" },
      { titulo: "Treine com acompanhamento", desc: "Siga seu plano de treinos personalizado" }
    ],
    antesDepois: {
      titulo: "Resultados Reais",
      imagens: [
        { antes: "assets/img/academia-antes1.jpg", depois: "assets/img/academia-depois1.jpg" },
        { antes: "assets/img/academia-antes2.jpg", depois: "assets/img/academia-depois2.jpg" }
      ]
    },
    planos: [
      { nome: "Básico", preco: "R$ 89", beneficios: ["Musculação livre", "Aulas coletivas", "Avaliação inicial"] },
      { nome: "Premium", preco: "R$ 149", beneficios: ["Tudo do Básico", "Personal 2x/semana", "Nutricionista"] },
      { nome: "VIP", preco: "R$ 249", beneficios: ["Tudo do Premium", "Personal ilimitado", "Vaga na garagem"] }
    ],
    agendamento: { tipo: "embed", src: "https://calendly.com/..." },
    avaliacoes: [
      { nome: "Marina S.", texto: "Em 3 meses perdi 8kg e ganhei massa magra!", nota: 5 },
      { nome: "Carlos E.", texto: "Os professores são muito atenciosos, ambiente incrível.", nota: 5 }
    ],
    faq: [
      { pergunta: "Preciso ter experiência?", resposta: "Não! Atendemos desde iniciantes até atletas." },
      { pergunta: "Como funciona a aula experimental?", resposta: "Você agenda um horário e participa normalmente, sem compromisso." }
    ],
    localizacao: { endereco: "Rua do Aço, 200 – Centro", mapa: "https://maps.google.com/?q=..." },
    ctaFinal: { texto: "Pronto para mudar de vida?", cta: "Agendar Aula Grátis", link: "#agendamento" }
  },

  advogado: {
    nome: "Souza & Advogados Associados",
    corPrimaria: "#1e3a5f",
    corSecundaria: "#0f172a",
    hero: {
      tipo: "imagem",
      src: "assets/img/escritorio.jpg",
      headline: "Assessoria jurídica com experiência e confiança",
      subheadline: "Mais de 15 anos defendendo seus direitos",
      cta1: { texto: "Agendar Consulta", link: "#agendamento" },
      cta2: { texto: "Falar no WhatsApp", link: "https://wa.me/..." }
    },
    blocosAtivos: ["hero","diferencial","servicos","processo","equipe","agendamento","avaliacoes","faq","localizacao","ctaFinal"],
    diferenciais: [
      { icone: "⚖️", titulo: "Atuação Especializada", desc: "Direito civil, trabalhista e empresarial" },
      { icone: "📋", titulo: "Atendimento Personalizado", desc: "Cada caso tratado com exclusividade" },
      { icone: "🏆", titulo: "15 Anos de Experiência", desc: "Centenas de processos bem-sucedidos" }
    ],
    servicos: [
      { icone: "👥", titulo: "Direito Trabalhista", desc: "Reclamações trabalhistas, acordos e defesas" },
      { icone: "🏢", titulo: "Direito Empresarial", desc: "Contratos, societário e recuperação judicial" },
      { icone: "🏠", titulo: "Direito Imobiliário", desc: "Compra, venda, locação e regularização" },
      { icone: "👨‍👩‍👧‍👦", titulo: "Direito de Família", desc: "Divórcio, pensão e guarda" }
    ],
    processo: [
      { titulo: "Consulta inicial", desc: "Entendemos seu caso e as melhores estratégias" },
      { titulo: "Análise documental", desc: "Reunimos provas e elaboramos a defesa" },
      { titulo: "Ação judicial", desc: "Protocolamos e acompanhamos até a decisão final" }
    ],
    equipe: [
      { nome: "Dr. Carlos Souza", funcao: "Sócio Fundador", foto: "assets/img/adv1.jpg" },
      { nome: "Dra. Ana Lima", funcao: "Advogada Sênior", foto: "assets/img/adv2.jpg" }
    ],
    agendamento: { tipo: "embed", src: "https://calendly.com/..." },
    avaliacoes: [
      { nome: "João P.", texto: "Resolveram meu caso trabalhista rapidamente. Muito profissional.", nota: 5 }
    ],
    faq: [
      { pergunta: "Quanto custa uma consulta?", resposta: "A primeira consulta é gratuita para avaliar o caso." },
      { pergunta: "Quanto tempo dura um processo?", resposta: "Depende da área e complexidade, explicamos na consulta." }
    ],
    localizacao: { endereco: "Av. Paulista, 1000 – 15º andar", mapa: "https://maps.google.com/?q=..." },
    ctaFinal: { texto: "Pronto para defender seus direitos?", cta: "Agendar Consulta", link: "#agendamento" }
  },

  // Os demais nichos (dentista, estetica, mecanico, engenharia, fotografo) seguem o mesmo padrão.
  // No final incluo o nicho "outro" que é customizável via JSON local.
  // Por brevidade, colocarei um exemplo representativo; no projeto real você completa todos.

  fotografo: {
    nome: "Lucas Mendes Fotografia",
    corPrimaria: "#d4a373",
    corSecundaria: "#1e1e1e",
    hero: {
      tipo: "video",
      src: "assets/video/portfolio.mp4",
      headline: "Registrando momentos que duram para sempre",
      subheadline: "Ensaios externos, eventos e books profissionais",
      cta1: { texto: "Ver Portfólio", link: "#portfolio" },
      cta2: { texto: "Falar no WhatsApp", link: "https://wa.me/..." }
    },
    blocosAtivos: ["hero","diferencial","servicos","processo","portfolio","agendamento","avaliacoes","faq","localizacao","ctaFinal"],
    diferenciais: [
      { icone: "📷", titulo: "Equipamento Full Frame", desc: "Câmeras e lentes de última geração" },
      { icone: "🎬", titulo: "Making Of em Vídeo", desc: "Incluímos vídeos de bastidores" },
      { icone: "🖼️", titulo: "Edição Premium", desc: "Tratamento profissional de todas as fotos" }
    ],
    servicos: [
      { icone: "💍", titulo: "Casamentos", desc: "Cobertura completa com álbum digital" },
      { icone: "👶", titulo: "Ensaios Infantis", desc: "Fotos lúdicas em estúdio ou ao ar livre" },
      { icone: "🌆", titulo: "Ensaios Externos", desc: "Book em parques, praias e pontos turísticos" },
      { icone: "🏢", titulo: "Eventos Corporativos", desc: "Congressos, formaturas e confraternizações" }
    ],
    processo: [
      { titulo: "Briefing", desc: "Conversamos sobre o seu estilo e local" },
      { titulo: "Ensaio", desc: "Realizamos as fotos com direção natural" },
      { titulo: "Pós-produção", desc: "Editamos e entregamos em alta resolução" }
    ],
    portfolio: {
      categorias: ["Casamentos", "Infantil", "Externo"],
      imagens: [
        { src: "assets/img/foto1.jpg", cat: "Casamentos" },
        { src: "assets/img/foto2.jpg", cat: "Infantil" }
      ]
    },
    agendamento: { tipo: "form", action: "#" },
    avaliacoes: [
      { nome: "Amanda R.", texto: "As fotos do meu casamento ficaram perfeitas!", nota: 5 }
    ],
    faq: [
      { pergunta: "Qual o prazo de entrega?", resposta: "Álbuns digitais em até 15 dias úteis." }
    ],
    localizacao: { endereco: "Estúdio no Centro – Rua das Artes, 50", mapa: "https://maps..." },
    ctaFinal: { texto: "Vamos criar algo juntos?", cta: "Solicitar Orçamento", link: "#agendamento" }
  }
};

// Nicho "outro" – template genérico que o usuário pode preencher (exemplo)
nichos.outro = {
  nome: "Seu Negócio",
  corPrimaria: "#3b82f6",
  corSecundaria: "#0f172a",
  hero: {
    tipo: "imagem",
    src: "assets/img/placeholder.jpg",
    headline: "Sua headline impactante aqui",
    subheadline: "Subtítulo que reforça o valor",
    cta1: { texto: "CTA Principal", link: "#contato" },
    cta2: { texto: "Falar no WhatsApp", link: "https://wa.me/..." }
  },
  blocosAtivos: ["hero","diferencial","servicos","agendamento","avaliacoes","faq","localizacao","ctaFinal"],
  diferenciais: [
    { icone: "⭐", titulo: "Diferencial 1", desc: "Descreva seu diferencial" }
  ],
  servicos: [
    { icone: "🛠️", titulo: "Serviço 1", desc: "Descrição curta" }
  ],
  processo: [...]
  // ... preencha com dados genéricos
};