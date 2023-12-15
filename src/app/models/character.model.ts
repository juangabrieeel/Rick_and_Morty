export class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.species = data.species;
        this.gender = data.gender;
        this.image = data.image;
    }
}
