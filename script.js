$(document).ready(function () {
    $('#telefone').mask('(00) 0 0000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'insira o seu nome',
            email: 'insira seu e-mail',
            telefone: 'insira seu telefone',
            cpf: 'insira seu CPF',
            endereco: 'insira seu endereço',
            cep: 'insara o CEP'
        }
    })
})