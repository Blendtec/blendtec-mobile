import { Injectable } from '@angular/core';
import { Alert, AlertController, Toast, ToastController } from 'ionic-angular';
import { FirebaseService } from './firebase.service';

@Injectable()
export class LogService {

	constructor(private _toastCtrl: ToastController,
				private _alertCtrl: AlertController,
				private _firebaseSrvc: FirebaseService) {
	}

	public log(...args: any[]): void {
		console.log(args);
	}

	public error(message: string, data?: any): Promise<void> {
		this._firebaseSrvc.logError(message);
		console.error(message, data);
		let alert: Alert = this._alertCtrl.create({
			title: 'Error',
			subTitle: message,
			buttons: ['Dismiss']
		});
		return alert.present();
	}

	public success(message: string, duration?: number, position?: string): Promise<void> {
		console.log(message);
		return this.toast(message, duration, position);
	}

	public warning(message: string, data?: any, duration?: number, position?: string): Promise<void> {
		console.warn(message, data);
		return this.toast(message, duration, position);
	}

	private toast(message: string, duration?: number, position?: string): Promise<void> {
		let toast: Toast = this._toastCtrl.create({
			message: message,
			duration: duration || 3000,
			position: position || 'top'
		});
		return toast.present();
	}
}