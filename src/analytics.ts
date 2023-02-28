function getAnalytics (): object {
    let counter = 0

    const listener = () => counter++

    document.addEventListener('click', (event: Event) => {
        listener()
    })

    return {
        getClicks(): void {
            return  console.log(`Your clicks: ${counter.toString()}`)
        }
    }
}
 getAnalytics()

console.log('hello from analytics')