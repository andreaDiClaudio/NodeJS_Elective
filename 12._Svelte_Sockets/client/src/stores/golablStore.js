import { readable, writable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080");
export const myUsername = writable();

export const colorsList = writable([]);