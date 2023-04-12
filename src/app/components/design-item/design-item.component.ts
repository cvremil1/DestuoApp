import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { Designs } from 'src/app/models/designs';

@Component({
  selector: 'app-design-item',
  templateUrl: './design-item.component.html',
  styleUrls: ['./design-item.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class DesignItemComponent  implements OnInit {

  @Input() design!: Designs ;
  constructor() { }

  ngOnInit() {}

}
