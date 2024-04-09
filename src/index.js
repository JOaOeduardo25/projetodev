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
});
document.addEventListener('DOMContentLoaded', function() {
    $('p:contains("Veja:")').html(function (_, html) {
        return html.replace(/(Veja:)/g, '<span class="veja">$1</span>');
    });
});
