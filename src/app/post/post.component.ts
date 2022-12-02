import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    posts: Post[] = []; //interfaccia
    single: any; //id

    constructor(private postSrv: PostService) { }

    ngOnInit(): void {
        this.single = window.location.href.split('/').pop();
        this.postSrv.getSinglePosts(this.single).then((res) => {
          this.posts = res;
          console.log(this.posts)})
      }
}
