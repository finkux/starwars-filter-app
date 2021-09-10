import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  isPanelContentVisible: boolean = false;

  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  togglePanel(): void {
    this.isPanelContentVisible = !this.isPanelContentVisible;
    this.toggle.emit(this.isPanelContentVisible);
  }

}
