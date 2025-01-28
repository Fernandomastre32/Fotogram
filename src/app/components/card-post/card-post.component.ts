import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone : false,
})
export class CardPostComponent  implements OnInit {
  //Header
 @Input() username: string = '';
 @Input() location: string = '';
 @Input() createAt: string = '';
 @Input() avatarURL: string = '';

 //Conter
 @Input() ContentUrl: string = '';

 //stats
 @Input() liked: boolean = false;
 @Input() saved: boolean = false;


 //Info

 @Input() likes: number = 0;
 @Input() Description: string = '';

  constructor() { }

  ngOnInit() {}

}
