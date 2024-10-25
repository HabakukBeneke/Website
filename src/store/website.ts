import type { HeaderOption } from '@interfaces/HeaderOption';
import type { WebsiteOptions } from '@interfaces/WebsiteOptions';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';

export const useWebsiteStore = defineStore('website', () => {
  const headerOptions: Ref<HeaderOption[]> = ref([
    { text: 'Home', route: '/', icon: 'house' },
    { text: 'Blog', route: '/blog', icon: 'blog' },
    { text: 'About me', route: '/about', icon: 'user' },
    { text: 'Portfolio', route: '/portfolio', icon: 'computer' },
    { text: 'Contact', route: '/contact', icon: 'blog' }
  ]);

  const websiteOptions: Ref<WebsiteOptions> = ref({
    activeRoute: '/'
  });

  return { headerOptions, websiteOptions };
});
