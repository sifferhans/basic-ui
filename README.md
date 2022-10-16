# Basic UI

> **Warning**  
> This library is very WIP, and should be used with caution.

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
