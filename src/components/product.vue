<template>

  <div class="product">

    <div class="contain">
      <div class="container">
        <img src="https://kaiwen-oos.oss-cn-shanghai.aliyuncs.com/banner/2021/10/07/f334fbd05d5681bb838fefd1c815d88c.jpg" width="100%" height="120"/>
      </div>

      <div class="phone">
        <div class="box-hd">
          <h1 class="title">手机</h1>
          <div class="more">
            <a href="#" class="more-link">
              查看更多
              <i class="iconfont icon-youjiantou_huaban"></i>
            </a>
          </div>
        </div>

        <div class="phone_product">
          <el-row>
            <el-col :span="4.5">
              <div>
                <img src="static/image/mix.jpg" height="614px" width="100%"/>
              </div>
            </el-col>

            <el-col :span="16">
              <div>
                <ul class="brick_item">
                  <li v-for="item in phone">
                    <a href="#">
                      <div class="figure_img">
                        <img :src="item.productPicture" width="160px" height="160px"/>
                      </div>
                      <h3 class="title">{{item.productName}}</h3>
                      <p class="price">
                        <span class="num">3000</span>
                        元
                        <span>起</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </el-col>

          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data(){
    return{
      phone: []
    }
  },
  created() {
    this.phone = window.sessionStorage.getItem('phone')
    console.log(this.phone)
  }
}
</script>

<style lang="scss" scoped>
  .product{
    width: 100%;
    height: auto;
    margin-top: 10px;
    background-color: #f5f5f5;
    .contain{
      width: 1226px;
      margin-left: auto;
      margin-right: auto;
      .container{
        padding-top: 20px;
        cursor: pointer;
      }
      .box-hd{
        margin-top: 10px;
        position: relative;
        height: 58px;
        -webkit-font-smoothing: antialiased;
        .title{
          margin: 0;
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
        }
        .more{
          position: absolute;
          float: right;
          top: 0;
          right: 0;
          .more-link{
            font-size: 16px;
            line-height: 58px;
            color: #424242;
            i{
              font-size: 16px;
            }
            &:hover{
              color:  #ff6700;
            }
          }
        }
      }
      .phone_product{
        margin-left: auto;
        margin-right: auto;
        .brick_item{
          z-index: 1;
          margin-left: 14px;
          width: 1000px;
          height: 550px;
        }
        li{
          float: left;
          margin-bottom: 14px;
          margin-left: 14px;
          width:234px;
          height: 300px;
          background-color: #FFFFFF;
          &:hover{
            transition: all 1s;
            box-shadow:#b0b0b0 5px 5px 40px ;
          }
          a{
            display: block;
            padding: 20px 0;
            .figure_img{
              width: 160px;
              height: 160px;
              margin: 0 auto 18px;
            }
            .title{
              margin: 0 10px 2px;
              text-align: center;
              font-size: 14px;
              font-weight: 400;
              color: #333;
            }
            .price{
              margin: 20px 10px 10px;
              text-align: center;
              font-size: 14px;
              color: #ff6700;
              span{
                color: #ff6700;
                margin: 0px;
              }
            }
          }
        }
        li:nth-child(1){
          margin-left: 0px;
        }
        li:nth-child(5){
          margin-left: 0px;
        }
        li:nth-child(n+5){
          margin-bottom: 0px;
        }
      }
    }
  }
</style>
