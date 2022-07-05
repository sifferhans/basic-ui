import { a as openBlock, j as createBlock, k as withCtx, e as createBaseVNode, f as renderSlot, x as mergeProps, aa as resolveDynamicComponent, R as createTextVNode, t as toDisplayString, q as resolveComponent, l as createVNode } from "./vendor.50b6fd3b.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var Button_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => '.b-button {\n  box-sizing: border-box;\n  border: none;\n  position: relative;\n  font: inherit;\n  padding-inline: var(--b-button-padding-inline);\n  padding-block: var(--b-button-padding-block);\n  border-radius: var(--b-button-border-radius, 4px);\n  display: flex;\n  align-items: center;\n  gap: var(--b-button-gap, 0.5rem);\n  /* Sizes */\n  /* States */\n  /* Themes */\n}\n.b-button:not(:disabled) {\n  cursor: pointer;\n}\n.b-button:where(:disabled) {\n  cursor: not-allowed;\n}\n.b-button__content {\n  transition: 150ms var(--b-easing-function, ease-out);\n}\n.b-button--size-default {\n  --b-button-padding-block: 0.75rem;\n  --b-button-padding-inline: 1rem;\n}\n.b-button--size-small {\n  --b-button-padding-block: 0.4rem;\n  --b-button-padding-inline: 0.6rem;\n}\n.b-button--state-loading {\n  cursor: wait;\n}\n.b-button--state-loading:after {\n  content: "";\n  height: 0.75rem;\n  aspect-ratio: 1;\n  border-radius: 20rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid transparent;\n  border-right-color: currentColor;\n  border-top-color: currentColor;\n  animation: spin 1s var(--b-easing-function, linear) infinite;\n}\n.b-button--state-loading .b-button__content {\n  opacity: 0;\n  transform: translateY(0.2rem);\n}\n.b-button--theme-default {\n  background-color: var(--b-color-default, #f0f0f0);\n  color: var(--b-color-default-contrast, #000000);\n}\n.b-button--theme-default:not(:disabled):hover {\n  background-color: var(--b-color-default--hover, #eaeaea);\n}\n.b-button--theme-default:not(:disabled):active {\n  background-color: var(--b-color-default--active, #e0e0e0);\n}\n.b-button--theme-primary {\n  background-color: var(--b-color-primary, #000000);\n  color: var(--b-color-primary-contrast, #ffffff);\n}\n.b-button--theme-primary:not(:disabled):hover {\n  background-color: var(--b-color-default--hover, #202020);\n}\n.b-button--theme-primary:not(:disabled):active {\n  background-color: var(--b-color-default--active, #000000);\n}\n.b-button--theme-secondary {\n  background-color: transparent;\n  color: var(--b-color-secondary-contrast, #000000);\n  border: 1px solid var(--b-color-secondary, #000000);\n}\n.b-button--theme-secondary:not(:disabled):hover {\n  background-color: transparent;\n  border-color: var(--b-color-secondary--hover, #202020);\n}\n.b-button--theme-secondary:not(:disabled):active {\n  background-color: transparent;\n  border-color: var(--b-color-secondary--active, #000000);\n}\n.b-button--theme-tertiary {\n  background-color: var(--b-color-tertiary, transparent);\n  color: var(--b-color-tertiary-contrast, #000000);\n}\n.b-button--theme-tertiary:not(:disabled):hover {\n  background-color: var(--b-color-tertiary--hover, #f0f0f0);\n}\n.b-button--theme-tertiary:not(:disabled):active {\n  background-color: var(--b-color-tertiary--active, #e0e0e0);\n}\n.b-button--theme-positive {\n  background-color: var(--b-color-positive, #29af46);\n  color: var(--b-color-positive-contrast, #ffffff);\n}\n.b-button--theme-positive:not(:disabled):hover {\n  background-color: var(--b-color-positive--hover, #3dc45a);\n}\n.b-button--theme-positive:not(:disabled):active {\n  background-color: var(--b-color-positive--active, #179c34);\n}\n.b-button--theme-negative {\n  background-color: var(--b-color-positive, #af2929);\n  color: var(--b-color-positive-contrast, #ffffff);\n}\n.b-button--theme-negative:not(:disabled):hover {\n  background-color: var(--b-color-positive--hover, #c43d3d);\n}\n.b-button--theme-negative:not(:disabled):active {\n  background-color: var(--b-color-positive--active, #9c1717);\n}\n@keyframes spin {\nto {\n    transform: translate(-50%, -50%) rotate(360deg);\n}\n}')();
const _sfc_main$1 = {
  __name: "Button",
  props: {
    label: String,
    tag: {
      type: [String, Object],
      default: "button"
    },
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "small"].includes(value);
      }
    },
    theme: {
      type: String,
      default: "default",
      validator(value) {
        return [
          "default",
          "primary",
          "secondary",
          "tertiary",
          "positive",
          "negative"
        ].includes(value);
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { expose, emit }) {
    expose();
    const __returned__ = { emit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { class: "b-button__content" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps(_ctx.$attrs, {
    class: ["b-button", [
      `b-button--size-${$props.size} b-button--theme-${$props.theme}`,
      { "b-button--state-loading": $props.loading }
    ]],
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("click")),
    disabled: $props.loading || _ctx.$attrs.disabled
  }), {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "icon-left"),
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString($props.label), 1)
        ]),
        renderSlot(_ctx.$slots, "icon-right")
      ])
    ]),
    _: 3
  }, 16, ["class", "disabled"]);
}
_sfc_main$1.__file = "src/components/Button/Button.vue";
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/sigve/Development/misc/basic-ui/src/components/Button/Button.vue"]]);
var block0 = (Comp) => {
  Comp.doc = '<h1 id="button" tabindex="-1">Button <a class="header-anchor" href="#button" aria-hidden="true">#</a></h1>\n<p>Used for user interactions</p>\n';
};
const _sfc_main = {
  __name: "Button.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Button };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: "100%" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], { label: "Default button" })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Primary" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            label: "Primary button",
            theme: "primary"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Secondary" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            label: "Secondary button",
            theme: "secondary"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Tertiary" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            label: "Tertiary button",
            theme: "tertiary"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Positive" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            label: "Positive button",
            theme: "positive"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Negative" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            label: "Negative button",
            theme: "negative"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/Button/Button.story.vue";
var Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/sigve/Development/misc/basic-ui/src/components/Button/Button.story.vue"]]);
export { Button_story as default };
