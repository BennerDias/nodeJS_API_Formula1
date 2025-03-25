import data from "../data"

interface RacesParams{
    city: string
}

export const getRaces = async(request: any, response: any)=>{
    response.type("application/json").code(200)
    return data.races
}

// Buscando dados por corrida

export const getRace = async(request: any, response: any)=>{
    const city = request.params.city;
    const race = data.races.find((r) => r.city === city);

    if(!race){
        response.code(404).send({message: "Race not found"});
        return {message: "Race not found"}
    } else {
        response.code(200).send(race);
        return {race};
    }
}



