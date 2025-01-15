import {preload, preinit, preloadModule, preinitModule} from "react-dom";

export default function PreloadingResourcesExample() {

    // 스타일 시트를 사전 로딩
    // 사전 로딩은 잘 동작하나, 스타일링이 적용되지 않는다..?
    preload('/css/index2.css', {as: "style"});

    // reset, low, medium, high
    preinit('/css/index3.css', {as: "style", precedence: "medium"});

    // 자바스크립트 사전 로딩
    // 사전 로딩만 진행하고, 실행은 하지 않는다.
    preload('/js/test.js', {as: 'script'});

    preinit('/js/test2.js', {as: 'script'});

    // ESM 모듈 사전 로딩
    // 사전 로딩만 진행하고, 실행은 하지 않는다.
    preloadModule('/js/module.mjs', {as: "script"}); // ESM 을 불러오므로, as 는 script 여야 한다.
    // printGreeting();

    const handleClick = async () => {
        preloadModule('/js/module.mjs', {as: "script"});
        // ESM 모듈을 로딩하고, 실행한다.
        preinitModule('/js/module2.mjs', {as: "script"});

        // 동적으로 모듈 로드
        // public 폴더는 정적 자원을 제공하기 때문에 import 로 접근이 불가능
        // const module = await import('/js/module.mjs'); // error
        // 해결방법1: mjs 파일을 src 폴더로 옮겨 번들링 대상이 되도록 한다.
        // 해결방법2: 현재 모듈의 URL 경로 가져오기
        // module.printGreeting();

        const moduleUrl = new URL('/js/module2.mjs', import.meta.url).toString();
        console.log(moduleUrl);
        const module = await import(moduleUrl);
        module.printGreeting();

    };


    return (
        <div>
            <h2 className="my-black">
                PreloadingResources
            </h2>
            <p className="my-black2">
                my-black2
            </p>
            <button className="p-2 border border-gray-200 rounded" onClick={handleClick}>print</button>
        </div>
    )
}