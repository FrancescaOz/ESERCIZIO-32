import { Injectable } from '@angular/core';
import { Users } from './users';

var users:Users[];

fetch('http://localhost:3000/utenti')
  .then((response) => response.json())
  .then((data) => users = data);

export async function getUsers() {
  return await (await fetch('http://localhost:3000/utenti')).json()
}

export async function getInfo(i: number) {
    return await (await fetch('http://localhost:3000/utenti/'+ i)).json()
  }

export async function getUsersById(id:number) {
  return await (await fetch('http://localhost:3000/utenti/'+id)).json()
}
