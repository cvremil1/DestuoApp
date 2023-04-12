import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sold-design',
  templateUrl: './sold-design.page.html',
  styleUrls: ['./sold-design.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SoldDesignPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
