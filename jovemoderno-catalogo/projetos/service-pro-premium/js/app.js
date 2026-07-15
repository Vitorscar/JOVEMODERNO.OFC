let configAtual = null;

function selecionarNicho(nichoKey) {
  if (nichoKey === 'outro') {
    // Permite carregar JSON customizado (ex: de localStorage ou fetch)
    const customJSON = localStorage.getItem('customNicho');
    if (customJSON) {
      configAtual = JSON.parse(customJSON);
    } else {
      configAtual = nichos.outro; // fallback genérico
    }
  } else {
    configAtual = nichos[nichoKey];
  }

  aplicarTema(configAtual);
  renderizarSite(configAtual);
  
  document.getElementById('onboarding').style.display = 'none';
  document.getElementById('site-preview').style.display = 'block';

  inicializarScripts();
}

function aplicarTema(config) {
  document.documentElement.style.setProperty('--cor-primaria', config.corPrimaria);
  document.documentElement.style.setProperty('--cor-secundaria', config.corSecundaria);
}

function renderizarSite(config) {
  const container = document.getElementById('site-preview');
  let html = '';
  config.blocosAtivos.forEach(chave => {
    if (geradores[chave]) {
      html += geradores[chave](config);
    }
  });
  container.innerHTML = html;
}

function inicializarScripts() {
  // FAQ Accordion
  document.querySelectorAll('.faq-pergunta').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('ativa');
    });
  });

  // Slider Antes/Depois (arrastar)
  document.querySelectorAll('.slider-comparador').forEach(slider => {
    slider.addEventListener('input', (e) => {
      const container = e.target.parentElement;
      const depois = container.querySelector('.depois');
      depois.style.width = `${e.target.value}%`;
    });
  });

  // Filtro de portfólio
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      document.querySelectorAll('.item-portfolio').forEach(item => {
        item.style.display = (cat === 'Todos' || item.dataset.cat === cat) ? 'block' : 'none';
      });
    });
  });

  // Carrossel de avaliações (simples scroll horizontal)
  const carrossel = document.querySelector('.carrossel-avaliacoes');
  if (carrossel) {
    // Lógica de scroll infinito ou apenas estilo CSS overflow-x: auto
  }

  // Rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Se quisermos um botão "Editar" para o nicho outro, podemos expor uma interface