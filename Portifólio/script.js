// Aparece ao rolar (cards de projeto e itens da trilha)
const revelar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada, i) => {
        if (entrada.isIntersecting) {
            entrada.target.style.transitionDelay = `${(i % 4) * 90}ms`;
            entrada.target.classList.add('visivel');
            revelar.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => revelar.observe(el));

// Destaca no menu a seção que está na tela
const links = document.querySelectorAll('.topo li a');
const secoes = document.querySelectorAll('main section[id]');

const atual = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            links.forEach((a) => a.classList.toggle('ativo', a.getAttribute('href') === `#${entrada.target.id}`));
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

secoes.forEach((s) => atual.observe(s));

// Filtro dos projetos
const filtros = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.galeria .card');

filtros.forEach((botao) => {
    botao.addEventListener('click', () => {
        filtros.forEach((b) => b.setAttribute('aria-pressed', b === botao));
        cards.forEach((card) => {
            card.hidden = botao.dataset.filtro !== 'todos' && card.dataset.tipo !== botao.dataset.filtro;
        });
    });
});

// Mini demo do CRUD de filmes (array manipulado por índice)
const filmes = ['Interestelar', 'Matrix'];
const lista = document.getElementById('lista-filmes');
const campo = document.getElementById('filme');
const aviso = document.getElementById('aviso');

function mostrarFilmes() {
    lista.innerHTML = '';
    filmes.forEach((nome, indice) => {
        const item = document.createElement('li');
        const texto = document.createElement('span');
        const remover = document.createElement('button');
        texto.textContent = nome;
        remover.textContent = 'Remover';
        remover.setAttribute('aria-label', `Remover ${nome}`);
        remover.addEventListener('click', () => removerFilme(indice));
        item.append(texto, remover);
        lista.append(item);
    });
    if (!filmes.length) aviso.textContent = 'Lista vazia. Adicione o primeiro filme.';
}

function adicionarFilme(nome) {
    if (!nome.trim()) {
        aviso.textContent = 'Digite o nome de um filme antes de adicionar.';
        return;
    }
    filmes.push(nome.trim());
    aviso.textContent = 'Filme adicionado.';
    mostrarFilmes();
}

function removerFilme(indice) {
    filmes.splice(indice, 1);
    aviso.textContent = 'Filme removido.';
    mostrarFilmes();
}

document.getElementById('form-filme').addEventListener('submit', (e) => {
    e.preventDefault();
    adicionarFilme(campo.value);
    campo.value = '';
    campo.focus();
});

mostrarFilmes();
