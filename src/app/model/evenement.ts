export class Evenement {
    titre: string;
    description: string;
    urlPhoto: string;

    constructor(
        titre: string,
        description: string,
        urlPhoto: string
    ) {
        this.titre = titre;
        this.description = description;
        this.urlPhoto = urlPhoto;
    }
}