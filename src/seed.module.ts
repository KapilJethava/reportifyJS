import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedService } from './services/seed.service';
import { SeedComponent } from './components/seed.component';

export function seedServiceFactory() {
	return new SeedService();
}

@NgModule({
	imports: [CommonModule],
	providers: [
		{ provide: SeedService, useFactory: seedServiceFactory }
	],
	declarations: [SeedComponent],
	exports: [SeedComponent]
})
export class SeedModule { }
