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

  const API = 'https://uxvuwreecszglyuyscwz.supabase.co';
  const KEY = 'sb_publishable_oLWDNC9lpk6tN1tsRp5RRw_3nyrxrEJ';
  let accessToken = null;
  let users = [], tipos = [], vehicles = [], history = [], recentReports = [];
  const api = async (path, options = {}) => {
    const headers = { apikey: KEY, Authorization: `Bearer ${accessToken || KEY}`, ...options.headers };
    if (options.body && !(options.body instanceof FormData) && !(options.body instanceof Blob)) headers['Content-Type'] = 'application/json';
    const response = await fetch(`${API}${path}`, { ...options, headers });
    if (!response.ok) { const error = await response.json().catch(() => ({})); throw new Error(error.message || error.error_description || error.msg || `Erro HTTP ${response.status}`); }
    const data = await response.text();
    return data ? JSON.parse(data) : null;
  };
  const table = (name, query = '') => api(`/rest/v1/${name}?${query}`, { headers: { Accept: 'application/json' } });
  const write = (name, method, payload, filter = '') => api(`/rest/v1/${name}?${filter}`, {
    method, body: payload == null ? undefined : JSON.stringify(payload),
    headers: { Prefer: 'return=representation' }
  });
  const attempt = async (work) => { try { return await work(); } catch (err) { console.error(err); toast(err.message, true); return null; } };
  const toISO = br => br ? br.split('/').reverse().join('-') : null;
  const fromISO = iso => iso ? iso.slice(0, 10).split('-').reverse().join('/') : '-';
  const recordHistory = async (acao, detalhe = '') => {
    if (!state.user) return;
    await write('historico_atividades', 'POST', { usuario_id: state.user.id, acao, descricao: detalhe });
  };
  async function loadData() {
    const [dbUsers, dbTipos, dbVehicles, dbDocs, dbHistory, dbDocHistory] = await Promise.all([
      table('usuarios', 'select=*'), table('tipos_veiculo', 'select=*'), table('veiculos', 'select=*'),
      table('documentos', 'select=*'), table('historico_atividades', 'select=*&order=data_atividade.desc'),
      table('historico_documentos', 'select=*&order=data_alteracao.desc')
    ]);
    users = dbUsers.map(u => ({ ...u, mat: u.matricula, ativo: u.situacao === 'ATIVO', acesso: fromISO(u.ultimo_acesso) }));
    tipos = dbTipos.map(t => ({ ...t, nome: t.descricao, ativo: t.ativo !== false }));
    vehicles = dbVehicles.map(v => ({ ...v, tipo: tipos.find(t => t.id === v.tipo_veiculo_id)?.nome || '', docs: [], historico: [] }));
    dbDocs.forEach(d => { const v = vehicles.find(v => v.id === d.veiculo_id); if (v) v.docs.push({ ...d, tipo: d.tipo_documento, emissao: fromISO(d.data_emissao), validade: fromISO(d.data_vencimento), numero: d.numero || '', arquivo_url: d.arquivo_url }); });
    dbDocHistory.forEach(h => { const d = dbDocs.find(d => d.id === h.documento_id); const v = vehicles.find(v => v.id === d?.veiculo_id); if (v) v.historico.push({ tipo: d.tipo_documento, numero: d.numero || '', validade: fromISO(d.data_vencimento), substituidoEm: fromISO(h.data_alteracao), por: users.find(u => u.id === h.usuario_id)?.nome || '-', descricao: h.descricao }); });
    history = dbHistory.map(h => ({ data: fromISO(h.data_atividade), usuario: users.find(u => u.id === h.usuario_id)?.nome || '-', acao: h.acao, veiculo: '-', documento: '-', arquivo: h.descricao || '-' }));
    if (state.user) state.user = users.find(u => u.id === state.user.id) || state.user;
    renderAll();
  }
  const refresh = async () => { await loadData(); };
  const tipoId = nome => tipos.find(t => t.nome === nome)?.id || null;
  const saveSession = session => { accessToken = session.access_token; sessionStorage.setItem('frotto_session', JSON.stringify(session)); };
  const logoutSession = () => { accessToken = null; sessionStorage.removeItem('frotto_session'); };
  async function signIn(email, password) {
    const session = await api('/auth/v1/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email, password }) });
    saveSession(session);
    return session;
  }
  async function restoreSession() {
    const saved = JSON.parse(sessionStorage.getItem('frotto_session') || 'null');
    if (!saved?.refresh_token) return;
    const session = await api('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: JSON.stringify({ refresh_token: saved.refresh_token }) });
    saveSession(session);
    const profile = await table('usuarios', `select=*&auth_id=eq.${session.user.id}`);
    if (!profile.length || profile[0].situacao !== 'ATIVO') throw new Error('Usuário sem perfil ativo.');
    state.user = { ...profile[0], mat: profile[0].matricula, ativo: true };
    await loadData(); startApp();
  }
  async function uploadFile(file, veiculoId) {
    const clean = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `${veiculoId}/${crypto.randomUUID()}-${clean}`;
    const result = await fetch(`${API}/storage/v1/object/documentos/${path}`, {
      method: 'POST', headers: { apikey: KEY, Authorization: `Bearer ${accessToken}`, 'Content-Type': file.type || 'application/octet-stream', 'x-upsert': 'false' }, body: file
    });
    if (!result.ok) throw new Error((await result.json().catch(() => ({}))).message || 'Falha ao enviar arquivo.');
    return path;
  }
  async function signedFile(path, download = false) {
    const result = await api(`/storage/v1/object/sign/documentos/${path}`, { method: 'POST', body: JSON.stringify({ expiresIn: 300, ...(download ? { download: true } : {}) }) });
    return `${API}/storage/v1${result.signedURL}`;
  }

    const HOJE = (() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; })();
  const DIAS_ALERTA = 30; // até quantos dias antes do vencimento o documento fica em "Atenção"
  const addDias = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };
  const parseDate = str => { const [d, m, y] = str.split('/').map(Number); return new Date(y, m - 1, d); };
  const diffDias = (a, b) => Math.round((a - b) / 86400000);
  // Dados demonstrativos removidos. As datas são provenientes do Supabase.

    const diasPara = d => d.validade && d.validade !== '-' ? diffDias(parseDate(d.validade), HOJE) : 999999;
  const docStatus = d => { const n = diasPara(d); return n < 0 ? 'vencido' : n <= DIAS_ALERTA ? 'proximo' : 'valido'; };
  const vehicleStatus = v => {
    const st = v.docs.map(docStatus);
    return st.includes('vencido') ? 'vencido' : st.includes('proximo') ? 'atencao' : 'regular';
  };
  const docsAtencao = v => v.docs.filter(d => docStatus(d) !== 'valido').length;

  // Arrays carregados exclusivamente do banco de dados.

    const REPORT_NAMES = {
    geral: 'Relatório Geral da Frota',
    vencidos: 'Documentos Vencidos e a Vencer',
    veiculo: 'Relatório por Veículo',
    historico: 'Histórico de Atualizações'
  };

  const state = { user: null, view: 'inicio', reportType: 'historico', currentPlaca: null, file: null };

  $('#login-form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = $('#matricula').value.trim();
    const senha = $('#senha').value;
    const err = $('#login-error');
    try {
      if (!email || !senha) throw new Error('Informe e-mail e senha.');
      const session = await signIn(email, senha);
      const profiles = await table('usuarios', `select=*&auth_id=eq.${session.user.id}`);
      if (!profiles.length || profiles[0].situacao !== 'ATIVO') throw new Error('Usuário sem perfil ativo.');
      state.user = { ...profiles[0], mat: profiles[0].matricula, ativo: true };
      await loadData();
      err.hidden = true; startApp();
    } catch (error) { logoutSession(); err.textContent = error.message; err.hidden = false; }
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
    logoutSession();
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
    deleteVehicleButton.hidden = state.user.perfil !== 'ADM';
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
            ${state.user.perfil === 'ADM' ? `<button type="button" class="btn btn--outline btn--sm" data-delete-doc="${i}">${icon('trash')}Excluir</button>` : ''}
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

  $('#doc-items').addEventListener('click', async e => {
    const v = vehicles.find(x => x.placa === state.currentPlaca);
    const del = e.target.closest('[data-delete-doc]');
    if (del) {
      const d = v.docs[Number(del.dataset.deleteDoc)];
      if (state.user.perfil !== 'ADM' || !await confirmDialog({ title: 'Excluir documento', message: `Excluir ${d.tipo} de ${v.placa}?` })) return;
      return attempt(async () => {
        await write('historico_documentos', 'DELETE', null, `documento_id=eq.${d.id}`);
        await write('documentos', 'DELETE', null, `id=eq.${d.id}`);
        await recordHistory('Exclusão de documento', `${v.placa} - ${d.tipo}`);
        await refresh(); showDocsDetail(v.placa); toast('Documento excluído.');
      });
    }
    const dl = e.target.closest('[data-download]');
    const vw = e.target.closest('[data-view-doc]');
    if (!dl && !vw) return;
    const d = v.docs[Number((dl || vw).dataset.download ?? vw.dataset.viewDoc)];
    if (!d.arquivo_url) return toast('Arquivo não cadastrado.', true);
    await attempt(async () => {
      const url = await signedFile(d.arquivo_url, !!dl);
      if (dl) window.open(url, '_blank', 'noopener');
      else openDocPreview(v, d, url);
    });
  });
  function openDocPreview(v, d, url) {
    const s = DOC_STATUS[docStatus(d)];
    const ext = d.arquivo_url.split('.').pop().toLowerCase();
    const file = ['png','jpg','jpeg'].includes(ext) ? `<img src="${esc(url)}" alt="Documento">` : `<iframe src="${esc(url)}" title="Documento"></iframe>`;
    $('#dm-title').textContent = `${d.tipo} - ${v.placa}`;
    $('#dm-body').innerHTML = `<div class="dm-info"><div><span>Veículo</span><b>${esc(v.marca)} ${esc(v.modelo)}</b></div><div><span>Situação</span><b>${s.label}</b></div><div><span>Número</span><b>${esc(d.numero)}</b></div><div><span>Validade</span><b>${esc(d.validade)}</b></div></div><div class="dm-file">${file}</div>`;
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

  $('#upload-form').addEventListener('submit', async e => {
    e.preventDefault();
    if (!['ADM','GES'].includes(state.user.perfil)) return toast('Sem permissão.', true);
    const v = vehicles.find(x => x.placa === $('#up-veiculo').value);
    const tipo = $('#up-tipo').value, numero = $('#up-numero').value.trim();
    const emissao = $('#up-emissao').value, validade = $('#up-validade').value;
    if (!v || !tipo || !numero || !emissao || !validade || !state.file || validade < emissao) return toast('Preencha os campos corretamente e selecione um arquivo.', true);
    await attempt(async () => {
      const path = await uploadFile(state.file, v.id);
      const old = v.docs.find(d => d.tipo === tipo);
      const data = { veiculo_id: v.id, tipo_documento: tipo, numero, data_emissao: emissao, data_vencimento: validade, arquivo_url: path };
      if (old) {
        await write('historico_documentos', 'POST', { documento_id: old.id, usuario_id: state.user.id, descricao: `Arquivo anterior: ${old.arquivo_url || '-'}; número: ${old.numero}; validade: ${old.validade}` });
        await write('documentos', 'PATCH', data, `id=eq.${old.id}`);
      } else await write('documentos', 'POST', data);
      await recordHistory(old ? 'Atualização de documento' : 'Envio de documento', `${v.placa} - ${tipo}`);
      await refresh(); $('#upload-form').reset(); chooseFile(null);
      toast('Documento salvo no Supabase.');
    });
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
    toast('Para obter o relatório novamente, selecione o tipo e exporte.', true);
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

  $('#vehicle-form').addEventListener('submit', async e => {
    e.preventDefault();
    if (state.user.perfil !== 'ADM') return toast('Sem permissão.', true);
    const dados = { placa: vf.placa.value.trim().toUpperCase(), renavam: vf.renavam.value.trim(), chassi: vf.chassi.value.trim().toUpperCase(), marca: vf.marca.value.trim(), modelo: vf.modelo.value.trim(), tipo: vf.tipo.value, ano: vf.ano.value.trim() };
    const errs = validateVehicle(dados);
    Object.entries(errs).forEach(([k, msg]) => setFieldError(`v-${k}`, msg));
    if (Object.values(errs).some(Boolean)) return;
    await attempt(async () => {
      const placa = formatPlaca(dados.placa.replace('-', ''));
      await write('veiculos', 'POST', { placa, renavam: dados.renavam, chassi: dados.chassi, marca: dados.marca, modelo: dados.modelo, ano: Number(dados.ano), tipo_veiculo_id: tipoId(dados.tipo), cor: vf.cor.value.trim() });
      await recordHistory('Cadastro de veículo', placa);
      await refresh(); clearVehicleForm(); toast(`Veículo ${placa} cadastrado.`);
    });
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

  const deleteVehicleButton = document.createElement('button');
  deleteVehicleButton.type = 'button';
  deleteVehicleButton.className = 'btn btn--outline btn--sm';
  deleteVehicleButton.textContent = 'Excluir veículo';
  $('#dd-edit').insertAdjacentElement('afterend', deleteVehicleButton);
  deleteVehicleButton.addEventListener('click', async () => {
    const v = vehicles.find(x => x.placa === state.currentPlaca);
    if (!v || state.user.perfil !== 'ADM') return;
    if (v.docs.length) return toast('Exclua os documentos associados antes de excluir o veículo.', true);
    if (!await confirmDialog({ title: 'Excluir veículo', message: `Excluir ${v.placa}?` })) return;
    await attempt(async () => { await write('veiculos', 'DELETE', null, `id=eq.${v.id}`); await recordHistory('Exclusão de veículo', v.placa); await refresh(); showDocsList(); toast('Veículo excluído.'); });
  });
  $('#dd-edit').addEventListener('click', () => {
    const v = vehicles.find(x => x.placa === state.currentPlaca);
    if (v) openVehicleEdit(v);
  });

  $('#edit-vehicle-form').addEventListener('submit', async e => {
    e.preventDefault();
    if (state.user.perfil !== 'ADM') return toast('Sem permissão.', true);
    const dados = { placa: evf.placa.value.trim().toUpperCase(), renavam: evf.renavam.value.trim(), chassi: evf.chassi.value.trim().toUpperCase(), marca: evf.marca.value.trim(), modelo: evf.modelo.value.trim(), tipo: evf.tipo.value, ano: evf.ano.value.trim() };
    const errs = validateVehicle(dados, editingVehicle);
    Object.entries(errs).forEach(([k, msg]) => setFieldError(`ev-${k}`, msg));
    if (Object.values(errs).some(Boolean)) return;
    await attempt(async () => {
      const placa = formatPlaca(dados.placa.replace('-', ''));
      await write('veiculos', 'PATCH', { placa, renavam: dados.renavam, chassi: dados.chassi, marca: dados.marca, modelo: dados.modelo, ano: Number(dados.ano), tipo_veiculo_id: tipoId(dados.tipo), cor: evf.cor.value.trim() }, `id=eq.${editingVehicle.id}`);
      await recordHistory('Alteração de veículo', placa);
      closeModal($('#vehicle-modal')); await refresh(); showDocsDetail(placa); toast('Veículo atualizado.');
    });
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
  const UM_FIELDS = ['um-nome', 'um-mat', 'um-email', 'um-senha', 'um-confirma'];
  let editingUser = null;

  // Indicador visual de força (orientativo; regra obrigatória: mínimo de 8 caracteres).
  function updatePasswordStrength() {
    const senha = $('#um-senha').value;
    const meter = $('#um-strength');
    const label = $('#um-strength-label');
    if (!senha) {
      meter.dataset.strength = '0';
      label.textContent = 'Informe uma senha para continuar.';
      return;
    }
    let score = 1;
    if (senha.length >= 8) score++;
    if (senha.length >= 12) score++;
    if (/[a-zA-Z]/.test(senha) && /\d/.test(senha) && /[^a-zA-Z0-9]/.test(senha)) score++;
    meter.dataset.strength = String(score);
    label.textContent = ['','Muito fraca','Básica · prefira letras e números','Boa','Forte'][score];
  }

  // Mostrar/ocultar sem mover o foco nem salvar a senha em variáveis globais.
  userModal.querySelectorAll('[data-password-toggle]').forEach(botao => {
    botao.addEventListener('click', () => {
      const input = document.getElementById(botao.dataset.passwordToggle);
      const mostrar = input.type === 'password';
      input.type = mostrar ? 'text' : 'password';
      botao.textContent = mostrar ? 'Ocultar' : 'Mostrar';
      botao.setAttribute('aria-pressed', String(mostrar));
      botao.setAttribute('aria-label', `${mostrar ? 'Ocultar' : 'Mostrar'} ${input.id === 'um-senha' ? 'senha' : 'confirmação'}`);
    });
  });

  $('#um-senha').addEventListener('input', () => {
    setFieldError('um-senha', '');
    setFieldError('um-confirma', '');
    updatePasswordStrength();
  });
  $('#um-confirma').addEventListener('input', () => setFieldError('um-confirma', ''));

  function openUserModal(u = null) {
    editingUser = u;
    $('#user-form').reset();
    UM_FIELDS.forEach(id => setFieldError(id, ''));
    $('#um-title').textContent = u ? 'Editar usuário' : 'Adicionar novo usuário';
    $('#um-subtitle').textContent = u
      ? 'Atualize as informações e as permissões de acesso.'
      : 'Preencha os dados e configure o acesso ao Frotto.';
    $('#um-submit-label').textContent = u ? 'Salvar alterações' : 'Criar usuário';
    $('#um-password-section').hidden = !!u;
    $('#um-edit-password-note').hidden = !u;
    $('#um-status-field').hidden = !u;
    $('#um-senha').required = !u;
    $('#um-confirma').required = !u;
    $('#um-mat').disabled = !!u;
    $('#um-perfil').disabled = !!u && u.id === state.user?.id;
    userModal.querySelectorAll('[data-password-toggle]').forEach(botao => {
      const input = document.getElementById(botao.dataset.passwordToggle);
      input.type = 'password';
      botao.textContent = 'Mostrar';
      botao.setAttribute('aria-pressed', 'false');
      botao.setAttribute('aria-label', `Mostrar ${input.id === 'um-senha' ? 'senha' : 'confirmação'}`);
    });
    updatePasswordStrength();
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

  // Gerenciamento de contas executado no servidor, nunca com service_role no navegador.
  async function gerenciarUsuario(acao, dados = {}) {
    if (!accessToken) throw new Error('Sua sessão expirou. Entre novamente.');
    const resposta = await api('/functions/v1/quick-task', {
      method: 'POST',
      body: JSON.stringify({ acao, ...dados })
    });
    return resposta;
  }

  $('#user-form').addEventListener('submit', async e => {
    e.preventDefault();
    if (state.user?.perfil !== 'ADM') return toast('Sem permissão.', true);
    const nome = $('#um-nome').value.trim();
    const matricula = (editingUser?.mat || $('#um-mat').value.trim()).toUpperCase();
    const email = $('#um-email').value.trim().toLowerCase();
    const perfil = $('#um-perfil').value;
    const situacao = editingUser ? ($('#um-status').value === '1' ? 'ATIVO' : 'INATIVO') : 'ATIVO';
    if (nome.length < 2 || !/^[A-Z0-9]{3,12}$/.test(matricula) || !/^\S+@\S+\.\S+$/.test(email) || !ROLES[perfil]) {
      return toast('Preencha nome, matrícula, e-mail e perfil corretamente.', true);
    }

    // Somente a criação exige senha inicial; edições não alteram a senha.
    const senha = $('#um-senha').value;
    if (!editingUser) {
      if (senha.length < 8 || senha.length > 128 || !senha.trim()) {
        setFieldError('um-senha', 'Informe uma senha entre 8 e 128 caracteres.');
        $('#um-senha').focus();
        return;
      }
      if ($('#um-confirma').value !== senha) {
        setFieldError('um-confirma', 'As senhas não coincidem.');
        $('#um-confirma').focus();
        return;
      }
    }

    const botao = $('#um-submit');
    const label = $('#um-submit-label');
    const textoAnterior = label.textContent;
    botao.disabled = true;
    label.textContent = 'Salvando...';
    try {
      const resultado = await gerenciarUsuario(editingUser ? 'editar' : 'criar', {
        ...(editingUser ? { id: editingUser.id } : {}),
        nome, matricula, email, perfil, situacao,
        ...(!editingUser ? { senha } : {})
      });
      await refresh();
      closeModal(userModal);
      // Não exibir nem persistir a senha após o cadastro.
      $('#um-senha').value = '';
      $('#um-confirma').value = '';
      toast(resultado.mensagem || 'Usuário salvo com sucesso.');
    } catch (erro) {
      console.error(erro);
      toast(erro.message, true);
    } finally {
      botao.disabled = false;
      label.textContent = textoAnterior;
    }
  });

  $('#users-body').addEventListener('click', async e => {
    if (state.user?.perfil !== 'ADM') return;
    const ed = e.target.closest('[data-edit]');
    const dl = e.target.closest('[data-del]');
    if (ed) return openUserModal(users[Number(ed.dataset.edit)]);
    if (!dl) return;
    const u = users[Number(dl.dataset.del)];
    if (!u) return;
    if (u.id === state.user.id) return toast('Não é possível inativar a própria conta.', true);
    if (!await confirmDialog({
      title: 'Inativar usuário',
      message: `Inativar ${u.nome} (${u.mat})? O acesso será bloqueado, preservando o histórico.`,
      okLabel: 'Inativar'
    })) return;
    await attempt(async () => {
      await gerenciarUsuario('inativar', { id: u.id });
      await refresh();
      toast('Usuário inativado no Frotto e no Supabase Auth.');
    });
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

  $('#type-form').addEventListener('submit', async e => {
    e.preventDefault();
    const nome = $('#tp-nome').value.trim();
    const dup = tipos.some(t => t !== editingTipo && norm(t.nome) === norm(nome));
    const err = nome.length < 3 ? 'Informe pelo menos 3 caracteres.' : dup ? 'Tipo já cadastrado.' : '';
    setFieldError('tp-nome', err); if (err) return;
    await attempt(async () => {
      if (editingTipo) await write('tipos_veiculo', 'PATCH', { descricao: nome }, `id=eq.${editingTipo.id}`);
      else await write('tipos_veiculo', 'POST', { descricao: nome, ativo: true });
      await recordHistory(editingTipo ? 'Alteração de tipo' : 'Cadastro de tipo', nome);
      await refresh(); closeModal(typeModal); toast('Tipo salvo.');
    });
  });

    $('#tipos-body').addEventListener('click', async e => {
    const ed = e.target.closest('[data-tedit]'), tg = e.target.closest('[data-ttoggle]'), dl = e.target.closest('[data-tdel]');
    if (ed) return openTypeModal(tipos[+ed.dataset.tedit]);
    if (tg) { const t = tipos[+tg.dataset.ttoggle]; return attempt(async () => { await write('tipos_veiculo', 'PATCH', { ativo: !t.ativo }, `id=eq.${t.id}`); await refresh(); toast('Situação atualizada.'); }); }
    if (dl) {
      const t = tipos[+dl.dataset.tdel], n = tipoEmUso(t);
      if (n) return toast(`Tipo utilizado por ${n} veículo(s).`, true);
      if (!await confirmDialog({ title: 'Excluir tipo', message: `Excluir ${t.nome}?` })) return;
      await attempt(async () => { await write('tipos_veiculo', 'DELETE', null, `id=eq.${t.id}`); await refresh(); toast('Tipo excluído.'); });
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
  restoreSession().catch(err => { console.warn(err); logoutSession(); });
})();
