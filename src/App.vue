<template>
<div id="app">
  <div class="pure-menu pure-menu-horizontal">
    <span class="pure-menu-heading">PMS 1st Ward</span>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link to="/" class="pure-menu-link">Home</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/directory" class="pure-menu-link">Directory</router-link>
      </li>
    </ul>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <a href="https://github.com/sbwoodberry/cp5">Github Code</a>
  </div>
</div>
</template>

<style>

body, html {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #024059;
  height: 100%;
}

.footer {
  padding-top: 0.3em;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #F2836B;
  color: #024059;
  font-size: 15pt;
  text-align: center;
}

.pure-menu {
  /* To limit the menu width to the content of the menu: */
  /* display: inline-block; */
  /* Or set the width explicitly: */
  text-align: left;
  background: #000;
}
.pure-menu-heading {
  color: #fff;
  font-size: 1.2em;
  padding: 20px 20px;
  background-color: #8C281F;
}

.pure-menu-link {
  color: #fff;
  padding: 10px 20px;
  font-weight: 800;
}

.pure-menu-link:hover {
  background: #333;
}

.pure-menu-link.router-link-exact-active {
  background: #F2836B;
  color: #024059;
}

/* Modals */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h1 {
  margin-bottom: 30px;
  font-size: 1.5em;
}

.modal-body {
  margin: 0;
}

.modal-body input {
  margin-bottom: 20px;
  height: 30px;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.modal-default-button {
  float: right;
}

/*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
