"use strict";(self["webpackChunkshoe_shop"]=self["webpackChunkshoe_shop"]||[]).push([[451],{3451:function(e,a,n){n.r(a),n.d(a,{default:function(){return W}});var m=n(3396),s=n(4870),i=n(7139),d=n(8529),l=n(5943),o=n(466);const t={class:"goods-image"},r=["src"],c={class:"small"},v=["onMouseenter","src"];var u={__name:"goods-image",props:{images:Array,default:()=>[]},setup(e){const a=(0,s.iH)(0),n=(0,s.iH)(!1),d=(0,s.qj)({left:0,top:0}),l=(0,s.qj)({backgroundPositionX:0,backgroundPositionY:0}),u=(0,s.iH)(null),{elementX:p,elementY:b,isOutside:g}=(0,o.jYR)(u);return(0,m.YP)([p,b,g],(()=>{n.value=!g.value;const e={x:0,y:0};p.value<100?e.x=0:p.value>420?e.x=320:e.x=p.value-100,b.value<100?e.y=0:b.value>300?e.y=200:e.y=b.value-100,d.left=e.x+"px",d.top=e.y+"px",l.backgroundPositionX=-1.5*e.x+"px",l.backgroundPositionY=-1.5*e.y+"px"})),(n,s)=>((0,m.wg)(),(0,m.iD)("div",t,[(0,m._)("div",{class:"middle",ref_key:"target",ref:u},[(0,m._)("img",{src:e.images[a.value],alt:""},null,8,r)],512),(0,m._)("ul",c,[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.images,((e,n)=>((0,m.wg)(),(0,m.iD)("li",{key:e,class:(0,i.C_)({active:n===a.value})},[(0,m._)("img",{onMouseenter:e=>a.value=n,src:e,alt:""},null,40,v)],2)))),128))])]))}},p=n(89);const b=(0,p.Z)(u,[["__scopeId","data-v-b2b5f0dc"]]);var g=b;const y=e=>((0,m.dD)("data-v-39197009"),e=e(),(0,m.Cn)(),e),_={class:"goods-sku"},h=y((()=>(0,m._)("dt",null,"Size :",-1))),f=["onClick"];var k={__name:"goods-sku",props:{goods:{type:Object,default:()=>({})}},emits:["change"],setup(e,{emit:a}){const n=(e,n)=>{if(n.disabled)return!1;n.selected?n.selected=!1:(e.values.forEach((e=>{e.selected=!1})),n.selected=!0),n.selected?a("change",{size:n.name}):a("change",null)};return(a,s)=>((0,m.wg)(),(0,m.iD)("div",_,[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.goods.specs,(e=>((0,m.wg)(),(0,m.iD)("dl",{key:e.name},[h,(0,m._)("dd",null,[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.values,(a=>((0,m.wg)(),(0,m.iD)("span",{key:a.name,class:(0,i.C_)({selected:a.selected,disabled:a.disabled}),onClick:m=>n(e,a)},(0,i.zw)(a.name),11,f)))),128))])])))),128))]))}};const z=(0,p.Z)(k,[["__scopeId","data-v-39197009"]]);var w=z,S=n(4677),D=n(2483);const x=e=>((0,m.dD)("data-v-d553b5ee"),e=e(),(0,m.Cn)(),e),C={class:"ss-goods-page"},H={class:"container"},R={key:0,class:"goods-info"},Y={class:"media"},j={class:"goods-image"},I=(0,m.uE)('<ul class="goods-sales" data-v-d553b5ee><li data-v-d553b5ee><p data-v-d553b5ee>商品銷量</p><p data-v-d553b5ee>100+</p><p data-v-d553b5ee><i class="iconfont icon-task-filling" data-v-d553b5ee></i>人氣</p></li><li data-v-d553b5ee><p data-v-d553b5ee>商品評價</p><p data-v-d553b5ee>200+</p><p data-v-d553b5ee><i class="iconfont icon-comment-filling" data-v-d553b5ee></i>評價</p></li><li data-v-d553b5ee><p data-v-d553b5ee>商品收藏</p><p data-v-d553b5ee>80+</p><p data-v-d553b5ee><i class="iconfont icon-favorite-filling" data-v-d553b5ee></i>收藏</p></li><li data-v-d553b5ee><p data-v-d553b5ee>品牌資訊</p><p data-v-d553b5ee>99+</p><p data-v-d553b5ee><i class="iconfont icon-dynamic-filling" data-v-d553b5ee></i>品牌</p></li></ul>',1),X={class:"spec"},A={class:"goods-main"},N={class:"goods-name"},P={class:"goods-price"},U={key:1,class:"goods-footer"},J={class:"goods-article"},F=x((()=>(0,m._)("h2",null,"商品詳情",-1))),K=["src"];var M={__name:"index",setup(e){const{params:a}=(0,D.yj)(),n=a.id,o=(0,s.iH)(null),t=(0,S.pm)();(0,m.bv)((async()=>{o.value=l.a.filter((e=>e.id===n))[0],o.value.images=[`https://vtjoho.b-cdn.net/shoeshop/${o.value.id}_1.png`,`https://vtjoho.b-cdn.net/shoeshop/${o.value.id}_2.png`,`https://vtjoho.b-cdn.net/shoeshop/${o.value.id}_3.png`]}));const r=(0,s.iH)(1),c=(0,m.Fl)((()=>o.value?(o.value.inventory=parseInt(o.value.inventory),o.value.inventory>0?o.value?.inventory:1):1)),v=(0,s.iH)(""),u=e=>{v.value=e},{cart:p}=(0,d.Z)(),b=()=>{if(!v.value)return void t.info("請選擇正確的商品尺寸與數量",{timeout:3e3});if(!o.value)return;const e={skuId:o.value.id+v.value.size,id:o.value.id,name:o.value.name,price:o.value.price,size:v.value.size,count:r.value,selected:!0,isEffective:!0};p.addCart(e)};return(e,a)=>{const n=(0,m.up)("SsCount"),d=(0,m.up)("SsButton");return(0,m.wg)(),(0,m.iD)("div",C,[(0,m._)("div",H,[o.value?((0,m.wg)(),(0,m.iD)("div",R,[(0,m._)("div",Y,[(0,m._)("div",j,[(0,m.Wm)((0,s.SU)(g),{images:o.value.images},null,8,["images"])]),I]),(0,m._)("div",X,[(0,m._)("div",A,[(0,m._)("p",N,(0,i.zw)(o.value.name),1),(0,m._)("p",P,[(0,m._)("span",null,(0,i.zw)(o.value.price),1)])]),(0,m.Wm)((0,s.SU)(w),{goods:o.value,onChange:u},null,8,["goods"]),(0,m.Wm)(n,{"is-label":"",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),min:1,max:(0,s.SU)(c)},null,8,["modelValue","max"]),(0,m.Wm)(d,{onClick:b,size:"middle",type:"primary",style:{"margin-top":"40px"}},{default:(0,m.w5)((()=>[(0,m.Uk)(" 加入購物車 ")])),_:1})])])):(0,m.kq)("",!0),o.value?((0,m.wg)(),(0,m.iD)("div",U,[(0,m._)("div",J,[F,(0,m._)("p",null,(0,i.zw)(o.value.name),1),(0,m._)("ul",null,[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(o.value.images,(e=>((0,m.wg)(),(0,m.iD)("li",{key:e},[(0,m._)("img",{src:e,alt:""},null,8,K)])))),128))])])])):(0,m.kq)("",!0)])])}}};const O=(0,p.Z)(M,[["__scopeId","data-v-d553b5ee"]]);var W=O},5943:function(e){e.exports=JSON.parse('{"a":[{"id":"a01","name":"DAILY 3.0 SHOES","price":"62","brand":"adidas","inventory":"10","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a02","name":"Questar Flow NXT Running Shoes","price":"75","brand":"adidas","inventory":"8","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a03","name":"Ultraboost 22 Running Shoes","price":"143","brand":"adidas","inventory":"6","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a04","name":"Stan Smith Shoes","price":"80","brand":"adidas","inventory":"2","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a05","name":"Nite Jogger Shoes","price":"170","brand":"adidas","inventory":"12","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a06","name":"Superstar Shoes","price":"100","brand":"adidas","inventory":"30","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a07","name":"Ultra 4DFWD Running Shoes","price":"220","brand":"adidas","inventory":"20","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a08","name":"NMD_R1 Shoes","price":"128","brand":"adidas","inventory":"15","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a09","name":"NMD_R1 Primeblue Shoes","price":"160","brand":"adidas","inventory":"7","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"a10","name":"Kaptir 2.0 Shoes","price":"72","brand":"adidas","inventory":"6","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"n01","name":"Nike Pegasus 39","price":"103","brand":"nike","inventory":"10","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"n02","name":"Nike Air Max 270","price":"160","brand":"nike","inventory":"10","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"n03","name":"Air Jordan 1 Retro High OG","price":"180","brand":"nike","inventory":"20","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"n04","name":"Air Jordan 7 Retro","price":"210","brand":"nike","inventory":"16","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"n05","name":"Air Jordan XXXVII","price":"185","brand":"nike","inventory":"50","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"n06","name":"Air Jordan 2 Retro","price":"200","brand":"nike","inventory":"3","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"nb01","name":"990v6","price":"200","brand":"newbalance","inventory":"10","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"nb02","name":"574 Core","price":"85","brand":"newbalance","inventory":"10","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"nb03","name":"2002R","price":"140","brand":"newbalance","inventory":"20","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"nb04","name":"Fresh Foam X Hierro v7","price":"200","brand":"newbalance","inventory":"20","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]},{"id":"nb05","name":"993 Core","price":"200","brand":"newbalance","inventory":"12","specs":[{"name":"size","values":[{"name":"7"},{"name":"7.5"},{"name":"8"},{"name":"8.5"},{"name":"9"},{"name":"9.5"},{"name":"10"},{"name":"10.5"},{"name":"11"},{"name":"11.5"},{"name":"12"},{"name":"12.5"},{"name":"13"},{"name":"14"}]}]}]}')}}]);
//# sourceMappingURL=451.feb65488.js.map