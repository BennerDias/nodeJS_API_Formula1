import data from "../data"


interface DriverParams{
    id: string
}   

export const getDrivers = async(request: any, response: any)=>{
    response.type("application/json").code(200)
    return data.drivers
}

// Buscando dados por piloto

export const getDriver = async(request: any, response: any)=>{
    const id = parseInt(request.params.id);
    const driver = data.drivers.find((d) => d.id === id);

    if(!driver){
        response.code(404).send({message: "Driver not found"});
        return {message: "Driver not found"}
    } else {
        response.code(200).send(driver);
        return {driver};
    }
}