🚀 Escopo Geral do Projeto Backend: Portify com Node.js + NestJS
Este documento descreve o escopo geral do backend para o Portify, um gerador de portfólios dinâmicos. O objetivo principal é fornecer uma API robusta e escalável que permita aos usuários criar, personalizar e publicar seus portfólios, integrando-se com serviços como Firebase e GitHub Pages.

Visão Geral do Projeto
O backend do Portify será a espinha dorsal da aplicação, responsável por gerenciar os dados dos portfólios dos usuários e facilitar a interação com serviços externos. Ele atuará como uma API RESTful, recebendo requisições do frontend (construído em React) e interagindo com o banco de dados e outras APIs conforme necessário.

Tecnologias Necessárias
Linguagem de Programação: Node.js

Framework: NestJS (para construção de APIs RESTful e organização modular)

Banco de Dados: Firebase Firestore (NoSQL, para armazenamento de dados de portfólio)

Autenticação e Autorização: Firebase Authentication (para gerenciamento de usuários e validação de tokens)

Gerenciador de Pacotes: npm ou Yarn (para gerenciamento de dependências e scripts do projeto)

Implantação (Deploy): Render.com (ou plataforma similar para hospedagem de aplicações Node.js)

Escopo da API
A API backend fornecerá os seguintes grupos de funcionalidades:

Gerenciamento de Portfólios
Criação de Portfólio: Endpoint para usuários autenticados criarem novos registros de portfólio.

Leitura de Portfólio: Endpoints para buscar portfólios específicos por ID e para listar todos os portfólios (com possibilidade de filtros, se necessário). A leitura pode ser pública ou restrita.

Atualização de Portfólio: Endpoint para usuários autenticados modificarem seus próprios portfólios existentes.

Exclusão de Portfólio: Endpoint para usuários autenticados removerem seus próprios portfólios.

Autenticação e Autorização
Validação de Token: O backend será capaz de validar tokens de autenticação (ID Tokens) fornecidos pelo Firebase Authentication. Isso garantirá que apenas usuários legítimos e autorizados possam acessar recursos protegidos.

Controle de Acesso: Implementação de lógica para garantir que um usuário só possa criar, ler, atualizar ou excluir seus próprios dados de portfólio. As regras de segurança do Firestore complementarão essa lógica no lado do banco de dados.

Integração com GitHub e Publicação
Postagem de Portfólio: Endpoint para iniciar o processo de publicação de um portfólio. Isso incluirá:

Seleção de Template: O usuário poderá escolher entre templates prontos disponíveis na plataforma.

Preenchimento de Campos: O backend receberá os dados do usuário (como nome, foto, informações de contato, projetos, etc.) que serão usados para preencher o template escolhido.

Geração de Conteúdo: O backend processará o template selecionado com os dados do usuário para gerar os arquivos estáticos do portfólio (HTML, CSS, JS).

Criação Automática de Repositório: Interação com a API do GitHub para criar um novo repositório público para o usuário (ex: username.github.io ou um repositório específico para o portfólio).

Upload de Arquivos: Fazer o upload dos arquivos estáticos gerados para o novo repositório do GitHub.

Configuração do GitHub Pages: Configurar o repositório para servir o conteúdo através do GitHub Pages.

Futuras Melhorias
Validação de Dados: Implementação de validação rigorosa para todos os dados recebidos pela API.

Tratamento de Erros Global: Um mecanismo centralizado para lidar com exceções e retornar respostas de erro padronizadas e descritivas.

Logging e Monitoramento: Configuração de um sistema robusto de logs e métricas para monitorar a saúde e o desempenho da API.

Testes Automatizados: Desenvolvimento de testes de unidade e integração para garantir a estabilidade e a correção das funcionalidades do backend.

Otimização de Consultas: Otimização de consultas ao Firestore para garantir performance e eficiência de custo em larga escala.
