<template>
  <div>
    <h1>UserInfoPage</h1>
    <h4>{{ user.firstName }}</h4>
    <h4>{{ user.lastName }}</h4>
  </div>
</template>

<script>
export default {
  name: 'UserInfoPage',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      user: {
        firstName: '',
        lastName: '',
      }
    }
  },
  mounted() {
    this.fetchUserInfo()
  },
  methods: {
    fetchUserInfo: async function () {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/users/${this.id}`)
        if(res.status === 200){
          const userInfo = await res.json()
          this.user = userInfo
        }
      } catch (error) {
        
      }
    }
  }
}
</script>

<style></style>
