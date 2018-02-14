import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyCapitalizePipe } from './pipes/my-capitalize.pipe';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { MyAppendPipe } from './pipes/my-append.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule,
  ],
  declarations: [MyCapitalizePipe, PipeDemoComponent, MyAppendPipe],
  exports: [PipeDemoComponent],
})
export class SharedModule { }