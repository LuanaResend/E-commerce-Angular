import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {}

  signUp(data:object):void{
    console.warn(data)
  }
}
