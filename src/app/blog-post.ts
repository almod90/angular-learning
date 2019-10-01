import {BlogComment} from './blog-comment';

export class BlogPost {
  user: string;
  title: string;
  text: string;
  comments: BlogComment[];
}
