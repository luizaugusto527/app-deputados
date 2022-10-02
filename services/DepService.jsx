

const getDeputados = async () => {
    const urlDep = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome'
    try {
        const response = await fetch(urlDep)
        const data = await response.json()
        return data.dados
    }
    catch (error) {
        console.log(error);


    }
}

export const getDeputadosById = async (id) => {
    const urlDep = `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`
    try {
        const response = await fetch(urlDep)
        const data = await response.json()
        return data.dados
    }
    catch (error) {
        console.log(error);


    }
}
export const getDespesas = async (id) => {
    const urlDep = `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?ordem=ASC&ordenarPor=mes`
    try {
        const response = await fetch(urlDep)
        const data = await response.json()
        return data.dados
    }
    catch (error) {
        console.log(error);


    }
}


export default getDeputados