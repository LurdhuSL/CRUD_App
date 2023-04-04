import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from './crud-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CRUD-App';

  constructor(private service:CrudServiceService) {}

  ngOnInit(): void {
  this.getData()
  }

  getTotalValue: any=[];
  getidValue: any =[];

  profileForm = new FormGroup({
     firstName: new FormControl(''),
     lastName: new FormControl(''),
     Mobile: new FormControl(''),
     Country: new FormControl(''),
     subject: new FormControl('')
    
      });

      onSubmit(){
          let data=this.profileForm.value
        
          this.service.post(data).subscribe((data =>{
          console.log(data)
          this.getData();
          this.profileForm.reset();
        
           } ))
         }
        
           getData(){
           this.service.get().subscribe((res) =>{
             this.getTotalValue = res
        
            })
           }
        
           editData(id: number){
            this.service.getId(id).subscribe((res) =>{
            this.getData();
              
            this.getidValue = res;
            console.log(this.getidValue, "hello");
              
        
            this.profileForm.patchValue({
            firstName: this.getidValue.Name,
            lastName: this.getidValue.lastName,
            Mobile: this.getidValue.Mobile,
            Country: this.getidValue.Country,
            subject: this.getidValue.subject
            })
            })
        
          }
        
          updateData(id: number){
          let data=this.profileForm.value
          this.service.update(id, data).subscribe(() =>{
          this.getData();
           })
        
         }
        
         deleteData(id: number){
         this.service.delete(id).subscribe((data) =>{
         this.getData();
           })
        
          }
            

}
