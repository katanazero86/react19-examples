import {useActionState} from "react";
import {addToCart} from "../actions.ts";

interface FormProps {
    itemID: string;
    itemTitle: string;
}

const Form = ({itemID, itemTitle}: FormProps) => {
    const [message, formAction, isPending] = useActionState(addToCart, null);
    return (
        <>
            <form action={formAction}>
                <h2>{itemTitle}</h2>
                <input type="hidden" name="itemID" value={itemID}/>
                <button type="submit" className="border rounded border-indigo-500 p-2">Add to Cart</button>
                {isPending ? "Loading..." : message}
            </form>
            {isPending ? "Loading..." : ''}
        </>
    );
}

export default function UseActionStateExample() {

    return (
        <div className='border border-red-500 border-dashed p-3 m-2'>
            <h2 className="font-bold text-xl">
                useActionState 예제
            </h2>
            <Form itemID="1" itemTitle="JavaScript: The Definitive Guide"/>
            <Form itemID="2" itemTitle="JavaScript: The Good Parts"/>
        </div>
    )
}