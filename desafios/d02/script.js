function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade > 10) {
                // criança
                img.setAttribute('src', 'imagens/h-crianca.png')
            } else if (idade < 16) {
                // adolescente
                img.setAttribute('src', 'imagens/h-adolescente.png')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/hjovem.png')
            } else if (idade < 45) {
                // Adulto
                img.setAttribute('src', 'imagens/h-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'h-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade > 10) {
                // criança
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (idade < 16) {
                // adolescente
                img.setAttribute('src', 'imagens/m-adolescente.png')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/m-jovem.png')
            } else if (idade < 45) {
                // Adulto
                img.setAttribute('src', 'imagens/m-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'm-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }    
}