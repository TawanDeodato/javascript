// Criando módulos que podem ser usados por outros arquivos.

const circleArea = r => 3.14 * (r ** 2)
const squareArea = s => s * s

export { circleArea as circle, squareArea as square }