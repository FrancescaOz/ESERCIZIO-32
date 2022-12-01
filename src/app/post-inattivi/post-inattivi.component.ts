import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService, put, del } from '../post.service';

@Component({
    selector: 'app-post-inattivi',
    templateUrl: './post-inattivi.component.html',
    styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {
    d: any;
    posts: Post[] = [];
    constructor(private postSrv: PostService) { }

    ngOnInit(): void {
        this.postSrv.getPostFiltrati(false).then(res => this.posts = res)
    }

    changeActive(i: number, post: Post): void {
        this.d = {
            id: post.id,
            title: post.title,
            body: post.body,
            active: !post.active,
            type: post.type,
        };
        put(i, post).then(res => {
            this.posts = this.posts.filter((e) => {
                if (e.id == i) {
                    return false
                } else {
                    return true;
                }
            })
        })
    }

    elimina(i:number): void {
        del(i).then(res=>{
          this.posts = this.posts.filter((e)=>{
            if (e.id == i) {
              return false
            } else {
              return true;
            }
          })
        })
      }
}
