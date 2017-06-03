/* 
First install node and than :

in the root folder of your app ->      npm init -y          Means to to accepts and done the package.json file 


>>>>> REMARK DON"T INSTALL GLOBALY THE WEBPACK JUST FOR PROJECT 


install webpack like that ->   npm install --save-dev webpack  webpack-dev-server         


 Means to install webpack and server to server the files after saving 

 
 
 In pacakge.json in  scripts we need to add the arg like that :
 
 "bulid" : "webpack-dev-server"                    wich will server the files after this command npm bulid 

 OR        REMARK IF WE HAVE SOME ARG IN scripts WE NEED TO ADD   >>> ,  <<< 
 
 
 "bulid:prod": "webpack -p"    bulid  done and minimalized the files

 
 ________________________________________________________________________
 
 
 
 
What is a webpack Module
In contrast to Node.js modules, webpack modules can express their dependencies in a variety of ways. A few examples are:

An ES2015 import statement
A CommonJS require() statement
An AMD define and require statement
An @import statement inside of a css/sass/less file.
An image url in a stylesheet (url(...)) or html (<img src=...>) file.

IT WORKS LIKE THIS WE IMPORTS THE FILES IN THE ONE MAIN AND THAN WE PUT IT IN TO JS FILES ALSO LIKE IT IS CSS FILES EXMP BELLOW


______file.css________

@import "url";   - > @import "file2";  noo need to add  >>> .scss <<< if this is sass loader otherwise always add >>> .css <<<


than in js file like below :


_____file.js_______

import ' ../css/file.css';




WEBPACK IT WILL DONE THE JOB DON'T WORRY ABOUT IMPORT IT WILL COMAPILE AS ES2015 BECAUSE OF BABAEL

_________________________________________________________________________







Code to put all the css file in to the one without any SASS OR LESS 


REMBER TO INSTALL : 

npm install --save-dev css-loader style-loader
npm install --save-dev extract-text-webpack-plugin

var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    module: {
         rules: [{
             test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
           use: ExtractTextPlugin.extract({
               use: 'css-loader'
            })
         }]
     },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
}




TO WEBPACK ALL JS FILE 


var path =  require('path');  


module.exports = {
	entry:  './src/app.js',   // path to the file which contains js code and imports
    output:{   // output js file after inserting all files to the one file main.js
	path: path.resolve(_dirname, 'dist'),  // folder which will contain dev version
	filename: 'main.js',
	publicPath: '/dist'   //Absolute path webpack cloud lookup threw the direcotries
	},
	// module always contains objects 
	module:{
		rules:[     // rules has always array of objects !
				{
					test: /\.js$/,      // test always contais RegEXP which get all js files
					use: [  //use also contains the array of objects (OPTIONS)
							{
								loader:'babel-loader',  // load babael
								options:{
								presets: ['es2015'] //means comapile for ES5 for use in all browsers
								
							}				
					}
							
				]
			},
							
		]
	}

}

Loading Data
Another useful asset that can be loaded is data, like JSON files, CSVs, TSVs, and XML. Support for JSON is actually built-in, similar to NodeJS, meaning import Data from './data.json' will work by default. To import CSVs, TSVs, and XML you could use the csv-loader and xml-loader. Let's handle loading all three:

npm install --save-dev csv-loader xml-loader
webpack.config.js

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      {
        test: /\.xml$/,
        use: 'xml-loader',
      }
    ]
  },
  //...
}


Loading Fonts
So what about other assets like fonts? The file and url loaders will take any file you load through them and output it to your build directory. This means we can use them for any kind of file, including fonts:

webpack.config.js

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  //...
}
With this in place you can define a font like so...

@font-face {
  font-family: 'MyFont';
  src:  url('./font.woff2') format('woff2'),
        url('./font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
and the relative paths (e.g. './font.woff2') will be replaced with the final path/filename in your build directory.



Loading CSS
In order to import a CSS file from within a JavaScript module, you simply need to install and add the style-loader and css-loader to your module configuration...

npm install --save-dev style-loader css-loader
webpack.config.js

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  //...
}
This enables you to import './style.css' into the file that depends on that styling. Now, when that module is run, a <style> tag with the stringified css will be inserted into the <head> of your html file.

Note that you can also split your CSS for better load times in production. On top of that, loaders exist for pretty much any flavor of CSS you can think of -- postcss, sass, and less to name a few.

IN entry we should add the 




entry:  {
	
	
	app: './src/app.js',  }
	
	
	
	
	
	
	
	LOAD THE JQUERY  
	
	
	
	npm install -save jquery 
	
	
	
	Import jquery to the js file which concat all js files
	
	
	In webpack.config.js add this :
	
	var webpack = require('webpack');
	
	
	
	in plugins add this:
	
	
	
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery'
		
		
	})
	

****************************************************************************
LINK TO PRODUCTION     https://webpack.js.org/guides/production-build/
****************************************************************************





****************************************************************************
LINK TO HMTL IMAGE : https://github.com/webpack-contrib/html-loader
****************************************************************************





than install all needed  devDependendencies in our projects as below  for example below ->





npm install babel-loader sass-loader node-sass css-loader extract-text-webpack-plugin   




*/





var path =  require('path');     // nnpm module for path node.js needed
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // we need to get the pluhgin to set options


var extractPlugin = new ExtractTExtPlugin({   // this can be done in PLUGINS   new ExtractTextPlugin('main.css'),
filename:'main.css'
// this will get the output files as main.css from all files we imports and etc
});
// Webpack  for done the job.
module.exports = {
	entry:  './src/app.js',   // path to the file which contains js code and imports
    output:{   // output js file after inserting all files to the one file main.js
	path: path.resolve(_dirname, 'dist'),  // folder which will contain dev version
	filename: 'main.js',
	publicPath: '/dist'   //Absolute path webpack cloud lookup threw the direcotries
	
	
	// we can remove publicPAth if the all files are in src just shows for index where to looking up for files
	
	},
	// module always contains objects 
	module:{
		rules:[     // rules has always array of objects !
				{
					test: /\.js$/,      // test always contais RegEXP which get all js files
					use: [  //use also contains the array of objects (OPTIONS)
							{
								
								loader:'babel-loader',  // load babael
								options:{
								
								presets: ['es2015'] //means comapile for ES5 for use in all browsers
								
								}
		
					
					}
							
				]
			},
			{ // REMARK IT CONTAINS ALL SCSS FILES SASS to configure to css file  
				test: /\.scss$/,      // test always contais RegEXP which get all scss  files
				use: extractPlugin.extract({
					
					//rembember that weback start from end to begiing so means that sass-loader is first
				use: ['css-loader', 'sass-loader']
				})
				
				
			}
			
		
		]
	},
	// plugins is a array
	plugins: [
	extractPlugin
	
	
	]
		
		
	
	
	
	}
