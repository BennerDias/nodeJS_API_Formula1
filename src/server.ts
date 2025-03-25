import fastify from "fastify";
import cors from '@fastify/cors';
import { getEscuderias, getEscuderia } from "./services/escuderias";
import { getDrivers, getDriver } from "./services/drivers";
import { getRace } from "./services/races";
import { getRaces } from "./services/races";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*"
})

server.get("/", async (request, response)=>{
    response.send({message: "API de Fórmula 1"});
})

server.get("/escuderias", getEscuderias);
server.get("/escuderias/:id", getEscuderia);
server.get("/drivers", getDrivers);
server.get("/drivers/:id", getDriver);
server.get("/races", getRaces);
server.get("/races/:city", getRace);


server.listen({port: 3333}, ()=> {
    console.log("Server UP!");
})