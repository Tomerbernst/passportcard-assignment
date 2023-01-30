import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  @Input() message: string;
  @Output() onOk = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  constructor() {}

  ok() {
    this.onOk.emit();
  }
  cancel() {
    this.onCancel.emit();
  }
}
