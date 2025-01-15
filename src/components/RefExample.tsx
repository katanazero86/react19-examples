import {useRef} from "react";
import Button from "./Button/Button.tsx";

export default function RefExample() {

    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className='border border-dashed border-red-400 p-3 m-2'>
            <h2 className="font-bold text-xl">
                forwardRef 사용하지 않는 예제(개발자 도구, 콘솔창 확인)
            </h2>
            <Button ref={buttonRef}>
                나의 버튼
            </Button>
            <Button ref={(el: HTMLButtonElement) => console.log('나의 버튼2', el)}>
                나의 버튼2
            </Button>
        </div>
    )
}