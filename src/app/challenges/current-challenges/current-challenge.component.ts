import {Component} from "@angular/core";
import {isAndroid} from  'tns-core-modules/platform';
import { RouterExtensions } from "nativescript-angular/router";
import {Page} from 'tns-core-modules/ui/page/page';

declare var android: any;

 @Component({
     selector: 'ns-current-challenge',
     templateUrl: './current-challenge.component.html',
     styleUrls: ['./current-challenge.component.css'],
     moduleId: module.id
 })
export class CurrentChallengeComponent {
    constructor (private router: RouterExtensions, private page: Page){}

    onEdit(){
        this.router.navigate(['/edit-challenge']);
    }

    onLoadActionBar(){
        if (isAndroid){
          const androidToolbar =  this.page.actionBar.nativeView;
          const backButton = androidToolbar.getNavigationIcon();
          if (backButton){
              backButton.setColorFilter(android.graphics.Color.parseColor('#171717'),
              (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
          }
        }

    }

 }




















     //@Input() challenges: string[] = [];


     // onItemTap(args: ItemEventData){
     //     console.log(args);
     // }






     //
     // onSetChallenge(){
     //     this.currentChallenge = this.challengeDescription;
     //
     // }

