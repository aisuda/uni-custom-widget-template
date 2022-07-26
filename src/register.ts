/**
 * 注册aipage-editor自定义组件（aipage-editor渲染器和插件）
 */

// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget';
// @ts-ignore
import InfoCard from './components/info-card/info-card';

registerRenderer(InfoCard, {
  type: 'uni-info-card',
  framework: 'vue3',
});

// 注册自定义插件（aipage-editor组件物料面板需要）
import './components/info-card/plugin';
