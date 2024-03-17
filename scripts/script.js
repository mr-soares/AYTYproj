document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'flex'; // Mostra a tela de login
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    // Aqui você pode adicionar o que acontece quando o formulário é enviado,
    // por exemplo, validação de login ou redirecionamento.
    window.location.href = 'paginaPrincipal.html'; // Redireciona para o arquivo HTML desejado
});

document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'teladeprojeto.html'; // Substitua pelo seu arquivo de login ou URL desejada
});