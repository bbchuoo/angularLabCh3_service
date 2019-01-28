import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  data = { name: 'alvin', age: '18', gender: 'girl' }

  getData() {
    return this.data;
  }
  changeDate(name) {
    return this.data.name = name;
  }
}
