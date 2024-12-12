import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Input } from '@angular/core';
@Component({
  selector: 'app-macchina',
  imports: [ContainerComponent],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent implements OnInit {
@Input () macchina: string = "";
componenti: string[];
constructor () {
  this.componenti = ['patate', 'carote', 'broccoli', 'prezzemolo']; 

}
ngOnInit(): void {
  
}
 
}
