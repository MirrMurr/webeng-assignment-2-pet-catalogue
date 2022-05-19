import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() type!: string; //ButtonStyle;

  @Output() onClickEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('click');
    this.onClickEmitter.emit();
  }
}
