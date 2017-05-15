import { Injectable, OnInit } from '@angular/core';
import * as _ from 'lodash';
declare var localStorage: any;

@Injectable()
export class DatabaseService {

  private DBConfig = {
    name: 'db_name',
    prefix: 'v1',
    secret: 'rn23k=23-1p2[Fwee@£$wFR31Q',
    lsKey: '!app!pad!#core'
  };

  public collection;
  public selectedItem;

  constructor() { }

  public connect() {
    this.logger('Initializing the app', 1, 1);
    this.getDB();

    this.logger(this.collection);
  }

  public getByID(id): any {
    return _.find(this.collection, item => {
      return item['id'] === id;
    });
  }

  public save(item): void {
    localStorage.clear(this.DBConfig.lsKey);
    this.saveDB(JSON.stringify(item));


    // check if item already exists in db

          // if it exists, then update valies

          // else, insert in database

    // run saveDB()? synchronise data
  }

  private saveDB(data): void {
    localStorage.setItem(this.DBConfig.lsKey, data);
  }

  private getDB(): void {
    this.collection = JSON.parse(localStorage.getItem(this.DBConfig.lsKey));
  }

  private logger(message: any, pre?: number, post?: number): void {
    if (typeof pre === 'number') {
      for (let i = 0; i < pre; i++) {
        console.log('');
      }
    }

    console.log('> ' + message);

    if (typeof post === 'number') {
      for (let i = 0; i < post; i++) {
        console.log('');
      }
    }
  }

  private encrypt(data: any): string {
    return this.Base64.encode(data);
  }

  private decrypt(data: string): any {
    return this.Base64.decode(data);
  }

  private Base64 = {
      _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function(e) {
          var t = "";
          var n, r, i, s, o, u, a;
          var f = 0;
          e = this.Base64._utf8_encode(e);
          while (f < e.length) {
              n = e.charCodeAt(f++);
              r = e.charCodeAt(f++);
              i = e.charCodeAt(f++);
              s = n >> 2;
              o = (n & 3) << 4 | r >> 4;
              u = (r & 15) << 2 | i >> 6;
              a = i & 63;
              if (isNaN(r)) {
                  u = a = 64
              } else if (isNaN(i)) {
                  a = 64
              }
              t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
          }
          return t
      },
      decode: function(e) {
          var t = "";
          var n, r, i;
          var s, o, u, a;
          var f = 0;
          e = e.replace(/[^A-Za-z0-9+/=]/g, "");
          while (f < e.length) {
              s = this._keyStr.indexOf(e.charAt(f++));
              o = this._keyStr.indexOf(e.charAt(f++));
              u = this._keyStr.indexOf(e.charAt(f++));
              a = this._keyStr.indexOf(e.charAt(f++));
              n = s << 2 | o >> 4;
              r = (o & 15) << 4 | u >> 2;
              i = (u & 3) << 6 | a;
              t = t + String.fromCharCode(n);
              if (u != 64) {
                  t = t + String.fromCharCode(r)
              }
              if (a != 64) {
                  t = t + String.fromCharCode(i)
              }
          }
          t = this.Base64._utf8_decode(t);
          return t
      },
      _utf8_encode: function(e) {
          e = e.replace(/rn/g, "n");
          var t = "";
          for (var n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n);
              if (r < 128) {
                  t += String.fromCharCode(r)
              } else if (r > 127 && r < 2048) {
                  t += String.fromCharCode(r >> 6 | 192);
                  t += String.fromCharCode(r & 63 | 128)
              } else {
                  t += String.fromCharCode(r >> 12 | 224);
                  t += String.fromCharCode(r >> 6 & 63 | 128);
                  t += String.fromCharCode(r & 63 | 128)
              }
          }
          return t
      },
      _utf8_decode: function(e) {
        var c1, c2, c3;
          var t = "";
          var n = 0;
          var r = c1 = c2 = 0;
          while (n < e.length) {
              r = e.charCodeAt(n);
              if (r < 128) {
                  t += String.fromCharCode(r);
                  n++
              } else if (r > 191 && r < 224) {
                  c2 = e.charCodeAt(n + 1);
                  t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                  n += 2
              } else {
                  c2 = e.charCodeAt(n + 1);
                  c3 = e.charCodeAt(n + 2);
                  t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                  n += 3
              }
          }
          return t;
      }
  }
}
