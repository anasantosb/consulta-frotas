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

  const vehicles = [
    {
      placa: 'ABC-1234', marca: 'Volvo', modelo: 'FH 540', tipo: 'Cavalo Mecânico', ano: 2022, status: 'regular', atencao: 0,
      docs: [
        { tipo: 'CRLV', numero: '45123789065', emissao: '15/03/2024', validade: '15/03/2025', status: 'valido' },
        { tipo: 'Licenciamento', numero: 'LIC-2024-011', emissao: '15/03/2024', validade: '15/03/2025', status: 'valido' },
        { tipo: 'Vistoria', numero: 'VIST-2024-007', emissao: '20/06/2024', validade: '20/12/2024', status: 'valido' }
      ]
    },
    {
      placa: 'DEF-5678', marca: 'Mercedes-Benz', modelo: 'Actros', tipo: 'Cavalo Mecânico', ano: 2021, status: 'atencao', atencao: 1,
      docs: [
        { tipo: 'CRLV', numero: '98765432109', emissao: '09/12/2023', validade: '09/12/2024', status: 'proximo' },
        { tipo: 'Licenciamento', numero: 'LIC-2023-045', emissao: '09/12/2023', validade: '09/12/2024', status: 'proximo' },
        { tipo: 'Vistoria', numero: 'VIST-2024-023', emissao: '14/05/2024', validade: '14/11/2024', status: 'valido' }
      ]
    },
    {
      placa: 'GHI-9012', marca: 'Scania', modelo: 'R 450', tipo: 'Cavalo Mecânico', ano: 2023, status: 'regular', atencao: 0,
      docs: [
        { tipo: 'CRLV', numero: '31987654021', emissao: '02/02/2024', validade: '02/02/2025', status: 'valido' },
        { tipo: 'Licenciamento', numero: 'LIC-2024-019', emissao: '02/02/2024', validade: '02/02/2025', status: 'valido' },
        { tipo: 'Vistoria', numero: 'VIST-2024-012', emissao: '10/07/2024', validade: '10/01/2025', status: 'valido' }
      ]
    },
    {
      placa: 'JKL-3456', marca: 'Volkswagen', modelo: 'Constellation', tipo: 'Caminhão', ano: 2020, status: 'vencido', atencao: 2,
      docs: [
        { tipo: 'CRLV', numero: '77412589630', emissao: '30/09/2023', validade: '30/09/2024', status: 'vencido' },
        { tipo: 'Licenciamento', numero: 'LIC-2023-032', emissao: '30/09/2023', validade: '30/09/2024', status: 'vencido' },
        { tipo: 'Vistoria', numero: 'VIST-2024-015', emissao: '05/08/2024', validade: '05/02/2025', status: 'valido' }
      ]
    },
    {
      placa: 'MNO-7890', marca: 'Ford', modelo: 'Cargo 2429', tipo: 'Caminhão', ano: 2021, status: 'regular', atencao: 0,
      docs: [
        { tipo: 'CRLV', numero: '60321456987', emissao: '18/04/2024', validade: '18/04/2025', status: 'valido' },
        { tipo: 'Licenciamento', numero: 'LIC-2024-027', emissao: '18/04/2024', validade: '18/04/2025', status: 'valido' },
        { tipo: 'Vistoria', numero: 'VIST-2024-018', emissao: '22/08/2024', validade: '22/02/2025', status: 'valido' }
      ]
    },
    {
      placa: 'PQR-1234', marca: 'Iveco', modelo: 'Tector', tipo: 'Caminhão', ano: 2022, status: 'atencao', atencao: 1,
      docs: [
        { tipo: 'CRLV', numero: '25896314702', emissao: '11/12/2023', validade: '11/12/2024', status: 'proximo' },
        { tipo: 'Licenciamento', numero: 'LIC-2023-051', emissao: '11/12/2023', validade: '11/12/2024', status: 'proximo' },
        { tipo: 'Vistoria', numero: 'VIST-2024-021', emissao: '30/09/2024', validade: '30/03/2025', status: 'valido' }
      ]
    }
  ];

  const alerts = {
    vencidos: [
      { veiculo: 'Volkswagen Constellation - JKL-3456', doc: 'CRLV', data: '30/09/2024', texto: 'Vencido há 48 dias' },
      { veiculo: 'Volkswagen Constellation - JKL-3456', doc: 'Licenciamento', data: '30/09/2024', texto: 'Vencido há 48 dias' }
    ],
    proximos: [
      { veiculo: 'Mercedes-Benz Actros - DEF-5678', doc: 'CRLV', data: '09/12/2024', texto: 'Vence em 5 dia(s)' },
      { veiculo: 'Mercedes-Benz Actros - DEF-5678', doc: 'Licenciamento', data: '09/12/2024', texto: 'Vence em 5 dia(s)' },
      { veiculo: 'Iveco Tector - PQR-1234', doc: 'CRLV', data: '11/12/2024', texto: 'Vence em 7 dia(s)' }
    ]
  };

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
    closeMenu();
    window.scrollTo(0, 0);
  }

  $('#nav').addEventListener('click', e => {
    const b = e.target.closest('button[data-view]');
    if (b) navigate(b.dataset.view);
  });

  const openMenu = () => { $('#sidebar').classList.add('is-open'); $('#backdrop').hidden = false; };
  function closeMenu() { $('#sidebar').classList.remove('is-open'); $('#backdrop').hidden = true; }
  $('#menu-toggle').addEventListener('click', openMenu);
  $('#backdrop').addEventListener('click', closeMenu);

  function vehicleCard(v) {
    const s = STATUS[v.status];
    const note = v.atencao > 0
      ? `<span class="vcard__note vcard__note--${v.status === 'vencido' ? 'danger' : 'warn'}">${v.atencao} documento(s) necessitando atenção</span>`
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
    $('#st-reg').textContent = vehicles.filter(v => v.status === 'regular').length;
    $('#st-aten').textContent = vehicles.filter(v => v.status === 'atencao').length;
    $('#st-venc').textContent = vehicles.filter(v => v.status === 'vencido').length;
  }

  function renderVehicles() {
    renderStats();
    const q = norm($('#busca').value.trim());
    const st = $('#filtro-status').value;
    const list = vehicles.filter(v => {
      const hit = !q || [v.placa, v.marca, v.modelo, v.chassi || '', `${v.marca} ${v.modelo}`].some(t => norm(t).includes(q));
      return hit && (st === 'todos' || v.status === st);
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
    $('#dd-placa').textContent = v.placa;
    $('#dd-modelo').textContent = `${v.marca} ${v.modelo} • ${v.tipo}`;
    $('#dd-total').textContent = v.docs.length;

    $('#doc-items').innerHTML = v.docs.length ? v.docs.map((d, i) => {
      const s = DOC_STATUS[d.status];
      const dateCls = d.status === 'proximo' ? 'is-warn' : d.status === 'vencido' ? 'is-danger' : '';
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
          <button type="button" class="btn btn--primary btn--sm" data-download="${i}">${icon('download')}Baixar</button>
        </article>`;
    }).join('') : '<p class="empty">Nenhum documento cadastrado para este veículo.</p>';
    window.scrollTo(0, 0);
  }

  $('#docs-back').addEventListener('click', showDocsList);

  $('#doc-items').addEventListener('click', e => {
    const b = e.target.closest('[data-download]');
    if (!b) return;
    const v = vehicles.find(x => x.placa === state.currentPlaca);
    const d = v.docs[+b.dataset.download];
    const text = `Frotto\nVeículo: ${v.placa}\nDocumento: ${d.tipo}\nNúmero: ${d.numero}\nEmissão: ${d.emissao}\nValidade: ${d.validade}\n\n(Arquivo ilustrativo gerado pelo protótipo.)`;
    download(`${d.tipo}-${v.placa}.txt`, text, 'text/plain');
    toast(`Download iniciado: ${d.tipo} - ${v.placa}`);
  });

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

  $('#upload-form').addEventListener('submit', e => {
    e.preventDefault();
    if (!['ADM', 'GES'].includes(state.user.perfil)) {
      return toast('Você não tem permissão para enviar documentos.', true);
    }
    const placa = $('#up-veiculo').value;
    const tipo = $('#up-tipo').value;
    setFieldError('up-veiculo', placa ? '' : 'Selecione o veículo.');
    setFieldError('up-tipo', tipo ? '' : 'Selecione o tipo de documento.');
    if (!state.file) setFieldError('up-file', 'Selecione um arquivo para enviar.');
    if (!placa || !tipo || !state.file) return;

    const v = vehicles.find(x => x.placa === placa);
    const hoje = new Date();
    const fim = new Date(hoje); fim.setFullYear(fim.getFullYear() + 1);
    const prefix = { CRLV: '', Licenciamento: 'LIC-', Vistoria: 'VIST-' }[tipo];
    const numero = `${prefix}${hoje.getFullYear()}-${pad(Math.floor(Math.random() * 900) + 100)}`;
    const novo = { tipo, numero, emissao: fmtDate(hoje), validade: fmtDate(fim), status: 'valido' };

    const idx = v.docs.findIndex(d => d.tipo === tipo);
    const acao = idx >= 0 ? 'Atualização' : 'Envio';
    if (idx >= 0) v.docs[idx] = novo; else v.docs.push(novo);

    history.push({ data: fmtDate(hoje), usuario: state.user.nome, acao, veiculo: v.placa, documento: tipo, arquivo: state.file.name });
    toast(`Documento ${tipo} enviado para ${v.placa}.`);
    $('#upload-form').reset();
    chooseFile(null);
    ['up-veiculo', 'up-tipo', 'up-file'].forEach(id => setFieldError(id, ''));
  });

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
    $('#alert-vencidos').innerHTML = alerts.vencidos.map(a => alertItem(a, 'danger')).join('');
    $('#alert-proximos').innerHTML = alerts.proximos.map(a => alertItem(a, 'warn')).join('');
    $('#al-total').textContent = alerts.vencidos.length + alerts.proximos.length;
    $('#al-venc').textContent = $('#al-venc-count').textContent = alerts.vencidos.length;
    $('#al-prox').textContent = $('#al-prox-count').textContent = alerts.proximos.length;
  }

  $('#report-types').addEventListener('click', e => {
    const b = e.target.closest('.option');
    if (!b) return;
    state.reportType = b.dataset.type;
    $$('#report-types .option').forEach(o => o.classList.toggle('is-selected', o === b));
  });

  function buildReport(type) {
    const rows = [];
    if (type === 'geral') {
      rows.push(['Placa', 'Marca', 'Modelo', 'Tipo', 'Ano', 'Status']);
      vehicles.forEach(v => rows.push([v.placa, v.marca, v.modelo, v.tipo, v.ano, STATUS[v.status].label]));
    } else if (type === 'vencidos') {
      rows.push(['Placa', 'Documento', 'Número', 'Validade', 'Situação']);
      vehicles.forEach(v => v.docs.filter(d => d.status !== 'valido')
        .forEach(d => rows.push([v.placa, d.tipo, d.numero, d.validade, DOC_STATUS[d.status].label])));
    } else if (type === 'veiculo') {
      rows.push(['Placa', 'Documento', 'Número', 'Emissão', 'Validade', 'Situação']);
      vehicles.forEach(v => v.docs
        .forEach(d => rows.push([v.placa, d.tipo, d.numero, d.emissao, d.validade, DOC_STATUS[d.status].label])));
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

  function clearVehicleForm() {
    $('#vehicle-form').reset();
    ['v-placa', 'v-renavam', 'v-chassi', 'v-marca', 'v-modelo', 'v-tipo', 'v-ano'].forEach(id => setFieldError(id, ''));
  }
  $('#v-clear').addEventListener('click', clearVehicleForm);

  $('#vehicle-form').addEventListener('submit', e => {
    e.preventDefault();
    const placa = vf.placa.value.trim().toUpperCase();
    const placaRaw = placa.replace('-', '');
    const renavam = vf.renavam.value.trim();
    const chassi = vf.chassi.value.replace(/\s+/g, '').toUpperCase();
    const marca = vf.marca.value.trim();
    const modelo = vf.modelo.value.trim();
    const tipo = vf.tipo.value;
    const ano = vf.ano.value.trim();
    const anoMax = new Date().getFullYear() + 1;

    const errs = {
      'v-placa': /^[A-Z]{3}\d[A-Z0-9]\d{2}$/.test(placaRaw) ? '' : 'Placa inválida. Use o formato ABC-1234 ou ABC1D23.',
      'v-renavam': /^\d{11}$/.test(renavam) ? '' : 'Renavam inválido. Informe 11 dígitos numéricos.',
      'v-chassi': /^[A-HJ-NPR-Z0-9]{17}$/.test(chassi) ? '' : 'Chassi inválido. Informe 17 caracteres (sem I, O ou Q).',
      'v-marca': marca.length >= 2 ? '' : 'Informe a marca do veículo.',
      'v-modelo': modelo.length >= 1 ? '' : 'Informe o modelo do veículo.',
      'v-tipo': tipo ? '' : 'Selecione o tipo de veículo.',
      'v-ano': (/^\d{4}$/.test(ano) && +ano >= 1980 && +ano <= anoMax) ? '' : `Ano inválido. Informe entre 1980 e ${anoMax}.`
    };
    Object.entries(errs).forEach(([id, msg]) => setFieldError(id, msg));
    if (Object.values(errs).some(Boolean)) return;

    const dup = vehicles.find(v => v.placa.replace('-', '') === placaRaw || (v.chassi && v.chassi === chassi) || (v.renavam && v.renavam === renavam));
    if (dup) {
      setFieldError('v-placa', 'Veículo já cadastrado com esta placa, chassi ou Renavam.');
      return toast('Veículo já cadastrado.', true);
    }

    const placaFmt = /^[A-Z]{3}\d{4}$/.test(placaRaw) ? `${placaRaw.slice(0, 3)}-${placaRaw.slice(3)}` : placaRaw;
    vehicles.push({
      placa: placaFmt, renavam, chassi, marca, modelo, tipo, ano: +ano, cor: vf.cor.value.trim(),
      status: 'regular', atencao: 0, docs: []
    });
    history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Cadastro de veículo', veiculo: placaFmt, documento: '-', arquivo: '-' });
    fillUploadVehicles();
    renderStats();
    clearVehicleForm();
    toast(`Veículo ${placaFmt} cadastrado com sucesso.`);
  });

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

  $('#users-body').addEventListener('click', e => {
    const ed = e.target.closest('[data-edit]');
    const dl = e.target.closest('[data-del]');
    if (ed) {
      const u = users[+ed.dataset.edit];
      const nome = prompt('Nome do usuário:', u.nome);
      if (nome === null) return;
      const perfil = (prompt('Perfil (COL, GES ou ADM):', u.perfil) || '').toUpperCase();
      if (!nome.trim() || !ROLES[perfil]) return toast('Dados inválidos. Use COL, GES ou ADM no perfil.', true);
      const ativo = confirm('Manter o usuário como ATIVO?\nOK = Ativo • Cancelar = Inativo');
      u.nome = nome.trim(); u.perfil = perfil; u.ativo = ativo;
      history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Alteração de usuário', veiculo: '-', documento: '-', arquivo: u.mat });
      renderUsers();
      toast('Usuário atualizado.');
    }
    if (dl) {
      const i = +dl.dataset.del;
      const u = users[i];
      if (u === state.user) return toast('Você não pode excluir o próprio usuário.', true);
      if (!confirm(`Excluir o usuário ${u.nome} (${u.mat})?`)) return;
      users.splice(i, 1);
      history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Exclusão de usuário', veiculo: '-', documento: '-', arquivo: u.mat });
      renderUsers();
      toast('Usuário excluído.');
    }
  });

  const modal = $('#user-modal');
  const UM_FIELDS = ['um-nome', 'um-mat', 'um-email'];

  function openUserModal() {
    $('#user-form').reset();
    UM_FIELDS.forEach(id => setFieldError(id, ''));
    modal.hidden = false;
    $('#um-nome').focus();
  }
  function closeUserModal() { modal.hidden = true; }

  $('#add-user').addEventListener('click', openUserModal);
  $('#um-cancel').addEventListener('click', closeUserModal);
  modal.addEventListener('mousedown', e => { if (e.target === modal) closeUserModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeUserModal(); });

  $('#user-form').addEventListener('submit', e => {
    e.preventDefault();
    const nome = $('#um-nome').value.trim();
    const mat = $('#um-mat').value.trim().toUpperCase();
    const email = $('#um-email').value.trim();
    const perfil = $('#um-perfil').value;

    const errs = {
      'um-nome': nome.length >= 3 ? '' : 'Informe o nome completo.',
      'um-mat': !/^[A-Z0-9]{3,12}$/.test(mat) ? 'Matrícula inválida. Use de 3 a 12 letras ou números.'
        : users.some(u => u.mat === mat) ? 'Matrícula já cadastrada.' : '',
      'um-email': /^\S+@\S+\.\S+$/.test(email) ? '' : 'E-mail inválido. Use o formato nome@email.com.'
    };
    Object.entries(errs).forEach(([id, msg]) => setFieldError(id, msg));
    if (Object.values(errs).some(Boolean)) return;

    users.push({ nome, email, mat, perfil, ativo: true, acesso: '-' });
    history.push({ data: fmtDate(new Date()), usuario: state.user.nome, acao: 'Cadastro de usuário', veiculo: '-', documento: '-', arquivo: mat });
    renderUsers();
    closeUserModal();
    toast(`Usuário ${nome} adicionado com a matrícula ${mat}.`);
  });

  function renderAll() {
    renderVehicles();
    fillUploadVehicles();
    renderAlerts();
    renderRecent();
    renderUsers();
  }

  hydrateIcons();
})();
