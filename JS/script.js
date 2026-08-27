  <script>
    // Rolagem suave ao clicar na seta
    document.querySelector('.capa-seta img').addEventListener('click', () => {
      window.scrollTo({
        top: document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    });

    // Efeito glow pulsante nos botões
    const botoes = document.querySelectorAll('.botao, .botao1');
    botoes.forEach(botao => {
      botao.addEventListener('mouseenter', () => {
        botao.style.boxShadow = '0 0 25px #ff00ff, 0 0 35px #00ffff';
      });
      botao.addEventListener('mouseleave', () => {
        botao.style.boxShadow = '0 0 15px #ff00ff, 0 0 25px #00ffff';
      });
    });

    // Função de pesquisa simulada
    document.querySelector('.menu-pesquisa').addEventListener('submit', e => {
      e.preventDefault();
      const termo = e.target.querySelector('input').value.trim();
      if (termo) {
        alert(`🔍 Buscando por: ${termo}`);
      } else {
        alert('Digite algo para pesquisar.');
      }
    });
  </script>