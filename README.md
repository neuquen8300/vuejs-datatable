# vue-js-datatables

> A fork of [*vuejs-datatable*](https://gerkindev.github.io/vuejs-datatable/) VueJS plugin to manage data tables

This fork allows to sort rows by numeric types without converting the data to a string type, so, your numeric columns (e.g.: IDs, currencies, amounts) won't be sorted like a string anymore! 

## Attributions

* [Patrick Stephan](https://www.patrickstephan.me): Original author
* [Alexandre Germain](https://github.com/GerkinDev/): Current maintainer
* [Damián Bouzo](https://github.com/neuquen8300/): Fork author
---

## Getting started

### Install the package

To install this package, simply install `@neuquen8300/vue-js-datatables` with your favorite package manager:

```sh
# Using npm
npm install @neuquen8300/vue-js-datatables
# Using yarn
yarn add @neuquen8300/vue-js-datatables
```

### Import the package

#### Use the ESM build

> The [*ESM*](https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358) build (**E**cma**S**cript **M**odule) implies that your target browsers supports *ESM* **OR** you use a bundler, like [*webpack*](https://webpack.js.org/), [*rollup.js*](https://rollupjs.org/guide/en) or [*Parcel*](https://parceljs.org/).

Import & register the [*DatatableFactory*](https://gerkindev.github.io/vuejs-datatable/DatatableFactory.html) in Vue:

```js
import Vue from 'vue';
import { VuejsDatatableFactory } from '@neuquen8300/vue-js-datatables';

Vue.use( VuejsDatatableFactory );
```

Check out [*how to customize table types*](#customize-the-datatable) to see some usage of the [*DatatableFactory*](https://gerkindev.github.io/vuejs-datatable/DatatableFactory.html) and the possible reasons not to use the default instance exported as `VuejsDatatableFactory`.


### Use the component

Use the component in your HTML or template:

```html
<div id="vue-root">
    <datatable :columns="columns" :data="rows"></datatable>
</div>
```

Then pass in the columns and the data to your Vue instance:

```js
new Vue({
    el: '#vue-root',
    data: {
        columns: [
            {label: 'id', field: 'id'},
            {label: 'Username', field: 'user.username', headerClass: 'class-in-header second-class'},
            {label: 'First Name', field: 'user.firstName'},
            {label: 'Last Name', field: 'user.lastName'},
            {label: 'Email', field: 'user.email'},
            {label: 'Address', representedAs: ({address, city, state}) => `${address}<br />${city}, ${state}`, interpolate: true}
        ],
        rows: [
            //...
            {
                id: 1,
                user: {
                    username: "dprice0",
                    firstName: "Daniel",
                    lastName: "Price",
                    email: "dprice0@blogs.com"
                },
                address: "3 Toban Park",
                city: "Pocatello",
                state: "Idaho"
            }
            //...
        ]
    }
});
```

### Customize the datatable

The DatatableFactory exposes several methods to allow you to add or modify other `datatable`-like components, with [custom styles](https://gerkindev.github.io/vuejs-datatable/tutorial-custom-theme.html) or [behavior](https://gerkindev.github.io/vuejs-datatable/tutorial-ajax-handler.html).

```js
VuejsDatatable
    .registerTableType( 'my-awesome-table', tableType => {
        tableType
            .mergeSettings( /* ... */ )
            .setFilterHandler( /* ... */ )
            .setSortHandler( /* ... */ );
    } );
```

## Documentation

Browse the full documentation at [https://gerkindev.github.io/vuejs-datatable/](https://gerkindev.github.io/vuejs-datatable/).

```sh
# First, clone the repo
# replace `my-branch` with the name of the branch you want to use
git clone https://github.com/GerkinDev/vuejs-datatable.git#my-branch
# Go to the repo directory
cd vuejs-datatable
# Install dependencies
npm install
# Run tests
npm run test
# Build the package
npm run build
```

Optionaly, [link your local modules](https://docs.npmjs.com/cli/link.html) so you can use it in other modules.

> You may need to run the following command as `sudo`

```sh
npm link
```
