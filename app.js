const STORAGE_KEY = "mentaltech-demo-v1";

const pillars = {
  terapia: {
    title: "Terapia",
    icon: "♡",
    intro: "Acolhimento profissional para você explorar seus sentimentos com segurança, sem pressa e no seu ritmo.",
    prompt: "Que tal dar o primeiro passo e conhecer uma pessoa profissional?",
  },
  hobbies: {
    title: "Hobbies",
    icon: "✳",
    intro: "Criatividade e curiosidade também merecem espaço. Escolha uma atividade pelo prazer de experimentar, não pela obrigação de acertar.",
    prompt: "Ideia para hoje: reserve dez minutos para algo que desperte sua curiosidade.",
  },
  movimento: {
    title: "Saúde física",
    icon: "↗",
    intro: "Movimento pode ser uma caminhada curta, alongamento ou uma pausa para respirar. Encontre uma opção gentil para o seu corpo hoje.",
    prompt: "Pequeno passo: faça uma pausa e perceba como seu corpo está se sentindo.",
  },
  alimentacao: {
    title: "Alimentação consciente",
    icon: "❋",
    intro: "Uma relação mais atenta com a alimentação começa com presença e cuidado, sem regras rígidas ou julgamentos.",
    prompt: "Ideia para hoje: faça uma refeição sem pressa e observe o que lhe faz bem.",
  },
};

const professionals = [
  {
    id: "ana-oliveira",
    name: "Dra. Ana Oliveira",
    focus: "Psicologia clínica · adultos",
    availability: "Online · acolhimento individual",
    initials: "AO",
    tags: ["ansiedade", "autoestima"],
    bio: "Acompanha pessoas adultas em momentos de transição, ansiedade e construção de autoestima. Trabalha com escuta ativa e sem julgamentos.",
    approach: "Terapia cognitivo-comportamental (TCC)",
    sessionLength: "50 minutos",
    days: ["Segunda", "Quarta", "Sexta"],
    times: ["09:00", "14:00", "16:00"],
  },
  {
    id: "rafael-martins",
    name: "Dr. Rafael Martins",
    focus: "Ansiedade e autocuidado",
    availability: "Online · sessão inicial",
    initials: "RM",
    tags: ["ansiedade"],
    bio: "Foca em quadros de ansiedade e rotinas de autocuidado, com pequenos ajustes possíveis no dia a dia.",
    approach: "Terapia breve e práticas de mindfulness",
    sessionLength: "45 minutos",
    days: ["Terça", "Quinta"],
    times: ["08:00", "11:00", "15:30"],
  },
  {
    id: "luiza-santos",
    name: "Dra. Luiza Santos",
    focus: "Bem-estar emocional",
    availability: "Online · agenda demonstrativa",
    initials: "LS",
    tags: ["autoestima", "luto"],
    bio: "Trabalha temas de autoestima, perdas e fases de recomeço, em um ritmo respeitoso e acolhedor.",
    approach: "Abordagem humanista e narrativa",
    sessionLength: "50 minutos",
    days: ["Segunda", "Quinta", "Sábado"],
    times: ["10:00", "13:00", "17:00"],
  },
  {
    id: "carla-mendes",
    name: "Dra. Carla Mendes",
    focus: "Relacionamentos e família",
    availability: "Online · casal e individual",
    initials: "CM",
    tags: ["relacionamentos"],
    bio: "Acompanha relações afetivas e familiares, com foco em comunicação não violenta e limites saudáveis.",
    approach: "Terapia sistêmica e comunicação não violenta",
    sessionLength: "50 minutos",
    days: ["Terça", "Sexta"],
    times: ["09:30", "14:30", "18:00"],
  },
  {
    id: "pedro-almeida",
    name: "Dr. Pedro Almeida",
    focus: "Luto e transições",
    availability: "Online · acolhimento em perdas",
    initials: "PA",
    tags: ["luto", "ansiedade"],
    bio: "Acolhe pessoas em processos de luto, mudanças de ciclo e reorganização de vida.",
    approach: "Abordagem existencial e narrativa",
    sessionLength: "50 minutos",
    days: ["Quarta", "Quinta"],
    times: ["10:30", "15:00"],
  },
  {
    id: "ines-duarte",
    name: "Dra. Inês Duarte",
    focus: "Autoestima e imagem corporal",
    availability: "Online · sessões individuais",
    initials: "ID",
    tags: ["autoestima"],
    bio: "Trabalha a relação com o próprio corpo e a autoestima, com foco em gentileza e sem metas rígidas.",
    approach: "TCC com foco em autoimagem",
    sessionLength: "45 minutos",
    days: ["Segunda", "Quarta"],
    times: ["11:00", "16:30"],
  },
];

const professionalTags = [
  { key: "todos", label: "Todos" },
  { key: "ansiedade", label: "Ansiedade" },
  { key: "autoestima", label: "Autoestima" },
  { key: "relacionamentos", label: "Relacionamentos" },
  { key: "luto", label: "Luto" },
];

let professionalFilter = "todos";
let schedulingState = { professionalId: null, day: null, time: null };

const dailyRecommendations = {
  tranquilo: {
    title: "Aproveite o que está fazendo bem",
    description: "Você sinalizou que está em um momento mais tranquilo. Escolha uma ideia leve, sem transformar autocuidado em obrigação.",
    items: [
      { pillar: "Terapia", text: "Anote algo que gostaria de compartilhar em uma próxima conversa." },
      { pillar: "Hobbies", text: "Reserve alguns minutos para um interesse que lhe dá prazer." },
      { pillar: "Movimento", text: "Escolha uma caminhada ou alongamento que seja confortável." },
      { pillar: "Alimentação", text: "Faça uma refeição com calma, prestando atenção no que gosta." },
    ],
  },
  "mais-ou-menos": {
    title: "Pequenos passos também contam",
    description: "Como hoje parece estar mais ou menos, prefira uma ideia simples e possível. Você pode escolher só uma.",
    items: [
      { pillar: "Terapia", text: "Escreva em poucas palavras o que está ocupando sua mente." },
      { pillar: "Hobbies", text: "Ouça uma música ou faça algo de que gosta por cinco minutos." },
      { pillar: "Movimento", text: "Faça uma pausa breve ou alongue-se se isso parecer confortável." },
      { pillar: "Alimentação", text: "Tente fazer sua próxima refeição sem pressa, do jeito que puder." },
    ],
  },
  dificil: {
    title: "Menos cobrança, mais acolhimento",
    description: "Você indicou que hoje está difícil. Não precisa dar conta de tudo; escolha uma ideia de conforto e procure apoio se quiser.",
    items: [
      { pillar: "Terapia", text: "Se quiser, converse com alguém de confiança ou com uma pessoa profissional." },
      { pillar: "Hobbies", text: "Coloque uma música ou escolha algo familiar e reconfortante." },
      { pillar: "Movimento", text: "Se fizer sentido, sente-se em um lugar confortável e faça uma pausa." },
      { pillar: "Alimentação", text: "Se puder, tome um pouco de água ou escolha algo simples para comer." },
    ],
  },
};

const dialog = document.querySelector("#app-dialog");
const dialogContent = document.querySelector("#dialog-content");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function readState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { name: "", mood: "", lastVisit: "" };
    const parsed = JSON.parse(saved);
    return {
      name: typeof parsed.name === "string" ? parsed.name : "",
      mood: typeof parsed.mood === "string" && ["tranquilo", "mais-ou-menos", "dificil"].includes(parsed.mood) ? parsed.mood : "",
      lastVisit: typeof parsed.lastVisit === "string" ? parsed.lastVisit : "",
    };
  } catch (error) {
    console.warn("Não foi possível carregar os dados de demonstração.", error);
    return { name: "", mood: "", lastVisit: "" };
  }
}

let state = readState();
let toastTimer;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Não foi possível salvar os dados de demonstração.", error);
    showToast("Não foi possível salvar. Tente novamente neste navegador.");
    return false;
  }
  return true;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function openDialog(content, initialFocusSelector) {
  dialogContent.innerHTML = content;
  if (!dialog.open) dialog.showModal();
  if (initialFocusSelector) dialog.querySelector(initialFocusSelector)?.focus();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function dailyRecommendationsView() {
  const recommendation = dailyRecommendations[state.mood];
  const suggestionCards = recommendation
    ? recommendation.items.map(({ pillar, text }) => `
      <li class="recommendation-card"><strong>${pillar}</strong><span>${text}</span></li>
    `).join("")
    : "";
  const title = recommendation?.title || "Sua sugestão para hoje";
  const description = recommendation?.description || "Faça seu check-in para receber ideias leves de cuidado, de acordo com como você está se sentindo.";

  return `
    <section class="daily-recommendations" aria-labelledby="recommendation-title" aria-live="polite">
      <span class="recommendation-eyebrow">SUGESTÕES DE HOJE</span>
      <h3 class="recommendation-title" id="recommendation-title">${title}</h3>
      <p class="recommendation-description">${description}</p>
      ${suggestionCards ? `<ul class="recommendation-list">${suggestionCards}</ul>` : ""}
    </section>
  `;
}

function loginView() {
  openDialog(`
    <span class="dialog-eyebrow">SEU ESPAÇO, NO SEU TEMPO</span>
    <h2 class="dialog-heading" id="dialog-title">Que bom ter você aqui.</h2>
    <p class="dialog-lead">Entre para acessar seu espaço de acolhimento e bem-estar.</p>
    <div class="demo-note">Este é um protótipo: use qualquer e-mail ou CPF e uma senha de 4 ou mais caracteres. Os dados ficam somente neste navegador.</div>
    <form id="login-form" novalidate>
      <div class="form-field"><label for="user-id">E-mail ou CPF</label><input id="user-id" name="userId" autocomplete="username" placeholder="voce@email.com ou seu CPF" required></div>
      <div class="form-field"><label for="user-password">Senha</label><input id="user-password" name="password" type="password" autocomplete="current-password" placeholder="Sua senha de demonstração" required></div>
      <div class="form-error" id="form-error" role="alert"></div>
      <div class="form-footer"><button class="button button-primary" type="submit">Entrar no meu espaço <span aria-hidden="true">↗</span></button><button class="form-link" type="button" data-action="guest">Conhecer sem entrar</button></div>
    </form>
  `, "#user-id");
}

function dashboardView() {
  const firstName = state.name ? state.name.split(/\s+/)[0] : "bem-vinda";
  const moodOptions = [
    { key: "tranquilo", emoji: "🌿", label: "Tranquilo" },
    { key: "mais-ou-menos", emoji: "☁️", label: "Mais ou menos" },
    { key: "dificil", emoji: "🌧️", label: "Difícil" },
  ];
  const moodButtons = moodOptions.map(({ key, emoji, label }) => `
    <button class="mood-choice" type="button" data-mood="${key}" aria-pressed="${state.mood === key}"><span aria-hidden="true">${emoji}</span>${label}</button>
  `).join("");
  const pillarCards = Object.entries(pillars).map(([key, pillar]) => `
    <button class="dashboard-pillar" type="button" data-pillar="${key}">
      <span class="dashboard-pillar-icon" aria-hidden="true">${pillar.icon}</span>
      <span><strong>${pillar.title}</strong><small>${key === "terapia" ? "Conheça profissionais" : "Descubra um pequeno passo"}</small></span>
    </button>
  `).join("");
  const today = new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
  openDialog(`
    <div class="dashboard-top">
      <div><span class="dialog-eyebrow">${escapeHTML(today.toUpperCase())} · SEU ESPAÇO</span><h2 class="dashboard-name" id="dialog-title">Olá, ${escapeHTML(firstName)}.</h2><span class="dashboard-date">Que bom que você está aqui.</span></div>
    </div>
    <div class="dashboard-mood"><strong>Como você está se sentindo agora?</strong><div class="mood-choices">${moodButtons}</div></div>
    <a class="dashboard-emergency" href="#emergencia" data-action="close-and-emergency"><span>Se precisar de apoio emocional agora</span><strong>CVV · 188 ↗</strong></a>
    ${dailyRecommendationsView()}
    <h3 class="dashboard-section-title">Seu cuidado, em quatro pilares</h3>
    <div class="dashboard-pillars">${pillarCards}</div>
    <button class="form-link dashboard-exit" type="button" data-action="logout">Sair deste espaço</button>
  `);
}

/* =========================================================
   TELA DE PSICÓLOGOS — lista com filtros
   ========================================================= */
function professionalsView(filter = professionalFilter) {
  professionalFilter = filter;
  const visible = filter === "todos"
    ? professionals
    : professionals.filter((p) => p.tags.includes(filter));

  const filterChips = professionalTags.map(({ key, label }) => `
    <button class="pro-filter" type="button" data-action="filter-pros" data-filter="${key}" aria-pressed="${filter === key}">${label}</button>
  `).join("");

  const cards = visible.length
    ? visible.map(({ id, name, focus, availability, initials }) => `
      <article class="professional-card">
        <span class="professional-avatar" aria-hidden="true">${initials}</span>
        <span class="professional-details"><strong>${name}</strong><span>${focus}</span><span>${availability}</span></span>
        <button class="button button-outline" type="button" data-action="open-pro" data-pro="${id}">Conhecer</button>
      </article>
    `).join("")
    : `<p class="demo-note">Nenhum perfil demonstrativo para este tema por aqui. Toque em <strong>Todos</strong> para ver a lista completa.</p>`;

  openDialog(`
    <span class="dialog-eyebrow">ACOLHIMENTO PROFISSIONAL</span>
    <h2 class="dialog-heading" id="dialog-title">Talvez, uma conversa?</h2>
    <p class="dialog-lead">Conheça perfis demonstrativos. Você merece encontrar alguém com quem se sinta confortável.</p>
    <div class="demo-note">Estes perfis e agendas são fictícios e servem apenas para demonstrar a navegação. Nenhum agendamento real será feito.</div>
    <div class="pro-filters" role="group" aria-label="Filtrar por tema">${filterChips}</div>
    <div class="professional-list">${cards}</div>
    <div class="form-footer"><button class="button button-outline" type="button" data-action="dashboard">Voltar ao meu espaço</button></div>
  `);
}

function professionalDetailView(id) {
  const pro = professionals.find((p) => p.id === id);
  if (!pro) return;
  const tags = pro.tags
    .map((key) => professionalTags.find((t) => t.key === key)?.label)
    .filter(Boolean)
    .join(" · ");
  openDialog(`
    <span class="dialog-eyebrow">CONHEÇA MELHOR</span>
    <h2 class="dialog-heading" id="dialog-title">${pro.name}</h2>
    <div class="pro-detail-hero">
      <span class="professional-avatar" aria-hidden="true">${pro.initials}</span>
      <div>
        <strong>${pro.focus}</strong>
        <span>${pro.availability}</span>
        <span>Temas: ${tags || "—"}</span>
      </div>
    </div>
    <div class="pro-detail-body">
      <div class="pro-detail-block"><strong>Sobre</strong><p>${pro.bio}</p></div>
      <div class="pro-detail-block"><strong>Abordagem</strong><p>${pro.approach} · Sessões de ${pro.sessionLength}</p></div>
    </div>
    <div class="demo-note">Perfil demonstrativo — nenhuma sessão real será agendada.</div>
    <div class="form-footer">
      <button class="button button-primary" type="button" data-action="open-schedule" data-pro="${pro.id}">Escolher horário <span aria-hidden="true">↗</span></button>
      <button class="button button-outline" type="button" data-action="professionals">Voltar à lista</button>
    </div>
  `);
}

function schedulingView(id) {
  schedulingState = { professionalId: id, day: null, time: null };
  renderScheduling();
}

function renderScheduling() {
  const pro = professionals.find((p) => p.id === schedulingState.professionalId);
  if (!pro) return;
  const dayChips = pro.days.map((d) => `
    <button class="schedule-chip" type="button" data-action="pick-day" data-day="${d}" aria-pressed="${schedulingState.day === d}">${d}</button>
  `).join("");
  const timeChips = pro.times.map((t) => `
    <button class="schedule-chip" type="button" data-action="pick-time" data-time="${t}" aria-pressed="${schedulingState.time === t}">${t}</button>
  `).join("");
  const ready = Boolean(schedulingState.day && schedulingState.time);
  const summary = ready
    ? `Você escolheu <strong>${schedulingState.day}</strong> às <strong>${schedulingState.time}</strong> com ${pro.name}.`
    : "Escolha um dia e um horário para ver o resumo.";

  openDialog(`
    <span class="dialog-eyebrow">AGENDA DEMONSTRATIVA</span>
    <h2 class="dialog-heading" id="dialog-title">Quando fica bom para você?</h2>
    <p class="dialog-lead">Estes são horários fictícios. Nada será reservado de verdade — é só para você sentir o fluxo.</p>
    <div class="schedule-section"><strong>Dia</strong><div class="schedule-grid" role="group" aria-label="Escolher dia">${dayChips}</div></div>
    <div class="schedule-section"><strong>Horário</strong><div class="schedule-grid" role="group" aria-label="Escolher horário">${timeChips}</div></div>
    <p class="schedule-summary" aria-live="polite">${summary}</p>
    <div class="form-footer">
      <button class="button button-primary" type="button" data-action="confirm-schedule" ${ready ? "" : "disabled"}>Confirmar demonstração <span aria-hidden="true">♡</span></button>
      <button class="button button-outline" type="button" data-action="open-pro" data-pro="${pro.id}">Voltar ao perfil</button>
    </div>
  `);
}

function pillarView(key) {
  const pillar = pillars[key];
  if (!pillar) return;
  openDialog(`
    <span class="dialog-eyebrow">UM PASSO DE CADA VEZ</span>
    <h2 class="dialog-heading" id="dialog-title">${pillar.title}</h2>
    <p class="dialog-lead">${pillar.intro}</p>
    <div class="pillar-detail"><strong>Uma ideia gentil</strong><p>${pillar.prompt}</p></div>
    ${key === "terapia"
      ? '<div class="form-footer"><button class="button button-primary" type="button" data-action="professionals">Conhecer profissionais <span aria-hidden="true">↗</span></button><button class="button button-outline" type="button" data-action="dashboard">Voltar ao meu espaço</button></div>'
      : `<div class="form-footer"><button class="button button-primary" type="button" data-action="checkin" data-pillar="${key}">Guardar esta ideia <span aria-hidden="true">♡</span></button><button class="button button-outline" type="button" data-action="dashboard">Voltar ao meu espaço</button></div>`
    }
  `);
}

function setMood(mood) {
  state.mood = mood;
  state.lastVisit = new Date().toISOString();
  if (!saveState()) return;
  dashboardView();
  dialog.querySelector(`[data-mood="${mood}"]`)?.focus();
  showToast("Obrigado por fazer essa pausa. Vamos no seu ritmo.");
}

/* =========================================================
   HANDLERS — unificados em um único listener
   ========================================================= */
document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const moodButton = target.closest("[data-mood]");
  if (moodButton) {
    setMood(moodButton.getAttribute("data-mood"));
    return;
  }

  const actionElement = target.closest("[data-action]");
  const pillarElement = target.closest("[data-pillar]");

  if (pillarElement && !actionElement) {
    pillarView(pillarElement.getAttribute("data-pillar"));
    return;
  }
  if (!actionElement) return;

  const action = actionElement.getAttribute("data-action");
  if (action !== "close-and-emergency") event.preventDefault();

  switch (action) {
    case "login":
    case "start":
      loginView();
      return;
    case "close-dialog":
      dialog.close();
      return;
    case "guest":
      if (!state.name) state.name = "amiga";
      if (saveState()) dashboardView();
      return;
    case "dashboard":
      dashboardView();
      return;
    case "professionals":
      professionalsView();
      return;
    case "filter-pros": {
      const filter = actionElement.getAttribute("data-filter") || "todos";
      professionalsView(filter);
      dialog.querySelector(`[data-action="filter-pros"][data-filter="${filter}"]`)?.focus();
      return;
    }
    case "open-pro":
      professionalDetailView(actionElement.getAttribute("data-pro"));
      return;
    case "open-schedule":
      schedulingView(actionElement.getAttribute("data-pro"));
      return;
    case "pick-day":
      schedulingState.day = actionElement.getAttribute("data-day");
      renderScheduling();
      dialog.querySelector(`[data-action="pick-day"][data-day="${schedulingState.day}"]`)?.focus();
      return;
    case "pick-time":
      schedulingState.time = actionElement.getAttribute("data-time");
      renderScheduling();
      dialog.querySelector(`[data-action="pick-time"][data-time="${schedulingState.time}"]`)?.focus();
      return;
    case "confirm-schedule": {
      const pro = professionals.find((p) => p.id === schedulingState.professionalId);
      if (!pro || !schedulingState.day || !schedulingState.time) return;
      const { day, time } = schedulingState;
      const firstName = state.name ? state.name.split(/\s+/)[0] : "amiga";
      schedulingState = { professionalId: null, day: null, time: null };
      openDialog(`
        <span class="dialog-eyebrow">SÓ UMA DEMONSTRAÇÃO</span>
        <h2 class="dialog-heading" id="dialog-title">Tudo anotado, ${escapeHTML(firstName)}.</h2>
        <p class="dialog-lead">Em um serviço real, você receberia uma confirmação. Aqui, guardamos só a sensação do primeiro passo.</p>
        <div class="pro-detail-hero">
          <span class="professional-avatar" aria-hidden="true">${pro.initials}</span>
          <div>
            <strong>${pro.name}</strong>
            <span>${day} · ${time} · ${pro.sessionLength}</span>
            <span>${pro.availability}</span>
          </div>
        </div>
        <div class="demo-note">Esta tela é parte do protótipo Mentaltech. Nenhum horário real foi reservado e nenhum dado foi enviado.</div>
        <div class="form-footer">
          <button class="button button-primary" type="button" data-action="dashboard">Voltar ao meu espaço <span aria-hidden="true">♡</span></button>
          <button class="button button-outline" type="button" data-action="professionals">Ver outros perfis</button>
        </div>
      `);
      return;
    }
    case "logout":
      state = { name: "", mood: "", lastVisit: "" };
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (error) {
        console.error("Não foi possível remover os dados de demonstração.", error);
        showToast("Não foi possível remover os dados deste navegador.");
      }
      loginView();
      return;
    case "checkin":
      showToast("Ideia salva para esta demonstração. Obrigado pela pausa.");
      dashboardView();
      return;
    case "close-and-emergency":
      dialog.close();
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      return;
    default:
      return;
  }
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener("submit", (event) => {
  if (!(event.target instanceof HTMLFormElement) || event.target.id !== "login-form") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const userId = String(formData.get("userId") || "").trim();
  const password = String(formData.get("password") || "");
  const error = document.querySelector("#form-error");
  if (!userId || password.length < 4) {
    error.textContent = "Informe seu e-mail ou CPF e uma senha de pelo menos 4 caracteres.";
    return;
  }
  const guessedName = userId.includes("@") ? userId.split("@")[0].split(/[._-]/)[0] : "amiga";
  state.name = guessedName.slice(0, 40);
  state.lastVisit = new Date().toISOString();
  if (saveState()) dashboardView();
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }
});