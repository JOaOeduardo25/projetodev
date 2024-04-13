document.addEventListener('DOMContentLoaded', function() {
    const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

    botaoMostrarProjetos.addEventListener('click', () => {
        mostrarMaisProjetos();
        esconderBotao();
    });

    function esconderBotao() {
        botaoMostrarProjetos.classList.add('remover');
    }

    function mostrarMaisProjetos() {
        projetosInativos.forEach(projetoInativo => {
            projetoInativo.classList.add('ativo');
        });
    }

    // Adiciona a classe 'veja' aos parágrafos que contêm 'Veja:'
    $('p:contains("Veja:")').addClass('veja');
});
