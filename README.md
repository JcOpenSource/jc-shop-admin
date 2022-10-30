# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


## commitlint.config.js 命名为 commitlint.config.cjs


```
不能以大写字母作为描述的开头。
git commit -m "feat: vue3配置typescript以及类型使用"
git commit -m "feat: TS+Vue3配置以及类型使用"

git commit -m "chore: 配置commitlint"

git commit -m "docs: 修改了README"
```


> 惨痛的教训
"lint": "eslint ./src/**/*.{js,jsx,vue,ts,tsx}",

代码eslint校验失败回滚

```
> eslint ./src/**/*.{js,jsx,vue,ts,tsx} --fix "
E:/code/jc-shop-admin/auto-imports.d.ts" 
"E:/code/jc-shop-admin/components.d.ts" 
"E:/code/jc-shop-admin/src/App.vue" 
"E:/code/jc-shop-admin/src/layout/AppLayout.vue" 
"E:/code/jc-shop-admin/src/layout/components/AppHeader/FullScreen.vue" 
"E:/code/jc-shop-admin/src/layout/components/AppHeader/HeaderBreadcrumb.vue" 
"E:/code/jc-shop-admin/src/layout/components/AppHeader/HeaderIndex.vue" 
"E:/code/jc-shop-admin/src/layout/components/AppHeader/MenuSearch.vue" 
"E:/code/jc-shop-admin/src/layout/components/AppHeader/ToggleSidebar.vue" 
"E:/code/jc-shop-admin/src/layout/components/AppHeader/UserInfo.vue" 
"E:/code/jc-shop-admin/src/layout/components/AppMenu.vue" 
"E:/code/jc-shop-admin/src/main.ts" 
"E:/code/jc-shop-admin/src/plugins/element-plus.ts" 
"E:/code/jc-shop-admin/src/router.d.ts" 
"E:/code/jc-shop-admin/src/router/index.ts" 
"E:/code/jc-shop-admin/src/router/modules/media.ts" 
"E:/code/jc-shop-admin/src/router/modules/order.ts" 
"E:/code/jc-shop-admin/src/router/modules/permission.ts" 
"E:/code/jc-shop-admin/src/router/modules/product.ts" 
"E:/code/jc-shop-admin/src/store/index copy.ts" 
"E:/code/jc-shop-admin/src/store/index.ts" 
"E:/code/jc-shop-admin/src/views/home/homeIndex.vue" 
"E:/code/jc-shop-admin/src/views/home/homeIndex2.vue" 
"E:/code/jc-shop-admin/src/views/login/loginIndex.vue" 
"E:/code/jc-shop-admin/src/views/media/mediaIndex.vue" 
"E:/code/jc-shop-admin/src/views/order/list/listIndex.vue" 
"E:/code/jc-shop-admin/src/views/order/offline/offlineIndex.vue" 
"E:/code/jc-shop-admin/src/views/permission/admin/adminIndex.vue" 
"E:/code/jc-shop-admin/src/views/permission/role/roleIndex.vue" 
"E:/code/jc-shop-admin/src/views/permission/rule/ruleIndex.vue" 
"E:/code/jc-shop-admin/src/views/production/attr/attrIndex.vue" 
"E:/code/jc-shop-admin/src/views/production/classify/classifyIndex.vue" 
"E:/code/jc-shop-admin/src/views/production/list/listIndex.vue" 
"E:/code/jc-shop-admin/src/views/production/replay/replayIndex.vue" 
"E:/code/jc-shop-admin/vite.config.ts"
```
