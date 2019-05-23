import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginOneComponent } from './plugin-one.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PluginOneComponent
  }
];
@NgModule({
  declarations: [
    PluginOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PluginTwoModule { }
