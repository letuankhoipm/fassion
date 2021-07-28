import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductDetail } from '@models/product.model';
import { User } from '@models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  public getProducts(): Observable<any> {
    return this.firestore.collection('production').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = { data: a.payload.doc.data() };
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public createProduct(product: ProductDetail): Promise<any> {
    return this.firestore.collection('production').add(product);
  }

  public updateProduct(product: ProductDetail): Promise<any> {
    return this.firestore.doc(`production/${product.id}`).update(product);
  }

  public deleteProduct(productId: number): Promise<any> {
    return this.firestore.doc(`production/${productId}`).delete();
  }
}
