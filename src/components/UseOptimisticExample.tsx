import {useOptimistic, useState} from "react";
import {deliverMessage, deliverMessageError} from "../actions.ts";

export default function UseOptimisticExample() {
    const [data, setData] = useState<string[]>([]);
    const [optimisticState, addOptimistic] = useOptimistic(data, (currentState, optimisticValue: string) => {
        return [...currentState, optimisticValue]
    });

    async function formAction(formData: FormData) {
        const msg = formData.get("message") as string;
        addOptimistic(msg);
        const result = await deliverMessage(msg);
        setData(prevState => [...prevState, result]);
    }

    const [data2, setData2] = useState<string[]>(['hello', 'world']);
    const [optimisticState2, addOptimistic2] = useOptimistic(data2, (currentState, optimisticValue: string) => {
        return [...currentState, optimisticValue]
    });

    async function fromAction2(formData: FormData) {
        const msg = formData.get("message") as string;
        addOptimistic2(msg);
        try {
            const result = await deliverMessageError(msg);
            setData2(prevState => [...prevState, result]);
        } catch(e) {
            // setData2(prevState => [...prevState, 'test']); // 이렇게 하면, 에러가 났어도 반영이 된다.
            console.error(e);
        }
    }

    return (
        <div className='border border-red-500 border-dashed p-3 m-2'>
            <h2 className="font-bold text-xl">
                useOptimistic 예제
            </h2>
            {optimisticState.map((message, index) => (
                <div key={index}>
                    {message}
                </div>
            ))}
            <form action={formAction}>
                <input type="text" name="message" placeholder="Hello!"/>
                <button type="submit">Send</button>
            </form>

            <div className="h-0.5 bg-red-500 my-1"/>

            {optimisticState2.map((message, index) => (
                <div key={index}>
                    {message}
                </div>
            ))}
            <form action={fromAction2}>
                <input type="text" name="message" placeholder="Hello2!"/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}