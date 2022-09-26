

const getDeputados = async () => {
    const urlCoin = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome'
    try {
        const response = await fetch(urlCoin)
        const data = await response.json()
        return data.dados
    }
    catch (error) {
        console.log(error);


    }
}

export const getDeputadosById = async (id) => {
    const urlCoin = `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`
    try {
        const response = await fetch(urlCoin)
        const data = await response.json()
        console.log(data.dados);
        return data.dados
    }
    catch (error) {
        console.log(error);


    }
}

export default getDeputados