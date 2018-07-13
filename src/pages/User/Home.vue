<template>
  <div class="wrapper">
    <Menu />
    <div class="head">
      <div class="userinfo">
        <section class="balance">
          <span class="title">余 额</span>
          <span class="money">0.000</span>
          <a href="/M/Recharge" class="btn">充 值</a>
        </section>
        <section class="user-info">
          <img src="http://q1.qlogo.cn/g?b=qq&nk=851656783&s=100&t=1449411350" class="headicon">
          <p class="username">猫咪、Ceko</p>
        </section>
        <section class="points">
          <span class="title">积 分</span>
          <span class="money">0.000</span>
          <a class="btn">赚积分</a>
        </section>
      </div>
      <div class="bottomimgbox"></div>
    </div>

    <!--其它功能菜单 -->

    <div class="navlist">
      <ul>
        <li>
          <section>
            
            <span class="navlistname">个人资料</span>
          </section>
          <a href="" class="navlistlink">
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
        <li>
          <section>
            
            <span class="navlistname">支付密码</span>
          </section>
          <a href="/M/QueryOrder" class="navlistlink">
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
      </ul>
    </div>
    <div class="navlist">
      <ul>
        <li>
          <section>
            <span class="navlistname">推广赚分</span>
          </section>
          <a href="" class="navlistlink">
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
        <li>
          <section>
            <span class="navlistname">反馈建议</span>
          </section>
          <a href="" class="navlistlink">
            <span class="mui-icon mui-icon-arrowup"></span>
          </a>
        </li>

        
        <li>
          <section>
            
            <span class="navlistname">关于</span>
          </section>
          <a href="" class="navlistlink">
            v1.0.0<span class="mui-icon mui-icon-arrowup"></span>
          </a>
        </li>
      </ul>
    </div>


  </div>
 </template>
 <script>
 import '@/assets/js/flexible.js';
 import Menu from '@/pages/Index';

 export default {
   components: {
     Menu
   }
 }
 </script>

<style scoped>
.userinfo {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 3.7rem;
  background: #4e937a;
}

.userinfo section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.userinfo .title {
  font-size: 0.359375rem;
  color: #ffffff;
  padding-top: 1.53125rem;
}
.money {
  font-size: 0.359375rem;
  color: #fffc68;
  padding-top: 0.15625rem;
  padding-bottom: 0.1875rem;
}

.username {
  font-size: 0.359375rem;
  color: #ffffff;
  padding: 0.09375rem 0;
}
.userinfo .btn {
  display: inline-block;
  width: 1.46875rem;
  height: 0.625rem;
  line-height: 0.625rem;
  text-align: center;
  font-size: 0.296875rem;
  border: 1px solid #ffffff;
  border-radius: 0.296875rem;
  color: #ffffff;
}

.user-info img {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  margin-top: 0.40625rem;
}

.navlist {
  padding-top: 0.34375rem;
}
.navlist ul {
  background: #ffffff;
  padding: 0 0.3125rem 0 0.34375rem;
}

.navlist ul li {
  display: flex;
  height: 0.96875rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.navlistlink {
  text-decoration: none;
  color: #aeb6bf;
}

</style>