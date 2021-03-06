import { NgModule, ErrorHandler }                                   from '@angular/core';
import { Http }                                                     from '@angular/http';
import { BrowserModule }                                            from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler }                 from 'ionic-angular';
import { IonicStorageModule }                                       from '@ionic/storage';
import { CloudModule, CloudSettings }                               from '@ionic/cloud-angular';
import { SocialSharing }                                            from '@ionic-native/social-sharing';
import { TranslateModule, TranslateLoader, TranslateStaticLoader }  from 'ng2-translate/ng2-translate';

import { MyApp }                 from './app.component';
import { APP_CONFIG, CONFIG }    from './app.config';
import { AuthModule }            from '../auth';
import { ConnectionsModule }     from '../connections';
import { CommonModule }          from '../common';
import { RecipeModule}           from '../recipes';
import { ProductsModule }        from '../products';
import { FaqModule }             from '../faqs';

export function createTranslateLoader(http: Http): TranslateStaticLoader {
	'use strict';
	return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function providers(): any[] {
	'use strict';
	return [
		SocialSharing,
		{provide: APP_CONFIG, useValue: CONFIG},
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	];
}

const cloudSettings: CloudSettings = {
	'core': {
		'app_id': 'f86b7e7d'
	}
};

const translateSettings: any = {
	provide: TranslateLoader,
	useFactory: (createTranslateLoader),
	deps: [Http]
};

@NgModule({
	declarations: [MyApp],
	imports: [
		AuthModule,
		BrowserModule,
		CommonModule,
		CloudModule.forRoot(cloudSettings),
		FaqModule,
		RecipeModule,
		ProductsModule,
		ConnectionsModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(),
		TranslateModule.forRoot(translateSettings)
	],
	bootstrap: [IonicApp],
	entryComponents: [MyApp],
	providers: providers()
})
export class AppModule {
}
