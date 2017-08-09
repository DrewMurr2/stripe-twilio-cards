import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WindowRef } from './../windowRef.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  constructor(private userService: UserService, private winRef: WindowRef) { }


  ngOnInit() {

  }
  ngAfterViewInit() {
    console.log(this.winRef.nativeWindow)
    this.stripe = this.winRef.nativeWindow.Stripe('pk_test_wdevjExYH28dYzFg05q7GQTW');
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');
    this.el.nativeElement.id = "cardelement"
    this.card.mount('#cardelement');

  }
  elements: any
  stripe: any
  card: any
  complete: boolean = false
  @ViewChild('cardelement') el: ElementRef;

  submitCreditCard(email, callback) {
    this.stripe.createSource(this.card, {
      owner: {
        name: this.userService.user.firm,
        email: email
      },
      metadata: this.userService.user
    }).then(function (result) {
      console.log(result)
      callback(result)

      // handle result.error or result.source
    });
  }


  save(email) {


    this.submitCreditCard(email, stripeResult => {
      if (stripeResult.error) {
        alert('Stripe Error')
        console.log(stripeResult.error)
      } else {
        console.log('Stripe Result', stripeResult)
        this.userService.createUserInDB(stripeResult.source).subscribe(user => {
          if (user) {
            console.log('user', user)
            this.complete = true
          }
          else console.log('user error')
        },
          error => {
            alert("Error Sending")
            console.error(error)
          }
        )
      }




    })








  }

}
