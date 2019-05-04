import {Component, Input} from "@angular/core";
import {ItemEventData} from "tns-core-modules/ui/list-view";

 @Component({
     selector: 'ns-current-challenge',
     templateUrl: './current-challenge.component.html',
     styleUrls: ['./current-challenge.component.css'],
     moduleId: module.id
 })
export class CurrentChallengeComponent {
     // challengeDescription = '';
     @Input() challengeTitle = '';

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

