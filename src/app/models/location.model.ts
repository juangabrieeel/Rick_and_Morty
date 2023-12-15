export class Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.dimension = data.dimension;
        this.residents = data.residents;
        this.url = data.url;
        this.created = data.created;
    }
}
