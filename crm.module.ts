import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CRMComponent } from './crm.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';

const crmRouting: Routes = [
  {
      path: '',
      component: CRMComponent
  },
  {
    path: 'Product',
    component: ProductComponent
},
{
  path: 'AboutUs',
  component: AboutUsComponent
}
]
@NgModule({
  declarations: [
    CRMComponent,
    ProductComponent,
    AboutUsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,RouterModule.forChild(crmRouting)
  ],
  providers: [],
  bootstrap: [CRMComponent]
})
export class crmModule { }
