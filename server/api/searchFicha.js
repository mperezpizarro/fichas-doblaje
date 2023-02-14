import fichas from '@/static/fichas.json'

export default defineEventHandler((ev) => {
    const { search } = getQuery(ev)

    const resultado = fichas.filter((ficha) => {
        return ficha.info_tecnica.titulo.toLowerCase().includes(search)
    })

    if(resultado.length > 0) {
        return  resultado
    } else {
        return { "resultado": "No se han encontrado resultados." }
    }
})