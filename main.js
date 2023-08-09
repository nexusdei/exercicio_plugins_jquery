$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00)00000-0000');

    $('#cadastroForm').submit(function(event) {
        event.preventDefault();

        // Aqui você pode adicionar a lógica para processar o formulário
        // e enviar os dados para o servidor, por exemplo.
        // Você pode acessar os valores dos campos usando $("#campo").val().
        // Não esqueça de validar os dados antes de enviar.
    });
});
