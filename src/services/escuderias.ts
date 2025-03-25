import data from "../data"

interface EscuderiaParams{
    id: string
}

export const getEscuderias = async(request: any, response: any)=>{
    response.type("application/json").code(200)
    return data.escuderias
}

// Buscando dados por Escuderia

export const getEscuderia = async(request: any, response: any)=>{
    const id = parseInt(request.params.id);
    const escuderia = data.escuderias.find((e) => e.id === id);

    if(!escuderia){
        response.code(404).send({message: "Escuderia not found"});
        return {message: "Escuderia not found"}
    } else {
        response.code(200).send(escuderia);
        return { escuderia };
    }
}