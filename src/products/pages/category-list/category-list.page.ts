import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { CategoryService }  from '../../providers';
import { Category }         from '../../models';
import { CategoryDetailPage } from '../category-detail/category-detail.page';

@Component({
	selector: 'product-category-list',
	templateUrl: './category-list.page.html'
})
export class CategoryListPage {

	public items: Category[] = [];
	public residential: boolean = true;

	constructor(public navCtrl: NavController, public categories: CategoryService) {
		categories.all().subscribe(r => this.items = r);
	}

	select(item: Category): void {
		this.navCtrl.push(CategoryDetailPage, {
			category: item
		});
	}
}
