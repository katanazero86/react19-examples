"use server";

export async function addToCart(prevState: null | string, formData: FormData) {
    console.log('addToCart', prevState);
    const itemID = formData.get('itemID');
    if (itemID === "1") {
        return "Added to cart";
    } else {
        // 3초 지연.
        await new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
        return "Couldn't add to cart: the item is sold out.";
    }
}

export async function submitForm(data: FormData) {
    console.log('submitData', data.get('name'));
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });
}

export async function submitForm2(data: { [p: string]: File | string }) {
    console.log('submitForm2', data.name);
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });
}

export async function deliverMessage(message: string) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
}

export async function deliverMessageError(message: string) {
    console.log('deliverMessageError', message);
    return await new Promise((_, rej) => setTimeout(rej, 1000));
}