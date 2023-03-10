import fichas from '@/static/fichas.json'

export default defineEventHandler((ev) => {
    const { search } = getQuery(ev)

    const resultado = fichas.filter((ficha) => {
        return ficha.info_tecnica.titulo.toLowerCase().includes(search) || ficha.info_tecnica.titulo_vo.toLowerCase().includes(search)
    })

    return resultado
})