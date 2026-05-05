import { Component, computed, effect, signal } from '@angular/core';
import { BookSelect } from '../../components/book-select/book-select';
import { BookHistory } from '../../components/book-history/book-history';
import { Scripture } from '../../components/scripture/scripture';
import { DataServices } from '../../../../core/services/data-services';
import { ActivatedRoute } from '@angular/router';
import { Book, IBookResponse, IChapterResponse } from '../../../../core/models/book';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reader',
  imports: [
    CommonModule,
],
  templateUrl: './reader.html',
  styles: ``,
})
export class Reader {
  bookResponse = signal<IBookResponse | null>(null);
  text = signal<IChapterResponse | null>(null);
  subtitle = signal<string>('');
  currentChapter = signal<number>(0);
  nextChapter = computed(() => this.currentChapter() +  1);

  constructor(
    private dataServices: DataServices,
    private route: ActivatedRoute
  ) {
    const sku = this.route.snapshot.paramMap.get('book');

    if (sku) {
      effect(()=> {
        const data = this.dataServices.getBook(sku);
        data.then(res => this.bookResponse.set(res));
      })
    }
    this.setText();
  }
  
  ngOnInit() {

  }
  
  setText() {
    const data = this.bookResponse()?.chapterContent.find(el => el.chapter == this.currentChapter());
    if (data) {
      this.text.set(data);
    }

    this.setSubtitle();
    // this.titleNextChapter(num);
  }
  
  selectPartBook($event: any) {
    const index = $event.target.id;
    this.currentChapter.set(parseInt(index));

    this.setText();
  }

  setSubtitle() {
    if (this.currentChapter() == 0) this.subtitle.set('Introducción')
    else this.subtitle.set(`Chapter ${this.currentChapter()}`) 
  }

  onNextChapter = ()=> {
    this.currentChapter.set(this.nextChapter());
    this.setText();
  }

  titleNextChapter = () => {
    return `${this.bookResponse()?.bookName} ${this.nextChapter()}`;
  }


}
