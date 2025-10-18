# 🚀 Professional Portfolio & Blog

> **Uma plataforma over-engineered** que serve como portfólio profissional, blog técnico e laboratório de experimentação com tecnologias enterprise.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Redis](https://img.shields.io/badge/Redis-8.2-red?logo=redis)](https://redis.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17.6-blue?logo=postgresql)](https://www.postgresql.org/)
[![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-enabled-blueviolet)](https://opentelemetry.io/)

---

## 📖 Sobre o Projeto

Este projeto começou como um simples portfólio pessoal, mas evoluiu para um **laboratório completo de tecnologias enterprise**. É um exemplo confesso de over-engineering, implementando soluções robustas que vão muito além do necessário para um blog pessoal — mas que servem perfeitamente como:

- 🎯 **Showcase técnico** demonstrando capacidade de lidar com arquiteturas complexas
- 🧪 **Laboratório de experimentação** para testar novas tecnologias e padrões
- 🔧 **Repositório de soluções reutilizáveis** para projetos futuros

### 🤔 Por que Over-Engineering?

**Não, você não precisa de tudo isso para um blog pessoal.** Mas este projeto serve a três propósitos essenciais:

1. **Diferencial Técnico**: Demonstra experiência com ferramentas e práticas enterprise-grade
2. **Aprendizado Contínuo**: Cada feature "desnecessária" é uma oportunidade de dominar algo novo
3. **Kit de Ferramentas**: Código pronto e testado para reutilizar em projetos profissionais

---

## ✨ Features Principais

### 🎨 Interface & UX

- ✅ **Internacionalização completa** (PT-BR, EN) com next-intl
- ✅ **Tema dark/light** com next-themes
- ✅ **UI Components** baseados em Radix UI e shadcn/ui
- ✅ **Animações fluidas** com Framer Motion
- ✅ **Design responsivo** com Tailwind CSS v4

### 🔐 Autenticação & Segurança

- ✅ **Multi-provider Auth** via NextAuth (Google, GitHub, GitLab)
- ✅ **Rate Limiting integrado** com Redis e scripts Lua
- ✅ **Proteção contra bots** e ataques de força bruta
- ✅ **Defesa em profundidade** com múltiplas camadas de segurança

### 🚀 Performance & Cache

- ✅ **Cache distribuído com Redis** para aplicações multi-instância
- ✅ **Scripts Lua otimizados** reduzindo overhead para ~33ms
- ✅ **Estratégias híbridas**: TTL, Cache Busting e SWR (Stale-While-Revalidate)
- ✅ **Full Route Cache** e Request Memoization do Next.js
- ✅ **Imagens otimizadas** armazenadas no Cloudflare R2 (S3-compatible)

### 📊 Observabilidade & Monitoramento

- ✅ **OpenTelemetry** para traces, métricas e logs
- ✅ **Jaeger** para distributed tracing
- ✅ **Zipkin** como alternativa de tracing
- ✅ **Prometheus** para coleta de métricas
- ✅ **Métricas de cache**: hit/miss rate, latência, TTL
- ✅ **Rate limit monitoring**: requests bloqueados, tentativas por IP

### 📝 Gerenciamento de Conteúdo

- ✅ **Notion como CMS** via API oficial
- ✅ **Webhooks do Notion** para sincronização em tempo real
- ✅ **Processamento de Markdown** com remark e rehype
- ✅ **Syntax highlighting** com rehype-highlight
- ✅ **Sistema de comentários** com curtidas e edição
- ✅ **Filas assíncronas** com BullMQ para processamento em background

### 🌍 Integrações Externas

- ✅ **GitHub API** para exibição de projetos e contribuições
- ✅ **Notion API** para gerenciamento de posts do blog
- ✅ **DeepL API** para tradução automática com fallback para IA
- ✅ **Cloudflare R2** para armazenamento de imagens (S3-compatible)

### 📧 Comunicação

- ✅ **Sistema de emails** com React Email e Nodemailer
- ✅ **Filas de mensagens** para envio assíncrono
- ✅ **Worker dedicado** para processamento de emails

---

## 🏗️ Arquitetura

### Stack Tecnológica

#### Frontend

- **Next.js 15.5** - Framework React com SSR/SSG
- **React 19.1** - Biblioteca UI com hooks modernos
- **TypeScript 5** - Type safety e DX aprimorado
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animações declarativas
- **Radix UI** - Componentes acessíveis headless

#### Backend

- **Next.js API Routes** - Endpoints serverless
- **PostgreSQL 17.6** - Banco de dados relacional
- **Prisma ORM** - Type-safe database client
- **Redis 8.2** - Cache distribuído e rate limiting
- **BullMQ** - Sistema de filas para jobs assíncronos

#### DevOps & Observability

- **Docker Compose** - Orquestração de serviços
- **OpenTelemetry** - Instrumentação e telemetria
- **Jaeger** - Distributed tracing
- **Prometheus** - Métricas e monitoring
- **Zipkin** - Alternativa de tracing

#### Testes

- **Vitest** - Unit e integration tests
- **Playwright** - E2E tests
- **Testing Library** - React component testing

---

## 🎯 Por que Redis ao invés do Cache do Next.js?

O Next.js 15 oferece um excelente sistema de cache nativo, **suficiente para 95% dos casos**. Porém, implementei Redis pelos seguintes motivos:

### Cache do Next.js (Nativo)

✅ **Vantagens**:

- Zero configuração adicional
- Integrado nativamente ao framework
- Perfeito para SSR/SSG
- Sem infraestrutura extra

❌ **Limitações**:

- Cache isolado por instância
- Não sobrevive a restarts
- Difícil observabilidade
- Impossível compartilhar entre instâncias

### Redis (Distribuído)

✅ **Vantagens para este projeto**:

- **Cache compartilhado** entre múltiplas instâncias
- **Controle granular** de TTL por tipo de dado
- **Persistência** que sobrevive a restarts
- **Observabilidade** centralizada (hit/miss rates)
- **Rate limiting** integrado na mesma infraestrutura
- **Alta disponibilidade** com réplicas
- **Scripts Lua** para operações atômicas (~33ms de overhead)

> 💡 **Trade-off consciente**: Adiciona complexidade de infraestrutura em troca de controle total, observabilidade e preparação para escala horizontal.

---

## 🐳 Serviços Docker

```yaml
services:
  # Banco de dados principal
  postgres:
    image: postgres:17.6-alpine3.22
    ports: ["5432:5432"]

  # Cache distribuído e rate limiting
  redis:
    image: redis:8.2.1-alpine
    ports: ["6379:6379"]
    command: redis-server --requirepass ${REDIS_PASSWORD}

  # Distributed tracing
  jaeger-all-in-one:
    image: jaegertracing/all-in-one:latest
    ports: ["16686:16686"]

  zipkin-all-in-one:
    image: openzipkin/zipkin:latest
    ports: ["9411:9411"]

  # Coletor de telemetria
  otel-collector:
    image: ${OTELCOL_IMG}
    ports: ["4317:4317", "4318:4318"]

  # Métricas e monitoramento
  prometheus:
    image: prom/prometheus:latest
    ports: ["9090:9090"]
```

## 📦 Principais Dependências

### Core

- `next@15.5.2` - Framework React
- `react@19.1.0` - Biblioteca UI
- `typescript@5` - Linguagem
- `prisma@6.14.0` - ORM

### Cache & Performance

- `ioredis@5.7.0` - Cliente Redis
- `@upstash/redis@1.35.3` - Cliente Redis serverless
- `bullmq@5.60.0` - Filas de mensagens

### Observability

- `@opentelemetry/api@1.9.0` - API de telemetria
- `@opentelemetry/sdk-logs@0.57.2` - Logs estruturados
- `@vercel/otel@1.13.0` - Integração Vercel

### UI & UX

- `framer-motion@12.23.12` - Animações
- `lucide-react@0.532.0` - Ícones
- `next-themes@0.4.6` - Theme switching
- `next-intl@4.3.5` - Internacionalização

### Integrations

- `@notionhq/client@4.0.1` - Notion CMS
- `next-auth@5.0.0-beta.29` - Autenticação
- `nodemailer@6.10.1` - Emails

---

## Getting Started

### Pré-requisitos

- Node.js 20+
- Docker & Docker Compose
- Conta Notion (para CMS)
- Contas OAuth (Google, GitHub, GitLab)
- Cloudflare R2 (para imagens)

### Instalação

1. **Clone o repositório**

```bash
git clone <repository-url>
cd professional-portfolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
# Edite .env com suas credenciais
```

4. **Inicie os serviços Docker**

```bash
docker-compose up -d
```

5. **Execute as migrations**

```bash
npx prisma migrate dev
```

6. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

7. **Inicie o worker de filas (terminal separado)**

```bash
npm run dev:queue
```

A aplicação estará disponível em http://localhost:3000

### Scripts Disponíveis

```bash
npm run dev              # Servidor Next.js (com Turbopack)
npm run dev:queue        # Worker de filas (watch mode)
npm run build            # Build de produção
npm run start            # Servidor de produção
npm run lint             # Linter
npm run email            # Preview de emails
npm run test             # Testes unitários
npm run test:coverage    # Cobertura de testes
npm run test:e2e         # Testes E2E
npm run test:e2e:ui      # Testes E2E com UI
```

## 📋 Backlog & Roadmap

- [x] Sistema de tratamento de erros
- [x] Recuperação de avatares de usuários
- [x] Revalidação de comentários
- [x] Testes unitários do skillsMapper
- [x] Filas para mensagens assíncronas
- [x] Botões com loading states
- [x] Refatoração para Tailwind v4
- [ ] **Internacionalização completa**: Skills, Actions e APIs
- [ ] **Solução para imagens do Notion**: Migração para Cloudflare R2
- [ ] **Testes E2E**: Criar comentários, curtir, editar
- [ ] **Testes de integração**: Cobertura de APIs críticas
- [x] **README.md completo** (este documento!)
- [ ] **Pipeline CI/CD**: GitHub Actions com testes automáticos
- [ ] **Dashboard de Admin**: Gerenciamento de Posts, Comments, Likes
- [x] **Página de Admin para Cache**: Controle e observabilidade do Cache Redis
- [x] **Página de Admin para Queues**: Controle e observabilidade da Fila
- [x] **Página de Usuários**: Pagina do perfil de usuários
- [x] **Página de Admin para Consultar Usuáiros**: Controle e observabilidade de usuários
- [x] **Página de Admin para Consultar Subscritros**: Controle e observabilidade de subscrições

---

## 🎓 Aprendizados & Conceitos

### Cache Distribuído

Implementação de cache em múltiplas camadas:

- **Browser Cache**: Headers HTTP otimizados
- **CDN Cache**: Cloudflare para assets estáticos
- **Application Cache**: Next.js Data Cache
- **Distributed Cache**: Redis com scripts Lua

### Rate Limiting Performático

- Scripts Lua executados no Redis (operações atômicas)
- Integração com Middleware do Next.js
- Configuração granular por rota
- Overhead reduzido para ~33ms por verificação

### Observabilidade Moderna

- **Traces**: Acompanhamento de requests end-to-end
- **Métricas**: Hit/miss rates, latências, throughput
- **Logs**: Estruturados com contexto de traces
- **Alertas**: Baseados em thresholds configuráveis

### Defesa em Profundidade

Múltiplas camadas de segurança:

1. Rate limiting no middleware
2. Validação de inputs com Zod
3. Sanitização de HTML
4. CSRF protection
5. Autenticação multi-provider

---

## 🌐 Infraestrutura & Storage

### Cloudflare R2 (S3-Compatible)

Todas as imagens do blog são armazenadas no Cloudflare R2:

- ✅ **Zero egress fees** (sem custos de saída de dados)
- ✅ **Alta disponibilidade** e performance global
- ✅ **Compatível com S3** (fácil migração futura)
- ✅ **CDN integrado** do Cloudflare

### Notion como CMS

- ✅ **Interface familiar** para edição de conteúdo
- ✅ **Webhooks** para sincronização automática
- ✅ **Markdown suportado** nativamente
- ✅ **Versionamento** de conteúdo gratuito

---

## 📝 Licença

Este projeto é de código fechado e serve como portfólio pessoal.

---

## 📚 Referências & Créditos

- [Next.js Documentation](https://nextjs.org/docs)
- [Redis Best Practices](https://redis.io/docs/manual/patterns/)
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
- [Notion API](https://developers.notion.com/)
- Artigos do blog sobre Cache e Over-engineering (disponíveis na plataforma)

---

<div align="center">

**Feito com 💜 e muito over-engineering**

_"Se vai fazer, faça bem feito — mesmo que seja desnecessariamente complexo."_

</div>
