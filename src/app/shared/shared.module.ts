import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModules } from './modules/prime-ng-module';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule
  ]
  
  ,
  declarations: [],
})
export class SharedModule {}
