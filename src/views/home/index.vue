<template>
  <div class="title" @click="handleSendCode">hello world</div>
</template>

<script>
import {loginRequest} from '@/api/home.js'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleSendCode(){
        const params = {
            phone:'13332276134'
        }
        loginRequest(params).then(res => {
            // console.log('res====>', res)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.title{
    color: #333;
}
</style>
