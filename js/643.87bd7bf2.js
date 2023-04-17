"use strict";(self["webpackChunkshoe_shop"]=self["webpackChunkshoe_shop"]||[]).push([[643],{8529:function(e,s,t){t.d(s,{Z:function(){return u}});t(541);var r=t(3766);const i=(0,r.Q_)("cart",{persist:{key:"shoe-shop-cart"},state:()=>({list:[]}),getters:{effectiveList(){return this.list.filter((e=>e.count>0&&e.isEffective))},effectiveListCounts(){return this.effectiveList.reduce(((e,s)=>e+s.count),0)},effectiveListPrice(){return this.effectiveList.reduce(((e,s)=>e+s.count*Number(s.price)),0).toFixed(2)},isAllSelected(){return 0!==this.effectiveList.length&&this.effectiveList.every((e=>e.selected))},selectedList(){return this.effectiveList.filter((e=>e.selected))},selectedListCounts(){return this.selectedList.reduce(((e,s)=>e+s.count),0)},selectedListPrice(){return this.selectedList.reduce(((e,s)=>e+s.count*Number(s.price)),0).toFixed(2)}},actions:{async addCart(e){const{skuId:s,count:t}=e,r=this.list.find((e=>e.skuId===s));r?r.count+=t:this.list.unshift(e)},async getCartList(){this.list.forEach((async e=>{}))},async deleteCart(e){this.list=this.list.filter((s=>!e.includes(s.skuId)))},async deleteCartBySelected(){this.list=this.list.filter((e=>!e.selected))},async updateCart(e,s){const{selected:t,count:r}=s,i=this.list.find((s=>s.skuId===e));i&&(void 0!==r&&(i.count=r),void 0!==t&&(i.selected=t))},async updateCartAllSelected(e){const{selected:s}=e;this.list.forEach((e=>{e.selected=s}))},clearCart(){this.list=[]}}});var c=i;const d=(0,r.Q_)("address",{persist:{key:"shoe-shop-address"},state:()=>({receiver:null,phone:null,address:null}),getters:{getAddress(){return{receiver:this.receiver,phone:this.phone,address:this.address}}},actions:{async updateAddress(e){const{receiver:s,phone:t,address:r}=e;this.receiver=s,this.phone=t,this.address=r}}});var n=d;const a=(0,r.Q_)("order",{persist:{key:"shoe-shop-order"},state:()=>({list:[]}),getters:{getOrder(){return this.list}},actions:{async addOrder(e){this.list.unshift(e)}}});var l=a;const o=()=>({cart:c(),address:n(),order:l()});var u=o},7643:function(e,s,t){t.r(s),t.d(s,{default:function(){return H}});var r=t(3396),i=t(4870),c=t(7139);const d=e=>((0,r.dD)("data-v-9cf6b6c2"),e=e(),(0,r.Cn)(),e),n={class:"order-item"},a={class:"head"},l={class:"order-detail"},o={class:"column goods"},u={class:"image",href:"javascript:;"},h=["src","alt"],v={class:"info"},p={class:"name"},f={class:"price"},_={class:"price"},y={class:"count"},g={class:"delivery"},w={class:"pay"},m={class:"column amount"},k=d((()=>(0,r._)("p",null,"總金額  ",-1))),L={class:"red"};var C={__name:"order-item",props:{order:{type:Object,default:null}},setup(e){return(s,t)=>{const i=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",a,[(0,r._)("span",null,"訂單編號："+(0,c.zw)(e.order.orderId),1),(0,r._)("span",null,"下單時間："+(0,c.zw)(new Date(e.order.orderTime).toLocaleString()),1)]),(0,r._)("div",l,[(0,r._)("div",o,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.order.goods,(s=>((0,r.wg)(),(0,r.iD)("li",{key:s.id},[(0,r.Wm)(i,{to:`/goods/${s.id}`},{default:(0,r.w5)((()=>[(0,r._)("span",u,[(0,r._)("img",{src:`https://vtjoho.b-cdn.net/shoeshop/${s.id}_1.png`,alt:s.name},null,8,h)]),(0,r._)("div",v,[(0,r._)("p",p,(0,c.zw)(s.name),1)])])),_:2},1032,["to"]),(0,r._)("div",f,"$"+(0,c.zw)(s.price),1),(0,r._)("div",_,"size: "+(0,c.zw)(s.size),1),(0,r._)("div",y,"x "+(0,c.zw)(s.count),1),(0,r._)("div",g,"配送： "+(0,c.zw)(e.order.deliveryTime),1),(0,r._)("div",w,(0,c.zw)(e.order.pay),1)])))),128))])]),(0,r._)("div",m,[k,(0,r._)("p",L,"$"+(0,c.zw)(e.order.summary.totalPrice),1)])])])}}},z=t(89);const D=(0,z.Z)(C,[["__scopeId","data-v-9cf6b6c2"]]);var b=D,I=t(8529);const j=e=>((0,r.dD)("data-v-7a9e37e5"),e=e(),(0,r.Cn)(),e),x={class:"order"},A={key:0,class:"order-list container"},O={key:1,class:"empty-order container"},S=j((()=>(0,r._)("p",null,"目前沒有訂單",-1))),Z=[S];var $={__name:"index",setup(e){const{order:s}=(0,I.Z)(),t=(0,i.iH)(null);return(0,r.bv)((async()=>{t.value=s.getOrder})),(e,s)=>((0,r.wg)(),(0,r.iD)("div",x,[0!==t.value?.length?((0,r.wg)(),(0,r.iD)("div",A,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.value,(e=>((0,r.wg)(),(0,r.j4)(b,{key:e.orderId,order:e},null,8,["order"])))),128))])):((0,r.wg)(),(0,r.iD)("div",O,Z))]))}};const E=(0,z.Z)($,[["__scopeId","data-v-7a9e37e5"]]);var H=E}}]);
//# sourceMappingURL=643.87bd7bf2.js.map