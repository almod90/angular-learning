import {BlogComment} from './blog-comment';

export class BlogPost {
  // user: string;
  title: string;
  text: string;
  // readonly slug: string;
  comments: BlogComment[];


  constructor(data) {
    this.title = data.title;
    this.text = data.text;
    this.comments = data.comments;
  }

  get slug(): string {
    return this.title.toLowerCase().split(' ').join('-');
  }
}
