!function(t){var e={};function n(c){if(e[c])return e[c].exports;var r=e[c]={i:c,l:!1,exports:{}};return t[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(c,r,function(e){return t[e]}.bind(null,r));return c},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.regeneratorRuntime}()},function(t,e){function n(t,e,n,c,r,o,i){try{var a=t[o](i),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(c,r)}t.exports=function(t){return function(){var e=this,c=arguments;return new Promise((function(r,o){var i=t.apply(e,c);function a(t){n(i,r,o,a,u,"next",t)}function u(t){n(i,r,o,a,u,"throw",t)}a(void 0)}))}}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}t.exports=function(t,e,c){return e&&n(t.prototype,e),c&&n(t,c),t}},function(t,e,n){var c=n(12),r=n(13);t.exports=function(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var c=n(14);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}},function(t,e){!function(){t.exports=this.wp.editor}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,c){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,c)}t.exports=n},,,function(t,e,n){"use strict";n.r(e);var c=n(0),r=Object(c.createElement)("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"m56.898 44.301h-13.598v-4c0-3.5 2.6016-6.6016 6.1016-7h0.69922c3.8008 0 6.8008 3.1016 6.8008 6.8008zm-6.8984 6.3008h-0.30078c-1.1992 0.10156-2.1016 1-2.3008 2.1992-0.19922 1 0.19922 1.8984 0.89844 2.5l-0.69922 3.3984c-0.10156 0.39844 0.19922 0.69922 0.60156 0.69922h3.6016c0.39844 0 0.69922-0.39844 0.60156-0.69922l-0.69922-3.3008c0.60156-0.5 1-1.1992 1-2.1016-0.003906-1.4961-1.2031-2.6953-2.7031-2.6953zm-19.301-32.902c3.1016-1.8984 6.5-3.3008 9.8984-4.1992l1.5-9c0.30078-1.6992 1.6992-2.8984 3.3984-2.8984h9c1.6992 0 3.1016 1.1992 3.3984 2.8984l1.5 9c3.3984 0.89844 6.6016 2.1992 9.6992 4l7.3984-5.3008c1.3984-1 3.1992-0.80078 4.3984 0.30078l6.3984 6.3984c1.1992 1.1992 1.3984 3.1016 0.39844 4.5l-5.3008 7.3984c1.8008 3.1016 3.1992 6.3008 4 9.6992l9 1.5c1.6992 0.30078 2.8984 1.6992 2.8984 3.3984v9c0 1.6992-1.1992 3.1016-2.8984 3.3984l-9 1.5c-0.89844 3.3984-2.1992 6.6016-4 9.6992l5.3008 7.3984c1 1.3984 0.80078 3.3008-0.39844 4.5l-3.1992 3.1992-3.0898 3.3086c-1.1992 1.1992-3.1016 1.3984-4.5 0.39844l-7.3984-5.3008c-3 1.8008-6.1992 3.1016-9.5 3.8984l-1.5 9.1016c-0.30078 1.6992-1.6992 2.8984-3.3984 2.8984h-9c-1.6992 0-3.1016-1.1992-3.3984-2.8984l-1.5-8.8984c-3.3008-0.89844-6.6016-2.1992-9.6992-4l-7.5 5.3008c-1.3984 1-3.3008 0.80078-4.5-0.39844l-3.1055-3.1992-3.1992-3.1992c-1.1992-1.1992-1.3984-3.1016-0.39844-4.5l5.1992-7.3984c-1.8008-3-3.1992-6.3008-4.1016-9.6992l-9.1016-1.5c-1.6992-0.30078-2.8984-1.6992-2.8984-3.3984v-9c0-1.6992 1.1992-3.1016 2.8984-3.3984l8.8984-1.3984c0.89844-3.3008 2.1992-6.6016 4-9.6992l-5.3008-7.5c-1-1.3984-0.80078-3.3008 0.39844-4.5l6.3984-6.3984c1.1992-1.1992 3.1016-1.3984 4.5-0.39844zm3.8008 44.602c0 1.8008 1.3984 3.1992 3.1992 3.1992h24.5c1.8008 0 3.1992-1.3984 3.1992-3.1992v-14.801c0-1.8008-1.3984-3.1992-3.1992-3.1992h-0.10156v-4.1992c0-6.6992-5.3984-12.102-12.102-12.102h-0.5c-6.3945 0.30078-11.496 5.8984-11.496 12.398v3.8984h-0.30078c-1.8008 0-3.1992 1.3984-3.1992 3.1992z"})),o=n(3),i=n.n(o),a=n(4),u=n.n(a),l=n(6),s=n.n(l),f=n(7),p=n.n(f),b=n(8),g=n.n(b),v=n(5),h=n.n(v),d=n(9),m=n.n(d),y=n(1),O=n(10),j=n(2);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var _=wp.apiFetch;function x(){return _({path:"/adv-gut-zac/v1/block-setting"}).then((function(t){return t})).catch((function(t){return t}))}var w=function(t){m()(a,t);var e,n,r,o=(e=a,function(){var t,n=h()(e);if(S()){var c=h()(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return g()(this,t)});function a(t){var e;return s()(this,a),(e=o.call(this,t)).state={blockSetting:"initial blockSetting value",isLoading:!0,isSaving:!1,isEditing:!1},e}return p()(a,[{key:"updateSetting",value:(r=u()(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isSaving:!0}),t.next=3,n=this.state.blockSetting,_({path:"/adv-gut-zac/v1/block-setting",method:"POST",body:n}).then((function(t){return t})).catch((function(t){return t}));case 3:e=t.sent,this.setState({blockSetting:e,isSaving:!1,isEditing:!1});case 5:case"end":return t.stop()}var n}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"componentDidMount",value:(n=u()(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:e=t.sent,this.setState({blockSetting:e,isLoading:!1});case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var t=this,e=this.props.className;return this.state.isLoading?Object(c.createElement)("p",null,Object(c.createElement)(j.Spinner,null)," ",Object(y.__)("Loading","adv-gut-zac")):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(O.InspectorControls,null,Object(c.createElement)(j.PanelBody,{title:Object(y.__)("Global Block Setting","adv-gut-zac"),initialOpen:!0},Object(c.createElement)(j.PanelRow,null,this.state.isEditing||""===this.state.blockSetting?Object(c.createElement)("div",null,Object(c.createElement)(j.TextControl,{label:Object(y.__)("Enter a setting, if empty","adv-gut-zac"),value:this.state.blockSetting,onChange:function(e){t.state.isSaving||t.setState({blockSetting:e,isEditing:!0})}}),Object(c.createElement)(j.Button,{isPrimary:!0,disabled:this.state.isSaving,onClick:function(){t.updateSetting()}},Object(y.__)("Save Setting","adv-gut-zac"))," ",Object(c.createElement)(j.Button,{isDefault:!0,disabled:this.state.isSaving,onClick:u()(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isEditing:!1}),e.next=3,x();case 3:n=e.sent,t.setState({blockSetting:n});case 5:case"end":return e.stop()}}),e)})))},Object(y.__)("Cancel","adv-gut-zac"))):Object(c.createElement)(c.Fragment,null,Object(c.createElement)("p",null,Object(y.__)("Global setting saved in options table","adv-gut-zac")),Object(c.createElement)(j.Button,{isDefault:!0,onClick:function(){t.setState({isEditing:!0})}},Object(y.__)("Edit","adv-gut-zac")))))),Object(c.createElement)("div",{className:e},""===this.state.blockSetting?Object(c.createElement)("p",null,Object(y.__)("Please enter a block settings value in the block settings.","adv-gut-zac")):Object(c.createElement)("p",null,Object(y.__)("Global setting shown here => ","adv-gut-zac"),this.state.blockSetting)))}}]),a}(c.Component),k=n(11);Object(k.registerBlockType)("adv-gut-zac/with-global-settings",{title:Object(y.__)("With Global Settings","adv-gut-zac"),description:Object(y.__)("Example block with global block settings","adv-gut-zac"),category:"adv-gut-zac",icon:{background:"salmon",foreground:"white",src:r},keywords:[Object(y.__)("API Key","adv-gut-zac")],edit:function(t){return Object(c.createElement)(w,t)},save:function(t){return Object(c.createElement)("p",null,Object(y.__)("Show block global settings","adv-gut-zac"))}})}]);