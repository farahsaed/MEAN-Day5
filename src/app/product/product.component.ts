import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
     image1:string = "../assets/images/Capture2.PNG";
     image2:string = "../assets/images/Capture3.PNG";
     image3:string = "../assets/images/Capture4.PNG" ;
     image4:string = "../assets/images/Capture5.PNG" ;
     image5:string = "../assets/images/Capture6.PNG" ;
     image6:string = "../assets/images/Capture7.PNG" ;


     readMore(){
         console.log("PRODUCT DETAILS");
     }
}
