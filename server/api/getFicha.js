import fichas from '@/static/fichas.json'

export default defineEventHandler((ev) => {
    const { id, lang } = getQuery(ev)

    if(id) {
        const ficha = fichas.filter((filtro) => {
            return filtro.id == id
        })
    
        return ficha 
    } else if(lang) {
        const ficha = fichas.filter((filtro) => {
            return filtro.lang == lang
        })

        return ficha
    } else {
        fichas.sort((a, b) => b.id - a.id)
        return fichas
    }
})