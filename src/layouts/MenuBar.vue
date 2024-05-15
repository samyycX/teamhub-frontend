<template>
    <div id="menubar" aria-orientation="horizontal">
        <MenuBar :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon"></span>
                        <span class="ml-2">{{  item.label }}</span>
                    </a>
                </router-link>
            </template>
        </MenuBar>
    </div>
</template>

<script setup>
import MenuBar from 'primevue/menubar'

import { ref } from 'vue'

const items = ref([
    {
        "label": "Home",
        "route": "/",
        "icon": 'pi pi-home'
    },
    {
        "label": "Hello",
        "route": "/hello"
    }
])
</script>