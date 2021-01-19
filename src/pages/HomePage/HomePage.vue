<template>
  <div>
    <h1>HomePage</h1>
    <ul>
      <li
        v-for="item in users"
        :key="item._id">
        <p>{{ item.firstName + ' ' + item.lastName }}</p>
        <router-link :to="{ name: 'user-info', params: { id: item._id } }">
          Info
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers: async function () {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/users')
        if (res.status === 200) {
          const users = await res.json()
          this.users = users
        }
      } catch (error) {}
    }
  }
}
</script>

<style></style>
