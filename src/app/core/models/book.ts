export interface Book {
    id: number;
    name: string;
    verses: string[];
}


export interface IBookResponse {
  bookName: string;
  chapters: number;
  chapterContent: IChapterResponse[];
}

export interface IVerse {
  id: string;
  text: string;
}

export interface IChapterResponse {
  book: string;
  chapter: number;
  verses: IVerse[];
}