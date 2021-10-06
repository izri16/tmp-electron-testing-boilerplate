export let csl: any

export async function loadCardanoSerializationLib(): Promise<void> {
  if (!csl) {
    csl = (await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib'))
  }
}
