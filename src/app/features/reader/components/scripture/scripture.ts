import { Component, input } from '@angular/core';

@Component({
  selector: 'app-scripture',
  imports: [],
  templateUrl: './scripture.html',
  styles: ``,
})
export class Scripture {
  text = input<string>('');
  num = input<number>(0);

}
