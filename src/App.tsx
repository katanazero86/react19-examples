import {useState} from "react";
import UseContextExample from "./components/UseContextExample.tsx";
import {MyContextProvider} from "./contexts/MyContext.tsx";
import RefExample from "./components/RefExample.tsx";
import UseAPIExample from "./components/UseAPIExample.tsx";
import UseActionStateExample from "./components/UseActionStateExample.tsx";
import UseFormStatusExample from "./components/UseFormStatusExample.tsx";
import UseOptimisticExample from "./components/UseOptimisticExample.tsx";
import DocumentMetadataAndStyleSheetsAndAsyncScriptsExample
    from "./components/DocumentMetadataAndStyleSheetsAndAsyncScriptsExample.tsx";
import PreloadingResourcesExample from "./components/PreloadingResourcesExample.tsx";

function App() {

    const [isShow, setIsShow] = useState(true);
    const handleClick = () => {
        setIsShow(!isShow);
    };

    return (
        <>
            <h1 className="text-3xl font-bold underline text-indigo-600">
                Hello world!
            </h1>
            {/*<MyContextProvider>*/}
            {/*    <UseContextExample/>*/}
            {/*</MyContextProvider>*/}
            {/*<RefExample/>*/}
            {/*<UseAPIExample/>*/}
            {/*<UseActionStateExample/>*/}
            {/*<UseFormStatusExample/>*/}
            {/*<UseOptimisticExample/>*/}
            {/*<DocumentMetadataAndStyleSheetsAndAsyncScriptsExample title="hello world!" authorContent="홍길동"*/}
            {/*                                                      keywordsContent="HTML, CSS, JS"/>*/}
            <div>
                <button className="border-red-500 border rounded p-2" onClick={handleClick}>숨기기/보이기</button>
                {isShow && <PreloadingResourcesExample/>}
            </div>
        </>
    )
}

export default App
