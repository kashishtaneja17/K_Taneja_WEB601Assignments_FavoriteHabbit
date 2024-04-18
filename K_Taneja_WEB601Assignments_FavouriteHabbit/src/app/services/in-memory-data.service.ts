import { Injectable } from '@angular/core';

// in-memory-data.service.ts
import { count } from 'rxjs';
import { CONTENT } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDataService {

  
  createDb() {
    // setting it to the value of our array of content
    // const content : Content[] = CONTENT;
    // return {content};
    return { content: CONTENT };
    }


    // Override the genId method to generate new IDs for content items
    // This method takes an array of content items as input and returns the next available ID
    genId(content: Content[]): number {

      
      // If there are existing content items, generate the next ID
      // Otherwise, return 2000 as the initial ID
      if (content.length > 0) {
          return Math.max(...(content.map(c => c.id) as number[])) + 1;
      } else {
          return 2000; // Initial ID when no content items exist
      }
    }
}
  // constructor() { }