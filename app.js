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
  { id: "ana-oliveira", name: "Dra. Ana Oliveira", focus: "Psicologia clínica · adultos", availability: "Online · acolhimento individual", initials: "AO", tags: ["ansiedade", "autoestima"], bio: "Acompanha pessoas adultas em momentos de transição, ansiedade e construção de autoestima. Trabalha com escuta ativa e sem julgamentos.", approach: "Terapia cognitivo-comportamental (TCC)", sessionLength: "50 minutos", days: ["Segunda", "Quarta", "Sexta"], times: ["09:00", "14:00", "16:00"] },
  { id: "rafael-martins", name: "Dr. Rafael Martins", focus: "Ansiedade e autocuidado", availability: "Online · sessão inicial", initials: "RM", tags: ["ansiedade"], bio: "Foca em quadros de ansiedade e rotinas de autocuidado, com pequenos ajustes possíveis no dia a dia.", approach: "Terapia breve e práticas de mindfulness", sessionLength: "45 minutos", days: ["Terça", "Quinta"], times: ["08:00", "11:00", "15:30"] },
  { id: "luiza-santos", name: "Dra. Luiza Santos", focus: "Bem-estar emocional", availability: "Online · agenda demonstrativa", initials: "LS", tags: ["autoestima", "luto"], bio: "Trabalha temas de autoestima, perdas e fases de recomeço, em um ritmo respeitoso e acolhedor.", approach: "Abordagem humanista e narrativa", sessionLength: "50 minutos", days: ["Segunda", "Quinta", "Sábado"], times: ["10:00", "13:00", "17:00"] },
  { id: "carla-mendes", name: "Dra. Carla Mendes", focus: "Relacionamentos e família", availability: "Online · casal e individual", initials: "CM", tags: ["relacionamentos"], bio: "Acompanha relações afetivas e familiares, com foco em comunicação não violenta e limites saudáveis.", approach: "Terapia sistêmica e comunicação não violenta", sessionLength: "50 minutos", days: ["Terça", "Sexta"], times: ["09:30", "14:30", "18:00"] },
  { id: "pedro-almeida", name: "Dr. Pedro Almeida", focus: "Luto e transições", availability: "Online · acolhimento em perdas", initials: "PA", tags: ["luto", "ansiedade"], bio: "Acolhe pessoas em processos de luto, mudanças de ciclo e reorganização de vida.", approach: "Abordagem existencial e narrativa", sessionLength: "50 minutos", days: ["Quarta", "Quinta"], times: ["10:30", "15:00"] },
  { id: "ines-duarte", name: "Dra. Inês Duarte", focus: "Autoestima e imagem corporal", availability: "Online · sessões individuais", initials: "ID", tags: ["autoestima"], bio: "Trabalha a relação com o próprio corpo e a autoestima, com foco em gentileza e sem metas rígidas.", approach: "TCC com foco em autoimagem", sessionLength: "45 minutos", days: ["Segunda", "Quarta"], times: ["11:00", "16:30"] },
];

const professionalTags = [
  { key: "todos", label: "Todos" },
  { key: "ansiedade", label: "Ansiedade" },
  { key: "autoestima", label: "Autoestima" },
  { key: "relacionamentos", label: "Relacionamentos" },
  { key: "luto", label: "Luto" },
];

const hobbyCategories = [
  { id: "pintura", label: "Pintura e desenho", description: "Ateliês, oficinas e clubes de desenho." },
  { id: "musica", label: "Música", description: "Escolas, ensaios abertos e rodas de violão." },
  { id: "leitura", label: "Leitura", description: "Bibliotecas, sebos e clubes de leitura." },
  { id: "jardinagem", label: "Jardinagem", description: "Hortas comunitárias e oficinas de plantas." },
  { id: "ceramica", label: "Cerâmica", description: "Ateliês de cerâmica e modelagem." },
  { id: "fotografia", label: "Fotografia", description: "Caminhadas fotográficas e oficinas." },
];

const exercisePlaces = [
  { name: "Parque Central", distance: 0.8, type: "Parque", schedule: "Aberto 24h" },
  { name: "Praça da Matriz", distance: 1.5, type: "Praça", schedule: "Aberto 24h" },
  { name: "Academia Comunitária", distance: 2.1, type: "Academia", schedule: "Seg-Sex · 06h-22h" },
];

// 🌿 NOVO: exercícios personalizados (só aparecem após consulta com nutricionista)
const customExercises = [
  { title: "Caminhada leve no parque", duration: "25 min", focus: "Ao ar livre · baixo impacto" },
  { title: "Alongamento matinal", duration: "15 min", focus: "Mobilidade e respiração" },
  { title: "Mobilidade de coluna e ombros", duration: "20 min", focus: "Relaxamento" },
  { title: "Yoga suave", duration: "30 min", focus: "Corpo e mente" },
  { title: "Dança livre em casa", duration: "20 min", focus: "Leveza e alegria" },
  { title: "Exercícios de respiração", duration: "10 min", focus: "Pausa e presença" },
];

const nutritionists = [
  { id: "camila", name: "Dra. Camila Reis", focus: "Nutrição clínica e bem-estar", initials: "CR", crm: "CRN-3 12345" },
  { id: "juliana", name: "Dra. Juliana Costa", focus: "Nutrição esportiva e funcional", initials: "JC", crm: "CRN-3 67890" },
];

const dietPlanSample = [
  { meal: "Café da manhã", time: "07:30", items: "Frutas da estação, aveia e um café com calma." },
  { meal: "Lanche da manhã", time: "10:00", items: "Castanhas e água. Uma pausa breve entre tarefas." },
  { meal: "Almoço", time: "12:30", items: "Proteína, arroz integral, feijão e salada colorida." },
  { meal: "Lanche da tarde", time: "15:30", items: "Iogurte natural com frutas ou uma banana." },
  { meal: "Jantar", time: "19:30", items: "Uma refeição leve, com atenção ao que faz bem." },
];

const workoutPlanSample = [
  { day: "Segunda", title: "Caminhada leve + alongamento", duration: "30 min", focus: "Corpo inteiro" },
  { day: "Quarta", title: "Mobilidade e respiração", duration: "20 min", focus: "Relaxamento" },
  { day: "Sexta", title: "Caminhada em parque + alongamento", duration: "40 min", focus: "Leve" },
];

const WEEK_DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const SCHEDULE_TIMES = ["07:00", "09:00", "12:00", "15:00", "18:00", "20:00"];

const dailyRecommendations = {
  tranquilo: { title: "Aproveite o que está fazendo bem", description: "Você sinalizou que está em um momento mais tranquilo. Escolha uma ideia leve, sem transformar autocuidado em obrigação.", items: [
    { pillar: "Terapia", text: "Anote algo que gostaria de compartilhar em uma próxima conversa." },
    { pillar: "Hobbies", text: "Reserve alguns minutos para um interesse que lhe dá prazer." },
    { pillar: "Movimento", text: "Escolha uma caminhada ou alongamento que seja confortável." },
    { pillar: "Alimentação", text: "Faça uma refeição com calma, prestando atenção no que gosta." }
  ] },
  "mais-ou-menos": { title: "Pequenos passos também contam", description: "Como hoje parece estar mais ou menos, prefira uma ideia simples e possível. Você pode escolher só uma.", items: [
    { pillar: "Terapia", text: "Escreva em poucas palavras o que está ocupando sua mente." },
    { pillar: "Hobbies", text: "Ouça uma música ou faça algo de que gosta por cinco minutos." },
    { pillar: "Movimento", text: "Faça uma pausa breve ou alongue-se se isso parecer confortável." },
    { pillar: "Alimentação", text: "Tente fazer sua próxima refeição sem pressa, do jeito que puder." }
  ] },
  dificil: { title: "Menos cobrança, mais acolhimento", description: "Você indicou que hoje está difícil. Não precisa dar conta de tudo; escolha uma ideia de conforto e procure apoio se quiser.", items: [
    { pillar: "Terapia", text: "Se quiser, converse com alguém de confiança ou com uma pessoa profissional." },
    { pillar: "Hobbies", text: "Coloque uma música ou escolha algo familiar e reconfortante." },
    { pillar: "Movimento", text: "Se fizer sentido, sente-se em um lugar confortável e faça uma pausa." },
    { pillar: "Alimentação", text: "Se puder, tome um pouco de água ou escolha algo simples para comer." }
  ] },
};

const dialog = document.querySelector("#app-dialog");
const dialogContent = document.querySelector("#dialog-content");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function defaultState() {
  return {
    name: "",
    mood: "",
    lastVisit: "",
    existingHobby: "",
    workoutAddress: "",
    nutritionistApproved: false,
    nutritionistScheduled: "",
    nutritionistName: "",
    schedule: [],
  };
}

function readState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState();
    const parsed = JSON.parse(saved);
    return {
      name: typeof parsed.name === "string" ? parsed.name : "",
      mood: typeof parsed.mood === "string" && ["tranquilo", "mais-ou-menos", "dificil"].includes(parsed.mood) ? parsed.mood : "",
      lastVisit: typeof parsed.lastVisit === "string" ? parsed.lastVisit : "",
      existingHobby: typeof parsed.existingHobby === "string" ? parsed.existingHobby : "",
      workoutAddress: typeof parsed.workoutAddress === "string" ? parsed.workoutAddress : "",
      nutritionistApproved: parsed.nutritionistApproved === true,
      nutritionistScheduled: typeof parsed.nutritionistScheduled === "string" ? parsed.nutritionistScheduled : "",
      nutritionistName: typeof parsed.nutritionistName === "string" ? parsed.nutritionistName : "",
      schedule: Array.isArray(parsed.schedule) ? parsed.schedule.filter(item => item && item.id && item.day && item.time && item.title) : [],
    };
  } catch (error) {
    return defaultState();
  }
}

let state = readState();
let toastTimer;
let picker = null;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    showToast("Não foi possível salvar. Tente novamente.");
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
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function dailyRecommendationsView() {
  const recommendation = dailyRecommendations[state.mood];
  const suggestionCards = recommendation
    ? recommendation.items.map(({ pillar, text }) => `<li class="recommendation-card"><strong>${pillar}</strong><span>${text}</span></li>`).join("")
    : "";
  return `<section class="daily-recommendations" aria-labelledby="recommendation-title" aria-live="polite">
    <span class="recommendation-eyebrow">SUGESTÕES DE HOJE</span>
    <h3 class="recommendation-title" id="recommendation-title">${recommendation?.title || "Sua sugestão para hoje"}</h3>
    <p class="recommendation-description">${recommendation?.description || "Faça seu check-in para receber ideias leves de cuidado."}</p>
    ${suggestionCards ? `<ul class="recommendation-list">${suggestionCards}</ul>` : ""}
  </section>`;
}

function loginView() {
  openDialog(`<span class="dialog-eyebrow">SEU ESPAÇO, NO SEU TEMPO</span>
    <h2 class="dialog-heading" id="dialog-title">Que bom ter você aqui.</h2>
    <p class="dialog-lead">Entre para acessar seu espaço de acolhimento e bem-estar.</p>
    <div class="demo-note">Este é um protótipo: use qualquer e-mail ou CPF e uma senha de 4 ou mais caracteres.</div>
    <form id="login-form" novalidate>
      <div class="form-field"><label for="user-id">E-mail ou CPF</label><input id="user-id" name="userId" autocomplete="username" placeholder="voce@email.com ou seu CPF" required></div>
      <div class="form-field"><label for="user-password">Senha</label><input id="user-password" name="password" type="password" autocomplete="current-password" placeholder="Sua senha de demonstração" required></div>
      <div class="form-error" id="form-error" role="alert"></div>
      <div class="form-footer"><button class="button button-primary" type="submit">Entrar no meu espaço <span aria-hidden="true">↗</span></button><button class="form-link" type="button" data-action="guest">Conhecer sem entrar</button></div>
    </form>`, "#user-id");
}

function dashboardView() {
  const firstName = state.name ? state.name.split(/\s+/)[0] : "você";
  const moodOptions = [
    { key: "tranquilo", emoji: "🌿", label: "Tranquilo" },
    { key: "mais-ou-menos", emoji: "☁️", label: "Mais ou menos" },
    { key: "dificil", emoji: "🌧️", label: "Difícil" },
  ];
  const moodButtons = moodOptions.map(({ key, emoji, label }) => `<button class="mood-choice" type="button" data-mood="${key}" aria-pressed="${state.mood === key}"><span aria-hidden="true">${emoji}</span>${label}</button>`).join("");
  const pillarCards = Object.entries(pillars).map(([key, pillar]) => `<button class="dashboard-pillar" type="button" data-pillar="${key}">
    <span class="dashboard-pillar-icon" aria-hidden="true">${pillar.icon}</span>
    <span><strong>${pillar.title}</strong><small>${key === "terapia" ? "Conheça profissionais" : "Descubra um pequeno passo"}</small></span>
  </button>`).join("");
  const today = new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
  const scheduleCount = state.schedule.length;
  openDialog(`<div class="dashboard-top">
    <div><span class="dialog-eyebrow">${escapeHTML(today.toUpperCase())} · SEU ESPAÇO</span><h2 class="dashboard-name" id="dialog-title">Olá, ${escapeHTML(firstName)}.</h2><span class="dashboard-date">Que bom que você está aqui.</span></div>
  </div>
  <div class="dashboard-mood"><strong>Como você está se sentindo agora?</strong><div class="mood-choices">${moodButtons}</div></div>
  <a class="dashboard-emergency" href="#emergencia" data-action="close-and-emergency"><span>Se precisar de apoio emocional agora</span><strong>CVV · 188 ↗</strong></a>
  ${dailyRecommendationsView()}
  <h3 class="dashboard-section-title">Seu cuidado, em quatro pilares</h3>
  <div class="dashboard-pillars">${pillarCards}</div>
  <button class="dashboard-schedule-cta" type="button" data-action="view-schedule">📅 Ver meu cronograma ${scheduleCount ? `· ${scheduleCount} ${scheduleCount === 1 ? "item" : "itens"}` : ""} <span aria-hidden="true">→</span></button>
  <button class="form-link dashboard-exit" type="button" data-action="logout">Sair deste espaço</button>`);
}

function professionalsView(filter = "todos") {
  const visible = filter === "todos" ? professionals : professionals.filter((p) => p.tags.includes(filter));
  const filterChips = professionalTags.map(({ key, label }) => `<button class="pro-filter" type="button" data-action="filter-pros" data-filter="${key}" aria-pressed="${filter === key}">${label}</button>`).join("");
  const cards = visible.length
    ? visible.map(({ id, name, focus, availability, initials }) => `<article class="professional-card">
        <span class="professional-avatar" aria-hidden="true">${initials}</span>
        <span class="professional-details"><strong>${name}</strong><span>${focus}</span><span>${availability}</span></span>
        <button class="button button-outline" type="button" data-action="open-pro" data-pro="${id}">Conhecer</button>
      </article>`).join("")
    : `<p class="demo-note">Nenhum perfil para este tema. Toque em <strong>Todos</strong> para ver a lista completa.</p>`;
  openDialog(`<span class="dialog-eyebrow">ACOLHIMENTO PROFISSIONAL</span>
    <h2 class="dialog-heading" id="dialog-title">Talvez, uma conversa?</h2>
    <p class="dialog-lead">Conheça perfis demonstrativos. Você merece encontrar alguém com quem se sinta confortável.</p>
    <div class="pro-filters" role="group" aria-label="Filtrar por tema">${filterChips}</div>
    <div class="professional-list">${cards}</div>
    <div class="form-footer"><button class="button button-outline" type="button" data-action="dashboard">Voltar ao meu espaço</button></div>`);
}

function professionalDetailView(id) {
  const pro = professionals.find((p) => p.id === id);
  if (!pro) return;
  const tags = pro.tags.map((key) => professionalTags.find((t) => t.key === key)?.label).filter(Boolean).join(" · ");
  openDialog(`<span class="dialog-eyebrow">CONHEÇA MELHOR</span>
    <h2 class="dialog-heading" id="dialog-title">${pro.name}</h2>
    <div class="pro-detail-hero">
      <span class="professional-avatar" aria-hidden="true">${pro.initials}</span>
      <div><strong>${pro.focus}</strong><span>${pro.availability}</span><span>Temas: ${tags || "—"}</span></div>
    </div>
    <div class="pro-detail-body">
      <div class="pro-detail-block"><strong>Sobre</strong><p>${pro.bio}</p></div>
      <div class="pro-detail-block"><strong>Abordagem</strong><p>${pro.approach} · Sessões de ${pro.sessionLength}</p></div>
    </div>
    <div class="form-footer">
      <button class="button button-primary" type="button" data-action="open-schedule-pro" data-pro="${pro.id}">Escolher horário <span aria-hidden="true">↗</span></button>
      <button class="button button-outline" type="button" data-action="professionals">Voltar à lista</button>
    </div>`);
}

function hobbiesView() {
  const pillar = pillars.hobbies;
  const hobbyOptions = hobbyCategories.map(c => `<option value="${c.id}" ${state.existingHobby === c.id ? 'selected' : ''}>${c.label}</option>`).join("");
  const hobbyTiles = hobbyCategories.map(c => `<button class="hobby-tile" type="button" data-action="schedule-hobby-direct" data-hobby="${c.id}">
    <span class="hobby-title">${c.label}</span>
    <span class="hobby-desc">${c.description}</span>
  </button>`).join("");
  openDialog(`
    <span class="dialog-eyebrow">EXPRESSÃO · HOBBIES</span>
    <h2 class="dialog-heading" id="dialog-title">${pillar.title}</h2>
    <p class="dialog-lead">${pillar.intro}</p>
    <div class="pillar-detail"><strong>Uma ideia gentil</strong><p>${pillar.prompt}</p></div>
    <div class="address-form">
      <label for="current-hobby">Qual hobbie você já faz?</label>
      <div class="address-input-row">
        <select id="current-hobby">
          <option value="">Selecione um hobbie...</option>
          ${hobbyOptions}
        </select>
        <button class="button button-primary" type="button" data-action="save-existing-hobby">Salvar</button>
      </div>
    </div>
    <h3 class="dashboard-section-title">Sugestões para você</h3>
    <div class="hobby-grid">${hobbyTiles}</div>
    <div class="form-footer">
      <button class="button button-outline" type="button" data-action="dashboard">Voltar</button>
      <button class="button button-text" type="button" data-action="view-schedule">Ver cronograma <span aria-hidden="true">→</span></button>
    </div>
  `);
}

// 🌿 MOVIMENTO: lugares sempre visíveis (após CEP) + "Monte seu treino" bloqueada/liberada
function movimentoView() {
  const pillar = pillars.movimento;

  // Seção de endereço — sempre visível para buscar lugares
  const addressSection = state.workoutAddress
    ? `<div class="address-info">
         <strong>Seu endereço</strong>
         <span>${escapeHTML(state.workoutAddress)}</span>
         <button class="form-link" type="button" data-action="edit-workout-address">Editar</button>
       </div>`
    : `<div class="address-form">
         <label for="workout-address-input">Informe seu CEP para vermos locais de exercício perto de você</label>
         <div class="address-input-row">
           <input id="workout-address-input" placeholder="Ex: 01310-100 ou Pinheiros, SP" autocomplete="postal-code" />
           <button class="button button-primary" type="button" data-action="save-workout-address">Buscar</button>
         </div>
       </div>`;

  // Lista de lugares próximos — só aparece após informar o CEP
  const placesSection = state.workoutAddress
    ? `<h3 class="dashboard-section-title">Lugares perto de você para se movimentar</h3>
       <div class="place-list">
         ${exercisePlaces.map(p => `
           <article class="place-card">
             <div class="place-info">
               <strong>${p.name}</strong>
               <span>${p.type} · ${p.schedule}</span>
               <span class="place-distance">${String(p.distance).replace(".", ",")} km</span>
             </div>
           </article>
         `).join("")}
       </div>
       <div class="workout-map">
         <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6700%2C-23.5920%2C-46.6480%2C-23.5820&layer=mapnik&marker=-23.5870%2C-46.6580" loading="lazy" title="Mapa demonstrativo"></iframe>
         <small>Mapa ilustrativo — os locais reais podem variar conforme seu endereço.</small>
       </div>`
    : "";

  // Seção "Monte seu treino" — bloqueada até consultar nutricionista
  const customWorkoutSection = state.nutritionistApproved
    ? `<h3 class="dashboard-section-title">Monte seu treino</h3>
       <p class="dialog-lead" style="margin-bottom:10px;">Agora que você conversou com ${escapeHTML(state.nutritionistName || "uma profissional")}, pode escolher exercícios no seu ritmo.</p>
       <div class="workout-list">
         ${customExercises.map((ex, i) => `
           <article class="workout-card">
             <div class="workout-day">${ex.duration}</div>
             <div class="workout-info">
               <strong>${ex.title}</strong>
               <span>${ex.focus}</span>
             </div>
             <button class="button button-outline" type="button" data-action="schedule-custom-exercise" data-index="${i}">Agendar</button>
           </article>
         `).join("")}
       </div>`
    : `<h3 class="dashboard-section-title">Monte seu treino</h3>
       <div class="locked-card">
         <span class="status-badge">BLOQUEADO</span>
         <h3>Consulte um nutricionista para liberar</h3>
         <p>Para montar um treino personalizado com segurança, converse primeiro com uma profissional da área de nutrição. Ela vai avaliar seu momento e indicar o que faz sentido para o seu corpo.</p>
         <button class="button button-primary" type="button" data-action="go-nutrition" style="margin-top:6px;">
           Ir para Nutrição <span aria-hidden="true">↗</span>
         </button>
       </div>`;

  openDialog(`
    <span class="dialog-eyebrow">MOVIMENTO${state.nutritionistApproved ? " · LIBERADO" : ""}</span>
    <h2 class="dialog-heading" id="dialog-title">${pillar.title}</h2>
    <p class="dialog-lead">${pillar.intro}</p>
    <div class="pillar-detail">
      <strong>Uma ideia gentil</strong>
      <p>${pillar.prompt}</p>
    </div>

    ${addressSection}
    ${placesSection}

    ${customWorkoutSection}

    <div class="form-footer">
      <button class="button button-outline" type="button" data-action="dashboard">Voltar ao meu espaço</button>
      ${state.nutritionistApproved ? `<button class="button button-text" type="button" data-action="view-schedule">Ver cronograma <span aria-hidden="true">→</span></button>` : ""}
    </div>
  `);
}

function alimentacaoView() {
  const pillar = pillars.alimentacao;
  if (!state.nutritionistScheduled) {
    const nutCards = nutritionists.map(n => `<article class="nutritionist-card">
      <span class="professional-avatar" aria-hidden="true">${n.initials}</span>
      <div>
        <strong>${n.name}</strong>
        <span>${n.focus}</span>
        <small>${n.crm}</small>
      </div>
      <button class="button button-outline" type="button" data-action="schedule-nutritionist" data-id="${n.id}">Agendar</button>
    </article>`).join("");
    openDialog(`
      <span class="dialog-eyebrow">NUTRIÇÃO · CONSULTA</span>
      <h2 class="dialog-heading" id="dialog-title">${pillar.title}</h2>
      <p class="dialog-lead">${pillar.intro}</p>
      <div class="pillar-detail"><strong>Uma ideia gentil</strong><p>${pillar.prompt}</p></div>
      <h3 class="dashboard-section-title">Escolha uma profissional</h3>
      <div class="nutritionist-list">${nutCards}</div>
      <p class="demo-note">Ao agendar, você receberá um plano alimentar demonstrativo e o treino será liberado.</p>
      <div class="form-footer">
        <button class="button button-outline" type="button" data-action="dashboard">Voltar ao meu espaço</button>
      </div>
    `);
    return;
  }
  openDialog(`
    <span class="dialog-eyebrow">NUTRIÇÃO · PLANO ALIMENTAR</span>
    <h2 class="dialog-heading" id="dialog-title">Seu plano, com carinho.</h2>
    <p class="dialog-lead">Plano elaborado por <strong>${escapeHTML(state.nutritionistName)}</strong>. Consulta: ${escapeHTML(state.nutritionistScheduled)}.</p>
    <h3 class="dashboard-section-title">Seu dia alimentar</h3>
    <div class="diet-list">
      ${dietPlanSample.map((m, i) => `
        <article class="diet-card">
          <div class="diet-time">${m.time}</div>
          <div class="diet-info"><strong>${m.meal}</strong><span>${m.items}</span></div>
          <button class="button button-outline" type="button" data-action="schedule-meal" data-index="${i}">Agendar</button>
        </article>
      `).join("")}
    </div>
    <div class="form-footer">
      <button class="button button-outline" type="button" data-action="dashboard">Voltar ao meu espaço</button>
      <button class="button button-text" type="button" data-action="view-schedule">Ver cronograma →</button>
    </div>
  `);
}

function scheduleView() {
  const byDay = Object.fromEntries(WEEK_DAYS.map(d => [d, []]));
  state.schedule.forEach(item => { if (byDay[item.day]) byDay[item.day].push(item); });
  Object.values(byDay).forEach(arr => arr.sort((a, b) => a.time.localeCompare(b.time)));
  const hasAny = state.schedule.length > 0;
  openDialog(`<span class="dialog-eyebrow">SEU CRONOGRAMA</span>
    <h2 class="dialog-heading" id="dialog-title">Sua semana, do seu jeito.</h2>
    <p class="dialog-lead">Um pequeno mapa da sua rotina de cuidado — sem cobrança, só lembrete.</p>
    ${hasAny ? `<div class="week-grid">
      ${WEEK_DAYS.map(d => `<div class="week-col">
        <div class="week-day">${d.slice(0, 3)}</div>
        ${byDay[d].length ? byDay[d].map(item => `
          <div class="week-item" data-type="${item.type}">
            <span class="week-item-time">${item.time}</span>
            <strong>${escapeHTML(item.title)}</strong>
            ${item.subtitle ? `<small>${escapeHTML(item.subtitle)}</small>` : ""}
            <button class="week-item-remove" type="button" data-action="remove-item" data-id="${item.id}" aria-label="Remover">×</button>
          </div>
        `).join("") : `<span class="week-empty">—</span>`}
      </div>`).join("")}
    </div>` : `<div class="locked-card empty-schedule">
      <h3>Seu cronograma está vazio</h3>
      <p>Quando você agendar um hobby, treino ou refeição, eles aparecerão aqui.</p>
    </div>`}
    <div class="form-footer">
      <button class="button button-outline" type="button" data-action="dashboard">Voltar</button>
      ${hasAny ? `<button class="button button-text" type="button" data-action="clear-schedule">Limpar</button>` : ""}
    </div>`);
}

function openPicker(pickerData) {
  picker = pickerData;
  renderPicker();
}

function renderPicker() {
  if (!picker) return;
  const ready = Boolean(picker.day && picker.time);
  const summary = ready ? `Escolha: <strong>${picker.day}</strong> às <strong>${picker.time}</strong>.` : "Escolha um dia e um horário.";
  const dayChips = WEEK_DAYS.map(d => `<button class="schedule-chip" type="button" data-action="pick-day" data-day="${d}" aria-pressed="${picker.day === d}">${d}</button>`).join("");
  const timeChips = SCHEDULE_TIMES.map(t => `<button class="schedule-chip" type="button" data-action="pick-time" data-time="${t}" aria-pressed="${picker.time === t}">${t}</button>`).join("");
  openDialog(`<span class="dialog-eyebrow">${picker.eyebrow || "AGENDAR"}</span>
    <h2 class="dialog-heading" id="dialog-title">Quando fica bom?</h2>
    <p class="dialog-lead">${escapeHTML(picker.title)}${picker.subtitle ? ` · ${escapeHTML(picker.subtitle)}` : ""}</p>
    <div class="schedule-section"><strong>Dia</strong><div class="schedule-grid" role="group">${dayChips}</div></div>
    <div class="schedule-section"><strong>Horário</strong><div class="schedule-grid" role="group">${timeChips}</div></div>
    <p class="schedule-summary">${summary}</p>
    <div class="form-footer">
      <button class="button button-primary" type="button" data-action="confirm-pick" ${ready ? "" : "disabled"}>Confirmar</button>
      <button class="button button-outline" type="button" data-action="cancel-pick">Cancelar</button>
    </div>`);
}

function pillarView(key) {
  if (key === "hobbies") return hobbiesView();
  if (key === "movimento") return movimentoView();
  if (key === "alimentacao") return alimentacaoView();
  const pillar = pillars[key];
  if (!pillar) return;
  openDialog(`<span class="dialog-eyebrow">UM PASSO DE CADA VEZ</span>
    <h2 class="dialog-heading" id="dialog-title">${pillar.title}</h2>
    <p class="dialog-lead">${pillar.intro}</p>
    <div class="pillar-detail"><strong>Uma ideia gentil</strong><p>${pillar.prompt}</p></div>
    ${key === "terapia" ? `<div class="form-footer"><button class="button button-primary" type="button" data-action="professionals">Conhecer profissionais <span aria-hidden="true">↗</span></button><button class="button button-outline" type="button" data-action="dashboard">Voltar</button></div>` : `<div class="form-footer"><button class="button button-primary" type="button" data-action="checkin" data-pillar="${key}">Guardar ideia</button><button class="button button-outline" type="button" data-action="dashboard">Voltar</button></div>`}`);
}

function setMood(mood) {
  state.mood = mood;
  state.lastVisit = new Date().toISOString();
  if (!saveState()) return;
  dashboardView();
  dialog.querySelector(`[data-mood="${mood}"]`)?.focus();
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const moodButton = target.closest("[data-mood]");
  if (moodButton) { setMood(moodButton.getAttribute("data-mood")); return; }
  const actionElement = target.closest("[data-action]");
  const pillarElement = target.closest("[data-pillar]");
  if (pillarElement && !actionElement) { pillarView(pillarElement.getAttribute("data-pillar")); return; }
  if (!actionElement) return;
  const action = actionElement.getAttribute("data-action");
  if (action !== "close-and-emergency") event.preventDefault();
  switch (action) {
    case "login":
    case "start":
      loginView(); return;
    case "close-dialog":
      dialog.close(); return;
    case "guest":
      if (!state.name) state.name = "você";
      if (saveState()) dashboardView(); return;
    case "dashboard":
      dashboardView(); return;
    case "professionals":
      professionalsView(); return;
    case "filter-pros": {
      const filter = actionElement.getAttribute("data-filter") || "todos";
      professionalsView(filter);
      dialog.querySelector(`[data-action="filter-pros"][data-filter="${filter}"]`)?.focus();
      return;
    }
    case "open-pro":
      professionalDetailView(actionElement.getAttribute("data-pro")); return;
    case "open-schedule-pro": {
      const pro = professionals.find(p => p.id === actionElement.getAttribute("data-pro"));
      if (!pro) return;
      openPicker({ eyebrow: "AGENDA DEMONSTRATIVA", title: pro.name, subtitle: pro.sessionLength, type: "therapy", payload: { title: `Consulta com ${pro.name}`, subtitle: pro.focus } });
      return;
    }
    /* HOBBIES */
    case "save-existing-hobby": {
      const input = dialog.querySelector("#current-hobby");
      const value = input ? input.value : "";
      state.existingHobby = value;
      if (saveState()) { hobbiesView(); showToast("Hobbie salvo."); }
      return;
    }
    case "schedule-hobby-direct": {
      const hobbyId = actionElement.getAttribute("data-hobby");
      const cat = hobbyCategories.find(c => c.id === hobbyId);
      if (!cat) return;
      openPicker({ eyebrow: "AGENDAR HOBBY", title: cat.label, subtitle: "Momento de autocuidado", type: "hobby", payload: { title: cat.label, subtitle: "" } });
      return;
    }
    /* MOVIMENTO */
    case "go-nutrition":
      alimentacaoView(); return;
    case "save-workout-address": {
      const input = dialog.querySelector("#workout-address-input");
      const value = input ? input.value.trim() : "";
      if (!value) { showToast("Informe um CEP ou endereço."); return; }
      state.workoutAddress = value.slice(0, 120);
      if (saveState()) { movimentoView(); showToast("Locais de exercício atualizados."); }
      return;
    }
    case "edit-workout-address":
      state.workoutAddress = "";
      if (saveState()) movimentoView();
      return;
    case "schedule-workout": {
      const idx = parseInt(actionElement.getAttribute("data-index"), 10);
      const w = workoutPlanSample[idx];
      if (!w) return;
      openPicker({ eyebrow: "AGENDAR TREINO", title: w.title, subtitle: w.duration, type: "workout", payload: { title: w.title, subtitle: w.duration } });
      return;
    }
    // 🌿 NOVO: agendar exercício personalizado (só disponível após nutricionista)
    case "schedule-custom-exercise": {
      const idx = parseInt(actionElement.getAttribute("data-index"), 10);
      const ex = customExercises[idx];
      if (!ex) return;
      openPicker({
        eyebrow: "AGENDAR TREINO",
        title: ex.title,
        subtitle: ex.duration,
        type: "workout",
        payload: { title: ex.title, subtitle: `${ex.duration} · ${ex.focus}` }
      });
      return;
    }
    /* ALIMENTAÇÃO */
    case "schedule-nutritionist": {
      const nutId = actionElement.getAttribute("data-id");
      const nut = nutritionists.find(n => n.id === nutId);
      if (!nut) return;
      openPicker({ eyebrow: "AGENDAR NUTRICIONISTA", title: nut.name, subtitle: nut.crm, type: "nutritionist", payload: { nutId: nut.id, nutName: nut.name } });
      return;
    }
    case "schedule-meal": {
      const idx = parseInt(actionElement.getAttribute("data-index"), 10);
      const m = dietPlanSample[idx];
      if (!m) return;
      openPicker({ eyebrow: "AGENDAR REFEIÇÃO", title: m.meal, subtitle: m.items, type: "meal", payload: { title: m.meal, subtitle: m.time } });
      return;
    }
    /* PICKER */
    case "pick-day":
      if (!picker) return;
      picker.day = actionElement.getAttribute("data-day");
      renderPicker();
      return;
    case "pick-time":
      if (!picker) return;
      picker.time = actionElement.getAttribute("data-time");
      renderPicker();
      return;
    case "cancel-pick":
      picker = null;
      dashboardView();
      return;
    case "confirm-pick": {
      if (!picker || !picker.day || !picker.time) return;
      const { type, payload, day, time } = picker;
      if (type === "nutritionist") {
        state.nutritionistApproved = true;
        state.nutritionistScheduled = `${day} · ${time}`;
        state.nutritionistName = payload.nutName;
        if (!saveState()) return;
        picker = null;
        openDialog(`
          <span class="dialog-eyebrow">CONSULTA AGENDADA</span>
          <h2 class="dialog-heading" id="dialog-title">Tudo anotado.</h2>
          <p class="dialog-lead">Consulta com <strong>${payload.nutName}</strong> marcada para ${day} às ${time}.</p>
          <div class="demo-note">Seu plano alimentar já está disponível e o treino foi liberado.</div>
          <div class="form-footer">
            <button class="button button-primary" type="button" data-action="go-nutrition">Ver plano alimentar</button>
            <button class="button button-outline" type="button" data-action="dashboard">Voltar</button>
          </div>
        `);
        return;
      }
      if (payload && payload.title) {
        state.schedule.push({ id: "sched-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6), type, day, time, title: payload.title, subtitle: payload.subtitle });
        saveState();
        showToast(`Adicionado: ${payload.title} · ${day} às ${time}.`);
      }
      picker = null;
      scheduleView();
      return;
    }
    /* CRONOGRAMA */
    case "view-schedule":
      scheduleView(); return;
    case "remove-item": {
      const id = actionElement.getAttribute("data-id");
      state.schedule = state.schedule.filter(item => item.id !== id);
      if (saveState()) scheduleView();
      return;
    }
    case "clear-schedule":
      state.schedule = [];
      if (saveState()) scheduleView();
      return;
    case "logout":
      state = defaultState();
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      loginView();
      return;
    case "checkin":
      showToast("Ideia salva.");
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
    error.textContent = "Informe seu e-mail/CPF e uma senha de pelo menos 4 caracteres.";
    return;
  }
  const guessedName = userId.includes("@") ? userId.split("@")[0].split(/[._-]/)[0] : "você";
  state.name = guessedName.slice(0, 40);
  state.lastVisit = new Date().toISOString();
  if (saveState()) dashboardView();
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});