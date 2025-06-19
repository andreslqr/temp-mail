
export const getDomains = async () => {
    const response = await fetch('https://api.mail.tm/domains', {
        method: 'GET'
    })

    // ..
}