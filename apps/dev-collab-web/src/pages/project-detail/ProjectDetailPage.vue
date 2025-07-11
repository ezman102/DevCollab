<template>
  <div>
    <v-card title="Project Detail"></v-card>

    <v-card class="mt-4">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="text-subtitle-1 text-medium-emphasis">Name</div>

            <v-text-field density="compact" variant="outlined" v-model="form.name"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis">Description</div>

            <v-textarea
              density="compact"
              variant="outlined"
              rows="4"
              v-model="form.description"
            ></v-textarea>

            <div class="text-subtitle-1 text-medium-emphasis">Avatar</div>

            <v-file-input
              accept="image/png"
              label="Only PNG is accepted"
              prepend-icon="mdi-camera"
              v-model="avatarFile"
            ></v-file-input>

            <div class="flex justify-end">
              <v-btn color="primary" @click="submit()">Save</v-btn>
            </div>
          </v-col>
          <v-col cols="6" v-if="avatarPreview">
            <div class="text-subtitle-1 text-medium-emphasis">Avatar Preview</div>

            <div class="flex justify-center align-center h-full">
              <v-img :src="avatarPreview" max-width="50%" max-height="50%"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useForm } from './form.logic'

const { form, submit, avatarFile, avatarPreview } = useForm()
</script>
