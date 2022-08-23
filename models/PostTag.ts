export class PostTag {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromJSON(json: any): PostTag {
        return new PostTag(json.id, json.attributes.name);
    }
}
