import { a as openBlock, b as createElementBlock, f as renderSlot, m as createCommentVNode, e as createBaseVNode, x as mergeProps, n as normalizeClass, R as createTextVNode, t as toDisplayString, q as resolveComponent, j as createBlock, k as withCtx, l as createVNode } from "./vendor.50b6fd3b.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var Input_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => '.b-input {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  /* Required */\n  /* Sizes */\n}\n.b-input__element {\n  padding-inline: var(--b-input-padding-inline);\n  padding-block: var(--b-input-padding-block);\n  border-radius: var(--b-input-border-radius, 4px);\n  border: 1px solid var(--b-input-border-color, #000);\n  font: inherit;\n}\n.b-input--required .b-input__label:after {\n  content: "*";\n  color: var(--b-color-negative, #af2929);\n  margin-left: 0.25rem;\n}\n.b-input--size-default {\n  --b-input-padding-block: 0.75rem;\n  --b-input-padding-inline: 1rem;\n}')();
const _sfc_main$1 = {
  __name: "Input",
  props: {
    label: String,
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["default"].includes(value);
      }
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = {
  key: 0,
  class: "b-input__label"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["b-input", [`b-input--size-${$props.size}`, { "b-input--required": $props.required }]])
  }, [
    $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createTextVNode(toDisplayString($props.label), 1)
      ])
    ])) : createCommentVNode("v-if", true),
    createBaseVNode("input", mergeProps({ class: "b-input__element" }, _ctx.$attrs), null, 16)
  ], 2);
}
_sfc_main$1.__file = "src/components/Input/Input.vue";
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/sigve/Development/misc/basic-ui/src/components/Input/Input.vue"]]);
var block0 = (Comp) => {
  Comp.doc = '<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-hidden="true">#</a></h1>\n<p>Used for user input and forms.</p>\n';
};
const _sfc_main = {
  __name: "Input.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Input };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Input",
    layout: { type: "grid", width: "100%" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["Input"], { label: "Default Input" })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "No label" }, {
        default: withCtx(() => [
          createVNode($setup["Input"], { placeholder: "No label" })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Required" }, {
        default: withCtx(() => [
          createVNode($setup["Input"], {
            label: "Required input",
            required: true
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
_sfc_main.__file = "src/components/Input/Input.story.vue";
var Input_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/sigve/Development/misc/basic-ui/src/components/Input/Input.story.vue"]]);
export { Input_story as default };
