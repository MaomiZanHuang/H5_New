<template>
  <div class="wrapper" style="padding-bottom: 50px;overflow: auto;">
    <Menu />
    <Activity v-if="showActivity" @close="showActivity=false"/>
    <div class="head">
      <div class="userinfo">
        <section class="user-info" @click="qqLogin">
          <img :src="'//q1.qlogo.cn/g?b=qq&nk='+user.qq+'&s=100'" onerror="//q1.qlogo.cn/g?b=qq&nk=10000&s=100&t=1449411350" class="headicon">
          <div v-if="user.user"" style="text-align: center">
            <p class="username">{{user.user}}</p>
          </div>
          <p class="username" v-else>
          未登录
          <p style="color:#fff" v-if="!user.user && IS_APP">(点击QQ快捷登录)</p>
          </p>
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

    <!--最显眼功能-->
    <div class="flex-list">
      <div class="flex-item" @click="showAd1">
        <div class="am-grid-item-inner-content column-num-4">
          <img class="am-grid-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACtUlEQVRoQ+1ZUW7aQBB9A15+m56g9ARNbwAnKEhYiiqskBOUnqDkBCgniCOsqhKu6pwAbpD0BskJSn+xYapd25RQU68VGyXR7qe9npn35r0dyyY880XPvH4UAsCdwVEoVmNidEA4YvAtAFeE1hUF7qIIGXGs6DSORa34WQ7AuBC+N9eNpQ2A7Y/HEddnsvDM4Mwj4XvnOomXdv8TMY32xSLgzJpOXJ1YWgAS5m8IaAL8G4yOZCkBJQv5oPgD34ow6lLw7S4ruYwTiegSoI7az3xfYwyt717AnZNmaFkjIjqV92jNXXk9D4QWgLDXH4HoiwxmYfWepl+ldDYr7PVbIAQAvQJjYdGqvbsnkcyMQMeJXC7E1BvuFhj2nEASwsBdYzp5WwqApd2/kYmZ+arhe4Nsdk+aobACAr3LApHGUOz+RyIxGTSLLcHtPD/odcDuL2J2+Vz43mgfKwnLcwkilpPVluZe2s4lAQp4nr6rAbDVVoFVd1ce24CUL1CbJ4DnDLomwlineOURK/ohTyXpj4bvNUuR0IOilFnh1piCOkX3WWCWPWeYFp0WoDqC9Vm6X5o2EuJNbNh1c12ryaO0FR8U2V7LAqMlIfmgbK0snIhU0qrW9smkk0MbgPKUHD7WagDigTJriYvBP8HkiqjuFhmKGwCR7QyYMd47qAoWK6aTB+SEtsMFQ2RvZyyI8DkddJskYc/5VVbxMnNlAJQUsBD+5HVyMMRAS2Mo4a1SAFsE/e1AWS02APScknbYdGAfX8YDOUoyEsqz2sEllFfQU71f6F3oKYL4B0BZE7kqCe3GNQAOPQdMB3SNbDywhykjISMhXQaMhEpmqqoJbyaxmcQFpWrmgC5h5lXCzAFdrWgyZebAnm+uL3CQJT/0Hqmgav4PMK6FP1E/ydP18j6rPJb5Qz//B2e4BU8EyKoEAAAAAElFTkSuQmCC">
          <div class="am-grid-text">广告免费赚分</div>
        </div>
      </div>
      <div class="flex-item" @click="showActivity=true">
        <div class="am-grid-item-inner-content column-num-4">
          <img class="am-grid-icon" src="data:image/png;base64,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">
          <div class="am-grid-text">支付宝红包</div>
        </div>
      </div>
      <div class="flex-item" @click="showAd2">
        <div class="am-grid-item-inner-content column-num-4">
          <img class="am-grid-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADHUlEQVRoQ+1ZTW7aQBT+HhFsmxuUG5ScoCDVUZfkBE1O0LCIUVZNVlXcRckJSE9QuqtMpNATFE5QeoNki1VeNTYh/hk8tpkBI+Gd7eeZ972/ee8zYccv2nH9oQ0AW85HAG2lQYhG5F5cK+UyCmgBwJZzCkI/454A+Jrc7lV2+dWSegAc31wB9Cm5DU8AepN4zvhFQ7u5VQD8/nMd/w5eL5QQHjh9UYgnqMzb9PNyys2vh6jNegB9WL5njAGcL+6faGiL+0JXYQ/wSqsDmFOL7i9Gzxr5IKqzKYhe6faGEQDk2ol12XJGILw1DoAtpwHgAYTDtM1SPQA+Ibc7iHrA+6Nc892XJir8II8lnmJWO6JR5zH8PmmptNAIJV8qAMYjmE5EGC1yoA+QvMSG10wFIEKTO3Tf7ZkHkCcd8wCQlF8zHtgDWGWB5AFY2AN5jJxVllU5oDOEsiqVR848gDzaGJFdN4SMKJVn0T2APNYyIVteD/wAuC5tvSN2KCUAnpDbbUjb7mQzlhiE8p0DuqOC+QlerR5u0FZ2rf7eZfMA4yg8zKR2wqUDwDijoX0Xa7lFGy/a+RVXaTzA38jthkZQgC1HKK+Yk0sBIEjasInZcnogCFpGcW0bAOMvvGojlrQ5KJltAhAVB9TMl7Rxh2gBEFAmmFcEF/RClSi9L01a+ZxsLImFFQ/mDcH3+FU5bX6OBDluaWg/80BBQbSc3+kVR4ZiXQ9IhmolrShh4dhy+lEiTOW+ZbFd9yTmqc82xJi04ADiUYK4WjtpTeSAoEyIz8K8jx8SgmqcVwbLhkyWtMqRUeWJdUMoGtfnNLRvI498CtEb+Axc/KQNuFQR90nCTKX38r1OAL7ZcQev2omzZWK2TXKjnqJNyIJCN4AAxBhetRUHETtpCyatiRyQVjcIvrIlo8kzl9osDjDaTovkBjqRDvP4pg3Q90y6ZRIyEUKJjblHbrej7u0zaRwT2ggAPzEGYKrnP2lVoDYGQKVI0fd7AEUtp+u7vQd0WbLoOrvugUz/yPymqzKW/tMtajgt3/EEs1pT+ZdSy14bXOQ/XhxMT+Ow9joAAAAASUVORK5CYII=">
          <div class="am-grid-text text-center">任务免费赚分</div>
        </div>
      </div>
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
 import Activity from '@/components/Activity';

 export default {
   components: {
     Menu,
     Activity
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
       rotate: false,
       showActivity: false
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
          window.zanhuang&&window.zanhuang.showAd("YOUMI", 1, "telanx");
        })
        .catch(err => {
          this.$tip.show('网络连接失败！');
          window.zanhuang && window.zanhuang.showAd("YOUMI", 1, "telanx");
        });
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
     },
     showAd1() {
       if (typeof window.zanhuang !== 'undefined') {
         this.$router.push('/user/spotadv');
       } else {
         this.$tip.show('下载安装APP后即可免费赚积分！');
         setTimeout(() => {
           this.$router.push('/user/about');
         }, 1000);
       }
     },
     showAd2() {
       if (typeof window.zanhuang !== 'undefined') {
        this.$router.push('/user/taskadv');
       } else {
         this.$tip.show('下载安装APP后即可免费赚积分！');
         setTimeout(() => {
           this.$router.push('/user/about');
           }, 1000);
       }
     },
     qqLogin() {
       if (this.IS_APP && !this.user.user)
       window.zanhuang.qqLogin();
     }
   },
   mounted() {
     window.afterLogin = data => {
       console.log(data);
       var open_id = data.openid;
       this.$loading.show('正在登录中...');
       $.post(USER_API.login, {
        open_id
      })
      .then(({data}) => {
        this.$loading.hide();
        this.$tip.show(data.msg);
        if (data.status) {
          localStorage['jwt'] = data.token;
          this.$store.commit('setUser', data.user);
          // 更新store中的user字段
        }

        // 新用户需要先绑定
        if (data.newuser) {
          this.$router.push('/user/qqlogin');
        }
      })
      .catch(err => {
        this.$loading.hide();
        this.$tip.show('网络连接失败！');
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
  background: rgb(30, 153, 213);
  background-image: -webkit-linear-gradient(right, rgb(0,168,255), rgb(0,213,248));
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


.flex-list {
  display: flex;
  background: #fff;
  margin-top: 0.34375rem;
  padding: 0.34375rem 0;
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
}
.flex-item {
  flex: 1;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.flex-item img {
  width: 1.0rem;
  height: 1.0rem;
}
.flex-item .am-grid-text {
  font-size: 0.3rem;
  color: #aaa;
}
</style>
