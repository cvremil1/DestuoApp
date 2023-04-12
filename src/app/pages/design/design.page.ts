import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Designs } from 'src/app/models/designs';
import { DesignService } from 'src/app/services/design.service';
import { error } from 'console';
import { DesignItemComponent } from 'src/app/components/design-item/design-item.component';

@Component({
  selector: 'app-design',
  templateUrl: './design.page.html',
  styleUrls: ['./design.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,DesignItemComponent]
})
export class DesignPage implements OnInit {

  designs:Designs[]=[];
  errorMessage: string="";


  constructor(private _designService:DesignService) { }

  ngOnInit() {

    this._designService.getDesign().subscribe(design => {
      
     
      this.designs =design[0].data;
    },error=>{
      this.errorMessage=error.message;
    })
   
  }

}
