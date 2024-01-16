type message = {
    type: string,
    content: {
        name?: string,
        description?: string,
        price?: number,
        image?: string,
        url?: string
        
        text?: string
        isBot?: boolean
        buttons?: string[]
    }
}

export default message;