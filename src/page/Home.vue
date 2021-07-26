<template>
  <div class="photo">
    <div class="cover" :style="{ backgroundImage: 'url(' + background + ')' }">
    </div>
    <div class="action">
      <button class="button is-danger">下载</button>
    </div>
    <input placeholder="phone" />
  </div>
</template>

<script>
import photo from '../asset/1.jpg';

export default {
  name: 'Home',
  data() {
    return {
      photo: photo,
      background: photo,
    };
  },
};
</script>

<style scoped>
.photo {
  max-height: 100vh;
  overflow: hidden;
  width: 100%;
}

.photo .cover {
  background-size: cover;
  background-position: center center;
  height: 100vh;
}

.photo .action {
  position: absolute;
  top: 68vh;
  z-index: 8;
  padding: 0 10%;
}
</style>
