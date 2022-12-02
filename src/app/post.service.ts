import { Injectable } from '@angular/core';
import { Post } from './post';

/////PUT////

export async function put(i: number, data: Post) {
    const response = await fetch(`http://localhost:3000/posts/${i}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

/////POST////

export async function post(data: Post) {
    const response = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

/////DELETE////

export async function del(i: number) {
    const response = await fetch(`http://localhost:3000/posts/${i}`, {
        method: 'DELETE',
    })
    return response.json
}

////////////////POST//////////////////
@Injectable({
    providedIn: 'root'
})
export class PostService {

    //GET GENERALE//
    getAllPosts() {
        return fetch("http://localhost:3000/posts/").then((res): Promise<Post[]> => res.json())
    }

    //GET SINGOLA//
    getSinglePosts(i: number) {
        return this.getAllPosts().then(res => {
            return res.filter((e) => {
                return e.id == i
            })
        })
    }

    posts: Post[] = []
    postsActive: Post[] = []
    postInactive: Post[] = []

    constructor() {
    }

    getActivePost() {
        return this.postsActive
    }
    getInactivePost() {
        return this.postInactive
    }

    getPostFiltrati(a: boolean) {
        return this.getAllPosts().then(res => {
            return res.filter((e) => {
                return e.active == a
            })
        })
    }

}
