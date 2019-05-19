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

## Install

```bash
git clone https://github.com/xujian/vue-chartlib
cd vue-chartlib
yarn
```

### 解决依赖
#### 1. 安装 designer

designer 是用于测试属性面板的demo项目

```bash
cd ..
git clone https://github.com/xujian/designer
cd designer
yarn
```

vue-chartlib 需要使用designer内的vue本地宝
vue-chartlib/vue.config.j内设置有指向designer目录的vue alias

```code
vue$: '../designer/node_modules/vue/dist/vue.js'
```

#### 2. 设置npm link

使designer项目依赖本地的vue-chartlib开发目录

```bash
cd ../vue-chartlib
npm link

cd ../designer
npm link vue-chartlib
```

#### 2. storybook-addon-chartlib


## Storybook
![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)

组件库使用Storybook做演示及开发时预览。
https://github.com/storybooks/storybook

启动Storybook

```bash
yarn storybook
```

