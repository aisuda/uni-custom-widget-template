// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget';
// @ts-ignore
import InfoCard from '../src/components/uni-info-card-v2/uni-info-card-v2';

registerRenderer(InfoCard, {
  type: 'uni-info-card-v2',
  framework: 'vue3',
});
