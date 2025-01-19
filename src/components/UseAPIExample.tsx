import {Suspense, use} from "react";
import {ErrorBoundary, FallbackProps} from "react-error-boundary";

const fetchRandomUser = async () => {
    console.log('fetchRandomUser..');
    const res = await fetch('https://randomuser.me/api/')
        .catch((e) => {
            console.error(e);
            return Promise.reject(e);
        });
    if (res.ok) return res.json()
        .catch((e) => {
            console.error(e);
            return Promise.reject(e);
        });
    return Promise.reject('failed to fetch');
};

function FallbackRender({error, resetErrorBoundary}: FallbackProps) {
    console.log('FallbackRender', error);
    return (
        <p onClick={resetErrorBoundary}>⚠️Something went wrong</p>
    )
}

interface ChildProps {
    randomUserPromise: Promise<{
        info: {
            page: number;
            results: number;
            seed: string;
            version: string;
        },
        results: {
            cell: string;
            email: string;
            gender: string;
        }[]
    }>;
}

function Child({randomUserPromise}: ChildProps) {
    // use Hook은 반드시 컴포넌트나 다른 Hook 내부에서만 호출되어야 합니다.
    // use는 데이터가 resolve 후에 컴포넌트를 다시 렌더링
    // 서버 컴포넌트에서 Promise를 생성하고 이를 클라이언트 컴포넌트로 전달하는 것이 권장
    const randomUser = use(randomUserPromise);
    // const randomUser = use(fetchRandomUser()); // 무한 로딩..! Promise 상태가 변경되어 그걸 던질때마다 재렌더링이 일어나면서 fetchRandom() 함수를 또 실행하니 계속 무한으로 반복이 일어남.
    console.log(randomUser);

    return (
        <div className='border border-red-500 border-dashed p-3 m-2'>
            <h2 className="font-bold text-xl">
                use 훅을 사용한 fetch 예제
            </h2>
            <div>
                <p>
                    {randomUser.results[0].email}
                </p>
                <p>
                    {randomUser.results[0].gender}
                </p>
            </div>
        </div>
    )
}

export default function UseAPIExample() {
    const promise = fetchRandomUser();
    return (
        <ErrorBoundary fallbackRender={FallbackRender}>
            <Suspense fallback={<h2>Loading..</h2>}>
                <Child randomUserPromise={promise}/>
            </Suspense>
        </ErrorBoundary>
    )
}