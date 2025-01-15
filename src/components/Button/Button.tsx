import {useEffect} from 'react';
import type {ReactNode, Ref} from "react";

interface ButtonProps {
    ref: Ref<HTMLButtonElement>;
    children: ReactNode;
}

// 자식 컴포넌트에 ref 속성명을 그대로 사용이 가능하다.
export default function Button({ref, children}: ButtonProps) {

    const handleClick = () => {
        console.log(ref);
    };

    useEffect(() => {
        console.log('useEffect..', ref);
    }, []);

    return (
        <button
            ref={ref}
            className='px-2 py-3 border bg-indigo-500 rounded hover:bg-indigo-700 text-white font-bold text-sm'
            onClick={handleClick}
        >{children}</button>
    )
}