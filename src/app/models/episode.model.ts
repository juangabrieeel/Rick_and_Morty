export class Episode {
    id: number;
    name: string;
    airDate: string;
    episodeCode: string;
    characters: string[];
    url: string;
    created: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.airDate = data.air_date;
        this.episodeCode = data.episode;
        this.characters = data.characters;
        this.url = data.url;
        this.created = data.created;
    }
}
