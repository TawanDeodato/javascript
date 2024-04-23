const item = 1

switch(item) {
    case 1:
        console.log('Item 1 - Setor de Brinquedos')
        break // Uso do 'break obrigatório para o funiconamento padrão do switch
    case 2:
        console.log('Item 2 - Setor de Maquiagem')
        break
    case 3:
        console.log('Item 3 - Setor de Calçados')
        break
    default:
        console.log('Produto não cadastrado!')
}
// No caso do 'default', não é necessário o uso do 'break', por caus que o 'default' é a última linha do switch
// So seria obrigatório usar o 'break' no 'default, caso o próprio 'default' esteja acima dps casos.