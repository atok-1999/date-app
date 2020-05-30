<template>
  <div id="app">
    <header class="header">
      <div class="header__menu">
        <div class="header__menu__line" @click="naviOpen" :class="{'is-active': active}">
          <span :class="{'white': active}"></span>
          <span :class="{'white': active}"></span>
          <span :class="{'white': active}"></span>
        </div>
        <div>
          <span :class="{'white-color': active}">menu</span>
        </div>
      </div>
    </header>
    <transition name="right">
      <div class="back" v-show="active">
        <div class="ami">
          <div class="icon"><i class="fas fa-user-circle"></i></div>
          <div class="hitoshi">
              <span class="ai">こんにちは</span>
              <div class="au">ゲスト<span class="ai">さん</span></div>
          </div>
        </div>
        <div class="login">会員登録 / ログインする</div>
        <div class="back-2">
          <router-link to="/"><i class="fas fa-home"></i><span class="aa">Home</span></router-link>
          <router-link to="/about"><i class="fas fa-heart"></i><span class="aa">Favorite</span></router-link>
          <router-link to="#"><i class="fas fa-bookmark"></i><span class="aa">ChoicePhoto</span></router-link>
          <router-link to="#"><i class="fas fa-search"></i><span class="aa">Search</span></router-link>
        </div>
      </div>
    </transition>
    <div class="create-header">
      <h2>Dating Plan</h2>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: function(){
    return {
      active: false,
      navi: false
    };
  },
  methods: {
    naviOpen: function() {
      this.active = !this.active;
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  background: #fff;
  height: 60px;
  &__menu {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 35px 33.5px 0 0; 
    &__line {
      width: 36px;
      height: 30px;
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      cursor: pointer;
      span {
        width: 100%;
        height: 2px;
        background: #000;
        display: block;
        transition: .6s;
        position: absolute;
        &:first-child {
          top: 0;
        }
        &:nth-child(2) {
          top: 10px;
        }
        &:last-child {
          bottom: 0;
        }
      }
      &.is-active {
        span {
          transition: .6s;
          &:first-child {
            transform: rotate(45deg);
            top: 50%;
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            transform: rotate(-45deg);
            top: 50%;
          }
        }
      }
    }
  }
}

.right-enter-active, .right-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.right-enter, .right-leave-to {
  transform: translateX(100vw) translateX(0px);
}

.create-header {
  border-bottom: 1px solid #cecece;
  margin-bottom: 6px;
  margin-left: 30px;
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.menu-bar {
  width: 35px;
  height: 33.5px;

}

.long {
  width: 35px;
  color: #707070;
}

.short {
  width: 22px;
  color: #707070;
}

.back {
  background-color: #000000A8;
  height: 100vh;
  width: 85%;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 10px 0 10px 0;
  }
}

.white {
    background-color: white;
}

.white-color {
  color: white;
}

.aa {
  margin-left: 10px;
}

.back-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  a {
    display: block;
    margin: 10px;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    width: 90%;
  }
}

.login {
  background-color: white;
  color: black;
  border-radius: 5px;
  height: 40px;
  width: 64%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  font-size: 13px;
}

.icon {
  color: white;
  font-size: 38px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 64%;
  margin-bottom: 25px;
}

.au {
  font-size: 12px;
}

.ai {
  font-size: 10px;
}

.ami {
  display: flex;
  flex-direction: row;
  color: white;
  align-items: flex-start;
  padding-right: 95px;
}

.hitoshi {
  width: 100%;
  margin-left: 15px;
  margin-bottom: 35px;
}


</style>