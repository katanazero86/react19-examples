import {useFormStatus} from "react-dom";
import {submitForm, submitForm2} from "../actions.ts";
import {ErrorBoundary} from "react-error-boundary";

interface MyButtonProps {
    children: React.ReactNode;
}

const MyButton = ({children}: MyButtonProps) => {
    const {pending, data, method, action} = useFormStatus();

    console.log('action', action);

    return (
        <>
            <button className="border border-indigo-500 rounded p-2" type="submit" disabled={pending}
                    formAction={submitForm}>
                {children}
            </button>
            {method !== null && (<p>method: {method}</p>)}
            {data !== null && (<p>data: {data.get('name') as string}</p>)}
        </>
    )
}


const Form = () => {
    return (
        <>
            {/*<form action={submitForm}>*/}
            <form>
                <input type='hidden' name='name' value="test"/>
                <MyButton>제출</MyButton>
            </form>
        </>
    )
};

const MyButton2 = ({children}: MyButtonProps) => {

    // 작동하지 않는다.
    const {pending, data, method, action} = useFormStatus();

    console.log('action', action);

    return (
        <>
            <button className="border border-indigo-500 rounded p-2" type="submit" disabled={pending}>
                {children}
            </button>
            {method !== null && (<p>method: {method}</p>)}
            {data !== null && (<p>data: {data.get('name') as string}</p>)}
        </>
    )
}

const Form2 = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log('data', Object.fromEntries([...data.entries()]));
        const obj = Object.fromEntries([...data.entries()]);

        await submitForm2(obj);

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='hidden' name='name' value="test2"/>
                <MyButton2>제출2</MyButton2>
            </form>
        </>
    )
};

export default function UseFormStatusExample() {

    function search() {
        throw new Error("search error");
    }

    return (
        <div className='border border-red-500 border-dashed p-3 m-2'>
            <h2 className="font-bold text-xl">
                useFormStatus 예제
            </h2>
            <Form/>
            <Form2/>
            <ErrorBoundary
                fallback={<p>폼 제출 중에 오류가 발생했습니다.</p>}
            >
                <form action={search}>
                    <input className="border border-gray-300 rounded p-2 outline-none" name="query" />
                    <button className="border border-red-500 rounded p-2" type="submit">Search</button>
                </form>
            </ErrorBoundary>
        </div>
    )
}