# ✅ Portify – Passo a Passo de Desenvolvimento

Um guia prático com etapas divididas entre Frontend e Backend para criar o gerador de portfólios com publicação automática no GitHub Pages.

---

## 🧠 Etapa 1: Planejamento Geral

- Definir o público-alvo do Portify
- Listar os dados que o usuário poderá personalizar (nome, bio, projetos, redes sociais etc.)
- Esboçar os principais fluxos da aplicação: criação, visualização, publicação
- Definir visualmente 1 ou mais templates de portfólio
- Escolher as tecnologias (React, Firebase, Tailwind, GitHub API)

---

## 🎨 Etapa 2: Frontend

### 2.1 Interface do Usuário

- Criar a **página inicial** com explicação do que é o Portify
- Criar uma **página de formulário** para o usuário inserir:
  - Nome
  - Bio
  - Projetos
  - Redes sociais
  - Escolher template visual

### 2.2 Autenticação

- Adicionar botão de login com GitHub (opcional para salvar e publicar)
- Exibir nome ou avatar após login

### 2.3 Visualização

- Criar uma **página de preview** do portfólio com base nos dados do formulário
- Permitir que o usuário veja como ficará antes de publicar

### 2.4 Publicação

- Adicionar botão “Publicar meu portfólio”
- Mostrar uma tela de carregamento e depois o link final publicado

---

## 🔧 Etapa 3: Backend (Firebase + GitHub)

### 3.1 Firebase

- Configurar Firestore para salvar os dados do formulário
- Usar Firebase Auth (GitHub) para associar dados ao usuário

### 3.2 Geração de HTML Dinâmico

- Criar função que recebe os dados do usuário e gera um `index.html` com base no template escolhido

### 3.3 GitHub API

- Criar repositório no GitHub do usuário autenticado
- Enviar arquivos do portfólio (index.html, style.css) via API
- Ativar GitHub Pages no repositório
- Retornar a URL pública para o frontend

---

## 🚀 Etapa 4: Pós-Publicação

- Exibir o link final publicado para o usuário
- Permitir copiar ou abrir em nova aba

---

## ✨ Etapa 5: Funcionalidades Extras (opcional)

- Suporte a múltiplos templates com visualização dinâmica
- Personalização de cores e imagens
- Painel do usuário com portfólios criados
- Estatísticas de visitas com Firebase Analytics
- Subdomínios personalizados ou página comunitária com portfólios em destaque

---

## 🧩 Organização recomendada

- Dividir o projeto em:
  - `/src`: frontend (React)
  - `/functions`: backend (Firebase Functions)
- Usar pastas como:
  - `/templates` para armazenar HTML base dos modelos
  - `/services` para lidar com Firebase e GitHub
  - `/utils` para gerar HTML, converter arquivos etc.

---

Com esse roteiro, você terá um caminho claro do que fazer, quando fazer e onde cada parte se encaixa no Portify.
