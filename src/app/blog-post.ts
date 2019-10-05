import {BlogComment} from './blog-comment';
import {Deserializable} from './deserializable';

export class BlogPost implements Deserializable {
  id: number;
  title: string;
  text: string;
  comments: BlogComment[];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  get slug(): string {
    return this.id + '-' + this.title.toLowerCase().split(' ').join('-');
  }
}
