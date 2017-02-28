import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 id="testTitle">Hello {{name}}</h1><sum></sum>`,
})
export class AppComponent {
  name = 'Angular';
}
