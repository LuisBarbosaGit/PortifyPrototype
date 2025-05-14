# 🚀 Projeto: Plataforma de Venda de Templates

## ✅ Etapas Gerais

---

## 🖥️ FRONTEND (React + Vercel)g

### 1. Estrutura inicial
- [ ] Criar projeto React (Vite ou Create React App)
- [ ] Criar página inicial com listagem de templates
- [ ] Criar página de checkout com informações do pedido
- [ ] Criar página de sucesso após o pagamento
- [ ] Configurar deploy no Vercel

### 2. Integrações
- [ ] Buscar dados dos templates via API (GET /templates)
- [ ] Enviar dados do pedido para a API (POST /purchase)
- [ ] Redirecionar para Stripe Checkout
- [ ] Após sucesso, mostrar link de download ou mensagem de confirmação

---

## 🔧 BACKEND (Node.js + Express + PostgreSQL via Render)

### 1. Preparar ambiente local
- [ ] Criar projeto com `npm init`
- [ ] Instalar dependências: `express`, `pg`, `dotenv`, `stripe`, `nodemailer`, `cors`
- [ ] Configurar variáveis de ambiente

### 2. Configurar banco de dados no Render
- [ ] Criar conta no [Render](https://render.com)
- [ ] Criar instância PostgreSQL (plano gratuito)
- [ ] Criar tabelas:
  - `templates (id, name, price, download_url, description)`
  - `orders (id, email, template_id, paid, created_at)`

### 3. Criar API REST
- [ ] Rota `GET /templates` → retorna templates do banco
- [ ] Rota `POST /purchase` → cria pedido e inicia pagamento no Stripe
- [ ] Rota `GET /success` → recebe confirmação do pagamento
- [ ] (Opcional) Enviar e-mail com link usando `nodemailer`

### 4. Deploy no Render
- [ ] Subir projeto no GitHub
- [ ] Conectar o repositório no Render
- [ ] Configurar variáveis de ambiente (DB, Stripe keys etc.)
- [ ] Fazer o deploy automático do backend

---

## 💳 PAGAMENTO (Stripe)

### 1. Criar conta no Stripe
- [ ] Configurar produtos e preços (ou usar Checkout dinâmico)
- [ ] Gerar chave pública/privada

### 2. Integração com backend
- [ ] Criar sessão de pagamento no backend (Stripe Checkout)
- [ ] Redirecionar o usuário do frontend para o checkout
- [ ] Verificar sucesso do pagamento
- [ ] Salvar pedido no banco (e enviar e-mail se quiser)

---

## 📩 ENTREGA DE TEMPLATES

### 1. Armazenamento
- [ ] Hospedar os templates prontos em:
  - GitHub Releases
  - Dropbox
  - Firebase Hosting

### 2. Entrega após pagamento
- [ ] Após o pagamento, mostrar o link direto no frontend
- [ ] Ou enviar o link por e-mail com `nodemailer`

---

## ✅ Manutenção e Segurança

- [ ] Usar CORS no backend para permitir acesso apenas do frontend
- [ ] Validar pagamentos antes de liberar downloads
- [ ] Tratar erros do Stripe e banco
- [ ] Logar atividades básicas para análise futura

---

## 📁 Extras futuros (opcional)

- [ ] Tela de login (JWT)
- [ ] Painel para ver pedidos
- [ ] Página de checkout customizada
- [ ] Upload de novos templates via painel admin

```


