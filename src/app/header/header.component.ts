import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts/posts.service';
import { Post } from '../shared/posts/post';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  errorMessage: string;
  posts: Post[];
  mode = "Observable";

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._postsService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error
      );
  }

}
