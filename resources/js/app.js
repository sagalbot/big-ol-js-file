import { createApp, h } from 'vue';
import { App, plugin } from '@inertiajs/inertia-vue3';

const el = document.getElementById('app');

const app = createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => require(`./Pages/${name}`).default,
  }),
});

app.use(plugin).mount(el);
