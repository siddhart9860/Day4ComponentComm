import { Logic } from './../../model/logic';
import { AbstractControl } from '@angular/forms';
import { Product } from 'src/app/model/app.product.model';
export class CustomValidator {
  // if the data is valid then the method returns null
  // else for invalid value the method return  JSON object e.g.
  // {even:false} or {odd:true}
  static CheckEven(control: AbstractControl): any {
    // tslint:disable-next-line: radix
    const value = parseInt(control.value);
    if (value % 2 === 0) {
      return null; // valid
    } else {
      return { even: false }; // invalid
    }
  }

  static Duplicate(control: AbstractControl): any {
    const value = control.value;

    const index = new Logic()
      .getProducts()
      .findIndex((x) => x.ProductId === value);
    if (index > -1) {
      return { duplicate: true };
    }
    return null;
  }

  static CheckSpace(control: AbstractControl): any {
    // tslint:disable-next-line: radix
    const value = control.value;

    if (value.split(' ').length > 1) {
      return { space: false };
    }

    return null;
  }
}
