import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   alert: boolean = false;
   add= new FormGroup({
    Id: new FormControl(''),
     Name: new FormControl(''),
     Adress: new FormControl(''),
     Email: new FormControl('')
  })

constructor(private resto:CommonService){}
ngOnInit() : void{

}
CreateResto(){
  this.resto.add(this.add.value).subscribe((result)=>{
    this.alert= true;
    this.add.reset({});
    console.log("Get Data From Service ",result);
  })
 

   
  }
  closeAlert(){
    this.alert = false;
  }
}