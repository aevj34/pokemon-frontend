import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { LeftPadPipe } from './left-pad.pipe';
import { ThumbnailPipe } from './thumbnail.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    LeftPadPipe,
    ThumbnailPipe
  ],
  exports: [
    ImagePipe,
    LeftPadPipe,
    ThumbnailPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
