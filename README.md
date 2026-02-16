TXOVA — MVP (localStorage)

O projecto foi preparado como um MVP para apresentação.

O que foi feito:
- Adicionado `app.js` com seed de exemplo e helpers (usuários, corridas) usando `localStorage`.
- Corrigidos caminhos de CSS em várias páginas e incluído `app.js` em páginas principais.
- Mantido armazenamento somente em `localStorage` (sem backend).

Como usar:
1. Abra `index.html` num browser (arraste para o navegador ou use um servidor local).
2. Use as credenciais de exemplo:
   - Passageiro: contacto `848000001`, senha `1234`
   - Motorista: contacto `848000002`, senha `1234`
3. Para limpar dados e reiniciar o seed, remova as chaves `usuarios`, `corridas` e `mvp_initialized` do `localStorage` no DevTools.

Próximos passos sugeridos (posso implementar):
- Transformar os formulários para usar `TXOVA` helpers (mais validação).
- Implementar exibição dinâmica do histórico e criação de corridas.
- Melhorar UI com layout responsivo e componentes reutilizáveis.

---
Feito rapidamente para apresentação. Quer que eu implemente listagem de corridas e geração de nova corrida na interface agora?