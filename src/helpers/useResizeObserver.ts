import { useState, useEffect } from "react"

const useResizeObserver = (
  refElement: HTMLElement,
  callback: (target: { clientHeight: number; clientWidth: number }) => void
) => {
  const [observer, setObserver] = useState<ResizeObserver>(null)

  // set resize observer on component mount
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      callback(entries[0].target)
    })
    setObserver(resizeObserver)
  }, [])

  // observer wrapper when available
  useEffect(() => {
    if (refElement) {
      observer.observe(refElement)
    }
    return () => {
      if (refElement) {
        observer.unobserve(refElement)
      }
    }
  }, [refElement])
}
export default useResizeObserver
