export async function deliverMessage(message) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return message
}