webpackJsonp([1],{"+Sec":function(t,e){},"1DHf":function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"vux-label-desc"},[this._t("default")],2)},staticRenderFns:[]};var n=i("VU/8")({name:"inline-desc"},a,!1,function(t){i("6N8X")},null,null).exports,s=i("0FxO"),l=i("2IIR"),r=i("wmxo"),o=i("vLYD"),c=(Object(l.a)(),{name:"cell",components:{InlineDesc:n},props:Object(l.a)(),created:function(){0},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return Object(r.a)({width:Object(o.a)(this,"labelWidth"),textAlign:Object(o.a)(this,"labelAlign"),marginRight:Object(o.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":this.$parent&&("justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign)}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&Object(s.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]};var d=i("VU/8")(c,u,!1,function(t){i("7nAE")},null,null);e.a=d.exports},"3nTV":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"dict",function(){return a});var a={machineCode:"设备编码",machineName:"设备名称",machineModelName:"设备型号",param:"规格参数",dpuCode:"网关编号",projectName:"设备分组",startTime:"入网时间",onlineTime:"在线时长",runTime:"运行时长",attributes:"动态属性",createDate:"创建时间",dpuName:"网关名称",dpuModelName:"网关型号",orgName:"用户信息",startDate:"入网时间",onLineTime:"在线时长",simNo:"SIM卡",TEMPLATE:"数据模板"}},"6N8X":function(t,e){},"7mQx":function(t,e){},"7nAE":function(t,e){},DvSb:function(t,e){},Gvrj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"dict",function(){return a});var a={CPSBM:"产品识别码",CPLB:"产品类别",CPXH:"产品型号",CPMC:"产品名称",DPH:"底盘号",SCS:"生产商",FDJH:"发动机号",CHANDI:"产地",CPCS:"产品参数",CPJYJG:"产品检验结果",JINGZHONG:"净重(kg)",HYBZMS:"行业标准描述",CPSYSM:"产品使用说明",JSXX:"技术信息",QTXX1:"其他信息1",QTXX2:"其他信息2",QTXX3:"其他信息3",QYMC:"企业名称",SHXYDM:"统一社会信用代码",SSHY:"所属行业",DIZHI:"地址",FWDH:"服务电话",QYWZ:"企业网站",QYJS:"企业简介",FWWD:"服务网点",QYFWSM:"企业服务说明",BJMC:"部件名称/品名",VIN:"机号/VIN码",DHH:"订货号",CCRQ:"出厂日期",XKZH:"许可证号",WXCC:"外形尺寸",JYJG:"检验结果",PCH:"批次号",TEMPLATE:"数据模板"}},LeCR:function(t,e){},MUNR:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},n,!1,function(t){i("7mQx")},null,null).exports,l=i("/ocq"),r=(i("pj4z"),i("oat/")),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"sign"}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.handle,expression:"handle"}],staticClass:"sign-header"},[t._v("\n    标识： "+t._s(t.handle)+"\n  ")]),t._v(" "),i("group",{directives:[{name:"show",rawName:"v-show",value:t.baseData.length>0,expression:"baseData.length > 0"}],attrs:{title:"数据清单","label-width":"6em"}},[t._l(t.baseData,function(e){return[i("cell",{key:e.type,attrs:{title:t.$t("dict."+e.type),value:e.data.value}})]})],2),t._v(" "),i("group",{directives:[{name:"show",rawName:"v-show",value:t.attributesData.length>0,expression:"attributesData.length > 0"}],attrs:{title:"动态属性"}},[t._l(t.attributesData,function(e){return[i("cell",{key:e.$index,attrs:{title:e.name}},[t._v("\n          "+t._s(e.value)+"\n      ")])]})],2),t._v(" "),i("group",{directives:[{name:"show",rawName:"v-show",value:t.companyInfoData.length>0,expression:"companyInfoData.length > 0"}],attrs:{title:"企业信息","label-width":"8em"}},[t._l(t.companyInfoData,function(t){return[i("cell",{key:t.type,attrs:{title:t.name,value:t.value}})]})],2),t._v(" "),t._l(t.corePartData,function(e){return[i("group",{key:e.$index,attrs:{title:"核心部件"}},[t._l(e,function(t){return[i("cell",{key:t.$index,attrs:{title:t.name,value:t.value}})]})],2)]})],2)},staticRenderFns:[]};var c=function(t){i("q4zW")},u=i("VU/8")(r.a,o,!1,c,"data-v-4af12604",null).exports,d={name:"extension",components:{},data:function(){return{videoList:[{id:"001",title:"实操课程01:",name:"602摊铺机维护",dec:"RP602摊铺机介绍、操作介绍、安装使用以及各环节注意事项的教学说明。",collection:"3W",likes:"5W",watch:"2.1W",url:"https://ugcws.video.gtimg.com/uwMROfz2r5zAoaQXGdGnCmdfhzm34jfw00YM73ftLJECfOsG/w31128rtj4e.m701.mp4?sdtfrom=v5010&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=327705F43524D1F021BDBCA5A58A04582E247239A062229DC0CC6083C6983F5AAAA3352717C46CC76EE1572E011280C626BE2EF927719A77F3E8614D08EABF790CDA9B24345E17876CAAFD7CB224024FBBFD439DD5007A6C2ED9C299C0EDE758CAD77C3B447279A4CF306B91CB07E461A91E38A4915DF62DBDEED259585972A2&platform=2",poster:"http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0"},{id:"002",title:"实操课程02:",name:"装载机变速箱拆装",dec:"装载机变速箱拆解、安装的全过程逐步视频解读。",collection:"3W",likes:"5W",watch:"2.1W",url:"https://ugcws.video.gtimg.com/uwMROfz2r5zAoaQXGdGnCmdfDmYna7ygaG2OUd6NfjMPlQva/s3112chqeal.mp4?sdtfrom=v1104&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=8C4A39523CA9769448D67A09FBDF6684B3BC3157435BF47A344C4CBD87EADABC6FB41AB9075B76701B544CE8AABB1A347F79A2B447D0BEBE75C085CF0D370FE5EA2FF2CAE6F1C4E7BAD97EBE0B2AA15791D3DB3B0D1170C855973FE12724AAC03D2DC8D8137EEB558984560295CFE98DA2E2C0EF63B8B3C86E22210C54A1B40A#t=60",poster:"http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0"},{id:"003",title:"理论课程03:",name:"挖掘机传动",dec:"挖掘机终传动的作用、机械结构、组成单元、安装位置、工作机理的视频教学。",collection:"3W",likes:"5W",watch:"2.1W",url:"https://ugcws.video.gtimg.com/uwMROfz2r5zAoaQXGdGnC2dfJ6nM3DInWQqp2axRinGnB-kO/w31128rtj4e.p701.1.mp4?sdtfrom=v1104&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=1D5740B3F60A851E43DA2752E8E3EED37810D55DBC7D853261CA53CBBFBCEBF7FF75FD2B0260F3FF649DD9B2851A6416D51E9D1D5DB2EFEB5CFEE8E48C4E931564D2637BE5A2C0E4B263380A2AF55954699CF22A3FF4EB26D8AEDEE59736AA82AFCA305CDD1EF8552014A0ABBBF883D87797EBD253CEB96B5F5FDC3659F676C8",poster:"http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0"},{id:"004",title:"理论课程04:",name:"挖掘机主泵教学",dec:"通过对液压挖掘机的主要部件的切削模型，结合作业、工况学习主要部件的结构技能的视频教学。",collection:"3W",likes:"5W",watch:"2.1W",url:"https://ugcbsy.qq.com/uwMROfz2r5zAoaQXGdGnC2dfDma7NyshNhpHvcEisM-VRrjn/o3112q6i2kt.mp4?sdtfrom=v1104&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=D5223E7D0CD66400654DB55ED03EBD283FAFBF390F86F1B91CCF383077253ABEE78779917974F7DFC60E4626E2A4EF375ACB289E4DF2C5A03F5FE0CF54AFE63A98EC29ADACF0AB86389ADEE6942A916C51E86EB1350EB08BCDE648EAF3C436F385C19F5EAD8F86F3E2260D1FE0836C327B51DF1D4195C2043524B426DB77764E",poster:"http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0"}]}},mounted:function(){document.title="工程机械全生命周期"}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"extension"}},[t._m(0),t._v(" "),i("div",{staticClass:"class-header"},[t._v("\n      工程机械全生命周期数字化运维网络学习中心\n      "),i("div",{staticClass:"class-jdec"},[t._v("\n          课程数量: "+t._s(t.videoList.length||0)+"节\n              \n          课程时间: 98分钟\n      ")])]),t._v(" "),t._l(t.videoList,function(e){return[i("div",{key:e.id,staticClass:"class-item"},[i("div",{staticClass:"class-item-inner"},[i("video",{staticClass:"class-video",attrs:{src:e.url,controls:"controls",poster:e.poster}}),t._v(" "),i("div",{staticClass:"class-info-box"},[i("div",{staticClass:"class-info-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"class-info-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"class-info-dec"},[i("div",{staticClass:"label-parent"},[i("div",{staticClass:"label"},[t._v("\n                              "+t._s(e.dec)+"\n                          ")])])]),t._v(" "),i("div",{staticClass:"class-info-operation"},[i("div",[i("img",{attrs:{src:"/oneplus/static/cc_02.png"}}),t._v("\n                          "+t._s(e.collection)+"\n                      ")]),t._v(" "),i("div",[i("img",{attrs:{src:"/oneplus/static/like.svg"}}),t._v("\n                          "+t._s(e.likes)+"\n                      ")]),t._v(" "),i("div",[i("img",{attrs:{src:"/oneplus/static/xx_01.png"}}),t._v("\n                          "+t._s(e.likes)+"\n                      ")])])]),t._v(" "),i("div",{staticClass:"class-item-more"})])])]}),t._v(" "),t._m(1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"extension-header"},[e("img",{staticClass:"img",attrs:{src:"/oneplus/static/t-header.png"}}),this._v(" "),e("div",{staticClass:"header-text"},[this._v("\n        工程机械全生命周期"),e("br"),this._v("\n        数字化管理和运维教学\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"extension-footer"},[e("img",{staticClass:"img",attrs:{src:"/oneplus/static/t-footer.png"}}),this._v(" "),e("div",{staticClass:"footer-text"},[this._v("\n        更多课程学习"),e("br"),this._v("\n        敬请期待！\n    ")])])}]};var h=i("VU/8")(d,v,!1,function(t){i("LeCR")},"data-v-f91b0500",null).exports;a.a.use(l.a);var m=new l.a({routes:[{path:"/",redirect:"/extension"},{path:"/sign",name:"sign",component:u},{path:"/extension",name:"extension",component:h}]}),f=i("TXmL");a.a.use(f.a);var _=new f.a({locale:"zh-i",messages:{"zh-i":i("3nTV"),"zh-h":i("Gvrj")}});a.a.config.productionTip=!1,new a.a({el:"#app",router:m,i18n:_,components:{App:s},template:"<App/>"})},mzja:function(t,e,i){"use strict";var a=i("JkZY"),n=(a.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[a.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var l=i("VU/8")(n,s,!1,function(t){i("MUNR")},null,null).exports,r=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:l},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")},"on-show":function(e){return t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var c=i("VU/8")(r,o,!1,function(t){i("+Sec")},null,null);e.a=c.exports},"oat/":function(t,e,i){"use strict";(function(t){var a=i("mtWM"),n=i.n(a),s=i("rHil"),l=i("1DHf"),r=i("mzja"),o=i("+zLN");e.a={name:"sign",components:{Cell:l.a,Group:s.a,Alert:r.a},data:function(){return{handle:this.$route.query.handle,sign:this.$route.query.sign||"iot",baseData:[],companyInfoData:[],attributesData:[],corePartData:[]}},mounted:function(){var e=this;this.locale=this.$i18n.locale="zh-"+("hanyun"===this.sign?"h":"i"),document.title="汉云标识解析二级节点",n.a.get("/identityv2/data/detail",{params:{handle:this.handle}}).then(function(i){if(1===i.data.status){var a=[i.data.data.value,[]],n=a[1];a[0].forEach(function(i){var a={attributes:"attributesData",companyInfo:"companyInfoData",corePart:"corePartData"}[i.type];if(a)try{var s=t.from(i.data.value,"base64").toString();s=JSON.parse(unescape(s)),e[a]=s}catch(t){e[a]=[]}else n.push(i)}),e.baseData=n}else o.a.show({title:"温馨提示",content:i.data.message,onShow:function(){},onHide:function(){}})})}}}).call(e,i("EuP9").Buffer)},pj4z:function(t,e,i){"use strict";(function(t){var e=i("mtWM"),a=(i.n(e),i("rHil")),n=i("1DHf"),s=i("mzja");i("+zLN"),n.a,a.a,s.a}).call(e,i("EuP9").Buffer)},q4zW:function(t,e){},rHil:function(t,e,i){"use strict";var a=i("wmxo"),n=(a.a,String,String,String,String,String,String,Number,String,String,{name:"group",methods:{cleanStyle:a.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number],footerTitle:String,footerTitleColor:String}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2),t._v(" "),t.footerTitle?i("div",{staticClass:"weui-cells__title vux-group-footer-title",style:t.cleanStyle({color:t.footerTitleColor}),domProps:{innerHTML:t._s(t.footerTitle)}}):t._e()],2)},staticRenderFns:[]};var l=i("VU/8")(n,s,!1,function(t){i("DvSb")},null,null);e.a=l.exports}},["NHnr"]);