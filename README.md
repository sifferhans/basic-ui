![Basic UI cover](https://repository-images.githubusercontent.com/510007369/befa6101-74d8-40cf-8b52-136837c901ab)

<div align="center"><strong>Basic UI</strong></div>
<div align="center">A collection of basic but polished components for Vue 3.</div>
<br/>
<div align="center"><a href="https://basic-ui.sigveh.no/">Documentation</a></div>

## Installation

```bash
npm install @sigveh/basic-ui
```

## Usage

To use the components, simply import them where needed.

```vue
<!-- myComponent.vue -->

<script setup lang="ts">
import { Button, Input, Form } from '@sigveh/basic-ui'
import '@sigveh/basic-ui/dist/style.css' // should be imported globally, in main.ts
</script>

<template>
  <Form>
    <Input label="Email" placeholder="john@doe.com" />
    <Button type="submit">Submit</Button>
  </Form>
</template>
```

## Currently included components

Here is a simple overview of all components currently included in the library.

- [Button](https://basic-ui.sigveh.no/guide/button.html)
- [Input](https://basic-ui.sigveh.no/guide/input.html)
- [Textarea](https://basic-ui.sigveh.no/guide/textarea.html)
- [Select](https://basic-ui.sigveh.no/guide/select.html)
- [Checkbox](https://basic-ui.sigveh.no/guide/checkbox.html)
- [Switch](https://basic-ui.sigveh.no/guide/switch.html)
- [Form](https://basic-ui.sigveh.no/guide/form.html)
- [Flex](https://basic-ui.sigveh.no/guide/flex.html)
- [Grid](https://basic-ui.sigveh.no/guide/grid.html)
- [Heading](https://basic-ui.sigveh.no/guide/heading.html)

## Development

To run the documentation site, run this command

```
npm run docs:dev
```

## Stats

![Alt](https://repobeats.axiom.co/api/embed/6af9052c6435b935382bf135a294f278bf6665a0.svg "Repobeats analytics image")
