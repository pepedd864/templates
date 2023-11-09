<template>
  <div id="auth-layout">
    <div class="container">
      <router-view class="auth-form" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#auth-layout .container {
  width: 350px;
  margin-left: auto;
  margin-right: auto;
}

#auth-layout .container .auth-form {
  padding: 20px;
  border-radius: 10px;
}
</style>
