# React Web APP

## 涉及相关依赖

* **styled-components**, 使用 ES6 和 CSS 来管理样式

## 注意

* 性能优化，组件与 redux 关联后，state 一旦发生改变，所有组件将都就重新渲染更新，很耗性能；使用了 immutable.js 进行管理 store 的数据，可以结合 PureComponent 进行优化。如果没有使用 immutable 进行管理，使用 PureComponent 会有潜在的坑，还是在 shouldComponentUpdate 生命周期函数里自己手动进行更新判断。
