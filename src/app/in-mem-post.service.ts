import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemPostService implements InMemoryDbService {
  createDb() {
    const posts = [
      {
        title: 'post 1',
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
        title: 'post 2',
        text: 'ololo some text 2',
        comments: [
          {
            name: 'almod',
            text: 'test text 3'
          }
        ]
      }
    ];
    return { posts };
  }
}
