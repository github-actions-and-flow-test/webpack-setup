function getAnalytics (): object {
    let counter = 0

    const listener = (): number => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
        },

        getClicks() {
            return  console.log(`Your clicks: ${counter}`)
        }
    }
}
 getAnalytics()