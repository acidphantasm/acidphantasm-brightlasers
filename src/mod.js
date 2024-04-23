"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    postAkiLoad(container) {
        // get the logger from the server container
        const logger = container.resolve("WinstonLogger");
        logger.info("Loading: Bundle Loading");
    }
}
module.exports = { mod: new Mod() };