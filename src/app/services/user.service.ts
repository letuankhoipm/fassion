import { map } from 'rxjs/operators';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  public getUser(): Observable<any> {
    return this.firestore.collection('user').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = { data: a.payload.doc.data() };
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public createUser(user: User): Promise<any> {
    return this.firestore.collection('user').add(user);
  }

  public updateUser(user: User): Promise<any> {
    return this.firestore.doc(`user/${user.id}`).update(user);
  }

  public deleteUser(userId: number): Promise<any> {
    return this.firestore.doc(`user/${userId}`).delete();
  }
}
