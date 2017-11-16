import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  imports: [CommonModule],
  providers: [],
  exports: [ReportComponent],
  declarations: [ReportComponent]
})

export class ReportModule {
  constructor(@Optional() @SkipSelf() parentModule: ReportModule) {
    if (parentModule) {
      throw new Error(
        'ReportModule is already loaded. Import it in the AppModule only');
    }
  }
}
