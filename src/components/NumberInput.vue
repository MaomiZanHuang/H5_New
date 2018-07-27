<template>
<div class="input_num-mask">
  <div class="input_num-box">
    <!-- 改造为密码框 -->
    <div class="input-box">
      <slot name="header">账户积分计算</slot>
      <div class="pwd-input">
        <i>{{showPoints(0)}}</i>
        <i>{{showPoints(1)}}</i>
        <i>{{showPoints(2)}}</i>
        <i>{{showPoints(3)}}</i>
        <i>{{showPoints(4)}}</i>
        <i>{{showPoints(5)}}</i>
      </div>
    </div>
    <div class="keyboard-box"
        @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div class="row" v-for="row in keyboards">
          <div v-for="column in row" class="column"
          :class="{ active: activeColumn === column }">{{ column }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style>
.input_num-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
}
.input_num-box {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.input_num-box  .input-box {
  background: #fff;
  width: 100%;
  text-overflow: hidden;
  font-size: 30px;
  margin-bottom: 20px;
}
.input_num-box  .keyboard-box {
  background: #fff;
}
.input_num-box  .keyboard-box .row {
  display: flex;
  height: 80px;
}
.input_num-box .column {
  flex: 1;
  font-size: 30px;
  height: 100%;
  text-align: center;
  width: 10%;
  color: #20a0ff;
  padding-top: 20px;
  user-select: none;
}
.input_num-box .column:not(:last-child) {
  border-right: 1px solid #eee;
}
.input_num-box .row:last-child .column:last-child, .input_num-box .row:last-child .column:nth-last-child(3) {
  background: #eee;
}
.input_num-box .column.active {
  color: #fff;
  background: #20a0ff;
}
.row:not(:last-child)  {
  border-bottom: 1px solid #eee;
}

.pwd-input {
  padding: 20px;
  width: 100%;
  
  display: flex;
  justify-content: center;
}
.pwd-input i:first-child {
  border-left: solid 1px #aaa;
}
.pwd-input i {
  flex: 1;
  display: flex;
  font-weight: bold;
  justify-content: center;
  border-top: solid 1px #aaa;
  border-bottom: solid 1px #aaa;
  border-right: solid 1px #aaa;
  width: 20px;
  height: 50px;
}
</style>
<script>
/**
  数字键盘输入
 */
export default {
  data () {
    return {
      t: 0,
      inputs: [],
      activeColumn: '',
      keyboards: [
          ['7', '8', '9'],
          ['4', '5', '6'],
          ['1', '2', '3'],
          [' ', '0', 'X'],
      ]
    };
  },
  methods: {
    showPoints(n) {
      return this.inputs.length > n
        ? '.'
        : '';
    },
    handleTouchStart (e) {
      e.stopPropagation();
      clearTimeout(this.t);
      // 针对删除按钮的清空
      if (e.target.innerText === 'X') {
        this.t = setTimeout(() => {
          this.inputs = [];
        }, 800);
      }
      this.activeColumn = e.target.innerText;
    },
    handleTouchEnd (e) {
      e.stopPropagation();
      clearTimeout(this.t);
      this.activeColumn = '';
      var inputChar = e.target.innerText;
      switch (inputChar) {
        case 'X':
          this.deleteChar();
          break;
        case '关闭':
          this.closeInputNumBox();
          break;
        case '确认':
          this.confirmInput();
          break;
        default:
          this.input(inputChar);
      }
      this.t = 0;
    },
    input (inputChar) {
      this.inputs.push(inputChar);
      var currentInput = this.inputs.join('');

      if (isNaN(currentInput + inputChar) || currentInput.length >= 6) {
        if (currentInput.length === 6) {
          this.confirmInput();
        }
        return false;
      }
    },
    // 删除最近一个字符
    deleteChar () {
      this.inputs.splice(-1);
    },
    // 关闭输入框
    closeInputNumBox () {
      this.open = false;
      this.$emit('close');
    },
    // 确认输入
    confirmInput () {
      if (this.inputs.length <= 0) {
        return false;
      }
      this.open = false;
      setTimeout(() => {
        this.$emit('finish-input', this.inputs.join(''));
        this.inputs = [];
      }, 500);
    }
  }
};
</script>