<script>
import { computed } from 'vue';
import { useWebsiteStore } from '@store/website';
import { useRoute } from 'vue-router';

export default {
  name: 'HeaderComponent',
  setup() {
    const store = useWebsiteStore();
    const route = useRoute();
    const activeRoute = computed(() => store.websiteOptions?.activeRoute || route.name);

    const isRouteActive = (routeName) => activeRoute.value === routeName.name;
    const iconClass = (option) => {
      return `icon-${option.icon}${isRouteActive(option.route) ? '' : '-t'}`;
    };

    return {
      isRouteActive,
      headerOptions: store.headerOptions,
      iconClass
    };
  }
};
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li v-for="option in headerOptions" :key="option.route" class="header__item">
          <router-link :to="option.route" class="header__link" active-class="is-active">
            <i :class="iconClass(option)"></i>
            <div class="header__text">
              {{ option.text }}
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: $header-width;
  position: absolute;
  top: 0;
  left: 0;
  padding: $header-padding;

  &__list {
    list-style: none;
    @include flex-center(row);
    gap: $gap-size;
    margin: 0;
    padding: 0;
  }

  &__content {
    @include flex-center(column);
  }

  &__item {
    flex: 1 1 auto;
    text-align: center;

    i {
      @include icon-style($icon-m);
    }
  }

  &__text {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &__link {
    @include flex-center(column);
    text-decoration: none;
    color: $nav-color;
    width: 100%;

    &:hover {
      .header__text {
        opacity: 1;
      }
    }
  }
}
</style>
