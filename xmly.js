/*
脚本功能：喜马拉雅 会员
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2022-11-22
问题反馈：QQ+55749353
QQ会员群：暂无
TG反馈群：https://t.me/+tOQEwAEP0B81YzVl
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))mobile-play.+$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/xmly.js

[mitm]
hostname = *xima*

*/

;var encode_version = 'jsjiami.com.v5', nfodh = '__0xf02a6',  __0xf02a6=['AxfDhMK6AA==','w4RJK8Kbwos=','54q95p2c5Y+877ykNF7kvZjlrrLmnKjlvL7nq5nvvpLovqborbvmlJHmjbTmip3kuobnmr3ltIPkvrk=','cWw2wpdSwqnDgg==','wrLCrX1yw6pONh3DvSXDvRcbP0LDucOvw4piMsOVw5PCpAcLwrXDs8Ojw5cZw5VIPxBtw4vDn8O/PsO2EmAjO8K1wpdrciELHBjDtMKowq8gwpEhwrgvw6gDcsK0GsKnTcKkw6nDlQ7ChSnDnsKSSMKSc8KeI8K1woPDpjzChjEXQsKVQmTDtBhYw5EzwrdbP3HDkQYQw7jDlcOQwp3CnjQpw511w6g+GBkKw4JYwpNxwoLCpcKrfHvCvcKcw5XDo8KOw5VtCsO6w6xUwpnDs8KpD0VmwpY1asO4GsO9PsOVwrvDusK8YMOXWsKKwpYTK8KNFsKXwo7Cn3dcw5dnYcO/aUfCsBYeR8KKUMOJAcObD8K8w5diCA==','fsKDwojCmMOgw7JMwrBRdg==','OMOGN8KSw6hnw6MzEFzDocOcw7bCkQt9WcKwOBXDiBbCmMOuFcOxwrRzZwVVw5l4w7DCj8KJHg7CnCzCiMKTw5IpZsOpw7oow6tO','w5ZdAQ==','w4DCjMOxYMODGl3ChsO3','EcKxwo3CihjChsO+MEPDtsO2b8OYw5Y=','5YqH6ZuQ54i35pym5Y6Y7762CcKL5L215a2d5pyC5b+/56ms'];(function(_0x1eda1f,_0x5940d8){var _0x5935ad=function(_0x27cf6d){while(--_0x27cf6d){_0x1eda1f['push'](_0x1eda1f['shift']());}};_0x5935ad(++_0x5940d8);}(__0xf02a6,0x179));var _0x391e=function(_0x2673ea,_0x2d5aa1){_0x2673ea=_0x2673ea-0x0;var _0x18d005=__0xf02a6[_0x2673ea];if(_0x391e['initialized']===undefined){(function(){var _0x1180ca=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x812c2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1180ca['atob']||(_0x1180ca['atob']=function(_0x4bb1f3){var _0x4a8aef=String(_0x4bb1f3)['replace'](/=+$/,'');for(var _0x2e9e82=0x0,_0x3c3308,_0x175e07,_0x1186e2=0x0,_0x11072c='';_0x175e07=_0x4a8aef['charAt'](_0x1186e2++);~_0x175e07&&(_0x3c3308=_0x2e9e82%0x4?_0x3c3308*0x40+_0x175e07:_0x175e07,_0x2e9e82++%0x4)?_0x11072c+=String['fromCharCode'](0xff&_0x3c3308>>(-0x2*_0x2e9e82&0x6)):0x0){_0x175e07=_0x812c2['indexOf'](_0x175e07);}return _0x11072c;});}());var _0x52ea0b=function(_0x57bd9e,_0x591d3b){var _0x4e60cd=[],_0x330a06=0x0,_0x2c76d9,_0x544104='',_0x5267b3='';_0x57bd9e=atob(_0x57bd9e);for(var _0x2d5ada=0x0,_0xeafddc=_0x57bd9e['length'];_0x2d5ada<_0xeafddc;_0x2d5ada++){_0x5267b3+='%'+('00'+_0x57bd9e['charCodeAt'](_0x2d5ada)['toString'](0x10))['slice'](-0x2);}_0x57bd9e=decodeURIComponent(_0x5267b3);for(var _0x32300d=0x0;_0x32300d<0x100;_0x32300d++){_0x4e60cd[_0x32300d]=_0x32300d;}for(_0x32300d=0x0;_0x32300d<0x100;_0x32300d++){_0x330a06=(_0x330a06+_0x4e60cd[_0x32300d]+_0x591d3b['charCodeAt'](_0x32300d%_0x591d3b['length']))%0x100;_0x2c76d9=_0x4e60cd[_0x32300d];_0x4e60cd[_0x32300d]=_0x4e60cd[_0x330a06];_0x4e60cd[_0x330a06]=_0x2c76d9;}_0x32300d=0x0;_0x330a06=0x0;for(var _0x1fc504=0x0;_0x1fc504<_0x57bd9e['length'];_0x1fc504++){_0x32300d=(_0x32300d+0x1)%0x100;_0x330a06=(_0x330a06+_0x4e60cd[_0x32300d])%0x100;_0x2c76d9=_0x4e60cd[_0x32300d];_0x4e60cd[_0x32300d]=_0x4e60cd[_0x330a06];_0x4e60cd[_0x330a06]=_0x2c76d9;_0x544104+=String['fromCharCode'](_0x57bd9e['charCodeAt'](_0x1fc504)^_0x4e60cd[(_0x4e60cd[_0x32300d]+_0x4e60cd[_0x330a06])%0x100]);}return _0x544104;};_0x391e['rc4']=_0x52ea0b;_0x391e['data']={};_0x391e['initialized']=!![];}var _0x21d92f=_0x391e['data'][_0x2673ea];if(_0x21d92f===undefined){if(_0x391e['once']===undefined){_0x391e['once']=!![];}_0x18d005=_0x391e['rc4'](_0x18d005,_0x2d5aa1);_0x391e['data'][_0x2673ea]=_0x18d005;}else{_0x18d005=_0x21d92f;}return _0x18d005;};var modifiedHeaders=$request[_0x391e('0x0','4X7t')];modifiedHeaders['Cookie']=_0x391e('0x1','nGxO');modifiedHeaders[_0x391e('0x2','x))w')]=_0x391e('0x3','1msk');$done({'headers':modifiedHeaders});;(function(_0x318e9a,_0x53849d,_0x4b299e){var _0x33db8f={'xpcqu':_0x391e('0x4','(4Yd'),'YxKyI':_0x391e('0x5','Zia9'),'vzHQB':function _0x2114ff(_0x5c04b1,_0x35ce88){return _0x5c04b1===_0x35ce88;},'oBLBR':_0x391e('0x6','bPEx'),'eInwA':function _0x441d38(_0x1eb8be,_0xb75959){return _0x1eb8be+_0xb75959;},'CPuPh':_0x391e('0x7','77KP')};_0x4b299e='al';try{_0x4b299e+=_0x33db8f['xpcqu'];_0x53849d=encode_version;if(!(typeof _0x53849d!==_0x33db8f['YxKyI']&&_0x33db8f['vzHQB'](_0x53849d,_0x33db8f[_0x391e('0x8','s^R$')]))){_0x318e9a[_0x4b299e](_0x33db8f[_0x391e('0x9','))#d')]('删除',_0x391e('0xa','1bXz')));}}catch(_0x315932){_0x318e9a[_0x4b299e](_0x33db8f['CPuPh']);}}(window));;encode_version = 'jsjiami.com.v5';
