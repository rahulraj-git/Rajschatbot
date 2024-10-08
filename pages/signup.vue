<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="text-center">Sign Up</h2>
          <form @submit.prevent="handleSignUp">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" v-model="user.username" required />
            </div>
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" v-model="user.firstName" required />
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" v-model="user.lastName" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" v-model="user.email" required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="user.password" required />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input type="tel" class="form-control" id="phone" v-model="user.phone" required />
            </div>
            <button type="submit" class="btn btn-primary w-100">Sign Up</button>
          </form>
          <div v-if="message" class="alert alert-info mt-3">{{ message }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {
          id: 1,
          username: 'rahul123',
          firstName: 'rahul',
          lastName: 'raj',
          email: 'test@gmail.com',
          password: '1234',
          phone: '9988776622',
          userStatus: 0
        },
        message: ''
      };
    },
    methods: {
      async handleSignUp() {
        try {
          const response = await axios.post('https://petstore.swagger.io/v2/user', this.user, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          this.message = 'User created successfully!';
          console.log(response.data);
        } catch (error) {
          this.message = 'Error creating user.';
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>