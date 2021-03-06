import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { Tab1Root }         from '../index';
import { Tab2Root }         from '../index';
import { Tab3Root }         from '../index';

@Component({
	selector: 'page-tabs',
	templateUrl: 'recipe-tabs.page.html'
})
export class RecipeTabsPage {

	public tab1Root: any = Tab1Root;
	public tab2Root: any = Tab2Root;
	public tab3Root: any = Tab3Root;

	public tab1Title: string = ' ';
	public tab2Title: string = ' ';
	public tab3Title: string = ' ';

	constructor(public navCtrl: NavController, public translateService: TranslateService) {
		translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE'])
			.subscribe(values => {
				this.tab1Title = values['TAB1_TITLE'];
				this.tab2Title = values['TAB2_TITLE'];
				this.tab3Title = values['TAB3_TITLE'];
			});
	}
}
