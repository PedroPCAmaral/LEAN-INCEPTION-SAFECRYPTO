import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Target, Users, Lightbulb, BarChart3, Map, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">SafeCrypto</h1>
                <p className="text-xs text-blue-300">Lean Inception Board</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Universidade Católica de Brasília</p>
              <p className="text-xs text-gray-500">Arquitetura de Software | 2026</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Transparência e Segurança em Criptoativos</h2>
              <p className="text-lg text-gray-300 mb-6">
                SafeCrypto é uma plataforma digital segura que resolve a crítica falta de transparência e segurança no mercado de criptomoedas, exemplificada pelo colapso da FTX.
              </p>
              <div className="flex gap-4">
                <Badge className="bg-blue-500 text-white">Segurança</Badge>
                <Badge className="bg-cyan-500 text-white">Transparência</Badge>
                <Badge className="bg-purple-500 text-white">Auditoria</Badge>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl border border-blue-500/30">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663139943114/EZGiv7xvFHJypLjbHG26sb/safecrypto-hero-fwoWappfyqNBgVqrE4GDUr.webp" 
                alt="SafeCrypto Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Tabs for Lean Inception Stages */}
        <Tabs defaultValue="vision" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 gap-2 bg-slate-800/50 p-2 rounded-lg mb-8">
            <TabsTrigger value="vision" className="text-xs">Visão</TabsTrigger>
            <TabsTrigger value="definitions" className="text-xs">Definições</TabsTrigger>
            <TabsTrigger value="personas" className="text-xs">Personas</TabsTrigger>
            <TabsTrigger value="features" className="text-xs">Features</TabsTrigger>
            <TabsTrigger value="concordance" className="text-xs">Concordância</TabsTrigger>
            <TabsTrigger value="journey" className="text-xs">Jornada</TabsTrigger>
            <TabsTrigger value="mvp" className="text-xs">MVP</TabsTrigger>
            <TabsTrigger value="canvas" className="text-xs">Canvas</TabsTrigger>
          </TabsList>

          {/* 1. Visão do Produto */}
          <TabsContent value="vision" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="w-5 h-5 text-blue-400" />
                  1. Visão do Produto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-blue-300 mb-2">Problema Central</h3>
                  <p className="text-gray-300">Falta crítica de transparência e segurança no mercado de criptomoedas, exemplificada pelo colapso da FTX (2022).</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-300 mb-2">Para Quem</h3>
                  <p className="text-gray-300">Investidores de criptomoedas que buscam confiança, rastreabilidade e controle total sobre seus ativos.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-purple-300 mb-2">Valor Principal</h3>
                  <p className="text-gray-300">Segurança aliada à transparência em tempo real, garantindo que todas as transações sejam auditáveis e rastreáveis.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2. Definições do Produto */}
          <TabsContent value="definitions" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">2. Definições do Produto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                    <h3 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      O que É
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Plataforma digital segura para gestão de criptoativos</li>
                      <li>• Sistema focado em auditoria e prevenção de fraudes</li>
                      <li>• Ferramenta com transparência e rastreabilidade</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                    <h3 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      O que Não É
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Corretora sem controle ou sistema opaco</li>
                      <li>• Plataforma de trading de alto risco</li>
                      <li>• Banco tradicional com garantia de depósitos</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-semibold text-blue-300 mb-2">O que Faz</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Realiza depósitos e saques de criptoativos</li>
                      <li>• Registra transações de forma imutável</li>
                      <li>• Oferece monitoramento contínuo</li>
                      <li>• Gera relatórios de auditoria</li>
                    </ul>
                  </div>
                  <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
                    <h3 className="font-semibold text-orange-300 mb-2">O que Não Faz</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Operações sem validação</li>
                      <li>• Permite inconsistências nos dados</li>
                      <li>• Oferece consultoria financeira</li>
                      <li>• Trading complexo ou alavancagem</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 3. Personas e Mapa de Empatia */}
          <TabsContent value="personas" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Users className="w-5 h-5 text-blue-400" />
                  3. Personas e Mapa de Empatia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-900/50 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-300 mb-4">João Investidor</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-2"><strong>Perfil:</strong></p>
                      <p className="text-gray-300">Analista financeiro, 32 anos, busca segurança e clareza em seus investimentos.</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2"><strong>Contexto:</strong></p>
                      <p className="text-gray-300">Viu o colapso da FTX, ouve alertas negativos sobre volatilidade e falta de regulação.</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                    <h3 className="font-semibold text-red-300 mb-3">Dores</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>🔴 Medo de fraude e perda financeira</li>
                      <li>🔴 Insegurança em plataformas opacas</li>
                      <li>🔴 Falta de controle sobre seus ativos</li>
                      <li>🔴 Impossibilidade de auditar transações</li>
                    </ul>
                  </div>
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                    <h3 className="font-semibold text-green-300 mb-3">Ganhos</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>✅ Confiança absoluta na plataforma</li>
                      <li>✅ Transparência em tempo real</li>
                      <li>✅ Controle total sobre seus ativos</li>
                      <li>✅ Histórico auditável completo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-300 mb-3">Necessidades</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-slate-800 p-3 rounded">
                      <p className="text-sm font-semibold text-cyan-300">Confiança</p>
                      <p className="text-xs text-gray-400">Plataforma segura e confiável</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded">
                      <p className="text-sm font-semibold text-cyan-300">Transparência</p>
                      <p className="text-xs text-gray-400">Visibilidade total das operações</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded">
                      <p className="text-sm font-semibold text-cyan-300">Controle</p>
                      <p className="text-xs text-gray-400">Poder sobre seus ativos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4. Features */}
          <TabsContent value="features" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  4. Features Principais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-500/30">
                        <th className="text-left py-3 px-4 text-blue-300 font-semibold">Feature</th>
                        <th className="text-center py-3 px-4 text-green-300 font-semibold">Valor</th>
                        <th className="text-center py-3 px-4 text-orange-300 font-semibold">Esforço</th>
                        <th className="text-left py-3 px-4 text-cyan-300 font-semibold">UX</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Autenticação Segura (MFA)", valor: "Alto", esforço: "Médio", ux: "Essencial para confiança" },
                        { name: "Gestão de Saldo em Tempo Real", valor: "Alto", esforço: "Baixo", ux: "Fundamental para controle" },
                        { name: "Histórico Completo e Auditável", valor: "Alto", esforço: "Médio", ux: "Base da transparência" },
                        { name: "Sistema Antifraude", valor: "Muito Alto", esforço: "Alto", ux: "Diferencial competitivo" },
                        { name: "Alertas Inteligentes", valor: "Médio", esforço: "Médio", ux: "Aumenta segurança" }
                      ].map((feature, idx) => (
                        <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                          <td className="py-3 px-4 text-gray-300">{feature.name}</td>
                          <td className="py-3 px-4 text-center">
                            <Badge className="bg-green-600">{feature.valor}</Badge>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Badge className="bg-orange-600">{feature.esforço}</Badge>
                          </td>
                          <td className="py-3 px-4 text-gray-400 text-xs">{feature.ux}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 5. Concordância x Incerteza */}
          <TabsContent value="concordance" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">5. Concordância × Incerteza</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg border border-blue-500/30">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663139943114/EZGiv7xvFHJypLjbHG26sb/lean-inception-workflow-8EZTEf9ASkXvcyR8riyj5m.webp" 
                    alt="Lean Inception Workflow" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                    <h3 className="font-semibold text-green-300 mb-3">Alta Concordância + Baixa Incerteza</h3>
                    <p className="text-sm text-gray-300 mb-2">Funcionalidades básicas e prioritárias para o MVP:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>✓ Autenticação Segura</li>
                      <li>✓ Gestão de Saldo</li>
                      <li>✓ Histórico Auditável</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
                    <h3 className="font-semibold text-yellow-300 mb-3">Média Concordância + Alta Incerteza</h3>
                    <p className="text-sm text-gray-300 mb-2">Funcionalidades complexas para pós-MVP:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>⚡ Sistema Antifraude</li>
                      <li>⚡ Alertas Inteligentes</li>
                      <li>⚡ Auditoria em Tempo Real</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 6. Jornada do Usuário */}
          <TabsContent value="journey" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Map className="w-5 h-5 text-blue-400" />
                  6. Jornada do Usuário
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Cadastro Seguro", desc: "Usuário cria conta com dados verificados" },
                    { step: 2, title: "Autenticação Rigorosa", desc: "Login com MFA para máxima segurança" },
                    { step: 3, title: "Depósito de Recursos", desc: "Transferência com confirmação imediata" },
                    { step: 4, title: "Acompanhamento de Saldo", desc: "Visualização em tempo real dos ativos" },
                    { step: 5, title: "Execução de Transações", desc: "Operações auditáveis e rastreáveis" },
                    { step: 6, title: "Monitoramento Contínuo", desc: "Alertas sobre atividades suspeitas" }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-blue-300">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 7. MVP */}
          <TabsContent value="mvp" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">7. Produto Mínimo Viável (MVP)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-blue-300 mb-3">Funcionalidades do MVP</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-800 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-300">✓ Login Seguro (MFA)</p>
                      <p className="text-xs text-gray-400">Autenticação de dois fatores</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-300">✓ Visualização de Saldo</p>
                      <p className="text-xs text-gray-400">Saldo em tempo real</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-300">✓ Histórico Completo</p>
                      <p className="text-xs text-gray-400">Todas as transações registradas</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-300">✓ Operações Básicas</p>
                      <p className="text-xs text-gray-400">Depósito e saque</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-semibold text-green-300 mb-2">Por que este MVP?</h3>
                  <p className="text-sm text-gray-300">Este conjunto é suficiente para validar as hipóteses de que os usuários priorizam a confiança e a usabilidade em uma plataforma de criptoativos segura.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 8. Canvas MVP */}
          <TabsContent value="canvas" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">8. Canvas MVP</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold text-blue-300 mb-2">Persona</h3>
                    <p className="text-sm text-gray-300">João Investidor (Analista Financeiro, 32 anos)</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-red-500/20">
                    <h3 className="font-semibold text-red-300 mb-2">Problema</h3>
                    <p className="text-sm text-gray-300">Insegurança e falta de transparência no mercado cripto</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-green-500/20">
                    <h3 className="font-semibold text-green-300 mb-2">Solução</h3>
                    <p className="text-sm text-gray-300">Plataforma auditável, segura e transparente para gestão de criptoativos</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/20">
                    <h3 className="font-semibold text-purple-300 mb-2">Hipóteses</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Usuários priorizam segurança</li>
                      <li>• Transparência aumenta retenção</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <h3 className="font-semibold text-cyan-300 mb-2">Métricas</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Taxa de retenção</li>
                      <li>• Redução de fraudes</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-orange-500/20">
                    <h3 className="font-semibold text-orange-300 mb-2">Riscos</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Falhas de segurança</li>
                      <li>• Baixa adoção inicial</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FTX Context Section */}
        <div className="mt-16 mb-12">
          <Card className="bg-slate-800/50 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white">Contexto: O Colapso da FTX (2022)</CardTitle>
              <CardDescription className="text-gray-400">Por que o SafeCrypto é necessário</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-300 mb-3">O Problema</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    A FTX era a terceira maior exchange de criptomoedas do mundo, com mais de um milhão de usuários. O colapso em novembro de 2022 foi desencadeado por uma corrida de saques que expôs um rombo de 8 bilhões de dólares nas contas da empresa.
                  </p>
                  <p className="text-sm text-gray-300">
                    O ponto central dessa falha catastrófica foi a <strong>ausência de software adequado</strong> para gestão de risco, auditoria e segregação de fundos dos clientes.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg border border-red-500/30">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663139943114/EZGiv7xvFHJypLjbHG26sb/ftx-collapse-context-2prGkyUywNCf2YXWhnW43B.webp" 
                    alt="FTX Collapse Context" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-green-500/20">
                <h3 className="font-semibold text-green-300 mb-2">A Solução: SafeCrypto</h3>
                <p className="text-sm text-gray-300">
                  O SafeCrypto é projetado especificamente para garantir a segurança total dos ativos dos usuários, além de transparência e confiabilidade nas transações financeiras, evitando as falhas arquiteturais que levaram à queda da FTX.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security & Transparency Section */}
        <div className="mb-12">
          <Card className="bg-slate-800/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-white">Pilares de Segurança e Transparência</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden shadow-lg border border-cyan-500/30">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663139943114/EZGiv7xvFHJypLjbHG26sb/security-transparency-K76Weuj8UV7KQrXMjgbGVC.webp" 
                  alt="Security & Transparency" 
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-900/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>SafeCrypto Lean Inception Board | Universidade Católica de Brasília</p>
          <p className="mt-2 text-xs text-gray-500">Arquitetura de Software | Grupo 8 | 2026</p>
        </div>
      </footer>
    </div>
  );
}
