import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModules } from './modules/prime-ng-module';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from '../contatos/edit/edit.component';
import { ListComponent } from '../contatos/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModules,
    HttpClientModule,
    ReactiveFormsModule

  ],
  exports: [
    FormsModule,
    PrimeNGModules,
    HttpClientModule,
    ReactiveFormsModule,
    EditComponent,
    ListComponent,
  ],
  declarations: [
    EditComponent,
    ListComponent,
  ],
})
export class SharedModule {}
