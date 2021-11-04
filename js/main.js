function getAddressByBrazillianZipCode() {
    var zipCode = document.getElementById("zip-code").value;

    console.log(zipCode);

    if (zipCode == null || zipCode == '') {
        zipCode = 13086902;
    }

    var url = 'https://viacep.com.br/ws/' + zipCode + '/json/';
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            //console.log(response);
            
            //document.getElementById('cep').innerHTML = response.cep; // Javascript way
            $('#cep').html(response.cep); // jQuery way
            $('#logradouro').html(response.logradouro);
            $('#complemento').html(response.complemento);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
        }
    });
}