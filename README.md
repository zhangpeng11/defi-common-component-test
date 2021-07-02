# defi-common-component-test

#### 开发组件

- 安装依赖：

  ```bash
  npm install
  npm start
  ```

* 打包组件

  ```bash
  npm run build
  ```

#### 组件功能测试

- 项目根目录下执行：

  ```bash
  npm link
  cd src/example
  npm link defi-common-component-test # 此处为package.json中定义的name字段
  ```

* 根目录执行：

  ```bash
  npm start
  ```

#### 组件发布到 npm

- 组件发布到 npm：

  ```bash
  npm run pub
  # 上面的命令效果与下面的命令效果一样
  npm build
  npm publish
  ```

### npm 包的使用与下载

- 下载：

  ```bash
  npm i defi-common-component-test
  ```

- 使用方法：

  ```bash
  # 组件中引入
  import ReactDemo from 'defi-common-component-test';
  ```
