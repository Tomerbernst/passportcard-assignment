import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() desc: string;

  constructor(){}

}
