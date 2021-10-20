<template>
  <div class="home-hero">
    <div class="swrap">
      <div class="site-category">
        <ul>
          <li v-for="items in categoryitems" class="category-item" :key="items.name"
          @mouseenter="proisEnter(items.type)" @mouseleave="proisLeave()">
              <a href="">{{items.name}}
                <em class="iconfont icon-you-"></em>
              </a>
          </li>
        </ul>
      </div>
      <transition name="fadein">
        <div class="procontain"
        @mouseenter="proisEnter()"
          @mouseleave="proisLeave()"
          v-show="productstatus">
              <a :href="item.id" v-if="item.categoryId==2 || item.categoryId==3 || item.categoryId==4 || item.categoryId==6
              || item.categoryId==7 || item.categoryId==16 || item.categoryId==17" v-for="item in tabItems" >
                <img :src="item.productPicture" :alt="item.productName">
                <span style="display:inline-block;margin-left: 7px;">{{item.productName}}</span>
              </a>
              <a :href="item.id" v-if="item.parentId==27 || item.parentId==52 || item.parentId==56 || item.parentId==65 ||
                              item.parentId==75 || item.parentId==78 || item.parentId==80 || item.parentId==91 || item.parentId==100 ||
                              item.parentId==108 || item.parentId==132 || item.parentId==112 || item.parentId==117" v-for="item in tabItems" >
                <img :src="item.img">
                <span style="display:inline-block;margin-left: 7px;">{{item.name}}</span>
              </a>
        </div>
      </transition>
      <div class="site-banner">
        <div class="swiper-button prev" @click="arrowClick('left')">
          <div class="iconfont icon-zuo1"></div>
        </div>
        <el-carousel trigger="click" height="460px" arrow="never" ref="banner">
          <el-carousel-item v-for="item in banneritems" :key="item.productid">
            <a href=""><img :src="item.image"class="banner-img"/></a>
          </el-carousel-item>
        </el-carousel>
        <div class="swiper-button next" @click="arrowClick('right')">
          <div class="iconfont icon-you"></div>
        </div>
      </div>
    </div>
    <div class="under-banner">
      <div class="sub_logo">
        <ul>
          <li v-for="item in sublogo" >
            <a style="padding-top: 23px;text-align: center;color: #FFFFFF;font-size: 10px">
              <img :src="item.img" style="display: block;width: 24px;height: 24px;margin: 0 auto 4px;"/>
              {{item.name}}
            </a>
          </li>
        </ul>
      </div>
      <div class="sub_imglist">
        <ul>
          <li>
            <img src="https://kaiwen-oos.oss-cn-shanghai.aliyuncs.com/banner/2021/10/07/d8a6d6d37904e22c72130e3e4ec79b41.jpg"/>
          </li>
          <li>
            <img src="https://kaiwen-oos.oss-cn-shanghai.aliyuncs.com/banner/2021/10/07/b30177d629bfbe2fb42251c1b8538f7b.jpg"/>
          </li>
          <li>
            <img src="https://kaiwen-oos.oss-cn-shanghai.aliyuncs.com/banner/2021/10/07/9f18ac756fa2cedb16ea429b9c0001af.png"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {HttpManager} from "../api/index";
  export default{
    data(){
      return{
        categoryitems:[
          {name:'手机',type:'phone'},
          {name:'电视',type:'tv'},
          {name:'笔记本 平板',type:'computer'},
          {name:'家电',type:'jiadian'},
          {name:'出行 穿戴',type:'chuxing'},
          {name:'智能 路由器',type:'zhineng'},
          {name:'电源 配件',type:'dianyuan'},
          {name:'健康 儿童',type:'jiankang'},
          {name:'耳机 音箱',type:'erji'},
          {name:'生活 箱包',type:'shenghuo'},
        ],
        sublogo:[
          {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48',name:"保障服务"},
          {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48',name:"企业团购"},
          {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48',name:"F码通道"},
          {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48',name:"米粉卡"},
          {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48',name:"以旧换新"},
          {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48',name:"话费充值"},
        ],
        productstatus: false,
        categorystatus:false,
        tids: '',
        banneritems:[],
        tabItems:["phone","tv","computer","jiadian","chuxing","zhineng","dianyuan","jiankang","erji","shenghuo"],
        phone:[],
        tv:[],
        computer:[],
        jiadian:[],
        chuxing:[],
        zhineng:[],
        dianyuan:[],
        jiankang:[],
        erji:[],
        shenghuo:[],
        saveAllList:[],
      }
    },
    mounted() {
        this.getproduct()
    },
    created(){
      this.selectbanner()
    },
    methods:{
      selectbanner(){
        HttpManager.getbanner().then(res =>{
          this.banneritems = res;
        })
      },
      getproduct(){
        HttpManager.getTopOne().then(res =>{
          this.phone = res
          this.$store.commit('phoneData', this.phone)
        }),
        HttpManager.getTopTwo().then(res =>{
          this.tv = res
        }),
        HttpManager.getTopThree().then(res =>{
          this.computer = res
        }),
          HttpManager.getTopOther().then(res =>{
            this.jiadian=[],
            this.chuxing=[],
            this.zhineng=[],
            this.dianyuan=[],
            this.jiankang=[],
            this.erji=[],
            this.shenghuo=[]
            for (let item of res){
              if (item.parentId === 27) {
                this.jiadian.push(item)
              }
              if (item.parentId === 52) {
                this.chuxing.push(item)
              }
              if (item.parentId === 56) {
                this.chuxing.push(item)
              }
              if (item.parentId === 65) {
                this.zhineng.push(item)
              }
              if (item.parentId === 75) {
                this.zhineng.push(item)
              }
              if (item.parentId === 78) {
                this.dianyuan.push(item)
              }
              if (item.parentId === 80) {
                this.dianyuan.push(item)
              }
              if (item.parentId === 91) {
                this.jiankang.push(item)
              }
              if (item.parentId === 100) {
                this.jiankang.push(item)
              }
              if (item.parentId === 108) {
                this.erji.push(item)
              }
              if (item.parentId === 132) {
                this.erji.push(item)
              }
              if (item.parentId === 112) {
                this.shenghuo.push(item)
              }
              if (item.parentId === 117) {
                this.shenghuo.push(item)
              }
          }
        })
      },
      arrowClick(val) {
        if(val === 'right') {
          this.$refs.banner.next()
        } else {
          this.$refs.banner.prev()
        }
      },
      proisEnter(menuType) {
        this.productstatus = true
        if (menuType) {
          this.tabItems = this[menuType]
          this.productstatus = true
        } else if (menuType ==='') {
          this.productstatus = false
        }
        clearTimeout(this.tids)
      },
      proisLeave(){
        let self = this
        this.tids = setTimeout(function () {
          self.productstatus = false
        }, 100)
    }
  },
  }
</script>

<style lang="scss" scoped>
  .swrap{
    position: relative;
    width: 1226px;
    height: 460px;
    margin: 0px auto ;
  }
  .site-category{
    float: left;
    position: absolute;
    width: 234px;
    height: 460px;
    z-index: 21;
    font-size: 14px;
    background: rgba(105,101,101,.6);
  }
  .site-category ul{
    height: 420px;
    margin-top: 20px;
    border: 0;
    color: #fff;
  }
  .category-item{
    width: 234px;
    height: 42px;
  }
  .category-item:hover{
    background-color: #ff6700;
  }
  .category-item a{
    position: absolute;
    margin-top: 10px;
    padding: 0px 0px 0px 30px;
    font-size: 14px;
    width: 200px;
    color: #FFFFFF

  }
  .category-item a em{
    position: absolute;
    top: 2px;
    right: 20px;
    font-size: 16px;
    line-height: 16px;
    color: #e0e0e0;
  }
  .procontain{
    height: 460px;
    width: auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 234px;
    z-index: 50;
    writing-mode: vertical-lr;
    box-shadow: #b0b0b0 3px 5px 10px;
      a {
        height: 76px;
        width: 240px;
        text-align: left;
        padding-left: 15px;
        color: #333;
        font-size: 14px;
        writing-mode: horizontal-tb;
        line-height: 70px;
        cursor: pointer;
        &:hover{
          span{
            color: #ff6700;
          }
        }
          img {
            height: 40px;
            width: 40px;
            vertical-align: middle;
          }
      }
  }
  .site-banner{
    position: absolute;
    display: block;
    float: right;
    width: 1226px;
  }
  .banner-img{
    position:absolute;
     z-index: 30;
    width:100%;
    height:100%;
  }
  .swiper-button{
    top: 50%;
    width: 41px;
    height: 69px;
    margin-top: -60px;
    z-index: 10;
    cursor: pointer;
    outline: none;
    color: gray;
  }
  .swiper-button:hover{
    color: #FFFFFF;
    background-color: gray;
  }
  .prev{
    position: absolute;
    left: 234px;
  }
  .site-banner .iconfont{
    font-size: 35px;
    margin-top: 18px;
  }
  .next{
    position: absolute;
    right: 0px;
  }
  .under-banner{
    position: relative;
    width: 1226px;
    height: 175px;
    margin: 17px auto ;
    .sub_logo{
      background-color: #5f5750;
      width: 234px;
      height: 167px;
      float: left;
      li{
        width: 71px;
        height: 82px;
        padding: 0 3px;
        border-left: 1px solid #6C6C6C;
        float: left;
        cursor: pointer;
        a{
          display: block;
          padding-top: 23px;
          font-size: 10px;
          text-align: center;
          text-overflow: ellipsis;
          opacity: .7;
        }
      }
      li:nth-child(-n+3){
        border-bottom: 1px solid #6C6C6C;
      }
      li:nth-child(1){
        border-left: none;
      }
      li:nth-child(4){
        border-left: none;
      }
    }
    .sub_imglist{
      width: 987px;
      height: 170px;
      margin-left: 5px;
      float: left;
      li{
        width:318px;
        padding-left: 11px;
        float: left;
        cursor: pointer;
        &:hover{
          img{
            box-shadow:#b0b0b0 3px 10px 20px ;
          }
        }
        img{
          height: 170px;
        }
      }
    }
  }
</style>
