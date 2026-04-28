export interface Book {
    id: number;
    name: string;
    verses: string[];
}


export interface IBookResponse {
  book: string;
  chapters: number;
  // sinopsis?: string;
  text: string[];
}