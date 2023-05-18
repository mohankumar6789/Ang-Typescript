import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecordsService {
  info1: string[] = ['Mohankumar', 'ACE 3499', 'mohankumar.sakthivel@aspiresys.com']
  info2: string[] = ['karthik', 'ACE1234', 'karthik.prabhakaran@aspiresys.com']
  info3: string[] = ['Sureshkumar', 'ACE5678', 'sureshkumar.Thangaraj@aspiresys.com']
  
  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() {}
}
