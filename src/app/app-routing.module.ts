
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from 'src/Components/add-Product/add-Product.component';
import { AddVariationComponent } from 'src/Components/add-variation/add-variation.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { LoginComponent } from 'src/Components/login/login.component';
import { RegisterComponent } from 'src/Components/register/register.component';

const routes: Routes = [
  {path:'Register', component:RegisterComponent},
  {path:'Login', component:LoginComponent},
  {path:'Add', component:AddProductComponent},
  {path:'Home/:sid', component:HomeComponent},
  {path:'Variation/:pid', component:AddVariationComponent},
  {path:'', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
