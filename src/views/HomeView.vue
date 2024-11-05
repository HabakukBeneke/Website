<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero__container">
      <h1 class="hero__title">
        Hola, mi nombre es <span class="hero__title--colored">Enrique Quero</span> <br />Web
        Developer.
      </h1>
      <ul class="hero__button-list align-left">
        <li class="hero__button"><a href="/portfolio">Descubre mis proyectos</a></li>
        <li class="hero__button"><a href="/about">¿Quien soy?</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  min-height: 75vh;
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 2rem;
  }

  &__title {
    text-align: left;
    margin-bottom: 2rem;
    font-size: 4.6rem;
    font-weight: 700;

    &--colored {
      color: $primary-color;
      font-weight: 700;
    }

    @media screen and (max-width: 1024px) {
      font-size: 3rem;
    }
  }

  &__button-list {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  &__button {
    margin: 0 0.2rem;
    a {
      text-decoration: none;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.8rem 1.6rem;
      color: $primary-color;
      border: 2px solid;
      border-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%) 1;
      transition: all 0.4s ease-out;
      &:hover {
        background: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
        color: white;
      }

      @media screen and (min-width: 425px) {
        font-size: 1.6rem;
      }

      @media screen and (min-width: 768px) {
        font-size: 2.4rem;
      }
    }
  }
}
</style>
