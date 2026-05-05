import { Injectable } from '@angular/core';
import { Book, IBookResponse, IChapterResponse, IVerse } from '../models/book';
import { capitalizeFirst, capitalizeFirstShort } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  books = ['1corintios', '1cronicas', '1juan', '1pedro', '1reyes', '1samuel', '1tesalonicenses', '1timoteo', '2corintios', '2cronicas', '2juan', '2pedro', '2reyes', '2samuel', '2tesalonicenses', '2timoteo', '3juan', 'abdias', 'amos', 'apocalipsis', 'cantares', 'colosenses', 'daniel', 'deuteronomio', 'eclesiastes', 'efesios', 'esdras', 'ester', 'exodo', 'ezequiel', 'filemon', 'filipenses', 'galatas', 'genesis', 'habacuc', 'hageo', 'hebreos', 'hechos', 'isaias', 'jeremias', 'job', 'joel', 'jonas', 'josue', 'juan', 'judas', 'jueces', 'lamentaciones', 'levitico', 'lucas', 'malaquias', 'marcos', 'mateo', 'miqueas', 'nahum', 'nehemias', 'numeros', 'oseas', 'proverbios', 'romanos', 'rut', 'salmos', 'santiago', 'sofonias', 'tito', 'zacarias']
  bookResponse?: IBookResponse;

  constructor() {}

  getDb = (book: string) => {
    if (!this.books.includes(book)) {
      throw console.log("libro no encontrado");
    }
    const data = import(`../db/${book}.ts`);
    return data;
  }

  getBook = async(bookSku: string): Promise<IBookResponse> => {
    const db = await this.getDb(bookSku).then(data => data);

    const dataset = this.getAllChapterResponse(bookSku, db.default.length, db.default);
    // console.log('total content: ', dataset);
    return {
      bookName: capitalizeFirst(bookSku),
      chapters: db.default.length - 1,
      chapterContent: dataset
    }
  }
  
  getAllChapterResponse = (bookSku: string, chapters: number, db: string[]) => {
    const book = capitalizeFirstShort(bookSku);
    let data: IChapterResponse[] = [];
    
    for (let index = 0; index < chapters; index++) {
      let element = db[index];

      const dataset = this.setVerse(book, index,[element]);
      data.push({book: book, chapter: index, verses: dataset}); 
    }
    return data;
  }

  setVerse(book: string, chapter: number, content: string[]) {
    let data: IVerse[] = [];
    for (let index = 0; index < content.length; index++) {
      const element = content[index];
      for (let y = 0; y < element.length; y++) {
        const elementY = element[y];
        let nameStr = `${book}. ${chapter}: ${y+1}`
        
        if (chapter==0) {
          nameStr = "Introducción";
        }

        data.push({id: `${nameStr}`, text: elementY});
      }
    }

    return data;
  }
  
}
