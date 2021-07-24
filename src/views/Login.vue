<template>
  <div>
    <h3>ログイン</h3>
    <label for="email">Email:</label>
    <input id="email" type="email" v-model="email">
    <br><br>
    <label for="password">パスワード:</label>
    <input id="password" type="password" v-model="password">
    <br><br>
    <button @click="login">送信</button>
  
  </div>
</template>

<script>
import axios from '../axios-auth'

export default {
  data () {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login () {
        axios.post(
            '/accounts:signInWithPassword?key=AIzaSyC9xpsrA7B92sXf0ovzU7gSfk52YMIuL9U',
            {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            }
        ).then(Response => {
            console.log(Response)
        }).catch(error => {
            console.log(error.response.data.error)
        })
    this.email = ""
    this.password = ""
    }
  }
}
</script>


