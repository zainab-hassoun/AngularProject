import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
@Output() optionChanged : EventEmitter <string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changeToAll(){
    this.optionChanged.emit("All")
  }

  changeToSalads(){
this.optionChanged.emit("Salads")
  }
  changeToStarters(){
    this.optionChanged.emit("Starters")
  }
  changeToMain(){
    this.optionChanged.emit("Main")
  }
}
