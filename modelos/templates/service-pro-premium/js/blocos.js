function gerarHero(config) {
  const h = config.hero;
  const bgStyle = h.tipo === 'video' 
    ? `<video autoplay muted loop src="${h.src}"></video>` 
    : `style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${h.src}') center/cover"`;
  return `
    <section class="hero" ${h.tipo === 'imagem' ? bgStyle : ''}>
      ${h.tipo === 'video' ? bgStyle : ''}
      <div class="hero-content">
        <h1>${h.headline}</h1>
        <p>${h.subheadline}</p>
        <div class="hero-botoes">
          <a href="${h.cta1.link}" class="btn-primario">${h.cta1.texto}</a>
          <a href="${h.cta2.link}" class="btn-secundario">${h.cta2.texto}</a>
        </div>
      </div>
    </section>
  `;
}

function gerarDiferencial(config) {
  const itens = config.diferenciais.map(d => `
    <div class="card-diferencial">
      <span class="icone">${d.icone}</span>
      <h3>${d.titulo}</h3>
      <p>${d.desc}</p>
    </div>
  `).join('');
  return `<section class="diferencial"><h2>Por que nos escolher?</h2><div class="grid-diferencial">${itens}</div></section>`;
}

function gerarServicos(config) {
  const cards = config.servicos.map(s => `
    <div class="card-servico">
      <span class="icone">${s.icone}</span>
      <h3>${s.titulo}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
  return `<section class="servicos"><h2>Nossos Serviços</h2><div class="grid-servicos">${cards}</div></section>`;
}

function gerarProcesso(config) {
  const passos = config.processo.map((p, i) => `
    <div class="passo">
      <div class="passo-numero">${i+1}</div>
      <h3>${p.titulo}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
  return `<section class="processo"><h2>Como funciona?</h2><div class="grid-processo">${passos}</div></section>`;
}

function gerarPortfolio(config) {
  const categorias = config.portfolio.categorias;
  let html = `<section class="portfolio"><h2>Portfólio</h2>`;
  html += `<div class="filtros-portfolio">`;
  categorias.forEach(cat => {
    html += `<button class="filtro-btn" data-cat="${cat}">${cat}</button>`;
  });
  html += `</div><div class="grid-portfolio">`;
  config.portfolio.imagens.forEach(img => {
    html += `<div class="item-portfolio" data-cat="${img.cat}"><img src="${img.src}" alt=""></div>`;
  });
  html += `</div></section>`;
  return html;
}

function gerarAntesDepois(config) {
  const slides = config.antesDepois.imagens.map(img => `
    <div class="comparador">
      <img src="${img.antes}" alt="Antes">
      <div class="depois">
        <img src="${img.depois}" alt="Depois">
      </div>
      <input type="range" min="0" max="100" value="50" class="slider-comparador">
    </div>
  `).join('');
  return `<section class="antes-depois"><h2>${config.antesDepois.titulo}</h2><div class="slider-container">${slides}</div></section>`;
}

function gerarEquipe(config) {
  const membros = config.equipe.map(m => `
    <div class="card-equipe">
      <img src="${m.foto}" alt="${m.nome}" class="foto-equipe">
      <h3>${m.nome}</h3>
      <p>${m.funcao}</p>
    </div>
  `).join('');
  return `<section class="equipe"><h2>Nossa Equipe</h2><div class="grid-equipe">${membros}</div></section>`;
}

function gerarPlanos(config) {
  const planosHTML = config.planos.map(p => `
    <div class="card-plano">
      <h3>${p.nome}</h3>
      <div class="preco">${p.preco}<span>/mês</span></div>
      <ul>${p.beneficios.map(b => `<li>✅ ${b}</li>`).join('')}</ul>
      <a href="#agendamento" class="btn-primario">Assinar</a>
    </div>
  `).join('');
  return `<section class="planos"><h2>Nossos Planos</h2><div class="grid-planos">${planosHTML}</div></section>`;
}

function gerarAgendamento(config) {
  const a = config.agendamento;
  if (a.tipo === 'embed') {
    return `<section id="agendamento" class="agendamento"><h2>Agende Agora</h2><div class="embed-agenda"><iframe src="${a.src}" width="100%" height="600"></iframe></div></section>`;
  } else {
    return `
      <section id="agendamento" class="agendamento">
        <h2>Agende Agora</h2>
        <form class="form-agendamento" action="${a.action}" method="POST">
          <input type="text" placeholder="Nome" required>
          <input type="tel" placeholder="WhatsApp" required>
          <button type="submit" class="btn-primario">Enviar</button>
        </form>
      </section>`;
  }
}

function gerarAvaliacoes(config) {
  const depoimentos = config.avaliacoes.map(d => `
    <div class="card-avaliacao">
      <div class="estrelas">${'⭐'.repeat(d.nota)}</div>
      <p>"${d.texto}"</p>
      <strong>- ${d.nome}</strong>
    </div>
  `).join('');
  return `<section class="avaliacoes"><h2>O que dizem nossos clientes</h2><div class="carrossel-avaliacoes">${depoimentos}</div></section>`;
}

function gerarFAQ(config) {
  const itens = config.faq.map((f, i) => `
    <div class="faq-item">
      <div class="faq-pergunta" data-index="${i}">
        ${f.pergunta}
        <span class="faq-seta">▼</span>
      </div>
      <div class="faq-resposta">${f.resposta}</div>
    </div>
  `).join('');
  return `<section class="faq"><h2>Perguntas Frequentes</h2>${itens}</section>`;
}

function gerarLocalizacao(config) {
  const loc = config.localizacao;
  return `
    <section class="localizacao">
      <h2>Onde Estamos</h2>
      <div class="mapa-container">
        <iframe src="${loc.mapa}" width="100%" height="300"></iframe>
      </div>
      <p class="endereco">📍 ${loc.endereco}</p>
    </section>`;
}

function gerarCTAFinal(config) {
  const ct = config.ctaFinal;
  return `
    <section class="cta-final">
      <h2>${ct.texto}</h2>
      <a href="${ct.link}" class="btn-primario">${ct.cta}</a>
    </section>`;
}

// Mapeamento dos geradores
const geradores = {
  hero: gerarHero,
  diferencial: gerarDiferencial,
  servicos: gerarServicos,
  processo: gerarProcesso,
  portfolio: gerarPortfolio,
  antesDepois: gerarAntesDepois,
  equipe: gerarEquipe,
  planos: gerarPlanos,
  agendamento: gerarAgendamento,
  avaliacoes: gerarAvaliacoes,
  faq: gerarFAQ,
  localizacao: gerarLocalizacao,
  ctaFinal: gerarCTAFinal
};