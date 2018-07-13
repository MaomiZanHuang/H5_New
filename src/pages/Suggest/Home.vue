<template>
<div>
    推荐热门业务：
    <ul>
        <li v-for="app in apps">
            <img :src="app.icon">
            {{app.name}}
        </li>
    </ul>
    </div>
</template>
<script>
import $ from 'axios';
export default {
    data() {
        return {
            apps: []
        }
    },
    mounted() {
        $.get('http://localhost:3000')
            .then(r => {
                this.apps = r.data;
            })
            .catch(err => {
                console.log(err);
            })
    }
}
</script>
<style scoped>
li {
    list-style: none;

    background: #aaa;
}
li>img {
    width: 200px;
    height: 200px;
}
</style>