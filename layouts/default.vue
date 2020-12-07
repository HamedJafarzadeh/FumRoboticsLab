<template>
  <div class="main-container">
    <!-- Header -->
    <header id="header">
      <h1><img id="logo" src="~/assets/fum-logo.png" height="30px"/></h1>
      <nav id="nav">
        <ul>
          <li><a href="#banner">Home</a></li>
          <li><a href="#about" class="scrolly">About</a></li>
          <li><a href="#projects" class="scrolly">Projects</a></li>
          <li><a href="#researchtopics" class="scrolly">Research topics</a></li>
          <li><a href="#publications" class="scrolly">Publications</a></li>
          <li><a href="#join" class="button primary scrolly">Join Us</a></li>
        </ul>
      </nav>
    </header>

    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
