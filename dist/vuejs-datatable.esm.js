/**
 * vuejs-datatable v2.0.0-alpha.7, module vuejs-datatable build esm
 * License: MIT (see git+https://github.com/GerkinDev/vuejs-datatable.git/blob/master/LICENSE for the full license)
 * Repository: git+https://github.com/GerkinDev/vuejs-datatable.git
 * Generated on 2021-03-08 at 22:59:59.
 * By Patrick Stephan<pstephan1187@gmail.com>, GerkinDev<agermain@ithoughts.io> (https://ithoughts.io/)
 */

import{get as t,set as e}from"object-path";import{Prop as s,Component as n,Vue as r,Model as i,Inject as a,Provide as o,Watch as l,Emit as c,Mixins as p}from"vue-property-decorator";const h=t=>(t=>t&&"function"==typeof t.then)(t)?t:Promise.resolve(t),d=[String,Array,Object],u=(t,...e)=>Object.entries(Object.assign(g(t),...e.map(t=>g(t)))).filter(([,t])=>t).map(([t])=>t),g=t=>("string"==typeof t&&(t=t.split(/\s+/g)),Array.isArray(t)?t.reduce((t,e)=>(t[e]=!0,t),{}):t||{}),b=t=>`vue-datatable::${t}`,y=t=>null==t?"":t.toString();class m{constructor(t){this.interpolate=!1,this.headerClass="",this.label="";const e=Object.assign(Object.assign({class:null,component:null,field:null,representedAs:null},t),{align:m.normalizeAlignment(t.align,"left"),headerAlign:m.normalizeAlignment(t.headerAlign,"center")});Object.assign(this,e,{filterable:m.isFilterable(t),sortable:m.isSortable(t)})}static normalizeAlignment(t,e="left"){if("string"==typeof t){const s=(t||e).toLowerCase();if(["left","center","right"].includes(s))return s}return e.toLowerCase()}static isPlainTextField(t){return!(!t.field&&!t.representedAs)}static isFilterable(t){return!1!==t.filterable&&this.isPlainTextField(t)}static isSortable(t){return!1!==t.sortable&&this.isPlainTextField(t)}getRepresentation(e){return this.representedAs&&"function"==typeof this.representedAs?y(this.representedAs(e)):"number"==typeof e?t(e,this.field.toString()):this.field?y(t(e,this.field.toString())):""}matches(t,e){return this.getRepresentation(t).toString().toLowerCase().indexOf(e.toLowerCase())>-1}}function f(t,e,s,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(i<3?r(a):i>3?r(e,s,a):r(e,s))||a);return i>3&&a&&Object.defineProperty(e,s,a),a}let T=class t extends r{get content(){return this.column.getRepresentation(this.row)}get cellStyles(){return{"text-align":this.column.align}}get cellClass(){return"function"==typeof this.column.class?this.column.class(this.row):this.column.class?this.column.class:void 0}};f([s({type:m,required:!0})],T.prototype,"column",void 0),f([s({type:Object,required:!0})],T.prototype,"row",void 0),T=f([n(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.column.component?s("td",{class:t.cellClass,style:t.cellStyles},[t.column.component?s(t.column.component,{tag:"component",attrs:{row:t.row,column:t.column}}):t._e()],1):t.column.interpolate?s("td",{class:t.cellClass,style:t.cellStyles,domProps:{innerHTML:t._s(t.content)}}):s("td",{class:t.cellClass,style:t.cellStyles},[t._v(" "+t._s(t.content)+" ")])},staticRenderFns:[]}))],T);let w=class t extends r{get canSort(){return this.column.sortable}get isSortedAscending(){return"asc"===this.direction}get isSortedDescending(){return"desc"===this.direction}get sortButtonHtml(){const t=this.tableType.setting("table.sorting");return this.isSortedAscending?t.sortAsc:this.isSortedDescending?t.sortDesc:t.sortNone}toggleSort(){this.canSort&&(this.direction&&null!==this.direction?"asc"===this.direction?this.$emit("change","desc",this.column):this.$emit("change",null,this.column):this.$emit("change","asc",this.column))}};f([i("change",{type:String})],w.prototype,"direction",void 0),f([s({type:Object,required:!0})],w.prototype,"column",void 0),f([a("table-type")],w.prototype,"tableType",void 0),w=f([n(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("th",{class:t.column.headerClass,style:{"text-align":t.column.headerAlign,cursor:t.canSort?"pointer":"auto"},on:{click:t.toggleSort}},[t.column.headerComponent?s(t.column.headerComponent,{tag:"component",attrs:{column:t.column}}):s("span",[t._v(" "+t._s(t.column.label)+" ")]),t.canSort?s("span",{domProps:{innerHTML:t._s(t.sortButtonHtml)}}):t._e()],1)},staticRenderFns:[]}))],w);const v=(t,e)=>t.map((t,e)=>({index:e,item:t})).sort((t,s)=>e(t.item,s.item)||t.index-s.index).map(({item:t})=>t);class C{filterHandler(t,e,s){const n=(Array.isArray(e)?e:(e||"").split(/\s/)).filter(t=>!!t);return 0===n.length?t:t.filter(t=>n.some(e=>this.rowMatches(t,e,s)))}sortHandler(t,e,s){return e&&null!==s?v(t,(t,n)=>{const r=e.getRepresentation(t),i=e.getRepresentation(n);if(r===i)return 0;let a=r>i?1:-1;return"desc"===s&&(a*=-1),a}):t}paginateHandler(t,e,s){if(null===e||e<1||s<1)return t;const n=(s-1)*e,r=s*e;return t.slice(n,r)}displayHandler({sorted:t,paged:e}){return{rows:e,totalRowCount:t.length}}rowMatches(t,e,s){return!(s.filter(t=>t.filterable).length>0)||s.some(s=>s.matches(t,e))}}class P{constructor(){this.properties={table:{class:"",row:{class:""},sorting:{sortAsc:"↓",sortDesc:"↑",sortNone:"↕"}},pager:{classes:{disabled:"disabled",li:"",pager:"",selected:"active"},icons:{next:"&gt;",previous:"&lt;"}}}}get(e){return t(this.properties,e)}set(t,s){return e(this.properties,t,s),this}merge(t){return this.properties=P.mergeObjects(this.properties,t),this}static mergeObjects(t,e){for(const s in e)"object"==typeof e[s]?t[s]=P.mergeObjects(t[s]||{},e[s]):t[s]=e[s];return t}}const _=t=>{let e=class e extends r{get tableType(){return t}};return f([o("table-type")],e.prototype,"tableType",null),f([n],e)};let R=class t extends r{get liClasses(){return u(this.tableType.setting("pager.classes.li"),this.disabled?this.tableType.setting("pager.classes.disabled"):void 0,this.selected?this.tableType.setting("pager.classes.selected"):void 0)}get liStyles(){return{cursor:this.disabled?"not-allowed":"pointer"}}sendClick(){this.disabled||this.$parent.$emit(b("set-page"),this.value)}};f([s({type:Boolean,default:!1})],R.prototype,"disabled",void 0),f([s({type:Boolean,default:!1})],R.prototype,"selected",void 0),f([s({type:Number})],R.prototype,"value",void 0),f([a("table-type")],R.prototype,"tableType",void 0),R=f([n(Object.assign({},{render:function(){var t=this.$createElement;return(this._self._c||t)("li",{class:this.liClasses,style:this.liStyles,on:{click:this.sendClick}},[this._t("default",[this._v(this._s(this.value))])],2)},staticRenderFns:[]}))],R);let S=class t extends r{constructor(){super(...arguments),this.ptableInstance=null,this.totalPages=0,this.page=1}get sidesIndexes(){return[...Array(this.sidesCount).keys()].map(t=>t+1)}get tableInstance(){if(!this.ptableInstance)throw new ReferenceError("Invalid operation: the pager must be attached to a table.");return this.ptableInstance}get show(){return this.totalRows>0}get totalRows(){try{return this.tableInstance.totalRows}catch(t){return 0}}get paginationClass(){return this.tableType.setting("pager.classes.pager")}get previousIcon(){return this.tableType.setting("pager.icons.previous")}get nextIcon(){return this.tableType.setting("pager.icons.next")}get identifier(){return this.tableType.id+"-pager"}created(){if(!this.linkWithTable(this.table)){const t=e=>{e===this.table&&this.linkWithTable(e)&&this.$root.$off(b("ready"),t)};this.$root.$on(b("ready"),t)}}linkWithTable(t){if(this.$datatables&&this.$datatables[t]){const e=this.$datatables[t];return this.ptableInstance=e,e.pagers.push(this),e.$emit(b("pager-bound"),this),e.$on(b("page-count-changed"),this.onPageCountChanged),e.$on(b("page-changed"),this.onPageChanged),this.$on(b("set-page"),this.onSetPage),!0}return!1}onPageCountChanged(t){this.totalPages=t}onPageChanged(t){this.page=t}onSetPage(t){this.ptableInstance&&(this.ptableInstance.page=t)}};f([s({type:String,default:"default"})],S.prototype,"table",void 0),f([s({type:String,default:"long"})],S.prototype,"type",void 0),f([s({type:Number,default:2})],S.prototype,"sidesCount",void 0),S=f([n(Object.assign(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("nav",[s("ul",{class:t.paginationClass},["abbreviated"===t.type?[t.page-t.sidesCount>1?s("pager-button",{attrs:{value:1}}):t._e(),t.page-t.sidesCount>2?s("pager-button",{attrs:{disabled:""}},[t._v(" ... ")]):t._e(),t._l(t.sidesIndexes.slice().reverse(),(function(e){return[t.page-e>=1?s("pager-button",{attrs:{value:t.page-e}}):t._e()]})),s("pager-button",{attrs:{value:t.page,selected:""}}),t._l(t.sidesIndexes,(function(e){return[t.page+e<=t.totalPages?s("pager-button",{attrs:{value:t.page+e}}):t._e()]})),t.page+t.sidesCount<t.totalPages-1?s("pager-button",{attrs:{disabled:""}},[t._v(" ... ")]):t._e(),t.page+t.sidesCount<t.totalPages?s("pager-button",{attrs:{value:t.totalPages}}):t._e()]:"long"===t.type?t._l(t.totalPages,(function(e){return s("pager-button",{key:e,attrs:{value:e,selected:e===t.page}})})):"short"===t.type?[t.page>1?s("pager-button",{attrs:{value:t.page-1}},[s("span",{domProps:{innerHTML:t._s(t.previousIcon)}})]):t._e(),s("pager-button",{attrs:{value:t.page,selected:""}}),t.page<t.totalPages?s("pager-button",{attrs:{value:t.page+1}},[s("span",{domProps:{innerHTML:t._s(t.nextIcon)}})]):t._e()]:t._e()],2)]):t._e()},staticRenderFns:[]}),{components:{PagerButton:R}}))],S);let $=class t extends r{constructor(){super(...arguments),this.sortBy=null,this.sortDir=null,this.page=1,this.totalRows=0,this.displayedRows=[],this.pagers=[]}get totalPages(){return this.totalRows<=0||this.perPage<=0?0:isFinite(this.perPage)?Math.ceil(this.totalRows/this.perPage):1}get currentPageRange(){return this.perPage===1/0?{from:1,of:this.totalRows,to:this.totalRows+1}:{from:Math.min((this.page-1)*this.perPage+1,Math.max(this.totalRows,1)),of:this.totalRows,to:Math.min(this.page*this.perPage,this.totalRows+1)}}get normalizedColumns(){return this.columns.map(t=>new m(t))}get tableClass(){return u(this.tableType.setting("table.class"),this.$attrs.class).join(" ")}get handler(){return this.tableType.handler}get identifier(){return this.tableType.id}created(){this.$datatables[this.name]=this,this.$root.$emit(b("ready"),this.name),this.$nextTick(()=>{this.waitForPager&&0===this.pagers.length?this.$on(b("pager-bound"),()=>this.initWatchCriterions()):this.initWatchCriterions()})}getSortDirectionForColumn(t){return this.sortBy!==t?null:this.sortDir}setSortDirectionForColumn(t,e){this.sortBy=e,this.sortDir=t}processRowsIn(){if("function"==typeof this.data){const t={filter:this.filter,page:this.page,perPage:this.perPage,sortBy:this.sortBy?this.sortBy.field:null,sortDir:this.sortDir};return this.data(t)}{const t={source:this.data};return h(this.handler.filterHandler(this.data,this.filter,this.normalizedColumns)).then(e=>h(this.handler.sortHandler(t.filtered=e,this.sortBy,this.sortDir))).then(e=>h(this.handler.paginateHandler(t.sorted=e,this.perPage,this.page))).then(e=>h(this.handler.displayHandler(Object.assign(Object.assign({},t),{paged:e}))))}}processRows(){return h(this.processRowsIn()).then(t=>this.setTableContent(t))}setTableContent({rows:t,totalRowCount:e}={}){"object"==typeof t&&(this.displayedRows=t),"number"==typeof e&&(this.totalRows=e)}emitNewPage(){return this.page}getRowClasses(t){const e="function"==typeof this.rowClasses?this.rowClasses(t):this.rowClasses,s=this.tableType.setting("table.row.class");return u(s,e)}initWatchCriterions(){for(const t of["filter","perPage","page","sortBy","sortDir"])this.$watch(t,this.processRows,{immediate:!1,deep:!0});return this.processRows()}refreshPageCount(){return this.totalPages}refreshPage(){return this.page}};f([s({type:String,default:"default"})],$.prototype,"name",void 0),f([s({type:Boolean,default:!1})],$.prototype,"waitForPager",void 0),f([s({type:Array,required:!0})],$.prototype,"columns",void 0),f([s({required:!0})],$.prototype,"data",void 0),f([s({type:[String,Array],default:null})],$.prototype,"filter",void 0),f([s({type:Number,default:1/0})],$.prototype,"perPage",void 0),f([s({type:d.concat([Function]),default:null})],$.prototype,"rowClasses",void 0),f([l("data",{deep:!0,immediate:!1}),l("columns",{deep:!0,immediate:!1})],$.prototype,"processRows",null),f([l("page",{immediate:!0}),c(b("page-changed"))],$.prototype,"emitNewPage",null),f([l("totalRows"),l("perPage"),c(b("page-count-changed"))],$.prototype,"refreshPageCount",null),f([l("page"),c(b("page-changed"))],$.prototype,"refreshPage",null),$=f([n(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{class:t.tableClass},[s("thead",[s("tr",t._l(t.normalizedColumns,(function(e,n){return s("datatable-header",{key:n,attrs:{column:e,direction:t.getSortDirectionForColumn(e)},on:{change:t.setSortDirectionForColumn}})})),1)]),s("tbody",[t._l(t.displayedRows,(function(e,n){return t._t("default",[s("tr",{key:n,class:t.getRowClasses(e)},t._l(t.normalizedColumns,(function(t,n){return s("datatable-cell",{key:n,attrs:{column:t,row:e}})})),1)],{row:e,index:n,columns:t.normalizedColumns})})),0==t.displayedRows.length?s("tr",[s("td",{attrs:{colspan:t.normalizedColumns.length}},[t._t("no-results")],2)]):t._e()],2),t.$slots.footer||t.$scopedSlots.footer?s("tfoot",[t._t("footer",null,{rows:t.displayedRows,columns:t.normalizedColumns,pagination:t.currentPageRange})],2):t._e()])},staticRenderFns:[]}))],$);class j{constructor(t,e=new C){this.id=t,this.handler=e,this.settings=new P,this.setFilterHandler=this.setHandler.bind(this,"filter"),this.setSortHandler=this.setHandler.bind(this,"sort"),this.setPaginateHandler=this.setHandler.bind(this,"paginate"),this.setDisplayHandler=this.setHandler.bind(this,"display")}get tableTypeConsumer(){return _(this)}setHandler(t,e){return this.handler[t+"Handler"]=e,this}setting(t,e){return void 0===e?this.settings.get(t):(this.settings.set(t,e),this)}mergeSettings(t){return this.settings.merge(t),this}getTableDefinition(){return p($,this.tableTypeConsumer)}getPagerDefinition(){return p(S,this.tableTypeConsumer)}}const x=new class I{constructor(){this.tableTypes={},this.defaultTableType=new j("datatable"),this.tableTypes={},this.useDefaultType(!0)}getTableType(t="datatable"){return this.tableTypes[t]}useDefaultType(t){return"boolean"==typeof t||t?(t?this.registerTableType(this.defaultTableType):this.deregisterTableType(this.defaultTableType),this):this.tableTypes.datatable===this.defaultTableType}registerTableType(t,e){const s=t instanceof j?t:new j(t),n=e&&"function"==typeof e&&e(s)||s,r=n.id;return this.tableTypes[r]=n,this.vueInstance&&this.installTableType(r),this}deregisterTableType(t){const e=t instanceof j?t.id:t;return this.vueInstance&&this.uninstallTableType(e),delete this.tableTypes[e],this}install(t){this.vueInstance=t,t.prototype.$datatables={},t.component("datatable-cell",T),t.component("datatable-header",w);for(const t of Object.values(this.tableTypes))this.installTableType(t.id)}installTableType(t){if(!this.vueInstance)throw Error("Not installed yet.");const e=this.tableTypes[t],s=e.getTableDefinition();this.vueInstance.component(t,s);const n=e.getPagerDefinition();return this.vueInstance.component(t+"-pager",n),this}uninstallTableType(t){const e=this.vueInstance.options.components;return delete e[t],delete e[t+"-pager"],this}};export{C as DefaultHandler,$ as VueDatatable,x as VuejsDatatableFactory};
//# sourceMappingURL=vuejs-datatable.esm.js.map
