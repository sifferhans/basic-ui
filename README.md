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

- Button
- Input
- Textarea
- Select
- Checkbox
- Form
- Flex
- Grid

## Development

To run the documentation site, run this command

```
npm run docs:dev
```
