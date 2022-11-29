import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  encode() {

    // let keyString = 'w9z$C&F)J@McQfTj';
    // const data =
    //   'a9dc324f2ffaf3199a462642a6e915bd7842e55fa2d57527865226b6d01bfb492adcbbf9305c31b904bd29226dcad5f5';
    // const iv = CryptoJS.enc.Hex.parse(data.substr(0, 16));
    // const ct = CryptoJS.enc.Hex.parse(data.substr(16));
    // // const key = CryptoJS.enc.Utf8.parse(keyS)

    // const bytes = CryptoJS.AES.decrypt(ct.toString(), keyString, { iv: iv });
    // console.log('Result : ' + bytes.toString(CryptoJS.enc.Base64));





// WORK SIMPLE BASIC EXAMPLE FOR VICTOR
    
    // let data = 'Taras';
    // let keyString = 'w9z$C&F)J@McQfTj';
    // // Encrypt
    // var ciphertext = CryptoJS.AES.encrypt(data, keyString).toString();
    // console.log(ciphertext);

    // // Decrypt
    // var bytes = CryptoJS.AES.decrypt(ciphertext, keyString);
    // var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    // console.log(decryptedData);
  }
}
