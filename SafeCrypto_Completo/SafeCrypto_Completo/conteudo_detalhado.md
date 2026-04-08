# Lean Inception – SafeCrypto

**Universidade Católica de Brasília**
**Pedro Paulo Costa do Amaral**
**Luiz Felipe Ferraz de Carvalho**
**Arquitetura de Software**
**Brasília – DF | 2026**

## 1. Visão do Produto

O produto SafeCrypto tem como objetivo resolver o problema crítico de falta de transparência e segurança observado no colapso da FTX. A plataforma será desenvolvida para investidores de criptomoedas que buscam confiança, rastreabilidade e controle total sobre seus ativos. O principal valor entregue é a segurança aliada à transparência em tempo real, garantindo que todas as transações sejam auditáveis.

## 2. Definições do Produto

O produto é uma plataforma digital segura voltada para gestão de criptoativos, com foco em auditoria e prevenção de fraudes. Não é uma corretora sem controle, nem um sistema opaco. O sistema realiza depósitos, saques, registros de transações, monitoramento e geração de relatórios. Não realiza operações sem validação nem permite inconsistências nos dados.

| Categoria | Descrição |
| :--- | :--- |
| **O que é** | Plataforma digital segura para gestão de criptoativos, focada em auditoria e prevenção de fraudes. |
| **O que não é** | Corretora sem controle, sistema opaco, plataforma de trading de alto risco. |
| **O que faz** | Realiza depósitos, saques, registros imutáveis de transações, monitoramento contínuo e geração de relatórios de auditoria. |
| **O que não faz** | Não realiza operações sem validação, não permite inconsistências nos dados, não oferece consultoria financeira. |

## 3. Persona e Mapa de Empatia

A persona principal é João Investidor, um analista financeiro de 32 anos que busca segurança e clareza em seus investimentos. Suas principais dores envolvem o medo de fraude e a perda financeira em plataformas não confiáveis. Suas necessidades centrais são confiança, transparência e controle absoluto sobre seus ativos.

No mapa de empatia, João vê os riscos inerentes ao mercado de criptomoedas e o histórico de colapsos de grandes exchanges. Ele ouve alertas negativos da mídia e de colegas sobre a volatilidade e a falta de regulamentação. Ele sente insegurança ao alocar seus recursos e, por isso, busca ativamente plataformas que demonstrem ser confiáveis e auditáveis.

## 4. Features

As principais funcionalidades do SafeCrypto foram definidas para atender diretamente às necessidades de segurança e transparência da persona. Cada feature foi priorizada com base no valor entregue ao usuário, no esforço técnico de implementação e no impacto positivo na experiência do usuário.

| Feature | Valor | Esforço | Experiência do Usuário (UX) |
| :--- | :--- | :--- | :--- |
| **Autenticação Segura (MFA)** | Alto | Médio | Essencial para a confiança inicial. |
| **Gestão de Saldo em Tempo Real** | Alto | Baixo | Fundamental para o controle diário. |
| **Histórico Completo e Auditável** | Alto | Médio | Base da transparência da plataforma. |
| **Sistema Antifraude** | Muito Alto | Alto | Diferencial competitivo e mitigador de riscos. |
| **Alertas Inteligentes** | Médio | Médio | Aumenta a sensação de segurança e controle. |

## 5. Concordância x Incerteza

A análise de concordância e incerteza ajuda a priorizar o desenvolvimento das funcionalidades. Funcionalidades básicas, como autenticação e gestão de saldo, possuem alta concordância entre os stakeholders e baixa incerteza técnica, sendo de implementação direta. Por outro lado, o sistema antifraude e a auditoria em tempo real apresentam maior complexidade técnica e incerteza, exigindo priorização estratégica e validação contínua.

| Feature | Concordância | Incerteza | Prioridade |
| :--- | :--- | :--- | :--- |
| **Autenticação Segura (MFA)** | Alta | Baixa | Alta (MVP) |
| **Gestão de Saldo** | Alta | Baixa | Alta (MVP) |
| **Histórico Auditável** | Alta | Média | Alta (MVP) |
| **Sistema Antifraude** | Média | Alta | Média (Pós-MVP) |
| **Alertas Inteligentes** | Alta | Média | Média (Pós-MVP) |

## 6. Jornada do Usuário

A jornada do usuário no SafeCrypto é desenhada para maximizar a confiança em cada etapa. A jornada inicia no cadastro seguro, passa pela autenticação rigorosa, depósito de recursos com confirmação imediata, acompanhamento de saldo em tempo real, execução de transações auditáveis e monitoramento contínuo. Os principais pontos de dor, como a incerteza durante uma transação, são mitigados por transparência absoluta e alertas em tempo real sobre o status das operações.

## 7. MVP (Minimum Viable Product)

O Produto Mínimo Viável (MVP) do SafeCrypto contempla as funcionalidades essenciais para validar a proposta de valor de segurança e transparência. O MVP inclui login seguro (MFA), visualização de saldo em tempo real, histórico completo de transações e operações básicas de depósito e saque. Esse conjunto é considerado suficiente para validar as hipóteses de que os usuários priorizam a confiança e a usabilidade em uma plataforma de criptoativos.

## 8. Canvas MVP

O Canvas MVP consolida a estratégia inicial do produto, alinhando o problema identificado com a solução proposta e as métricas de sucesso.

| Componente | Descrição |
| :--- | :--- |
| **Persona** | João Investidor (Analista Financeiro, 32 anos). |
| **Problema** | Insegurança e falta de transparência no mercado cripto (ex: colapso FTX). |
| **Solução** | Plataforma digital auditável, segura e transparente para gestão de criptoativos. |
| **Hipóteses** | Usuários priorizam segurança e controle; a transparência aumenta a retenção. |
| **Métricas** | Taxa de retenção, frequência de uso, redução de incidentes de fraude. |
| **Riscos** | Falhas técnicas de segurança, baixa adoção inicial, complexidade regulatória. |

## 9. Engenharia de Requisitos: O Caso FTX

**Equipe:** Grupo 8
**Tema:** FTX — Colapso por ausência de software (2022)

A FTX era a terceira maior exchange de criptomoedas do mundo, com mais de um milhão de usuários. O colapso, ocorrido em novembro de 2022, foi desencadeado por uma corrida de saques que expôs um rombo de 8 bilhões de dólares nas contas da empresa. O ponto central dessa falha catastrófica foi a ausência de software adequado para gestão de risco, auditoria e segregação de fundos dos clientes. O sistema do SafeCrypto é projetado especificamente para garantir a segurança total dos ativos dos usuários, além de transparência e confiabilidade nas transações financeiras, evitando as falhas arquiteturais que levaram à queda da FTX.
