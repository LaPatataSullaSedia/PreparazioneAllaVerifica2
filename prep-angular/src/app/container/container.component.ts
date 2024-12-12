import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  macchine: string[]; 
  constructor() { 
     this.macchine = ['Escavatore', 'Pala meccanica', 'Bulldozer', 'Rullo compattatore', 'Grù', 'muletto', 'Betoniera', 'Trivella', 'Livellatrice ', 'Miniescavatore']; 
  }

}
