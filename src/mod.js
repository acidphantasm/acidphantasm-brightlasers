"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {

    constructor() 
    {
        this.mod = "acidphantasm-brightlasers"; // Set name of mod so we can log it to console later
    }

    postAkiLoad(container) {
        // get the logger from the server container
        const logger = container.resolve("WinstonLogger");
        logger.info(`[${this.mod}] Loading: Laser Bundle`);
    }
}
module.exports = { mod: new Mod() };