webpackJsonp([1,4],{342:function(t,e){function r(t){throw new Error("Cannot find module '"+t+"'.")}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=342},343:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(431),n=r(0),i=r(453),a=r(452);i.a.production&&r.i(n.a)(),r.i(o.a)().bootstrapModule(a.a)},451:function(t,e,r){"use strict";var o=r(0);r.d(e,"a",function(){return a});var n=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.title="Code Wars",this.result="",this.highscore=0,this.games=0}return t.prototype.fight=function(){var t=Math.floor(3*Math.random()+1);switch(this.games++,t){case 1:this.result="you won!",this.highscore++;break;case 2:this.result="you lost",this.highscore--,this.highscore<1&&(this.result="game over",this.games=0);break;default:this.result="tie game"}},t=n([r.i(o.U)({selector:"cwa-root",template:r(606),styles:[r(605)]}),i("design:paramtypes",[])],t)}()},452:function(t,e,r){"use strict";var o=r(191),n=r(0),i=r(421),a=r(427),c=r(451);r.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return t=s([r.i(n.b)({declarations:[c.a],imports:[o.a,i.a,a.a],providers:[],bootstrap:[c.a]}),f("design:paramtypes",[])],t)}()},453:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var o={production:!0}},605:function(t,e){t.exports=""},606:function(t,e){t.exports='<h1>\n  {{title}}\n</h1>\nScore: {{highscore}}<br/>\nResult: {{result}}<br/>\nGames Played: {{games}}<br/>\n<button (click)="fight()">Fight</button>'},618:function(t,e,r){t.exports=r(343)}},[618]);