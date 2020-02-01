//Função para formatação e tratamento de erros:

function escrever(btn){
    var a = document.getElementById("txtInput").value;
        
    if (a.length == 18){
        resultados = (a[0] + a[1] + a[3] + a[4] + a[5] + a[7] + a[8] + a[9] + a[11] + a[12] + a[13] + a[14] + a[16] + a[17]);
        document.getElementById('meuTextoVaiAqui').innerHTML = resultados;
        document.getElementById('link').value = resultados;
        document.getElementById("copiado").innerHTML = '✅ Copiado!';
        document.getElementById('meuTextoVaiAqui-erro').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-erro-2').innerHTML = "";
    }
    else if (a.length == 0){
        document.getElementById('meuTextoVaiAqui-erro').innerHTML = "😧 Você inseriu o CNPJ?";
        document.getElementById('meuTextoVaiAqui').innerHTML = '';
        document.getElementById("copiado").innerHTML = '';
    }
    else if (a.length > 0 && a.length < 14){
        document.getElementById('meuTextoVaiAqui-erro-2').innerHTML = " Vish! 😥 O CNPJ está certo?";
        document.getElementById('meuTextoVaiAqui').innerHTML = '';
        document.getElementById("copiado").innerHTML = '';
    }

    else{
        resultados = (a[0] + a[1] + '.' + a[2] + a[3] + a[4] + '.' + a[5] + a[6] + a[7] + '/' + a[8] + a[9] + a[10] + a[11] + '-' + a[12] + a[13])
        document.getElementById('meuTextoVaiAqui').innerHTML = resultados;
        document.getElementById('link').value = resultados;
        document.getElementById("copiado").innerHTML = '✅ Copiado!';
        document.getElementById('meuTextoVaiAqui-erro').innerHTML = "";
        document.getElementById('meuTextoVaiAqui-erro-2').innerHTML = "";
    }
       
}

// função copiar texto:
function copiarTexto() {
    var textoCopiado = document.getElementById("link");
    textoCopiado.select();
    document.execCommand("Copy");
}
