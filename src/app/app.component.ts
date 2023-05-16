import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,

  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  title = 'Angular';

  constructor() {
    console.log('Component constructor');
  }
  ngAfterContentChecked(): void {
    console.log('Component Content Check');
  }
  ngAfterViewChecked(): void {
    console.log('After View Check');
  }

  ngAfterContentInit(): void {
    console.log('Content init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngOnInit(): void {
    console.log('Component ngOnInit');
  }

  mudarTexto() {
    this.title += 'A';
  }

  chamarFuncao() {
    console.log("Esse é um click");
  }

  imgUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
}
