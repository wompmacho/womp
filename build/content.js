!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}({0:function(t,e,n){"use strict";var o=class{get(t=null){return new Promise((e,n)=>{const o="string"==typeof t||"number"==typeof t;chrome.storage[this.store].get(t,n=>{e(o?n[t]:n)})})}getBytesInUse(t=null){return new Promise((e,n)=>{chrome.storage[this.store].getBytesInUse(t,e)})}set(t){return new Promise((e,n)=>{chrome.storage[this.store].set(t,e)})}remove(t){return new Promise((e,n)=>{chrome.storage[this.store].remove(t,e)})}clear(){return new Promise((t,e)=>{chrome.storage[this.store].clear(t)})}listen(t,e){"function"==typeof t&&(e=t,t=null),chrome.storage.onChanged.addListener((n,o)=>{if(o===this.store)if(null!==t){if(n.hasOwnProperty(t)){const o=n[t].oldValue||null,r=n[t].newValue||null;e(o,r)}}else e(n)})}};new class extends o{constructor(){super(),this.store="local"}};const r=new class extends o{constructor(){super(),this.store="sync"}};new class{create(t=null,e){return"object"==typeof t&&(e=t,t=null),new Promise((n,o)=>{chrome.notifications.create(t,e,n)})}update(t,e){return new Promise((n,o)=>{chrome.notifications.update(t,e,n)})}clear(t){return new Promise((e,n)=>{chrome.notifications.clear(t,e)})}getAll(){return new Promise((t,e)=>{chrome.notifications.getAll(t)})}getPermissionLevel(){return new Promise((t,e)=>{chrome.notifications.getPermissionLevel(t)})}listen(t,e=null,n){if("function"==typeof e&&(n=e,e=null),"onPermissionLevelChanged"===t||"onShowSettings"===t)return this._nonNotificationIdListen(t,n);const o=null!==e?(t,...o)=>{e===t&&n(t,...o)}:n;chrome.notifications[t].addListener(o)}_nonNotificationIdListen(t,e){chrome.notifications[t].addListener(e)}};var i=n(1);e.a=new class extends i.EventEmitter{constructor(){super(),this._data=null,this.state="initiating",this._init()}async _init(){const t=await r.get();this._initListener(),this._data=t,this.state="ready",this.emit(this.state)}_initListener(){r.listen(t=>{Object.keys(t).forEach(e=>{t[e].hasOwnProperty("newValue")?this._data[e]=t[e].newValue:console.error("No newValue in sync storge change")}),this.emit("change",this.data,t)})}set(t){return r.set(t)}get data(){return this._data}has(t){return this.data.hasOwnProperty(t)}}},1:function(t,e,n){"use strict";var o,r="object"==typeof Reflect?Reflect:null,i=r&&"function"==typeof r.apply?r.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};o=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var a=Number.isNaN||function(t){return t!=t};function s(){s.init.call(this)}t.exports=s,t.exports.once=function(t,e){return new Promise((function(n,o){function r(){void 0!==i&&t.removeListener("error",i),n([].slice.call(arguments))}var i;"error"!==e&&(i=function(n){t.removeListener(e,r),o(n)},t.once("error",i)),t.once(e,r)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function l(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function h(t){return void 0===t._maxListeners?s.defaultMaxListeners:t._maxListeners}function d(t,e,n,o){var r,i,a;if(l(n),void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),i=t._events),a=i[e]),void 0===a)a=i[e]=n,++t._eventsCount;else if("function"==typeof a?a=i[e]=o?[n,a]:[a,n]:o?a.unshift(n):a.push(n),(r=h(t))>0&&a.length>r&&!a.warned){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=a.length,function(t){console&&console.warn&&console.warn(t)}(s)}return t}function u(t,e,n){var o={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=function(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(o);return r.listener=n,o.wrapFn=r,r}function m(t,e,n){var o=t._events;if(void 0===o)return[];var r=o[e];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(r):f(r,r.length)}function p(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function f(t,e){for(var n=new Array(e),o=0;o<e;++o)n[o]=t[o];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");c=t}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},s.prototype.getMaxListeners=function(){return h(this)},s.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var o="error"===t,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var c=r[t];if(void 0===c)return!1;if("function"==typeof c)i(c,this,e);else{var l=c.length,h=f(c,l);for(n=0;n<l;++n)i(h[n],this,e)}return!0},s.prototype.addListener=function(t,e){return d(this,t,e,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(t,e){return d(this,t,e,!0)},s.prototype.once=function(t,e){return l(e),this.on(t,u(this,t,e)),this},s.prototype.prependOnceListener=function(t,e){return l(e),this.prependListener(t,u(this,t,e)),this},s.prototype.removeListener=function(t,e){var n,o,r,i,a;if(l(e),void 0===(o=this._events))return this;if(void 0===(n=o[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete o[t],o.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(r=-1,i=n.length-1;i>=0;i--)if(n[i]===e||n[i].listener===e){a=n[i].listener,r=i;break}if(r<0)return this;0===r?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,r),1===n.length&&(o[t]=n[0]),void 0!==o.removeListener&&this.emit("removeListener",t,a||e)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(t){var e,n,o;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var r,i=Object.keys(n);for(o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(o=e.length-1;o>=0;o--)this.removeListener(t,e[o]);return this},s.prototype.listeners=function(t){return m(this,t,!0)},s.prototype.rawListeners=function(t){return m(this,t,!1)},s.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},s.prototype.listenerCount=p,s.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},10:function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.i,o,""]]);n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},11:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".chat-color-0 #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-1 #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-2 #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-3 #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-4 #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-5 #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-6 #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-7 #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-8 #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-9 #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-A #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-B #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-C #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-D #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-E #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-F #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-G #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-H #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-I #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-J #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-K #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-L #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-M #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-N #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-O #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-P #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-Q #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-R #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-S #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-T #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-U #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-V #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-W #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-X #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-Y #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-Z #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-a #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-b #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-c #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-d #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-e #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-f #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-g #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-h #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-i #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-j #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-k #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-l #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-m #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-n #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-o #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-p #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-q #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-r #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-s #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-t #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-u #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-v #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-w #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-x #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-y #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-z #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-- #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-_ #content #author-name {\n  color: #ff5722 !important;\n}\n.AuthorFix #author-photo.yt-live-chat-text-message-renderer img.yt-img-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50%;\n  height: 1.5em;\n  width: 1.5em;\n  vertical-align: sub;\n}\n.AuthorFix #content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.AuthorFix #timestamp.yt-live-chat-text-message-renderer {\n  font-size: 1em;\n  display: inline-block;\n  vertical-align: middle;\n}\n.showTimeStamp #timestamp.yt-live-chat-text-message-renderer {\n  display: inline-block;\n}\n.Emote img {\n  height: 1.75em;\n  align-self: center;\n  vertical-align: sub;\n  display: inline-block;\n  vertical-align: middle;\n}\nemote_div:hover {\n  background-size: 100%;\n  background-color: rgba(255,255,255,0.6);\n}\n.hideElement {\n  display: none !important;\n}\n.set-background-color-one {\n  background-color: #303030 !important;\n}\n.set-background-color-two {\n  background-color: transparent !important;\n}\n.setTwitchColors {\n  text-shadow: 0 0 1px #000, 0 0 2px #000 !important;\n  background: #18181b !important;\n  font-family: 'Roboto' !important;\n  font-size: 1.3rem !important;\n  line-height: 1.5em !important;\n  color: #fafafa !important;\n}\n.setTwitchColors #timestamp.yt-live-chat-text-message-renderer {\n  display: none;\n}\n.setTwitchColors yt-live-chat-author-chip[is-highlighted] #author-name.owner.yt-live-chat-author-chip,\n.setTwitchColors #author-name.owner.yt-live-chat-author-chip {\n  background-color: transparent;\n  color: #008000;\n}\n.setTwitchColors yt-live-chat-author-chip[is-highlighted] #author-name.yt-live-chat-author-chip {\n  background-color: transparent;\n}\n.emoteDivider {\n  width: 60vw;\n  border: 2px solid #d3d3d3;\n  border-radius: 5px;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.emotePopUpText {\n  margin-bottom: 2%;\n}\n.popup {\n  background-color: #202020;\n  position: absolute;\n  top: 15%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 70%;\n  width: 75%;\n  z-index: 999;\n  text-align: center;\n  border-radius: 5px;\n  border: #303030 1px solid;\n  font-size: 1em;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 1%;\n  padding-top: 2%;\n}\n.emoteButton {\n  background-color: rgba(255,255,255,0.1);\n  background-image: url(\"https://cdn.frankerfacez.com/emoticon/447885/4\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 80% 80%;\n  width: var(--yt-live-chat-32px-icon-button_-_width);\n  height: var(--yt-live-chat-32px-icon-button_-_height);\n  padding: var(--yt-live-chat-32px-icon-button_-_padding);\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n}\n.emoteButton:hover {\n  background-color: rgba(255,255,255,0.8);\n}\n.emoteButton:focus {\n  outline: 0;\n}\n.body_Fix {\n  height: 100% !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n}\n.theater_wrapper_fix {\n  padding: 2px;\n  background-color: #1e1e1e;\n  position: fixed;\n  z-index: 900 !important;\n  height: 100vh !important;\n  width: 100vw !important;\n}\n.movie_player_fix {\n  height: 100vh;\n  position: absolute;\n  width: calc(100vw - 25vw);\n}\n.movie_player_fix video {\n  left: 0 !important;\n  top: 0 !important;\n  height: 100vh !important;\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix #html5-video-player {\n  top: 0 !important;\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-title {\n  color: rgba(255,255,255,0.8) !important;\n}\n.movie_player_fix .ytp-title-channel {\n  all: unset;\n}\n.movie_player_fix .ytp-gradient-top {\n  max-width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-chrome-bottom {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .html5-endscreen {\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-chapter-hover-container {\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-gradient-bottom {\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-iv-video-content {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .ytp-player-content.ytp-iv-player-content {\n  width: calc(100vw - 25vw) !important;\n  left: -12px !important;\n  bottom: 10vh !important;\n}\n.movie_player_fix .ytp-upnext.ytp-player-content.ytp-upnext-autoplay-paused.ytp-suggestion-set {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .ytp-bezel-text-hide {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .ytp-spinner {\n  left: 40% !important;\n}\n.movie_player_fix .ytp-cued-thumbnail-overlay {\n  width: calc(100vw - 25vw) !important;\n}\n.info_contents_fix {\n  z-index: 901 !important;\n  height: 80px;\n  top: 0;\n  position: absolute !important;\n  width: calc(100vw - 25vw) !important;\n}\n.info_contents_fix ytd-video-primary-info-renderer {\n  padding: 1rem;\n  border-bottom: none;\n}\n.chat_frame_fix {\n  height: 100vh !important;\n  width: calc(calc(100vw - 75vw) - 1px) !important;\n  position: absolute !important;\n  right: 0px !important;\n  top: 0px !important;\n  border: 1px solid #4e4e4e;\n}\n",""])},3:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},34:function(t,e,n){"use strict";n.r(e),n(10);var o=n(0),r=class{constructor({code:t,url:e}){this.code=t,this.url=e}get html(){return`\n      <span class="Emote">\n        <img title="${this.code}" src="${this.url}" alt="${this.code}">\n      </span>\n    `.trim()}},i=new class{constructor(){this.dictionary=new Map,this.twitch_Dictionary=new Map,this.bttv_Dictionary=new Map,this.franker_Dictionary=new Map,this.specialEmotesDictionary=new Map,this.init=this.init.bind(this)}init(){return Promise.all([o.a.data.options.enableBTTVEmotes&&this.loadBTTVEmote(),o.a.data.options.enableFrankerEmotes&&this.loadFrankerEmotes(),o.a.data.options.enableTwitchEmotes&&this.loadTwitchEmotes(),this.specialEmotes()])}get(t){return this.dictionary.get(t)}set(t,e){return this.dictionary.set(t,new r(e))}has(t){return this.dictionary.has(t)}bbtv_ToDict(t){for(let e=0;e<t.length;e++){const{emote:n,total:o}=t[e],i=`https://cdn.betterttv.net/emote/${n.id}/3x`;this.dictionary.set(n.code,new r({code:n.code,url:i})),this.bttv_Dictionary.set(n.code,new r({code:n.code,url:i}))}}bbtv_cached_ToDict(t){for(let e=0;e<t.length;e++){const{id:n,code:o}=t[e],i=`https://cdn.betterttv.net/emote/${n}/3x`;this.dictionary.set(o,new r({code:o,url:i})),this.bttv_Dictionary.set(o,new r({code:o,url:i}))}}async loadBTTVEmote(){const t=await fetch("https://api.betterttv.net/3/emotes/shared/top?limit=100");var e=await t.json();const n=await fetch("https://api.betterttv.net/3/emotes/shared/trending?limit=100");var o=await n.json();const r=await fetch("https://api.betterttv.net/3/cached/emotes/global");var i=await r.json();this.bbtv_ToDict(e),this.bbtv_ToDict(o),this.bbtv_cached_ToDict(i)}frankerToDict(t){for(let n=0;n<t.emoticons.length;n++){const{name:o,urls:i}=t.emoticons[n];var e;e=null!=i[4]?i[4]:null!=i[2]?i[2]:i[1],this.dictionary.set(o,new r({code:o,url:e})),this.franker_Dictionary.set(o,new r({code:o,url:e}))}}async loadFrankerEmotes(){const t=await fetch("https://api.frankerfacez.com/v1/emoticons?sort=count-desc");var e=await t.json(),n=e._links.next;const o=await fetch(n);var r=await o.json();this.frankerToDict(e),this.frankerToDict(r)}twitchToDict(t){for(let e=0;e<t.emotes.length;e++){const{code:n,id:o}=t.emotes[e],i=`https://static-cdn.jtvnw.net/emoticons/v1/${o}/3.0`;this.dictionary.set(n,new r({code:n,url:i})),this.twitch_Dictionary.set(n,new r({code:n,url:i}))}}async loadTwitchEmotes(){const t=await fetch("https://api.twitchemotes.com/api/v4/channels/0");var e=await t.json();this.twitchToDict(e)}specialEmotes(){var t={emotes:[{code:"wompWTF",url:"https://static-cdn.jtvnw.net/emoticons/v1/301653066/3.0"},{code:"wompISeeYou",url:"https://static-cdn.jtvnw.net/emoticons/v1/301506153/3.0"},{code:"wompCry",url:"https://static-cdn.jtvnw.net/emoticons/v1/301506193/3.0"},{code:"BabyCorona",url:"https://static-cdn.jtvnw.net/emoticons/v1/301629296/3.0"},{code:"LEL",url:"https://static-cdn.jtvnw.net/emoticons/v1/431249/3.0"}]};for(let e=0;e<t.emotes.length;e++){const{code:n,url:o}=t.emotes[e];this.dictionary.set(n,new r({code:n,url:o})),this.specialEmotesDictionary.set(n,new r({code:n,url:o}))}}},a=0,s=class{constructor(t){this.node=t,this.id=this.node.id,this.hasEmotes=null,this.observer=null,this.parsedText="",this.parseText(),this.setDefaultSelections(),this.hasEmotes&&(this.node.setAttribute("message-id",this.id),this.setHtml(),this.watch())}get textNode(){const t=this.node.querySelector("#message");return{node:t,text:t.innerText}}parseText(){const t=this.textNode.text.split(" ");for(let e=0,n=t.length;e<n;e++){const n=this.parseIllegalCharcters(t[e]),o=i.get(n);void 0===o?this.parsedText+=n+" ":(this.hasEmotes=!0,this.parsedText+=o.html+" ")}}watch(){this.observer=new MutationObserver(t=>{let e=!1;t.forEach(t=>{if(void 0!==t.removedNodes&&!(t.removedNodes.length<=0))for(let n=0,o=t.removedNodes.length;n<o;n++){const o=t.removedNodes[n];"string"==typeof o.className&&0!=~o.className.indexOf("Emote")&&(e=!0)}}),e&&document.body.contains(this.node)&&this.setHtml()}),this.observer.observe(this.node,{childList:!0,attributes:!1,characterData:!1,subtree:!0})}setHtml(){this.textNode.node.innerHTML=this.parsedText}parseIllegalCharcters(t){return t.replace("\ufeff","").trim()}destroy(){null!==this.observer&&(this.observer.disconnect(),this.observer=null)}setDefaultSelections(){var t=document.querySelector("yt-live-chat-viewer-engagement-message-renderer");if(o.a.data.options.hideWelcomBanner&&t.classList.add("hideElement"),o.a.data.options.kappaFix){var e=document.querySelectorAll("#message.yt-live-chat-text-message-renderer .emoji.yt-live-chat-text-message-renderer");for(let t=0;t<e.length;t++){const n=e[t];if(":full_moon_face:"==n.getAttribute("shared-tooltip-text")){const t=document.createElement("span");t.classList.add("Emote"),t.innerHTML='<img src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0" alt="kappa">',n.parentNode.replaceChild(t,n)}}}o.a.data.options.setAuthorColor&&"owner"!==this.node.getAttribute("author-type")&&this.setAuthorColor();var n=this.node.querySelector("#author-photo");o.a.data.options.hideAuthorIcons&&n.classList.add("hideElement"),this.node.querySelector("#timestamp"),o.a.data.options.showTimeStamp&&this.node.classList.add("showTimeStamp"),this.node.querySelector("#author-name").addEventListener("click",(function(){var t=document.querySelector("#input.yt-live-chat-text-input-field-renderer"),e=document.querySelector("#label.yt-live-chat-text-input-field-renderer");t.innerText="@"+this.innerText,t.innerText.length,t.focus(),e.innerText=""}));var r=o.a.data.options.textSizeSlider;o.a.data.options.allowTextSlider&&(this.node.setAttribute("style","font-size:"+r+"px!important"),this.node.classList.add("AuthorFix")),o.a.data.options.setTwitchColors&&(this.node.classList.add("setTwitchColors"),n.classList.add("hideElement")),o.a.data.options.alternateLineColor&&this.alternateLineColor()}setAuthorColor(){let t=null;if(this.node.hasChildNodes&&this.node.contains(this.node.querySelector("#author-photo"))&&null!=this.node.querySelector("#author-photo").querySelector("img").src){t=this.node.querySelector("#author-photo").querySelector("img").src;const e=/\/-([A-Za-z-_\d])/;try{if(null!==e.exec(t)){const n=e.exec(t)[1];this.node.classList.add("chat-color-"+n)}}catch(e){console.log(e),console.log(t)}}}alternateLineColor(){a%2==0&&this.node.classList.add("set-background-color-one"),a%2!=0&&this.node.classList.add("set-background-color-two"),a++}removelternateLineColor(){this.node.classList.remove("set-background-color-one"),this.node.classList.remove("set-background-color-two")}},c=n(1),l=n.n(c),h=class extends l.a{constructor(){super(),this.target=document.querySelector("head > title"),this.observer=null,this.init()}init(){this.observer=new MutationObserver(t=>{t.forEach(t=>{"YouTube Gaming"===t.target.innerText?this.emit("main"):this.emit("change")})}),null!==this.target&&this.observer.observe(this.target,{childList:!0,attributes:!1,characterData:!0,subtree:!0})}};const d=()=>{const t=document.querySelector(".ytp-time-display"),e=document.querySelector("yt-live-chat-app"),n=document.querySelector(".yt-live-chat-renderer-0"),o=t&&t.classList.contains("ytp-live"),r=document.body.contains(e)||document.body.contains(n);return o||r};let u=null;const m=document.createElement("theater_wrapper");document.body.appendChild(m);var p=!1;function f(){p?(console.log("enterTheater"),p=!1,v()):document.getElementById("player-theater-container").contains(document.getElementById("player-container"))?(console.log("exitTheater"),function(){const t=document.getElementById("movie_player"),e=document.getElementById("chatframe"),n=document.getElementById("info-contents"),o=document.getElementById("player-container"),r=document.getElementById("player-container-inner"),i=document.getElementById("chat"),a=document.getElementById("meta");document.getElementById("masthead-container").hidden=!1,m.classList.remove("theater_wrapper_fix"),t.classList.remove("movie_player_fix"),e.classList.remove("chat_frame_fix"),n.classList.remove("info_contents_fix"),o.prepend(t),r.prepend(o),i.prepend(e),a.before(n),document.body.classList.remove("body_Fix")}()):(console.log("enterTheater"),v())}function v(){const t=document.getElementById("movie_player"),e=document.getElementById("chatframe"),n=document.getElementById("info-contents");document.getElementById("masthead-container").hidden=!0,m.classList.add("theater_wrapper_fix"),t.classList.add("movie_player_fix"),e.classList.add("chat_frame_fix"),n.classList.add("info_contents_fix"),m.append(n),m.append(t),m.append(e),document.body.classList.add("body_Fix")}o.a.on("ready",()=>{u=new class{constructor(){this.chatWatcher=null,this.chatScroller=null,this.routeWatcher=null,this.onRouteChange=this.onRouteChange.bind(this),this.load()}load(){this.routeWatcher=new h,this.routeWatcher.on("change",this.onRouteChange),this.onRouteChange()}onRouteChange(){d()&&(!!document.querySelector("ytg-app")||!!window.frameElement||!window.frameElement&&window.location!=window.parent.location||!window.frameElement&&!!window.location.href.includes("is_popout=1")&&!!window.location.href.includes("popout=1"))&&this.init(),d()&&o.a.data.options.theaterModeFix&&null!=document.getElementById("player-container")&&null!=document.getElementById("player-theater-container")&&function(){var t=document.querySelector("button.ytp-size-button.ytp-button");t&&(document.getElementById("player-theater-container").contains(document.getElementById("player-container"))&&(p=!0,f()),t.addEventListener("click",f,!1))}()}init(){this.chatWatcher=new class{constructor(){this.watchChat=this.watchChat.bind(this),this._chatContainer=null,this._observer=null,this.messages=new Map}init(){return new Promise((t,e)=>{this.getChatContainer().then(i.init).then(()=>{this.addEmotePopup(),this.watchChat(),this.parsePreloadedMessages()})})}getChatContainer(){const t=(e,n)=>{this._chatContainer=document.querySelector("#items.style-scope.yt-live-chat-item-list-renderer"),null!==this._chatContainer?e():setTimeout(t.bind(this,e,n),250)};return new Promise(t)}parsePreloadedMessages(){const t=this._chatContainer.children;for(let e=t.length-1;e>=0;e--){const n=t[e];this.isMessageNode(n)&&new s(n)}}watchChat(){console.log("Chat observer started"),this._observer=new MutationObserver(t=>{t.forEach(t=>{const{addedNodes:e,removedNodes:n}=t;if(void 0!==e&&e.length>0)for(let t=0,n=e.length-1;t<=n;t++){const n=e[t];this.isMessageNode(n)&&this.onNewMessage(n)}if(void 0!==n&&n.length>0)for(let t=0,e=n.length-1;t<=e;t++){const e=n[t];this.isMessageNode(e)&&this.isObservedMessage(e)&&this.onObservedMessageRemoved(e)}})}),this._observer.observe(this._chatContainer,{childList:!0,attributes:!1,characterData:!1,subtree:!1})}onNewMessage(t){const e=new s(t);e.hasEmotes&&this.messages.set(e.id,e)}onObservedMessageRemoved(t){const e=t.getAttribute("message-id"),n=this.messages.get(e);null!=n&&n.destroy(),this.messages.delete(e)}isMessageNode(t){return"YT-LIVE-CHAT-TEXT-MESSAGE-RENDERER"===t.tagName}isObservedMessage(t){return null!==t.getAttribute("message-id")}addEmotePopup(){const t=document.createElement("button");t.classList.add("emoteButton"),t.textContent="";const e=document.getElementById("action-buttons");e.parentNode.insertBefore(t,e);const n=document.createElement("div");function r(t){var e=document.createElement("hr");e.classList.add("emoteDivider");for(let e=0;e<t.length;e++){const r=t[e];var o=document.createElement("emote_div");o.innerHTML=i.get(r).html,n.appendChild(o)}n.appendChild(e)}n.classList.add("popup"),n.classList.add("hideElement");var a=document.createElement("h2");a.textContent="BTTV",a.classList.add("emotePopUpText");var s=document.createElement("h2");s.textContent="FrankerFacez",s.classList.add("emotePopUpText");var c=document.createElement("h2");c.textContent="Twitch",c.classList.add("emotePopUpText");let l=null;r(l=Array.from(i.specialEmotesDictionary.keys())),o.a.data.options.enableBTTVEmotes&&(n.appendChild(a),r(l=Array.from(i.bttv_Dictionary.keys()))),o.a.data.options.enableFrankerEmotes&&(n.appendChild(s),r(l=Array.from(i.franker_Dictionary.keys()))),o.a.data.options.enableTwitchEmotes&&(n.appendChild(c),r(l=Array.from(i.twitch_Dictionary.keys()))),e.appendChild(n),t.addEventListener("click",(function(){n.classList.toggle("hideElement"),console.log("emote popup button clicked")}));var h=document.querySelector("#input.yt-live-chat-text-input-field-renderer"),d=document.querySelector("#label.yt-live-chat-text-input-field-renderer");function u(){h.textContent+=this.alt+" ",h.focus(),d.textContent="",n.classList.toggle("hideElement"),console.log(this.alt+" emote button selected")}var m=document.getElementsByTagName("img");for(let t=0;t<m.length;t++)m[t].addEventListener("click",u,!1);console.log(l.length+1+" Emotes Added")}},this.chatWatcher.init(),this.chatScroller=new class{constructor(){this.scroll=this.scroll.bind(this),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this.scroller=null,this.interval=null}init(){this.getScroller().then(()=>{this.scroller.addEventListener("mouseenter",this.stop),this.start()})}start(){this.interval=setInterval(this.scroll,250)}stop(){clearInterval(this.interval)}scroll(){this.scroller.scrollTop=9999}getScroller(){const t=(e,n)=>{this.scroller=document.getElementById("item-scroller"),null!==this.scroller?e():setTimeout(t.bind(this,e,n),250)};return new Promise(t)}},this.chatScroller.init(),o.a.data.options.setLiveChat&&document.getElementsByClassName("yt-simple-endpoint style-scope yt-dropdown-menu").item(1).click(),console.log("INIT")}}})},4:function(t,e,n){var o={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}((function(){return window&&document&&document.all&&!window.atob})),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),a=null,s=0,c=[],l=n(5);function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function u(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,n);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function p(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=n.nc;o&&(t.attrs.nonce=o)}return f(e,t.attrs),u(t,e),e}function f(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function v(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=s++;n=a||(a=p(e)),o=g.bind(null,n,c,!1),r=g.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",f(e,t.attrs),u(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=l(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return h(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}for(t&&h(d(t,e),e),i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},5:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}}});