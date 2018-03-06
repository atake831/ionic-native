import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Line Login
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { LineLogin } from '@ionic-native/line-login';
 *
 *
 * constructor(private lineLogin: LineLogin) { }
 *
 * ...
 *
 *
 * this.lineLogin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'LineLogin',
  plugin: 'cordova-plugin-LineLogin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.LineLogin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/atake831/cordova-plugin-LineLogin', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class LineLogin extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  login(): Promise<any> {
    return;
  }

  @Cordova()
  logout(): Promise<any> {
    return;
  }

  @Cordova()
  getProfile(): Promise<any> {
    return;
  }
}
