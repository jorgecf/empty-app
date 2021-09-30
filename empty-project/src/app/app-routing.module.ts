import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  { path: 'conversation', component: ConversationComponent },
  { path: '**', redirectTo: 'conversation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
