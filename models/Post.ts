import { PostTag } from "./PostTag";

export class Post {
    id: string;
    slug: string;
    title: string;
    description: string;
    body: string;
    cover_image_url: string;
    display_date_unformatted: string;
    override_date_unformatted: string;
    minutes: number;
    post_tags: PostTag[];

    constructor(
        id: string,
        slug: string,
        title: string,
        description: string,
        body: string,
        cover_image_url: string,
        display_date_unformatted: string,
        override_date_unformatted: string,
        minutes: number,
        post_tags: PostTag[]) {
            this.id = id;
            this.slug = slug;
            this.title = title;
            this.description = description;
            this.body = body;
            this.cover_image_url = cover_image_url;
            this.display_date_unformatted = display_date_unformatted;
            this.override_date_unformatted = override_date_unformatted;
            this.minutes = minutes;
            if (!minutes) {
                this.minutes = 0;
            }
            this.post_tags = post_tags
    }

    static fromJSON(json: any): Post {
        return new Post(
            json.id,
            json.attributes.slug,
            json.attributes.title, 
            json.attributes.description, 
            json.attributes.body, 
            json.attributes.cover_image,
            json.attributes.publishedAt,
            json.attributes.override_datetime,
            json.attributes.minutes,
            this.postTagsFromJson(json));
    }

    public formatDateAndMinutes(): string  {
        const useDate: string = this.override_date_unformatted ? this.override_date_unformatted : this.display_date_unformatted
        const dateOptions: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(useDate).toLocaleDateString('en-US', dateOptions);
        return `${date}\u00A0 \u2022 \u00A0${this.minutes} minute read`;
    }

    public formatPostTags(): string {
        return this.post_tags.length > 0 ? this.post_tags[0].name : ""
    }

    private static postTagsFromJson(postJson: any): PostTag[] {
        let postTags: PostTag[] = []
        let postTagsJsonArr = postJson.attributes.post_tags?.data
        if (!postTagsJsonArr) {
            return postTags;
        }
        postTags = postTagsJsonArr.map((postTagJson: any) => {
            return PostTag.fromJSON(postTagJson)
        })
        return postTags;
    }
}
