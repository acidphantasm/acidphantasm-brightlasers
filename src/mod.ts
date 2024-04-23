
import { DependencyContainer } from "tsyringe";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

class BrightLasers implements IPostAkiLoadMod
{
    private mod: string

    constructor() 
    {
        this.mod = "acidphantasm-brightlasers"; // Set name of mod so we can log it to console later
    }

    public postAkiLoad(container: DependencyContainer): void 
    {
		// get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");
		
        logger.log(`[${this.mod}] Bundle loaded.`, "green");
	}
}

module.exports = { mod: new BrightLasers() }