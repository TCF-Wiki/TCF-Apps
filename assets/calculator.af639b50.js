import{y as W,_ as B,S as x,E as D,o as c,c as d,A as l,P as V,X as v,U as K,I as g,Q as E,J as S,K as A,B as P,L as p,M as L,V as j,W as z,C as O,D as F,H as ee,O as le,z as ue,G as me,Z as Y,Y as ie,a as ne,l as he,f as fe,b as _e,d as pe,e as ve,g as ge,h as Se,i as ye,j as De,k as Me,m as Ce,n as be,p as Ae,q as Te,r as $e,s as Pe,t as xe,u as te,F as oe,v as Be,w as Ie,N as Le,x as ke}from"./Footer.f0909e51.js";import{a as T,w as k,t as I,b as C}from"./data.1b1e8484.js";import{o as U}from"./index.376bcb63.js";import{c as w,u as He,i as Oe,l as Fe,r as b,k as re,d as Ne,f as Re}from"./utils.d1629ff6.js";import{h as N}from"./data.79f94440.js";import{d as We}from"./all.4b74e6c5.js";import"./constants.edc67a93.js";const h=W({list:["WP_D_AR_Bullet_01","WP_G_Sniper_Energy_01"],toggleSelected(e){this.list.includes(e)?this.list=this.list.filter(s=>s!==e):this.list.push(e)}}),H=W({selected:"Shield_01",changeSelected(e){this.selected=e}}),y=W({selected:"PlayerDefault",changeSelected(e){this.selected=e}}),se=W({HSValue:0,changeValue(e){this.HSValue=e}}),X=W({distance:0,changeValue(e){this.distance=e}}),$=W({list:{},typeList:{},toggleSelected(e,s,t){this.list[e]?this.list[e].includes(s)?(this.list[e]=this.list[e].filter(i=>i!==s),delete this.typeList[e][t]):(this.list[e].push(s),this.typeList[e][t]?(this.list[e]=this.list[e].filter(i=>i!==this.typeList[e][t]),this.typeList[e][t]=s):this.typeList[e][t]=s):(this.list[e]=[],this.list[e].push(s),this.typeList[e]={},this.typeList[e][t]=s)}});const Ge={class:"container"},Ve=["src"],Ke={key:0,class:"modal__bg"},Ee={class:"weapon-container"},je={class:"armor-container"},ze=["onClick"],Ue=["src"],Ye={name:"ArmorSelector",data(){return{selectedArmor:H,armorData:T,showModal:!1}},methods:{armorFilter(e){let s={};s.PlayerDefault={armorAmount:0,rarity:"None"};for(let t in e)t.includes("Test")||t.includes("Tactical")||t.includes("Restoration")||t.includes("Altered")||t.includes&&(s[t]=e[t]);return s.Shield_Altered_03=e.Shield_Altered_03,s},armorImage(e){return e.includes("PlayerDefault")?"No_Armor":e.includes("Altered_03")?"Shield_Forged":e.includes("01")?e.includes("Restoration")?"Shield_Uncommon":"Shield_Common":e.includes("02")?e.includes("Restoration")?"Shield_Rare":"Shield_Uncommon":e.includes("03")?"Shield_Rare":e.includes("04")||e.includes("05")?"Shield_Epic":"Shield_Common"},armorName(e){return e.includes("PlayerDefault")?"None":e.includes("Tactical")?this.armorData[e].rarity+" Tactical Armor":e.includes("Restoration")?this.armorData[e].rarity+" Restoration Armor":this.armorData[e].rarity+" Armor"},classGiver(e){let s="";return s+=T[e].rarity.toLowerCase(),H.selected==e&&(s+=" active"),s}}},qe=Object.assign(Ye,{setup(e){const s=x(!1),t=x(null);return U(t,()=>s.value=!1),(i,a)=>{const n=D("font-awesome-icon");return c(),d(S,null,[l("div",Ge,[l("button",{class:"",type:"button",onClick:a[0]||(a[0]=V(o=>s.value=!0,["prevent"]))},[l("img",{src:"calc-images/"+i.armorImage(v(H).selected)+".png"},null,8,Ve)])]),(c(),K(z,{to:"#modal"},[g(j,{name:"modal"},{default:E(()=>[s.value?(c(),d("div",Ke,[l("section",{class:"modal__content modal__small",ref_key:"modal",ref:t},[l("button",{onClick:a[1]||(a[1]=o=>s.value=!1),class:"modal__close-button","aria-label":"Close Modal",type:"button"},[g(n,{icon:"fa-solid fa-xmark"})]),l("div",Ee,[l("div",je,[(c(!0),d(S,null,A(i.armorFilter(v(T)),(o,m)=>(c(),d("div",{class:P(["armor-selector",i.classGiver(m)]),onClick:_=>v(H).changeSelected(m)},[l("img",{src:"calc-images/"+i.armorImage(m)+".png",class:"armor-image"},null,8,Ue),l("span",null,p(i.armorName(m))+" ("+p(o.armorAmount)+") ",1)],10,ze))),256))])])],512)])):L("",!0)]),_:1})]))],64)}}}),Xe=B(qe,[["__scopeId","data-v-d454c8cf"]]),Je=""+new URL("../calc-images/Weapon_Icon.png",import.meta.url).href;const Ze=e=>(O("data-v-331e5a19"),e=e(),F(),e),Qe={class:"container"},we=Ze(()=>l("img",{src:Je},null,-1)),et=[we],tt={key:0,class:"modal__bg"},st={class:"weapon-container"},at=["onClick"],it=["src"],lt={class:"weapon-name"},nt={name:"WeaponSelector",data(){return{weaponData:k,sortedData:[],selectedWeapons:h,showWeaponModal:!1}},mounted(){let e=[];for(const[t,i]of Object.entries(this.weaponData))!i||!i.tags||i.tags.length==0||i.tags[0]==="Tools"||t.includes("scrappy")||i.inGameName=="HAZE"||i.inGameName=="KARLA"||i.inGameName=="FF4 Detonator"||e.push(t);let s=[];for(const t in e){const i=this.weaponData[e[t]];if(i==null)continue;let a=[i.inGameName,e[t]];s.push(a)}s.sort(),this.sortedData=s}},ot=Object.assign(nt,{setup(e){const s=x(!1),t=x(null);return U(t,()=>s.value=!1),(i,a)=>{const n=D("font-awesome-icon");return c(),d(S,null,[l("div",Qe,[l("button",{class:"",type:"button",onClick:a[0]||(a[0]=V(o=>s.value=!0,["prevent"]))},et)]),(c(),K(z,{to:"#modal"},[g(j,{name:"modal"},{default:E(()=>[s.value?(c(),d("div",tt,[l("section",{class:"modal__content modal__small",ref_key:"modal",ref:t},[l("button",{onClick:a[1]||(a[1]=o=>s.value=!1),class:"modal__close-button","aria-label":"Close Modal",type:"button"},[g(n,{icon:"fa-solid fa-xmark"})]),l("div",st,[(c(!0),d(S,null,A(i.sortedData,o=>(c(),d("div",{class:P(["weapon-selector",{active:v(h).list.includes(o[1])}]),onClick:m=>v(h).toggleSelected(o[1])},[l("img",{src:"calc-images/"+o[0]+".png",class:"weapon-image"},null,8,it),l("span",lt,p(o[0]),1)],10,at))),256))])],512)])):L("",!0)]),_:1})]))],64)}}}),rt=B(ot,[["__scopeId","data-v-331e5a19"]]);const ct={class:"container"},dt=["src"],ut={key:0,class:"modal__bg"},mt={class:"weapon-container"},ht={class:"target-container"},ft=["onClick"],_t={key:0},pt=["src"],vt={name:"WeaponSelector",data(){return{targetData:I,selectedTarget:y,showTargetModal:!1,creatureNames:w}},mounted(){}},gt=Object.assign(vt,{setup(e){const s=x(!1),t=x(null);return U(t,()=>s.value=!1),(i,a)=>{const n=D("font-awesome-icon");return c(),d(S,null,[l("div",ct,[l("button",{class:"",type:"button",onClick:a[0]||(a[0]=V(o=>s.value=!0,["prevent"]))},[l("img",{src:"calc-images/"+v(y).selected+".png",class:"button-image"},null,8,dt)])]),(c(),K(z,{to:"#modal"},[g(j,{name:"modal"},{default:E(()=>[s.value?(c(),d("div",ut,[l("section",{class:"modal__content modal__small",ref_key:"modal",ref:t},[l("button",{onClick:a[1]||(a[1]=o=>s.value=!1),class:"modal__close-button","aria-label":"Close Modal",type:"button"},[g(n,{icon:"fa-solid fa-xmark"})]),l("div",mt,[l("div",ht,[(c(!0),d(S,null,A(v(I),(o,m)=>(c(),d("div",{class:P(["target-selector",{active:v(y).selected==m}]),onClick:_=>v(y).changeSelected(m)},[Object.keys(v(w)).includes(m)?(c(),d("div",_t,[l("img",{src:"calc-images/"+m+".png",class:"target-image"},null,8,pt),l("span",null,p(v(w)[m]),1)])):L("",!0)],10,ft))),256))])])],512)])):L("",!0)]),_:1})]))],64)}}}),St=B(gt,[["__scopeId","data-v-a90a8520"]]);const yt={data(){return{HSValue:0,selectedHSValue:se}}},Dt=e=>(O("data-v-2b23824e"),e=e(),F(),e),Mt={class:"container"},Ct=Dt(()=>l("p",null," This value is only used if the target is a player. If the target is a creature, it assumes you do not hit any weakpoints. ",-1));function bt(e,s,t,i,a,n){return c(),d("div",Mt,[l("h2",null," HS Percentage: "+p(a.HSValue)+"% ",1),ee(l("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":s[0]||(s[0]=o=>a.HSValue=o),onInput:s[1]||(s[1]=o=>a.selectedHSValue.changeValue(a.HSValue))},null,544),[[le,a.HSValue]]),Ct])}const ce=B(yt,[["render",bt],["__scopeId","data-v-2b23824e"]]);const At={data(){return{distance:0,selectedDistance:X}}},Tt=e=>(O("data-v-af9046cd"),e=e(),F(),e),$t={class:"container"},Pt=Tt(()=>l("p",null," This affects if damage falls off at range. See the chart below. ",-1));function xt(e,s,t,i,a,n){return c(),d("div",$t,[l("h2",null," Distance: "+p(a.distance)+"m",1),ee(l("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":s[0]||(s[0]=o=>a.distance=o),onInput:s[1]||(s[1]=o=>a.selectedDistance.changeValue(a.distance))},null,544),[[le,a.distance]]),Pt])}const de=B(At,[["render",xt],["__scopeId","data-v-af9046cd"]]);const Bt={components:{ArmorSelector:Xe,WeaponSelector:rt,TargetSelector:St,AccuracySelector:ce,DistanceSelector:de}},It=e=>(O("data-v-cb1fd1b5"),e=e(),F(),e),Lt={class:"content"},kt=It(()=>l("h2",null," Options ",-1)),Ht={class:"button-container"};function Ot(e,s,t,i,a,n){const o=D("WeaponSelector"),m=D("ArmorSelector"),_=D("TargetSelector"),u=D("AccuracySelector"),f=D("DistanceSelector");return c(),d("section",null,[l("div",null,[l("div",Lt,[kt,l("div",Ht,[l("div",null,[g(o)]),l("div",null,[g(m)]),l("div",null,[g(_)])]),g(u),g(f)])])])}const Ft=B(Bt,[["render",Ot],["__scopeId","data-v-cb1fd1b5"]]),R={savedAttachmentList:{},getAttachments:function(e){if(this.savedAttachmentList[e])return this.savedAttachmentList[e];let s=k[e],t=s.tags.concat(["Weapon.Ammo."+s.ammoType]),i=[];for(let a in C){let n=C[a].compatible;!s.modSlots.includes(C[a].modType)||He.includes(C[a].modType)||(n.length===0&&i.push(a),n.some(o=>t.includes(o))&&i.push(a))}return this.savedAttachmentList[e]=i,i},savedGroupedAttachmentList:{},groupAttachments:function(e){if(this.savedGroupedAttachmentList[e])return this.savedGroupedAttachmentList[e];let s=this.getAttachments(e),t={};for(let i in C){if(!s.includes(i)||i.startsWith("No"))continue;let a=C[i].modType;t[a]||(t[a]=[]),t[a].push(i)}return this.savedGroupedAttachmentList[e]=t,t},getAttachmentEffects:function(e){let s=$.list[e],t=[];for(let a in s){let n=C[s[a]].effects;for(let o in n)t.push(n[o])}let i={};for(let a in t){let n=t[a].attribute;Oe.includes(n)||(n.startsWith("Weapon")&&(n=n.replace("Weapon",""),n=Fe(n)),n=="clipSize"&&(n="ammoInClip"),n=="amountOfShots"&&(n="amountOfImmediateFires"),n=="damageDirect"&&(n="directDamage"),n=="damageRange"&&(i.FalloffStart={value:t[a].value+k[e].FalloffStart,type:t[a].type},i.FalloffEnd={value:t[a].value+k[e].FalloffStart,type:t[a].type}),i[n]={value:t[a].value,type:t[a].type})}return i}},r={penetrationMultiplier:function(e,s){let t=I[y.selected],i;s!==void 0?(i=this.s(e,"penetration")-s,t=I.PlayerDefault):y.selected=="PlayerDefault"&&y.selected!="None"?i=this.s(e,"penetration")-T[H.selected].armorAmount:i=this.s(e,"penetration")-t.armorValue;let a=t.health,n=t.armorConstant,o=t.minDamageReduction,m=t.maxDamageReduction,_=a+Math.abs(i)*n*a,u=a/_;return i>0&&(u=2-u),u>m&&(u=m),u<o&&(u=o),u},roundsPerMinute:function(e){return e=="WP_G_HVY_Beam_01"?(60-this.s(e,"spinupTime"))/this.s(e,"refireTime"):60/(this.s(e,"spinupTime")+this.s(e,"refireTime")+(this.s(e,"amountOfBurst")+1)*(this.s(e,"burstInterval")!=-1?this.s(e,"burstInterval"):0))*(this.s(e,"amountOfBurst")+1)},adjustedRPM:function(e){if(this.s(e,"amountOfBurst")>0){let t=this.s(e,"refireTime")+this.s(e,"spinupTime")+(this.s(e,"amountOfBurst")+1)*this.s(e,"burstInterval"),i=this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")/(this.s(e,"amountOfBurst")+1),a=t*i+this.s(e,"reloadTime");return 60/a*(this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet"))}let s=this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")*(this.s(e,"refireTime")+this.s(e,"spinupTime"))+this.s(e,"reloadTime");return e=="WP_G_HVY_Beam_01"&&(s=this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")*this.s(e,"refireTime")+this.s(e,"spinupTime")+this.s(e,"reloadTime")),e=="WP_A_Sniper_Gauss_01"&&(s=this.s(e,"ammoInClip")*this.s(e,"spinupTime")+(this.s(e,"ammoInClip")-1)*this.s(e,"refireTime")+this.s(e,"reloadTime")),60/s*(this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet"))},damagePerSecond:function(e){return this.roundsPerMinute(e)/60*((this.s(e,"directDamage")+this.s(e,"radialDamage"))*this.s(e,"amountOfImmediateFires")*this.getShotModifiers(e))},adjustedDPS:function(e){return this.adjustedRPM(e)/60*((this.s(e,"directDamage")+this.s(e,"radialDamage"))*this.s(e,"amountOfImmediateFires")*this.getShotModifiers(e))},damagePerMag:function(e){return this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")*(this.s(e,"directDamage")+this.s(e,"radialDamage"))*this.s(e,"amountOfImmediateFires")*this.getShotModifiers(e)},timeToEmpty:function(e){let s=this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")/(this.s(e,"amountOfBurst")+1)*(this.s(e,"refireTime")+this.s(e,"spinupTime")+(this.s(e,"amountOfBurst")+1)*(this.s(e,"burstInterval")!=-1?this.s(e,"burstInterval"):0));return e=="WP_G_HVY_Beam_01"?s=(this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")-1)*this.s(e,"refireTime")+this.s(e,"spinupTime"):e=="WP_A_Sniper_Gauss_01"?s=this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")*this.s(e,"spinupTime")+(this.s(e,"ammoInClip")/this.s(e,"ammoPerBullet")-1)*this.s(e,"refireTime"):s},shotsToKill:function(e,s,t){let i;s!==void 0?i=I.PlayerDefault.health:i=I[y.selected].health;let a=i/((this.s(e,"directDamage")+this.s(e,"radialDamage"))*Math.max(this.s(e,"amountOfBurst")+1,1)*this.s(e,"amountOfImmediateFires")*this.getShotModifiers(e,s,t))*Math.max(this.s(e,"amountOfBurst")+1,1);return a%Math.floor(a)<1e-6?Math.floor(a):Math.ceil(a)},timeToKill:function(e){let s=I[y.selected].health,t=this.shotsToKill(e)/Math.max(this.s(e,"amountOfBurst")+1,1),i=this.damagePerMag(e),a=s/i;return e=="WP_G_HVY_Beam_01"?this.s(e,"refireTime")*(t-Math.ceil(a))+Math.floor(a)*(this.s(e,"reloadTime")+this.s(e,"spinupTime")):t==1?this.s(e,"spinupTime"):this.s(e,"spinupTime")+this.s(e,"refireTime")*(t-Math.ceil(a))+Math.floor(a)*this.s(e,"reloadTime")},dmgPerBullet:function(e){return(this.s(e,"directDamage")+this.s(e,"radialDamage"))*this.falloffMultiplier(e)*this.penetrationMultiplier(e)},dmgPerBulletHS:function(e){return(this.s(e,"directDamage")+this.s(e,"radialDamage"))*this.falloffMultiplier(e)*this.penetrationMultiplier(e)*(y.selected==="PlayerDefault"?this.s(e,"weakDamageMultiplier"):1)},falloffMultiplier:function(e){let s=parseInt(X.distance)*100,t=this.s(e,"FalloffStart"),i=this.s(e,"FalloffEnd"),a=this.s(e,"FalloffMultiplier");if(s>=i)return a;if(s<=t)return 1;let n=s-t,o=i-t;return 1-n/o*(1-a)},headShotMult:function(e,s){if(y.selected!="PlayerDefault")return 1;let t=this.s(e,"weakDamageMultiplier"),i=se.HSValue;return s&&(i=s),1+(t-1)*i/100},creatureDamageMult:function(e){if(y.selected!="PlayerDefault"){const s=R.getAttachmentEffects(e);if(s.DamageEnemyMultiplier)return s.DamageEnemyMultiplier.value}return 1},getShotModifiers:function(e,s,t){return this.headShotMult(e,t)*this.penetrationMultiplier(e,s)*this.falloffMultiplier(e)*this.creatureDamageMult(e)},savedWeaponData:{},s:function(e,s){let t;this.savedWeaponData[e]?t=this.savedWeaponData[e]:(t=k[e],this.savedWeaponData[e]=t);let i=R.getAttachmentEffects(e),a=t[s];if(i.hasOwnProperty(s)){let n=i[s];if(n.type=="Additive")return a+n.value;if(n.type=="Multiplicitive_PreAdd")return a*n.value;if(n.type=="Override")return n.value}else return a}};let Nt={Chart:{colorSet:"colorSet1"},Title:{fontFamily:"sans-ui",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:"Refinery, Helvetica",labelFontFamily:"Refinery, Helvetica",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:"Refinery, Helvetica"},DataSeries:{indexLabelFontColor:"red",indexLabelFontFamily:"Refinery, Helvetica",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}};CanvasJS.addTheme("Pnoexz",Nt);function G(){let e=[],s=I[y.selected],t=s.health,i=s.armorConstant,a=s.minDamageReduction,n=s.maxDamageReduction;for(let _=-40;_<=40;_++){let u=t+Math.abs(_)*i*t,f=t/u;_>0&&(f=2-f),f>n&&(f=n),f<a&&(f=a),e.push({x:_,y:b(f)})}let o=[{type:"spline",dataPoints:e,showInLegend:!0,legendText:"DMG Multiplier",lineThickness:2}];for(let _ in h.list){let u=h.list[_],f;y.selected=="PlayerDefault"&&y.selected!="None"?f=r.s(u,"penetration")-T[H.selected].armorAmount:f=r.s(u,"penetration")-s.armorValue;let M=b(r.penetrationMultiplier(u));o.push({type:"spline",showInLegend:!0,legendText:k[h.list[_]].inGameName,dataPoints:[{x:f,y:M,indexLabel:String(M),markerSize:10,indexLabelPlacement:"auto"}],indexLabelPlacement:"inside"})}new CanvasJS.Chart("penChart",{title:{text:"Penetration"},theme:"Pnoexz",legend:{horizontalAlign:"center",fontSize:15,verticalAlign:"top"},axisY:{title:"damage multiplier",includeZero:!0,minimum:0,maximum:2,interval:.2},axisX:{title:"penetration - armor",gridThickness:1},data:o}).render()}function q(){let e=[];for(let t in h.list){let i=h.list[t],a=[];for(let n=0;n<=200;n++){let o=n*100,m=r.s(i,"FalloffStart"),_=r.s(i,"FalloffEnd"),u=r.s(i,"FalloffMultiplier");if(o>=_)a.push({x:n,y:u});else if(o<=m)a.push({x:n,y:1});else{let f=o-m,M=_-m;a.push({x:n,y:b(1-f/M*(1-u))})}}e.push({type:"spline",showInLegend:!0,legendText:k[i].inGameName,dataPoints:a,lineThickness:3})}new CanvasJS.Chart("falloffChart",{title:{text:"Falloff"},theme:"Pnoexz",legend:{horizontalAlign:"center",fontSize:15,verticalAlign:"top"},axisY:{title:"falloff multiplier",includeZero:!0,minimum:0,maximum:1.2,interval:.1},axisX:{title:"distance (m)",gridThickness:1,stripLines:[{value:X.distance,showOnTop:!0}]},data:e}).render()}const Rt=""+new URL("../calc-images/Attachment_Icon.png",import.meta.url).href;const J=e=>(O("data-v-e07a8ea4"),e=e(),F(),e),Wt=J(()=>l("img",{src:Rt},null,-1)),Gt=[Wt],Vt={class:"attachment-list"},Kt=J(()=>l("p",null," Selected attachments: ",-1)),Et={key:0},jt={key:0,class:"modal__bg"},zt=J(()=>l("h2",null," Attachment Selector ",-1)),Ut={class:"attachment-container"},Yt=["onClick"],qt={key:0},Xt=J(()=>l("p",{class:"center"}," This weapon has no attachments available. ",-1)),Jt=[Xt],Zt={name:"AttachmentSelector",props:["weapon"],data(){return{attachmentData:C,showModal:!1,selectedAttachments:$,keyNames:re}},methods:{groupAttachments(e){return R.groupAttachments(e)},getAttachments(e){return R.getAttachments(e)},colourClassGiver(e){let s="";return s+=C[e].rarity.toLowerCase(),console.log($.list[this.weapon],e),$.list[this.weapon]&&$.list[this.weapon].includes(e)&&(s+=" active"),s}}},Qt=Object.assign(Zt,{setup(e){const s=x(!1),t=x(null);return U(t,()=>s.value=!1),(i,a)=>{const n=D("font-awesome-icon");return c(),d(S,null,[l("button",{class:"",type:"button",onClick:a[0]||(a[0]=V(o=>s.value=!0,["prevent"]))},Gt),l("div",Vt,[Kt,(c(!0),d(S,null,A(v($).list[e.weapon],o=>(c(),d("p",null,p(v(C)[o].IGN)+" ("+p(v(C)[o].rarity)+")",1))),256)),!v($).list[e.weapon]||v($).list[e.weapon].length==0?(c(),d("p",Et," None ")):L("",!0)]),(c(),K(z,{to:"#modal"},[g(j,{name:"modal"},{default:E(()=>[s.value?(c(),d("div",jt,[l("section",{class:"modal__content modal__small",ref_key:"modal",ref:t},[l("button",{onClick:a[1]||(a[1]=o=>s.value=!1),class:"modal__close-button","aria-label":"Close Modal",type:"button"},[g(n,{icon:"fa-solid fa-xmark"})]),zt,l("div",Ut,[(c(!0),d(S,null,A(i.groupAttachments(e.weapon),(o,m)=>(c(),d("div",{class:"attachment-selector",key:m},[l("h3",null,p(i.keyNames[m]),1),(c(!0),d(S,null,A(o,(_,u)=>(c(),d("p",{key:u,class:P(i.colourClassGiver(_)),onClick:f=>v($).toggleSelected(e.weapon,_,u)},p(v(C)[_].IGN)+" ("+p(v(C)[_].rarity)+") ",11,Yt))),128))]))),128)),i.getAttachments(e.weapon).length==0?(c(),d("div",qt,Jt)):L("",!0)])],512)])):L("",!0)]),_:1})]))],64)}}}),wt=B(Qt,[["__scopeId","data-v-e07a8ea4"]]),es=""+new URL("../calc-images/Body_Chart.png",import.meta.url).href;const Z=e=>(O("data-v-793e6d67"),e=e(),F(),e),ts=Z(()=>l("img",{src:es},null,-1)),ss=[ts],as={key:0,class:"modal__bg"},is=Z(()=>l("h2",null," Body Chart ",-1)),ls=Z(()=>l("p",null," Damage per bullet ",-1)),ns={id:"figure"},os={id:"head"},rs={id:"chest"},cs={id:"hip"},ds={id:"legs"},us=Z(()=>l("span",{id:"comment"}," Spuddy \u21B4 ",-1)),ms=ue({props:["weapon"],data(){return{showModal:!1,head:0,chest:0,hip:0,legs:0,selectedAttachments:$,selectedArmor:H}},mounted(){this.updateChart()},methods:{updateChart(){this.head=b((r.s(this.weapon,"directDamage")+r.s(this.weapon,"radialDamage"))*r.penetrationMultiplier(this.weapon)*r.s(this.weapon,"amountOfImmediateFires")*r.s(this.weapon,"weakDamageMultiplier")),this.chest=b((r.s(this.weapon,"directDamage")+r.s(this.weapon,"radialDamage"))*r.penetrationMultiplier(this.weapon)*r.s(this.weapon,"amountOfImmediateFires")*1),this.hip=b((r.s(this.weapon,"directDamage")+r.s(this.weapon,"radialDamage"))*r.penetrationMultiplier(this.weapon)*r.s(this.weapon,"amountOfImmediateFires")*1.1),this.legs=b((r.s(this.weapon,"directDamage")+r.s(this.weapon,"radialDamage"))*r.penetrationMultiplier(this.weapon)*r.s(this.weapon,"amountOfImmediateFires")*.8)}},watch:{selectedAttachments:{deep:!0,handler(){this.updateChart()}},selectedArmor:{deep:!0,handler(){this.updateChart()}}}}),hs=Object.assign(ms,{__name:"BodyChart",setup(e){const s=x(!1),t=x(null);return U(t,()=>s.value=!1),(i,a)=>{const n=D("font-awesome-icon");return c(),d(S,null,[l("button",{class:"",type:"button",onClick:a[0]||(a[0]=V(o=>s.value=!0,["prevent"]))},ss),(c(),K(z,{to:"#modal"},[g(j,{name:"modal"},{default:E(()=>[s.value?(c(),d("div",as,[l("section",{class:"modal__content modal__small",ref_key:"modal",ref:t},[l("button",{onClick:a[1]||(a[1]=o=>s.value=!1),class:"modal__close-button","aria-label":"Close Modal",type:"button"},[g(n,{icon:"fa-solid fa-xmark"})]),is,ls,l("div",ns,[l("span",os,p(i.head),1),l("span",rs,p(i.chest),1),l("span",cs,p(i.hip),1),l("span",ds,p(i.legs),1),us])],512)])):L("",!0)]),_:1})]))],64)}}}),fs=B(hs,[["__scopeId","data-v-793e6d67"]]);const _s={components:{AttachmentSelector:wt,BodyChart:fs},data(){return{selectedWeapons:h,selectedArmor:H,selectedTarget:y,selectedHSValue:se,selectedDistance:X,selectedAttachments:$,weaponData:k,keyNames:re,detailedKeyNames:Ne,flippedKeys:Re,compareData:[],colourList:{},detailedStats:{},collapsed:!0}},methods:{rarity(e){return"var(--rarity-color-"+["none","common","uncommon","rare","epic","exotic","legendary"][e]+")"},getDetailedStats(e,s){const t=this.detailedStats[e];return t?s?s=="Shield"?Object.keys(t).filter(i=>i.includes("$")).reduce((i,a)=>Object.assign(i,{[a]:t[a]}),{}):s=="Helmet"?Object.keys(t).filter(i=>i.includes("&")).reduce((i,a)=>Object.assign(i,{[a]:t[a]}),{}):t:Object.fromEntries(Object.entries(t).filter(([i])=>!i.includes("%"))):{}},colourClassGiver(e,s){let t=R.getAttachmentEffects(s),i="";if(Object.keys(this.colourList).length!=1)return t[e]&&(i+="modified "),this.colourList[s]&&(i+=this.colourList[s][e]),i},filter(e){let s={};for(let t in e)typeof e[t]!="object"&&t!="inGameName"&&(s[t]=e[t]);return s},updateColourList(){const e=[],s={};for(let t in h.list)e.push(this.weaponData[h.list[t]]),s[h.list[t]]={};for(const t in e[0]){if(typeof r.s(h.list[0],t)!="number")continue;let a=[];for(const o in h.list){const m=r.s(h.list[o],t);typeof m=="number"&&a.push(m)}let n;this.flippedKeys.includes(t)?n=Math.min.apply(null,a):n=Math.max.apply(null,a);for(const o in h.list)a[o]==n?s[h.list[o]][t]="highest-value":s[h.list[o]][t]="lowest-value";if(a.every((o,m,_)=>o===_[0]))for(const o in h.list){let m=h.list[o];s[m][t]="equal-value"}}this.colourList=s},updateDetailedStats(){const e={};for(let s in h.list){let t=h.list[s];e[t]={},e[t].penetrationMultiplier=b(r.penetrationMultiplier(t)),e[t].roundsPerMinute=Math.round(r.roundsPerMinute(t)),e[t].adjustedRPM=Math.round(r.adjustedRPM(t)),e[t].damagePerSecond=Math.round(r.damagePerSecond(t)),e[t].adjustedDPS=Math.round(r.adjustedDPS(t)),e[t].damagePerMag=Math.round(r.damagePerMag(t)),e[t].timeToEmpty=b(r.timeToEmpty(t)),e[t].shotsToKill=Math.round(r.shotsToKill(t)),e[t].timeToKill=b(r.timeToKill(t)),e[t].dmgPerBullet=b(r.dmgPerBullet(t)),e[t].dmgPerBulletHS=b(r.dmgPerBulletHS(t)),e[t]["noShield$%"]=Math.round(r.shotsToKill(t,0,0)),e[t]["commonShield$%"]=Math.round(r.shotsToKill(t,T.Shield_01.armorAmount,0)),e[t]["uncommonShield$%"]=Math.round(r.shotsToKill(t,T.Shield_02.armorAmount,0)),e[t]["rareShield$%"]=Math.round(r.shotsToKill(t,T.Shield_03.armorAmount,0)),e[t]["epicShield$%"]=Math.round(r.shotsToKill(t,T.Shield_04.armorAmount,0)),e[t]["exoticShield$%"]=Math.round(r.shotsToKill(t,T.Shield_05.armorAmount,0)),e[t]["legendaryShield$%"]=Math.round(r.shotsToKill(t,T.Shield_Altered_03.armorAmount,0)),e[t]["noHelmet&%"]=Math.round(r.shotsToKill(t,0,100)),e[t]["commonHelmet&%"]=Math.round(r.shotsToKill(t,N.Helmet_01.armorAmount,100)),e[t]["uncommonHelmet&%"]=Math.round(r.shotsToKill(t,N.Helmet_02.armorAmount,100)),e[t]["rareHelmet&%"]=Math.round(r.shotsToKill(t,N.Helmet_03.armorAmount,100)),e[t]["epicHelmet&%"]=Math.round(r.shotsToKill(t,N.Helmet_04.armorAmount,100)),e[t]["exoticHelmet&%"]=Math.round(r.shotsToKill(t,N.Helmet_05.armorAmount,100)),e[t]["legendaryHelmet&%"]=Math.round(r.shotsToKill(t,N.Helmet_Altered_03.armorAmount,100))}this.detailedStats=e;for(let s in e[h.list[0]]){let t=[];for(let a in h.list)t.push(e[h.list[a]][s]);let i;this.flippedKeys.includes(s)||s.includes("%")?i=Math.min.apply(null,t):i=Math.max.apply(null,t);for(let a in h.list)t[a]==i?this.colourList[h.list[a]][s]="highest-value":this.colourList[h.list[a]][s]="lowest-value";if(t.every((a,n,o)=>a===o[0]))for(let a in h.list)this.colourList[h.list[a]][s]="equal-value"}},stat(e,s){return r.s(e,s)},attachmentStat(e,s){let i=R.getAttachmentEffects(e)[s];if(!!i){if(i.type=="Additive")return"+ "+i.value+" = "+this.stat(e,s);if(i.type=="Multiplicitive_PreAdd"){let a=this.weaponData[e][s],n=this.stat(e,s),o=b(n-a),m=Math.round((i.value-1)*100);return s=="ammoInClip"?(o>0?"+"+Math.round(o):Math.round(o))+" ("+(m>0?"+"+m:m)+"%) = "+Math.round(this.stat(e,s)):(o>0?"+"+o:o)+" ("+(m>0?"+"+m:m)+"%) = "+this.stat(e,s)}if(i.type=="Override")return"\u2192 "+i.value+" = "+this.stat(e,s)}}},watch:{selectedWeapons:{deep:!0,handler(){this.updateColourList(),this.updateDetailedStats(),G(),q()}},selectedAttachments:{deep:!0,handler(){this.updateColourList(),this.updateDetailedStats(),G(),q()}},selectedTarget:{deep:!0,handler(){this.updateDetailedStats(),G()}},selectedArmor:{deep:!0,handler(){this.updateDetailedStats(),G()}},selectedHSValue:{deep:!0,handler(){this.updateDetailedStats()}},selectedDistance:{deep:!0,handler(){this.updateDetailedStats(),q()}}},mounted(){this.updateColourList(),this.updateDetailedStats()}},ae=e=>(O("data-v-5cfcf66c"),e=e(),F(),e),ps={class:"table-container"},vs={class:"flex-item header-row"},gs=Y(" Stats "),Ss=ae(()=>l("span",null," Expand stats ",-1)),ys={key:0},Ds=ae(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[l("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"})],-1)),Ms=[Ds],Cs={key:1},bs=ae(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[l("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"})],-1)),As=[bs],Ts=ne("<h2 data-v-5cfcf66c> Detailed Stats </h2><p data-v-5cfcf66c><span data-v-5cfcf66c> Penetration Multiplier </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Rounds per Minute </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Reload Adjust RPM </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Damage per Second </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Reload Adjusted DPS </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Damage per Mag </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Time to Empty Mag (s) </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Shots to Kill </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Time to Kill (s) </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Damage per Bullet</span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Damage per Bullet (HS) </span></p><h2 data-v-5cfcf66c> Shots to Kill </h2><p data-v-5cfcf66c><span data-v-5cfcf66c> Shield </span></p><p data-v-5cfcf66c><span data-v-5cfcf66c> Helmet </span></p>",15),$s={class:"inner-container"},Ps={class:"flex-item"},xs=["src"],Bs=["src"],Is=["src"],Ls={class:"small"},ks={class:"small"},Hs={class:"button-container"},Os={class:"delete-button"},Fs=["onClick"];function Ns(e,s,t,i,a,n){const o=D("BodyChart"),m=D("AttachmentSelector"),_=me("tooltip");return c(),d("section",ps,[l("div",vs,[l("h2",null,[gs,Ss,ee((c(),d("span",{class:"collapse-button",onClick:s[0]||(s[0]=u=>a.collapsed=!a.collapsed),role:"button","aria-label":"Collapse this section"},[a.collapsed?(c(),d("span",Cs,As)):(c(),d("span",ys,Ms))])),[[_,{content:"Collapse/Expand stats"}]])]),l("div",{class:P(["stats-wrapper",{collapsed:a.collapsed}])},[(c(!0),d(S,null,A(n.filter(a.weaponData.WP_A_Pistol_Bullet_01),(u,f)=>(c(),d("p",null,[l("span",null,p(a.keyNames[f]),1)]))),256))],2),Ts]),l("div",$s,[(c(!0),d(S,null,A(a.selectedWeapons.list,u=>(c(),d("div",Ps,[l("h2",null,[Y(p(a.weaponData[u].inGameName)+" ",1),l("img",{class:"weapon-image",src:"calc-images/"+a.weaponData[u].inGameName+".png"},null,8,xs)]),l("div",{class:P(["stats-wrapper",{collapsed:a.collapsed}])},[(c(!0),d(S,null,A(n.filter(a.weaponData[u]),(f,M)=>(c(),d("p",null,[l("span",{class:P(n.colourClassGiver(M,u))},p(f)+" "+p(n.attachmentStat(u,M)),3)]))),256))],2),l("h2",null,[Y(p(a.weaponData[u].inGameName)+" ",1),l("img",{class:"weapon-image",src:"calc-images/"+a.weaponData[u].inGameName+".png"},null,8,Bs)]),(c(!0),d(S,null,A(n.getDetailedStats(u,void 0),(f,M)=>(c(),d("p",null,[l("span",{class:P(n.colourClassGiver(M,u))},p(f),3)]))),256)),l("h2",null,[Y(p(a.weaponData[u].inGameName)+" ",1),l("img",{class:"weapon-image",src:"calc-images/"+a.weaponData[u].inGameName+".png"},null,8,Is)]),l("p",Ls,[(c(!0),d(S,null,A(n.getDetailedStats(u,"Shield"),(f,M,Q)=>(c(),d("span",{class:P(n.colourClassGiver(M,u)),style:ie({"--clr":n.rarity(Q)})},p(f),7))),256))]),l("p",ks,[(c(!0),d(S,null,A(n.getDetailedStats(u,"Helmet"),(f,M,Q)=>(c(),d("span",{class:P(n.colourClassGiver(M,u)),style:ie({"--clr":n.rarity(Q)})},p(f),7))),256))]),l("div",Hs,[g(o,{weapon:u},null,8,["weapon"]),g(m,{weapon:u},null,8,["weapon"])]),l("div",Os,[l("button",{onClick:f=>a.selectedWeapons.toggleSelected(u)}," Remove Weapon ",8,Fs)])]))),256))])])}const Rs=B(_s,[["render",Ns],["__scopeId","data-v-5cfcf66c"]]);const Ws={components:{Selector:Ft,WeaponComparer:Rs,AccuracySelector:ce,DistanceSelector:de},mounted(){window.history.pushState({},document.title,location.pathname.replace(".html","")),G(),q(),We()}},Gs=e=>(O("data-v-f55ef711"),e=e(),F(),e),Vs=Gs(()=>l("div",{class:"header"},[l("h1",null,"Weapon Calculator")],-1)),Ks={class:"main-container"},Es=ne('<section data-v-f55ef711><div class="header" data-v-f55ef711><h1 data-v-f55ef711>Charts</h1><p data-v-f55ef711>The following charts show the detailed stats above in a visual way. More charts will be added in the future.</p></div><div class="outer-chart-container" data-v-f55ef711><div class="chart-container" data-v-f55ef711><h2 data-v-f55ef711>Penetration Chart</h2><div class="inner-chart-container" data-v-f55ef711><div id="penChart" data-v-f55ef711>CHART HERE!</div></div></div><div class="chart-container" data-v-f55ef711><h2 data-v-f55ef711>Falloff Chart</h2><div class="inner-chart-container" data-v-f55ef711><div id="falloffChart" data-v-f55ef711>Chart HERE!</div></div></div></div></section>',1);function js(e,s,t,i,a,n){const o=D("Selector"),m=D("WeaponComparer");return c(),d("section",null,[l("section",null,[Vs,l("div",Ks,[g(o),g(m)])]),Es])}const zs=B(Ws,[["render",js],["__scopeId","data-v-f55ef711"]]);he.add(fe,_e,pe,ve,ge,Se,ye,De,Me,Ce,be,Ae,Te,$e,Pe,xe);const Us=te(zs).component("font-awesome-icon",oe).use(Be).use(Ie);Us.mount("main");const Ys=te(Le).component("font-awesome-icon",oe);Ys.mount("nav");const qs=te(ke);qs.mount("footer");
