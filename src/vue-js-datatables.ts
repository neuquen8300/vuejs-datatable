import Vue from 'vue';
import { VuejsDatatableFactory } from './vue-js-datatables.esm';
export * from './vue-js-datatables.esm';

// The IIFE exposes the global `VuejsDatatable`. See the rollup config file & https://github.com/rollup/rollup/issues/494
Vue.use( VuejsDatatableFactory );
