# Playwright E2E Test Automation

Este projeto usa o Playwright para automatizar testes end-to-end de sua aplicação web. Siga os passos abaixo para executar os testes, gerar relatórios e muito mais!

---

### 📦 **Instale as dependências**

Antes de rodar os testes, instale as dependências do projeto:

```
npm install
```
🚀 Execute os testes end-to-end
Para rodar os testes automaticamente, use o seguinte comando:
```
npx playwright test
```
🧑‍💻 Rodar os testes com apenas um worker
Se você preferir rodar os testes com apenas um worker para melhor controle ou depuração, execute:
```
npx playwright test --workers=1
```
🎨 Modo Interativo - UI
Inicie a interface de usuário interativa do Playwright para monitorar e controlar os testes em tempo real:
```
npx playwright test --ui
```
🌐 Executar testes apenas no Chrome Desktop
Para rodar os testes exclusivamente no navegador Chrome (desktop), utilize:
```
npx playwright test --project=chromium
```
📄 Executar testes em um arquivo específico
Para rodar os testes em um arquivo específico, informe o caminho do arquivo:
```
npx playwright test example
```
🕵️‍♂️ Modo de depuração
Execute os testes em modo de depuração, onde você poderá pausar, inspecionar e controlar a execução:
```
npx playwright test --debug
```
🔍 Geração automática de testes com Codegen
Deixe o Playwright gerar testes automaticamente enquanto você interage com sua aplicação. Inicie o Codegen com:
```
npx playwright codegen
```
📊 Visualizar o relatório HTML
Para abrir o último relatório HTML gerado, use o comando:
```
npx playwright show-report
```
💡 Dicas Extras
Paralelismo: Aproveite os múltiplos workers para acelerar a execução dos testes!
Captura de Screenshots/Vídeos: Personalize as configurações de captura para depurar falhas visualmente.
Testes cruzados: Rode testes em diferentes navegadores e dispositivos para garantir compatibilidade.
