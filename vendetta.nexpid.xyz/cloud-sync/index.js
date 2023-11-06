(function(b,q,C,s,P,x,E,d,k,e,w,v,D,Z,Se,ze){"use strict";const He=s.findByStoreName("ThemeStore"),We=s.findByProps("colors","meta");s.findByProps("triggerHaptic");const ee=s.findByProps("TextStyleSheet").TextStyleSheet,{View:$,Text:Ee,Pressable:Je}=v.General;s.findByProps("TableRow");const Ke=s.findByProps("ActionSheet")?.ActionSheet??s.find(function(t){return t.render?.name==="ActionSheet"}),Xe=s.findByProps("openLazy","hideActionSheet"),{openLazy:Ye,hideActionSheet:we}=Xe,{ActionSheetTitleHeader:Qe,ActionSheetCloseButton:qe,ActionSheetContentContainer:Ze}=s.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");s.findByProps("ActionSheetRow")?.ActionSheetRow,s.findByName("Navigator")??s.findByProps("Navigator")?.Navigator,s.findByProps("getRenderCloseButton")?.getRenderCloseButton??s.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,s.findByProps("popModal","pushModal");const ve=s.findByProps("useSearchControls"),te=s.findByProps("useSettingSearchQuery"),et=s.findByName("SettingSearchBar");s.findByProps("SvgXml"),s.findByProps("useInMainTabsExperiment","isInMainTabsExperiment");const tt=s.find(function(t){return t?.WebView&&!t.default}).WebView;function nt(t){return We.meta.resolveSemanticColor(He.theme,t)}function ne(t,r){try{Ye(new Promise(function(n){return n({default:t})}),"ActionSheet",r)}catch(n){Se.logger.error(n.stack),E.showToast("Got error when opening ActionSheet! Please check debug logs",d.getAssetIDByName("Smal"))}}Object.assign(function(t){let{searchContext:r,controls:n}=t;return e.React.createElement(e.ReactNative.ScrollView,{scrollEnabled:!1},e.React.createElement(ve.default,{searchContext:r,controls:n},e.React.createElement(et,null)))},{useAdvancedSearch:function(t){const r=te.useSettingSearchQuery(),n=ve.useSearchControls(t,!1,function(){});return e.React.useEffect(function(){return function(){te.setSettingSearchQuery(""),te.setIsSettingSearchActive(!1)}},[]),[r,n]}});function rt(t){let{title:r,onPress:n,icon:i}=t;const a=e.stylesheet.createThemedStyleSheet({androidRipple:{color:w.semanticColors.ANDROID_RIPPLE},icon:{height:18,tintColor:w.semanticColors.HEADER_SECONDARY,opacity:.5}}),o=n?Je:$;return e.React.createElement(o,{android_ripple:a.androidRipple,disabled:!1,accessibilityRole:"button",onPress:n,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&e.React.createElement($,{style:{marginRight:4}},e.React.createElement(e.ReactNative.Image,{style:a.icon,source:i,resizeMode:"contain"})),e.React.createElement(M,{variant:"text-sm/semibold",color:"HEADER_SECONDARY"},r))}function W(t){let{title:r,onTitlePress:n,icon:i,children:a,padding:o}=t;const c=e.stylesheet.createThemedStyleSheet({main:{backgroundColor:w.semanticColors.CARD_PRIMARY_BG,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement($,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(rt,{title:r,onPress:n,icon:i}),e.React.createElement($,{style:c.main},o?e.React.createElement($,{style:{paddingHorizontal:16,paddingVertical:16}},a):a))}function me(t){let{addPadding:r}=t;const n=e.stylesheet.createThemedStyleSheet({line:{width:"100%",height:2,backgroundColor:w.semanticColors.BACKGROUND_ACCENT,borderRadius:2147483647}});return e.React.createElement($,{style:[{marginTop:16,marginBottom:16},r&&{marginHorizontal:16}]},e.React.createElement($,{style:n.line}))}var Te;(function(t){function r(i){let{children:a,onPress:o}=i;return e.React.createElement(M,{variant:"text-md/bold",onPress:o},a)}t.Bold=r;function n(i){let{children:a,onPress:o}=i;return e.React.createElement(Ee,{style:{textDecorationLine:"underline"},onPress:o},a)}t.Underline=n})(Te||(Te={}));function M(t){let{variant:r,lineClamp:n,color:i,align:a,style:o,onPress:c,getChildren:f,children:g,liveUpdate:p}=t;const[u,y]=e.React.useReducer(function(S){return~S},0);return e.React.useEffect(function(){if(!p)return;const S=new Date().setMilliseconds(1e3);let h,T;return T=setTimeout(function(){y(),h=setInterval(y,1e3)},S-Date.now()),function(){clearTimeout(T),clearInterval(h)}},[]),e.React.createElement(Ee,{style:[r?ee[r]:{},i?{color:nt(w.semanticColors[i])}:{},a?{textAlign:a}:{},o??{}],numberOfLines:n,onPress:c},f?.()??g)}function at(t){let{onPress:r,onLongPress:n,icon:i,style:a,destructive:o,color:c}=t;const f=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:w.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:w.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:w.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:r,onLongPress:n},e.React.createElement(e.ReactNative.Image,{style:[typeof a=="string"?a==="header"?f.headerStyleIcon:f.cardStyleIcon:a,o&&f.destructiveIcon,c&&{tintColor:c}].filter(function(g){return!!g}),source:i}))}const{View:it,Text:Ie}=v.General,be=e.stylesheet.createThemedStyleSheet({count:{...ee["text-lg/bold"],color:w.semanticColors.TEXT_NORMAL,textAlign:"center"},subtitle:{...ee["text-md/medium"],color:w.semanticColors.TEXT_MUTED,textAlign:"center"}});function Ce(t){let{subtitle:r,count:n}=t;return React.createElement(it,{style:{alignItems:"center",justifyContent:"center",marginHorizontal:16}},React.createElement(Ie,{style:be.count},n),React.createElement(Ie,{style:be.subtitle},r))}const Pe="https://cloudsync.nexpid.xyz/";var I={get api(){return l.host?l.host.endsWith("/")?l.host:`${l.host}/`:Pe},raw:"https://raw.githubusercontent.com/nexpid/VendettaPlugins/main/plugins/cloud-sync/",oauth2:{clientId:"1120793656878714913",get redirectURL(){return`${l.host?l.host.endsWith("/")?l.host:`${l.host}/`:Pe}api/oauth2-response`}}};function ct(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ot(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function J(t,r,n){return Ne()?J=Reflect.construct:J=function(i,a,o){var c=[null];c.push.apply(c,a);var f=Function.bind.apply(i,c),g=new f;return o&&U(g,o.prototype),g},J.apply(null,arguments)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},F(t)}function st(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&U(t,r)}function lt(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function ut(t,r){return r&&(dt(r)==="object"||typeof r=="function")?r:ct(t)}function U(t,r){return U=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},U(t,r)}function dt(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}function re(t){var r=typeof Map=="function"?new Map:void 0;return re=function(n){if(n===null||!lt(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return J(n,arguments,F(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),U(i,n)},re(t)}function Ne(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ft(t){var r=Ne();return function(){var n=F(t),i;if(r){var a=F(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return ut(this,i)}}const Ae=s.findByStoreName("UserStore");let V=function(t){st(n,t);var r=ft(n);function n(i){ot(this,n);var a;return a=r.call(this,`${i.status}: ${i.message}${i.error?` (${i.error})`:""}`),a.name=a.constructor.name,a}return n}(re(Error));function O(){return l.auth?.[Ae.getCurrentUser()?.id]}async function ae(){var t;const r=new Error("Unauthorized, try logging out and back in again");let n=O();if(!n)throw r;if(Date.now()>=n.expiresAt){const i=await fetch(`${I.api}api/refresh-access-token?refresh_token=${encodeURIComponent(n.refreshToken)}`);if(i.status!==200)throw new V(await i.json());n=await i.json(),(t=l).auth??(t.auth={}),l.auth[Ae.getCurrentUser().id]=n}return n.accessToken}async function gt(t){const r=await fetch(`${I.api}api/get-access-token?code=${encodeURIComponent(t)}`);if(r.status===200)return await r.json();throw new V(await r.json())}async function pt(){if(!O())return;const t=await fetch(`${I.api}api/get-data`,{headers:{authorization:await ae()}});if(t.status===200)return await t.json();throw new V(await t.json())}async function _e(t){if(!O())return;const r=await fetch(`${I.api}api/sync-data`,{method:"POST",headers:{authorization:await ae(),"content-type":"application/json"},body:JSON.stringify(t)});if(r.status===200)return await r.json();throw new V(await r.json())}async function yt(){if(!O())return;const t=await fetch(`${I.api}api/delete-data`,{method:"DELETE",headers:{authorization:await ae()}});if(t.status===200)return await t.json();throw new V(await t.json())}const{pushModal:ht,popModal:Rt}=s.findByProps("pushModal","popModal"),St=s.findByName("OAuth2AuthorizeModal"),Et=s.findByStoreName("UserStore");function wt(){ht({key:"oauth2-authorize",modal:{key:"oauth2-authorize",modal:St,animation:"slide-up",shouldPersistUnderModals:!1,props:{clientId:I.oauth2.clientId,redirectUri:I.oauth2.redirectURL,scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function(t){var r;let{location:n}=t;try{const i=new URL(n).searchParams.get("code"),a=await gt(i);(r=l).auth??(r.auth={}),l.auth[Et.getCurrentUser().id]=a,ge(),E.showToast("Successfully authenticated",d.getAssetIDByName("Check"))}catch(i){E.showToast(String(i),d.getAssetIDByName("Small"))}},dismissOAuthModal:function(){return Rt("oauth2-authorize")}},closable:!0}})}const{FormSwitchRow:Be}=v.Forms;function vt(){const[t,r]=e.React.useState(""),[,n]=e.React.useReducer(function(o){return~o},0);e.React.useEffect(function(){r("")},[]),C.useProxy(l);const i=e.NavigationNative.useNavigation(),a=i.addListener("focus",function(){a(),i.setOptions({title:"Plugin Settings",headerRight:function(){return e.React.createElement(at,{onPress:function(){return k.showConfirmationAlert({title:"Revert Settings",content:"Are you sure you want to revert all plugin settings?",confirmText:"Revert",cancelText:"Cancel",confirmColor:"red",onConfirm:function(){return l.pluginSettings={}}})},icon:d.getAssetIDByName("ic_message_delete"),style:"header"})}})});return e.React.createElement(e.ReactNative.FlatList,{ListHeaderComponent:e.React.createElement(v.Search,{style:{marginBottom:10},onChangeText:function(o){return r(o.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:Object.entries(P.plugins).filter(function(o){return o[1].manifest.name?.toLowerCase().includes(t)}),renderItem:function(o){var c;let{item:[f,g]}=o;(c=l).pluginSettings??(c.pluginSettings={});const p=l.pluginSettings[f]??{syncPlugin:!0,syncStorage:!0},u=function(){var y;(y=l).pluginSettings??(y.pluginSettings={}),p.syncPlugin===!0&&p.syncStorage===!0?delete l.pluginSettings[f]:l.pluginSettings[f]=p,n()};return e.React.createElement(v.Summary,{label:g.manifest.name,icon:g.manifest.vendetta.icon??":3"},e.React.createElement(Be,{label:"Sync Plugin",onValueChange:function(){p.syncPlugin=!p.syncPlugin,u()},value:p.syncPlugin}),e.React.createElement(Be,{label:"Sync Plugin Storage",onValueChange:function(){p.syncStorage=!p.syncStorage,u()},value:p.syncStorage}))}})}let K=!1,ie;const ce=[];function mt(){ce.length=0,ie?.()}function N(t,r){ce.push([t,r]),ie?.()}const Tt={themes:"#42f5a4",plugins:"#4290f5",importer:"#e6f542"},xe=e.stylesheet.createThemedStyleSheet({text:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,color:w.semanticColors.TEXT_NORMAL,marginHorizontal:12,marginTop:24}}),It=function(){const[t,r]=e.React.useReducer(function(i){return~i},0);ie=r;const n=e.React.useRef();return e.React.useEffect(function(){return K=!0,function(){K=!1}},[]),e.React.createElement(e.ReactNative.ScrollView,{style:{flex:1},ref:n,onContentSizeChange:function(){return n.current.scrollToEnd({animated:!0})}},e.React.createElement(e.ReactNative.Text,{style:xe.text},ce.map(function(i){let[a,o]=i;return[e.React.createElement(e.ReactNative.Text,{style:[xe.text,{color:Tt[a]}]},"[",a.toUpperCase(),"]:"),` ${o}
`]})))};function bt(t){t.push("VendettaCustomPage",{render:It,title:"Import Logs"})}const{MMKVManager:Ct}=window.nativeModuleProxy;async function De(){const t={themes:[],plugins:[]};for(const r of Object.values(P.plugins)){const n=l.pluginSettings?.[r.id];if(n?.syncPlugin===!1)continue;const i=n?.syncStorage===!1?{}:await C.createMMKVBackend(r.id).get();t.plugins.push({id:r.id,enabled:r.enabled,options:i})}for(const r of Object.values(x.themes))t.themes.push({id:r.id,enabled:r.selected});return t}let X;function $e(t){X=t}async function Pt(t,r){if(!t)return;X?.(!0);const n=[...t.sync.plugins.filter(function(c){return!P.plugins[c.id]&&!j(c.id)&&z(c.id)&&r.unproxiedPlugins}),...t.sync.plugins.filter(function(c){return!P.plugins[c.id]&&j(c.id)&&z(c.id)&&r.plugins})],i=t.sync.themes.filter(function(c){return!x.themes[c.id]&&r.themes});if(!n[0]&&!i[0])return X?.(!1),E.showToast("Nothing to import",d.getAssetIDByName("Small"));mt(),N("importer",`Starting to import ${n.length} plugin${n.length!==1?"s":""} and ${i.length} theme${i.length!==1?"s":""}`),K||E.showToast(`Importing ${[n.length&&`${n.length} plugin${n.length!==1?"s":""}`,i.length&&`${i.length} theme${i.length!==1?"s":""}`].filter(function(c){return!!c}).join(" and ")}`,d.getAssetIDByName("toast_image_saved"));const a={plugins:0,themes:0,failed:0};await Promise.all([...n.map(function(c){return new Promise(async function(f){Ct.setItem(c.id,JSON.stringify(c.options)),P.installPlugin(c.id,c.enabled).then(function(){a.plugins++,N("plugins",`Successfully imported plugin: ${c.id}`)}).catch(function(g){a.failed++,N("plugins",`Failed to import plugin: ${c.id}
${g}`)}).finally(f)})}),...i.map(function(c){return new Promise(async function(f){return x.installTheme(c.id).then(function(){a.themes++,N("themes",`Successfully imported theme: ${c.id}`)}).catch(function(g){a.failed++,N("themes",`Failed to import theme: ${c.id}
${g}`)}).finally(f)})})]),K||E.showToast(`Imported ${[[a.plugins,"plugin"],[a.themes,"theme"]].map(function(c){let[f,g]=c;return`${f} ${g}${f!==1?"s":""}`}).join(" and ")}! (${a.failed} failed)`,d.getAssetIDByName("check"));const o=x.themes[i.find(function(c){return c.enabled})?.id];o&&(N("themes",`Selecting theme: ${o.id}`),await C.createFileBackend("vendetta_theme.json").set(Object.assign(o,{selected:!0})),N("themes","Prompting user to reload"),await function(){return new Promise(function(c){return k.showConfirmationAlert({title:"Theme selected",content:"A reload is required to see the theme. Do you want to reload now?",confirmText:"Reload",confirmColor:"red",onConfirm:function(){window.nativeModuleProxy.BundleUpdaterManager.reload(),c()},cancelText:"Skip",onCancel:c,isDismissable:!0})})}()),N("importer",`Finished! Imported ${a.plugins} plugin${a.plugins!==1?"s":""} and ${a.themes} theme${a.themes!==1?"s":""}. ${a.failed?`Failed to import ${a.failed} plugin${a.failed!==1?"s":""}/theme${a.failed!==1?"s":""}`:"All imports were successful"}`),X?.(!1)}const{View:Nt}=v.General,{FormCheckboxRow:oe}=v.Forms;function se(t){let{defOptions:r,save:n=m.save,navigation:i}=t;const a={unproxiedPlugins:n.sync.plugins.filter(function(p){return!P.plugins[p.id]&&!j(p.id)&&z(p.id)}).length,plugins:n.sync.plugins.filter(function(p){return!P.plugins[p.id]&&j(p.id)&&z(p.id)}).length,themes:n.sync.themes.filter(function(p){return!x.themes[p.id]}).length},o=[a.unproxiedPlugins,a.plugins,a.themes].reduce(function(p,u){return p+u},0),[c,f]=e.React.useState(r??{unproxiedPlugins:!1,plugins:!!a.plugins,themes:!!a.themes}),g=e.stylesheet.createThemedStyleSheet({icon:{width:18,height:18,tintColor:w.semanticColors.TEXT_BRAND,marginRight:4},btnIcon:{tintColor:w.semanticColors.TEXT_NORMAL,marginRight:8}});return e.React.createElement(Ke,null,e.React.createElement(Ze,null,e.React.createElement(Qe,{title:"Import Data",trailing:e.React.createElement(qe,{onPress:function(){return we()}})}),!o&&e.React.createElement(e.React.Fragment,null,e.React.createElement(Nt,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:8}},e.React.createElement(e.ReactNative.Image,{source:d.getAssetIDByName("ic_info_24px"),style:g.icon,resizeMode:"cover"}),e.React.createElement(M,{variant:"text-md/semibold",color:"TEXT_BRAND",align:"center"},"All addons in the cloud are already imported"))),e.React.createElement(oe,{label:`Unproxied Plugins (${a.unproxiedPlugins})`,disabled:!a.unproxiedPlugins,onPress:function(){return a.unproxiedPlugins&&(!c.unproxiedPlugins&&!r?k.showConfirmationAlert({title:"Warning",content:"Installing unproxied plugins can be dangerous since they haven't been verified by Vendetta staff. Are you sure you want to import them?",isDismissable:!0,confirmText:"Yes",confirmColor:"brand",onConfirm:function(){return ne(se,{save:n,navigation:i,defOptions:{...c,unproxiedPlugins:!0}})},cancelText:"Cancel"}):f({...c,unproxiedPlugins:!c.unproxiedPlugins}))},selected:c.unproxiedPlugins}),e.React.createElement(oe,{label:`Plugins (${a.plugins})`,disabled:!a.plugins,onPress:function(){return a.plugins&&f({...c,plugins:!c.plugins})},selected:c.plugins}),e.React.createElement(oe,{label:`Themes (${a.themes})`,disabled:!a.themes,onPress:function(){return a.themes&&f({...c,themes:!c.themes})},selected:c.themes}),e.React.createElement(v.Button,{text:"Import",color:"green",size:"medium",renderIcon:function(){return e.React.createElement(e.ReactNative.Image,{style:g.btnIcon,resizeMode:"cover",source:d.getAssetIDByName("ic_download_24px")})},onPress:function(){bt(i),Pt(n,c),we()},style:{marginHorizontal:16,marginVertical:16},disabled:!c.unproxiedPlugins&&!c.plugins&&!c.themes})))}const Y=window.nativeModuleProxy.DCDSoundManager;async function Oe(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=Math.floor(Math.random()*1e6),i=await Promise.resolve(new Promise(function(o){return Y.prepare(t,"notification",n,function(c,f){return o(f?.duration??r)})}));let a=null;return{play(){a&&(clearTimeout(a),a=null,Y.stop(n)),Y.play(n),a=setTimeout(function(){a=null,Y.stop(n)},i)}}}var At=`<!DOCTYPE html>
<html></html>
<script>
  const RNWV = window.ReactNativeWebView;

  const stringToBuffer = (string) => new TextEncoder().encode(string);
  const bufferToString = (buffer) => new TextDecoder().decode(buffer);

  const keyCache = {};
  const getKey = async (raw) => {
    if (keyCache[raw]) return keyCache[raw];

    const pkey = await crypto.subtle.importKey(
      "raw",
      stringToBuffer(raw),
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: new Uint8Array(16),
        iterations: 100000,
        hash: "SHA-256",
      },
      pkey,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
    keyCache[raw] = key;
    return key;
  };

  window.addEventListener("message", async (ev) => {
    const { action, data, key, tracker } = ev.data;
    if (!action || !data || !key || !tracker) return;

    try {
      if (action === "encrypt") {
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const ret = await window.crypto.subtle.encrypt(
          {
            name: "AES-GCM",
            iv,
          },
          await getKey(key),
          stringToBuffer(data)
        );
        return RNWV.postMessage(
          JSON.stringify({
            tracker,
            data: btoa(
              String.fromCharCode
                .apply(null, iv)
                .concat(String.fromCharCode.apply(null, new Uint8Array(ret)))
            ),
          })
        );
      } else if (action === "decrypt") {
        const raw = atob(data);
        const iv = new Uint8Array(
          raw
            .slice(0, 12)
            .split("")
            .map((x) => x.charCodeAt(0))
        );
        const dt = new Uint8Array(
          raw
            .slice(12)
            .split("")
            .map((x) => x.charCodeAt(0))
        );

        const ret = await window.crypto.subtle.decrypt(
          {
            name: "AES-GCM",
            iv,
          },
          await getKey(key),
          dt
        );
        return RNWV.postMessage(
          JSON.stringify({ tracker, data: bufferToString(ret) })
        );
      }
    } catch (e) {
      return RNWV.postMessage(
        JSON.stringify({ tracker, error: e.message ?? \`\${e}\` })
      );
    }
  });
<\/script>`;let G;const le={},Le=function(){return Math.floor(Math.random()*1e36).toString(36)},ke=function(t){return G?.injectJavaScript(`window.postMessage(${JSON.stringify(t)})`)};async function _t(t,r){if(!G)return null;const n=Le();return new Promise(function(i,a){le[n]=function(o){return"error"in o?a(o.error):i(o.data)},ke({action:"encrypt",data:t,key:r,tracker:n})})}async function Bt(t,r){if(!G)return null;const n=Le();return new Promise(function(i,a){le[n]=function(o){return"error"in o?a(o.error):i(o.data)},ke({action:"decrypt",data:t,key:r,tracker:n})})}function xt(){return e.React.useEffect(function(){return function(){return G=void 0}},[]),e.React.createElement(tt,{ref:function(t){return G=t},source:{html:At,baseUrl:"https://localhost"},style:{display:"none",opacity:0},onMessage:function(t){let{nativeEvent:{data:r}}=t,n;try{n=JSON.parse(r)}catch{return}le[n.tracker]?.(n)}})}const ue=s.findByProps("pickSingle","isCancel"),{ScrollView:Dt,View:Me}=v.General,{FormRow:R,FormInput:$t,FormSwitchRow:Fe}=v.Forms,Ue=s.findByStoreName("UserStore"),Ot=C.wrapSync(Oe(`${I.raw}assets/snd_creepyjingle.ogg`,1.6)),Lt=C.wrapSync(Oe(`${I.raw}assets/snd_mysterygo.ogg`,2.2));function de(){const[t,r]=e.React.useState(!1),[n,i]=e.React.useState([]);C.useProxy(m),C.useProxy(l);const a=function(u){return!n.includes(u)&&i([...n,u])},o=function(u){return i(n.filter(function(y){return u!==y}))};let c=0;const f=e.NavigationNative.useNavigation(),g=!!O(),p=!!m.save;return e.React.createElement(Dt,null,e.React.createElement(xt,null),e.React.createElement(W,{title:"Current Data",icon:d.getAssetIDByName("ic_contact_sync"),padding:!0},e.React.createElement(Me,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:8}},e.React.createElement(Ce,{count:m.save?.sync?.plugins?.length??"-",subtitle:"plugins"}),e.React.createElement(Ce,{count:m.save?.sync?.themes?.length??"-",subtitle:"themes"}))),e.React.createElement(W,{title:"Settings",icon:d.getAssetIDByName("ic_cog_24px"),onTitlePress:function(){return c>=Date.now()?(t?Lt.play():Ot.play(),r(!t),c=0):c=Date.now()+500}},e.React.createElement(Fe,{label:"Auto Save",subLabel:"Automatically save data to cloud",leading:e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_contact_sync")}),onValueChange:function(){return l.autoSync=!l.autoSync},value:l.autoSync??!1}),!pe&&l.autoSync&&e.React.createElement(M,{variant:"text-md/semibold",color:"TEXT_DANGER",style:{marginHorizontal:20,marginVertical:2}},"You must reinstall Vendetta in order to use Auto Save!"),e.React.createElement(Fe,{label:"Pin To Settings",subLabel:"Pin Cloud Sync to the settings page",leading:e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_message_pin")}),onValueChange:function(){return l.addToSettings=!l.addToSettings},value:l.addToSettings??!1}),e.React.createElement(R,{label:"Plugin Settings",leading:e.React.createElement(R.Icon,{source:d.getAssetIDByName("debug")}),trailing:e.React.createElement(R.Arrow,null),onPress:function(){return f.push("VendettaCustomPage",{render:vt})}}),t&&e.React.createElement(e.React.Fragment,null,e.React.createElement(me,{addPadding:!0}),e.React.createElement(R,{label:"Custom Host",subLabel:"Custom URL for the CloudSync backend API",leading:e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_message_edit")})}),e.React.createElement($t,{title:"",keyboardType:"numeric",placeholder:"1",value:I.api,onChange:function(u){return l.host=u},style:{marginTop:-25,marginHorizontal:12}}))),e.React.createElement(W,{title:"Authentication",icon:d.getAssetIDByName("lock")},O()?e.React.createElement(e.React.Fragment,null,e.React.createElement(R,{label:"Log out",subLabel:"Logs you out of CloudSync",leading:e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_logout_24px")}),onPress:function(){var u;(u=l).auth??(u.auth={}),delete l.auth[Ue.getCurrentUser().id],delete m.save,E.showToast("Successfully logged out",d.getAssetIDByName("ic_logout_24px"))}}),e.React.createElement(R,{label:"Delete data",subLabel:"Deletes your CloudSync data",leading:e.React.createElement(R.Icon,{source:d.getAssetIDByName("trash")}),onPress:async function(){var u;await yt(),(u=l).auth??(u.auth={}),delete l.auth[Ue.getCurrentUser().id],delete m.save,E.showToast("Successfully deleted data",d.getAssetIDByName("trash"))}})):e.React.createElement(R,{label:"Authenticate",leading:e.React.createElement(R.Icon,{source:d.getAssetIDByName("copy")}),trailing:R.Arrow,onPress:wt})),e.React.createElement(W,{title:"Data Management",icon:d.getAssetIDByName("ic_message_edit"),padding:!g||!p},g&&p?e.React.createElement(e.React.Fragment,null,e.React.createElement(R,{label:"Save Data",subLabel:"Saves your data to the CloudSync API",leading:n.includes("save_api")?e.React.createElement(e.ReactNative.ActivityIndicator,{size:"small"}):e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_file_upload_24px")}),onPress:function(){k.showConfirmationAlert({title:"Save data",content:"Are you sure you want to overwrite your save data?",confirmText:"Overwrite",confirmColor:"BRAND",onConfirm:async function(){a("save_api");try{m.save=await _e(await De()),E.showToast("Successfully synced data",d.getAssetIDByName("Check"))}catch(u){E.showToast(String(u),d.getAssetIDByName("Small"))}o("save_api")},cancelText:"Cancel"})}}),e.React.createElement(R,{label:"Import Data",subLabel:"Imports data from the CloudSync API",leading:n.includes("import_api")?e.React.createElement(e.ReactNative.ActivityIndicator,{size:"small"}):e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_download_24px")}),onPress:function(){ne(se,{navigation:f}),$e(function(u){return u?a("import_api"):o("import_api")})}}),e.React.createElement(me,{addPadding:!0}),e.React.createElement(R,{label:"Export Local Data",subLabel:"Exports data to a .txt file",leading:n.includes("export_local")?e.React.createElement(e.ReactNative.ActivityIndicator,{size:"small"}):e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_file_upload_24px")}),onPress:async function(){k.showInputAlert({title:"Enter encryption key",placeholder:"secret password",confirmText:"Enter",cancelText:"Cancel",onConfirm:async function(u){if(!u)throw new Error("An encryption key must be set");if(n.length)return;a("local_export");let y;try{y=await _t(JSON.stringify(m.save),u)}catch{return o("local_export"),E.showToast("Failed to encrypt!",d.getAssetIDByName("Small"))}E.showToast("Downloading file in your browser",d.getAssetIDByName("Check")),e.url.openURL(`${I.api}api/download?data=${encodeURIComponent(y)}`),o("local_export")}})}}),e.React.createElement(R,{label:"Import Local Data",subLabel:"Imports data from a .txt file",leading:n.includes("import_local")?e.React.createElement(e.ReactNative.ActivityIndicator,{size:"small"}):e.React.createElement(R.Icon,{source:d.getAssetIDByName("ic_download_24px")}),onPress:async function(){if(n.length)return;a("import_local");let u;try{const{uri:y,type:S}=await ue.pickSingle({type:ue.types.plainText,mode:"open"});S==="text/plain"&&(u=await(await fetch(y)).text())}catch(y){ue.isCancel(y)||E.showToast(`Got an error! ${y}`,d.getAssetIDByName("Small"))}o("import_local"),u&&k.showInputAlert({title:"Enter decryption key",placeholder:"secret password",cancelText:"Cancel",confirmText:"Enter",onConfirm:async function(y){if(!y)throw new Error("A decryption key must be set");if(!n.length){a("import_local");try{const S=JSON.parse(await Bt(u,y));ne(se,{save:S,navigation:f}),o("import_local"),$e(function(h){return h?a("import_local"):o("import_local")})}catch{return o("import_local"),E.showToast("Failed to decrypt!",d.getAssetIDByName("Small"))}}}})}})):g?e.React.createElement(e.ReactNative.ActivityIndicator,{size:"small",style:{flex:1}}):e.React.createElement(M,{variant:"text-md/semibold",color:"TEXT_NORMAL",align:"center"},"Authenticate first to manage your data")),e.React.createElement(Me,{style:{height:12}}))}let Ve=0;function kt(t){clearTimeout(Ve),Ve=setTimeout(t,1500)}const{FormRow:fe}=v.Forms;function Mt(){const t=e.NavigationNative.useNavigation();return React.createElement(v.ErrorBoundary,null,React.createElement(fe,{label:"Cloud Sync",leading:React.createElement(fe.Icon,{source:d.getAssetIDByName("ic_contact_sync")}),trailing:fe.Arrow,onPress:function(){return t.push("VendettaCustomPage",{title:"CloudSync",render:de})}}))}const{FormSection:Ft}=v.Forms,Ut=s.findByName("getScreens"),Vt=s.findByName("UserSettingsOverviewWrapper",!1),Gt=e.stylesheet.createThemedStyleSheet({container:{flex:1,backgroundColor:w.semanticColors.BACKGROUND_MOBILE_PRIMARY}});function jt(t,r,n){const i=[],a=D.after("default",Vt,function(o,c){a();const f=Z.findInReactTree(c.props.children,function(g){return g.type&&g.type.name==="UserSettingsOverview"});i.push(D.after("render",f.type.prototype,function(g,p){let{props:{children:u}}=p;const y=[e.i18n.Messages.BILLING_SETTINGS,e.i18n.Messages.PREMIUM_SETTINGS];u=Z.findInReactTree(u,function(h){return h.children[1].type===Ft}).children;const S=u.findIndex(function(h){return y.includes(h?.props.label)});t()&&u.splice(S===-1?4:S,0,r({}))}))},!0);if(i.push(a),Ut&&n){const o=`VENDETTA_PLUGIN_${e.lodash.snakeCase(n.key).toUpperCase()}`,c=n.page.render,f=e.React.memo(function(y){let{navigation:S}=y;const h=S.addListener("focus",function(){h(),S.setOptions(Z.without(n.page,"noErrorBoundary","render"))});return e.React.createElement(e.ReactNative.View,{style:Gt.container},n.page.noErrorBoundary?e.React.createElement(c,null):e.React.createElement(v.ErrorBoundary,null,e.React.createElement(c,null)))}),g={[o]:{type:"route",title:function(){return n.title},icon:n.icon,parent:null,screen:{route:`VendettaPlugin${e.lodash.chain(n.key).camelCase().upperFirst().value()}`,getComponent:function(){return f}}}},p=function(y,S){const h=[...y],T=S?h?.[0]?.sections:h;if(!Array.isArray(T))return T;const _="Vendetta",B=T.find(function(L){return L?.title===_||L?.label===_});return B&&!B?.settings?.includes(o)&&B.settings.push(o),h},u=function(){const y=s.findByProps("useOverviewSettings"),S=s.findByProps("getSettingTitleConfig"),h=s.findByProps("SETTING_RELATIONSHIPS","SETTING_RENDERER_CONFIGS"),T="getSettingSearchListItems",_="getSettingListItems",B=s.findByProps(T),L=B?T:_,je=B??s.findByProps(_);if(!je||!y)return!1;i.push(D.after("useOverviewSettings",y,function(Re,H){return p(H)})),i.push(D.after("getSettingTitleConfig",S,function(Re,H){return{...H,[o]:n.title}})),i.push(D.after(L,je,function(Re,H){let[Jt]=Re;return[...Jt.includes(o)?[{type:"setting_search_result",ancestorRendererData:g[o],setting:o,title:function(){return n.title},breadcrumbs:["Vendetta"],icon:g[o].icon}]:[],...H]}));const he=h.SETTING_RELATIONSHIPS,Wt=h.SETTING_RENDERER_CONFIGS;return h.SETTING_RELATIONSHIPS={...he,[o]:null},h.SETTING_RENDERER_CONFIGS={...Wt,...g},i.push(function(){h.SETTING_RELATIONSHIPS=he,h.SETTING_RENDERER_CONFIGS=he}),!0};(function(){const y=s.findByProps("SearchableSettingsList"),S=s.findByProps("SETTING_RENDERER_CONFIG"),h=s.findByProps("getSettingListItems");if(!h||!y||!S)return!1;i.push(D.before("type",y.SearchableSettingsList,function(_){return p(_,!0)})),i.push(D.after("getSettingListSearchResultItems",h,function(_,B){for(const L of B)L.setting===o&&(L.breadcrumbs=["Vendetta"])}));const T=S.SETTING_RENDERER_CONFIG;return S.SETTING_RENDERER_CONFIG={...T,...g},i.push(function(){S.SETTING_RENDERER_CONFIG=T}),!0})()||u()}return function(){return i.forEach(function(o){return o()})}}function zt(){let t=[];return t.push(jt(function(){return l.addToSettings},function(){return React.createElement(Mt,null)},{key:Se.plugin.manifest.name,icon:d.getAssetIDByName("ic_contact_sync"),title:"Cloud Sync",page:{title:"CloudSync",render:de}})),function(){return t.forEach(function(r){return r()})}}const l=q.storage;let Ge;const m=C.wrapSync(C.createStorage({get:function(){return Ge},set:function(t){Ge=t}}));async function ge(){try{m.save=await pt()}catch{}}function j(t){return t.startsWith(ze.PROXY_PREFIX)}function z(t){return!t.includes("cloud-sync")}const A=async function(){if(!l.autoSync)return;const t=await De();JSON.stringify(m.save)!==JSON.stringify(t)&&kt(async function(){return m.save=await _e(t)})},Q=Symbol.for("vendetta.storage.emitter"),pe=!!P.plugins[Q]&&!!x.themes[Q];let ye=[];var Ht={onLoad:function(){if(O()&&ge(),pe){const t={plugins:P.plugins[Q],themes:x.themes[Q]};t.plugins.on("SET",A),t.themes.on("SET",A),t.plugins.on("DEL",A),t.themes.on("DEL",A),ye.push(function(){t.plugins.off("SET",A),t.themes.off("SET",A),t.plugins.off("DEL",A),t.themes.off("DEL",A)})}ye.push(zt()),q.storage.databaseMigrate&&delete q.storage.databaseMigrate},onUnload:function(){return ye.forEach(function(t){return t()})},settings:de};return b.cache=m,b.canImport=z,b.default=Ht,b.emitterAvailable=pe,b.fillCache=ge,b.isPluginProxied=j,b.vstorage=l,Object.defineProperty(b,"__esModule",{value:!0}),b})({},vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.plugins,vendetta.themes,vendetta.ui.toasts,vendetta.ui.assets,vendetta.ui.alerts,vendetta.metro.common,vendetta.ui,vendetta.ui.components,vendetta.patcher,vendetta.utils,vendetta,vendetta.constants);
