<template>
  <div class="wrapper">
    <Menu />
    <div class="head">
      <div class="userinfo">
        <section class="user-info">
          <img :src="'http://q1.qlogo.cn/g?b=qq&nk='+user.qq+'&s=100'" onerror="http://q1.qlogo.cn/g?b=qq&nk=10000&s=100&t=1449411350" class="headicon">
          <div v-if="user.user"" style="text-align: center">
            <p class="username">{{user.user}}</p>
          </div>
          <p class="username" v-else>未登录</p>
        </section>
        
        <section class="points" v-if="user.user">
          <p class="title" @click="updatePoints">
          积 分<i class="iconfont icon-refresh" :class="rotate && 'rotate'"></i>
          </p>
          <p class="money">{{user.points}}</p>
        </section>
        <section class="points" v-if="user.user" style="padding-top: 1.25rem;">
          <a class="btn" @click="checkin">签 到</a>
          <br/>
          <router-link to="/user/charge" class="btn">充 值</router-link>
        </section>
        <section class="unlogin" v-else>
          <router-link to="/user/login" class="btn">登  录</router-link>
          <br/>
          <router-link to="/user/reg" class="btn">注  册</router-link>
        </section>
      </div>
      <div class="bottomimgbox"></div>
    </div>

    <!--其它功能菜单 -->

    <div class="navlist">
      <ul>
        <li @click="jumpTo('/user/bill')">
          <section>
            
            <span class="navlistname">我的账单</span>
          </section>
          <a class="navlistlink">
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
        <li @click="jumpTo('/user/userinfo')">
          <section>
            
            <span class="navlistname">个人资料</span>
          </section>
          <a class="navlistlink">
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
        <li @click="jumpTo('/user/security')">
          <section>
            
            <span class="navlistname">账户安全</span>
          </section>
          <a class="navlistlink">
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
      </ul>
    </div>
    <div class="navlist">
      <ul>
        <li @click="jumpTo('/user/activity')">
          <section>
            <span class="navlistname">推广赚分</span>
          </section>
          <a class="navlistlink">
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
        <li>
          <section>
            <span class="navlistname">反馈建议</span>
          </section>
          <a class="navlistlink" @click="showFeedbackDialog">
            <span class="mui-icon mui-icon-compose"></span>
          </a>
        </li>

        
        <li @click="jumpTo('/user/about')">
          <section>
            
            <span class="navlistname">关于</span>
          </section>
          <a class="navlistlink">
            v{{APP_VERSION}}<span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </li>
      </ul>
    </div>

    <!--提交反馈建议的输入框-->
    <div v-if="feedbackDialogShow" class="mui-popup-backdrop mui-active" style="display: block;"></div>
    <div v-if="feedbackDialogShow" class="mui-popup mui-popup-in" style="display: block;">
      <div class="mui-popup-inner">
        <div class="mui-popup-title">反馈建议</div>
        <div class="mui-popup-text"></div>
        <div class="mui-popup-input">
          <textarea id="textarea" v-model="feedbackContent" rows="5" placeholder="请输入您遇到的问题或意见建议(50字以内)"></textarea>
        </div>
        <div class="mui-popup-buttons">
          <span class="mui-popup-button" @click="addFeeback">确定</span>
          <span class="mui-popup-button" @click="cancelFeedback">取消</span>
        </div>
      </div>
    </div>
  </div>
 </template>
 <script>
 import $ from 'axios';
 import {user as USER_API} from '@/config/serverApi';
 import {mapState, mapActions} from 'vuex';
 import '@/assets/js/flexible.js';
 import Menu from '@/pages/Index';


 export default {
   components: {
     Menu
   },
   computed: {
     ...mapState({
       user: state => state.user
     })
   },
   data() {
     return {
       feedbackDialogShow: false,
       feedbackContent: '',
       rotate: false
     };
   },
   methods: {
     ...mapActions(['getUserPoints']),
     jumpTo(url) {
       this.$router.push(url);
     },
     showFeedbackDialog() {
       this.feedbackDialogShow = true;
     },
     addFeeback() {
       if (this.feedbackContent.trim().length < 5) {
         this.$tip.show('请不要输入无效的信息！');
         return false;
       }
       this.feedbackDialogShow = false;
       $.post(USER_API.feedback, {content: this.feedbackContent})
        .then(({data}) => {
          this.$tip.show(data.msg);
          if (data.status) {
            this.feedbackContent = '';  
          }
        })
        .catch(err => {
          this.$tip.show('网络连接失败！');
        });
       
     },
     cancelFeedback() {
       this.feedbackDialogShow = false;
       this.feedbackContent = '';
     },
     checkin() {
       $.get(USER_API.checkin)
        .then(({data}) => {
          this.$tip.show(data.msg);
          if (data.status) {
            this.$store.commit('setUserPoints', data.points);
          }
        })
        .catch(err => {
          this.$tip.show('网络连接失败！');
        })
     },
     updatePoints() {
       this.rotate = true;
       this.getUserPoints().then(r => {
         this.rotate = false;
         this.$tip.show('您的积分:' + r.points);
       })
       .catch(err => {
         this.rotate = false;
         this.$tip.show('刷新积分失败！');
       });
     }
   }
 }
 </script>

<style scoped>
@keyframes loading {
	0 {
	transform:rotate(0deg)
}
50% {
	transform:rotate(180deg)
}
100% {
	transform:rotate(360deg)
}
}
.userinfo {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 3.7rem;
  background: #c55252;
}

.userinfo .unlogin {
  height: 100%;
  justify-content: center;
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
.userinfo .title i {
  font-size: 0.425rem;
}
.userinfo .title .rotate {
    display: inline-block;
    animation: loading 1.5s .3s cubic-bezier(.17,.37,.43,.67) infinite;
}
.money {
  font-size: 0.59rem;
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
  height: 1.06875rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.navlistlink {
  text-decoration: none;
  color: #aeb6bf;
}

</style>
