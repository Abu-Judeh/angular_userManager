import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';



@Component({
  selector: 'app-imageuplode',
  templateUrl: './imageuplode.component.html',
  styleUrls: ['./imageuplode.component.scss']
})
export class ImageuplodeComponent {
  selectedFile =null;
  constructor(private http:HttpClient){}
onFileSelected(event: any)
{
  this.selectedFile=event.target.files[0];
}
onUpload()
{
  // this.http.post()
}
  
  
}
