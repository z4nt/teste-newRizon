function areia (qt, tipo) {
    minerio = 34
    if(tipo === 'media'){
        minerio = minerio + (minerio * 0.15)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }else if(tipo === 'grossa'){
        minerio = minerio + (minerio * 0.25)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return(result)
        }
        return result
    }else{
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }
}

function pedrita (qt, tipo) {
    minerio = 42.50
    if(tipo === 'media'){
        minerio = minerio + (minerio * 0.15)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }else if(tipo === 'grossa'){
        minerio = minerio + (minerio * 0.25)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return(result)
        }
        return result
    }else{
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }
}

function brita (qt, tipo) {
    minerio = 28.00
    if(tipo === 'media'){
        minerio = minerio + (minerio * 0.15)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }else if(tipo === 'grossa'){
        minerio = minerio + (minerio * 0.25)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return(result)
        }
        return result
    }else{
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }
}

function saibro (qt, tipo) {
    minerio = 27.00
    if(tipo === 'media'){
        minerio = minerio + (minerio * 0.15)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }else if(tipo === 'grossa'){
        minerio = minerio + (minerio * 0.25)
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return(result)
        }
        return result
    }else{
        result = minerio * qt
        if (result < 750){
            result + 45.00
            return result
        }
        return result
    }
}

const qtAreia = parseInt(prompt('digite a quantidade de areia que você quer: '))
const tipoAreia = ''
if(qtAreia > 0) {
    const tipoAreia = parseInt(prompt('digite o tipo de areia que você quer: '))
}
const qtPedrita = parseInt(prompt('digite a quantidade de Pedrita que você quer: '))
const tipoPedrita = ''
if(qtPedrita > 0) {
    const tipoPedrita = parseInt(prompt('digite o tipo de Pedrita que você quer: '))
}
const qtBrita = parseInt(prompt('digite a quantidade de Brita que você quer: '))
const tipoBrita = ''
if(qtBrita > 0) {
    const tipoBrita = parseInt(prompt('digite o tipo de Brita que você quer: '))
}
const qtSaibro = parseInt(prompt('digite a quantidade de Saibro que você quer: '))
const tipoSaibro = ''
if(qtSaibro > 0) {
    const tipoSaibro = parseInt(prompt('digite o tipo de Saibro que você quer: '))
}
console.log('Sua areia custa: ',areia(qtAreia,tipoAreia))
console.log('Sua pedrita custa: ',pedrita(qtPedrita,tipoPedrita))
console.log('Sua brita custa: ',brita(qtBrita,tipoBrita))
console.log('Seu saibro custa: ',saibro(qtSaibro,tipoSaibro))
const venda = areia(qtAreia,tipoAreia) + pedrita(qtPedrita,tipoPedrita) + brita(qtBrita,tipoBrita) + saibro(qtSaibro,tipoSaibro)
console.log('Sua compra custa: ', venda)
    
