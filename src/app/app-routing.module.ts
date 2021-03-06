import { NgModule } from "@angular/core";
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {Routes} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from "./challenges/today/today.component";
import { CurrentChallengeComponent } from "./challenges/current-challenges/current-challenge.component";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";

const routes: Routes =[
    {path: '', component: AuthComponent},
    {path: 'today', component: TodayComponent},
    {path: 'current-challenge',component: CurrentChallengeComponent},
    {path: 'edit-challenge', component: ChallengeEditComponent}
]


@NgModule ({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule {}
