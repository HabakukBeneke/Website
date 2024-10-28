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
            <span class="header__text">
              {{ option.text }}
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: $header-width;
  padding: $header-padding;

  &__nav {
    max-width: 415px;
  }

  &__list {
    list-style: none;
    @include flex-center(row, left);
    gap: $gap-size;
    margin: 0;
    padding: 0;
  }

  &__content {
    @include flex-center(column);
  }

  &__item {
    flex: 1;
    text-align: center;

    i {
      @include icon-style($icon-m);
    }
  }

  &__text {
    opacity: 0;
    transition: opacity 0.3s;
    font-weight: 500;
  }

  &__link {
    @include flex-center(column);
    text-decoration: none;
    color: $primary-color;
    width: 100%;

    &:hover {
      .header__text {
        opacity: 1;
      }
    }
  }
}
</style>
