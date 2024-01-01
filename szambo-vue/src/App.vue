<template>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {
  background-color: var(--background);
}

.main {
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin-inline: auto;
  background-color: var(--white);
}

:root {
  --background: #f5f5f5;
  --white: #ffffff;
  --yellow: #F6BA05;
  --red: #ff0000;
  --black: #121212;
  --blue: #000F32;
  --grey: #d9d9e34d;
  --shadow: rgb(0, 0, 0, 0.1);
}

@media screen and (max-width: 1024px) {
  .main {
    height: 100%;
  }
}
</style>
