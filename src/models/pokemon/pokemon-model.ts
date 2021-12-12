export class PokemonModel {
    id: number;
    name: string;
    photo: string;
    types: string[];
    abilities: string[];
    weight: string;

    public constructor() {
        this.id = 0;
        this.name = '';
        this.photo = '';
        this.types = [];
        this.abilities = [];
        this.weight = '';
    }
}
