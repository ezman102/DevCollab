<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-6">Styling and Utility Guide (by Claude-3.5-Sonnet)</h1>

    <!-- Typography Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">1. Typography</h2>

      <h3 class="text-xl font-semibold mb-2">1.1 Headings</h3>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>

      <h3 class="text-xl font-semibold mb-2 mt-4">1.2 Content</h3>
      <p class="c1">Content C1 (18px)</p>
      <p class="c2">Content C2 (16px)</p>
      <p class="c3">Content C3 (14px)</p>

      <h3 class="text-xl font-semibold mb-2 mt-4">1.3 Font Weights</h3>
      <p class="font-weight-lighter">Lighter weight</p>
      <p class="font-weight-light">Light weight</p>
      <p class="font-weight-regular">Regular weight</p>
      <p class="font-weight-medium">Medium weight</p>
      <p class="font-weight-semi-bold">Semi-bold weight</p>
      <p class="font-weight-bold">Bold weight</p>

      <!-- Color Palette Section -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-2 mt-4">1.4 Color Palette</h3>
        <div class="row">
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-primary-color color-white">Primary Color</div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-secondary-color color-white">Secondary Color</div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-accent-color color-white">Accent Color</div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-gray-1">Gray 1</div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-gray-2 color-white">Gray 2</div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-brown-1">Brown 1</div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-pink-red-1 color-white">Pink Red 1</div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 mb-2">
            <div class="p-4 bg-red-1 color-white">Red 1</div>
          </div>
        </div>
      </section>

      <h3 class="text-xl font-semibold mb-2 mt-4">1.5 Paragraphs and Links</h3>
      <p class="mb-2">
        This is a regular paragraph with some
        <a href="#" class="custom-link">custom styled link</a> within it.
      </p>
      <p class="light-text">This paragraph uses the light-text class.</p>
    </section>

    <!-- Responsive Design Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">2. Design</h2>
      <p>We have 2 CSS libraries, Bootstrap and Tailwind</p>
      <p>Choose 1 you like, or just CSS still OK</p>
      <h3 class="text-xl font-semibold mb-2">2.1 Responsive Grid</h3>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div class="bg-primary-color p-2 color-white">Col-12 SM-6 MD-4 LG-3</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div class="bg-secondary-color p-2 color-white">Col-12 SM-6 MD-4 LG-3</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div class="bg-accent-color p-2 color-white">Col-12 SM-6 MD-4 LG-3</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div class="bg-gray-1 p-2">Col-12 SM-6 MD-4 LG-3</div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mb-2 mt-4">2.2 Responsive Visibility</h3>
      <div class="hidden-xs bg-pink-red-1 p-2 mb-2 color-white">Hidden on extra small screens</div>
      <div class="hidden-sm bg-red-1 p-2 mb-2 color-white">Hidden on small screens</div>
      <div class="hidden-md bg-brown-1 p-2 mb-2">Hidden on medium screens</div>
      <div class="hidden-lg bg-gray-2 p-2 mb-2 color-white">Hidden on large screens</div>
      <div class="hidden-xl bg-primary-color p-2 mb-2 color-white">
        Hidden on extra large screens
      </div>
      <div class="hidden-xxl bg-secondary-color p-2 mb-2 color-white">
        Hidden on extra extra large screens
      </div>

      <h3 class="text-xl font-semibold mb-2 mt-4">2.3 Responsive Typography</h3>
      <p class="responsive-text">This text changes size based on screen width.</p>
    </section>

    <!-- Custom SCSS Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">3. Custom SCSS Usage</h2>
      <div class="custom-box">
        <p>This box uses custom SCSS defined in our project.</p>
      </div>
    </section>

    <!-- Tailwind and Bootstrap Components -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">4. Tailwind and Bootstrap Components</h2>

      <h3 class="text-xl font-semibold mb-2">4.1 Buttons</h3>
      <div class="space-x-2 mb-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tailwind Button
        </button>
        <button class="btn btn-primary">Bootstrap Primary</button>
        <button class="btn btn-secondary">Secondary Button</button>
      </div>

      <h3 class="text-xl font-semibold mb-2">4.2 Text Inputs</h3>
      <div class="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Tailwind Input"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input type="text" placeholder="Bootstrap Input" class="form-control" />
      </div>

      <h3 class="text-xl font-semibold mb-2">4.3 Table</h3>
      <div class="mb-4 overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-2 px-4 border-b">Name</th>
              <th class="py-2 px-4 border-b">Email</th>
              <th class="py-2 px-4 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">John Doe</td>
              <td class="py-2 px-4 border-b">john@example.com</td>
              <td class="py-2 px-4 border-b">Admin</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="py-2 px-4 border-b">Jane Smith</td>
              <td class="py-2 px-4 border-b">jane@example.com</td>
              <td class="py-2 px-4 border-b">User</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mb-2">4.4 Pop-up Dialogs</h3>
      <div class="flex justify-center space-x-4">
        <button
          @click="showTailwindModal = true"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Tailwind Modal
        </button>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bootstrapModal">
          Bootstrap Modal
        </button>
      </div>

      <!-- Tailwind Modal -->
      <div
        v-if="showTailwindModal"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      >
        <div class="bg-white p-5 rounded-lg shadow-xl w-96">
          <h3 class="text-lg font-semibold mb-4">Tailwind Modal</h3>
          <p class="mb-4">This is a custom modal using Tailwind CSS.</p>
          <button
            @click="showTailwindModal = false"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>

      <!-- Bootstrap Modal -->
      <div
        class="modal fade"
        id="bootstrapModal"
        tabindex="-1"
        aria-labelledby="bootstrapModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="bootstrapModalLabel">Bootstrap Modal</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">This is a Bootstrap modal dialog.</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lodash Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">5. Lodash Usage, make data easy.</h2>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p>Check the console for Lodash examples.</p>
      </div>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-4">6. Icon</h2>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p>
          <a href="https://pictogrammers.github.io/@mdi/font/1.1.34/">Click me to see resource</a>
        </p>

        <i class="mdi mdi-account"></i><i class="mdi mdi-chart-histogram"></i
        ><i class="mdi mdi-account-box"></i>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

// Tailwind modal state
const showTailwindModal = ref(false)

// Lodash examples
console.log('Lodash Examples:')

// Array operations
const numbers = [1, 2, 3, 4, 5]
console.log('Chunk:', _.chunk(numbers, 2))
console.log('Compact:', _.compact([0, 1, false, 2, '', 3]))

// Object operations
const object = { a: 1, b: '2', c: 3 }
console.log('Pick:', _.pick(object, ['a', 'c']))

// String operations
console.log('Capitalize:', _.capitalize('hello world'))

// Function operations
const greet = _.partial((greeting, name) => `${greeting}, ${name}!`, 'Hello')
console.log('Partial application:', greet('John'))

// Utility functions
console.log('Unique ID:', _.uniqueId('user_'))
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.custom-box {
  @apply bg-gray-100 p-4 rounded-lg;
  border: 1px solid $gray-2;
}

.custom-link {
  color: $accent-color;
  &:hover {
    text-decoration: underline;
  }
}

.responsive-text {
  font-size: 1rem;

  @include responsive(small) {
    font-size: 1.2rem;
  }

  @include responsive(medium) {
    font-size: 1.4rem;
  }

  @include responsive(large) {
    font-size: 1.6rem;
  }

  @include responsive(xlarge) {
    font-size: 1.8rem;
  }

  @include responsive(xxlarge) {
    font-size: 2rem;
  }
}

.bg-primary-color {
  background-color: $primary-color;
}
.bg-secondary-color {
  background-color: $secondary-color;
}
.bg-accent-color {
  background-color: $accent-color;
}
.bg-gray-1 {
  background-color: $gray-1;
}
.bg-gray-2 {
  background-color: $gray-2;
}
.bg-brown-1 {
  background-color: $brown-1;
}
.bg-pink-red-1 {
  background-color: $pink-red-1;
}
.bg-red-1 {
  background-color: $red-1;
}

.color-white {
  color: $vt-c-white;
}
</style>
