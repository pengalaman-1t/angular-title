import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  // title = 'angular-title';

  public constructor(private titleService : Title){
    this.titleService.setTitle("Button Ganti Title Gaes");
  }
public setTitle(newTitle: string){
  this.titleService.setTitle(newTitle)
}


}
