import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,ReactiveFormsModule,CommonModule]
})
export class UserRegistrationPage implements OnInit {
  

  registration = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    currentAddress: new FormControl('',Validators.required),
    permanentAddress: new FormControl('',Validators.required),
    sameAsCurrentAddress: new FormControl(false),
    termsAccepted:  new FormControl([false, Validators.requiredTrue]),
    phoneNumber: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    zipCode: new FormControl('',Validators.required),
  })



  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string= '';
  confirmPassword: string= '';
  currentAddress: string= '';
  permanentAddress: string= '';
  sameAsCurrentAddress: boolean = false;
  termsAccepted: boolean = false;
  phoneNumber:string= '';
  username:string= '';
  
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    currentAddress: '',
    permanentAddress: '',
    zipCode: '',
    city: '',
    country: '',
    state: '',
    username:''
  };

  countries = ['Afghanistan','Albanien','Algeriet','Angola','Antigua och Barbuda','Argentina','Australien','Azerbajdzjan','Österrike','Östtimor','Bahamas','Bahrain','Bangladesh','Barbados','Belgien','Benin','Bermuda','Bhutan','Bolivia','Bosnien och Hercegovina','Botswana','Brasilien','Brunei Darussalam','Bulgarien','Burkina Faso','Burundi','Centralafrikanska Republiken','Chile','Colombia','Costa Rica','Cypern','Danmark','Demokratiska Republiken Kongo','Dominikanska Republiken','Ecuador','Egypten','El Salvador','Elfenbenskusten','Estland','Etiopien','Färöarna','Förenade Arabemiraten','Filippinerna','Finland','Frankrike','Gabon','Georgien','Ghana','Gibraltar','Grönland','Grekland','Grenada','Guatemala','Honduras','Hong Kong','India','Indonesien','Irak','Iran','Irland','Island','Israel','Italien','Jamaica','Japan','Jemen','Jersey','Jordanien','Kambodja','Kanada','Kazakstan','Kenya','Kina','Kiribati','Kroatien','Kuba','Kuwait','Laos','Lettland','Libanon','Libyen','Litauen','Luxemburg','Madagaskar','Makedonien','Malawi','Malaysia','Maldiverna','Mali','Malta','Marocko','Mauritius','Mexiko','Mocambique','Monaco','Mongoliet','Myanmar','Namibia','Nederländerna','Nederländska Antillerna','Nepal','Nicaragua','Niger','Nigeria','Norge','Nya Zeeland','Oman','Pakistan','Panama','Paraguay','Peru','Polen','Portugal','Puerto Rico','Qatar','Rumänien','Rwanda','Ryssland','Saint Lucia','Saint Vincent och Grenadinerna','Samoa','San Marino','Sao Tome och Principe','Saudiarabien','Schweiz','Senegal','Serbien och Montenegro','Seychellerna','Sierra Leone','Singapore','Slovakien','Slovenien','Somalia','Spanien','Sri Lanka','Sudan','Surinam','Sverige','Swaziland','Sydafrika','Sydkorea','Syrien','Taiwan','Tanzania','Thailand','Tjeckien','Trinidad och Tobago','Tunisien','Turkiet','Tyskland','Uganda','Ukraina','Ungern','Uruguay','USA','Uzbekistan','Venezuela','Vietnam','Vitryssland','Zambia','Zimbabwe'];
   
 onSubmit() {
   
    console.log("Submitting registration data:",  this.user);
  }
  cancel(){
  
  }
 
  filteredCountries: string[] = [];
  
   

 
  constructor() { 
    
  }
  
  ngOnInit() {

    
    
  }
  
 
  
}
