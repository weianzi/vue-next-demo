// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  var component: ComponentOptions
  export default component
}
