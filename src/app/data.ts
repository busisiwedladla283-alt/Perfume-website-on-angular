import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Data {

  perfumesList: any[] = [
    {
      id: 1,
      name: 'Chanel No. 5',
      description: 'A timeless classic with floral and aldehydic notes.',
      price: 120,
      image: 'assets/images/chanel-no5.jpg'
    },
    {
      id: 2,
      name: 'Dior Sauvage',
      description: 'A fresh and spicy fragrance with notes of bergamot and pepper.',
      price: 95,
      image: 'assets/images/dior-sauvage.jpg'
    },
    {
      id: 3,
      name: 'Gucci Bloom',
      description: 'A floral fragrance with notes of jasmine and tuberose.',
      price: 85,
      image: 'assets/images/gucci-bloom.jpg'
    },
    

  ]

  getPerfumes() {
    return this.perfumesList;
  }
}
