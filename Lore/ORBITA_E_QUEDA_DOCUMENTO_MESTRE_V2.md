# Órbita & Queda — Documento Mestre V2

## Direção unificada do projeto

Este documento existe para casar as ideias já produzidas, preservar o que foi construído e corrigir as inconsistências entre narrativa, loop jogável, protótipos web e escopo de produção.

A partir desta versão, o projeto passa a ter uma direção única.

---

# 1. Decisão central

**Órbita & Queda** será um jogo **single-player**, **web-first**, de **terror sci-fi hard**, ambientado no **Sistema Solar**, com foco em **Encélado** como eixo principal da campanha.

A regra de ouro do universo é:

> tudo deve ser cientificamente plausível, exceto a vida alienígena.

Isso significa:
- sem minérios mágicos inventados como base da civilização;
- sem impérios galácticos;
- sem MMO;
- sem fantasia espacial exagerada;
- sem tecnologia inexplicável fora da exceção alienígena.

---

# 2. O que o projeto era antes

O projeto nasceu com uma proposta de jogo espacial dividido em duas camadas:
- superfície / operação terrestre
- órbita / estação / combate espacial

Essa base estrutural era boa, mas o projeto estava misturando duas identidades diferentes:

## Linha antiga
- sandbox espacial
- extração de recursos
- crafting
- combate top-down
- ciclo de superfície → estação → espaço

## Linha nova
- terror sci-fi hard
- Encélado
- contaminação biológica
- operação científica-industrial
- campanha single-player por cenários

O problema não é que uma invalide a outra.
O problema é que, do jeito que estava, elas ainda não estavam casadas.

---

# 3. O que vamos preservar

## 3.1. Da estrutura de gameplay original
Vamos preservar:
- loop dividido em camadas;
- retorno à estação após a missão;
- uso do que foi coletado para melhorar sobrevivência;
- controle claro e legível;
- foco em vertical slice viável;
- desenvolvimento web-first.

## 3.2. Do documento mestre narrativo
Vamos preservar:
- Encélado como cenário principal;
- o primeiro contato biológico como centro da história;
- Khepri-9 como base orbital;
- realismo científico;
- campanha por capítulos/cenários;
- tom sério, isolado, técnico e claustrofóbico.

## 3.3. Dos protótipos HTML
Vamos preservar o melhor de cada um:

### GPT V0
- loop claro e limpo;
- estrutura simples de superfície → estação → espaço;
- UI legível;
- boa base de vertical slice.

### Gemini V1
- progressão mais interessante na estação;
- upgrades visíveis de motor e arma;
- sensação de ciclo de progresso;
- reparo com custo e decisão.

### Gemini V2
- identidade narrativa muito mais forte;
- Khepri-9 e Encélado integrados ao jogo;
- contaminação da estação;
- gelo/água como recurso real;
- logs e protocolos;
- terror operacional mais alinhado com a nova visão.

---

# 4. O que será descartado

Para o projeto casar de verdade, algumas ideias antigas deixam de ser pilares.

## Cortes definitivos
- MMO
- economia entre jogadores
- mercado compartilhado
- guerra por facções ao estilo EVE
- “minério raro” genérico como coração do mundo
- piratas espaciais como conflito principal do universo
- progresso infinito por loops sem peso narrativo
- planeta como mapa de mineração abstrato sem relação com a história

## O que pode existir só como herança adaptada
- combate orbital continua existindo, mas como tensão narrativa e operacional;
- recursos continuam existindo, mas baseados em elementos plausíveis;
- crafting continua existindo, mas como engenharia de sobrevivência, não como economia arcade.

---

# 5. Nova identidade fechada do projeto

## Frase curta
**Órbita & Queda** é um thriller de terror sci-fi hard sobre o primeiro contato biológico da humanidade em Encélado.

## Frase expandida
O jogador assume o papel de um operador técnico ligado à estação Khepri-9, em órbita de Encélado, durante uma crise causada pela descoberta da primeira forma de vida extraterrestre já encontrada. Para sobreviver, ele precisa alternar entre descidas de campo, contenção na estação, manutenção de sistemas e operações externas em ambiente orbital, enquanto a contaminação cresce e o controle humano entra em colapso.

---

# 6. Como casar gameplay e narrativa

Aqui está a decisão que unifica tudo:

## O recurso principal não é um minério fictício.
O recurso principal é:
- **gelo coletado de Encélado**,
- **água processada**,
- **energia**,
- **integridade estrutural**,
- **tempo operacional**,
- e, em momentos mais avançados, **amostras biológicas / dados científicos**.

## Então o loop real do jogo passa a ser:

**descer → coletar gelo/amostras → retornar → processar recursos → manter sistemas / fabricar utilitários / conter contaminação → sair novamente**

Ou seja:
- o esqueleto do protótipo original continua vivo;
- mas agora ele serve a uma história coerente com Encélado e com o horror biológico.

---

# 7. Loop principal definitivo

## Loop macro
1. receber protocolo ou objetivo;
2. sair para operação;
3. enfrentar risco ambiental e biológico;
4. retornar com gelo, água, peças ou dados;
5. usar isso para manter o traje, a estação ou o drone;
6. destravar nova área, novo evento ou nova crise;
7. repetir em tensão crescente.

## Loop micro na superfície
- mover
- observar
- perfurar / coletar
- administrar bateria / traje / tempo
- evitar ou conter ameaça
- voltar ao ponto de extração

## Loop micro na estação
- ler logs
- reparar módulos
- decidir prioridades
- purgar contaminação
- sintetizar suprimentos
- processar amostras
- destravar nova missão

## Loop micro no espaço
- EVA externo ou operação com drone
- reparar casco / sensores / módulos
- limpar contaminação em superfície externa
- atravessar risco orbital / destroços / falhas
- voltar para dentro antes do colapso

---

# 8. Estrutura definitiva por camadas

## Camada 1 — Superfície de Encélado
Função:
- exploração curta;
- coleta de gelo e amostras;
- descoberta;
- primeiro contato;
- medo ambiental.

## Camada 2 — Estação Khepri-9
Função:
- centro narrativo;
- hub principal;
- manutenção;
- análise;
- contenção;
- leitura da deterioração do mundo.

## Camada 3 — Operação externa orbital
Função:
- pressão espacial;
- reparos críticos;
- inspeção de casco;
- contenção da contaminação em partes externas;
- transição entre capítulos.

Essa terceira camada substitui o “combate espacial arcade puro” como eixo principal.
Se houver combate, ele deve nascer da situação: drones, defesa automática, risco orbital, falha sistêmica.

---

# 9. Pilar narrativo principal

O jogo não é sobre enriquecer.
Não é sobre conquistar território.
Não é sobre dominar um sistema.

O jogo é sobre:
- manter uma operação viva tempo suficiente para entender o que foi descoberto;
- sobreviver ao contato com algo biologicamente incompatível com a vida terrestre;
- decidir o que fazer quando a descoberta mais importante da história humana se torna também uma ameaça existencial.

---

# 10. Protagonista

## Perfil
- operador técnico de campo;
- manutenção extraveicular;
- coleta e contenção;
- treinamento para ambientes extremos;
- não é soldado de elite.

## Função dramática
Ele serve como ponte entre:
- trabalho técnico;
- ciência;
- sobrevivência;
- horror.

## Vantagem disso
Essa escolha permite que as mecânicas de gameplay sejam plausíveis:
- perfurar gelo
- carregar cilindros
- reparar módulos
- soldar
- vedar vazamentos
- acionar protocolos
- operar drone
- coletar e transportar amostras

---

# 11. Inimigo principal

## O Fenômeno Nadir
A vida alienígena descoberta em Encélado recebe o nome provisório de **Fenômeno Nadir**.

### O que ela é
- colonial;
- subglacial;
- adaptativa;
- distribuída;
- bioquímica estranha mas plausível;
- ligada a água, salmoura, superfícies úmidas, calor e eletricidade.

### Como ela assusta
Ela não precisa virar “monstro que corre atrás do jogador” o tempo inteiro.
Ela pode:
- contaminar filtros;
- invadir reservatórios;
- deformar sensores;
- bloquear tubulações;
- crescer sobre vedação, juntas e painéis;
- alterar assinaturas térmicas;
- produzir respostas bioelétricas incompreensíveis.

### Estágios da ameaça
1. presença microscópica;
2. contaminação de sistemas;
3. crescimento visível;
4. estruturas coloniais maiores;
5. reescrita parcial da estação como ambiente híbrido.

---

# 12. Recursos reais do universo

A motivação humana para estar em Encélado e no Sistema Solar não depende de ficção econômica genérica.

## Recursos plausíveis e úteis
- gelo de água;
- água processada;
- oxigênio e hidrogênio;
- sais;
- compostos orgânicos;
- voláteis;
- energia;
- infraestrutura orbital;
- redundância civilizacional;
- dados científicos.

## Tradução para gameplay
No jogo, os recursos mais importantes podem ser:
- **gelo bruto**;
- **água purificada**;
- **carga de bateria**;
- **selante estrutural**;
- **filtros limpos**;
- **amostra biológica estável**;
- **dados de varredura**.

Isso fica muito mais forte e único do que “minério raro + escudo”.

---

# 13. O que cada protótipo ensina

## GPT V0 — lição
A estrutura mínima do loop já funciona.

### Deve ser mantido
- clareza de fluxo;
- simplicidade;
- tela de estação objetiva;
- progressão legível.

## Gemini V1 — lição
A estação precisa dar sensação de evolução.

### Deve ser mantido
- upgrades visuais/quantitativos;
- pips de progressão;
- reparo com custo;
- noção de campanha contínua.

## Gemini V2 — lição
A identidade narrativa é muito melhor quando o protótipo já fala a língua do universo final.

### Deve ser mantido
- Encélado;
- Khepri-9;
- gelo em vez de minério genérico;
- contaminação da estação;
- logs;
- protocolos;
- atmosfera terminal/industrial;
- EVA e contenção em vez de “pirata por pirata”.

---

# 14. Proposta de direção final para o protótipo web

A melhor união das ideias é esta:

## O protótipo web deixa de ser
“surface → station → pirate fight”

## E passa a ser
“surface extraction → station contamination management → external orbital repair/containment”

Isso preserva a estrutura de três fases, mas alinha tudo com o novo enredo.

### Fase A — Superfície
- sair em missão;
- perfurar gelo;
- coletar cilindros;
- detectar sinais biológicos anômalos;
- voltar antes do colapso do traje.

### Fase B — Estação
- processar gelo;
- converter recursos em reparo / carga / purga;
- lidar com logs;
- ver contaminação aumentar;
- escolher prioridade.

### Fase C — EVA orbital / casco externo
- usar drone ou traje para reparar o casco;
- remover colônias do lado de fora da estação;
- restaurar sensores ou antenas;
- sobreviver ao vácuo / destroços / falha operacional.

Isso é muito mais coerente que um combate espacial arcade genérico como eixo do projeto.

---

# 15. Estrutura de campanha recomendada

## Prólogo
Treinamento, briefing, operação normal.

## Capítulo 1
Primeira coleta em Encélado.

## Capítulo 2
Retorno e detecção anômala.

## Capítulo 3
Primeira falha de contenção.

## Capítulo 4
Estação parcialmente comprometida.

## Capítulo 5
Nova descida para obter dados ou material crítico.

## Capítulo 6
EVA externo / drone repair / risco orbital.

## Capítulo 7
Crise máxima e colapso.

## Final
Escolha moral, científica e operacional.

---

# 16. Mecânicas definitivas do MVP

## Devem entrar
- movimento top-down firme;
- mira e uso de ferramenta;
- coleta de gelo;
- bateria / integridade do traje;
- hub de estação;
- contaminação crescente;
- reparo / purga / síntese;
- logs curtos;
- operação orbital curta;
- passagem entre cenários.

## Não devem entrar agora
- mundo aberto;
- crafting excessivamente complexo;
- múltiplas facções jogáveis;
- árvore grande de upgrades;
- combate pesado com armas variadas;
- inventário complexo demais;
- sistema econômico sofisticado.

---

# 17. Direção visual unificada

## Base
- hard sci-fi industrial;
- gelo, metal, vidro, condensação, rachadura, luz fria;
- UI de estação com cara de sistema real;
- degradação progressiva do ambiente.

## Evolução
### Início
limpo, técnico, funcional.

### Meio
falhas, ruído, desorganização, alerta biológico.

### Final
estação parcialmente “reescrita” pelo Nadir.

---

# 18. Direção sonora unificada

## Sons principais
- ventilação;
- casco;
- ruído de rádio;
- servo motores;
- estalos térmicos;
- alarmes discretos;
- pulsos orgânicos distantes.

## Regra
Menos trilha constante, mais ambiente e tensão.

---

# 19. O que o projeto ainda tem de cru

Hoje o projeto ainda está cru em 5 pontos:

## 1. Mecânica e narrativa ainda não estavam totalmente casadas
Resolver com o loop: superfície → estação → EVA/órbita.

## 2. O recurso principal ainda estava genérico em algumas versões
Resolver usando gelo, água, energia, filtros e contaminação.

## 3. O conflito espacial ainda estava herdado da fase antiga
Resolver trocando foco de pirata para risco orbital, drone, reparo e contenção.

## 4. A campanha ainda está boa no papel, mas pouco traduzida para o protótipo
Resolver construindo o protótipo já com texto, logs e atmosfera do universo final.

## 5. O projeto ainda não tem uma vertical slice narrativa fechada
Resolver com uma demo curta de 20 a 30 minutos com início, incidente e fechamento.

---

# 20. Vertical slice ideal

## Estrutura
### Ato 1
Descida em Encélado para coletar gelo.

### Ato 2
Retorno à Khepri-9 e surgimento da contaminação.

### Ato 3
Saída externa para conter falha crítica e impedir o colapso da estação.

### Fechamento
O jogador entende que a ameaça não está isolada e que a situação vai escalar.

## Objetivo da slice
Provar:
- tom;
- loop;
- identidade;
- qualidade visual mínima;
- tensão;
- casamento entre gameplay e narrativa.

---

# 21. Roadmap novo

## Fase 1 — Consolidação
- usar este documento como base oficial;
- parar de dividir a visão em versões conflitantes;
- escolher um único protótipo-base.

## Fase 2 — Protótipo-base web
- escolher a melhor fundação de HTML;
- limpar código;
- separar arquivos;
- estabilizar loop.

## Fase 3 — Reescrever o loop para a nova visão
- trocar minério genérico por gelo / água / contaminação;
- trocar combate espacial genérico por EVA orbital / contenção.

## Fase 4 — Vertical slice narrativa
- prólogo curto;
- superfície;
- estação;
- EVA orbital;
- final curto.

## Fase 5 — Campanha modular
- expansão por capítulos.

---

# 22. Decisão final de base técnica

## Documento oficial
Este documento passa a ser a versão que casa tudo.

## Base de protótipo recomendada
Entre as versões HTML já feitas:
- use **Gemini V2** como base de identidade narrativa;
- use **GPT V0** como referência de clareza estrutural;
- use **Gemini V1** como referência para progressão de upgrades;
- descarte tudo que puxar o projeto de volta para MMO/sandbox genérico.

---

# 23. Síntese final

**Órbita & Queda** não é mais um jogo sobre minerar recursos exóticos para vencer batalhas no espaço.

Ele agora é:

> um single-player web-first de terror sci-fi hard sobre sobreviver ao primeiro contato biológico da humanidade em Encélado, alternando entre coleta em superfície, contenção na estação e operações externas orbitais enquanto uma biosfera alienígena começa a reescrever a infraestrutura humana.

Essa é a versão que realmente casa tudo.
