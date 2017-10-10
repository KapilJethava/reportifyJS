import { getTestBed, TestBed } from '@angular/core/testing';
import { SeedComponent } from './seed.component';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('seed component', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SeedComponent]
		});
	});

	afterEach(() => {
		getTestBed().resetTestingModule();
	});



	/* snip */
});
