function getPlausible() {
  // @ts-ignore
  return (
    window.plausible ||
    function () {
      // @ts-ignore
      window.plausible = // @ts-ignore
      (window.plausible.q = window.plausible?.q || []).push(arguments)
    }
  )
}

export function sendEvent(name: string, props?: any) {
  if (process.env.ENABLE_ANALYTICS) getPlausible()(name, props)
}
