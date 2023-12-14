import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  check?:boolean;

  public showStuff() {
    if(this.check) {
      const t = 'true';
    } else {
      const f = 'false';
    }
  }
}
