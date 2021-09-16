import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group(
    {
      name: 'Bruno',
      address: ''
    }
  )

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn('Your order has been submited!', this.checkoutForm.value)
    console.log(this.items)
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
