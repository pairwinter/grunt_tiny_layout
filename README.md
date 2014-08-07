# tiny_layout

This is a tiny tool used for page layout.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt_tiny_layout --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('tiny_layout');
```

## The "tiny_layout" task

### Overview
In your project's Gruntfile, add a section named `tiny_layout` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    tiny_layout: {
        options: {
            delimiters:['[%','%]'] //use the grunt template function, this set the delimiters for template.
        },
        your_options:{
            layout:'test/fixtures/layout/layout_cat.html',
            src:['test/fixtures/views/{,**/}*.html'],
            dest:'tmp/cat'
        }
    }
});
```

### Options

#### options.delimiters
Type: Array<String>
Default value: `undefind`

use the grunt template function to complie the layout, this set the delimiters for template.

### your_options

#### layout
Type : `String`

The path of layout.

#### src
Type : `Array<String>`

The pages that wrapped by layout.

#### dest
Type : `String`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

