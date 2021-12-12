import { PokemonModel } from "./pokemon-model";

export class PokemonDetailModel {
    pokemon: PokemonModel;
    description: string;
    evolutions: PokemonModel[];


    public constructor() {
        this.pokemon = null;
        this.description = '';
        this.evolutions = [];
     
    }
}