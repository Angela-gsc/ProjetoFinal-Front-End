# 🎬 Cine

Um website com design moderno e responsivo desenvolvido com **HTML5**, **CSS3** e **JavaScript** para descoberta, organização e avaliação de filmes.

## 🚀 Funcionalidades

- **Exploração por Gênero:** Filtre filmes rapidamente entre Ação, Animação, Comédia, Drama, Romance, Terror ou veja todos.
- **Busca:** Encontre filmes digitando o nome.
- **Gerenciamento de Lista Pessoal:**
  - ✅ Marcar filmes como **Já Assistidos**.
  - ❤️ Adicionar aos **Favoritos**.
  - ⏰ Organizar na lista **Quero Assistir** (Watchlist).
- **Sistema de Comentários:** Abra os detalhes de qualquer filme para ler e adicionar suas próprias impressões/comentários.
- **Persistência de Dados (`localStorage`):** Seus estados (favoritos, assistidos, watchlist e comentários) ficam salvos no navegador, mesmo se você atualizar a página.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização customizada (Design moderno inspirado no padrão *Rocketseat/Dark Mode*, Flexbox, Grid Layout).
- **JavaScript (ES6+):** Lógica da aplicação e persistência local.


---



## 📦 Estrutura de Arquivos

```text
├── index.html       # Página inicial (Home) do site
├── perfil.html      # Área do usuário com listas de favoritos, assistidos e quero assistir
├── sobre.html       # Página com informações sobre o site e um formulário de feedback
├── filmes.html      # Catálogo completo de filmes
├── detalhes.html    # Página de exibição com os detalhes individuais de cada filme
├── style.css        # Estilos, variáveis e responsividade
├── filmes.js        # Base de dados dos filmes cadastrados, separados por gênero
└── script.js        # manipulação de estado e localStorage

