<template>
    <div class="main">
        <div class="nav">
            <ul>
                <li>
                    <router-link :to="{ name: 'Home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'About'}">About</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommomLayoutComponent',
};
</script>
