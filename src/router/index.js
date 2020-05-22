import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './../views/GoodsList'
import GoodsList from "../views/GoodsList";
import Title from "@/views/Title";
import Image from "../views/Image";
import Cart from "../views/Cart";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodList',
      components: {
        default:GoodsList,
        title:Title,
        img:Image
      }
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
