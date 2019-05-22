# Vue-chartlib

## Directories 目录说明

* /.storybook: Storybook config
* /src
  * charts 图表类型定义
    * 3d
    * bar
    * 
  * core 核心类及辅助类
    * accessories 图表附件
    * chart PaChart class
    * data Data
    * decorators
    * mixins
    * shared
  * formats 定义图表内用到的formatter
  * mocks mock数据
  * presets
  * providers
    * echarts
  * stories 业务stories
  * utils  

### Dependencies 解决依赖

1. designer
1. vue-chartlib
1. storybook-addon-chartlib
是三个并列项目

依赖关系为:

designer → vue-chartlib → storybook-addon-chartlib  
分别下载 designer与storybook-addon-chartlib  
designer 是用于测试属性面板的demo项目  
storybook-addon-chartlib是storybook addon

```bash
cd ..
git clone https://github.com/xujian/designer
cd designer
yarn

cd ..
git clone https://github.com/xujian/storybook-addon-chartlib
cd ../storybook-addon-chartlib
yarn
```

#### 手工编辑
node_modules⁩/@storybook⁩/vue/⁨dist⁩/⁨server⁩/framework-preset-vue.js

注释掉第32行：  
// vue$: require.resolve('vue/dist/vue.esm.js')  
(alias冲突)

## Install

```bash
cd ..
git clone https://github.com/xujian/vue-chartlib
cd vue-chartlib
yarn
```


#### 2. 设置npm link
使designer项目依赖本地的vue-chartlib开发目录

```bash
cd ../vue-chartlib
npm link

cd ../designer
npm link vue-chartlib
```

## Storybook
![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)

组件库使用Storybook做演示及开发时预览  
https://github.com/storybooks/storybook

#### 启动Storybook

```bash 
cd ../vue-chartlib
yarn storybook
```

#### Build

```bash
yarn build:lib
```

打开地址  
http://localhost:9001

### test
