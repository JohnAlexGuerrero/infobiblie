import { Injectable } from '@angular/core';
import { Book, IBookResponse } from '../models/book';
import { capitalizeFirst } from '../utils/utils';

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

    return {
      book: capitalizeFirst(bookSku),
      chapters: db.default.length - 1,
      text: db.default
    }
  }
  
}
