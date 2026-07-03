/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_BOOKING_ID?: string
  readonly VITE_FORMSPREE_CONTACT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
