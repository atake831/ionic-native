import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Repro
 * @description
 *
 * @usage
 * ```typescript
 * import { Repro } from '@ionic-native/repro';
 *
 *
 * constructor(private repro: Repro) { }
 *
 * ...
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'Repro',
  plugin: 'repro-cordova-plugin',
  pluginRef: 'Repro',
  repo: 'https://github.com/reproio/repro-cordova-plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Repro extends IonicNativePlugin {

  /**
   * Setup Repro
   */
  @Cordova()
  setup(key: string): Promise<any> {
    return;
  }

  /**
   * setLogLevel
   */
  @Cordova()
  setLogLevel(logLevel: any): Promise<any> {
    return;
  }

  /**
   * startRecording
   */
  @Cordova()
  startRecording(): Promise<any> {
    return;
  }

  /**
   * stopRecording
   */
  @Cordova()
  stopRecording(): Promise<any> {
    return;
  }

  /**
   * pauseRecording
   */
  @Cordova()
  pauseRecording(): Promise<any> {
    return;
  }

  /**
   * resumeRecording
   */
  @Cordova()
  resumeRecording(): Promise<any> {
    return;
  }

  /**
   * maskWithRect
   */
  @Cordova()
  maskWithRect(key: string, x: number, y: number, width: number, height: number): Promise<any> {
    return;
  }

  /**
   * orientationChangeListener
   */
  @Cordova()
  orientationChangeListener(key: string): Promise<any> {
    return;
  }

  /**
   * maskFullScreen
   */
  @Cordova()
  maskFullScreen(key: string): Promise<any> {
    return;
  }

  /**
   * unmask
   */
  @Cordova()
  unmask(key: string): Promise<any> {
    return;
  }

  /**
   * setUserID
   */
  @Cordova()
  setUserID(userId: string): Promise<any> {
    return;
  }

  /**
   * setStringUserProfile
   */
  @Cordova()
  setStringUserProfile(key: string, value: string): Promise<any> {
    return;
  }

  /**
   * setIntUserProfile
   */
  @Cordova()
  setIntUserProfile(key: string, value: string): Promise<any> {
    return;
  }

  /**
   * setDoubleUserProfile
   */
  @Cordova()
  setDoubleUserProfile(key: string, value: string): Promise<any> {
    return;
  }

  /**
   * setDateUserProfile
   */
  @Cordova()
  setDateUserProfile(key: string, value: Date): Promise<any> {
    return;
  }

  /**
   * track
   */
  @Cordova()
  track(eventName: string): Promise<any> {
    return;
  }

  /**
   * trackWithProperties
   */
  @Cordova()
  trackWithProperties(eventName: string, properties: any): Promise<any> {
    return;
  }

  /**
   * trackViewContent
   */
  @Cordova()
  trackViewContent(eventName: string, properties: any): Promise<any> {
    return;
  }

  /**
   * trackSearch
   */
  @Cordova()
  trackSearch(properties: any): Promise<any> {
    return;
  }

  /**
   * trackAddToCart
   */
  @Cordova()
  trackAddToCart(contentID: string, properties: any): Promise<any> {
    return;
  }

  /**
   * trackAddToWishlist
   */
  @Cordova()
  trackAddToWishlist(properties: any): Promise<any> {
    return;
  }

  /**
   * trackInitiateCheckout
   */
  @Cordova()
  trackInitiateCheckout(properties: any): Promise<any> {
    return;
  }

  /**
   * trackAddPaymentInfo
   */
  @Cordova()
  trackAddPaymentInfo(properties: any): Promise<any> {
    return;
  }

  /**
   * trackPurchase
   */
  @Cordova()
  trackPurchase(contentID: string, properties: any): Promise<any> {
    return;
  }

  /**
   * trackShare
   */
  @Cordova()
  trackShare(properties: any): Promise<any> {
    return;
  }

  /**
   * trackLead
   */
  @Cordova()
  trackLead(properties: any): Promise<any> {
    return;
  }

  /**
   * trackCompleteRegistration
   */
  @Cordova()
  trackCompleteRegistration(properties: any): Promise<any> {
    return;
  }

  /**
   * setPushDeviceToken
   */
  @Cordova()
  setPushDeviceToken(deviceToken: any): Promise<any> {
    return;
  }

  /**
   * enablePushNotification
   */
  @Cordova()
  enablePushNotification(senderId: any): Promise<any> {
    return;
  }

  /**
   * showInAppMessage
   */
  @Cordova()
  showInAppMessage(): Promise<any> {
    return;
  }

  /**
   * disableInAppMessageOnActive
   */
  @Cordova()
  disableInAppMessageOnActive(): Promise<any> {
    return;
  }

  /**
   * getUserID
   */
  @Cordova()
  getUserID(): Promise<any> {
    return;
  }

  /**
   * getDeviceID
   */
  @Cordova()
  getDeviceID(): Promise<any> {
    return;
  }

  /**
   * trackNotificationOpened
   */
  @Cordova()
  trackNotificationOpened(notificationId: any): Promise<any> {
    return;
  }
}
