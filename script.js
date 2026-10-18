(() => {
  'use strict';

  const ICONS = {
    'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'house': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    'upload': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    'chart-column': '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    'car': '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    'circle-check': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'calendar': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    'funnel': '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>',
    'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    'square-pen': '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
    'trash': '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
    'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    'tag': '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    'eye': '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    'power': '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'menu': '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>'
  };

  const icon = (name, cls = '') =>
    `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  function hydrateIcons(root = document) {
    root.querySelectorAll('i[data-icon]').forEach(el => {
      el.outerHTML = icon(el.dataset.icon, el.className);
    });
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const pad = n => String(n).padStart(2, '0');
  const fmtDate = d => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;

  let toastTimer;
  function toast(msg, isError = false) {
    const t = $('#toast');
    t.textContent = msg;
    t.className = 'toast' + (isError ? ' toast--error' : '');
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 3500);
  }

  const ROLES = { ADM: 'Administrador', GES: 'Gestor de Frota', COL: 'Colaborador' };

  const STATUS = {
    regular: { label: 'Regular', cls: 'ok', icon: 'circle-check' },
    atencao: { label: 'Atenção', cls: 'warn', icon: 'clock' },
    vencido: { label: 'Vencido', cls: 'danger', icon: 'triangle-alert' }
  };

  const DOC_STATUS = {
    valido: { label: 'Válido', cls: 'ok', icon: 'circle-check' },
    proximo: { label: 'Próximo ao Vencimento', cls: 'warn', icon: 'clock' },
    vencido: { label: 'Vencido', cls: 'danger', icon: 'triangle-alert' }
  };

  const users = [
    { nome: 'João Silva', email: 'joao.silva@dexco.com', mat: 'COL001', perfil: 'COL', ativo: true, acesso: '17/11/2024' },
    { nome: 'Maria Santos', email: 'maria.santos@dexco.com', mat: 'GES001', perfil: 'GES', ativo: true, acesso: '17/11/2024' },
    { nome: 'Pedro Oliveira', email: 'pedro.oliveira@dexco.com', mat: 'ADM001', perfil: 'ADM', ativo: true, acesso: '16/11/2024' },
    { nome: 'Ana Costa', email: 'ana.costa@dexco.com', mat: 'COL002', perfil: 'COL', ativo: true, acesso: '14/11/2024' },
    { nome: 'Carlos Lima', email: 'carlos.lima@dexco.com', mat: 'GES002', perfil: 'GES', ativo: false, acesso: '19/10/2024' }
  ];

  const HOJE = (() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; })();
  const DIAS_ALERTA = 30; // até quantos dias antes do vencimento o documento fica em "Atenção"
  const addDias = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };
  const parseDate = str => { const [d, m, y] = str.split('/').map(Number); return new Date(y, m - 1, d); };
  const diffDias = (a, b) => Math.round((a - b) / 86400000);
  const seedDoc = (tipo, numero, offset) => {
    const val = addDias(HOJE, offset);
    const emi = new Date(val);
    emi.setMonth(emi.getMonth() - (tipo === 'Vistoria' ? 6 : 12));
    return { tipo, numero, emissao: fmtDate(emi), validade: fmtDate(val) };
  };

  const diasPara = d => diffDias(parseDate(d.validade), HOJE);
  const docStatus = d => { const n = diasPara(d); return n < 0 ? 'vencido' : n <= DIAS_ALERTA ? 'proximo' : 'valido'; };
  const vehicleStatus = v => {
    const st = v.docs.map(docStatus);
    return st.includes('vencido') ? 'vencido' : st.includes('proximo') ? 'atencao' : 'regular';
  };
  const docsAtencao = v => v.docs.filter(d => docStatus(d) !== 'valido').length;

  const tipos = [
    { nome: 'Cavalo Mecânico', ativo: true },
    { nome: 'Caminhão', ativo: true }
  ];

  const vehicles = [
    { placa: 'ABC-1234', renavam: '10293847561', chassi: '9BVAB30C4NE100001', marca: 'Volvo', modelo: 'FH 540', tipo: 'Cavalo Mecânico', ano: 2022, historico: [],
      docs: [seedDoc('CRLV', '45123789065', 220), seedDoc('Licenciamento', 'LIC-2024-011', 220), seedDoc('Vistoria', 'VIST-2024-007', 150)] },
    { placa: 'DEF-5678', renavam: '20384756192', chassi: '9BM958S77MB200002', marca: 'Mercedes-Benz', modelo: 'Actros', tipo: 'Cavalo Mecânico', ano: 2021, historico: [],
      docs: [seedDoc('CRLV', '98765432109', 5), seedDoc('Licenciamento', 'LIC-2023-045', 5), seedDoc('Vistoria', 'VIST-2024-023', 120)] },
    { placa: 'GHI-9012', renavam: '30495867203', chassi: '9BSR4X20003300003', marca: 'Scania', modelo: 'R 450', tipo: 'Cavalo Mecânico', ano: 2023, historico: [],
      docs: [seedDoc('CRLV', '31987654021', 180), seedDoc('Licenciamento', 'LIC-2024-019', 180), seedDoc('Vistoria', 'VIST-2024-012', 90)] },
    { placa: 'JKL-3456', renavam: '40506978314', chassi: '9BW2B82U7LP400004', marca: 'Volkswagen', modelo: 'Constellation', tipo: 'Caminhão', ano: 2020, historico: [],
      docs: [seedDoc('CRLV', '77412589630', -48), seedDoc('Licenciamento', 'LIC-2023-032', -48), seedDoc('Vistoria', 'VIST-2024-015', 75)] },
    { placa: 'MNO-7890', renavam: '50617089425', chassi: '9BFE2AE5BMB500005', marca: 'Ford', modelo: 'Cargo 2429', tipo: 'Caminhão', ano: 2021, historico: [],
      docs: [seedDoc('CRLV', '60321456987', 150), seedDoc('Licenciamento', 'LIC-2024-027', 150), seedDoc('Vistoria', 'VIST-2024-018', 100)] },
    { placa: 'PQR-1234', renavam: '60728190536', chassi: '93ZM2PMH0NB600006', marca: 'Iveco', modelo: 'Tector', tipo: 'Caminhão', ano: 2022, historico: [],
      docs: [seedDoc('CRLV', '25896314702', 200), seedDoc('Licenciamento', 'LIC-2023-051', 12), seedDoc('Vistoria', 'VIST-2024-021', 140)] }
  ];

  const recentReports = [
    { nome: 'Relatório Geral - Novembro 2024', gerado: '14/11/2024', fmt: 'PDF' }
  ];

  const history = []; 

  const REPORT_NAMES = {
    geral: 'Relatório Geral da Frota',
    vencidos: 'Documentos Vencidos e a Vencer',
    veiculo: 'Relatório por Veículo',
    historico: 'Histórico de Atualizações'
  };

  const state = { user: null, view: 'inicio', reportType: 'historico', currentPlaca: null, file: null };

  $('#login-form').addEventListener('submit', e => {
    e.preventDefault();
    const mat = $('#matricula').value.trim().toUpperCase();
    const senha = $('#senha').value;
    const err = $('#login-error');
    const fail = msg => { err.textContent = msg; err.hidden = false; };

    if (!mat || !senha) return fail('Informe matrícula e senha.');
    if (senha.length < 8) return fail('A senha deve ter no mínimo 8 caracteres.');
    const u = users.find(x => x.mat === mat);
    if (!u) return fail('Matrícula ou senha inválida.');
    if (!u.ativo) return fail('Usuário inativo. Procure um administrador.');

    err.hidden = true;
    state.user = u;
    startApp();
  });

  function startApp() {
    $('#login-screen').hidden = true;
    $('#app').hidden = false;
    $('#user-role').textContent = ROLES[state.user.perfil];

    $$('#nav button').forEach(b => {
      b.hidden = !b.dataset.roles.split(' ').includes(state.user.perfil);
    });
    renderAll();
    navigate('inicio');
  }

  $('#logout').addEventListener('click', () => {
    state.user = null;
    $('#app').hidden = true;
    $('#login-screen').hidden = false;
    $('#login-form').reset();
    closeMenu();
  });

  function navigate(view) {
    const btn = $(`#nav button[data-view="${view}"]`);
    if (!btn || btn.hidden) return;
    state.view = view;
    $$('.view').forEach(v => { v.hidden = v.id !== `view-${view}`; });
    $$('#nav button').forEach(b => b.classList.toggle('is-active', b === btn));
    $('#page-title').textContent = btn.dataset.title;

    if (view === 'documentos') showDocsList();
    if (view === 'inicio') renderVehicles();
    if (view === 'alertas') renderAlerts();
    if (view === 'relatorios') renderReportStats();
    if (view === 'cadastrar') fillTipoSelect();
    if (view === 'tipos') renderTipos();
    if (view === 'usuarios') renderUsers();
    closeMenu();
    window.scrollTo(0, 0);
  }

  $('#nav').addEventListener('click', e => {
    const b = e.target.closest('button[data-view]');
    if (b) navigate(b.dataset.view);
  });

  const openMenu = () => { $('#sidebar').classList.add('is-open'); $('#backdrop').hidden = false; };
  function closeMenu() { $('#sidebar').classList.remove('is-open'); $('#backdrop').hidden = true; }

  function setCollapsed(on) {
    $('#app').classList.toggle('is-collapsed', on);
    $$('#nav button, #logout').forEach(b => {
      if (on) b.title = b.textContent.trim(); else b.removeAttribute('title');
    });
    $('#collapse-toggle').setAttribute('aria-expanded', String(!on));
  }
  $('#menu-toggle').addEventListener('click', openMenu);
  $('#collapse-toggle').addEventListener('click', () => setCollapsed(!$('#app').classList.contains('is-collapsed')));
  $('#backdrop').addEventListener('click', closeMenu);

  function vehicleCard(v) {
    const st = vehicleStatus(v);
    const s = STATUS[st];
    const n = docsAtencao(v);
    const note = n > 0
      ? `<span class="vcard__note vcard__note--${st === 'vencido' ? 'danger' : 'warn'}">${n} documento(s) necessitando atenção</span>`
      : '';
    return `
      <article class="vcard" data-placa="${esc(v.placa)}" tabindex="0" role="button" aria-label="Ver documentos do veículo ${esc(v.placa)}">
        <div class="vcard__top">
          <span class="vcard__icon vcard__icon--${s.cls}">${icon('car')}</span>
          <span class="badge badge--${s.cls}">${icon(s.icon)}${s.label}</span>
        </div>
        <h3>${esc(v.placa)}</h3>
        <p class="vcard__model">${esc(v.marca)} ${esc(v.modelo)}</p>
        <dl>
          <div><dt>Tipo:</dt><dd>${esc(v.tipo)}</dd></div>
          <div><dt>Ano:</dt><dd>${esc(v.ano)}</dd></div>
        </dl>
        ${note}
      </article>`;
  }

  function renderStats() {
    $('#st-total').textContent = vehicles.length;
    $('#st-reg').textContent = vehicles.filter(v => vehicleStatus(v) === 'regular').length;
    $('#st-aten').textContent = vehicles.filter(v => vehicleStatus(v) === 'atencao').length;
    $('#st-venc').textContent = vehicles.filter(v => vehicleStatus(v) === 'vencido').length;
  }

  function renderVehicles() {
    renderStats();
    const q = norm($('#busca').value.trim());
    const st = $('#filtro-status').value;
    const list = vehicles.filter(v => {
      const hit = !q || [v.placa, v.marca, v.modelo, v.chassi || '', `${v.marca} ${v.modelo}`].some(t => norm(t).includes(q));
      return hit && (st === 'todos' || vehicleStatus(v) === st);
    });
    $('#vehicle-grid').innerHTML = list.length
      ? list.map(vehicleCard).join('')
      : '<p class="empty">Nenhum veículo encontrado.</p>';
  }

  $('#busca').addEventListener('input', renderVehicles);
  $('#filtro-status').addEventListener('change', renderVehicles);

  function bindCardOpen(container) {
    const open = e => {
      const card = e.target.closest('.vcard');
      if (!card) return;
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      showDocsDetail(card.dataset.placa);
    };
    container.addEventListener('click', open);
    container.addEventListener('keydown', open);
  }
  bindCardOpen($('#vehicle-grid'));
  bindCardOpen($('#doc-vehicle-grid'));

  function showDocsList() {
    $('#docs-detail').hidden = true;
    $('#docs-list').hidden = false;
    $('#doc-vehicle-grid').innerHTML = vehicles.map(vehicleCard).join('');
  }

  function showDocsDetail(placa) {
    const v = vehicles.find(x => x.placa === placa);
    if (!v) return;
    state.currentPlaca = placa;

    if (state.view !== 'documentos') {
      state.view = 'documentos';
      $$('.view').forEach(el => { el.hidden = el.id !== 'view-documentos'; });
      $$('#nav button').forEach(b => b.classList.toggle('is-active', b.dataset.view === 'documentos'));
      $('#page-title').textContent = 'Documentos';
    }

    $('#docs-list').hidden = true;
    $('#docs-detail').hidden = false;
    $('#dd-edit').hidden = state.user.perfil !== 'ADM';
    $('#dd-placa').textContent = v.placa;
    $('#dd-modelo').textContent = `${v.marca} ${v.modelo} • ${v.tipo}`;
    $('#dd-total').textContent = v.docs.length;

    $('#doc-items').innerHTML = v.docs.length ? v.docs.map((d, i) => {
      const st = docStatus(d);
      const s = DOC_STATUS[st];
      const dateCls = st === 'proximo' ? 'is-warn' : st === 'vencido' ? 'is-danger' : '';
      return `
        <article class="doc-item">
          <div class="doc-item__main">
            <span class="doc-item__icon doc-item__icon--${s.cls}">${icon('file-text')}</span>
            <div>
              <div class="doc-item__title">
                <h4>${esc(d.tipo)}</h4>
                <span class="badge badge--${s.cls}">${icon(s.icon)}${s.label}</span>
              </div>
              <p class="doc-item__num">Número: ${esc(d.numero)}</p>
              <div class="doc-item__dates">
                <span>${icon('calendar')}Emissão: <b>${esc(d.emissao)}</b></span>
                <span>${icon('calendar')}Validade: <b class="${dateCls}">${esc(d.validade)}</b></span>
              </div>
            </div>
          </div>
          <div class="doc-item__actions">
            <button type="button" class="btn btn--outline btn--sm" data-view-doc="${i}">${icon('eye')}Visualizar</button>
            <button type="button" class="btn btn--primary btn--sm" data-download="${i}">${icon('download')}Baixar</button>
          </div>
        </article>`;
    }).join('') : '<p class="empty">Nenhum documento cadastrado para este veículo.</p>';

    $('#doc-history').hidden = v.historico.length === 0;
    $('#doc-history-body').innerHTML = [...v.historico].reverse().map(h => `
      <tr>
        <td><span class="u-name">${esc(h.tipo)}</span></td>
        <td>${esc(h.numero)}</td>
        <td>${esc(h.validade)}</td>
        <td>${esc(h.substituidoEm)}</td>
        <td>${esc(h.por)}</td>
      </tr>`).join('');
    window.scrollTo(0, 0);
  }

  $('#docs-back').addEventListener('click', showDocsList);

  $('#doc-items').addEventListener('click', e => {
    const v = vehicles.find(x => x.placa === state.currentPlaca);
    const dl = e.target.closest('[data-download]');
    const vw = e.target.closest('[data-view-doc]');
    if (vw) return openDocPreview(v, v.docs[+vw.dataset.viewDoc]);
    if (!dl) return;
    const d = v.docs[+dl.dataset.download];
    if (d.arquivo) {
      const a = document.createElement('a');
      a.href = d.arquivo.url; a.download = d.arquivo.nome;
      document.body.appendChild(a); a.click(); a.remove();
    } else {
      const text = `Frotto\nVeículo: ${v.placa}\nDocumento: ${d.tipo}\nNúmero: ${d.numero}\nEmissão: ${d.emissao}\nValidade: ${d.validade}\n\n(Arquivo ilustrativo gerado pelo protótipo.)`;
      download(`${d.tipo}-${v.placa}.txt`, text, 'text/plain');
    }
    toast(`Download iniciado: ${d.tipo} - ${v.placa}`);
  });

  function openDocPreview(v, d) {
    const s = DOC_STATUS[docStatus(d)];
    let file;
    if (d.arquivo && d.arquivo.mime.startsWith('image/')) {
      file = `<img src="${d.arquivo.url}" alt="Documento ${esc(d.tipo)} do veículo ${esc(v.placa)}">`;
    } else if (d.arquivo && d.arquivo.mime === 'application/pdf') {
      file = `<iframe src="${d.arquivo.url}" title="Documento ${esc(d.tipo)}"></iframe>`;
    } else {
      file = `<div class="dm-file__ph">${icon('file-text')}<p>Documento ilustrativo: o arquivo original não está disponível neste protótipo.</p></div>`;
    }
    $('#dm-title').textContent = `${d.tipo} - ${v.placa}`;
    $('#dm-body').innerHTML = `
      <div class="dm-info">
        <div><span>Veículo</span><b>${esc(v.marca)} ${esc(v.modelo)}</b></div>
        <div><span>Situação</span><span class="badge badge--${s.cls}" style="display:inline-flex">${icon(s.icon)}${s.label}</span></div>
        <div><span>Número</span><b>${esc(d.numero)}</b></div>
        <div><span>Validade</span><b>${esc(d.validade)}</b></div>
        <div><span>Emissão</span><b>${esc(d.emissao)}</b></div>
        <div><span>Arquivo</span><b>${d.arquivo ? esc(d.arquivo.nome) : '-'}</b></div>
      </div>
      <div class="dm-file">${file}</div>`;
    openModal($('#doc-modal'));
  }

  function download(name, content, type) {
    const blob = new Blob([content], { type: `${type};charset=utf-8` });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  const MAX_SIZE = 20 * 1024 * 1024;
  const ALLOWED = ['pdf', 'jpg', 'jpeg', 'png'];

  function fillUploadVehicles() {
    $('#up-veiculo').innerHTML = '<option value="">Selecione um veículo</option>' +
      vehicles.map(v => `<option value="${esc(v.placa)}">${esc(v.placa)} - ${esc(v.marca)} ${esc(v.modelo)}</option>`).join('');
  }

  function setFieldError(id, msg) {
    const p = $(`[data-error-for="${id}"]`);
    if (p) p.textContent = msg || '';
    const el = $('#' + id);
    if (el) {
      const target = id === 'up-file' ? $('#dropzone') : el;
      target.classList.toggle('is-invalid', !!msg);
    }
  }

  function validateFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!ALLOWED.includes(ext)) return 'Formato inválido. Envie um arquivo PDF, JPG ou PNG.';
    if (file.size > MAX_SIZE) return 'Arquivo acima de 20 MB. Envie um arquivo menor.';
    return '';
  }

  function chooseFile(file) {
    const err = file ? validateFile(file) : '';
    setFieldError('up-file', err);
    if (!file || err) {
      state.file = null;
      $('#dz-text').textContent = 'Clique para selecionar ou arraste o arquivo';
      $('#dz-hint').textContent = 'PDF, JPG ou PNG - Máximo 20MB';
      $('#up-file').value = '';
      return;
    }
    state.file = file;
    $('#dz-text').textContent = file.name;
    $('#dz-hint').textContent = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
  }

  const dz = $('#dropzone');
  dz.addEventListener('click', e => { if (!e.target.closest('#dz-btn')) $('#up-file').click(); });
  $('#dz-btn').addEventListener('click', () => $('#up-file').click());
  $('#up-file').addEventListener('change', e => chooseFile(e.target.files[0]));
  ['dragenter', 'dragover'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('is-over'); }));
  ['dragleave', 'drop'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('is-over'); }));
  dz.addEventListener('drop', e => chooseFile(e.dataTransfer.files[0]));

  const isoToBr = iso => iso.split('-').reverse().join('/');
  const UP_FIELDS = ['up-veiculo', 'up-tipo', 'up-numero', 'up-emissao', 'up-validade', 'up-file'];

  $('#upload-form').addEventListener('submit', e => {
    e.preventDefault();
    if (!['ADM', 'GES'].includes(state.user.perfil)) {
      return toast('Você não tem permissão para enviar documentos.', true);
    }
    const placa = $('#up-veiculo').value;
    const tipo = $('#up-tipo').value;
    const numero = $('#up-numero').value.trim();
    const emissao = $('#up-emissao').value;
    const validade = $('#up-validade').value;

    const errs = {
      'up-veiculo': placa ? '' : 'Selecione o veículo.',
      'up-tipo': tipo ? '' : 'Selecione o tipo de documento.',
      'up-numero': numero.length >= 3 ? '' : 'Informe o número do documento.',
      'up-emissao': emissao ? '' : 'Informe a data de emissão.',
      'up-validade': !validade ? 'Informe a data de validade.'
        : (emissao && validade < emissao) ? 'A validade não pode ser anterior à emissão.' : '',
      'up-file': state.file ? '' : 'Selecione um arquivo para enviar.'
    };
    Object.entries(errs).forEach(([id, msg]) => setFieldError(id, msg));
    if (Object.values(errs).some(Boolean)) return;

    const v = vehicles.find(x => x.placa === placa);
    const novo = {
      tipo, numero, emissao: isoToBr(emissao), validade: isoToBr(validade),
      arquivo: { nome: state.file.name, mime: state.file.type, url: URL.createObjectURL(state.file) }
    };

    const idx = v.docs.findIndex(d => d.tipo === tipo);
    const acao = idx >= 0 ? 'Atualização' : 'Envio';
    if (idx >= 0) {
      v.historico.push({ ...v.docs[idx], substituidoEm: fmtDate(new Date()), por: state.user.nome });
      v.docs[idx] = novo;
    } else {
      v.docs.push(novo);
    }

    history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao, veiculo: v.placa, documento: tipo, arquivo: state.file.name });
    toast(`Documento ${tipo} ${idx >= 0 ? 'atualizado' : 'enviado'} para ${v.placa}. Situação: ${DOC_STATUS[docStatus(novo)].label}.`);
    $('#upload-form').reset();
    chooseFile(null);
    UP_FIELDS.forEach(id => setFieldError(id, ''));
  });

  function computeAlerts() {
    const out = { vencidos: [], proximos: [] };
    vehicles.forEach(v => v.docs.forEach(d => {
      const n = diasPara(d);
      const item = { veiculo: `${v.marca} ${v.modelo} - ${v.placa}`, doc: d.tipo, data: d.validade, dias: n };
      if (n < 0) out.vencidos.push({ ...item, texto: `Vencido há ${-n} ${-n === 1 ? 'dia' : 'dias'}` });
      else if (n <= DIAS_ALERTA) out.proximos.push({ ...item, texto: n === 0 ? 'Vence hoje' : `Vence em ${n} dia(s)` });
    }));
    out.vencidos.sort((a, b) => a.dias - b.dias);
    out.proximos.sort((a, b) => a.dias - b.dias);
    return out;
  }

  function alertItem(a, kind) {
    return `
      <div class="alert-item alert-item--${kind}">
        <span class="alert-item__icon">${icon('car')}</span>
        <div>
          <h4>${esc(a.veiculo)}</h4>
          <p>Documento: ${esc(a.doc)}</p>
          <div class="alert-item__venc">Vencimento: <b>${esc(a.data)}</b><span class="pill pill--${kind}">${esc(a.texto)}</span></div>
        </div>
      </div>`;
  }

  function renderAlerts() {
    const al = computeAlerts();
    $('#alert-vencidos').innerHTML = al.vencidos.length ? al.vencidos.map(a => alertItem(a, 'danger')).join('') : '<p class="empty">Nenhum documento vencido.</p>';
    $('#alert-proximos').innerHTML = al.proximos.length ? al.proximos.map(a => alertItem(a, 'warn')).join('') : '<p class="empty">Nenhum documento próximo do vencimento.</p>';
    $('#al-total').textContent = al.vencidos.length + al.proximos.length;
    $('#al-venc').textContent = $('#al-venc-count').textContent = al.vencidos.length;
    $('#al-prox').textContent = $('#al-prox-count').textContent = al.proximos.length;
  }

  $('#report-types').addEventListener('click', e => {
    const b = e.target.closest('.option');
    if (!b) return;
    state.reportType = b.dataset.type;
    $$('#report-types .option').forEach(o => o.classList.toggle('is-selected', o === b));
  });

  function renderReportStats() {
    const all = vehicles.flatMap(v => v.docs.map(docStatus));
    $('#rp-total').textContent = vehicles.length;
    $('#rp-validos').textContent = all.filter(x => x === 'valido').length;
    $('#rp-prox').textContent = all.filter(x => x === 'proximo').length;
    $('#rp-venc').textContent = all.filter(x => x === 'vencido').length;
  }

  function buildReport(type) {
    const rows = [];
    if (type === 'geral') {
      rows.push(['Placa', 'Marca', 'Modelo', 'Tipo', 'Ano', 'Status']);
      vehicles.forEach(v => rows.push([v.placa, v.marca, v.modelo, v.tipo, v.ano, STATUS[vehicleStatus(v)].label]));
    } else if (type === 'vencidos') {
      rows.push(['Placa', 'Documento', 'Número', 'Validade', 'Situação']);
      vehicles.forEach(v => v.docs.filter(d => docStatus(d) !== 'valido')
        .forEach(d => rows.push([v.placa, d.tipo, d.numero, d.validade, DOC_STATUS[docStatus(d)].label])));
    } else if (type === 'veiculo') {
      rows.push(['Placa', 'Documento', 'Número', 'Emissão', 'Validade', 'Situação']);
      vehicles.forEach(v => v.docs
        .forEach(d => rows.push([v.placa, d.tipo, d.numero, d.emissao, d.validade, DOC_STATUS[docStatus(d)].label])));
    } else {
      rows.push(['Data', 'Usuário', 'Ação', 'Veículo', 'Documento', 'Arquivo']);
      history.forEach(h => rows.push([h.data, h.usuario, h.acao, h.veiculo, h.documento, h.arquivo]));
    }
    return rows;
  }

  function exportReport(fmt) {
    const type = state.reportType;
    const rows = buildReport(type);
    if (rows.length <= 1) {
      return toast('Sem dados disponíveis para o relatório selecionado.', true);
    }
    const periodo = $('#rep-periodo').value;
    const nome = `${REPORT_NAMES[type]} - ${periodo}`;

    if (fmt === 'CSV') {
      const csv = '\ufeff' + rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(';')).join('\r\n');
      download(`${REPORT_NAMES[type].replace(/\s+/g, '_')}.csv`, csv, 'text/csv');
    } else {
      const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(nome)}</title>
        <style>body{font-family:Arial,sans-serif;padding:24px;color:#101828}h1{font-size:20px;margin:0 0 4px}p{margin:0 0 16px;color:#4a5565;font-size:13px}
        table{border-collapse:collapse;width:100%;font-size:13px}th,td{border:1px solid #d1d5dc;padding:6px 10px;text-align:left}th{background:#f3f4f6}</style></head>
        <body><h1>Frotto - ${esc(REPORT_NAMES[type])}</h1><p>Período: ${esc(periodo)} • Gerado em ${fmtDate(new Date())}</p>
        <table><thead><tr>${rows[0].map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead>
        <tbody>${rows.slice(1).map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>
        <script>window.onload=function(){window.print()}<\/script></body></html>`;
      const w = window.open('', '_blank');
      if (!w) return toast('Permita pop-ups para gerar o PDF.', true);
      w.document.write(html);
      w.document.close();
    }

    recentReports.unshift({ nome, gerado: fmtDate(new Date()), fmt });
    renderRecent();
    toast(`Relatório exportado em ${fmt}.`);
  }

  $('#exp-pdf').addEventListener('click', () => exportReport('PDF'));
  $('#exp-csv').addEventListener('click', () => exportReport('CSV'));

  function renderRecent() {
    $('#recent-list').innerHTML = recentReports.map((r, i) => `
      <div class="recent-item">
        ${icon('file-text')}
        <div class="recent-item__info"><strong>${esc(r.nome)}</strong><span>Gerado em ${esc(r.gerado)}</span></div>
        <span class="tag">${esc(r.fmt)}</span>
        <button type="button" class="icon-btn" data-recent="${i}" aria-label="Baixar relatório">${icon('download')}</button>
      </div>`).join('');
  }

  $('#recent-list').addEventListener('click', e => {
    const b = e.target.closest('[data-recent]');
    if (!b) return;
    const r = recentReports[+b.dataset.recent];
    download(`${r.nome.replace(/\s+/g, '_')}.txt`, `${r.nome}\nGerado em ${r.gerado}\n\n(Arquivo ilustrativo gerado pelo protótipo.)`, 'text/plain');
    toast(`Download iniciado: ${r.nome}`);
  });

  const vf = {
    placa: $('#v-placa'), renavam: $('#v-renavam'), chassi: $('#v-chassi'),
    marca: $('#v-marca'), modelo: $('#v-modelo'), tipo: $('#v-tipo'), ano: $('#v-ano'), cor: $('#v-cor')
  };

  vf.placa.addEventListener('input', () => {
    let v = vf.placa.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7);
    if (/^[A-Z]{3}\d{4}$/.test(v)) v = v.slice(0, 3) + '-' + v.slice(3); // padrão antigo ABC-1234
    vf.placa.value = v;
  });
  vf.renavam.addEventListener('input', () => { vf.renavam.value = vf.renavam.value.replace(/\D/g, ''); });
  vf.ano.addEventListener('input', () => { vf.ano.value = vf.ano.value.replace(/\D/g, ''); });

  const anoMaximo = () => new Date().getFullYear() + 1;

  function validateVehicle(v, ignorar = null) {
    const raw = v.placa.replace('-', '');
    const errs = {
      placa: /^[A-Z]{3}\d[A-Z0-9]\d{2}$/.test(raw) ? '' : 'Placa inválida. Use o formato ABC-1234 ou ABC1D23.',
      renavam: /^\d{11}$/.test(v.renavam) ? '' : 'Renavam inválido. Informe 11 dígitos numéricos.',
      chassi: /^[A-HJ-NPR-Z0-9]{17}$/.test(v.chassi) ? '' : 'Chassi inválido. Informe 17 caracteres (sem I, O ou Q).',
      marca: v.marca.length >= 2 ? '' : 'Informe a marca do veículo.',
      modelo: v.modelo.length >= 1 ? '' : 'Informe o modelo do veículo.',
      tipo: v.tipo ? '' : 'Selecione o tipo de veículo.',
      ano: (/^\d{4}$/.test(v.ano) && +v.ano >= 1980 && +v.ano <= anoMaximo()) ? '' : `Ano inválido. Informe entre 1980 e ${anoMaximo()}.`
    };
    if (!Object.values(errs).some(Boolean)) {
      const dup = vehicles.find(x => x !== ignorar &&
        (x.placa.replace('-', '') === raw || x.chassi === v.chassi || x.renavam === v.renavam));
      if (dup) errs.placa = 'Veículo já cadastrado com esta placa, chassi ou Renavam.';
    }
    return errs;
  }

  const formatPlaca = raw => /^[A-Z]{3}\d{4}$/.test(raw) ? `${raw.slice(0, 3)}-${raw.slice(3)}` : raw;

  function fillTipoSelect() {
    const atual = vf.tipo.value;
    vf.tipo.innerHTML = '<option value="">Selecione o tipo</option>' +
      tipos.filter(t => t.ativo).map(t => `<option value="${esc(t.nome)}">${esc(t.nome)}</option>`).join('');
    if (tipos.some(t => t.ativo && t.nome === atual)) vf.tipo.value = atual;
  }

  function clearVehicleForm() {
    $('#vehicle-form').reset();
    ['v-placa', 'v-renavam', 'v-chassi', 'v-marca', 'v-modelo', 'v-tipo', 'v-ano'].forEach(id => setFieldError(id, ''));
  }
  $('#v-clear').addEventListener('click', clearVehicleForm);

  $('#vehicle-form').addEventListener('submit', e => {
    e.preventDefault();
    const dados = {
      placa: vf.placa.value.trim().toUpperCase(),
      renavam: vf.renavam.value.trim(),
      chassi: vf.chassi.value.replace(/\s+/g, '').toUpperCase(),
      marca: vf.marca.value.trim(),
      modelo: vf.modelo.value.trim(),
      tipo: vf.tipo.value,
      ano: vf.ano.value.trim()
    };
    const errs = validateVehicle(dados);
    Object.entries(errs).forEach(([k, msg]) => setFieldError(`v-${k}`, msg));
    if (Object.values(errs).some(Boolean)) {
      if (errs.placa.startsWith('Veículo já')) toast('Veículo já cadastrado.', true);
      return;
    }

    const placaFmt = formatPlaca(dados.placa.replace('-', ''));
    vehicles.push({ ...dados, placa: placaFmt, ano: +dados.ano, cor: vf.cor.value.trim(), docs: [], historico: [] });
    history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Cadastro de veículo', veiculo: placaFmt, documento: '-', arquivo: '-' });
    fillUploadVehicles();
    renderStats();
    clearVehicleForm();
    toast(`Veículo ${placaFmt} cadastrado com sucesso.`);
  });

  const evf = {
    placa: $('#ev-placa'), renavam: $('#ev-renavam'), chassi: $('#ev-chassi'), marca: $('#ev-marca'),
    modelo: $('#ev-modelo'), tipo: $('#ev-tipo'), ano: $('#ev-ano'), cor: $('#ev-cor')
  };
  const EV_KEYS = ['placa', 'renavam', 'chassi', 'marca', 'modelo', 'tipo', 'ano'];
  let editingVehicle = null;

  evf.placa.addEventListener('input', () => {
    let v = evf.placa.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7);
    if (/^[A-Z]{3}\d{4}$/.test(v)) v = v.slice(0, 3) + '-' + v.slice(3);
    evf.placa.value = v;
  });
  evf.renavam.addEventListener('input', () => { evf.renavam.value = evf.renavam.value.replace(/\D/g, ''); });
  evf.ano.addEventListener('input', () => { evf.ano.value = evf.ano.value.replace(/\D/g, ''); });

  function openVehicleEdit(v) {
    editingVehicle = v;
    EV_KEYS.forEach(k => setFieldError(`ev-${k}`, ''));

    evf.tipo.innerHTML = '<option value="">Selecione o tipo</option>' +
      tipos.filter(t => t.ativo || t.nome === v.tipo).map(t => `<option value="${esc(t.nome)}">${esc(t.nome)}</option>`).join('');
    evf.placa.value = v.placa; evf.renavam.value = v.renavam || ''; evf.chassi.value = v.chassi || '';
    evf.marca.value = v.marca; evf.modelo.value = v.modelo; evf.tipo.value = v.tipo;
    evf.ano.value = v.ano; evf.cor.value = v.cor || '';
    openModal($('#vehicle-modal'));
    evf.placa.focus();
  }

  $('#dd-edit').addEventListener('click', () => {
    const v = vehicles.find(x => x.placa === state.currentPlaca);
    if (v) openVehicleEdit(v);
  });

  $('#edit-vehicle-form').addEventListener('submit', e => {
    e.preventDefault();
    if (state.user.perfil !== 'ADM') return toast('Você não tem permissão para editar veículos.', true);
    const dados = {
      placa: evf.placa.value.trim().toUpperCase(),
      renavam: evf.renavam.value.trim(),
      chassi: evf.chassi.value.replace(/\s+/g, '').toUpperCase(),
      marca: evf.marca.value.trim(),
      modelo: evf.modelo.value.trim(),
      tipo: evf.tipo.value,
      ano: evf.ano.value.trim()
    };
    const errs = validateVehicle(dados, editingVehicle);
    Object.entries(errs).forEach(([k, msg]) => setFieldError(`ev-${k}`, msg));
    if (Object.values(errs).some(Boolean)) return;

    const placaFmt = formatPlaca(dados.placa.replace('-', ''));
    Object.assign(editingVehicle, { ...dados, placa: placaFmt, ano: +dados.ano, cor: evf.cor.value.trim() });
    history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Alteração de veículo', veiculo: placaFmt, documento: '-', arquivo: '-' });

    closeModal($('#vehicle-modal'));
    fillUploadVehicles();
    renderStats();
    showDocsDetail(placaFmt);
    toast(`Veículo ${placaFmt} atualizado.`);
  });

  function openModal(el) { el.hidden = false; }
  function closeModal(el) {
    el.hidden = true;
    if (el._onClose) { const f = el._onClose; el._onClose = null; f(); }
  }
  $$('.modal').forEach(m => {
    m.addEventListener('mousedown', e => { if (e.target === m) closeModal(m); });
    m.addEventListener('click', e => { if (e.target.closest('[data-close-modal]')) closeModal(m); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') $$('.modal:not([hidden])').forEach(closeModal);
  });

  function confirmDialog({ title, message, okLabel = 'Excluir' }) {
    return new Promise(resolve => {
      const m = $('#confirm-modal');
      $('#cf-title').textContent = title;
      $('#cf-msg').textContent = message;
      $('#cf-ok').textContent = okLabel;
      m._onClose = () => resolve(false);
      $('#cf-ok').onclick = () => { m._onClose = null; closeModal(m); resolve(true); };
      $('#cf-cancel').onclick = () => closeModal(m);
      openModal(m);
      $('#cf-cancel').focus();
    });
  }

  function renderUsers() {
    $('#us-total').textContent = users.length;
    $('#us-ativos').textContent = users.filter(u => u.ativo).length;
    $('#us-inativos').textContent = users.filter(u => !u.ativo).length;
    $('#us-admins').textContent = users.filter(u => u.perfil === 'ADM').length;

    $('#users-body').innerHTML = users.map((u, i) => `
      <tr>
        <td><span class="u-name">${esc(u.nome)}</span><span class="u-mail">${esc(u.email)}</span></td>
        <td><span class="u-mat">${esc(u.mat)}</span></td>
        <td><span class="role role--${u.perfil}">${ROLES[u.perfil]}</span></td>
        <td><span class="st ${u.ativo ? 'st--on' : 'st--off'}">${u.ativo ? 'Ativo' : 'Inativo'}</span></td>
        <td><span class="u-date">${esc(u.acesso)}</span></td>
        <td>
          <div class="actions">
            <button type="button" class="icon-btn edit" data-edit="${i}" aria-label="Editar ${esc(u.nome)}">${icon('square-pen')}</button>
            <button type="button" class="icon-btn del" data-del="${i}" aria-label="Excluir ${esc(u.nome)}">${icon('trash')}</button>
          </div>
        </td>
      </tr>`).join('');
  }

  const userModal = $('#user-modal');
  const UM_FIELDS = ['um-nome', 'um-mat', 'um-email'];
  let editingUser = null;

  function openUserModal(u = null) {
    editingUser = u;
    $('#user-form').reset();
    UM_FIELDS.forEach(id => setFieldError(id, ''));
    $('#um-title').textContent = u ? 'Editar Usuário' : 'Adicionar Novo Usuário';
    $('#um-submit').textContent = u ? 'Salvar' : 'Adicionar';
    $('#um-status-field').hidden = !u;
    $('#um-mat').disabled = !!u;
    $('#um-perfil').disabled = !!u && u === state.user;
    if (u) {
      $('#um-nome').value = u.nome;
      $('#um-mat').value = u.mat;
      $('#um-email').value = u.email;
      $('#um-perfil').value = u.perfil;
      $('#um-status').value = u.ativo ? '1' : '0';
    }
    openModal(userModal);
    $('#um-nome').focus();
  }

  $('#add-user').addEventListener('click', () => openUserModal());

  $('#user-form').addEventListener('submit', e => {
    e.preventDefault();
    const nome = $('#um-nome').value.trim();
    const mat = (editingUser ? editingUser.mat : $('#um-mat').value.trim().toUpperCase());
    const email = $('#um-email').value.trim();
    const perfil = editingUser && editingUser === state.user ? editingUser.perfil : $('#um-perfil').value;
    const ativo = editingUser ? $('#um-status').value === '1' : true;

    const errs = {
      'um-nome': nome.length >= 3 ? '' : 'Informe o nome completo.',
      'um-mat': !/^[A-Z0-9]{3,12}$/.test(mat) ? 'Matrícula inválida. Use de 3 a 12 letras ou números.'
        : (!editingUser && users.some(u => u.mat === mat)) ? 'Matrícula já cadastrada.' : '',
      'um-email': /^\S+@\S+\.\S+$/.test(email) ? '' : 'E-mail inválido. Use o formato nome@email.com.'
    };
    Object.entries(errs).forEach(([id, msg]) => setFieldError(id, msg));
    if (Object.values(errs).some(Boolean)) return;

    if (editingUser) {
      if (editingUser === state.user && !ativo) return toast('Você não pode inativar o próprio usuário.', true);
      Object.assign(editingUser, { nome, email, perfil, ativo });
      history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Alteração de usuário', veiculo: '-', documento: '-', arquivo: mat });
      toast('Usuário atualizado.');
    } else {
      users.push({ nome, email, mat, perfil, ativo: true, acesso: '-' });
      history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Cadastro de usuário', veiculo: '-', documento: '-', arquivo: mat });
      toast(`Usuário ${nome} adicionado com a matrícula ${mat}.`);
    }
    renderUsers();
    closeModal(userModal);
  });

  $('#users-body').addEventListener('click', async e => {
    const ed = e.target.closest('[data-edit]');
    const dl = e.target.closest('[data-del]');
    if (ed) return openUserModal(users[+ed.dataset.edit]);
    if (!dl) return;
    const u = users[+dl.dataset.del];
    if (u === state.user) return toast('Você não pode excluir o próprio usuário.', true);
    const ok = await confirmDialog({ title: 'Excluir usuário', message: `Deseja excluir o usuário ${u.nome} (${u.mat})? Esta ação não pode ser desfeita.` });
    if (!ok) return;
    users.splice(users.indexOf(u), 1);
    history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Exclusão de usuário', veiculo: '-', documento: '-', arquivo: u.mat });
    renderUsers();
    toast('Usuário excluído.');
  });

  const typeModal = $('#type-modal');
  let editingTipo = null;
  const tipoEmUso = t => vehicles.filter(v => v.tipo === t.nome).length;

  function renderTipos() {
    $('#tipos-body').innerHTML = tipos.map((t, i) => `
      <tr>
        <td><span class="u-name">${esc(t.nome)}</span></td>
        <td>${tipoEmUso(t)}</td>
        <td><span class="st ${t.ativo ? 'st--on' : 'st--off'}">${t.ativo ? 'Ativo' : 'Inativo'}</span></td>
        <td>
          <div class="actions">
            <button type="button" class="icon-btn edit" data-tedit="${i}" aria-label="Editar ${esc(t.nome)}">${icon('square-pen')}</button>
            <button type="button" class="icon-btn tgl" data-ttoggle="${i}" aria-label="${t.ativo ? 'Inativar' : 'Ativar'} ${esc(t.nome)}" title="${t.ativo ? 'Inativar' : 'Ativar'}">${icon('power')}</button>
            <button type="button" class="icon-btn del" data-tdel="${i}" aria-label="Excluir ${esc(t.nome)}">${icon('trash')}</button>
          </div>
        </td>
      </tr>`).join('') || '<tr><td colspan="4" class="empty">Nenhum tipo cadastrado.</td></tr>';
  }

  function openTypeModal(t = null) {
    editingTipo = t;
    $('#type-form').reset();
    setFieldError('tp-nome', '');
    $('#tm-title').textContent = t ? 'Editar Tipo' : 'Adicionar Novo Tipo';
    $('#tm-submit').textContent = t ? 'Salvar' : 'Adicionar';
    if (t) $('#tp-nome').value = t.nome;
    openModal(typeModal);
    $('#tp-nome').focus();
  }

  $('#add-tipo').addEventListener('click', () => openTypeModal());

  $('#type-form').addEventListener('submit', e => {
    e.preventDefault();
    const nome = $('#tp-nome').value.trim();
    const dup = tipos.some(t => t !== editingTipo && norm(t.nome) === norm(nome));
    const err = nome.length < 3 ? 'Informe o nome do tipo (mínimo de 3 caracteres).' : dup ? 'Tipo já cadastrado.' : '';
    setFieldError('tp-nome', err);
    if (err) return;

    if (editingTipo) {
      vehicles.forEach(v => { if (v.tipo === editingTipo.nome) v.tipo = nome; });
      editingTipo.nome = nome;
      history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Alteração de tipo de veículo', veiculo: '-', documento: '-', arquivo: nome });
      toast('Tipo de veículo atualizado.');
    } else {
      tipos.push({ nome, ativo: true });
      history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Cadastro de tipo de veículo', veiculo: '-', documento: '-', arquivo: nome });
      toast(`Tipo ${nome} adicionado.`);
    }
    renderTipos();
    fillTipoSelect();
    closeModal(typeModal);
  });

  $('#tipos-body').addEventListener('click', async e => {
    const ed = e.target.closest('[data-tedit]');
    const tg = e.target.closest('[data-ttoggle]');
    const dl = e.target.closest('[data-tdel]');
    if (ed) return openTypeModal(tipos[+ed.dataset.tedit]);
    if (tg) {
      const t = tipos[+tg.dataset.ttoggle];
      t.ativo = !t.ativo;
      renderTipos(); fillTipoSelect();
      return toast(`Tipo ${t.nome} ${t.ativo ? 'ativado' : 'inativado'}.`);
    }
    if (dl) {
      const t = tipos[+dl.dataset.tdel];
      const n = tipoEmUso(t);
      if (n > 0) return toast(`Tipo em uso por ${n} veículo(s). Inative-o em vez de excluir.`, true);
      const ok = await confirmDialog({ title: 'Excluir tipo de veículo', message: `Deseja excluir o tipo ${t.nome}?` });
      if (!ok) return;
      tipos.splice(tipos.indexOf(t), 1);
      renderTipos(); fillTipoSelect();
      toast('Tipo de veículo excluído.');
    }
  });

  function renderAll() {
    renderVehicles();
    fillUploadVehicles();
    renderAlerts();
    renderReportStats();
    renderRecent();
    renderUsers();
    renderTipos();
    fillTipoSelect();
  }

  hydrateIcons();
})();
