import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialFeatures } from './material.module';

import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { ProductTableComponent } from './productTable..component';
import { ProductEditorComponent } from './productEditor.component';
import { OrderTableComponent } from './orderTable.component';

let mainRouting = {
  path: 'main',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'products/:mode/:id', component: ProductEditorComponent },
    { path: 'products/:mode', component: ProductEditorComponent },
    { path: 'products', component: ProductTableComponent },
    { path: 'orders', component: OrderTableComponent },
    { path: '**', redirectTo: 'products' },
  ],
};

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  mainRouting,
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, MaterialFeatures],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent,
  ],
  providers: [AuthGuard],
})
export class AdminModule {}
