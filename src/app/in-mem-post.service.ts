import {InMemoryDbService} from 'angular-in-memory-web-api';
import {BlogPost} from './blog-post';

export class InMemPostService implements InMemoryDbService {
  createDb() {
    const posts = [
      {
        id: 11,
        title: 'Some info post ollo',
        text: 'some text ololo',
        comments: [
          {
            name: 'almod',
            text: 'test text'
          },
          {
            name: 'almod',
            text: 'test text 2'
          }
        ]
      },
      {
        id: 12,
        title: 'testing environment',
        text: 'ololo some text 2',
        comments: [
          {
            name: 'almod',
            text: 'test text 3'
          }
        ]
      }
    ];
    return {posts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: BlogPost[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}
