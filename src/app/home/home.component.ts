import { Component } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  posts: Post[] = [
    new Post(1, "Unity 3D in Docker", "link", "author1"),
    new Post(2, "Unity 3D in Docker", "link", "author2"),
    new Post(3, "Unity 3D in Docker", "link", "author3"),
    new Post(4, "Unity 3D in Docker", "link", "author4"),
  ];


  constructor() { }


}
