import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecordsService {
  info1: any[] = ['Mohankumar', '3499', 'mohan@aspire.net'];
  info2: any[] = ['Rameshkumar', '1234', 'ramesh@aspire.net'];
  info3: any[] = ['Sathish', '5678', 'sathish@aspire.net'];
  constructor() { }
}
