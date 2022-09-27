# Basic UI

> **Warning**
> This library is very WIP, and should not yet be used in production.

A collection of basic but polished components for Vue 3.

[See the docs](https://basic-ui.sigveh.no/)

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

## Development

To run the documentation site, run this command

```
npm run docs:dev
```
