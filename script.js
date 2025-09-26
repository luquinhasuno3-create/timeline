// --- CONTEÚDO EMBUTIDO PARA EXPORTAÇÃO ---
const EMBEDDED_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
 	<meta charset="UTF-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
 	<title>Timeline Unloop Filmes - v28 (Final)</title>
 	{{STYLES}}
</head>
<body>
 	<div class="loading-overlay" id="loading-overlay">
 	 	<canvas id="logo-canvas"></canvas>
 	 	<div id="loading-status-text"></div>
 	</div>
 	 
 	<div id="screensaver-overlay">
 	 	 <canvas id="screensaver-canvas"></canvas>
 	</div>

 	<div id="notice-board" class="glass collapsed">
 	 	<div id="notice-board-header">
 	 	 	<div class="icon-click-area"></div>
 	 	 	<span class="header-icon">🚨</span>
 	 	 	<span class="header-text"> Avisos</span>
 	 	</div>
 	 	<div id="notice-board-content">
 	 	</div>
 	</div>

 	<svg width="0" height="0" style="position:absolute; left: -9999px;">
 	 	<defs>
 	 	 	<path id="path-1" d="M35.2,139.9c.3,39.3.3,40.1,2.6,45,5.7,12.4,13,18.5,25.1,21.1,13.4,2.7,26.7-1,34.8-9.9,4.6-5.1,9.1-14.9,10.3-22.3.6-3.3,1-21.3,1-40.1s.3-34.3.8-34.5c.4-.2,8-.2,17,0l16.2.4v40.3c0,43-.6,49.9-5.2,61.5-7.8,19.7-24.5,33-47.8,38.1-29.5,6.4-61.2-5-77.7-27.9C1.3,196.3,0,188.2,0,137.2v-37.8l16.8-.2c9.2-.2,17-.1,17.4.2s.8,18.5,1,40.5Z"></path>
 	 	 	<path id="path-2" d="M142,225.4v16h-16.7l-16.8-.1,5-2.6c11.2-5.8,20-14.5,25.4-25.1,1.2-2.3,2.4-4.2,2.6-4.2.3,0,.5,7.2,.5,16Z"></path>
 	 	 	<path id="path-3" d="M197.2,101.3c30.3,7.8,50.1,28.9,53.8,57.3.5,4,1,24.3,1,45v37.8h-34.9l-.3-40.3-.3-40.2-3.1-6.5c-4.2-8.9-8.4-13.4-16.2-17.2-6.2-3.1-7.4-3.3-16.7-3.3-8.7,0-10.7.3-15.5,2.6-5.4,2.6-10.8,7.2-13.8,11.6-.8,1.3-1.7,2.3-2.1,2.3-.7,0-.2-45.2.5-45.9.3-.3,4.4-1.5,9.2-2.8,11.6-2.9,27.7-3.1,38.4-.4Z"></path>
 	 	 	<path id="path-4" d="M252.7,70.6l.2,70.3-2.4-5.4c-5.4-11.7-16.6-24.1-27.5-30.4l-4-2.2v-51.1c0-28.1.2-51.3.5-51.5.2-.3,7.8-.4,16.7-.2l16.3.3.2,70.2Z"></path>
 	 	 	<path id="path-5" d="M363.9,100c22.5,5.7,44,26.7,50.5,49.6,2.3,8,3.1,21.9,1.7,30.7-4.7,29.9-28.9,54.1-59.2,59-3.5.6-21.3,1.1-39.6,1.1-35.1,0-42-.6-53.5-5l-5.8-2.1v-44.7l5.8,5.7c3.1,3.1,8,6.8,10.7,8.2,5,2.4,5.1,2.4,42.1,2.7,43.1.3,43.9.2,53.9-8.9,10.3-9.5,14.4-22.8,11.1-35.9-2.9-11.1-9.4-19.2-19.9-24.7-4.7-2.5-6.2-2.7-15.7-2.8-8.7,0-11.3.4-15.3,2.2-6.6,3.1-15.2,11.5-18.4,18.2-2.5,5-2.8,6.7-2.8,15.6s.3,10.6,2.9,16c1.7,3.3,5.2,8.1,7.9,10.7l4.8,4.8h-43.9l-1.5-3.9c-5.2-12.9-6.5-31-3.3-44.5,5.3-22.3,24.6-43.3,46.5-50.6,3.5-1.1,8.9-2.5,12-3,7-1.1,21.5-.3,29,1.6Z"></path>
 	 	 	<path id="path-6" d="M424,189.5c3.2,5.3,9.1,10.2,16.4,13.5,5.1,2.3,6.6,2.6,15.4,2.2,11.9-.4,17.1-2.6,25.5-10.9l5.7-5.7v44.6l-6.9,2.5c-23.7,8.8-51.1,4.4-70-11.3l-6-5,4.8-7.3c4.7-7,9.5-17.6,10.7-23.7.4-1.6.9-3,1.3-3,.3,0,1.7,1.9,3.1,4.1Z"></path>
 	 	 	<path id="path-7" d="M474,100.5c3.9,1.1,9.1,2.9,11.4,4.1,5.1,2.5,15.5,9.8,18,12.7,1.9,2,1.8,2.1-2.1,7.4-5.2,6.9-8.1,12.6-10.8,21.1l-2.1,7-3.2-4.6c-3.6-5.2-8.5-9.4-15.2-12.9-3.9-2-5.9-2.4-15-2.4s-11,.3-16.2,2.8c-5.3,2.6-16.8,13.4-16.8,15.8,0,.5-.4.9-.8.9-.5,0-1.4-2.3-2-5-1.6-7-5.4-14.8-10.9-22.2l-4.6-6.2,4.4-3.8c18-15.7,42.6-21.2,65.9-14.7Z"></path>
 	 	 	<path id="path-8" d="M583.6,100.9c18.2,5.3,35.3,19.7,43.8,36.9,4.9,9.8,6.9,19,6.9,31.6,0,18.8-6,34.1-18.5,47.5-8.7,9.3-18.6,16-29.7,19.9-8,2.9-9.5,3.1-22.6,3-12.9,0-14.7-.2-22.5-2.9l-8.5-3-.3-22.1-.2-22,5.8,5.6c7.7,7.6,14.1,10,26,10,7.6,0,9.5-.4,15-3,15.4-7.3,24-23.4,21.1-39.4-.6-3.3-2-7.8-3.1-10-3.1-6.1-11.1-13.9-17.5-17.2-5.3-2.6-6.7-2.9-15.8-2.9s-10.6.3-15.8,2.8c-10.9,5.4-18.5,15.2-20.7,26.6-.6,3.4-1,34.9-1,83.7v78.4h-34.1l.3-84.8c.3-79,.5-85.1,2.2-90.2,7.5-22.5,24.6-40.3,45.6-47.6,12.4-4.3,30.6-4.7,43.6-.9Z"></path>
 	 	 	</defs>
 	 	</svg>
 	 
 	<div class="background-gradient"></div>
    <div id="background-animation-container">
        <canvas id="animatedCanvas"></canvas>
    </div>
    <div class="br-mode-overlay"></div>

 	<div class="content-wrapper" id="content-wrapper">
 	 	<header class="header glass">
 	 	 	<div class="header-content">
 	 	 	 	<h1 class="header-title" id="header-title">Timeline Unloop</h1>
 	 	 	 	<div class="controls">
 	 	 	 	 	<div class="update-indicator" id="updateIndicator">✅ Atualizado</div>
                    <button class="control-btn" id="refreshDataBtn" onclick="handleRefreshData()" aria-label="Atualizar dados da planilha" title="Atualizar dados da planilha">🔄</button>
 	 	 	 	 	<button class="control-btn" id="toggleEffectsBtn" onclick="toggleVisualEffects()" aria-label="Ativar/Desativar Efeitos Visuais">✨</button>
 	 	 	 	 	<button class="control-btn zoom-btn" onclick="zoomIn()" aria-label="Aumentar zoom">🔍+</button>
 	 	 	 	 	<button class="control-btn zoom-btn" onclick="zoomOut()" aria-label="Diminuir zoom">🔍-</button>
 	 	 	 	 	<div class="button-stack">
 	 	 	 	 	 	<button class="control-btn" id="saveChangesBtn" title="Salvar Página" aria-label="Salvar alterações e baixar HTML">💾</button>
 	 	 	 	 	 	<button class="control-btn" id="manualBtn" title="Manual" aria-label="Abrir guia rápido">📖</button>
 	 	 	 	 	</div>
 	 	 	 	</div>
 	 	 	</div>
 	 	</header>
 	 	<main class="main-layout">
 	 	 	<nav class="filter-menu-horizontal glass" aria-label="Filtros da Timeline">
 	 	 	 	 <div class="filter-tabs-horizontal">
                    <button class="reset-filters-btn" id="sort-projects-btn" aria-label="Ordenar projetos">🔀</button>
                    <button class="reset-filters-btn" id="master-toggle-btn" aria-label="Redefinir filtros e visualização">🗂️</button>
 	 	 	 	 	 <button class="filter-tab-horizontal" onclick="toggleFilterDropdown(event, 'projetos', this)">Projetos</button>
 	 	 	 	 	 <button class="filter-tab-horizontal" onclick="toggleFilterDropdown(event, 'clientes', this)">Clientes</button>
 	 	 	 	 	 <button class="filter-tab-horizontal" onclick="toggleFilterDropdown(event, 'categorias', this)">Categorias</button>
 	 	 	 	 	 <button class="filter-tab-horizontal" onclick="toggleFilterDropdown(event, 'tarefas', this)">Tarefas</button>
 	 	 	 	 	 <button class="filter-tab-horizontal" onclick="toggleFilterDropdown(event, 'localizacao', this)">Localização</button>
 	 	 	 	 </div>
 	 	 	 	 <div class="filter-dropdown" id="dropdown-projetos"><div class="filter-dropdown-content"><div class="filter-buttons-container" id="projetos-list"></div></div></div>
 	 	 	 	 <div class="filter-dropdown" id="dropdown-clientes"><div class="filter-dropdown-content"><div class="filter-buttons-container" id="clientes-list"></div></div></div>
 	 	 	 	 <div class="filter-dropdown" id="dropdown-categorias"><div class="filter-dropdown-content"><div class="filter-buttons-container" id="categorias-list"></div></div></div>
 	 	 	 	 <div class="filter-dropdown" id="dropdown-tarefas"><div class="filter-dropdown-content"><div class="filter-buttons-container" id="tarefas-list"></div></div></div>
 	 	 	 	 <div class="filter-dropdown" id="dropdown-localizacao"><div class="filter-dropdown-content"><div class="filter-buttons-container" id="localizacao-list"></div></div></div>
 	 	 	 	</nav>
 	 	 	<div class="container" id="main-container">
 	 	 	 	<div class="timeline-container" id="timeline-container">
 	 	 	 	 	<div class="timeline-main" id="timeline-main">
 	 	 	 	 	 	<div id="today-line"></div>
                        <div id="week-separators"></div>
 	 	 	 	 	 	<div class="timeline-header-group" id="timeline-header-group">
 	 	 	 	 	 	 	<div class="header-spacer"></div>
 	 	 	 	 	 	</div>
 	 	 	 	 	 	<div class="timeline-content" id="timeline-content">
 	 	 	 	 	 	</div>
 	 	 	 	 	</div>
 	 	 	 	 	<div class="floating-controls">
 	 	 	 	 	 	<button class="control-btn edit-mode-btn" id="editModeBtn" onclick="toggleEditMode()" aria-label="Ativar/Desativar Modo de Edição" title="Ativar/Desativar Modo de Edição">✏️</button>
                        <button class="control-btn" id="addProjectBtn" aria-label="Adicionar Novo Projeto" title="Configurar Script de Novo Projeto">+</button>
 	 	 	 	 	 	<a href="https://docs.google.com/spreadsheets/d/1lpA82i_X-Wbk-T-hxHBywtYEbzqDP-BYM5LW7qb60MM/edit#gid=0" target="_blank" class="control-btn" id="sheetLink" aria-label="Abrir planilha no Google Sheets" title="Abrir Planilha">📅</a>
 	 	 	 	 	 	<button class="control-btn" id="clearCacheBtn" aria-label="Limpar cache local e recarregar" title="Limpar Cache e Recarregar">♻️</button>
 	 	 	 	 	</div>
 	 	 	 	</div>
                <div class="flag-icon" id="flag-icon">🇧🇷</div>
 	 	 	</div>
 	 	</main>
 	</div>

 	<div class="modal-overlay hidden" id="linkModal">
 	 	<div class="modal-content glass">
 	 	 	<h2 style="color: #FFFFFF;">Salvar Link em Novo Arquivo</h2>
 	 	 	<input type="text" id="scriptLinkInput" placeholder="Cole o novo link do Editor de Scripts (opcional)">
 	 	 	<button id="submitSaveBtn">Salvar e Baixar Arquivo HTML</button>
 	 	</div>
 	</div>

 	<div class="modal-overlay hidden" id="manualModal">
 	 	<div class="modal-content glass">
 	 	 	<h2>📘 Guia Rápido – Timeline Unloop Filmes</h2>
 	 	 	<div class="manual-text">
 	 	 	 	<h3>1. Navegação</h3>
 	 	 	 	<ul>
 	 	 	 	 	<li><b>Agulha do Tempo:</b> A linha vermelha indica o dia de hoje.</li>
 	 	 	 	 	<li><b>Clique em qualquer dia:</b> Rola a visualização para centralizar o dia de hoje.</li>
 	 	 	 	 	<li><b>Clique no retângulo do projeto:</b> Rola a visualização até a última tarefa daquele projeto.</li>
 	 	 	 	 	<li><b>Clique no nome do projeto:</b> Expande ou recolhe as categorias e tarefas (clique simples vs. duplo).</li>
 	 	 	 	</ul>
 	 	 	 	<h3>2. Modo de Edição (✏️ Ativo por padrão)</h3>
                <ul>
                    <li><b>Duplo clique em célula:</b> Edita ou cria uma tarefa. Enter salva, Esc cancela.</li>
                    <li><b>Arrastar tarefa:</b> Move uma tarefa para outro dia ou troca de lugar com outra.</li>
                    <li><b>Shift + Arrastar tarefa:</b> Duplica uma tarefa para uma célula vazia.</li>
                    <li><b>Arrastar filtro de tarefa:</b> Arraste um botão de tarefa dos menus "Tarefas" ou "Localização" para uma célula vazia para criar uma nova tarefa rapidamente.</li>
                    <li><b>Ctrl + Z:</b> Desfaz a última alteração.</li>
                </ul>
 	 	 	 	<h3>3. Botões e Filtros</h3>
 	 	 	 	<ul>
                    <li>🔄 <b>Atualizar Dados:</b> Recarrega todas as configurações e tarefas da planilha sem atualizar a página.</li>
                    <li>✨ <b>Otimização:</b> Liga/desliga efeitos visuais pesados para melhorar a performance.</li>
 	 	 	 	 	<li>📅 <b>Planilha:</b> Abre o Google Sheets correspondente.</li>
 	 	 	 	 	<li>🔑 <b>Script:</b> Após editar, clique em ✏️ novamente para desativar. Um código será copiado. Cole e execute esse código no Editor de Scripts do Google para salvar as mudanças.</li>
 	 	 	 	 	<li>🗂️ <b>Reset:</b> Limpa todos os filtros aplicados e alterna a expansão dos projetos.</li>
 	 	 	 	 	<li><b>Filtros (Projetos, Clientes, etc.):</b> Clique para selecionar/desselecionar itens. A lógica pode variar (seleção múltipla ou única).</li>
 	 	 	 	</ul>
 	 	 	 	<h3>4. Interações Visuais</h3>
 	 	 	 	<ul>
 	 	 	 	 	<li><b>Linha do mês:</b> Clicar na barra de um mês altera o esquema de cores.</li>
 	 	 	 	 	<li><b>Finais de semana:</b> Clicar nas colunas de sábado/domingo alterna o encolhimento.</li>
 	 	 	 	 	<li><b>Fundo:</b> Clicar no canto esquerdo da tela escurece o fundo; clicar no direito altera as cores.</li>
                    <li><b>🇧🇷 Bandeira:</b> Ativa/desativa o "Modo BR" de alto contraste e baixa saturação.</li>
 	 	 	 	</ul>
 	 	 	 	<h3>5. Modo Suspensão (4 min de inatividade)</h3>
 	 	 	 	<ul>
 	 	 	 	 	<li>Use o scroll, setas e teclas +/- para interagir com a animação.</li>
 	 	 	 	 	<li><b>Sair:</b> Pressione ESC ou mova o mouse.</li>
 	 	 	 	</ul>
 	 	 	</div>
 	 	 	<button id="closeManualBtn" style="margin-top: 15px;">Sair</button>
 	 	</div>
 	</div>

    <div class="modal-overlay hidden" id="projectConfigModal">
        <div class="modal-content glass">
            <div id="project-form-container" style="display: flex; flex-direction: column; align-items: center; width: 100%; gap: 20px;">
                <h2>Configurar Novo Projeto</h2>
                <div class="input-group">
                    <input type="text" id="configProjectName" required placeholder=" ">
                    <span class="ghost-placeholder">(xxxx_NOME-DO-PROJETO)</span>
                </div>
                <div class="input-group">
                    <input type="text" id="configClientName" required placeholder=" ">
                    <span class="ghost-placeholder">(Cliente)</span>
                </div>
                <div class="input-group">
                    <input type="text" id="configCity" required placeholder=" ">
                    <span class="ghost-placeholder">Localização (Cidade)</span>
                </div>
                <div class="color-picker-wrapper">
                   <div class="form-group">
                       <input type="color" id="configMainColor" value="#999999">
                   </div>
                </div>
                 <div class="options-group">
                    <button class="option-box-btn" id="createInSheetBtn">Criar na Planilha</button>
                    <button class="option-box-btn" id="createInDriveBtn">Criar Pasta no Drive</button>
                </div>
                <div class="button-group">
                    <button id="generateScriptBtn" class="control-btn generate-btn">Salvar Ação</button>
                    <button id="closeConfigModalBtn" class="control-btn">Fechar</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal-overlay hidden" id="schedulingModal">
        <div class="modal-content glass">
            <h2>Agendar Tarefa</h2>
            <div class="input-group">
                <input type="text" id="scheduleTitle" required placeholder="Título do Evento">
            </div>
            <div class="input-group">
                <textarea id="scheduleDescription" rows="3" placeholder="Descrição (opcional)"></textarea>
            </div>
            <div class="input-group">
                <input type="date" id="scheduleDate">
            </div>
             <div class="input-group">
                <input type="time" id="scheduleTime" value="11:00">
            </div>
            <div class="input-group guests-input-group">
                <input type="text" id="scheduleGuests" placeholder="Convidados">
                <div class="guest-list-popup hidden"></div>
            </div>
            <label class="checkbox-label">
                <input type="checkbox" id="scheduleMeet" checked>
                Criar link para Google Meet
            </label>
            <div class="button-group">
                <button id="saveScheduleBtn" class="control-btn generate-btn">Salvar Ação</button>
                <button id="closeScheduleBtn" class="control-btn">Fechar</button>
            </div>
        </div>
    </div>

    <div class="tooltip"></div>
    <div class="drag-tooltip"></div>
    {{SCRIPT}}
</body>
</html>`;

const EMBEDDED_CSS = `
/* Estilos gerais, fontes e reset */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

:root {
    --bg-grad-color-1: #4585a1;
    --bg-grad-color-2: #45bab2;
    --bg-grad-color-3: #2cb567;
    --bg-grad-color-4: #72ad48;
    --bg-grad-speed: 60s;
    --bg-anim-opacity: 0.3;
    --background-canvas-blur: 64px;
    
    --timeline-bg-opacity: 0.22;
    --project-header-bg-opacity: 0.1;
    --project-expanded-bg-opacity: 0.15;
    --task-opacity: 0.8;
    --weekend-bg-opacity: 0.165;
    --weekend-bg-opacity-br: 0.1;
    
    --global-opacity: 0.01;
    --border-opacity: 0.05;
    --shadow-opacity: 0.02;
    --weekday-darkness: 0.05;
    --line-saturation: 1.7;

    --animation-duration-short: 0.9s;
    --animation-duration-long: 2.5s;
    
    --hud-blur-multiplier: 1.0;
    --weather-icon-opacity: 0.6;
    --duration-icon-size: 10px;
    --category-row-brightness: 1.2;
    --br-duration-bar-stroke-width: 1.5px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    background-color: #0d1117;
    color: #c9d1d9;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    font-size: 14px;
}

body.intro-state {
    background-color: #000;
}

.background-gradient {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(-45deg, var(--bg-grad-color-1), var(--bg-grad-color-2), var(--bg-grad-color-3), var(--bg-grad-color-4));
    background-size: 400% 400%;
    animation: gradient var(--bg-grad-speed) ease infinite;
    z-index: -2;
    opacity: 0;
    transition: opacity 2s ease, filter 2s ease;
}
.background-gradient.visible {
    opacity: 1;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

#background-animation-container {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1;
    filter: blur(var(--background-canvas-blur));
    opacity: var(--bg-anim-opacity);
    transition: opacity 1s;
    opacity: 0;
}
#background-animation-container.visible {
    opacity: var(--bg-anim-opacity);
}
#animatedCanvas {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
}

.br-mode-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(255, 255, 255, 0.5); /* Cor padrão, será sobrescrita pelo JS */
    z-index: -1;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
}
body.br-mode .br-mode-overlay {
    opacity: 1;
}

/* Efeitos de vidro e blur */
.glass {
    background-color: rgba(30, 30, 30, var(--opacidade-efeito-vidro, 0.15));
    backdrop-filter: blur(calc(8px * var(--hud-blur-multiplier)));
    -webkit-backdrop-filter: blur(calc(8px * var(--hud-blur-multiplier)));
    border: 1px solid rgba(255, 255, 255, var(--border-opacity, 0.05));
    box-shadow: 0 4px 30px rgba(0, 0, 0, var(--shadow-opacity, 0.02));
    transition: background-color 0.5s, backdrop-filter 0.5s;
}

.content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: filter 0.8s ease-in-out;
}
.content-wrapper.blurred,
.content-wrapper.screensaver-blur {
    filter: blur(10px) brightness(0.7);
}

/* Modais */
.modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.3s ease;
}
.modal-overlay.hidden {
    opacity: 0;
    pointer-events: none;
}
.modal-content {
    padding: 30px;
    border-radius: var(--raio-borda-projetos, 15px);
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.modal-content h2 {
    margin-bottom: 20px;
    font-weight: 500;
}
.modal-content input, .modal-content textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: var(--raio-borda-botoes, 7px);
    color: #fff;
    font-size: 1rem;
}
.modal-content #submitSaveBtn {
    padding: 10px 20px;
    background-color: #28a745;
    border: none;
    border-radius: var(--raio-borda-botoes, 7px);
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}
.modal-content #submitSaveBtn:hover {
    background-color: #218838;
}

/* Layout Principal */
.header {
    height: 60px;
    width: 100%;
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100%;
}
.header-title {
    font-size: 1.5rem;
    font-weight: 300;
    cursor: pointer;
}
.controls {
    display: flex;
    align-items: center;
    gap: 10px;
}
.control-btn, .reset-filters-btn, .filter-tab-horizontal, .filter-btn, .option-box-btn {
    background-color: rgba(255,255,255,0.1);
    color: #c9d1d9;
    border: 1px solid transparent;
    border-radius: var(--raio-borda-botoes, 7px);
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    font-size: 14px;
}
.control-btn:hover, .reset-filters-btn:hover, .filter-tab-horizontal:hover {
    background-color: rgba(255,255,255,0.2);
}
.control-btn.active, .reset-filters-btn.active, .filter-tab-horizontal.active {
    background-color: rgba(92, 219, 149, 0.3);
    border-color: rgba(92, 219, 149, 0.5);
}
.main-layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* Filtros Horizontais */
.filter-menu-horizontal {
    padding: 5px 20px;
    margin: 10px 20px;
    border-radius: var(--raio-borda-abast-filtro, 10px);
    position: relative;
    z-index: 10;
}
.filter-tabs-horizontal {
    display: flex;
    gap: 10px;
}
.filter-dropdown {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: auto;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.filter-dropdown.active {
    max-height: 500px;
}
.filter-dropdown-content {
    padding: 15px;
    border-radius: var(--raio-borda-dropdown-filtro, 12px);
    width: auto;
    max-height: 300px;
    overflow-y: auto;
}
.filter-buttons-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.filter-btn {
    white-space: nowrap;
    position: relative;
}
.filter-btn.active {
    background-color: rgba(92, 219, 149, 0.7);
    color: #fff;
    border-color: rgba(92, 219, 149, 1);
}
.filter-btn.inactive {
    opacity: 0.6;
    text-decoration: line-through;
}

/* Timeline */
.container {
    flex-grow: 1;
    overflow: hidden;
    position: relative;
}
.timeline-container {
    width: 100%;
    height: 100%;
}
.timeline-main {
    height: 100%;
    overflow: auto;
    position: relative;
    cursor: grab;
}
.timeline-main:active {
    cursor: grabbing;
}
#today-line {
    position: absolute;
    top: 0;
    width: 2px;
    background-color: #ff4500;
    z-index: 5;
    pointer-events: none;
    box-shadow: 0 0 10px 2px #ff4500;
    filter: saturate(var(--line-saturation));
}
#week-separators {
    position: absolute;
    top: 0;
    left: 250px;
    width: calc(100% - 250px);
    height: 100%;
    pointer-events: none;
    z-index: 0;
}
.week-separator {
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.08);
}
.timeline-header-group {
    position: sticky;
    top: 0;
    z-index: 4;
    display: flex;
    background: rgba(13, 17, 23, 0.6);
    backdrop-filter: blur(calc(4px * var(--hud-blur-multiplier)));
    -webkit-backdrop-filter: blur(calc(4px * var(--hud-blur-multiplier)));
}
.header-spacer {
    min-width: 250px;
    width: 250px;
    border-right: 1px solid rgba(255,255,255,0.1);
}
.month-row, .day-row, .date-row {
    display: flex;
}
.month-cell, .day-cell, .date-cell {
    text-align: center;
    padding: 4px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-right: 1px solid rgba(255,255,255,0.1);
    flex-shrink: 0;
}
.month-cell {
    font-weight: 500;
    text-transform: capitalize;
}
.date-cell.today {
    color: #ff6347;
    font-weight: 700;
}
.day-cell.weekend, .date-cell.weekend {
    color: #8b949e;
}
.timeline-content {
    position: relative;
    padding-top: 5px;
}
.project-block {
    display: flex;
    position: relative;
    margin-bottom: 8px;
    background: rgba(0,0,0, var(--project-expanded-bg-opacity));
    border-radius: var(--raio-borda-projetos, 15px);
}
.project-header {
    min-width: 250px;
    width: 250px;
    padding: 5px 10px;
    position: sticky;
    left: 0;
    z-index: 3;
    background: rgba(30, 30, 30, var(--project-header-bg-opacity));
    border-top-left-radius: var(--raio-borda-projetos, 15px);
    border-bottom-left-radius: var(--raio-borda-projetos, 15px);
}
.project-header-fixed {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
}
.project-color-wrapper {
    position: relative;
    width: 10px;
    height: 80%;
    cursor: pointer;
}
.project-color {
    width: 100%;
    height: 100%;
    border-radius: 3px;
}
.project-info {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
}
.client-name {
    font-weight: 300;
    opacity: 0.7;
}
.project-content {
    display: none;
    flex-grow: 1;
}
.project-block.expanded .project-content {
    display: flex;
}
.project-categories {
    min-width: 120px;
    width: 120px;
    flex-shrink: 0;
    padding-right: 10px;
}
.category-item {
    padding: 2px 5px;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #a0a0a0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.category-item.darker-row {
    background-color: rgba(255,255,255,0.03);
}
.project-tasks {
    flex-grow: 1;
}
.category-timeline-row {
    position: relative;
}
.category-timeline-row.darker-row {
    background-color: rgba(255,255,255,0.03);
    filter: brightness(var(--category-row-brightness));
}
.category-timeline {
    display: grid;
}
.task-cell {
    position: relative;
    border-right: 0.7px solid rgba(255,255,255,0.05);
}
.task-cell.weekend {
    background-color: rgba(0,0,0, var(--weekday-darkness));
}
.task-content {
    position: absolute;
    top: 2px; bottom: 2px; left: 2px; right: 2px;
    border-radius: var(--raio-borda-tarefas, 6px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: grab;
    user-select: none;
    opacity: var(--task-opacity);
    transition: transform 0.1s ease-out, box-shadow 0.2s;
}
.task-content.dragging {
    opacity: 0.5;
}
.task-cell.drag-over {
    background-color: rgba(92, 219, 149, 0.3) !important;
}
.category-item.drag-over-category {
    background-color: rgba(92, 219, 149, 0.2);
}

/* Floating Controls */
.floating-controls {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 20;
}
.edit-mode-btn.trembling {
    animation: tremble 0.5s infinite;
}
@keyframes tremble {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px) rotate(-2deg); }
    75% { transform: translateX(2px) rotate(2deg); }
}

/* Loading & Screensaver */
.loading-overlay, #screensaver-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity var(--animation-duration-long) ease;
}
.loading-overlay.fade-out {
    opacity: 0;
}
.loading-overlay.hidden, #screensaver-overlay:not(.visible) {
    display: none;
}
#screensaver-overlay {
    opacity: 0;
    pointer-events: none;
}
#screensaver-overlay.visible {
    opacity: 1;
    pointer-events: all;
}
#logo-canvas, #screensaver-canvas {
    width: 80%;
    max-width: 500px;
    height: auto;
}
#loading-status-text {
    margin-top: 20px;
    font-size: 1rem;
    color: #8b949e;
}

/* Tooltip */
.tooltip, .drag-tooltip {
    position: fixed;
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 10000;
    pointer-events: none;
    opacity: 0;
    transform: translate(-50%, -120%);
    transition: opacity 0.2s, transform 0.2s;
}
.tooltip.visible, .drag-tooltip.visible {
    opacity: 1;
    transform: translate(-50%, -130%);
}

/* Modo BR */
body.br-mode {
    background-color: #000;
}
body.br-mode .glass {
    background-color: rgba(30, 30, 30, 0.1);
    backdrop-filter: blur(calc(2px * var(--hud-blur-multiplier)));
    -webkit-backdrop-filter: blur(calc(2px * var(--hud-blur-multiplier)));
    border-color: rgba(255, 255, 255, 0.15);
}
body.br-mode .background-gradient {
    filter: brightness(1.2) hue-rotate(0deg) saturate(0);
}
body.br-mode .project-duration-bar {
    border: var(--br-duration-bar-stroke-width) solid black;
}
body.br-mode .task-cell.weekend {
    background-color: rgba(0,0,0, var(--weekend-bg-opacity-br));
}
.flag-icon {
    position: fixed;
    bottom: 20px;
    left: 20px;
    font-size: 24px;
    cursor: pointer;
    z-index: 20;
    opacity: 0.5;
    transition: opacity 0.3s;
}
.flag-icon:hover {
    opacity: 1;
}
`;
// --- FIM DO CONTEÚDO EMBUTIDO ---


// --- CONFIGURAÇÕES GLOBAIS ---
let SCRIPT_EDITOR_LINK = 'https://script.google.com/u/0/home/projects/1C9MeJjMHwPNzFNEdUr6zdcTI5PUmR1ze92vwu1tAnQsDjMYjsuzR1mrF/edit';
const API_KEY = '';
const SHEET_ID = '1lpA82i_X-Wbk-T-hxHBywtYEbzqDP-BYM5LW7qb60MM';
const SHEET_NAME = 'Principal';
let RANGE = `${SHEET_NAME}!A:ZZ`;

// --- Valores padrão (serão sobrescritos pela planilha) ---
let TASK_COLORS = {};
let CATEGORIES = [];
let GUEST_LIST = [];
let DRIVE_FOLDER_ID = '';

let config = {
    categoriaProjeto: 'Entregas', 
    coresTarefas: {}, 
    mesesPassado: 6, 
    mesesFuturo: 8, 
    diasParaAvisos: 14, 
    diasPulsarAvisos: 4, 
    tarefasAlerta: ['Evento', 'Reunião', 'Gravação', 'Monstro', 'Animatic'], 
    tarefasClima: ['Gravação', 'Drone', 'Captação', 'Filmagem'],
    efeitosLigados: true, 
    gradienteLigado: true, 
    velocidadeGradiente: '60s', 
    gradienteCor1: '#4585a1', 
    gradienteCor2: '#45bab2', 
    gradienteCor3: '#2cb567', 
    gradienteCor4: '#72ad48', 
    brilhoGradiente: 1.0, 
    circulosLigados: true, 
    contagemParticulas: 12, 
    opacidadeParticulas: 0.3, 
    comprimentoRastro: 9, 
    raioMinMaxParticula: '256,700', 
    blurFundo: '64px', 
    amplitudeMovimento: 6, 
    logoContagemTracadores: 36, 
    logoComprimentoRastro: 500, 
    logoVelocidade: 12.87, 
    opacidadeGlobal: 0.01, 
    opacidadeBorda: 0.05, 
    opacidadeSombra: 0.02, 
    opacidadeTarefa: 0.8, 
    opacidadeFundoTimeline: 0.22, 
    opacidadeEfeitoVidro: 0.15, 
    opacidadeCabecalhoProjeto: 0.1, 
    opacidadeFundoProjetoExpandido: 0.15, 
    escurecimentoFDS: 0.05, 
    opacidadeBarraDuracao: 0.26, 
    saturacaoBarraDuracao: 1.26, 
    larguraSidebar: 250, 
    zoomVertical: 28, 
    zoomHorizontal: 60, 
    alturaLinhaEntregas: 22, 
    raioBordaBotoes: 7, 
    raioBordaProjetos: 15, 
    raioBordaTarefas: 6, 
    raioBordaAbasFiltro: 10, 
    raioBordaDropdownFiltro: 12, 
    multiplicadorHudBlur: 1.0, 
    saturacaoLinhaHoje: 1.7, 
    posicaoTop: 59, 
    posicaoLeft: 20, 
    corGlow: 'rgba(255, 69, 0, 0.35)', 
    opacidadeGlowInicio: 0.7, 
    opacidadeGlowPico: 1, 
    blurGlowInicio: 3, 
    blurGlowPico: 8, 
    velocidadePulsoGlow: 2, 
    duracaoAnimacaoCurta: 0.9, 
    duracaoAnimacaoLonga: 2.5, 
    atrasoTooltipTarefa: 500, 
    atrasoTooltipBarraDuracao: 500, 
    tempoScreensaver: 4, 
    atrasoRolagemAgulha: 1500, 
    efeitosEntradaProximidade: true, 
    efeitoProximidadeEscala: 0.1, 
    atrasoCascataIntro: 100,
    opacidadeCirculoEntrega: 0.3,
    opacidadeIconeClima: 0.6,
    tamanhoIconeDuracao: 10,
    opacidadeIconeClimaMinMax: '1, 0.2',
    adicionalBrilhoRowCategoria: 0.2,
    opacidadeBarraDuracaoNormal: 0.26,
    opacidadeBarraDuracaoBr: 0.5,
    escurecimentoBarraDuracaoBr: 0.8,
    opacidadeFimDeSemana: 0.165,
    opacidadeFimDeSemanaBr: 0.1,
    brDurationBarStrokeWidth: 1.5,
    brModeOverlayTransparency: 0.5,
    brModeOverlayBlackMix: 0,
};
// --- Fim da Configuração ---

let rawSheetData = [];
let projects = [];
let dateColumns = [];
let todayColumnIndex = -1;
let currentFilters = { projetos: new Set(), clientes: new Set(), categorias: new Set(), tarefas: new Set(), localizacao: new Set() };
let allFilters = { projetos: new Set(), clientes: new Set(), categorias: new Set(), tarefas: new Set(), localizacao: new Set() };
let taskFilterToggleState = 1; 
let categoryFilterToggleState = 1; 
let columnWidth = 60;
let showClosedProjects = false;
let expandedProjects = new Map();
let isEditMode = true;
let actionHistory = [];
let draggedTaskData = null;
let userActionCount = 0;
let monthColumnColors = [];
let isInitialLoad = true;
let tooltipTimer = null;
let tooltipElement = null; 
let dragTooltipElement = null;
let previouslyVisibleProjects = new Set();
let masterToggleState = 0;
let closedFilterState = 0;
let visualEffectsEnabled = true;
let idleTimer;
let loadingAnimationInstance = null;
let screensaverAnimation = null;
let bgBrightness = 0.6;
let bgHue = 0;
let monthHueOffset = 0;
let weekendWidthMultiplier = 0.2;
let sidebarWidth = 250;
let categoryRowHeight = 28;
let deliveryRowHeight = 22;
const CACHE_KEY = 'unloopTimelineCache_v39'; 
let isBrMode = true;
let projectSortState = 0; // 0: original, 1: antigo > novo, 2: novo > antigo
let brModeBlackMixLevel = 0; // 0=0%, 1=20%, ..., 5=100%

let weatherData = {};


document.addEventListener('DOMContentLoaded', async () => {
    isInitialLoad = true;
    
    const loadingStatusText = document.getElementById('loading-status-text');
    tooltipElement = document.querySelector('.tooltip');
    dragTooltipElement = document.querySelector('.drag-tooltip');
    
    const cachedState = loadStateFromCache();
    if (cachedState) {
       if(cachedState.scriptEditorLink) {
           SCRIPT_EDITOR_LINK = cachedState.scriptEditorLink;
       }
        applyCachedUIState(cachedState);
    }
    
    if (isBrMode) {
        document.body.classList.add('br-mode');
    }

    updateEditModeUI();

    try {
        if (isInitialLoad) {
            document.body.classList.add('intro-state');
            loadingAnimationInstance = new BreathingLogo('logo-canvas');
        } else {
            document.getElementById('loading-overlay').classList.add('hidden');
        }

        loadingStatusText.textContent = 'Conectando com a planilha...';
        await new Promise(resolve => setTimeout(resolve, 500));
    
        await loadData();
        if (!rawSheetData || rawSheetData.length === 0) {
            throw new Error("Dados da planilha não foram carregados ou estão vazios.");
        }
        
        if (cachedState && cachedState.edits) {
            applyCachedEdits(cachedState.edits);
        }

        parseConfigFromSheet();
        applyCssVariablesFromConfig();
        parseData(); 
        
        setupEventListeners();
        setupFilters();
        renderTimeline();
        populateNoticeBoard();
        initProximityAnimations();
        
        if (isInitialLoad) {
            zoomOut();
            zoomOut();
            zoomOut();
            setTimeout(() => animateToToday(6495), 1000);
            setTimeout(() => {
                const loadingOverlay = document.getElementById('loading-overlay');
                loadingOverlay.classList.add('fade-out');
                document.getElementById('content-wrapper').classList.remove('blurred');
                setTimeout(() => {
                    loadingOverlay.classList.add('hidden');
                    if (loadingAnimationInstance) {
                        loadingAnimationInstance.stop();
                    }
                    document.body.classList.remove('intro-state');
                    resetIdleTimer();
                    isInitialLoad = false;
                }, 2000);
            }, 2500);
        } else {
            animateToToday(100);
            resetIdleTimer();
        }
        updateTodayLinePosition();

    } catch (error) {
        console.error("Falha crítica na inicialização:", error);
        loadingStatusText.textContent = '';
        document.getElementById('loading-overlay').innerHTML = `<div class="error">Falha ao carregar. Verifique a chave de API, ID da planilha ou conexão.<br><br>${error.message}</div>`;
    }
});

async function refreshDataAndMerge() {
    const refreshBtn = document.getElementById('refreshDataBtn');
    refreshBtn.classList.add('loading');
    refreshBtn.disabled = true;

    try {
        await loadData(); // Carrega novos dados em rawSheetData
        
        // Não limpa actionHistory
        
        parseConfigFromSheet();
        applyCssVariablesFromConfig();
        
        parseData(); // Processa os dados novos, criando uma base limpa
        
        // Re-aplica as edições locais sobre a nova base
        reapplyLocalEdits(); 
        
        // Re-processa os dados com as edições locais mescladas
        parseData();

        // Renderiza a interface com o estado mesclado
        setupFilters();
        renderTimeline();
        populateNoticeBoard();

        const indicator = document.getElementById('updateIndicator');
        indicator.textContent = '✅ Dados Atualizados';
        indicator.classList.add('show');
        setTimeout(() => indicator.classList.remove('show'), 2000);

    } catch (error) {
        console.error("Falha ao atualizar e mesclar dados:", error);
        alert("Não foi possível atualizar os dados da planilha.");
    } finally {
        refreshBtn.classList.remove('loading');
        refreshBtn.disabled = false;
    }
}

function reapplyLocalEdits() {
    if (!actionHistory || actionHistory.length === 0) return;

    actionHistory.forEach(action => {
        if (['edit', 'move', 'duplicate'].includes(action.type)) {
            action.changes.forEach(change => {
                updateLocalData(change.row, change.col, change.newValue, false);
            });
        }
    });
}

async function handleRefreshData() {
    await refreshDataAndMerge();
}

function parseConfigFromSheet() {
    const headerRow = rawSheetData[2]?.values;
    const configRow = rawSheetData[3]?.values;
    const guestsRow = rawSheetData[4]?.values;

    if (!headerRow || !configRow) {
        console.warn("Linhas de configuração (3 e 4) não encontradas. Usando valores padrão.");
        return;
    }
    const headerMap = {};
    headerRow.forEach((cell, index) => {
        if (cell && cell.formattedValue) {
            headerMap[cell.formattedValue.trim()] = index;
        }
    });
    const getVal = (headerName, type) => {
        const index = headerMap[headerName];
        if (index === undefined || !configRow[index]) {
            return null;
        }
        const cell = configRow[index];
        switch (type) {
            case 'string': return cell.formattedValue;
            case 'number': return cell.effectiveValue?.numberValue;
            case 'boolean': return cell.effectiveValue?.boolValue;
            default: return cell.formattedValue;
        }
    };
    const getValByCell = (cellRef, type) => {
        const colName = cellRef.match(/[A-Z]+/)[0];
        const row = parseInt(cellRef.match(/\d+/)[0], 10) - 1;
        let col = 0;
        for (let i = 0; i < colName.length; i++) {
            col = col * 26 + (colName.charCodeAt(i) - 64);
        }
        col -= 1;

        if (!rawSheetData[row] || !rawSheetData[row].values || !rawSheetData[row].values[col]) {
            return null;
        }
        const cell = rawSheetData[row].values[col];
         switch (type) {
            case 'string': return cell.formattedValue;
            case 'number': return cell.effectiveValue?.numberValue;
            case 'boolean': return cell.effectiveValue?.boolValue;
            default: return cell.formattedValue;
        }
    };

    const safeParse = (headerName, type, defaultVal) => {
        const value = getVal(headerName, type);
        return (value !== undefined && value !== null) ? value : defaultVal;
    };
     const safeParseByCell = (cellRef, type, defaultVal) => {
        const value = getValByCell(cellRef, type);
        return (value !== undefined && value !== null) ? value : defaultVal;
    };
    const safeSplit = (val, defaultVal) => (val && typeof val === 'string' && val.trim() !== '') ? val.split(',').map(t => t.trim()) : defaultVal;

    CATEGORIES = safeSplit(getVal('Categoria do Projeto', 'string'), config.categoriaProjeto.split(',').map(c => c.trim()));
    const taskColorsStr = getVal('Cores e Tarefas', 'string');
    if (taskColorsStr && taskColorsStr.trim() !== '') {
        try {
            TASK_COLORS = taskColorsStr.split(',').reduce((acc, pair) => {
                const parts = pair.split(':');
                if (parts.length === 2) {
                    const taskName = parts[0].trim();
                    const color = parts[1].trim();
                    if (taskName && color) acc[taskName] = color;
                }
                return acc;
            }, {});
        } catch (e) {
            console.error("Erro ao processar TASK_COLORS da planilha. Usando valor padrão.", e);
            TASK_COLORS = config.coresTarefas;
        }
    } else {
    TASK_COLORS = config.coresTarefas;
    }

    if (guestsRow) {
        GUEST_LIST = safeSplit(guestsRow[4]?.formattedValue, []);
        DRIVE_FOLDER_ID = guestsRow[6]?.formattedValue || '';
    }
    
    // Controles Visuais
    config.opacidadeFundoTimeline = safeParseByCell('AI4', 'number', config.opacidadeFundoTimeline);
    config.tarefasClima = safeSplit(getValByCell('H5', 'string'), config.tarefasClima);
    config.opacidadeCirculoEntrega = safeParseByCell('BS4', 'number', config.opacidadeCirculoEntrega);
    config.opacidadeIconeClima = safeParseByCell('BT4', 'number', config.opacidadeIconeClima);
    config.tamanhoIconeDuracao = safeParseByCell('BT5', 'number', config.tamanhoIconeDuracao);
    config.opacidadeIconeClimaMinMax = safeParseByCell('BV4', 'string', config.opacidadeIconeClimaMinMax);
    config.adicionalBrilhoRowCategoria = safeParseByCell('BZ4', 'number', config.adicionalBrilhoRowCategoria);
    config.opacidadeBarraDuracaoNormal = safeParseByCell('BW4', 'number', config.opacidadeBarraDuracaoNormal);
    config.opacidadeBarraDuracaoBr = safeParseByCell('BX4', 'number', config.opacidadeBarraDuracaoBr);
    config.escurecimentoBarraDuracaoBr = safeParseByCell('BY4', 'number', config.escurecimentoBarraDuracaoBr);
    config.opacidadeFimDeSemana = safeParseByCell('CA4', 'number', config.opacidadeFimDeSemana);
    config.opacidadeFimDeSemanaBr = safeParseByCell('CB4', 'number', config.opacidadeFimDeSemanaBr);
    config.brDurationBarStrokeWidth = safeParseByCell('CC4', 'number', config.brDurationBarStrokeWidth);
    config.brModeOverlayTransparency = safeParseByCell('CD4', 'number', config.brModeOverlayTransparency);
    config.brModeOverlayBlackMix = safeParseByCell('CE4', 'number', config.brModeOverlayBlackMix);


    config.mesesPassado = safeParse('Meses no Passado', 'number', config.mesesPassado);
    config.mesesFuturo = safeParse('Meses no Futuro', 'number', config.mesesFuturo);
    config.diasParaAvisos = safeParse('Dias para Avisos', 'number', config.diasParaAvisos);
    config.diasPulsarAvisos = safeParse('Dias para pulsar Avisos', 'number', config.diasPulsarAvisos);
    config.tarefasAlerta = safeSplit(getVal('Tarefas de Alerta', 'string'), config.tarefasAlerta);
    config.efeitosLigados = safeParse('Ligar/Desligar Efeitos', 'boolean', config.efeitosLigados);
    config.gradienteLigado = safeParse('Ligar/Desligar Gradiente', 'boolean', config.gradienteLigado);
    config.velocidadeGradiente = safeParse('Velocidade do Gradiente', 'string', config.velocidadeGradiente);
    config.gradienteCor1 = safeParse('Gradiente Cor 1', 'string', config.gradienteCor1);
    config.gradienteCor2 = safeParse('Gradiente Cor 2', 'string', config.gradienteCor2);
    config.gradienteCor3 = safeParse('Gradiente Cor 3', 'string', config.gradienteCor3);
    config.gradienteCor4 = safeParse('Gradiente Cor 4', 'string', config.gradienteCor4);
    config.brilhoGradiente = safeParse('Brilho do Gradiente', 'number', config.brilhoGradiente);
    bgBrightness = config.brilhoGradiente;
    config.circulosLigados = safeParse('Ligar/Desligar Círculos', 'boolean', config.circulosLigados);
    config.contagemParticulas = safeParse('Contagem de Partículas', 'number', config.contagemParticulas);
    config.opacidadeParticulas = safeParse('Opacidade das Partículas', 'number', config.opacidadeParticulas);
    config.comprimentoRastro = safeParse('Comprimento do Rastro', 'number', config.comprimentoRastro);
    config.raioMinMaxParticula = safeParse('Raio Mín/Máx Partícula', 'string', config.raioMinMaxParticula);
    config.blurFundo = safeParse('Blur do Fundo', 'string', config.blurFundo);
    config.amplitudeMovimento = safeParse('Amplitude Movimento', 'number', config.amplitudeMovimento);
    config.logoContagemTracadores = safeParse('Logo Contagem Traçadores', 'number', config.logoContagemTracadores);
    config.logoComprimentoRastro = safeParse('Logo Comprimento Rastro', 'number', config.logoComprimentoRastro);
    config.logoVelocidade = safeParse('Logo Velocidade', 'number', config.logoVelocidade);
    config.opacidadeGlobal = safeParse('Opacidade Global', 'number', config.opacidadeGlobal);
    config.opacidadeBorda = safeParse('Opacidade Borda', 'number', config.opacidadeBorda);
    config.opacidadeSombra = safeParse('Opacidade Sombra', 'number', config.opacidadeSombra);
    config.opacidadeTarefa = safeParse('Opacidade Tarefa', 'number', config.opacidadeTarefa);
    config.opacidadeEfeitoVidro = safeParse('Opacidade Efeito Vidro', 'number', config.opacidadeEfeitoVidro);
    config.opacidadeCabecalhoProjeto = safeParse('Opacidade Cabeçalho Projeto', 'number', config.opacidadeCabecalhoProjeto);
    config.opacidadeFundoProjetoExpandido = safeParse('Opacidade Fundo (Projeto Expandido)', 'number', config.opacidadeFundoProjetoExpandido);
    config.escurecimentoFDS = safeParse('Escurecimento FDS', 'number', config.escurecimentoFDS);
    config.opacidadeBarraDuracao = safeParse('Opacidade Barra Duração', 'number', config.opacidadeBarraDuracao);
    config.saturacaoBarraDuracao = safeParse('Saturação Barra Duração', 'number', config.saturacaoBarraDuracao);
    config.larguraSidebar = safeParse('Largura da Sidebar', 'number', config.larguraSidebar);
    config.zoomVertical = safeParse('Zoom Vertical (Altura Linha)', 'number', config.zoomVertical);
    config.zoomHorizontal = safeParse('Zoom Horizontal (Largura Col)', 'number', config.zoomHorizontal);
    config.alturaLinhaEntregas = safeParse('Altura Linha "Entregas"', 'number', config.alturaLinhaEntregas);
    config.raioBordaBotoes = safeParse('Raio Borda (Botões)', 'number', config.raioBordaBotoes);
    config.raioBordaProjetos = safeParse('Raio Borda (Projetos)', 'number', config.raioBordaProjetos);
    config.raioBordaTarefas = safeParse('Raio Borda (Tarefas)', 'number', config.raioBordaTarefas);
    config.raioBordaAbasFiltro = safeParse('Raio Borda (Abas Filtro)', 'number', config.raioBordaAbasFiltro);
    config.raioBordaDropdownFiltro = safeParse('Raio Borda (Dropdown Filtro)', 'number', config.raioBordaDropdownFiltro);
    config.multiplicadorHudBlur = safeParse('Multiplicador de HUD Blur', 'number', config.multiplicadorHudBlur);
    config.saturacaoLinhaHoje = safeParse('Saturação Linha Hoje', 'number', config.saturacaoLinhaHoje);
    config.posicaoTop = safeParse('Posição Top', 'number', config.posicaoTop);
    config.posicaoLeft = safeParse('Posição Left', 'number', config.posicaoLeft);
    config.corGlow = safeParse('Cor do Glow', 'string', config.corGlow);
    config.opacidadeGlowInicio = safeParse('Opacidade Glow (Início)', 'number', config.opacidadeGlowInicio);
    config.opacidadeGlowPico = safeParse('Opacidade Glow (Pico)', 'number', config.opacidadeGlowPico);
    config.blurGlowInicio = safeParse('Blur Glow (Início)', 'number', config.blurGlowInicio);
    config.blurGlowPico = safeParse('Blur Glow (Pico)', 'number', config.blurGlowPico);
    config.velocidadePulsoGlow = safeParse('Velocidade Pulso Glow', 'number', config.velocidadePulsoGlow);
    config.duracaoAnimacaoCurta = safeParse('Duração Animação (Curta)', 'number', config.duracaoAnimacaoCurta);
    config.duracaoAnimacaoLonga = safeParse('Duração Animação (Longa)', 'number', config.duracaoAnimacaoLonga);
    config.atrasoTooltipTarefa = safeParse('Atraso Tooltip Tarefa', 'number', config.atrasoTooltipTarefa);
    config.atrasoTooltipBarraDuracao = safeParse('Atraso Tooltip Barra Duração', 'number', config.atrasoTooltipBarraDuracao);
    config.tempoScreensaver = safeParse('Tempo para entrar em Screensaver', 'number', config.tempoScreensaver);
    config.atrasoRolagemAgulha = safeParse('Atraso Rolagem da Agulha', 'number', config.atrasoRolagemAgulha);
    config.efeitosEntradaProximidade = safeParse('Efeitos de Entrada e Proximidade', 'boolean', config.efeitosEntradaProximidade);
    config.efeitoProximidadeEscala = safeParse('Efeito Proximidade (Escala)', 'number', config.efeitoProximidadeEscala);
    config.atrasoCascataIntro = safeParse('Atraso Cascata na Intro', 'number', config.atrasoCascataIntro);
}

function applyCssVariablesFromConfig() {
    const root = document.documentElement;
    root.style.setProperty('--animation-duration-short', `${config.duracaoAnimacaoCurta}s`);
    root.style.setProperty('--animation-duration-long', `${config.duracaoAnimacaoLonga}s`);
    root.style.setProperty('--global-opacity', config.opacidadeGlobal);
    root.style.setProperty('--border-opacity', config.opacidadeBorda);
    root.style.setProperty('--shadow-opacity', config.opacidadeSombra);
    root.style.setProperty('--weekday-darkness', config.escurecimentoFDS);
    root.style.setProperty('--task-opacity', config.opacidadeTarefa);
    root.style.setProperty('--line-saturation', config.saturacaoLinhaHoje);
    root.style.setProperty('--timeline-bg-opacity', config.opacidadeFundoTimeline);
    root.style.setProperty('--bg-grad-speed', config.velocidadeGradiente);
    root.style.setProperty('--hud-blur-multiplier', config.multiplicadorHudBlur || 1.0);
    root.style.setProperty('--background-canvas-blur', config.blurFundo);
    root.style.setProperty('--bg-anim-opacity', config.opacidadeParticulas);
    root.style.setProperty('--bg-grad-color-1', config.gradienteCor1);
    root.style.setProperty('--bg-grad-color-2', config.gradienteCor2);
    root.style.setProperty('--bg-grad-color-3', config.gradienteCor3);
    root.style.setProperty('--bg-grad-color-4', config.gradienteCor4);
    root.style.setProperty('--project-expanded-bg-opacity', config.opacidadeFundoProjetoExpandido);
    root.style.setProperty('--project-header-bg-opacity', config.opacidadeCabecalhoProjeto);
    
    root.style.setProperty('--weather-icon-opacity', config.opacidadeIconeClima);
    root.style.setProperty('--duration-icon-size', `${config.tamanhoIconeDuracao}px`);

    root.style.setProperty('--category-row-brightness', 1 + config.adicionalBrilhoRowCategoria);
    root.style.setProperty('--weekend-bg-opacity', config.opacidadeFimDeSemana);
    root.style.setProperty('--weekend-bg-opacity-br', config.opacidadeFimDeSemanaBr);
    root.style.setProperty('--br-duration-bar-stroke-width', `${config.brDurationBarStrokeWidth}px`);

    // Aplica os novos controles do overlay do modo BR
    updateBrModeOverlayColor();


    const bgGrad = document.querySelector('.background-gradient');
    if (bgGrad) {
        const currentBrightness = isBrMode ? bgBrightness * 1.2 : bgBrightness;
        bgGrad.style.filter = `brightness(${currentBrightness.toFixed(2)}) hue-rotate(${bgHue}deg)`;
        bgGrad.classList.toggle('visible', config.gradienteLigado && visualEffectsEnabled);
    }
    
    visualEffectsEnabled = config.efeitosLigados;
    document.body.classList.toggle('effects-disabled', !visualEffectsEnabled);
    document.getElementById('toggleEffectsBtn').style.backgroundColor = visualEffectsEnabled ? '' : 'rgba(92, 219, 149, 0.2)';

    const bgAnim = document.getElementById('background-animation-container');
    if (bgAnim) {
        bgAnim.classList.toggle('visible', config.circulosLigados && visualEffectsEnabled);
        if (config.circulosLigados && visualEffectsEnabled && !window.bgAnimationInitialized) {
            initAnimatedBackground();
            window.bgAnimationInitialized = true;
        }
    }
}
function showScreensaver() {
    if (!visualEffectsEnabled || document.hidden) return;
    const overlay = document.getElementById('screensaver-overlay');
    if (overlay.classList.contains('visible')) return;
    
    document.getElementById('content-wrapper').classList.add('screensaver-blur');
    overlay.classList.add('visible');
    
    if (!screensaverAnimation) {
        screensaverAnimation = new BreathingLogo('screensaver-canvas');
    } else {
        screensaverAnimation.start();
    }
}

function hideScreensaver() {
    const overlay = document.getElementById('screensaver-overlay');
    if(overlay.classList.contains('visible')) {
        document.getElementById('content-wrapper').classList.remove('screensaver-blur');
        overlay.classList.remove('visible');
        if (screensaverAnimation) {
            screensaverAnimation.stop();
            screensaverAnimation = null;
        }
    }
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    hideScreensaver();
    if (visualEffectsEnabled && !document.hidden) {
        idleTimer = setTimeout(showScreensaver, config.tempoScreensaver * 60 * 1000);
    }
}

async function loadData() {
    try {
        const fields = 'sheets(data(rowData(values(formattedValue,effectiveValue,effectiveFormat(backgroundColor)))))';
        RANGE = `${SHEET_NAME}!A:ZZ`;
        const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?ranges=${RANGE}&fields=${fields}&key=${API_KEY}`;

        const dataResponse = await fetch(dataUrl);
        if (!dataResponse.ok) throw new Error(`Erro HTTP: ${dataResponse.status}.`);

        const data = await dataResponse.json();
        if (!data.sheets || !data.sheets[0].data || !data.sheets[0].data[0].rowData) {
            throw new Error("A planilha está vazia ou a resposta da API está mal formatada.");
        }
        rawSheetData = data.sheets[0].data[0].rowData;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        rawSheetData = [];
        throw error;
    }
}

function parseData() {
    if (!Array.isArray(rawSheetData)) return;

    projects = [];

    const allTasks = new Set(), allClients = new Set(), allProjects = new Set(), allCities = new Set();
    const dateDataRow = rawSheetData?.[0]?.values || [];
    let fullDateColumns = [];
    for (let i = 4; i < dateDataRow.length; i++) {
        const dateStr = dateDataRow[i]?.formattedValue;
        if (dateStr && /^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
            const [day, month, year] = dateStr.split('/');
            fullDateColumns.push({ date: new Date(year, month - 1, day), originalIndex: i });
        }
    }
    const today = new Date(); today.setHours(0,0,0,0);
    let todayFoundIndex = fullDateColumns.findIndex(col => col.date.getTime() === today.getTime());
    if(todayFoundIndex === -1 && fullDateColumns.length > 0) {
        const closest = fullDateColumns.reduce((prev, curr) => Math.abs(curr.date - today) < Math.abs(prev.date - today) ? curr : prev );
        todayFoundIndex = fullDateColumns.indexOf(closest);
    }
    const sixMonthsAgo = new Date(today); sixMonthsAgo.setMonth(today.getMonth() - config.mesesPassado);
    const eightMonthsAhead = new Date(today); eightMonthsAhead.setMonth(today.getMonth() + config.mesesFuturo);
    const startIndex = Math.max(0, fullDateColumns.findIndex(col => col.date >= sixMonthsAgo));
    let endIndex = fullDateColumns.findIndex(col => col.date > eightMonthsAhead);
    if(endIndex === -1) endIndex = fullDateColumns.length;
    dateColumns = fullDateColumns.slice(startIndex, endIndex);

    const visibleColumnIndices = new Set(dateColumns.map(dc => dc.originalIndex));

    todayColumnIndex = todayFoundIndex !== -1 ? fullDateColumns[todayFoundIndex].originalIndex : -1;
    const projectRowMap = new Map();
    for (let i = 9; i < rawSheetData.length; i++) {
        if (!rawSheetData[i]?.values) continue;
        const projectName = rawSheetData[i].values[0]?.formattedValue;
        if(projectName && projectName.trim() !== '' && !projectRowMap.has(projectName.trim())) {
            projectRowMap.set(projectName.trim(), i);
        }
    }
    for (const [projectName, rowIndex] of projectRowMap.entries()) {
        const projectRow = rawSheetData[rowIndex].values;
        if (!projectRow) continue;
        const projectColor = rgbToHex(projectRow[0]?.effectiveFormat?.backgroundColor);
        const clientName = projectRow[2]?.formattedValue?.trim() || 'N/A';
        const cityName = projectRow[3]?.formattedValue?.trim() || null;
        const statusRow = rawSheetData[rowIndex + 9];
        const isClosed = statusRow?.values?.[2]?.formattedValue?.toLowerCase().includes('fechado') || false;
        
        const project = { name: projectName, client: clientName, city: cityName, color: projectColor, closed: isClosed, categories: {}, startRow: rowIndex };

        let minCol = Infinity;
        let maxCol = -Infinity;
        CATEGORIES.forEach((category, catIndex) => {
            const categoryRowIndex = rowIndex + 1 + catIndex;
            if (categoryRowIndex >= rawSheetData.length) return;
            const categoryRow = rawSheetData[categoryRowIndex]?.values;
            project.categories[category] = [];
            if (!categoryRow) return;
            
            const tasks = [];
            
            dateColumns.forEach(dc => {
                const col = dc.originalIndex;
                const taskName = categoryRow[col]?.formattedValue;
                if (taskName && taskName.trim() !== '') {
                    const task = { text: taskName.trim(), column: col, color: getTaskColor(taskName.trim()) };
                    tasks.push(task);
                    allTasks.add(task.text);
                    minCol = Math.min(minCol, col);
                    maxCol = Math.max(maxCol, col);
                }
            });

            if (tasks.length > 0) project.categories[category] = tasks;
        });

        project.firstTaskColumn = minCol === Infinity ? null : minCol;
        project.lastTaskColumn = maxCol === -Infinity ? null : maxCol;
        
        const firstTaskDate = project.firstTaskColumn !== null ? dateColumns.find(dc => dc.originalIndex === project.firstTaskColumn)?.date : null;
        project.startDate = firstTaskDate;

        projects.push(project);
        allProjects.add(project.name);
        allClients.add(project.client);
        if (project.city) allCities.add(project.city);
    }

    const officialTasks = new Set(Object.keys(TASK_COLORS));
    allFilters = { 
        projetos: allProjects, 
        clientes: allClients, 
        categorias: new Set(CATEGORIES),
        tarefas: officialTasks,
        localizacao: allCities
    };

    if (isInitialLoad) {
        resetAllFilters(false);
    }
}

function renderTimeline() {
    renderTimelineHeader();
    renderTimelineContent();
    renderWeekSeparators();
}

function rerenderVisualsOnly() {
    renderTimelineHeader();

    const gridTemplateColumns = dateColumns.map(dc => `${getColumnWidth(dc)}px`).join(' ');

    document.querySelectorAll('.category-timeline').forEach(timeline => {
        timeline.style.gridTemplateColumns = gridTemplateColumns;
    });
    
    document.querySelectorAll('.task-cell.weekend').forEach(cell => {
        const dateIndex = parseInt(cell.dataset.dateIndex, 10);
        if (!isNaN(dateIndex) && monthColumnColors[dateIndex]) {
            const weekendBgOpacity = isBrMode ? config.opacidadeFimDeSemanaBr : config.opacidadeFimDeSemana;
            const weekendBgColor = hexToRgba(monthColumnColors[dateIndex] || '#000000', weekendBgOpacity);
            cell.style.backgroundColor = weekendBgColor;
        }
    });

    document.querySelectorAll('.project-block').forEach(projectBlock => {
        const projectName = projectBlock.dataset.projectName;
        const project = projects.find(p => p.name === projectName);
        if (project) {
            updateProjectBarsAndCircles(projectBlock, project);
        }
    });

    document.querySelectorAll('.task-content').forEach(el => {
        const cell = el.closest('.task-cell');
        const cellWidth = cell ? getColumnWidth(dateColumns[parseInt(cell.dataset.dateIndex, 10)]) : columnWidth;
        el.style.fontSize = `${Math.max(5, Math.min(12, cellWidth / 5.5))}px`;
        el.style.padding = `2px ${Math.max(2, Math.min(5, cellWidth * 0.08))}px`;
    });


    document.querySelectorAll('.category-item, .category-timeline-row').forEach(el => {
        const isDelivery = el.classList.contains('entregas') || el.classList.contains('entregas-row');
        el.style.height = `${isDelivery ? deliveryRowHeight : categoryRowHeight}px`;
    });

    updateTimelineLayoutWidth();
    updateTodayLinePosition();
    renderWeekSeparators();
}

function renderTimelineHeader() {
    const header = document.getElementById('timeline-header-group');
    if (!header) return;

    header.innerHTML = '<div class="header-spacer"></div>';
    monthColumnColors = [];
    const monthRowEl = document.createElement('div'); monthRowEl.className = 'month-row';
    const dayRowEl = document.createElement('div'); dayRowEl.className = 'day-row';
    const dateRowEl = document.createElement('div'); dateRowEl.className = 'date-row';
    const monthGroups = [];
    if (dateColumns.length > 0) {
        let currentMonthName = "", currentMonthWidth = 0;
        dateColumns.forEach(dc => {
            const date = dc.date, monthName = date ? date.toLocaleString('pt-BR', { month: 'long' }) : "";
            let dayWidth = getColumnWidth(dc);

            if (monthName !== currentMonthName) {
                if (monthGroups.length > 0) monthGroups[monthGroups.length - 1].width = currentMonthWidth;
                monthGroups.push({ name: monthName, width: dayWidth, columns: 1 });
                currentMonthName = monthName; currentMonthWidth = dayWidth;
            } else {
                currentMonthWidth += dayWidth;
                monthGroups[monthGroups.length-1].columns++;
            }
        });
        if (monthGroups.length > 0) monthGroups[monthGroups.length - 1].width = currentMonthWidth;
    }

    let hueCounter = monthHueOffset;
    monthGroups.forEach(group => {
        const baseColor = '#45bab2';
        hueCounter = (hueCounter + 40) % 360;
        let monthColorHex = '#888888';
        const rgb = hexToRgb(baseColor);
        if (rgb) {
            let [h, s, l] = rgbToHsl(rgb.r, rgb.g, rgb.b);
            h = (h * 360 + hueCounter) / 360;
            h = h < 0 ? h + 1 : h % 1;
            monthColorHex = rgbStringToHex(hslToRgb(h, s, l));
        }
        for(let i=0; i<group.columns; i++) monthColumnColors.push(monthColorHex);
        const monthCell = document.createElement('div'); monthCell.className = 'month-cell merged';
        monthCell.textContent = group.name;
        monthCell.style.width = `${group.width}px`;
        monthCell.style.minWidth = `${group.width}px`;
        monthCell.style.fontSize = `${Math.max(8, Math.min(13, columnWidth / 5))}px`;
        monthCell.style.backgroundColor = hexToRgba(monthColorHex, 0.35);
        monthCell.style.borderRightColor = hexToRgba(monthColorHex, 0.7);
        monthRowEl.appendChild(monthCell);
    });
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    dateColumns.forEach(dc => {
        const date = dc.date, dayCell = document.createElement('div'), dateCell = document.createElement('div');
        dayCell.className = 'day-cell'; dateCell.className = 'date-cell';
        let cellWidth = getColumnWidth(dc);

        const dateFontSize = Math.max(6, Math.min(12, cellWidth / 4.5));
        const dayFontSize = Math.max(5, Math.min(10, cellWidth / 5.5));
        dayCell.style.fontSize = `${dayFontSize}px`;
        
        if(dc.originalIndex === todayColumnIndex) {
                dateCell.classList.add('today');
                const needle = document.createElement('div');
                needle.className = 'today-needle';
                dateCell.appendChild(needle);
                dateCell.style.fontSize = `${dateFontSize * 1.25}px`;
            } else {
                dateCell.style.fontSize = `${dateFontSize}px`;
            }

        if (date) {
            dayCell.textContent = weekDays[date.getDay()]; dateCell.textContent = date.getDate();
            if (isWeekend(date)) {
                dayCell.classList.add('weekend');
                dateCell.classList.add('weekend');
            }
        }
        dayCell.style.width = dateCell.style.width = `${cellWidth}px`;
        dayCell.style.minWidth = dateCell.style.minWidth = `${cellWidth}px`;
        dayRowEl.appendChild(dayCell); dateRowEl.appendChild(dateCell);
    });
    header.appendChild(monthRowEl); header.appendChild(dayRowEl); header.appendChild(dateRowEl);
}

function renderTimelineContent() {
    const timeline = document.getElementById('timeline-content');
    if (!timeline) return;

    const hasActiveCategoryFilter = currentFilters.categorias.size > 0;
    const hasActiveTaskFilter = currentFilters.tarefas.size > 0;
    const activeTasks = new Set(currentFilters.tarefas);

    let visibleProjects = projects.filter(project => {
        if (project.closed && closedFilterState === 0) return false;
        if (!project.closed && closedFilterState === 2) return false;

        // For double-click category filter, ignore other filters
        if (window.isDoubleClickCategoryFilter) {
            return true;
        }

        if (currentFilters.projetos.size > 0 && !currentFilters.projetos.has(project.name)) return false;
        if (currentFilters.clientes.size > 0 && !currentFilters.clientes.has(project.client)) return false;
        if (currentFilters.localizacao.size > 0 && !currentFilters.localizacao.has(project.city)) return false;
        
        if (hasActiveCategoryFilter) {
             const hasTasksInVisibleCategories = [...currentFilters.categorias].some(cat => 
                project.categories[cat] && project.categories[cat].length > 0
             );
             if (!hasTasksInVisibleCategories) return false;
        }
        
        if (hasActiveTaskFilter) {
            const hasMatchingTask = Object.values(project.categories).flat().some(task => activeTasks.has(task.text));
            if(!hasMatchingTask) return false;
        }

        if (isInitialLoad && !project.closed) return true;

        if (!hasActiveCategoryFilter && !hasActiveTaskFilter && currentFilters.projetos.size === 0 && currentFilters.clientes.size === 0 && currentFilters.localizacao.size === 0) return false;

        return true;
    });

    if (projectSortState !== 0) {
        visibleProjects.sort((a, b) => {
            const dateA = a.startDate || new Date(0);
            const dateB = b.startDate || new Date(0);
            if (projectSortState === 1) { // antigo > novo (antigos em baixo)
                return dateB - dateA;
            } else { // novo > antigo (novos em baixo)
                return dateA - dateB;
            }
        });
    } else {
        // Ordenação original pela linha da planilha
        visibleProjects.sort((a, b) => a.startRow - b.startRow);
    }
    
    const visibleProjectNames = new Set(visibleProjects.map(p => p.name));
    
    const existingProjectNodes = new Map();
    timeline.querySelectorAll('.project-block').forEach(node => {
        existingProjectNodes.set(node.dataset.projectName, node);
    });

    existingProjectNodes.forEach((node, name) => {
        if (!visibleProjectNames.has(name)) {
            node.remove();
        }
    });

    let lastNode = null;
    visibleProjects.forEach((project, index) => {
        let projectBlock = existingProjectNodes.get(project.name);
        
        if (!projectBlock) {
            projectBlock = createProjectBlock(project);
            
            const headerFixed = projectBlock.querySelector('.project-header-fixed');
            if (!previouslyVisibleProjects.has(project.name) && !isInitialLoad) {
                headerFixed.classList.add('animate-in-short');
                headerFixed.style.animationDelay = `${index * 100}ms`;
            } else if (isInitialLoad) {
                headerFixed.style.animationDelay = `${1500 + index * config.atrasoCascataIntro}ms`;
                headerFixed.classList.add('animate-in');
            } else {
                headerFixed.classList.add('no-animation');
            }
        } 
    
        updateProjectContent(projectBlock, project);

        const expansionState = expandedProjects.get(project.name) || { mode: 'closed' };
        projectBlock.classList.toggle('expanded', expansionState.mode !== 'closed');

        if (lastNode) {
            if (lastNode.nextSibling !== projectBlock) {
                timeline.insertBefore(projectBlock, lastNode.nextSibling);
            }
        } else {
            if (timeline.firstChild !== projectBlock) {
                timeline.insertBefore(projectBlock, timeline.firstChild);
            }
        }
        lastNode = projectBlock;
    });

    updateTimelineLayoutWidth();
    previouslyVisibleProjects = visibleProjectNames;
    updateTodayLinePosition();
}

function updateTimelineLayoutWidth() {
    let totalWidth = dateColumns.reduce((acc, dc) => acc + getColumnWidth(dc), 0);
    document.getElementById('timeline-content').style.width = `${totalWidth}px`;
    document.getElementById('timeline-header-group').style.width = `${totalWidth + sidebarWidth}px`;
}

function createProjectBlock(project) {
    const projectBlock = document.createElement('div');
    projectBlock.className = 'project-block';
    projectBlock.dataset.projectName = project.name;
    
    const rgbColorString = hexToRgb(project.color, true);
    if (rgbColorString) {
        projectBlock.style.setProperty('--project-color-rgb', rgbColorString);
    }
    
    const expansionState = expandedProjects.get(project.name) || { mode: 'closed' };
    if (expansionState.mode !== 'closed') {
        projectBlock.classList.add('expanded');
    }

    projectBlock.innerHTML = `
        <div class="project-header">
            <div class="project-header-fixed">
                <div class="project-color-wrapper">
                    <div class="project-color" style="background-color: ${project.color}; color: ${project.color};"></div>
                    <div class="project-color-click-area"></div>
                </div>
                <span class="project-info">${project.name} <span class="client-name">- ${project.client}</span></span>
            </div>
        </div>
        <div class="project-content"></div>`;
    
    projectBlock.querySelector('.project-header-fixed').addEventListener('click', (e) => {
        if (e.target.closest('.project-info, .project-color-click-area')) return;
        if (project.lastTaskColumn > 0) animateToColumn(project.lastTaskColumn, 1500);
    });
    projectBlock.querySelector('.project-color-click-area').addEventListener('click', (e) => { e.stopPropagation(); toggleAllProjectsExpansion(); });
    projectBlock.querySelector('.project-info').addEventListener('click', (e) => {
        e.stopPropagation();
        handleProjectClick(projectBlock, project);
    });
    
    return projectBlock;
}

function updateProjectContent(projectBlock, project) {
    const projectContent = projectBlock.querySelector('.project-content');
    projectContent.innerHTML = '';

    const projectCategories = document.createElement('div'); projectCategories.className = 'project-categories';
    const projectTasks = document.createElement('div'); projectTasks.className = 'project-tasks';
    const expansionState = expandedProjects.get(project.name) || { mode: 'closed' };

    const isTaskFilterActive = currentFilters.tarefas.size > 0;
    const selectedTasks = new Set(currentFilters.tarefas);
    
    let categoriesToRender;
    if (window.isDoubleClickCategoryFilter) {
        categoriesToRender = CATEGORIES.filter(c => currentFilters.categorias.has(c));
    } else if (expansionState.mode === 'all') {
        categoriesToRender = CATEGORIES;
    } else if (isTaskFilterActive) {
        categoriesToRender = CATEGORIES.filter(cat => 
            project.categories[cat] && project.categories[cat].some(task => selectedTasks.has(task.text))
        );
    } else {
        categoriesToRender = currentFilters.categorias.size > 0 ? 
                                        CATEGORIES.filter(c => currentFilters.categorias.has(c)) : 
                                        CATEGORIES;
    }
    
    const hasWeatherTasks = Object.values(project.categories).flat().some(task => config.tarefasClima.includes(task.text));
    if (hasWeatherTasks) {
        fetchWeatherForProject(project);
    }

    const extendedWeatherIcons = new Map();
    const projectWeather = weatherData[project.name];
    if (projectWeather instanceof Map) {
        const weatherTaskColumns = new Set();
        Object.values(project.categories).flat().forEach(task => {
            if (config.tarefasClima.includes(task.text)) {
                weatherTaskColumns.add(task.column);
            }
        });

        if (weatherTaskColumns.size > 0) {
            let [maxOpacity, minOpacity] = [1.0, 0.2];
            const opacityConfig = config.opacidadeIconeClimaMinMax.split(',').map(parseFloat);
            if(opacityConfig.length === 2 && !isNaN(opacityConfig[0]) && !isNaN(opacityConfig[1])) {
                [maxOpacity, minOpacity] = opacityConfig;
            }

            dateColumns.forEach((dc, dateIndex) => {
                const currentDate = dc.date;
                let minDaysDiff = Infinity;

                weatherTaskColumns.forEach(taskCol => {
                    const taskDate = dateColumns.find(col => col.originalIndex === taskCol)?.date;
                    if (taskDate) {
                        const diff = Math.round((currentDate - taskDate) / (1000 * 60 * 60 * 24));
                        if (Math.abs(diff) <= 7) {
                            minDaysDiff = Math.min(minDaysDiff, Math.abs(diff));
                        }
                    }
                });

                if (minDaysDiff <= 7) {
                    const weatherInfo = projectWeather.get(currentDate.toISOString().split('T')[0]);
                    if (weatherInfo) {
                        const opacity = maxOpacity - (minDaysDiff / 7) * (maxOpacity - minOpacity);
                        const existingIcon = extendedWeatherIcons.get(dateIndex);

                        if (!existingIcon || opacity > existingIcon.opacity) {
                            extendedWeatherIcons.set(dateIndex, { 
                                icon: weatherInfo.icon, 
                                opacity: opacity 
                            });
                        }
                    }
                }
            });
        }
    }


    categoriesToRender.forEach((category, categoryIndex) => {
        const tasksInCategory = project.categories[category] || [];
        const isWeatherCategory = tasksInCategory.some(t => config.tarefasClima.includes(t.text));
        
        if (expansionState.mode === 'tasksOnly' && tasksInCategory.length === 0) return;

        const categoryItem = document.createElement('div');
        const isDelivery = category === 'Entregas';
        categoryItem.className = `category-item ${isDelivery ? 'entregas' : ''}`;
        categoryItem.textContent = category;
        categoryItem.style.height = `${isDelivery ? deliveryRowHeight : categoryRowHeight}px`;
        
        const categoryTimelineRow = document.createElement('div');
        categoryTimelineRow.className = `category-timeline-row ${isDelivery ? 'entregas-row' : ''}`;
        categoryTimelineRow.style.height = `${isDelivery ? deliveryRowHeight : categoryRowHeight}px`;
        categoryTimelineRow.dataset.categoryName = category;

        if (categoryIndex % 2 !== 0) { // Aplica a classe para categorias de índice ímpar (segunda, quarta, etc.)
            categoryItem.classList.add('darker-row');
            categoryTimelineRow.classList.add('darker-row');
        }

        projectCategories.appendChild(categoryItem);
        
        const categoryTimeline = document.createElement('div');
        categoryTimeline.className = 'category-timeline';

        const gridTemplateColumns = dateColumns.map(dc => `${getColumnWidth(dc)}px`).join(' ');
        categoryTimeline.style.gridTemplateColumns = gridTemplateColumns;

        dateColumns.forEach((dc, dateIndex) => {
            const col = dc.originalIndex, date = dc.date;
            const taskCell = document.createElement('div');
            taskCell.className = 'task-cell';
            taskCell.dataset.dateIndex = dateIndex;
            
            if (isWeekend(date)) {
                taskCell.classList.add('weekend');
                const weekendBgOpacity = isBrMode ? config.opacidadeFimDeSemanaBr : config.opacidadeFimDeSemana;
                const weekendBgColor = hexToRgba(monthColumnColors[dateIndex] || '#000000', weekendBgOpacity);
                taskCell.style.backgroundColor = weekendBgColor;
            }
            
            const day = date ? date.getDay() : -1;
            if (day !== 6) {
                const isThickLine = (day === 0 || day === 5);
                taskCell.style.borderRightWidth = isThickLine ? '1.4px' : '0.7px';
                taskCell.style.borderRightColor = hexToRgba(monthColumnColors[dateIndex] || '#ffffff', isThickLine ? 0.4 : 0.2);
            }

            taskCell.dataset.sheetRow = project.startRow + 1 + CATEGORIES.indexOf(category) + 1;
            taskCell.dataset.sheetCol = col;

            const task = tasksInCategory.find(t => t.column === col);
            
            if (isWeatherCategory && extendedWeatherIcons.has(dateIndex)) {
                const weatherData = extendedWeatherIcons.get(dateIndex);
                const weatherIcon = document.createElement('div');
                weatherIcon.className = 'weather-icon';
                weatherIcon.textContent = weatherData.icon;
                const iconSize = getColumnWidth(dc) * 0.5;
                weatherIcon.style.fontSize = `${Math.max(10, iconSize)}px`;
                weatherIcon.style.opacity = weatherData.opacity;
                taskCell.appendChild(weatherIcon);
            }

            if (task && (!isTaskFilterActive || selectedTasks.has(task.text))) {
                taskCell.classList.add('has-task');
                const taskContentEl = document.createElement('div');
                taskContentEl.className = 'task-content';
                
                const taskColor = getTaskColor(task.text);
                taskContentEl.style.backgroundColor = hexToRgba(taskColor, 0.3);

                taskContentEl.textContent = task.text;
                const cellWidth = getColumnWidth(dc);
                taskContentEl.style.fontSize = `${Math.max(5, Math.min(12, cellWidth / 5.5))}px`;
                taskContentEl.style.padding = `2px ${Math.max(2, Math.min(5, cellWidth * 0.08))}px`;

                if (task.text === 'Evento') taskContentEl.classList.add('evento-task');
                else if (category === 'Entregas') taskContentEl.classList.add('entregas-task');
                taskContentEl.dataset.tooltipText = task.text;
                
                taskContentEl.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    showSchedulingModal(project.name, task.text, date);
                });
                if(isEditMode) taskContentEl.draggable = true;
                taskCell.appendChild(taskContentEl);
            }
            categoryTimeline.appendChild(taskCell);
        });
        categoryTimelineRow.appendChild(categoryTimeline);
        projectTasks.appendChild(categoryTimelineRow);

        categoryTimelineRow.addEventListener('dragenter', (e) => {
            if (!isEditMode || !draggedTaskData) return;
            e.preventDefault();
            const row = e.currentTarget;
            const catItem = row.closest('.project-content').querySelector(`.project-categories .category-item:nth-child(${Array.from(row.parentNode.children).indexOf(row) + 1})`);
            
            if (catItem) catItem.classList.add('drag-over-category');
            row.classList.add('drag-over-row');
        });

        categoryTimelineRow.addEventListener('dragleave', (e) => {
            if (!isEditMode || !draggedTaskData) return;
            const row = e.currentTarget;
            if (row.contains(e.relatedTarget)) return;

            const catItem = row.closest('.project-content').querySelector(`.project-categories .category-item.drag-over-category`);
            if (catItem) catItem.classList.remove('drag-over-category');
            row.classList.remove('drag-over-row');
        });
    });

    projectContent.appendChild(projectCategories);
    projectContent.appendChild(projectTasks);
    
    updateProjectBarsAndCircles(projectBlock, project);
}

function updateProjectBarsAndCircles(projectBlock, project) {
    if (!projectBlock) return;
    
    projectBlock.querySelectorAll('.project-duration-bar, .delivery-circle, .duration-weather-icon').forEach(el => el.remove());

    if (project.firstTaskColumn !== null && project.lastTaskColumn !== null) {
        const bar = document.createElement('div');
        bar.className = 'project-duration-bar';

        const barLeft = getColumnLeftOffset(project.firstTaskColumn);
        const barWidth = getColumnSpanWidth(project.firstTaskColumn, project.lastTaskColumn);
        
        bar.style.left = `${sidebarWidth + barLeft}px`;
        bar.style.width = `${barWidth}px`;
        
        if (isBrMode) {
            const darkenedColor = shadeColor(project.color, -config.escurecimentoBarraDuracaoBr * 100);
            bar.style.backgroundColor = hexToRgba(darkenedColor, config.opacidadeBarraDuracaoBr);
            bar.style.border = `${config.brDurationBarStrokeWidth}px solid black`;
        } else {
            bar.style.border = 'none'; // Reseta a borda se não estiver em modo BR
            const barOpacity = config.opacidadeBarraDuracaoNormal;
            const baseColorRgb = hexToRgb(project.color);
            if (baseColorRgb) {
                let [h, s, l] = rgbToHsl(baseColorRgb.r, baseColorRgb.g, baseColorRgb.b);
                s = Math.min(1, s * config.saturacaoBarraDuracao);
                l *= 0.8;
                const modifiedRgbString = hslToRgb(h, s, l);
                const [r, g, b] = modifiedRgbString.slice(4, -1).split(',').map(Number);
                bar.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${barOpacity})`;
            } else {
                bar.style.backgroundColor = hexToRgba(project.color, barOpacity);
            }
        }
        
        projectBlock.appendChild(bar);

        const projectWeather = weatherData[project.name];
        const iconsToDraw = new Map();

        const weatherTaskColumns = new Set();
        const eventDeliveryColumns = new Set();
        Object.values(project.categories).flat().forEach(task => {
            if (config.tarefasClima.includes(task.text)) {
                weatherTaskColumns.add(task.column);
            }
            if (task.text === 'Evento' || (project.categories['Entregas'] && project.categories['Entregas'].some(t => t.column === task.column))) {
                eventDeliveryColumns.add(task.column);
            }
        });

        if (projectWeather instanceof Map) {
            weatherTaskColumns.forEach(colIndex => {
                const dateColumn = dateColumns.find(dc => dc.originalIndex === colIndex);
                if (dateColumn) {
                    const weatherInfo = projectWeather.get(dateColumn.date.toISOString().split('T')[0]);
                    if (weatherInfo) {
                        iconsToDraw.set(colIndex, { type: 'weather', icon: weatherInfo.icon });
                    }
                }
            });
        }
        
        eventDeliveryColumns.forEach(col => {
            if (!iconsToDraw.has(col)) {
                const task = Object.values(project.categories).flat().find(t => t.column === col && t.text === 'Evento');
                iconsToDraw.set(col, { type: task ? 'evento' : 'entrega' });
            }
        });

        iconsToDraw.forEach((iconData, colIndex) => {
            const dateColumn = dateColumns.find(dc => dc.originalIndex === colIndex);
            if (dateColumn) {
                let iconEl;
                if (iconData.type === 'weather') {
                    iconEl = document.createElement('div');
                    iconEl.className = 'duration-weather-icon';
                    iconEl.textContent = iconData.icon;
                } else {
                    iconEl = document.createElement('div');
                    iconEl.className = 'delivery-circle';
                    iconEl.style.backgroundColor = `rgba(0, 0, 0, ${config.opacidadeCirculoEntrega})`;
                    if (iconData.type === 'evento') {
                        iconEl.classList.add('evento-circle');
                    }
                }

                const taskColumnOffset = getColumnLeftOffset(colIndex);
                const taskColumnWidth = getColumnWidth(dateColumn);
                const iconLeft = sidebarWidth + taskColumnOffset + (taskColumnWidth / 2);
                iconEl.style.left = `${iconLeft}px`;
                projectBlock.appendChild(iconEl);
            }
        });
    }
}

function renderWeekSeparators() {
    const container = document.getElementById('week-separators');
    const timeline = document.getElementById('timeline-main');
    if (!container || !timeline) return;

    container.innerHTML = '';
    let currentOffset = 0;

    dateColumns.forEach(dc => {
        const date = dc.date;
        const colWidth = getColumnWidth(dc);
        
        // A linha é desenhada no final do sábado (getDay() === 6)
        if (date && date.getDay() === 6) {
            const separator = document.createElement('div');
            separator.className = 'week-separator';
            const leftPosition = currentOffset + colWidth;
            separator.style.left = `${leftPosition - 1}px`; // Centraliza a linha de 2px
            container.appendChild(separator);
        }
        currentOffset += colWidth;
    });
    
    container.style.height = `${timeline.scrollHeight}px`;
}


function updateTodayLinePosition() {
    const line = document.getElementById('today-line');
    const timeline = document.getElementById('timeline-main');

    const todayColumn = dateColumns.find(dc => dc.originalIndex === todayColumnIndex);
    if (!line || !timeline || !todayColumn) {
        if (line) line.style.display = 'none';
        return;
    }

    const todayColWidth = getColumnWidth(todayColumn);
    const todayColOffset = getColumnLeftOffset(todayColumnIndex);
    const leftPosition = sidebarWidth + todayColOffset + (todayColWidth / 2) - (2 / 2);
    
    const lineHeight = timeline.scrollHeight;

    line.style.left = `${leftPosition}px`;
    line.style.height = `${lineHeight}px`;
    line.style.display = 'block';
    
    renderWeekSeparators();
}

function setupEventListeners() {
    document.getElementById('refreshDataBtn').addEventListener('click', handleRefreshData);
    
    const timeline = document.getElementById('timeline-main');
    let isDragging = false, startX, startY, scrollLeft, scrollTop;
    let velX = 0, velY = 0;
    let lastMoveTime = 0;
    let flickAnimation;

    function startFlick() {
        if(visualEffectsEnabled) {
            cancelAnimationFrame(flickAnimation);
            const flick = () => {
                if (Math.abs(velX) > 0.1) { timeline.scrollLeft += velX; velX *= 0.975; }
                if (Math.abs(velY) > 0.1) { timeline.scrollTop += velY; velY *= 0.975; }
                if (Math.abs(velX) > 0.1 || Math.abs(velY) > 0.1) flickAnimation = requestAnimationFrame(flick);
            };
            flickAnimation = requestAnimationFrame(flick);
        }
    }

    timeline.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = Math.sign(e.deltaY) * -1;
            categoryRowHeight = Math.max(10, Math.min(100, categoryRowHeight + delta * 2));
            deliveryRowHeight = Math.max(8, Math.min(80, deliveryRowHeight + delta * 1.5));
            rerenderVisualsOnly();
            saveStateToCache();
        }
    }, { passive: false });

    timeline.addEventListener('mousedown', (e) => {
        if (e.target.closest('.task-content, button, a, .project-info, .filter-dropdown-content')) return;
        isDragging = true;
        startX = e.pageX - timeline.offsetLeft;
        startY = e.pageY - timeline.offsetTop;
        scrollLeft = timeline.scrollLeft;
        scrollTop = timeline.scrollTop;
        velX = velY = 0;
        lastMoveTime = performance.now();
        cancelAnimationFrame(flickAnimation); 
        e.preventDefault();
    });
    timeline.addEventListener('mouseleave', () => { if(isDragging) startFlick(); isDragging = false; });
    timeline.addEventListener('mouseup', () => { if(isDragging) startFlick(); isDragging = false; });
    timeline.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const now = performance.now();
        const deltaTime = now - lastMoveTime;
        lastMoveTime = now;
        const walkX = (e.pageX - timeline.offsetLeft - startX) * 1.5;
        const walkY = (e.pageY - timeline.offsetTop - startY) * 1.5;
        const newScrollLeft = scrollLeft - walkX;
        const newScrollTop = scrollTop - walkY;
        if(visualEffectsEnabled && deltaTime > 0) {
            velX = (newScrollLeft - timeline.scrollLeft) / deltaTime * 16.67;
            velY = (newScrollTop - timeline.scrollTop) / deltaTime * 16.67;
        }
        timeline.scrollLeft = newScrollLeft;
        timeline.scrollTop = newScrollTop;
    });
    
    // **Tooltip com Event Delegation**
    const timelineContent = document.getElementById('timeline-content');
    timelineContent.addEventListener('mouseover', (e) => {
        const taskElement = e.target.closest('.task-content');
        if (taskElement) {
            showTooltip(e, taskElement);
        }
    });
    timelineContent.addEventListener('mouseout', (e) => {
        const taskElement = e.target.closest('.task-content');
        if (taskElement) {
            hideTooltip();
        }
    });
    
    const noticeBoard = document.getElementById('notice-board');
    const noticeHeader = document.getElementById('notice-board-header');
    const noticeHeaderText = noticeHeader.querySelector('.header-text');
    const iconClickArea = noticeHeader.querySelector('.icon-click-area');

    if (noticeHeaderText) {
        noticeHeaderText.addEventListener('click', (e) => {
            e.stopPropagation();
            const noticeItems = noticeBoard.querySelectorAll('.notice-item');
            if (noticeItems.length === 0 || (noticeItems.length === 1 && noticeItems[0].textContent.includes('Nenhum aviso'))) return;
            const textToCopy = Array.from(noticeItems).map(item => item.textContent).join('\n');
            copyTextToClipboard(textToCopy,
                () => {
                    const originalText = noticeHeaderText.textContent;
                    noticeHeaderText.textContent = 'Copiado!';
                    noticeHeaderText.style.color = '#2ecc71';
                    setTimeout(() => {
                        noticeHeaderText.textContent = originalText;
                        noticeHeaderText.style.color = '';
                    }, 1500);
                },
                (err) => console.error('Falha ao copiar texto:', err)
            );
        });
    }

    let isDraggingNotice = false;
    let dragStartX, dragStartY, boardStartX, boardStartY;
    let noticeClickStartPos = { x: 0, y: 0 };
    const dragThreshold = 5;

    const noticeDragStart = (e) => {
        if (e.target.closest('.header-text')) return;
        noticeClickStartPos = { x: e.clientX, y: e.clientY };
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        boardStartX = noticeBoard.offsetLeft;
        boardStartY = noticeBoard.offsetTop;
        document.addEventListener('mousemove', noticeDragMove);
        document.addEventListener('mouseup', noticeDragEnd, { once: true });
    };

    const noticeDragMove = (e) => {
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        if (!isDraggingNotice && (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold)) {
            isDraggingNotice = true;
            noticeHeader.style.cursor = 'grabbing';
            if (noticeBoard.classList.contains('collapsed')) {
                noticeBoard.style.cursor = 'grabbing';
            }
        }
        if (!isDraggingNotice) return;
        e.preventDefault();
        noticeBoard.style.left = `${boardStartX + dx}px`;
        noticeBoard.style.top = `${boardStartY + dy}px`;
    };

    const noticeDragEnd = (e) => {
        document.removeEventListener('mousemove', noticeDragMove);
        const dx = e.clientX - noticeClickStartPos.x;
        const dy = e.clientY - noticeClickStartPos.y;
        if (Math.abs(dx) <= dragThreshold && Math.abs(dy) <= dragThreshold) {
            noticeBoard.classList.toggle('collapsed');
            saveStateToCache();
        }
        if (isDraggingNotice) {
            saveStateToCache();
        }
        isDraggingNotice = false;
        noticeHeader.style.cursor = 'grab';
        noticeBoard.style.cursor = noticeBoard.classList.contains('collapsed') ? 'grab' : 'default';
    };

    noticeHeader.addEventListener('mousedown', noticeDragStart);
    iconClickArea.addEventListener('mousedown', noticeDragStart);
    noticeBoard.addEventListener('mousedown', (e) => {
        if(e.target === noticeBoard && noticeBoard.classList.contains('collapsed')) {
            noticeDragStart(e);
        }
    });

    document.getElementById('clearCacheBtn').addEventListener('click', () => {
        localStorage.removeItem(CACHE_KEY);
        location.reload();
    });

    document.getElementById('timeline-header-group').addEventListener('click', (e) => {
        if (e.target.closest('.month-row')) {
            e.stopPropagation();
            monthHueOffset = (monthHueOffset + 35) % 360;
            rerenderVisualsOnly();
            saveStateToCache();
        } else if (e.target.closest('.day-cell.weekend, .date-cell.weekend')) {
            e.stopPropagation();
            adjustScrollForZoom(() => {
                weekendWidthMultiplier = (weekendWidthMultiplier === 1) ? 0.2 : 1;
            });
        } else if (e.target.closest('.date-row, .day-row')) {
            animateToToday(config.atrasoRolagemAgulha);
        }
    });

    document.getElementById('header-title').addEventListener('click', showScreensaver);
    document.getElementById('main-container').addEventListener('click', handleBackgroundClick);
    document.getElementById('flag-icon').addEventListener('click', toggleBrMode);
    
    document.getElementById('sort-projects-btn').addEventListener('click', handleProjectSort);
    document.getElementById('master-toggle-btn').addEventListener('click', handleMasterToggle);
    document.getElementById('saveChangesBtn').addEventListener('click', () => {
        const linkModal = document.getElementById('linkModal');
        const scriptLinkInput = document.getElementById('scriptLinkInput');
        scriptLinkInput.value = SCRIPT_EDITOR_LINK;
        linkModal.classList.remove('hidden');
        document.getElementById('content-wrapper').classList.add('blurred');
        scriptLinkInput.focus();
    });
    document.getElementById('manualBtn').addEventListener('click', () => {
        document.getElementById('manualModal').classList.remove('hidden');
        document.getElementById('content-wrapper').classList.add('blurred');
    });
    document.getElementById('submitSaveBtn').addEventListener('click', handleSaveSubmit);
    document.getElementById('closeManualBtn').addEventListener('click', () => {
        document.getElementById('manualModal').classList.add('hidden');
        document.getElementById('content-wrapper').classList.remove('blurred');
    });
    
    ['linkModal', 'manualModal', 'projectConfigModal', 'schedulingModal'].forEach(id => {
        document.getElementById(id).addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                document.getElementById('content-wrapper').classList.remove('blurred');
            }
        });
    });

    setupProjectConfiguratorListeners();
    setupSchedulingListeners();

    document.addEventListener('keydown', handleUndo);
    timelineContent.addEventListener('dblclick', handleTimelineDoubleClick);

    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('dragend', handleDragEnd);
    timelineContent.addEventListener('drop', handleDrop);


    window.addEventListener('resize', updateTodayLinePosition);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            adjustScrollForZoom(() => {
                categoryRowHeight = Math.min(100, categoryRowHeight + 2);
                deliveryRowHeight = Math.min(80, deliveryRowHeight + 1.5);
            });
        } else if (e.key === 'ArrowDown' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            adjustScrollForZoom(() => {
                categoryRowHeight = Math.max(10, categoryRowHeight - 2);
                deliveryRowHeight = Math.max(8, deliveryRowHeight - 1.5);
            });
        } else if (e.key === 'ArrowRight' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            zoomIn();
        } else if (e.key === 'ArrowLeft' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            zoomOut();
        } else if (e.key === '+') {
            e.preventDefault();
            zoomIn();
        } else if (e.key === '-') {
            e.preventDefault();
            zoomOut();
        }

        if (e.key === 'Escape') {
            if (document.getElementById('screensaver-overlay').classList.contains('visible')) {
                resetIdleTimer();
            }
            const openModal = document.querySelector('.modal-overlay:not(.hidden)');
            if (openModal) {
                openModal.classList.add('hidden');
                document.getElementById('content-wrapper').classList.remove('blurred');
            }
        }
    });
    
    ['mousemove', 'mousedown', 'scroll', 'touchstart', 'keydown'].forEach(event => {
        window.addEventListener(event, resetIdleTimer, true);
    });
    
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearTimeout(idleTimer);
        } else {
            resetIdleTimer();
        }
    });
}

function handleSaveSubmit() {
    const modal = document.getElementById('linkModal');
    const input = document.getElementById('scriptLinkInput');
    const newLink = input.value.trim() || SCRIPT_EDITOR_LINK;

    try {
        // 1. Pega o código JS completo, mas remove as variáveis de template para evitar recursão
        const allJsCode = document.getElementById('script-tag').textContent;
        const cleanJsCode = allJsCode.split('// --- FIM DO CONTEÚDO EMBUTIDO ---')[1];
        
        // 2. Atualiza apenas a linha SCRIPT_EDITOR_LINK
        const updatedJsCode = cleanJsCode.replace(
            /let SCRIPT_EDITOR_LINK = '.*';/,
            `let SCRIPT_EDITOR_LINK = '${newLink}';`
        );

        // 3. Monta o HTML final com os templates limpos
        let finalHtml = EMBEDDED_HTML_TEMPLATE
            .replace('{{STYLES}}', `<style>${EMBEDDED_CSS}</style>`)
            .replace('{{SCRIPT}}', `<script>${updatedJsCode}</script>`);

        // 4. Cria e baixa o blob
        const blob = new Blob([finalHtml], { type: 'text/html' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'timeline-unloop.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);

        // 5. Atualiza o link no estado atual da aplicação e fecha o modal
        SCRIPT_EDITOR_LINK = newLink;
        saveStateToCache();
        modal.classList.add('hidden');
        document.getElementById('content-wrapper').classList.remove('blurred');
    } catch (error) {
        console.error("Erro ao salvar e baixar o arquivo:", error);
        alert("Não foi possível gerar o arquivo. Verifique o console para mais detalhes.");
    }
}


function saveStateToCache() {
    try {
        const noticeBoard = document.getElementById('notice-board');
        const state = {
            edits: actionHistory,
            scriptEditorLink: SCRIPT_EDITOR_LINK,
            visuals: {
                bgBrightness,
                bgHue,
                monthHueOffset,
                categoryRowHeight,
                deliveryRowHeight,
                isBrMode,
                brModeBlackMixLevel
            },
            noticeBoard: {
                left: noticeBoard.style.left,
                top: noticeBoard.style.top,
                collapsed: noticeBoard.classList.contains('collapsed')
            }
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error("Falha ao salvar o estado no cache:", error);
    }
}

function loadStateFromCache() {
    try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
        console.error("Erro ao carregar cache:", error);
        localStorage.removeItem(CACHE_KEY); 
        return null;
    }
}

function applyCachedUIState(state) {
    if (!state) return;
    if (state.visuals) {
        bgBrightness = state.visuals.bgBrightness || 0.6;
        bgHue = state.visuals.bgHue || 0;
        monthHueOffset = state.visuals.monthHueOffset || 0;
        categoryRowHeight = state.visuals.categoryRowHeight || 28;
        deliveryRowHeight = state.visuals.deliveryRowHeight || 22;
        isBrMode = state.visuals.isBrMode === false ? false : true;
        brModeBlackMixLevel = state.visuals.brModeBlackMixLevel || 0;

        const bgElement = document.querySelector('.background-gradient');
        if (bgElement) {
            const saturation = isBrMode ? 0 : 1;
            const currentBrightness = isBrMode ? bgBrightness * 1.2 : bgBrightness;
            bgElement.style.filter = `brightness(${currentBrightness.toFixed(2)}) hue-rotate(${bgHue}deg) saturate(${saturation})`;
        }
        updateBrModeOverlayColor();
    }
    if (state.noticeBoard) {
        const noticeBoard = document.getElementById('notice-board');
        noticeBoard.style.left = state.noticeBoard.left || '22px';
        noticeBoard.style.top = state.noticeBoard.top || '59px';
        noticeBoard.classList.toggle('collapsed', state.noticeBoard.collapsed);
    }
}

function applyCachedEdits(edits) {
    if (!edits || edits.length === 0) return;
    actionHistory = edits;
    
    actionHistory.forEach(action => {
        if (['edit', 'move', 'duplicate'].includes(action.type)) {
            action.changes.forEach(change => {
                updateLocalData(change.row, change.col, change.newValue, false);
            });
        }
    });

    userActionCount = edits.length;
    updateEditButtonState();
}

function populateNoticeBoard() {
    const content = document.getElementById('notice-board-content');
    const headerIcon = document.querySelector('#notice-board-header .header-icon');
    content.innerHTML = '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayInMillis = 24 * 60 * 60 * 1000;
    const twoWeeksFromNow = new Date(today.getTime() + (config.diasParaAvisos * dayInMillis));
    let notices = [];
    let closestNoticeDays = Infinity;

    projects.forEach(project => {
        if (project.closed) return;
        Object.entries(project.categories).forEach(([category, tasks]) => {
            tasks.forEach(task => {
                const isAlertTask = config.tarefasAlerta.includes(task.text);
                const isEntrega = category === 'Entregas';
                if (isAlertTask || isEntrega) {
                    const taskDateInfo = dateColumns.find(dc => dc.originalIndex === task.column);
                    if (taskDateInfo) {
                        const taskDate = taskDateInfo.date;
                        if (taskDate >= today && taskDate <= twoWeeksFromNow) {
                            const diffDays = Math.round((taskDate - today) / dayInMillis);
                            closestNoticeDays = Math.min(closestNoticeDays, diffDays);
                            notices.push({ date: taskDate, project: project.name, task: task.text, row: project.startRow + 1 + CATEGORIES.indexOf(category) + 1, col: task.column });
                        }
                    }
                }
            });
        });
    });

    if (closestNoticeDays <= config.diasPulsarAvisos) {
        const urgency = 1 - Math.max(0, closestNoticeDays - 1) / (config.diasPulsarAvisos - 1);
        
        const pulseSpeed = 2.5 - (1.25 * urgency);
        
        const startIntensity = (0.5 + (0.5 * urgency)) * 10;
        const endIntensity = (0.9 + (1.6 * urgency)) * 10;

        const startBlur = 5 + (5 * urgency);
        const endBlur = 12 + (13 * urgency);
        
        const startShadow = `0 0 ${startBlur}px rgba(255, 50, 50, ${Math.min(1, startIntensity * 0.7)}), 0 0 ${startBlur * 2}px rgba(255, 50, 50, ${Math.min(1, startIntensity * 0.5)})`;
        const endShadow = `0 0 ${endBlur}px rgba(255, 50, 50, ${Math.min(1, endIntensity * 0.9)}), 0 0 ${endBlur * 2}px rgba(255, 80, 80, ${Math.min(1, endIntensity * 0.7)})`;

        headerIcon.style.setProperty('--pulse-speed', `${pulseSpeed.toFixed(2)}s`);
        headerIcon.style.setProperty('--shadow-start', startShadow);
        headerIcon.style.setProperty('--shadow-end', endShadow);
    }

    notices.sort((a, b) => a.date - b.date);

    if (notices.length === 0) {
        content.innerHTML = `<div class="notice-item" style="cursor:default; opacity:0.6;">Nenhum aviso para os próximos ${config.diasParaAvisos} dias.</div>`;
    } else {
        notices.forEach(notice => {
            const noticeEl = document.createElement('div');
            noticeEl.className = 'notice-item';
            const dateString = notice.date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
            noticeEl.textContent = `[${dateString}] ${notice.project}: ${notice.task}`;
            noticeEl.dataset.tooltipText = `Ir para ${notice.task} no projeto ${notice.project}`;
            noticeEl.addEventListener('click', () => {
                expandedProjects.set(notice.project, { mode: 'tasksOnly' });
                renderTimelineContent();
                animateToColumn(notice.col, 1200);
                setTimeout(() => {
                    const taskEl = document.querySelector(`.task-cell[data-sheet-row='${notice.row}'][data-sheet-col='${notice.col}'] .task-content`);
                    if (taskEl) {
                        taskEl.classList.add('task-highlight');
                        taskEl.addEventListener('animationend', () => taskEl.classList.remove('task-highlight'), { once: true });
                    }
                }, 200);
            });
            content.appendChild(noticeEl);
        });
    }
}
function zoomIn() { adjustScrollForZoom(() => { columnWidth = Math.min(columnWidth * 1.2, 120); }); }
function zoomOut() { adjustScrollForZoom(() => { columnWidth = Math.max(5, columnWidth / 1.2); }); }

function toggleVisualEffects() {
    config.efeitosLigados = !config.efeitosLigados;
    applyCssVariablesFromConfig();

    if (config.efeitosLigados) {
        resetIdleTimer();
    } else {
        clearTimeout(idleTimer);
        hideScreensaver();
    }
}

function handleProjectClick(projectBlock, project) {
    let state = expandedProjects.get(project.name) || { mode: 'closed', clickCount: 0, timer: null };
    clearTimeout(state.timer);
    state.clickCount++;

    state.timer = setTimeout(() => {
        let finalState = expandedProjects.get(project.name);
        if (!finalState) return;

        switch (finalState.clickCount) {
            case 1:
                finalState.mode = projectBlock.classList.contains('expanded') ? 'closed' : 'tasksOnly';
                break;
            case 2:
                finalState.mode = finalState.mode === 'all' ? 'tasksOnly' : 'all';
                break;
        }

        finalState.clickCount = 0;
        expandedProjects.set(project.name, finalState);

        parseData(); 
        
        const updatedProject = projects.find(p => p.name === project.name);
        if (updatedProject) {
            projectBlock.classList.toggle('expanded', finalState.mode !== 'closed');
            updateProjectContent(projectBlock, updatedProject);
        } else {
            projectBlock.remove();
        }

    }, 250);

    expandedProjects.set(project.name, state);
}

function toggleAllProjectsExpansion() {
        const allVisible = document.querySelectorAll('.project-block');
        const areAllExpanded = Array.from(allVisible).every(pb => pb.classList.contains('expanded'));
        allVisible.forEach(pb => {
            const name = pb.dataset.projectName;
            if (name) {
                pb.classList.toggle('expanded', !areAllExpanded);
                expandedProjects.set(name, { mode: areAllExpanded ? 'closed' : 'tasksOnly' });
            }
        });
        renderTimelineContent();
}

function handleBackgroundClick(e) {
    if (e.target !== document.getElementById('main-container') && e.target !== document.querySelector('.timeline-container')) return;
    
    if (isBrMode) {
        brModeBlackMixLevel = (brModeBlackMixLevel + 1) % 6; // 0 a 5
        updateBrModeOverlayColor();
    } else {
        const bgElement = document.querySelector('.background-gradient');
        if (e.clientX > window.innerWidth / 2) {
            bgHue = (bgHue + 50) % 360;
        } else {
            bgBrightness -= 0.2;
            if (bgBrightness < 0.05) bgBrightness = 1.0;
        }
        
        if (bgElement) {
            const currentBrightness = isBrMode ? bgBrightness * 1.2 : bgBrightness;
            bgElement.style.filter = `brightness(${currentBrightness.toFixed(2)}) hue-rotate(${bgHue}deg) saturate(1)`;
        }
    }
    saveStateToCache();
}

function updateBrModeOverlayColor() {
    const overlay = document.querySelector('.br-mode-overlay');
    if (!overlay) return;

    let blackMix;
    if (isBrMode) {
        // Usa o nível de clique se estiver no modo BR
        blackMix = Math.min(1, brModeBlackMixLevel * 0.2);
    } else {
        // Usa o valor da planilha se não estiver no modo BR (para consistência)
        blackMix = Math.max(0, Math.min(1, config.brModeOverlayBlackMix));
    }
    
    const colorValue = Math.round(255 * (1 - blackMix));
    const transparency = Math.max(0, Math.min(1, config.brModeOverlayTransparency));
    overlay.style.backgroundColor = `rgba(${colorValue}, ${colorValue}, ${colorValue}, ${transparency})`;
}


function toggleBrMode() {
    isBrMode = !isBrMode;
    document.body.classList.toggle('br-mode', isBrMode);
    
    const bgElement = document.querySelector('.background-gradient');
    if (bgElement) {
        const saturation = isBrMode ? 0 : 1;
        const currentBrightness = isBrMode ? bgBrightness * 1.2 : bgBrightness;
        bgElement.style.filter = `brightness(${currentBrightness.toFixed(2)}) hue-rotate(${bgHue}deg) saturate(${saturation})`;
    }

    updateBrModeOverlayColor();
    rerenderVisualsOnly();
    saveStateToCache();
}


function copyTextToClipboard(text, onSuccess, onError) {
    if (!navigator.clipboard) {
        fallbackCopy();
        return;
    }
    navigator.clipboard.writeText(text).then(
        () => onSuccess(),
        (err) => {
            console.error('Async copy failed, falling back:', err);
            fallbackCopy();
        }
    );

    function fallbackCopy() {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) onSuccess();
            else onError(new Error('Fallback copy failed'));
        } catch (err) {
            onError(err);
        }
        document.body.removeChild(textArea);
    }
}

function saveEdits() {
    if (actionHistory.length > 0) {
        generateAndCopyScript();
        actionHistory = [];
        userActionCount = 0;
        updateEditButtonState();
        saveStateToCache(); // Salva o estado com o histórico de ações limpo
    }
}

function toggleEditMode() {
    const btn = document.getElementById('editModeBtn');
    if (isEditMode) {
        if (actionHistory.length > 0) {
            saveEdits();
        } else {
            isEditMode = false;
            updateEditModeUI();
        }
    } else {
        isEditMode = true;
        actionHistory = [];
        userActionCount = 0;
        updateEditModeUI();
    }
}

function updateEditModeUI(){
    const btn = document.getElementById('editModeBtn');
    document.body.classList.toggle('edit-mode-active', isEditMode);
    btn.classList.toggle('active', isEditMode);
    btn.classList.remove('trembling');
    btn.innerHTML = '✏️';
    document.querySelectorAll('.task-content').forEach(el => el.draggable = isEditMode);
document.querySelectorAll('.filter-btn').forEach(el => {
    el.draggable = isEditMode;
});
}

function updateEditButtonState() {
    const btn = document.getElementById('editModeBtn');
    if (isEditMode && userActionCount > 0) {
        btn.innerHTML = `✏️ <span style="font-size: 10px;">${userActionCount}</span>`;
        btn.classList.add('trembling');
    } else {
        btn.innerHTML = '✏️';
        btn.classList.remove('trembling');
    }
}

function handleTimelineDoubleClick(e) {
    if (!isEditMode) return;
    const targetCell = e.target.closest('.task-cell');
    if (!targetCell || document.querySelector('.task-cell-input')) return;
    const taskContentEl = targetCell.querySelector('.task-content');
    const originalValue = taskContentEl ? taskContentEl.textContent : '';
    if (taskContentEl) taskContentEl.style.display = 'none';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'task-cell-input';
    input.value = originalValue;
    targetCell.appendChild(input);
    input.focus();
    input.select();

    const endEdit = (saveChange) => {
        input.removeEventListener('blur', onBlur);
        input.removeEventListener('keydown', onKeydown);
        const newValue = input.value.trim();
        input.remove();
        if (taskContentEl) taskContentEl.style.display = 'flex';

        if (saveChange && newValue !== originalValue) {
            updateTask(targetCell, newValue, originalValue);
        } else if (saveChange && !newValue && originalValue) {
            updateTask(targetCell, '', originalValue);
        } else {
            renderTimelineContent();
        }
    };
    const onBlur = () => endEdit(true);
    const onKeydown = (ev) => {
        if (ev.key === 'Enter') {
            endEdit(true);
        } else if (ev.key === 'Escape') {
            endEdit(false);
        }
    };

    input.addEventListener('blur', onBlur);
    input.addEventListener('keydown', onKeydown);
}

function updateTask(cell, newValue, oldValue) {
    userActionCount++;
    const { sheetRow, sheetCol } = cell.dataset;
    actionHistory.push({
        type: 'edit',
        changes: [{ row: sheetRow, col: sheetCol, newValue, oldValue }]
    });
    
    updateLocalData(sheetRow, sheetCol, newValue, true);
}

function updateLocalData(sheetRow, sheetCol, newValue, shouldRender = true) {
    const rowIndex = parseInt(sheetRow) - 1;
    const colIndex = parseInt(sheetCol);
    if (!rawSheetData[rowIndex]) rawSheetData[rowIndex] = { values: [] };
    if (!rawSheetData[rowIndex].values) rawSheetData[rowIndex].values = [];
    while (rawSheetData[rowIndex].values.length <= colIndex) {
        rawSheetData[rowIndex].values.push(null);
    }
    if (!rawSheetData[rowIndex].values[colIndex]) {
        rawSheetData[rowIndex].values[colIndex] = {};
    }
    rawSheetData[rowIndex].values[colIndex].formattedValue = newValue === '' ? null : newValue;
    
    if (shouldRender) {
        parseData();
        renderTimelineContent();
        updateEditButtonState();
        saveStateToCache();
    }
}

function handleDragStart(e) {
    if (!isEditMode) {
        e.preventDefault();
        return;
    }
    
    hideTooltip();
    
    const taskContent = e.target.closest('.task-content');
    const filterButton = e.target.closest('.filter-btn');

    if (taskContent) {
        const cell = e.target.closest('.task-cell');
        draggedTaskData = {
            type: 'move',
            row: cell.dataset.sheetRow,
            col: cell.dataset.sheetCol,
            value: taskContent.textContent,
            isDuplicating: e.shiftKey,
            element: taskContent
        };
        e.dataTransfer.effectAllowed = e.shiftKey ? 'copy' : 'move';
        setTimeout(() => taskContent.classList.add('dragging'), 0);
    } else if (filterButton && (filterButton.closest('#tarefas-list') || filterButton.closest('#localizacao-list'))) {
        draggedTaskData = {
            type: 'new',
            value: filterButton.textContent,
            element: filterButton
        };
        e.dataTransfer.effectAllowed = 'copy';
    } else {
        return;
    }

    const blankCanvas = document.createElement('canvas');
    blankCanvas.width = 1;
    blankCanvas.height = 1;
    e.dataTransfer.setDragImage(blankCanvas, 0, 0);

    showDragTooltip(draggedTaskData.value);
    dragTooltipElement.style.left = `${e.clientX + 15}px`;
    dragTooltipElement.style.top = `${e.clientY - 30}px`;
}

function handleDragOver(e) {
    e.preventDefault();
    if (!isEditMode || !draggedTaskData) return;

    e.dataTransfer.dropEffect = draggedTaskData.type === 'new' || (draggedTaskData.type === 'move' && draggedTaskData.isDuplicating) ? 'copy' : 'move';

    if (dragTooltipElement) {
        dragTooltipElement.style.left = `${e.clientX + 15}px`;
        dragTooltipElement.style.top = `${e.clientY - 30}px`;
    }

    const targetRow = e.target.closest('.category-timeline-row');
    if (targetRow && targetRow.dataset.categoryName) {
        showDragTooltip(`${draggedTaskData.value} → ${targetRow.dataset.categoryName}`);
    } else {
        showDragTooltip(draggedTaskData.value);
    }

    document.querySelectorAll('.task-cell.drag-over').forEach(cell => cell.classList.remove('drag-over'));
    const targetCell = e.target.closest('.task-cell');
    if (targetCell) {
        targetCell.classList.add('drag-over');
    }
}

function handleDragEnd(e) {
    if (draggedTaskData && draggedTaskData.element) {
        draggedTaskData.element.classList.remove('dragging');
    }
    draggedTaskData = null;
    hideDragTooltip();
    hideTooltip();

    document.querySelectorAll('.drag-over-category, .drag-over-row, .task-cell.drag-over').forEach(el => {
        el.classList.remove('drag-over-category', 'drag-over-row', 'drag-over');
    });
}

function handleDrop(e) {
    e.preventDefault();
    if (!isEditMode || !draggedTaskData) return;
    
    hideDragTooltip(); // Esconde o tooltip ao soltar

    const targetCell = e.target.closest('.task-cell');
    if (!targetCell) return;
    targetCell.classList.remove('drag-over');

    const targetHasTask = targetCell.querySelector('.task-content');
    const { sheetRow: targetRow, sheetCol: targetCol } = targetCell.dataset;

    if (draggedTaskData.type === 'new') {
        if (targetHasTask) return;
        updateTask(targetCell, draggedTaskData.value, '');
        return;
    }

    if (draggedTaskData.type === 'move') {
        const targetValue = targetHasTask ? targetHasTask.textContent : '';
        let changes = [];
        let actionType = 'unknown';

        if (draggedTaskData.isDuplicating) {
            if (targetValue) return;
            changes.push({ row: targetRow, col: targetCol, newValue: draggedTaskData.value, oldValue: '' });
            actionType = 'duplicate';
        } else { 
            if (draggedTaskData.row === targetRow && draggedTaskData.col === targetCol) return;
            changes.push({ row: draggedTaskData.row, col: draggedTaskData.col, newValue: targetValue, oldValue: draggedTaskData.value });
            changes.push({ row: targetRow, col: targetCol, newValue: draggedTaskData.value, oldValue: targetValue });
            actionType = 'move';
        }

        userActionCount++;
        actionHistory.push({ type: actionType, changes });
        
        // Aplica as mudanças nos dados locais sem redesenhar ainda
        changes.forEach(change => {
            updateLocalData(change.row, change.col, change.newValue, false);
        });

        // Adiciona um pequeno atraso antes de redesenhar para garantir que o evento `dragend` finalize
        setTimeout(() => {
            parseData();
            renderTimelineContent();
            updateEditButtonState();
            saveStateToCache();
        }, 1);
    }
}

function setupProjectConfiguratorListeners() {
    const modal = document.getElementById('projectConfigModal');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const closeBtn = document.getElementById('closeConfigModalBtn');
    const generateBtn = document.getElementById('generateScriptBtn');
    const sheetBtn = document.getElementById('createInSheetBtn');
    const driveBtn = document.getElementById('createInDriveBtn');

    addProjectBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.getElementById('content-wrapper').classList.add('blurred');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.getElementById('content-wrapper').classList.remove('blurred');
    });
    
    [sheetBtn, driveBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });


    generateBtn.addEventListener('click', () => {
        const projectName = document.getElementById('configProjectName').value.trim();
        const clientName = document.getElementById('configClientName').value.trim();
        const city = document.getElementById('configCity').value.trim();
        const mainColor = document.getElementById('configMainColor').value;

        if (!projectName) {
            alert('O nome do projeto é obrigatório.');
            return;
        }

        let actionTaken = false;
        if (sheetBtn.classList.contains('active')) {
            userActionCount++;
            actionHistory.push({
                type: 'newProject',
                details: { projectName, clientName, location: city, mainColor }
            });
            actionTaken = true;
        }
        if (driveBtn.classList.contains('active')) {
            userActionCount++;
            actionHistory.push({
                type: 'newDriveFolder',
                details: { projectName }
            });
            actionTaken = true;
        }
        
        if (actionTaken) {
            updateEditButtonState();
            saveStateToCache();
            
            modal.classList.add('hidden');
            document.getElementById('content-wrapper').classList.remove('blurred');
            
            document.getElementById('configProjectName').value = '';
            document.getElementById('configClientName').value = '';
            document.getElementById('configCity').value = '';
            sheetBtn.classList.remove('active');
            driveBtn.classList.remove('active');
        } else {
            alert('Selecione pelo menos uma ação (Criar na Planilha ou Criar Pasta no Drive).');
        }
    });
}

function setupSchedulingListeners() {
    const modal = document.getElementById('schedulingModal');
    const closeBtn = document.getElementById('closeScheduleBtn');
    const saveBtn = document.getElementById('saveScheduleBtn');
    const guestsInput = document.getElementById('scheduleGuests');
    const guestListPopup = document.querySelector('.guest-list-popup');
    let selectedGuests = new Set();

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.getElementById('content-wrapper').classList.remove('blurred');
    });

    const updateGuestInput = () => {
        guestsInput.value = Array.from(selectedGuests).join(', ');
    };

    guestsInput.addEventListener('focus', () => {
        guestListPopup.classList.remove('hidden');
        guestListPopup.innerHTML = '';
        
        const currentTypedGuests = new Set(guestsInput.value.split(',').map(g => g.trim()).filter(g => g));
        selectedGuests = new Set([...selectedGuests, ...currentTypedGuests]);

        GUEST_LIST.forEach(guest => {
            const item = document.createElement('div');
            item.className = 'guest-list-item';
            item.innerHTML = `<input type="checkbox" ${selectedGuests.has(guest) ? 'checked' : ''}><span>${guest}</span>`;
            
            item.addEventListener('mousedown', (e) => {
                e.preventDefault(); 
                const checkbox = item.querySelector('input');
                checkbox.checked = !checkbox.checked;

                if (checkbox.checked) {
                    selectedGuests.add(guest);
                } else {
                    selectedGuests.delete(guest);
                }
                updateGuestInput();
            });
            guestListPopup.appendChild(item);
        });
    });
    
    guestsInput.addEventListener('blur', () => {
        setTimeout(() => guestListPopup.classList.add('hidden'), 200);
    });

    saveBtn.addEventListener('click', () => {
        const title = document.getElementById('scheduleTitle').value;
        const description = document.getElementById('scheduleDescription').value;
        const date = document.getElementById('scheduleDate').value;
        const time = document.getElementById('scheduleTime').value;
        const createMeet = document.getElementById('scheduleMeet').checked;
        
        const finalGuests = new Set(guestsInput.value.split(',').map(g => g.trim()).filter(g => g));

        if (!title || !date || !time) {
            alert('Por favor, preencha todos os campos do evento.');
            return;
        }
        
        userActionCount++;
        actionHistory.push({
            type: 'newCalendarEvent',
            details: {
                title,
                description,
                date,
                time,
                guests: Array.from(finalGuests),
                createMeet
            }
        });

        updateEditButtonState();
        saveStateToCache();
        modal.classList.add('hidden');
        document.getElementById('content-wrapper').classList.remove('blurred');
    });
}


function showSchedulingModal(projectName, taskText, date) {
    const modal = document.getElementById('schedulingModal');
    document.getElementById('scheduleTitle').value = `${projectName} - ${taskText}`;
    document.getElementById('scheduleDescription').value = '';
    document.getElementById('scheduleGuests').value = '';
    document.getElementById('scheduleDate').value = date.toISOString().split('T')[0];
    modal.classList.remove('hidden');
    document.getElementById('content-wrapper').classList.add('blurred');
}

/**
 * Gera o texto do Google Apps Script para criar um novo projeto na planilha.
 * Esta função é uma adaptação para usar o novo blueprint fornecido.
 * @param {object} details - Os detalhes do projeto.
 * @returns {string} O script gerado como texto.
 */
function generateProjectScriptText(details) {
    const escapedProjectName = details.projectName.replace(/"/g, '\\"');
    const escapedClientName = (details.clientName || '').replace(/"/g, '\\"');
    // Adicionamos a localização, que não estava no blueprint original
    const escapedLocation = (details.location || '').replace(/"/g, '\\"'); 
    const mainColor = details.mainColor || '#999999';
    const functionName = `construir_${details.projectName.replace(/[^a-zA-Z0-9]/g, '_')}`;

    // Note que o texto de "localização" foi inserido na célula da coluna 4, linha 1.
    return `/**
* @OnlyCurrentDoc
* Constrói o projeto ${escapedProjectName}.
*/
function ${functionName}() {
const START_ROW = 160;
const BLOCK_HEIGHT = 10;
const PATTERN_BLUEPRINT = [
{ row: 1, col: 1, text: "${escapedProjectName}", bgColor: "${mainColor}", fontSize: 9, angle: 90 }, { row: 1, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 1, col: 3, text: "${escapedClientName}", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 1, col: 4, text: "${escapedLocation}", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 2, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 2, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 2, col: 3, text: "Entregas", bgColor: "${mainColor}", fontSize: 7, angle: 0 }, { row: 2, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 3, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 3, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 3, col: 3, text: "Cliente", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 3, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 4, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 4, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 4, col: 3, text: "Pré produção", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 4, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 5, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 5, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 5, col: 3, text: "Produção", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 5, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 6, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 6, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 6, col: 3, text: "Captação", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 6, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 7, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 7, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 7, col: 3, text: "3D", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 7, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 8, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 8, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 8, col: 3, text: "Motion", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 8, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 9, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 9, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 9, col: 3, text: "Edição", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 9, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 },
{ row: 10, col: 1, text: "", bgColor: "#ffffff", fontSize: 10, angle: 0 }, { row: 10, col: 2, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 10, col: 3, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }, { row: 10, col: 4, text: "", bgColor: "${mainColor}", fontSize: 10, angle: 0 }
];
const BORDER_BLUEPRINT = [
{"cell":"A1","borders":{"left":"SOLID","right":"SOLID","top":"SOLID"}},{"cell":"B1","borders":{"left":"SOLID","bottom":"SOLID","top":"SOLID"}},{"cell":"C1","borders":{"bottom":"SOLID","top":"SOLID"}},{"cell":"D1","borders":{"bottom":"SOLID","top":"SOLID","right":"SOLID"}},{"cell":"A2","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B2","borders":{"left":"SOLID","top":"SOLID","right":"SOLID"}},{"cell":"C2","borders":{"top":"SOLID","left":"SOLID","right":"SOLID"}},{"cell":"D2","borders":{"top":"SOLID","right":"SOLID","left":"SOLID"}},{"cell":"A3","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B3","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"C3","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"D3","borders":{"right":"SOLID","left":"SOLID"}},{"cell":"A4","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B4","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"C4","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"D4","borders":{"right":"SOLID","left":"SOLID"}},{"cell":"A5","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B5","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"C5","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"D5","borders":{"right":"SOLID","left":"SOLID"}},{"cell":"A6","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B6","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"C6","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"D6","borders":{"right":"SOLID","left":"SOLID"}},{"cell":"A7","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B7","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"C7","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"D7","borders":{"right":"SOLID","left":"SOLID"}},{"cell":"A8","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B8","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"C8","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"D8","borders":{"right":"SOLID","left":"SOLID"}},{"cell":"A9","borders":{"left":"SOLID","right":"SOLID"}},{"cell":"B9","borders":{"left":"SOLID","right":"SOLID","bottom":"SOLID"}},{"cell":"C9","borders":{"left":"SOLID","right":"SOLID","bottom":"SOLID"}},{"cell":"D9","borders":{"right":"SOLID","left":"SOLID","bottom":"SOLID"}},{"cell":"A10","borders":{"left":"SOLID","bottom":"SOLID","right":"SOLID"}},{"cell":"B10","borders":{"left":"SOLID","top":"SOLID","bottom":"SOLID"}},{"cell":"C10","borders":{"bottom":"SOLID","top":"SOLID"}},{"cell":"D10","borders":{"bottom":"SOLID","right":"SOLID","top":"SOLID"}}
];
const sheet = SpreadsheetApp.getActiveSheet();
let currentRow = START_ROW;
const maxRows = sheet.getMaxRows();
while (true) {
if (currentRow > maxRows) return;
const checkCell = sheet.getRange(currentRow, 1);
if (checkCell.getDisplayValue() === '') break;
currentRow += BLOCK_HEIGHT;
}
const targetRow = currentRow;
sheet.getRange(targetRow, 1, BLOCK_HEIGHT, 1).merge();
PATTERN_BLUEPRINT.forEach(cellData => {
const targetCell = sheet.getRange(targetRow + cellData.row - 1, cellData.col);
targetCell.setValue(cellData.text).setBackground(cellData.bgColor).setFontSize(cellData.fontSize).setTextRotation(cellData.angle);
});
aplicarBordasCustomizadas(sheet, targetRow, BORDER_BLUEPRINT);
}

function aplicarBordasCustomizadas(sheet, startRow, borderBlueprint) {
const styleMap = {'SOLID': SpreadsheetApp.BorderStyle.SOLID};
borderBlueprint.forEach(instruction => {
const targetCellRange = sheet.getRange(instruction.cell).offset(startRow - 1, 0);
const bordersToApply = instruction.borders;
targetCellRange.setBorder(
    bordersToApply.top ? true : null, bordersToApply.left ? true : null,
    bordersToApply.bottom ? true : null, bordersToApply.right ? true : null,
    false, false, '#000000', styleMap[bordersToApply.top || bordersToApply.left || bordersToApply.bottom || bordersToApply.right]
);
});
}`.trim();
}

function generateAndCopyScript() {
    if (actionHistory.length === 0) return;

    let scriptParts = {
        updateTimeline: '',
        createProjects: '',
        createDriveFolders: '',
        createCalendarEvents: ''
    };

    let functionCalls = [];

    const finalEdits = new Map();
    const newProjects = new Map();
    const newDriveFolders = [];
    const newCalendarEvents = [];

    actionHistory.forEach(action => {
        switch(action.type) {
            case 'edit':
            case 'move':
            case 'duplicate':
                action.changes.forEach(change => {
                    finalEdits.set(`${change.row},${change.col}`, change.newValue);
                });
                break;
            case 'newProject':
                newProjects.set(action.details.projectName, action.details);
                break;
            case 'newDriveFolder':
                newDriveFolders.push(action.details.projectName);
                break;
            case 'newCalendarEvent':
                newCalendarEvents.push(action.details);
                break;
        }
    });

    if (finalEdits.size > 0) {
        let updateScript = `function updateTimelineFromUI() {\n  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('${SHEET_NAME}');\n`;
        finalEdits.forEach((value, key) => {
            const [row, col] = key.split(',');
            const sheetColumn = parseInt(col) + 1;
            const escapedValue = (value || '').replace(/"/g, '\\"');
            updateScript += `  sheet.getRange(${row}, ${sheetColumn}).setValue("${escapedValue}");\n`;
        });
        updateScript += `}\n`;
        scriptParts.updateTimeline = updateScript;
        functionCalls.push('updateTimelineFromUI();');
    }

    if (newProjects.size > 0) {
        let projectCreationScript = 'function construirNovosProjetos() {\n';
        let projectBlueprints = '';
        newProjects.forEach((details, projectName) => {
            const functionName = `construir_${projectName.replace(/[^a-zA-Z0-9]/g, '_')}`;
            projectCreationScript += `  ${functionName}();\n`;
            projectBlueprints += generateProjectScriptText(details) + '\n';
        });
        projectCreationScript += '}\n';
        scriptParts.createProjects = projectCreationScript + projectBlueprints;
        functionCalls.push('construirNovosProjetos();');
    }
    
    if (newDriveFolders.length > 0) {
        let driveScript = `function criarPastasNoDrive() {\n  const idDaPastaDeDestino = "${DRIVE_FOLDER_ID}";\n`;
        newDriveFolders.forEach(projectName => {
            driveScript += `  criarProjetoNoDrive(idDaPastaDeDestino, "${projectName.replace(/"/g, '\\"')}");\n`;
        });
        driveScript += '}\n';
        driveScript += `
function criarProjetoNoDrive(idDaPastaDeDestino, nomeDoProjeto) {
const nomeDaPastaTemplate = "0000-EXEMPLO";
try {
    const pastaDeDestino = DriveApp.getFolderById(idDaPastaDeDestino);
    const iteratorTemplate = pastaDeDestino.getFoldersByName(nomeDaPastaTemplate);
    if (!iteratorTemplate.hasNext()) {
    throw new Error("A pasta template '" + nomeDaPastaTemplate + "' não foi encontrada.");
    }
    const pastaTemplate = iteratorTemplate.next();
    copiarPastaRecursivamente(pastaTemplate.getId(), pastaDeDestino.getId(), nomeDoProjeto);
    Logger.log('✅ Projeto "' + nomeDoProjeto + '" criado com sucesso no Drive!');
} catch (e) {
    Logger.log('❌ FALHA AO CRIAR PASTA NO DRIVE: ' + e.toString());
}
}

function copiarPastaRecursivamente(idPastaOrigem, idPastaDestinoPai, novoNome) {
const pastaOrigem = DriveApp.getFolderById(idPastaOrigem);
const pastaDestinoPai = DriveApp.getFolderById(idPastaDestinoPai);
const novaPasta = pastaDestinoPai.createFolder(novoNome);
const arquivos = pastaOrigem.getFiles();
while (arquivos.hasNext()) { arquivos.next().makeCopy(novaPasta); }
const subpastas = pastaOrigem.getFolders();
while (subpastas.hasNext()) {
    const subpastaOrigem = subpastas.next();
    copiarPastaRecursivamente(subpastaOrigem.getId(), novaPasta.getId(), subpastaOrigem.getName());
}
return novaPasta;
}\n`;
        scriptParts.createDriveFolders = driveScript;
        functionCalls.push('criarPastasNoDrive();');
    }
    
    if (newCalendarEvents.length > 0) {
        let calendarScript = 'function criarEventosNaAgenda() {\n';
        newCalendarEvents.forEach((details, index) => {
            calendarScript += `  criarEventoRapido(${JSON.stringify(details, null, 2)});\n`;
        });
        calendarScript += '}\n';
        calendarScript += `
function criarEventoRapido(detalhesDoEvento) {
try {
    const [year, month, day] = detalhesDoEvento.date.split('-');
    const [hours, minutes] = detalhesDoEvento.time.split(':');
    const startTime = new Date(year, month - 1, day, hours, minutes);
    const endTime = new Date(startTime.getTime() + (60 * 60 * 1000)); // Duração de 1h

    const options = {
    description: detalhesDoEvento.description || '',
    guests: detalhesDoEvento.guests.join(',') || null,
    sendInvites: true
    };

    if (detalhesDoEvento.createMeet) {
    options.conferenceDataVersion = 1;
    }

    const evento = CalendarApp.getDefaultCalendar().createEvent(
    detalhesDoEvento.title,
    startTime,
    endTime,
    options
    );
    Logger.log('✅ Evento "' + detalhesDoEvento.title + '" criado com sucesso! ID: ' + evento.getId());
} catch (e) {
    Logger.log('❌ Falha ao criar evento: ' + e.toString());
}
}\n`;
        scriptParts.createCalendarEvents = calendarScript;
        functionCalls.push('criarEventosNaAgenda();');
    }

    let finalScript = `/**\n * Script Unificado Gerado pela Timeline Unloop\n * ${new Date().toLocaleString('pt-BR')}\n */\n\n`;
    finalScript += `function executarTodasAsAcoes() {\n  ${functionCalls.join('\n  ')}\n}\n\n`;
    finalScript += Object.values(scriptParts).filter(s => s).join('\n');

    copyTextToClipboard(finalScript,
        () => {
            const btn = document.getElementById('editModeBtn');
            const originalHTML = btn.innerHTML;
            btn.textContent = '✅';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                updateEditButtonState(); // Garante que o contador reapareça se necessário
            }, 2000);
            
            // Tenta abrir na mesma aba (dando um nome à aba), se falhar, abre uma nova
            if (!window.open(SCRIPT_EDITOR_LINK, 'google_script_editor')) {
                 window.open(SCRIPT_EDITOR_LINK, '_blank');
            }
        },
        (err) => {
            console.error('Falha ao copiar script: ', err);
            alert('Falha ao copiar. Por favor, copie manualmente e abra o editor.');
        }
    );
}


function handleUndo(e) {
    if (isEditMode && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        undoLastAction();
    }
}

function undoLastAction() {
    if (actionHistory.length === 0) return;
    const lastAction = actionHistory.pop();
    userActionCount--;
    
    if(['edit', 'move', 'duplicate'].includes(lastAction.type)) {
        lastAction.changes.forEach(change => {
            updateLocalData(change.row, change.col, change.oldValue, false);
        });
    }

    parseData();
    renderTimelineContent();
    updateEditButtonState();
    saveStateToCache();
}

function handleProjectSort() {
    projectSortState = (projectSortState + 1) % 3;
    const sortBtn = document.getElementById('sort-projects-btn');
    
    switch(projectSortState) {
        case 0: sortBtn.textContent = '🔀'; break; // Original
        case 1: sortBtn.textContent = '🔼'; break; // Antigos em baixo
        case 2: sortBtn.textContent = '🔽'; break; // Novos em baixo
    }
    renderTimelineContent();
}

function handleMasterToggle(e) {
    e.stopPropagation();

    masterToggleState = (masterToggleState % 4) + 1;
    resetAllFilters(false);
    const openProjectNames = [...currentFilters.projetos];
    
    switch (masterToggleState) {
        case 1:
            currentFilters.projetos.clear();
            currentFilters.clientes.clear();
            expandedProjects.clear();
            break;
        case 2:
            expandedProjects.clear();
            break;
        case 3:
            openProjectNames.forEach(name => expandedProjects.set(name, { mode: 'tasksOnly' }));
            break;
        case 4:
            openProjectNames.forEach(name => expandedProjects.set(name, { mode: 'all' }));
            break;
    }
    
    renderTimelineContent();
    setupFilters();
    animateToToday(1500);
}
function resetAllFilters(shouldRender = true) {
    closedFilterState = 0;
    showClosedProjects = false;
    window.isDoubleClickCategoryFilter = false;
    
    const openProjects = [...allFilters.projetos].filter(name => !projects.find(p => p.name === name)?.closed);

    currentFilters = {
        projetos: new Set(openProjects),
        clientes: new Set(),
        categorias: new Set(),
        tarefas: new Set(),
        localizacao: new Set()
    };
    taskFilterToggleState = 1;
    categoryFilterToggleState = 1;
    expandedProjects.clear();

    if (shouldRender) {
        setupFilters();
        renderTimelineContent();
    }
}

function handleClosedFilterClick(e) {
    e.stopPropagation();
    closedFilterState = (closedFilterState + 1) % 3;
    
    const allProjectNames = [...allFilters.projetos];
    currentFilters.projetos.clear();

    switch (closedFilterState) {
        case 0: 
            showClosedProjects = false;
            const openProjects = allProjectNames.filter(name => !projects.find(p => p.name === name)?.closed);
            openProjects.forEach(p => currentFilters.projetos.add(p));
            break; 
        case 1: 
            showClosedProjects = true;
            allProjectNames.forEach(p => currentFilters.projetos.add(p));
            break;
        case 2: 
            showClosedProjects = true;
            const closedProjects = allProjectNames.filter(name => projects.find(p => p.name === name)?.closed);
            closedProjects.forEach(p => currentFilters.projetos.add(p));
            break;
    }
    setupFilters();
    renderTimelineContent();
}

function setupFilters() {
    ['projetos', 'clientes', 'categorias', 'tarefas', 'localizacao'].forEach(type => {
        const container = document.getElementById(`${type}-list`);
        if (!container || !allFilters[type]) return;
        container.innerHTML = '';
        
        const selectAllBtn = document.createElement('button');
        selectAllBtn.className = 'filter-btn select-all';
        selectAllBtn.textContent = '☑ Todos';
        if (type === 'tarefas') {
            selectAllBtn.onclick = (e) => { e.stopPropagation(); toggleAllTaskFilters(); };
        } else if (type === 'categorias') {
            selectAllBtn.onclick = (e) => { e.stopPropagation(); toggleAllCategoryFilters(); };
        } else {
            selectAllBtn.onclick = (e) => { e.stopPropagation(); toggleAllFilters(type); };
        }
        container.appendChild(selectAllBtn);

        if (type === 'projetos') {
            const showClosedBtn = document.createElement('button');
            showClosedBtn.className = 'filter-btn show-closed-btn';
            if (closedFilterState === 1) showClosedBtn.classList.add('active');
            if (closedFilterState === 2) showClosedBtn.classList.add('active', 'isolated');
            showClosedBtn.textContent = ['Abertos', 'Todos', 'Fechados'][closedFilterState];
            showClosedBtn.onclick = (e) => handleClosedFilterClick(e);
            container.appendChild(showClosedBtn);
        }

        [...allFilters[type]].sort().forEach(item => {
            const project = (type === 'projetos') ? projects.find(p => p.name === item) : null;
            if(project && project.closed && !showClosedProjects) return;

            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = item;
            
            if (type === 'categorias') {
                let clickTimer = null;
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (clickTimer === null) {
                        clickTimer = setTimeout(() => {
                            clickTimer = null;
                            handleCategoryFilterClick(item, 'single');
                        }, 250);
                    } else {
                        clearTimeout(clickTimer);
                        clickTimer = null;
                        handleCategoryFilterClick(item, 'double');
                    }
                });
            } else {
                button.addEventListener('click', (e) => { 
                    e.stopPropagation(); 
                    toggleFilter(type, item);
                });
            }

            if (type === 'tarefas' || type === 'localizacao') {
                button.draggable = isEditMode;
            }

            const isActive = currentFilters[type].has(item);
            button.classList.toggle('active', isActive);
            
            const color = (type === 'projetos' && project) ? project.color : getTaskColor(item);
            if (type === 'projetos' || type === 'tarefas') {
                button.dataset.color = color;
                button.style.backgroundColor = hexToRgba(color, isActive ? 0.7 : 0.2);
            }

            if (project && project.closed) {
                button.classList.add('inactive');
            }
            container.appendChild(button);
        });
    });
}


function toggleFilter(type, item) {
    const current = currentFilters[type];
    const isActive = current.has(item);
    window.isDoubleClickCategoryFilter = false;

    if (isActive) {
        current.delete(item);
    } else {
        current.add(item);
    }
    
    if ((type === 'tarefas' || type === 'localizacao') && !isActive) {
        if (currentFilters.projetos.size === 0) {
            currentFilters.projetos = new Set([...allFilters.projetos]);
        }
        if (currentFilters.clientes.size === 0) {
            currentFilters.clientes = new Set([...allFilters.clientes]);
        }
        
        projects.forEach(p => {
            const hasMatch = Object.values(p.categories).some(tasks => tasks.some(task => currentFilters.tarefas.has(task.text)));
            if (hasMatch) {
                expandedProjects.set(p.name, { mode: 'tasksOnly' });
            }
        });
    }

    setupFilters();
    renderTimelineContent();
}

function toggleAllFilters(type) {
    const allItems = allFilters[type];
    const current = currentFilters[type];
    window.isDoubleClickCategoryFilter = false;
    
    if (current.size < allItems.size) {
        currentFilters[type] = new Set(allItems);
    } else {
        current.clear();
    }
    setupFilters();
    renderTimelineContent();
}

function handleCategoryFilterClick(category, clickType) {
    const current = currentFilters.categorias;

    if (clickType === 'double') {
        window.isDoubleClickCategoryFilter = true;
        current.clear();
        current.add(category);
        projects.forEach(p => expandedProjects.set(p.name, { mode: 'all' }));
    } else { // single click
        window.isDoubleClickCategoryFilter = false;
        if (current.has(category)) {
            current.delete(category);
        } else {
            current.add(category);
        }
        
        projects.forEach(p => {
            const hasTasksInCategory = p.categories[category] && p.categories[category].length > 0;
            if (current.has(category) && hasTasksInCategory) {
                expandedProjects.set(p.name, { mode: 'tasksOnly' });
            }
        });
    }
    
    if (current.size > 0 && currentFilters.projetos.size === 0) {
        currentFilters.projetos = new Set([...allFilters.projetos]);
    }
    
    setupFilters();
    renderTimelineContent();
}

function toggleAllCategoryFilters() {
    const current = currentFilters.categorias;
    const all = allFilters.categorias;
    window.isDoubleClickCategoryFilter = false;
    
    categoryFilterToggleState = (categoryFilterToggleState % 3) + 1;
    current.clear();

    switch (categoryFilterToggleState) {
        case 1: break; 
        case 2: 
            currentFilters.categorias = new Set(all);
            break;
        case 3:
            if (all.has('Entregas')) current.add('Entregas');
            break;
    }
    
    if (current.size > 0 && currentFilters.projetos.size === 0) {
        currentFilters.projetos = new Set([...allFilters.projetos]);
    }

    setupFilters();
    renderTimelineContent();
}

function toggleAllTaskFilters() {
    const current = currentFilters.tarefas;
    const all = allFilters.tarefas;
    window.isDoubleClickCategoryFilter = false;

    taskFilterToggleState = (taskFilterToggleState % 4) + 1;
    current.clear();

    switch (taskFilterToggleState) {
        case 1: break; 
        case 2: 
            currentFilters.tarefas = new Set(all);
            break;
        case 3: 
            const alertTasks = config.tarefasAlerta.filter(t => all.has(t));
            if (alertTasks.length > 0) currentFilters.tarefas = new Set(alertTasks);
            break;
        case 4: 
            if (all.has('Evento')) current.add('Evento');
            break;
    }

    if (current.size > 0 && currentFilters.projetos.size === 0) {
        currentFilters.projetos = new Set([...allFilters.projetos]);
    }

    setupFilters();
    renderTimelineContent();
}


function toggleFilterDropdown(event, type, button) {
    event.stopPropagation();
    const activeDropdown = document.querySelector('.filter-dropdown.active');
    const activeBtn = document.querySelector('.filter-tab-horizontal.active');

    if (activeDropdown) {
        activeDropdown.classList.remove('active');
        if (activeBtn) activeBtn.classList.remove('active');
        if (activeDropdown.id === `dropdown-${type}`) return;
    }
    
    const dropdown = document.getElementById(`dropdown-${type}`);
    if (dropdown) {
        dropdown.classList.add('active');
        button.classList.add('active');
    }
}

document.addEventListener('click', (event) => {
    const openDropdown = document.querySelector('.filter-dropdown.active');
    const openBtn = document.querySelector('.filter-tab-horizontal.active');
    if (openDropdown && !openDropdown.contains(event.target)) {
        openDropdown.classList.remove('active');
        if (openBtn) openBtn.classList.remove('active');
    }
});

function animateToColumn(columnIndex, duration = 800) {
    const timeline = document.getElementById('timeline-main');
    const targetOffset = getColumnLeftOffset(columnIndex);
    const targetScrollLeft = targetOffset - (timeline.clientWidth - sidebarWidth) / 2 + (getColumnWidth(dateColumns.find(dc => dc.originalIndex === columnIndex)) / 2);
    
    if(visualEffectsEnabled) {
        const start = timeline.scrollLeft;
        const change = targetScrollLeft - start;
        let startTime = null;

        function animateScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, start, change, duration);
            timeline.scrollLeft = run;
            if (timeElapsed < duration) requestAnimationFrame(animateScroll);
        }
        requestAnimationFrame(animateScroll);
    } else {
        timeline.scrollLeft = targetScrollLeft;
    }
}

function animateToToday(duration) {
    if (todayColumnIndex !== -1) {
        animateToColumn(todayColumnIndex, duration);
    }
}

function adjustScrollForZoom(operation) {
    const timeline = document.getElementById('timeline-main');
    if (!timeline) {
        operation();
        rerenderVisualsOnly();
        return;
    }

    const viewportCenter = timeline.scrollLeft + (timeline.clientWidth / 2);
    let totalWidthBefore = 0;
    let centerColumnIndex = -1;

    for (let i = 0; i < dateColumns.length; i++) {
        const colWidth = getColumnWidth(dateColumns[i]);
        if (totalWidthBefore + colWidth / 2 >= viewportCenter) {
            centerColumnIndex = i;
            break;
        }
        totalWidthBefore += colWidth;
    }
    if (centerColumnIndex === -1) centerColumnIndex = dateColumns.length -1;
    
    const centerColumn = dateColumns[centerColumnIndex];
    const distFromColStart = viewportCenter - totalWidthBefore;
    const ratioInCol = distFromColStart / getColumnWidth(centerColumn);

    operation();
    rerenderVisualsOnly();

    let totalWidthAfter = 0;
    for (let i = 0; i < centerColumnIndex; i++) {
        totalWidthAfter += getColumnWidth(dateColumns[i]);
    }
    
    const newColWidth = getColumnWidth(centerColumn);
    const newDistFromColStart = newColWidth * ratioInCol;
    const newCenterPos = totalWidthAfter + newDistFromColStart;
    
    timeline.scrollLeft = newCenterPos - (timeline.clientWidth / 2);
}

function getColumnWidth(dateColumn) {
    if (!dateColumn || !dateColumn.date) return columnWidth;
    return isWeekend(dateColumn.date) ? columnWidth * weekendWidthMultiplier : columnWidth;
}
function getColumnLeftOffset(targetColumnIndex) {
    let offset = 0;
    for (const dc of dateColumns) {
        if (dc.originalIndex === targetColumnIndex) break;
        offset += getColumnWidth(dc);
    }
    return offset;
}
function getColumnSpanWidth(startColIndex, endColIndex) {
    let width = 0;
    let inRange = false;
    for (const dc of dateColumns) {
        if (dc.originalIndex === startColIndex) inRange = true;
        if (inRange) {
            width += getColumnWidth(dc);
            if (dc.originalIndex === endColIndex) break;
        }
    }
    return width;
}
function getTaskColor(taskName) {
    return TASK_COLORS[taskName] || '#888888';
}
function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
function rgbToHex(rgb) {
    if (!rgb || typeof rgb.red !== 'number' || typeof rgb.green !== 'number' || typeof rgb.blue !== 'number') return '#cccccc';
    const r = Math.round(rgb.red * 255);
    const g = Math.round(rgb.green * 255);
    const b = Math.round(rgb.blue * 255);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
function hexToRgba(hex, alpha) {
    if (!hex) return `rgba(128, 128, 128, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function hexToRgb(hex, asString = false) {
    if (!hex) return asString ? '128, 128, 128' : { r: 128, g: 128, b: 128 };
    let c = hex.substring(1).split('');
    if (c.length === 3) { c = [c[0], c[0], c[1], c[1], c[2], c[2]]; }
    c = '0x' + c.join('');
    const r = (c >> 16) & 255, g = (c >> 8) & 255, b = c & 255;
    return asString ? `${r}, ${g}, ${b}` : { r, g, b };
}
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, l];
}
function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) { r = g = b = l; }
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
}
function rgbStringToHex(rgbString) {
    const [r, g, b] = rgbString.slice(4, -1).split(',').map(Number);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function shadeColor(color, percent) {
    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.max(0, R);
    G = Math.max(0, G);
    B = Math.max(0, B);

    const RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    const GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    const BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}


function showTooltip(e, target) {
    if (draggedTaskData) return;
    const tooltipText = target.dataset.tooltipText;

    if (!tooltipText) return;

    clearTimeout(tooltipTimer);

    tooltipTimer = setTimeout(() => {
        if (!tooltipElement) return;
        tooltipElement.textContent = tooltipText;
        const rect = target.getBoundingClientRect();
        tooltipElement.style.left = `${rect.left + rect.width / 2}px`;
        tooltipElement.style.top = `${rect.top}px`;
        tooltipElement.classList.add('visible');
    }, config.atrasoTooltipTarefa);
}

function hideTooltip() {
    clearTimeout(tooltipTimer);
    tooltipTimer = null;
    if (tooltipElement && tooltipElement.classList.contains('visible')) {
        tooltipElement.classList.remove('visible');
    }
}

function showDragTooltip(text) {
    if (!dragTooltipElement) return;
    dragTooltipElement.textContent = text;
    dragTooltipElement.classList.add('visible');
}

function hideDragTooltip() {
    if (dragTooltipElement) {
        dragTooltipElement.classList.remove('visible');
    }
}

function initProximityAnimations() {
    if (!config.efeitosEntradaProximidade || !visualEffectsEnabled) return;

    const timeline = document.getElementById('timeline-main');
    timeline.addEventListener('mousemove', (e) => {
        const proximityScale = config.efeitoProximidadeEscala;
        const taskElements = timeline.querySelectorAll('.task-content');

        taskElements.forEach(task => {
            const rect = task.getBoundingClientRect();
            const taskCenterX = rect.left + rect.width / 2;
            const taskCenterY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(Math.pow(e.clientX - taskCenterX, 2) + Math.pow(e.clientY - taskCenterY, 2));
            
            const scale = 1 + Math.max(0, 1 - distance / 150) * proximityScale;
            
            task.style.transform = `scale(${scale})`;
        });
    });
}
class BreathingLogo {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.tracerSpeed = config.logoVelocidade;
        this.trailMaxLength = config.logoComprimentoRastro;
        this.lineWidth = 0.1;
        this.maxTracers = config.logoContagemTracadores;
        this.waveFrequency = 0.040;
        this.waveAmplitude = 50;
        this.rightWaveAmplitude = 75;
        this.maxOpacity = 0.9;
        this.wavePhaseSpeed = 0.002;
        this.waveNoiseScale = 0.35;
        this.fadingTrailDuration = 2000;
        this.spawnInterval = 1800;
        this.spawnIntervalVariation = 0.85;
        this.logoPadding = 0.050;
        this.scaleChangeTimestamp = 0;
        this.timeToNextScale = 30000;
        this.isDragging = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.endPoint = { x: 0, y: 0 };
        this.setupPaths();
        this.setupCanvas();
        this.tracers = [];
        this.colors = ["#00FF7F", "#00FFFF", "#ADFF2F", "#1E90FF", "#FFFFFF", "#32CD32", "#87CEEB", "#98FB98", "#20B2AA", "#40E0D0"];
        this.colorIndex = 0;
        this.lastSpawn = 0;
        this.resizeListener = () => this.setupCanvas();
        window.addEventListener('resize', this.resizeListener);
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.canvas.addEventListener('mouseup', () => this.onMouseUp());
        this.canvas.addEventListener('mouseleave', () => this.onMouseUp());
        this.start();
    }
    setupPaths() {
        this.paths = [];
        this.pathLengths = [];
        for (let i = 1; i <= 8; i++) {
            const p = document.getElementById(`path-${i}`);
            if (p) {
                this.paths.push(p);
                this.pathLengths.push(p.getTotalLength());
            }
        }
    }
    setupCanvas() {
        if (!this.canvas || !this.canvas.parentNode) return;
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.parentNode.getBoundingClientRect();
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = `${rect.width}px`;
        this.canvas.style.height = `${rect.height}px`;
        this.ctx.scale(dpr, dpr);
        this.canvasWidth = rect.width;
        this.canvasHeight = rect.height;
        const svgViewBox = { x: 0, y: 0, width: 634.3, height: 324.4 };
        const tempScale = Math.min(this.canvasWidth / svgViewBox.width, this.canvasHeight / svgViewBox.height) * this.logoPadding;
        this.offsetX = (this.canvasWidth - svgViewBox.width * tempScale) / 2;
        this.offsetY = (this.canvasHeight - svgViewBox.height * tempScale) / 2;
        this.recalculateMetrics();
    }
    start() {
        if (this.animationFrameId) return;
        this.scaleChangeTimestamp = performance.now();
        this.animate(0);
    }
    stop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        window.removeEventListener('resize', this.resizeListener);
    }
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    onMouseDown(e) {
        this.isDragging = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this.canvas.style.cursor = 'grabbing';
    }
    onMouseUp() {
        this.isDragging = false;
        this.canvas.style.cursor = 'grab';
    }
    onMouseMove(e) {
        if (!this.isDragging) return;
        const dx = e.clientX - this.lastMouseX;
        const dy = e.clientY - this.lastMouseY;
        this.offsetX += dx;
        this.offsetY += dy;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this.recalculateMetrics();
    }
    updateScaling(timestamp) {
        if (timestamp > this.scaleChangeTimestamp + this.timeToNextScale) {
            const scaleIncrease = this.getRandom(0.04, 0.35);
            this.logoPadding *= (1 + scaleIncrease);
            if (this.logoPadding >= 0.6) {
                this.logoPadding = 0.1;
            }
            this.recalculateMetrics();
            this.timeToNextScale = this.getRandom(8000, 12000);
            this.scaleChangeTimestamp = timestamp;
        }
    }
    recalculateMetrics() {
        const svgViewBox = { x: 0, y: 0, width: 634.3, height: 324.4 };
        const padding = this.logoPadding;
        this.scale = Math.min(this.canvasWidth / svgViewBox.width, this.canvasHeight / svgViewBox.height) * padding;
        this.edgeDistance = this.canvasWidth / 3.5;
        const pStart = this.paths[0].getPointAtLength(0);
        this.startPoint = {
            x: pStart.x * this.scale + this.offsetX,
            y: pStart.y * this.scale + this.offsetY
        };
        const lastPath = this.paths[this.paths.length - 1];
        const pEnd = lastPath.getPointAtLength(this.pathLengths[this.paths.length - 1]);
        this.endPoint = {
            x: pEnd.x * this.scale + this.offsetX,
            y: pEnd.y * this.scale + this.offsetY
        };
    }
    animate(timestamp) {
        this.animationFrameId = requestAnimationFrame((t) => this.animate(t));
        this.updateScaling(timestamp);
        this.tracers = this.tracers.filter(t => !t.isFinished || t.alpha > 0);
        if (!this.lastSpawn) this.lastSpawn = timestamp;
        const spawnTime = this.spawnInterval * (1 + (Math.random() - 0.5) * this.spawnIntervalVariation);
        if (timestamp - this.lastSpawn > spawnTime) {
            if (this.tracers.length < this.maxTracers) {
                const direction = Math.random() > 0.5 ? 'ltr' : 'rtl';
                this.tracers.push(new Tracer(this, false, direction));
            }
            this.lastSpawn = timestamp;
        }
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        const globalAlpha = 1;
        this.tracers.forEach(tracer => {
            tracer.update();
            tracer.draw(globalAlpha);
        });
    }
    drawTrail(trail, baseOpacity = 1, isSpecial = false, tracerPhase = 'none') {
        const maxLength = isSpecial ? this.trailMaxLength * 10 : this.trailMaxLength;
        let glow = (tracerPhase === 'exit') ? 15 : 0;
        if (isSpecial) glow *= 1.5;

        const visibleTrail = (trail.length > maxLength && maxLength > 0) ? trail.slice(trail.length - maxLength) : trail;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.shadowBlur = glow;
        let lastPoint = visibleTrail[0];
        for (let i = 1; i < visibleTrail.length; i++) {
            const point = visibleTrail[i];
            if (point.break) {
                lastPoint = null;
                continue;
            }
            if (lastPoint === null) {
                lastPoint = point;
                continue;
            }
            this.ctx.beginPath();
            this.ctx.moveTo(lastPoint.x, lastPoint.y);
            const segments = 6 + 1;
            for (let j = 1; j <= segments; j++) {
                const t = j / segments;
                const interpX = lastPoint.x + (point.x - lastPoint.x) * t;
                const interpY = lastPoint.y + (point.y - lastPoint.y) * t;
                this.ctx.lineTo(interpX, interpY);
            }
            const colorString = point.color;
            this.ctx.strokeStyle = colorString;
            this.ctx.shadowColor = colorString;
            const progress = i / visibleTrail.length;
            let segmentAlpha = Math.sin(progress * Math.PI) * 0.8;
            this.ctx.globalAlpha = Math.max(0, segmentAlpha) * baseOpacity;
            this.ctx.stroke();
            lastPoint = point;
        }
        this.ctx.globalAlpha = 1;
        this.ctx.shadowBlur = 0;
    }
}
class Tracer {
    constructor(controller, isSpecial = false, direction = 'ltr') {
        this.controller = controller;
        this.isSpecial = isSpecial;
        this.direction = direction;
        this.reset();
    }
    reset() {
        this.phase = 'approach';
        if (this.direction === 'ltr') {
            this.x = -10;
            this.y = this.controller.startPoint.y + (Math.random() - 0.5) * 40;
            this.pathIndex = 0;
            this.progress = 0;
        } else {
            this.x = this.controller.canvasWidth + 10;
            this.y = this.controller.endPoint.y + (Math.random() - 0.5) * 40;
            this.pathIndex = this.controller.paths.length - 1;
            this.progress = this.controller.pathLengths[this.pathIndex];
        }
        this.speed = this.controller.tracerSpeed;
        if (this.isSpecial) {
            this.color = '#FFFFFF';
        } else {
            this.color = this.controller.colors[this.controller.colorIndex % this.controller.colors.length];
            this.controller.colorIndex++;
        }
        this.trail = [];
        this.isFinished = false;
        this.creationTime = performance.now();
        this.alpha = 1;
    }
    update() {
        if (this.isFinished && this.alpha <= 0) return;
        const time = performance.now();
        const controller = this.controller;
        if (!this.isFinished) {
            this.trail.push({ x: this.x, y: this.y, color: this.color });
            if (this.phase === 'approach') {
                const targetPoint = this.direction === 'ltr' ? controller.startPoint : controller.endPoint;
                const dx = targetPoint.x - this.x;
                const dy = targetPoint.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const edgeDist = this.direction === 'ltr' ? this.x : controller.canvasWidth - this.x;
                if (edgeDist < controller.edgeDistance) {
                    const intensity = 1 - (edgeDist / controller.edgeDistance);
                    const waveY = Math.sin(this.x * controller.waveFrequency + time * controller.wavePhaseSpeed);
                    const noise = (Math.random() * 2 - 1) * controller.waveNoiseScale;
                    const waveAmp = this.direction === 'ltr' ? controller.waveAmplitude : controller.rightWaveAmplitude;
                    const totalEffect = (waveY + noise) * waveAmp * intensity;
                    this.y += totalEffect * 0.1;
                }
                if (dist < this.speed || this.speed <= 0) {
                    this.phase = 'trace';
                    this.speed *= 2;
                    this.x = targetPoint.x;
                    this.y = targetPoint.y;
                } else {
                    this.x += (dx / dist) * this.speed;
                    this.y += (dy / dist) * this.speed;
                }
            } else if (this.phase === 'trace') {
                let speedLeft = this.speed;
                while (speedLeft > 0 && this.phase === 'trace') {
                    const path = controller.paths[this.pathIndex];
                    const pathLength = controller.pathLengths[this.pathIndex];
                    if (this.direction === 'ltr') {
                        const progressLeftOnPath = pathLength - this.progress;
                        if (speedLeft >= progressLeftOnPath) {
                            this.progress = pathLength;
                            const endPoint = path.getPointAtLength(this.progress);
                            this.x = endPoint.x * controller.scale + controller.offsetX;
                            this.y = endPoint.y * controller.scale + controller.offsetY;
                            this.trail.push({ x: this.x, y: this.y, color: this.color });
                            speedLeft -= progressLeftOnPath;
                            this.progress = 0;
                            this.pathIndex++;
                            if (this.pathIndex >= controller.paths.length) {
                                this.phase = 'exit';
                            } else {
                                this.trail.push({ x: this.x, y: this.y, color: this.color, break: true });
                                const newStartPoint = controller.paths[this.pathIndex].getPointAtLength(0);
                                this.x = newStartPoint.x * controller.scale + controller.offsetX;
                                this.y = newStartPoint.y * controller.scale + controller.offsetY;
                            }
                        } else {
                            this.progress += speedLeft;
                            const point = path.getPointAtLength(this.progress);
                            this.x = point.x * controller.scale + controller.offsetX;
                            this.y = point.y * controller.scale + controller.offsetY;
                            speedLeft = 0;
                        }
                    } else {
                        const progressLeftOnPath = this.progress;
                        if (speedLeft >= progressLeftOnPath) {
                            this.progress = 0;
                            const endPoint = path.getPointAtLength(this.progress);
                            this.x = endPoint.x * controller.scale + controller.offsetX;
                            this.y = endPoint.y * controller.scale + controller.offsetY;
                            this.trail.push({ x: this.x, y: this.y, color: this.color });
                            speedLeft -= progressLeftOnPath;
                            this.pathIndex--;
                            if (this.pathIndex < 0) {
                                this.phase = 'exit';
                            } else {
                                this.trail.push({ x: this.x, y: this.y, color: this.color, break: true });
                                this.progress = controller.pathLengths[this.pathIndex];
                                const newStartPoint = controller.paths[this.pathIndex].getPointAtLength(this.progress);
                                this.x = newStartPoint.x * controller.scale + controller.offsetX;
                                this.y = newStartPoint.y * controller.scale + controller.offsetY;
                            }
                        } else {
                            this.progress -= speedLeft;
                            const point = path.getPointAtLength(this.progress);
                            this.x = point.x * controller.scale + controller.offsetX;
                            this.y = point.y * controller.scale + controller.offsetY;
                            speedLeft = 0;
                        }
                    }
                }
            } else if (this.phase === 'exit') {
                if (this.direction === 'ltr') {
                    this.x += this.speed;
                    const rightEdge = controller.canvasWidth;
                    if (this.x > rightEdge - controller.edgeDistance) {
                        const intensity = (this.x - (rightEdge - controller.edgeDistance)) / controller.edgeDistance;
                        const waveY = Math.sin(this.x * controller.waveFrequency + time * controller.wavePhaseSpeed);
                        const noise = (Math.random() * 2 - 1) * controller.waveNoiseScale;
                        const waveAmp = this.direction === 'ltr' ? controller.waveAmplitude : controller.rightWaveAmplitude;
                        const totalEffect = (waveY + noise) * waveAmp * intensity;
                        this.y += totalEffect * 0.1;
                    }
                    if (this.x > controller.canvasWidth + 100) { this.isFinished = true; }
                } else {
                    this.x -= this.speed;
                    if (this.x < controller.edgeDistance) {
                        const intensity = (controller.edgeDistance - this.x) / controller.edgeDistance;
                        const waveY = Math.sin(this.x * controller.waveFrequency + time * controller.wavePhaseSpeed);
                        const noise = (Math.random() * 2 - 1) * controller.waveNoiseScale;
                        const waveAmp = (waveY + noise) * controller.waveAmplitude * intensity;
                        const totalEffect = (waveY + noise) * controller.waveAmplitude * intensity;
                        this.y += totalEffect * 0.1;
                    }
                    if (this.x < -100) { this.isFinished = true; }
                }
            }
        }
    }
    draw(globalAlpha) {
        const age = performance.now() - this.creationTime;
        const fadeInDuration = 2000;
        if (this.isFinished) {
            this.alpha -= (16.67 / this.controller.fadingTrailDuration);
        } else {
            const maxOpacity = this.controller.maxOpacity;
            this.alpha = Math.min(maxOpacity, (age / fadeInDuration) * maxOpacity);
        }
        if (this.alpha > 0 && this.trail.length > 1) {
            this.controller.drawTrail(this.trail, this.alpha * globalAlpha, this.isSpecial, this.phase);
        }
    }
}

function initAnimatedBackground() {
    const canvas = document.getElementById('animatedCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray;
    let displacementInterval;
    let random;

    const animConfig = {
        seed: config.logoVelocidade,
        raioMin: parseFloat(config.raioMinMaxParticula.split(',')[0]) || 256,
        raioMax: parseFloat(config.raioMinMaxParticula.split(',')[1]) || 700,
        amplitude: config.amplitudeMovimento,
        particleCount: config.contagemParticulas,
        waveSpeed: 0.003,
        duration: 2, 
        interval: 3000 
    };

    const colors = ['#9ACD32', '#ADFF2F', '#7FFF00', '#7CFC00', '#4682B4', '#5F9EA0', '#87CEEB', '#FFD700', '#FFFF00', '#F0E68C'];
    const specialColor = '#DC143C';

    function mulberry32(a) {
        return function() {
            var t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    }

    class Particle {
        constructor(x, y, raio, cor, isSpecial = false) {
            this.x = x; this.y = y; this.raio = raio; this.cor = cor;
            this.angleX = random() * Math.PI * 2; this.angleY = random() * Math.PI * 2;
            this.isAnimating = false; this.animationStartTime = 0;
            this.startX = 0; this.startY = 0; this.startRaio = 0;
            this.targetX = 0; this.targetY = 0; this.targetRaio = 0;
            this.isSpecial = isSpecial;
            if (this.isSpecial) { this.hue = 348; this.saturation = 80; this.lightness = 47; }
        }

        startDisplacementAnimation() {
            this.isAnimating = true; this.animationStartTime = Date.now();
            this.startX = this.x; this.startY = this.y; this.startRaio = this.raio;
            const dpr = window.devicePixelRatio || 1;
            this.targetX = (random() * 0.6 + 0.1) * (canvas.width / dpr);
            this.targetY = (random() * 0.6 + 0.1) * (canvas.height / dpr);
            this.targetRaio = random() * (animConfig.raioMax - animConfig.raioMin) + animConfig.raioMin;
        }

        draw() {
            let finalOpacity = 1;
            let finalFillStyle;
            if (this.isSpecial) {
                finalOpacity *= 0.5;
                finalFillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${finalOpacity})`;
            } else {
                const alphaHex = Math.floor(finalOpacity * 255).toString(16).padStart(2, '0');
                finalFillStyle = this.cor + alphaHex;
            }
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);
            ctx.fillStyle = finalFillStyle;
            ctx.fill();
        }

        update() {
            const wiggleX = Math.sin(this.angleX) * animConfig.amplitude * 0.1;
            const wiggleY = Math.cos(this.angleY) * animConfig.amplitude * 0.1;
            this.angleX += animConfig.waveSpeed;
            this.angleY += animConfig.waveSpeed;

            if (this.isAnimating) {
                const elapsed = Date.now() - this.animationStartTime;
                const duration = animConfig.duration * 1000;
                if (elapsed < duration) {
                    const progress = elapsed / duration;
                    this.x = this.startX + (this.targetX - this.startX) * progress;
                    this.y = this.startY + (this.targetY - this.startY) * progress;
                    this.raio = this.startRaio + (this.targetRaio - this.startRaio) * progress;
                    
                    const wiggleFactor = 1 - progress;
                    this.x += wiggleX * wiggleFactor;
                    this.y += wiggleY * wiggleFactor;
                } else {
                    this.x = this.targetX;
                    this.y = this.targetY;
                    this.raio = this.targetRaio;
                    this.isAnimating = false;
                }
            } else {
                this.x += wiggleX;
                this.y += wiggleY;
            }
            
            const dpr = window.devicePixelRatio || 1;
            if (this.x > canvas.width / dpr + this.raio) this.x = -this.raio; else if (this.x < -this.raio) this.x = canvas.width / dpr + this.raio;
            if (this.y > canvas.height / dpr + this.raio) this.y = -this.raio; else if (this.y < -this.raio) this.y = canvas.height / dpr + this.raio;
            
            if (this.isSpecial) { this.hue = (this.hue + 0.5) % 360; }
            
            this.draw();
        }
    }

    function setupDisplacementInterval() {
        if (displacementInterval) clearInterval(displacementInterval);
        displacementInterval = setInterval(() => {
            const particleToMove = particlesArray[Math.floor(random() * particlesArray.length)];
            if (particleToMove && !particleToMove.isAnimating) {
                particleToMove.startDisplacementAnimation();
            }
        }, animConfig.interval);
    }

    function init() {
        random = mulberry32(animConfig.seed);
        particlesArray = [];
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const particleCount = animConfig.particleCount;
        for (let i = 0; i < particleCount; i++) {
            const isSpecial = i === particleCount - 1;
            const raio = random() * (animConfig.raioMax - animConfig.raioMin) + animConfig.raioMin;
            const x = random() * canvas.width / dpr;
            const y = random() * canvas.height / dpr;
            const cor = isSpecial ? specialColor : colors[Math.floor(random() * colors.length)];
            particlesArray.push(new Particle(x, y, raio, cor, isSpecial));
        }
        setupDisplacementInterval();
    }

    function animate() {
        if (!document.body.contains(canvas)) {
            clearInterval(displacementInterval);
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', init);
}

async function fetchWeatherForProject(project) {
    const projectName = project.name;
    const cityForLookup = project.city || 'Rio de Janeiro'; // Usa Rio como padrão

    if (weatherData[projectName]) return;

    weatherData[projectName] = 'loading';

    try {
        const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityForLookup)}&count=1&language=pt&format=json`;
        const geoResponse = await fetch(geocodingUrl);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error(`Cidade "${cityForLookup}" não encontrada.`);
        }
        
        const cityData = geoData.results[0];
        const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${cityData.latitude}&longitude=${cityData.longitude}&daily=weathercode&timezone=${cityData.timezone}&past_days=7&forecast_days=16`;
        const forecastResponse = await fetch(forecastUrl);
        const forecast = await forecastResponse.json();
        
        const projectWeatherData = new Map();
        forecast.daily.time.forEach((date, index) => {
            projectWeatherData.set(date, {
                icon: getWeatherIcon(forecast.daily.weathercode[index])
            });
        });
        
        weatherData[projectName] = projectWeatherData;
        
        const projectBlock = document.querySelector(`.project-block[data-project-name="${CSS.escape(projectName)}"]`);
        if (projectBlock) {
            updateProjectContent(projectBlock, project);
        }

    } catch (error) {
        console.error(`Falha ao buscar previsão do tempo para ${projectName} (${cityForLookup}):`, error);
        delete weatherData[projectName];
    }
}

function getWeatherIcon(weatherCode) {
    // Códigos WMO: https://open-meteo.com/en/docs#weathervariables
    if (weatherCode === 0) return '☀️'; // Céu limpo
    if (weatherCode === 1) return '🌤️'; // Principalmente limpo
    if (weatherCode === 2) return '⛅'; // Parcialmente nublado
    if (weatherCode === 3) return '🌥️'; // Nublado
    if (weatherCode >= 45 && weatherCode <= 48) return '☁️'; // Nevoeiro
    if (weatherCode >= 51 && weatherCode <= 55) return '🌦️'; // Garoa
    if (weatherCode >= 56 && weatherCode <= 57) return '🌦️'; // Garoa gelada
    if (weatherCode >= 61 && weatherCode <= 65) return '🌧️'; // Chuva
    if (weatherCode >= 66 && weatherCode <= 67) return '🌧️'; // Chuva gelada
    if (weatherCode >= 71 && weatherCode <= 75) return '🌨️'; // Neve
    if (weatherCode === 77) return '❄️'; // Grãos de neve
    if (weatherCode >= 80 && weatherCode <= 82) return '🌧️'; // Pancadas de chuva
    if (weatherCode >= 85 && weatherCode <= 86) return '🌨️'; // Pancadas de neve
    if (weatherCode >= 95 && weatherCode <= 99) return '⛈️'; // Tempestade
    return '❔'; // Padrão
}
