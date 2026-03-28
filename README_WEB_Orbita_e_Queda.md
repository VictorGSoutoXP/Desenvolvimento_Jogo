# README_WEB.md — Órbita & Queda

## Visão geral

**Órbita & Queda** é um projeto **web-first** de sci-fi hard com terror, ambientado no Sistema Solar e estruturado como uma campanha single-player por cenários.

A proposta do protótipo web é validar:
- o tom do universo
- a estrutura narrativa por capítulos
- o loop de gameplay
- a direção de arte
- a sensação de progressão entre cenários

A decisão de começar na web existe para acelerar iteração, teste de mecânicas e prototipação narrativa.

---

## Regra central do universo

O mundo do jogo usa apenas fundamentos reais para justificar a presença humana fora da Terra.

Não existem minérios fictícios como base econômica do universo.
A expansão humana é sustentada por elementos e vantagens já plausíveis dentro do contexto do Sistema Solar, como:
- gelo de água
- regolito
- metais
- silicatos
- sais
- compostos orgânicos
- hidrocarbonetos
- gases e voláteis úteis para química e propulsão
- infraestrutura orbital e industrial fora do poço gravitacional da Terra

A única grande licença ficcional do projeto é:

**a descoberta de vida alienígena.**

Essa descoberta é a espinha narrativa do jogo.

---

## Premissa resumida

A humanidade expandiu sua presença pelo Sistema Solar por necessidade estratégica: água, combustível, blindagem, matéria-prima, redundância civilizacional e espaço industrial.

Ao longo dessa expansão, estações, colônias e postos avançados foram construídos em ambientes extremos como Marte, o Cinturão de Asteroides, Titã, Europa e Encélado.

Durante operações científicas e industriais em Encélado, uma equipe humana encontra a primeira forma de vida extraterrestre já registrada.

Essa vida não chega como civilização.
Ela chega como ecossistema.

O que parecia ser uma operação de rotina se transforma em uma crise de contenção, isolamento e sobrevivência.

---

## Objetivo do protótipo web

O protótipo web não precisa conter a campanha inteira desde o início.

Ele deve provar, em ordem:

### Fase 1
- identidade visual
- loop jogável básico
- transição entre superfície, estação e espaço

### Fase 2
- progressão narrativa curta
- primeiros logs, briefings e eventos de horror
- persistência local

### Fase 3
- estrutura por capítulos
- tela de missão
- diálogos e arquivos de bordo
- ambientação mais rica por cenário

### Fase 4
- demo pública vertical slice
- Encélado como primeira grande virada narrativa

---

## Estrutura do jogo na web

## 1. Boot / menu inicial
Função:
- apresentar tom
- iniciar campanha
- carregar save
- acessar codex/logs no futuro

## 2. Cena de operação
Função:
- gameplay principal
- exploração curta
- combate
- coleta
- sobrevivência

## 3. Cena de estação / base
Função:
- briefing
- crafting
- reparo
- leitura de logs
- decisões narrativas

## 4. Cena orbital / trânsito
Função:
- deslocamento
- encontro hostil
- transição de capítulo
- sensação de escala do Sistema Solar

## 5. Interface narrativa
Função:
- logs
- relatórios
- mensagens da tripulação
- decisões de missão

---

## Estrutura de pastas sugerida

```text
orbita-e-queda/
  index.html
  /src
    main.js
    /core
      game.js
      loop.js
      input.js
      save.js
      scene-manager.js
    /state
      persistent-state.js
      campaign-state.js
      run-state.js
    /scenes
      boot-scene.js
      surface-scene.js
      station-scene.js
      orbital-scene.js
      briefing-scene.js
    /entities
      player.js
      drone.js
      ship.js
      alien.js
      projectile.js
      interactables.js
    /systems
      combat-system.js
      mission-system.js
      dialogue-system.js
      contamination-system.js
      objective-system.js
    /ui
      hud.js
      station-ui.js
      menu-ui.js
      codex-ui.js
    /content
      chapters.js
      quests.js
      logs.js
      factions.js
    /assets
      /images
      /audio
      /fonts
      /fx
  /docs
    README.md
    LORE.md
    CHAPTERS.md
    GAMEPLAY.md
    ART_DIRECTION.md
    QUESTS.md
    README_WEB.md
```

---

## Stack recomendada

### Base inicial
- HTML
- CSS
- JavaScript
- Canvas 2D

### Evolução possível
Depois do protótipo validado, o projeto pode migrar para:
- TypeScript
- Vite
- PixiJS
- Phaser

Mas o começo pode ser simples.
O importante é provar ritmo, tom, loop e identidade.

---

## Princípios técnicos

1. separar render de estado
2. separar lógica de cena de UI
3. manter conteúdo narrativo em arquivos organizados
4. usar estado persistente para campanha e estado transitório para missão atual
5. preparar desde cedo save local via JSON
6. não misturar código de protótipo com conteúdo final sem refatoração

---

## Estrutura de estado recomendada

## PersistentState
Guarda:
- progresso da campanha
- capítulos liberados
- recursos e inventário
- estado da nave e do equipamento
- arquivos encontrados
- decisões permanentes

## RunState
Guarda:
- vida atual
- munição atual
- objetivo da missão
- coleta da run
- dano recebido
- eventos temporários da cena

## MissionResult
Guarda:
- sucesso ou falha
- recursos coletados
- logs obtidos
- dano sofrido
- impacto da missão

Essa arquitetura permite que morte, falha e retorno não quebrem o progresso da campanha.

---

## Estrutura narrativa web-first

A campanha pode ser liberada em blocos.

### Bloco 1 — Base jogável
- prólogo simples
- uma operação de superfície
- uma estação
- um encontro orbital

### Bloco 2 — Primeiros elementos de terror
- logs anômalos
- drone contaminado
- falhas sistêmicas
- sinais biológicos inexplicáveis

### Bloco 3 — Encélado como marco central
- primeira amostra
- primeira quebra de contenção
- primeira confirmação do alien

### Bloco 4 — Campanha completa
- capítulos encadeados
- decisões
- múltiplos cenários do Sistema Solar
- final narrativo

---

## Regras de consistência do projeto

1. o Sistema Solar deve parecer real e habitável apenas com esforço
2. a expansão humana precisa ser justificada por logística, indústria e sobrevivência
3. o alien é a única grande ruptura do realismo
4. o terror nasce da ciência, da contenção e da contaminação
5. a campanha deve mudar de cenário até o desfecho final
6. a versão web deve priorizar clareza, atmosfera e ritmo

---

## Objetivo final do projeto web

Criar uma experiência single-player forte o suficiente para que o jogador sinta que está atravessando uma campanha de sci-fi hard e terror dentro de um universo plausível, mesmo antes de existir uma produção de grande escala.

O protótipo web não é um “rascunho descartável”.
Ele é a primeira forma pública do jogo.

---

## Próximos arquivos recomendados

Depois deste documento, os mais úteis são:
- `SAVE_SYSTEM.md`
- `NARRATIVE_UI.md`
- `CONTENT_PIPELINE.md`
- `CHAPTER_FLOW_WEB.md`
- `ENEMIES.md`

---

## Frase guia do projeto web

> Órbita & Queda começa na web não porque é pequeno,
> mas porque precisa provar primeiro que sua atmosfera, seu loop e seu terror funcionam antes de crescer.
