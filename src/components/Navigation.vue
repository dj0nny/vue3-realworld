<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" :to="{ name: 'Home' }">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: '' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: '' }">
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: '' }">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: '' }">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: '' }">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
