//Função para formatação e tratamento de erros:
function escrever(btn){
    var a = document.getElementById("txtInput").value;
     
    // Caso para remoção dos traços:
    if (a.length == 18){
        // Pegando somente os números do CPNJ
        resultados = (a[0] + a[1] + a[3] + a[4] + a[5] + a[7] + a[8] + a[9] + a[11] + a[12] + a[13] + a[14] + a[16] + a[17]);
        //Exibindo os números sem traços no body
        document.getElementById('meuTextoVaiAqui').innerHTML = resultados;
        // Jogando o valor para função responsável em cópiar o texto
        document.getElementById('link').value = resultados;
        // Exibindo o status "Cópiado"
        document.getElementById("copiado").innerHTML = '✅ Copiado!';

        //Limpando outros Texts
        document.getElementById('meuTextoVaiAqui-2').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-erro').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-erro-2').innerHTML = "";

    }

    // Colocando os pontos no CNPJ
    else if(a.length == 14){
        // Inserindo os pontos e traços para a variável "resultados"
        resultados = (a[0] + a[1] + '.' + a[2] + a[3] + a[4] + '.' + a[5] + a[6] + a[7] + '/' + a[8] + a[9] + a[10] + a[11] + '-' + a[12] + a[13])
        //Exibindo os números com traços no body 
        document.getElementById('meuTextoVaiAqui-2').innerHTML = resultados;
        // Jogando o valor para função responsável em cópiar o texto
        document.getElementById('link').value = resultados;
        // Exibindo o status "Cópiado"
        document.getElementById("copiado").innerHTML = '✅ Copiado!';

        //Limpando outros Texts
        document.getElementById('meuTextoVaiAqui').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-erro').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-erro-2').innerHTML = "";
    }


    //Tratativa de erros:

    // Se nada estiver digitado:
    else if (a.length == 0){
        document.getElementById('meuTextoVaiAqui-erro').innerHTML = "😧 Você não inseriu o CNPJ.";

        //Limpar outros texts
        document.getElementById('meuTextoVaiAqui-erro-2').innerHTML = "";
        document.getElementById('meuTextoVaiAqui').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-2').innerHTML = "";
        document.getElementById("copiado").innerHTML = '';
    }
    
    // Se o texto digitado estiver errado, faltando caracteres:
    else if (a.length > 0 && a.length < 14){
        document.getElementById('meuTextoVaiAqui-erro-2').innerHTML = " Vish! 😥 O CNPJ está certo?";

        //Limpar outros texts
        document.getElementById('meuTextoVaiAqui-erro').innerHTML = "";
        document.getElementById('meuTextoVaiAqui').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-2').innerHTML = "";
        document.getElementById("copiado").innerHTML = '';
    }
    
}

// função copiar texto:
function copiarTexto(){
    // Coletando o CNPJ
    var textoCopiado = document.getElementById("link");
    // Selecionaod o CNPJ
    textoCopiado.select();
    // Executando a function para cópiar o CNPJ
    document.execCommand("Copy");
}
