
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';


import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth, { AuthState } from '@okta/okta-auth-js';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class AppComponent {

  public isAuthenticated$!: Observable<boolean>;
  public name$!: Observable<string> ;

  constructor(private _router: Router, private _oktaStateService: OktaAuthStateService, @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth) { }

  public ngOnInit(): void {
    
    console.log("test1111111111111111");
   this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
      filter((s: AuthState) => !!s),
      map((s: AuthState) => s.isAuthenticated ?? false)
    );
    this.name$ = this._oktaStateService.authState$.pipe(
      filter((authState: AuthState) => !!authState && !!authState.isAuthenticated),
      map((authState: AuthState) => authState.idToken?.claims.name ?? '')
    );
    console.log("vsfvs");
    console.log( this.name$.subscribe(data=>{return data}));

  }
 

  public async signIn(): Promise<void> {
    console.log("sign in-----------clicked");
    await this._oktaAuth.signInWithRedirect();
  }

  public async signOut(): Promise<void> {
    console.log("sign ou -----------clicked");
    await this._oktaAuth.signOut();
    this._oktaAuth.tokenManager.clear();
  }
}
