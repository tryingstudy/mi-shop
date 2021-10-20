<template>
  <div class="header">
      <div class="site-topbar">
        <div class="contain">
          <div class="topbar-nav">
            <ul>
              <li v-for="navItem in navItems">
                  <a :href="navItem.url">{{navItem.name}}</a>
                  <span class="sep">|</span>
              </li>
            </ul>
          </div>
          <div class="topbar-cart" @mouseenter="isEnter" @mouseleave="isLeave" @click="gocart">
              <div class="cart">
                <span class="iconfont icon-gouwuchekong"></span>
                <span>购物车</span>
                <span>( {{count}} )</span>
              </div>
              <transition name="fade">
                <div class="cart-list" v-show="cartStatus">
                  购物车中还没有商品，赶紧选购吧
                </div>
              </transition>
            </div>
          <div class="topbar-info">
            <ul>
              <li v-for="infoItem in infoItems">
                <a>{{infoItem.name}}</a>
                <span class="sep">|</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site-header">
        <div class="contain">
          <div class="header-logo">
            <img src="../../static/image/milogo.png" class="milogo"/>
          </div>
          <div class="header-nav">
            <ul class="proitems">
              <li v-for="pronav in pronavItems" @mouseleave="menuisLeave()">
                <a>
                  <span class="text" @mouseenter="menuisEnter(pronav.type)">{{pronav.name}}</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="text">服务</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="text">社区</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="header-search">
              <el-input class="search-text" v-model="searchForm.pid" placeholder="净水器"></el-input>
              <el-button class="btn iconfont icon-sousuo1"></el-button>
          </div>
        </div>
      </div>
      <transition name="fadeIn">
        <div class="header-menu"
          @mouseenter="menuisEnter()"
          @mouseleave="menuisLeave()"
          v-show="headerStatus">
            <ul class="menus">
              <li class="product" v-for="tabItem in tabItems">
                <div class="figure-thumb">
                  <a :href="tabItem.productId"><img :src="tabItem.productImg" :alt="tabItem.name"></a>
                  <p class="name">{{tabItem.productName}}</p>
                  <p class="price">{{Number(tabItem.productPrice)}}元起</p>
                </div>
              </li>
              <el-divider direction="vertical"></el-divider>
            </ul>
        </div>
      </transition>
  </div>
</template>

<script>
import {HttpManager} from "../api";

export default{
  data() {
    return {
      count: 0,
      tids: '',
      cartStatus: false,
      headerStatus: false,
      navItems: [
        {name:'小米商城',url:''},
        {name:'MIUI',url:''},
        {name:'loT',url:''},
        {name:'云服务',url:''},
        {name:'天星数科',url:''},
        {name:'有品',url:''},
        {name:'小爱开放平台',url:''},
        {name:'企业团购',url:''},
        {name:'资质证照',url:''},
        {name:'协议规则',url:''},
        {name:'下载app',url:''},
        {name:'智能生活',url:''},
        {name:'Select Location',url:''}
      ],
      infoItems: [
        {name:'登陆',url:''},
        {name:'注册',url:''},
        {name:'消息通知',url:''}
      ],
      pronavItems: [
        {name:'小米手机',type: 'xiaomitable'},
        {name:'Redmi 红米',type: 'redmitable'},
        {name:'电视',type: 'tvtable'},
        {name:'笔记本',type: 'computertable'},
        {name:'平板',type: 'ipadtable'},
        {name:'家电',type: 'jiadiantable'},
        {name:'路由器',type: 'luyouqitable'},
        {name:'智能硬件',type: 'zhinengtable'},
      ],
      xiaomitable: [],  //头小米栏
      redmitable: [],   //头红米栏
      tvtable: [],     //头电视栏
      computertable: [],  //头笔记本栏
      ipadtable: [],    //头ipad栏
      jiadiantable: [],   //头家电栏
      luyouqitable: [],   //头路由器栏
      zhinengtable: [],    //头智能栏
      searchForm: {
          pid: ''
      },
      tabItems: ["xiaomitable","redmitable","tvtable","computertable","ipadtable","jiadiantable","luyouqitable","zhinengtable"],
    }
  },
  mounted() {
    this.getAllContent()
  },
  methods: {
    isEnter(){
      this.cartStatus = true
    },
    isLeave(){
      this.cartStatus = false
    },
    gocart(){
      alert('hahha')
    },
    menuisEnter(menuType) {
      if (menuType) {
        this.tabItems = this[menuType]
        this.headerStatus = true
      } else if (menuType ==='') {
        this.headerStatus = false
      }
      clearTimeout(this.tids)
    },
    menuisLeave(){
      let self = this
      this.tids = setTimeout(function () {
        self.headerStatus = false
      }, 300)
    },
    getAllContent(){
      HttpManager.getAllContent().then(res => {
        this.xiaomitable = [],
          this.redmitable = [],
          this.tvtable = [],
          this.computertable = [],
          this.ipadtable = [],
          this.jiadiantable = [],
          this.luyouqitable = [],
          this.zhinengtable = []
        for (let item of res){
          if (item.categoryId === 2) {
            this.xiaomitable.push(item)
          }
          if (item.categoryId === 3) {
            this.redmitable.push(item)
          }
          if (item.categoryId === 5) {
            this.tvtable.push(item)
          }
          if (item.categoryId === 15) {
            this.computertable.push(item)
          }
          if (item.categoryId === 25) {
            this.ipadtable.push(item)
          }
          if (item.categoryId === 27) {
            this.jiadiantable.push(item)
          }
          if (item.categoryId === 75) {
            this.luyouqitable.push(item)
          }
          if (item.categoryId === 65) {
            this.zhinengtable.push(item)
          }
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped="scoped">
  a{
    cursor:pointer;
  }
  .site-topbar{
    position: relative;
    height: 40px;
    font-size: 12px;
    color: #b0b0b0;
    background: #333;
  }
  .site-topbar a{
    color: #b0b0b0;
    font-size: 12px;
    line-height: 40px;
    display: inline-block;
  }
  .site-topbar a:hover{
      color: #FFFFFF;
  }
  .site-topbar .sep{
    margin: 0 .3em;
    color: #424242;
  }
  .contain{
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
  }
  .site-header{
    height: 100px;
  }
  .topbar-nav{
    float: left;
    height: 40px;
    line-height: 40px;
  }
  ul {
    display: flex;
  }
  ul li{
    list-style: none;
  }
  .topbar-info{
    position: relative;
    float: right;
    height: 40px;
    line-height: 40px;
}
  .topbar-cart{
    position: relative;
    float: right;
    width: 120px;
    height: 40px;
    background-color: #424242;
    transition: all .2s;
    font-size: 12px;
    cursor: pointer;
  }
  .cart {
    position: relative;
    z-index: 20;
    margin-left: 20px;
  }
  .cart span{
    font-size: 12px;
    line-height: 40px;
    color: #b0b0b0;
    display: inline-block;
  }
  .topbar-cart:hover{
    background-color: #FFFFFF;
    span{
      color: #ff6700;
    }
  }
  .cart-list {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 40px;
    font-size: 12px;
    text-align: center;
    width: 316px;
    line-height: 96px;
    height: 96px;
    color: #424242;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  }
  .header-logo{
    float: left;
    width: 62px;
    margin-top: 22px;
  }
  .milogo{
    width: 56px;
    height: 56px;
  }
  .header-nav{
    float: left;
    width: 670px;
    margin-left: 150px;
    margin-top: 10px;
  }
  .proitems{
    display: flex;
    height: 88px;
    line-height: 88px;
  }
  .text{
    font-size: 16px;
    padding: 0 10px;
    color: #333333;
  }
  .text:hover{
    color: #ff6700;
  }
  .header-search{
    float: right;
    margin-top: 30px;
  }
  .header-search >>>.el-input__inner{
    width: 245px;
    height: 50px;
    border-right: none;
    border-radius: 0px;
  }
  .search-text{
    width: 245px;
    font-size: 14px;
    line-height: 48px;
  }
  .btn{
    float: right;
    border-radius: 0px;
    width: 52px;
    height: 50px;
    font-size: 24px;
    line-height: 24px;
    background: #fff;
    color: #616161;
  }
  .icon-sousuo1{
    padding:5px;
  }
  .header-menu {
    position: absolute;
    left: 0;
    top: 140px;
    width: 100%;
    height: 230px;
    background: #fff;
    box-shadow: 0 1px 5px #ccc;
    z-index: 31;
  }
  .menus{
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
  .menus li{
    position: relative;
    width: 180px;
    padding: 35px 12px 0;
    text-align: center;
  }
  .figure-thumb{
    width: 160px;
    height: 110px;
    margin: 0 auto 16px;
    text-align: center;
  }
  li img {
      width: 160px;
      height: 110px;
  }
  li .price {
    font-size: 12px;
    line-height: 20px;
    color: #ff6700;
  }
  li .name {
    margin-top: 10px;
    font-size: 12px;
    line-height: 20px;
    color: #333;
  }
</style>
