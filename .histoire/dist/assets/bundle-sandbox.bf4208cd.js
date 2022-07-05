import { S as reactive, $ as parseQuery, r as ref, D as createApp, E as createPinia, w as watch, c as computed, p as onMounted, a0 as h, _ as _sfc_main, a1 as _sfc_main$1, a2 as applyStateToVariant } from "./vendor.50b6fd3b.js";
import { m as mapFile, f as files, h as histoireConfig, i as isDark } from "./mapping.9783676b.js";
import { S as STATE_SYNC, P as PREVIEW_SETTINGS_SYNC, t as toRawDeep, a as SANDBOX_READY } from "./state.8d3f8572.js";
var sandbox = /* @__PURE__ */ (() => ".htw-range-input::-webkit-slider-thumb{height:.75rem;width:.75rem;-webkit-appearance:none;appearance:none;border-radius:9999px;border-width:1px;border-style:solid;border-color:#00000040;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.htw-dark .htw-range-input::-webkit-slider-thumb{border-color:#ffffff40;--tw-bg-opacity: 1;background-color:rgb(63 63 70 / var(--tw-bg-opacity))}.htw-range-input:hover::-webkit-slider-thumb{--tw-border-opacity: 1 !important;border-color:rgb(16 185 129 / var(--tw-border-opacity))!important;--tw-bg-opacity: 1 !important;background-color:rgb(16 185 129 / var(--tw-bg-opacity))!important}.htw-range-input::-moz-range-thumb{height:.75rem;width:.75rem;-moz-appearance:none;appearance:none;border-radius:9999px;border-width:1px;border-style:solid;border-color:#00000040;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.htw-dark .htw-range-input::-moz-range-thumb{border-color:#ffffff40;--tw-bg-opacity: 1;background-color:rgb(63 63 70 / var(--tw-bg-opacity))}.htw-range-input:hover::-moz-range-thumb{--tw-border-opacity: 1 !important;border-color:rgb(16 185 129 / var(--tw-border-opacity))!important;--tw-bg-opacity: 1 !important;background-color:rgb(16 185 129 / var(--tw-bg-opacity))!important}.v-popper{line-height:0}.htw-dark .v-popper--theme-dropdown .v-popper__inner{--tw-border-opacity: 1;border-color:rgb(31 31 33 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(63 63 70 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(244 244 245 / var(--tw-text-opacity))}.htw-dark .v-popper--theme-dropdown .v-popper__arrow-inner{--tw-border-opacity: 1;border-color:rgb(63 63 70 / var(--tw-border-opacity))}.htw-dark .v-popper--theme-dropdown .v-popper__arrow-outer{--tw-border-opacity: 1;border-color:rgb(31 31 33 / var(--tw-border-opacity))}.v-popper--theme-dropdown.v-popper__popper--show-from .v-popper__wrapper{transform:scale(.75)}.v-popper--theme-dropdown.v-popper__popper--show-to .v-popper__wrapper{transform:none;transition:transform .15s cubic-bezier(0,1,.5,1)}.v-popper__popper:focus-visible{outline:none}.htw-bind-col-size{grid-template-columns:repeat(auto-fill,minmax(var(--histoire-col-size),1fr))}html,\nbody {\n  background: transparent !important;\n}body {\n  margin: 0;\n}html {\n  font-size: .875rem;\n  font-family: 'Lato', sans-serif;\n}.htw-sandbox-hidden {\n  display: none;\n}\n")();
const receivedSettings = reactive({});
function applyPreviewSettings(settings) {
  Object.assign(receivedSettings, settings);
}
const query = parseQuery(window.location.search);
const file = ref(mapFile(files.find((f) => f.id === query.storyId)));
const app = createApp({
  name: "SandboxApp",
  setup() {
    const story = computed(() => file.value.story);
    const variant = computed(() => {
      var _a;
      return (_a = story.value) == null ? void 0 : _a.variants.find((v) => v.id === query.variantId);
    });
    let synced = false;
    let mounted = false;
    window.addEventListener("message", (event) => {
      var _a, _b;
      if (((_a = event.data) == null ? void 0 : _a.type) === STATE_SYNC) {
        if (!mounted)
          return;
        synced = true;
        applyStateToVariant(variant.value, event.data.state);
      } else if (((_b = event.data) == null ? void 0 : _b.type) === PREVIEW_SETTINGS_SYNC) {
        applyPreviewSettings(event.data.settings);
      }
    });
    watch(() => variant.value.state, (value) => {
      var _a;
      if (synced && mounted) {
        synced = false;
        return;
      }
      (_a = window.parent) == null ? void 0 : _a.postMessage({
        type: STATE_SYNC,
        state: toRawDeep(value)
      });
    }, {
      deep: true
    });
    onMounted(() => {
      mounted = true;
    });
    return {
      story,
      variant
    };
  },
  render() {
    return [
      h("div", { class: "htw-sandbox-hidden" }, [
        h(_sfc_main, {
          story: file.value.story
        })
      ]),
      this.story && this.variant ? h(_sfc_main$1, {
        story: this.story,
        variant: this.variant,
        onReady: () => {
          var _a;
          (_a = window.parent) == null ? void 0 : _a.postMessage({
            type: SANDBOX_READY
          });
        }
      }) : null
    ];
  }
});
app.use(createPinia());
app.mount("#app");
watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add(histoireConfig.sandboxDarkClass);
  } else {
    document.documentElement.classList.remove(histoireConfig.sandboxDarkClass);
  }
}, {
  immediate: true
});
