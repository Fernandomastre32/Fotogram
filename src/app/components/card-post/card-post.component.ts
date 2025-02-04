import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false,
})
export class CardPostComponent implements OnInit {
  @Input() username: string = "";
  @Input() location: string = "";
  @Input() avatarUrl: string = "";
  @Input() imagenUrl: string = "";
  @Input() contentUrl: string = "";
  @Input() liked: boolean = false;
  @Input() saved: boolean = false;



  constructor() { }

  ngOnInit() { }

}
