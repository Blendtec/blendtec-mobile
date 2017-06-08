import { FormBuilder }             from '@angular/forms';
import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../../test';
import { CategoryListPage }             from './category-list.page';
import { RecipeCategoryService } from '../../providers/recipe-category.service';
import { RecipeCategoryServiceMock } from '../../providers/recipe-category.service.mock';

let fixture: ComponentFixture<CategoryListPage> = null;
let instance: any = null;

describe('CategoryListPage', () => {
	// let categorySrvc: RecipeCategoryService = RecipeCategoryServiceMock.instance();

	beforeEach(async(() => TestUtils.beforeEachCompiler([CategoryListPage]).then(compiled => {
		fixture = compiled.fixture;
		instance = compiled.instance;

		fixture.autoDetectChanges(true);
	})));

	afterEach(() => {
		fixture.destroy();
	});

	it('initialises', () => {
		expect(fixture).not.toBeNull();
		expect(instance).not.toBeNull();
	});

	it('passes new clicker through to service', () => {
		//instance['']
		// let clickerName: string = 'dave';
		// instance.form = new FormBuilder().group({clickerNameInput: [clickerName]});
		// spyOn(instance, 'newClicker').and.callThrough();
		// spyOn(instance['clickerService'], 'newClicker').and.callThrough();
		// fixture.detectChanges();
		// fixture.nativeElement.querySelectorAll('button')[1].click();
		// expect(instance.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
		// expect(instance['clickerService'].newClicker).toHaveBeenCalledWith(clickerName);
	});

	// it('doesn\'t try to add a clicker with no name', () => {
	// 	spyOn(instance['clickerService'], 'newClicker').and.callThrough();
	// 	instance.newClicker({});
	// 	expect(instance['clickerService'].newClicker).not.toHaveBeenCalled();
	// });
});