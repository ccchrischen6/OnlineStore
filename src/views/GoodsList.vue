<template>
    <div>
      This is goods list page
<!--      <span>{{$route.params.goodsId}}</span>-->
<!--      <br>-->
<!--      <span>{{$route.params.name}}</span>-->
      <br>

      <router-link to="/title">show title</router-link>
      <router-link to="/img">show image</router-link>
      <div>
        <router-view></router-view>
      </div>
      <router-link v-bind:to="{name:'cart', params:{cartId:123}}">jump to cart page</router-link>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
      methods:{
          jump(){
            this.$router.push({path:'/cart?goodsId=123'})
          }
      }
    }
</script>

