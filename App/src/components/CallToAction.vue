<template>
  <div class="presale">
    <button @click="navToPresale">Join the Presale</button>
  </div>
</template>
<script>
export default {
  methods: {
    navToPresale() {
      window.location.href = 'https://instagram.com/dolusound'
    }
  }
}
</script>
<style lang="scss" scoped>
.presale {
  $h-padding: 3.2em;
  $v-padding: 1.2em;
  $h-padding-hover: 3.25em;
  $v-padding-hover: 1.25em;

  button {
    -webkit-transition: $transition all ease-out;
    -o-transition: $transition all ease-out;
    transition: $transition all ease-out;
    text-decoration: none;
    text-align: center;
    border-radius: $border-radius;
    padding: $v-padding $h-padding;
    font-size: 20px;
    border: 2px solid $color-primary;
    background-color: $color-primary;
    color: $color-white;
    position: relative;
    opacity: 0.9;
    font-weight: 800;

    &::after {
      position: absolute;
      content: '';
      border-radius: 0.28em 0.28em 0px 0px;
      height: 0.35em;
      bottom: -1px;
      background: darken($color-primary, 15);
      left: $h-padding;
      right: $h-padding;
    }

    &:focus,
    &:active {
      outline: none;
    }

    &:hover {
      background-color: darken($color-primary, 5);
      transform: translate(0, -3px);
      padding: $v-padding-hover $h-padding-hover;
      opacity: 1;
    }
  }
}
</style>
