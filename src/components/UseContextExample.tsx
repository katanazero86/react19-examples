import {use, useRef} from "react";
import {MyContext} from "../contexts/MyContext.tsx";
import type {MyContextType} from "../contexts/MyContext.tsx";

export default function UseContextExample() {

    const inputRef = useRef<HTMLInputElement>(null);
    const {name, setName} = use<MyContextType>(MyContext)!; // use 훅을 사용한 Context API

    const handleClick = () => {
        const inputValue = inputRef.current!.value;
        if (inputValue !== '') {
            setName(inputValue);
            inputRef.current!.value = '';
        }
    };

    return (
        <div className="border border-dashed border-red-400 p-3 m-2">
            <h2 className="font-bold text-xl">
                use 훅을 사용한 Context API 예제
            </h2>
            <p>
                my name: {name}
            </p>
            <div className="flex flex-col mt-2 gap-2">
                <input ref={inputRef} className='p-2 border border-indigo-500 rounded outline-none' type='text'/>
                <button
                    className='p-2 border border-indigo-500 rounded outline-none font-semibold hover:border-transparent hover:bg-indigo-500 hover:text-white'
                    type='button' onClick={handleClick}>
                    이름 반영
                </button>
            </div>
        </div>
    )
}