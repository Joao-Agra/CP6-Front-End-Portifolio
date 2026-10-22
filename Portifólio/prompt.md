# Checkpoint 6: documento do processo

## 1. Prompt inicial

### 1.1 Mensagem enviada (exatamente como foi escrita, com os anexos: PDF do Checkpoint 6, print da paleta no Adobe Color e o zip das aulas)

> faça um prompt perfeito  para o checkpoint 6 de front end e dps faça ele, essa paleta, Tipografia pode scolher e dps fala o pq, tom e personalidade será descontraido e bonito, Estrutura da página escolhe e dps me fla o pq. faça usando oq a gente aprendeu nessa pasta .zip
>
> use somente css, html e se precisar js
>
> faça bem bonitinho

### 1.2 Prompt estruturado (versão organizada do pedido, usada para construir a página)


Crie um portfólio pessoal de uma página para João Gabriel Agra, estudante do 1º ano de Engenharia de Software na FIAP. Use só HTML, CSS e JavaScript puro, em 3 arquivos: index.html, style.css e script.js. Textos em português brasileiro, em primeira pessoa.

**Tom e personalidade:** descontraído e bonito. Frases curtas, humor leve, sem gíria exagerada. No layout isso aparece em cantos bem arredondados, alinhamento reto, sem elementos inclinados, e animações suaves.

**Paleta (variáveis CSS em :root):**
- --bg #33292D: fundo da página
- --surface #54323F: cards e blocos
- --line #873654: bordas, divisores e linha da timeline
- --accent-2 #BA255C: botões e hover
- --accent #ED0057: destaque, só em textos grandes e elementos gráficos
- --text #FFF3F7 e --muted #D6BEC8: textos
Todas saem de um mesmo rosa (esquema monocromático), então a página fica coesa e quente.

**Tipografia (Google Fonts):** Bricolage Grotesque (700 e 800) nos títulos, pela personalidade divertida, e Figtree (400 a 700) no corpo, pela leitura limpa. Título do hero com clamp(). Linhas de texto com no máximo 65 caracteres.

**Estrutura (header, nav, main, section, footer):**
1. Header fixo com 5 links de âncora e rolagem suave, para navegar rápido.
2. Hero com nome gigante, frase de apresentação, 2 botões e uma faixa horizontal com skills em loop (@keyframes): primeira impressão e skills de relance.
3. Sobre, com texto e uma ficha (curso, faculdade, foco): apresentação humana.
4. Skills em 4 grupos (Front-end, JavaScript, Python, Processo): o enunciado pede skills.
5. Projetos: um destaque grande com mini demo interativa, filtros por tecnologia (JS) e cards em grid auto-fit. Projetos reais, do github.com/Joao-Agra: CP3 Web Dev (login e CRUD de filmes em JS puro, com vídeo), Loja virtual (componentização, JavaScript), E-commerce (Python) e CP5 Front-end (Bootstrap, Tailwind, Vibecode). O enunciado pede projetos do ano.
6. Matérias do ano: linha do tempo vertical (::before) com as 8 matérias cursadas (Differentiated Problem Solving, Computational Thinking with Python, Storytelling e Inspiração Empreendedora, Software & Total Experience Design, Edge Computing & Computer Systems, Web Development, Front-End Design, Nano Course). O enunciado pede experiências.
7. Contato com botões de GitHub e LinkedIn, e footer com copyright 2026.

**Animação e comportamento:** transições de 0.3s a 0.5s em botões, links e cards. Uma animação de entrada ao rolar (IntersectionObserver); sem JS a página aparece normal. Link do menu da seção atual destacado. Respeitar prefers-reduced-motion e ter :focus-visible.

**Responsividade:** funcionar a partir de 360px. @media (max-width: 850px): hero, sobre e destaque em coluna única. @media (max-width: 500px): tudo em 1 coluna, menu compacto, títulos menores.

**Código:** reset simples, box-sizing: border-box, CSS organizado por seção com comentários, sem emoji, imagens com alt. Antes de finalizar, teste todos os links, botões e filtros.

## 2. Referências (6, com a pesquisa detalhada em `Referencias/references.md`)
| Site ou imagem | O que aproveitei | Seção da página |
|---|---|---|
| Brittany Chiang (brittanychiang.com) | Tema escuro, conteúdo bem organizado e projetos explicados com clareza | Estrutura geral e Projetos |
| Bricolage Grotesque (Google Fonts) | Tipografia que mistura brincadeira e leitura clara | Títulos, hero |
| Adobe Color (roda de cores, harmonia monocromática) | Paleta com 5 tons do mesmo rosa | Cores da página toda |
| Pure CSS Faded Infinite Text Marquee (FreeFrontend) | Faixa de texto em loop contínuo, só com CSS, usada para as skills | Hero |
| Aula 11, grid e responsividade | Mosaico em grid, hover com animação e breakpoints de 850px e 500px | Projetos e responsividade |
| Aula 7, transições e animações | Transições em botões e aparição dos elementos ao rolar | Botões, cards e trilha |

## 3. Prompts de ajuste (na ordem em que foram enviados, sem edição)

**Ajuste 1**

> só uma coisa, eu não sou o Leonardo, sou o João Gabriel Agra, segue meu github p vc arrumar e acresentar mais coisa no portifolio, RRUME O PROMPT TBM coloque as coisa q tão pedidndo p ter no prompt, melhore o site tudo e principam=lmente os projetos.n segue meu github (pode usar os projetos dele):
>
> https://github.com/Joao-Agra

**Ajuste 2**

> boa, só troque esses por estes exceto o de python (nesse só mude o nome para e-commerce):
>
> https://github.com/Joao-Agra/projeto-loja-virtual
> https://github.com/Joao-Agra/CP5-Front-end
>
> na parte de trilha do ano coloque as materias que eu tive ao ínves dos repositorios:
>
> Differentiated Problem Solving
> Computational Thinking with Python
> Storytelling e Inspiração Empreendedora
> Software & Total Experience Design
> Edge Computing & Computer Systems
> Web Development
> Front-End Design
> Nano Course
>
> e no design não faça isso de deixar as linhas tortas pf

**Ajuste 3**

> certinho, agora arrume o prompt md. complete com oq está faltando (te mandei print) e tbm crie um reffences.,md com as pesquisas de pq foi escolhido tal coisa como referencia, as pesquisas

## 4. Registro de correções
| Problema | Prompt de correção | Resultado | Aprendizado |
|---|---|---|---|
| A página saiu com o nome errado (Leonardo) e com projetos que não eram meus | Ajuste 1: disse meu nome e mandei meu GitHub | Resolveu totalmente | Colocar nome, curso e link do GitHub já no prompt inicial |
| Os cards de projeto não eram os que eu queria (CP2 e Webdev3) | Ajuste 2, primeira parte: troquei por Loja virtual e CP5 Front-end e renomeei o de Python para E-commerce | Resolveu totalmente; a descrição do E-commerce ficou genérica | Listar no prompt inicial os repositórios exatos e o que cada um faz |
| A seção "Trilha do ano" mostrava etapas e repositórios em vez das matérias | Ajuste 2, segunda parte: passei a lista das 8 matérias | Resolveu totalmente | Dizer desde o início qual conteúdo vai em cada seção |
| A faixa de skills, a ficha e os cards ficavam inclinados | Ajuste 2, terceira parte: pedi para não deixar as linhas tortas | Resolveu totalmente | Escrever "alinhamento reto, sem inclinações" no prompt inicial. Também aprendi que pedir três coisas numa mensagem só dificulta o registro: o enunciado recomenda um problema por vez |

## 5. Resultado final
- Repositório: **pendente — inserir o link do repositório deste portfólio no GitHub.**
- Deploy: **pendente — publicar a página (por exemplo, no GitHub Pages) e inserir o link público.**
- Reflexão (revise para refletir sua experiência real): a paleta rosa e ameixa, o tom descontraído, o destaque do CP3 com a mini demonstração e os filtros de projetos ficaram de acordo com a proposta. Como próximos ajustes, eu reduziria algumas descrições, adicionaria capturas reais dos projetos aos cards e testaria a página em mais tamanhos de tela.
