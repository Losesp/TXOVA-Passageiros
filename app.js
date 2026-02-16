// app.js - Shared helpers, localStorage seed and utilities for TXOVA MVP
(function(){
  function seed(){
    if(localStorage.getItem('mvp_initialized')) return;

    const usuarios = [
      { id: 1, nome: 'João Passageiro', contacto: '848000001', senha: '1234', email: 'joao@exemplo.com', categoria: 'passageiro', status: 'ativo' },
      { id: 2, nome: 'Ana Motorista', contacto: '848000002', senha: '1234', email: 'ana@exemplo.com', categoria: 'motorista', status: 'disponivel' }
    ];

    const corridas = [
      { id: 1, userId: 1, motoristaId: 2, inicio: '2026-02-15T10:34:00', fim: '2026-02-15T11:20:00', valor: 70.00, tipo: 'Moto-táxi', status: 'concluida' },
      { id: 2, userId: 1, motoristaId: 2, inicio: '2026-02-14T21:16:00', fim: '2026-02-14T23:21:00', valor: 480.00, tipo: 'Táxi-carro', status: 'concluida' }
    ];

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('corridas', JSON.stringify(corridas));
    localStorage.setItem('mvp_initialized', '1');
  }

  function getUsuarios(){
    return JSON.parse(localStorage.getItem('usuarios')||'[]');
  }

  function saveUsuarios(list){
    localStorage.setItem('usuarios', JSON.stringify(list));
  }

  
  function getUsuarioLogado(){
    return JSON.parse(localStorage.getItem('usuarioLogado')||'null');
  }

  function setUsuarioLogado(u){
    localStorage.setItem('usuarioLogado', JSON.stringify(u));
  }

  function logout(){
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'cadastro.html';
  }

  function getCorridas(){
    return JSON.parse(localStorage.getItem('corridas')||'[]');
  }

  function addCorrida(c){
    const list = getCorridas();
    c.id = list.length ? Math.max(...list.map(x=>x.id))+1 : 1;
    list.push(c);
    localStorage.setItem('corridas', JSON.stringify(list));
    return c;
  }

  function formatCurrency(v){
    return (Number(v)||0).toLocaleString('pt-PT', { style: 'currency', currency: 'MZN' });
  }

  // Expose helpers
  window.TXOVA = {
    seed: seed,
    getUsuarios: getUsuarios,
    saveUsuarios: saveUsuarios,
    getUsuarioLogado: getUsuarioLogado,
    setUsuarioLogado: setUsuarioLogado,
    logout: logout,
    getCorridas: getCorridas,
    addCorrida: addCorrida,
    formatCurrency: formatCurrency
  };

  // perform seed automatically
  seed();

})();
