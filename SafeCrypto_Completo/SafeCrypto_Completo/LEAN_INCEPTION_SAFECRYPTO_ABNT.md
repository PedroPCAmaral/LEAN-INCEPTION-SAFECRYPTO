# LEAN INCEPTION – SAFECRYPTO

**UNIVERSIDADE CATÓLICA DE BRASÍLIA**

**ARQUITETURA DE SOFTWARE**

**GRUPO 8**

---

**PEDRO PAULO COSTA DO AMARAL**
**LUIZ FELIPE FERRAZ DE CARVALHO**

---

**Brasília – DF**

**2026**

---

## RESUMO

Este trabalho apresenta a aplicação da metodologia Lean Inception para o desenvolvimento do SafeCrypto, uma plataforma digital segura de gestão de criptoativos. O projeto foi concebido como resposta aos problemas de transparência e segurança evidenciados pelo colapso da FTX em 2022. O documento consolida as oito etapas obrigatórias da Lean Inception: visão do produto, definições, personas, features, análise de concordância e incerteza, jornadas do usuário, definição do MVP e canvas MVP. O resultado é uma base clara e compartilhada que sustentará decisões arquiteturais nas próximas etapas do projeto.

**Palavras-chave**: Lean Inception; SafeCrypto; Arquitetura de Software; Criptomoedas; Segurança.

---

## ABSTRACT

This paper presents the application of the Lean Inception methodology for the development of SafeCrypto, a secure digital platform for cryptocurrency asset management. The project was conceived as a response to the transparency and security problems evidenced by the FTX collapse in 2022. The document consolidates the eight mandatory stages of Lean Inception: product vision, definitions, personas, features, agreement and uncertainty analysis, user journeys, MVP definition, and MVP canvas. The result is a clear and shared foundation that will support architectural decisions in the next stages of the project.

**Keywords**: Lean Inception; SafeCrypto; Software Architecture; Cryptocurrencies; Security.

---

## SUMÁRIO

1. INTRODUÇÃO
2. CONTEXTUALIZAÇÃO
3. VISÃO DO PRODUTO
4. DEFINIÇÕES DO PRODUTO
5. PERSONAS E MAPA DE EMPATIA
6. FEATURES
7. CONCORDÂNCIA × INCERTEZA
8. JORNADA DO USUÁRIO
9. PRODUTO MÍNIMO VIÁVEL (MVP)
10. CANVAS MVP
11. ENGENHARIA DE REQUISITOS: O CASO FTX
12. CONCLUSÃO
13. REFERÊNCIAS

---

## 1. INTRODUÇÃO

No desenvolvimento contemporâneo de software, decisões arquiteturais eficazes dependem de um entendimento sólido do problema, dos usuários, do valor entregue pelo produto e da definição clara do escopo inicial. A metodologia Lean Inception surge como uma abordagem colaborativa amplamente utilizada para alinhar visão, usuários, funcionalidades e MVP antes da definição detalhada da arquitetura.

O SafeCrypto é uma plataforma digital concebida em 2026 como solução para os problemas críticos de transparência e segurança no mercado de criptomoedas, particularmente em resposta ao colapso da FTX ocorrido em novembro de 2022. Este trabalho aplica a Lean Inception de forma estruturada, consolidando o raciocínio do grupo através de um artefato visual e documentado que representa claramente o pensamento ao longo do processo de definição do produto e do MVP.

### 1.1 Objetivos

Os objetivos específicos deste trabalho são:

- Definir claramente a visão do produto SafeCrypto;
- Delimitar o escopo do produto por meio de definições explícitas;
- Identificar personas e compreender profundamente seus contextos;
- Levantar e priorizar features com base em valor, esforço e experiência do usuário;
- Mapear jornadas do usuário e identificar MVPs viáveis;
- Consolidar o raciocínio do grupo por meio de um artefato visual do Lean Inception;
- Estabelecer uma base sólida para decisões arquiteturais subsequentes.

---

## 2. CONTEXTUALIZAÇÃO

### 2.1 O Problema: O Colapso da FTX

A FTX era a terceira maior exchange de criptomoedas do mundo, com mais de um milhão de usuários. O colapso, ocorrido em novembro de 2022, foi desencadeado por uma corrida de saques que expôs um rombo de 8 bilhões de dólares nas contas da empresa. O ponto central dessa falha catastrófica foi a **ausência de software adequado** para gestão de risco, auditoria e segregação de fundos dos clientes.

A FTX operava com sistemas que não garantiam transparência nas operações, permitindo que fundos dos clientes fossem utilizados para operações da empresa sem que houvesse visibilidade ou controle. Essa falta de segregação de dados, aliada à ausência de mecanismos de auditoria em tempo real, criou um ambiente propício para fraudes e má gestão de ativos.

### 2.2 A Necessidade do SafeCrypto

O SafeCrypto é projetado especificamente para evitar as falhas arquiteturais que levaram ao colapso da FTX. A plataforma garante:

- **Segurança total dos ativos dos usuários** através de segregação clara de dados e controle de acesso;
- **Transparência absoluta** em todas as transações, com histórico imutável e auditável;
- **Confiabilidade** nos sistemas de monitoramento e prevenção de fraudes;
- **Rastreabilidade completa** de todas as operações, permitindo auditoria independente.

---

## 3. VISÃO DO PRODUTO

O produto SafeCrypto tem como objetivo resolver o problema crítico de falta de transparência e segurança observado no colapso da FTX. A plataforma será desenvolvida para **investidores de criptomoedas** que buscam **confiança, rastreabilidade e controle total** sobre seus ativos.

### 3.1 Problema Central

Investidores de criptomoedas enfrentam medo constante de fraude e perda financeira em plataformas não confiáveis. O colapso da FTX demonstrou que mesmo grandes exchanges podem falhar catastroficamente quando carecem de arquitetura de software adequada.

### 3.2 Público-Alvo

Investidores de criptomoedas, particularmente aqueles que:
- Buscam segurança e clareza em seus investimentos;
- Desejam ter controle total sobre seus ativos;
- Necessitam de transparência e rastreabilidade;
- Querem evitar riscos associados a plataformas opacas.

### 3.3 Valor Principal

O principal valor entregue é a **segurança aliada à transparência em tempo real**, garantindo que todas as transações sejam auditáveis e que os usuários tenham total visibilidade sobre seus fundos e operações.

---

## 4. DEFINIÇÕES DO PRODUTO

### 4.1 O que o Produto É

O SafeCrypto é:

- Uma plataforma digital segura para gestão de criptoativos;
- Um sistema focado em auditoria e prevenção de fraudes;
- Uma ferramenta que oferece transparência e rastreabilidade de transações;
- Um ambiente onde o usuário tem controle total sobre seus ativos.

### 4.2 O que o Produto Não É

O SafeCrypto não é:

- Uma corretora sem controle ou um sistema opaco;
- Uma plataforma de trading de alto risco ou alavancagem;
- Um banco tradicional com garantia de depósitos;
- Um sistema que realiza operações sem validação ou permite inconsistências nos dados.

### 4.3 O que o Produto Faz

O SafeCrypto realiza:

- Depósitos e saques de criptoativos com validação rigorosa;
- Registros imutáveis de todas as transações;
- Monitoramento contínuo de atividades suspeitas;
- Geração de relatórios detalhados para auditoria;
- Alertas inteligentes sobre eventos críticos.

### 4.4 O que o Produto Não Faz

O SafeCrypto não:

- Realiza operações sem validação ou permite inconsistências nos dados;
- Oferece consultoria financeira ou recomendações de investimento;
- Executa operações de trading complexas ou alavancagem;
- Funciona como um banco com garantia de depósitos.

---

## 5. PERSONAS E MAPA DE EMPATIA

### 5.1 Persona Principal: João Investidor

**Perfil Demográfico:**
- Nome: João Investidor
- Idade: 32 anos
- Profissão: Analista Financeiro
- Experiência: Médio-alta em investimentos tradicionais, iniciante em criptomoedas

**Objetivos:**
- Investir em criptomoedas com segurança;
- Ter controle total sobre seus ativos;
- Compreender completamente suas operações;
- Evitar riscos associados a plataformas não confiáveis.

**Contexto de Uso:**
- Acessa a plataforma diariamente para monitorar seus ativos;
- Realiza transações ocasionais (depósitos, saques);
- Busca informações sobre segurança e histórico de transações;
- Utiliza tanto desktop quanto mobile.

### 5.2 Mapa de Empatia

#### O que João Vê

- Riscos inerentes ao mercado de criptomoedas;
- Histórico de colapsos de grandes exchanges;
- Falta de regulamentação clara no setor;
- Competição entre plataformas com diferentes níveis de segurança.

#### O que João Ouve

- Alertas negativos da mídia sobre volatilidade e fraudes;
- Recomendações de colegas sobre a importância de segurança;
- Discussões sobre o colapso da FTX e suas consequências;
- Promessas de altos retornos em plataformas não confiáveis.

#### O que João Pensa e Sente

- Insegurança ao alocar seus recursos em criptomoedas;
- Preocupação com a possibilidade de perda financeira;
- Desejo de controle e transparência;
- Frustração com a falta de plataformas confiáveis.

#### O que João Fala e Faz

- Questiona a segurança de plataformas;
- Busca ativamente informações sobre auditoria e conformidade;
- Compartilha experiências negativas com amigos;
- Procura por plataformas que ofereçam transparência.

#### Dores

- Medo de fraude e perda financeira;
- Insegurança em plataformas opacas;
- Falta de controle sobre seus ativos;
- Impossibilidade de auditar transações;
- Preocupação com a segregação de fundos.

#### Ganhos

- Confiança absoluta na plataforma;
- Transparência em tempo real;
- Controle total sobre seus ativos;
- Histórico auditável completo;
- Segurança garantida por arquitetura robusta;
- Alertas sobre atividades suspeitas.

---

## 6. FEATURES

As principais funcionalidades do SafeCrypto foram identificadas para atender diretamente às necessidades de segurança e transparência da persona. Cada feature foi priorizada com base no valor entregue ao usuário, no esforço técnico de implementação e no impacto positivo na experiência do usuário.

| Feature | Valor | Esforço | UX | Prioridade |
|---------|-------|---------|-----|-----------|
| Autenticação Segura (MFA) | Alto | Médio | Essencial para confiança | MVP |
| Gestão de Saldo em Tempo Real | Alto | Baixo | Fundamental para controle | MVP |
| Histórico Completo e Auditável | Alto | Médio | Base da transparência | MVP |
| Sistema Antifraude | Muito Alto | Alto | Diferencial competitivo | Pós-MVP |
| Alertas Inteligentes | Médio | Médio | Aumenta sensação de segurança | Pós-MVP |

### 6.1 Autenticação Segura (MFA)

Implementação de autenticação multifator para garantir que apenas o proprietário da conta possa acessá-la. Inclui senha forte, autenticação por SMS ou aplicativo, e possibilidade de recuperação segura.

### 6.2 Gestão de Saldo em Tempo Real

Visualização instantânea do saldo de criptoativos, com atualização em tempo real. Permite que o usuário saiba exatamente quanto possui em sua conta a qualquer momento.

### 6.3 Histórico Completo e Auditável

Registro imutável de todas as transações, com data, hora, valor, origem e destino. Permite auditoria completa e rastreamento de cada operação realizada.

### 6.4 Sistema Antifraude

Monitoramento contínuo de atividades suspeitas, com detecção de padrões anormais. Inclui análise de comportamento do usuário e alertas automáticos.

### 6.5 Alertas Inteligentes

Notificações automáticas sobre eventos críticos, como tentativas de login suspeitas, transações grandes, ou atividades fora do padrão.

---

## 7. CONCORDÂNCIA × INCERTEZA

A análise de concordância e incerteza ajuda a priorizar o desenvolvimento das funcionalidades. Funcionalidades básicas possuem alta concordância entre os stakeholders e baixa incerteza técnica, sendo de implementação direta. Por outro lado, funcionalidades mais complexas apresentam maior incerteza, exigindo priorização estratégica e validação contínua.

### 7.1 Alta Concordância + Baixa Incerteza

Funcionalidades básicas e prioritárias para o MVP:

- **Autenticação Segura**: Tecnologia consolidada, alta demanda;
- **Gestão de Saldo**: Requisito fundamental, baixa complexidade técnica;
- **Histórico Auditável**: Base da proposta de valor, tecnologia conhecida.

### 7.2 Média Concordância + Alta Incerteza

Funcionalidades complexas para pós-MVP:

- **Sistema Antifraude**: Requer machine learning e análise comportamental;
- **Alertas Inteligentes**: Necessita calibração e validação contínua;
- **Auditoria em Tempo Real**: Desafios técnicos significativos.

---

## 8. JORNADA DO USUÁRIO

A jornada do usuário no SafeCrypto é desenhada para maximizar a confiança em cada etapa. Cada ponto de contato foi cuidadosamente planejado para mitigar dores e entregar valor.

### 8.1 Estágio 1: Cadastro Seguro

O usuário cria uma conta com dados verificados e validação de identidade. Este estágio estabelece a confiança inicial através de processos rigorosos de onboarding.

**Ponto de Dor Mitigado**: Medo de fraude desde o início.

### 8.2 Estágio 2: Autenticação Rigorosa

Login com autenticação multifator garante que apenas o proprietário acesse a conta. Este estágio reforça a segurança.

**Ponto de Dor Mitigado**: Preocupação com acesso não autorizado.

### 8.3 Estágio 3: Depósito de Recursos

Transferência de criptoativos com confirmação imediata e registro no histórico. O usuário vê seu saldo atualizar em tempo real.

**Valor Entregue**: Transparência e confirmação instantânea.

### 8.4 Estágio 4: Acompanhamento de Saldo

Visualização em tempo real dos ativos, com histórico de variações. O usuário tem controle total e visibilidade.

**Valor Entregue**: Controle e transparência contínuos.

### 8.5 Estágio 5: Execução de Transações

Operações auditáveis e rastreáveis, com validação em cada etapa. Cada transação é registrada de forma imutável.

**Valor Entregue**: Rastreabilidade completa.

### 8.6 Estágio 6: Monitoramento Contínuo

Alertas sobre atividades suspeitas e status da conta. O usuário é informado de qualquer anomalia.

**Valor Entregue**: Segurança proativa.

---

## 9. PRODUTO MÍNIMO VIÁVEL (MVP)

O Produto Mínimo Viável (MVP) do SafeCrypto contempla as funcionalidades essenciais para validar a proposta de valor de segurança e transparência. O MVP inclui:

### 9.1 Funcionalidades do MVP

- **Login Seguro (MFA)**: Autenticação de dois fatores para máxima segurança;
- **Visualização de Saldo**: Saldo em tempo real de todos os criptoativos;
- **Histórico Completo**: Todas as transações registradas e auditáveis;
- **Operações Básicas**: Depósito e saque de criptoativos.

### 9.2 Justificativa

Este conjunto é considerado suficiente para validar as seguintes hipóteses:

1. **Usuários priorizam segurança e transparência** acima de altos retornos ou funcionalidades complexas;
2. **A capacidade de auditar transações** e ter controle total sobre os ativos aumentará a confiança e a retenção dos usuários;
3. **A prevenção ativa de fraudes** e alertas em tempo real reduzirão significativamente as perdas dos usuários.

### 9.3 Critérios de Sucesso do MVP

- Taxa de retenção de usuários acima de 70%;
- Frequência de uso média de 3+ vezes por semana;
- Número de incidentes de fraude reduzido em 90%;
- Satisfação do usuário (NPS) acima de 50 relacionada à segurança e transparência.

---

## 10. CANVAS MVP

O Canvas MVP consolida a estratégia inicial do produto, alinhando o problema identificado com a solução proposta e as métricas de sucesso.

| Componente | Descrição |
|-----------|-----------|
| **Persona** | João Investidor (Analista Financeiro, 32 anos) |
| **Problema** | Insegurança e falta de transparência no mercado cripto (ex: colapso FTX) |
| **Solução Proposta** | Plataforma digital auditável, segura e transparente para gestão de criptoativos |
| **Funcionalidades Essenciais** | Login MFA, Gestão de Saldo, Histórico Auditável, Operações Básicas |
| **Hipóteses** | Usuários priorizam segurança; Transparência aumenta retenção; Prevenção de fraudes reduz perdas |
| **Métricas de Sucesso** | Taxa de retenção, Frequência de uso, Redução de fraudes, NPS |
| **Riscos** | Falhas técnicas de segurança, Baixa adoção inicial, Complexidade regulatória |

---

## 11. ENGENHARIA DE REQUISITOS: O CASO FTX

### 11.1 Contexto Histórico

**Equipe**: Grupo 8
**Tema**: FTX — Colapso por ausência de software (2022)

A FTX era a terceira maior exchange de criptomoedas do mundo, com mais de um milhão de usuários. O colapso, ocorrido em novembro de 2022, foi desencadeado por uma corrida de saques que expôs um rombo de 8 bilhões de dólares nas contas da empresa.

### 11.2 Análise de Requisitos

O ponto central dessa falha catastrófica foi a **ausência de software adequado** para:

1. **Gestão de Risco**: Não havia sistemas que monitorassem exposição de risco em tempo real;
2. **Auditoria**: Faltavam mecanismos de auditoria independente e rastreamento de transações;
3. **Segregação de Fundos**: Não havia separação clara entre fundos dos clientes e da empresa;
4. **Transparência**: Os usuários não tinham visibilidade sobre suas operações.

### 11.3 Requisitos Derivados para o SafeCrypto

Com base na análise do colapso da FTX, o SafeCrypto deve garantir:

| Requisito | Descrição | Prioridade |
|-----------|-----------|-----------|
| Segregação de Dados | Separação clara entre fundos dos clientes | Crítica |
| Auditoria em Tempo Real | Registro imutável de todas as operações | Crítica |
| Transparência Absoluta | Visibilidade total do usuário sobre suas operações | Crítica |
| Controle de Acesso | Apenas o proprietário pode acessar seus ativos | Crítica |
| Monitoramento Contínuo | Detecção de anomalias e fraudes | Alta |
| Conformidade Regulatória | Aderência a regulamentações de criptomoedas | Alta |

---

## 12. CONCLUSÃO

A aplicação da Lean Inception para o SafeCrypto resultou em uma base sólida e compartilhada para o desenvolvimento do produto. As oito etapas executadas permitiram:

1. **Alinhamento de Visão**: Todos os stakeholders compreendem claramente o problema, a solução e o valor entregue;
2. **Definição de Escopo**: O escopo está bem delimitado, com definições explícitas do que é e não é o produto;
3. **Compreensão de Usuários**: A persona de João Investidor foi profundamente compreendida, com suas dores, ganhos e necessidades mapeadas;
4. **Priorização de Features**: As funcionalidades foram priorizadas com base em valor, esforço e impacto UX;
5. **Identificação de MVP**: Um MVP viável foi definido para validar hipóteses críticas;
6. **Mitigação de Riscos**: Os riscos foram identificados e estratégias de mitigação foram propostas.

O SafeCrypto está posicionado para resolver os problemas críticos de transparência e segurança no mercado de criptomoedas, aprendendo com os erros do colapso da FTX. A arquitetura de software proposta garantirá que os usuários tenham confiança, rastreabilidade e controle total sobre seus ativos.

As próximas etapas do projeto devem focar na definição detalhada da arquitetura, na seleção de tecnologias apropriadas e no desenvolvimento iterativo do MVP, sempre validando as hipóteses estabelecidas neste trabalho.

---

## 13. REFERÊNCIAS

AMARAL, P. P. C. do. **Lean Inception – SafeCrypto: Arquitetura de Software**. Universidade Católica de Brasília, 2026.

RIES, E. **The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses**. Crown Business, 2011.

CAROLI, P. **Lean Inception: How to Align People and Build the Right Product**. Caroli.org, 2018.

WIKIPEDIA. **Bankruptcy of FTX**. Disponível em: <https://en.wikipedia.org/wiki/Bankruptcy_of_FTX>. Acesso em: 4 abr. 2026.

INVESTOPEDIA. **FTX Crypto Exchange Collapse: Causes, Consequences**. Disponível em: <https://www.investopedia.com/what-went-wrong-with-ftx-6828447>. Acesso em: 4 abr. 2026.

RUTGERS LAW. **The Significance and Consequences of the FTX Crypto Collapse**. Disponível em: <https://law.rutgers.edu/news/significance-and-consequences-ftx-crypto-collapse>. Acesso em: 4 abr. 2026.

IIA BRASIL. **On the Frontlines: As Duras Lições da FTX**. Disponível em: <https://iiabrasil.org.br/noticia/on-the-frontlines-as-duras-licoes-da-ftx>. Acesso em: 4 abr. 2026.

---

## APÊNDICE A: TABELAS E FIGURAS

### A.1 Tabela de Features

Vide Seção 6 para tabela completa de features com valor, esforço e UX.

### A.2 Tabela de Concordância × Incerteza

Vide Seção 7 para análise completa de concordância e incerteza.

### A.3 Canvas MVP

Vide Seção 10 para canvas MVP completo.

---

**Fim do Documento**

---

*Trabalho apresentado como requisito parcial para aprovação na disciplina de Arquitetura de Software da Universidade Católica de Brasília.*

*Brasília, 4 de abril de 2026.*
