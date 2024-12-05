import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsComponent } from './pages/commands/commands.component';
import { ExtensibleComponent } from './pages/extensible/extensible.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'extensible', component: ExtensibleComponent },
  { path: '**', redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
