const {override, fixBabelImports} = require('customize-cra')
const rewireCssModules = require('react-app-rewire-css-modules');
const rewirePostcss=require('react-app-rewire-postcss')
const px2rem=require('postcss-px2rem')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
module.exports= override(
    (config,env)=>{
        config = rewireCssModules(config, env)
        return config
    },
    (config,env)=>{
        rewirePostcss(config,{
            plugins:()=>[
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                    autoprefixer:{
                        flexbox:'no-2009'
                    },
                    stage:3
                }),
                px2rem({
                    remUnit:37.5,
                    exclude:/node-modules/
                })
            ]
        })
        return config
    },
    fixBabelImports('import', {  
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    (config,env)=>{
        config.resolve.alias = {
            '@': resolve('src')
        }
        return config
    }

)