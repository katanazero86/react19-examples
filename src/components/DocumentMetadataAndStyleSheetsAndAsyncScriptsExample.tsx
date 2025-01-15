import {useEffect} from "react";

const AsyncScripts = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.id='my-script';
        script.src = "/js/index4.js";
        // script.defer = true; // 비동기로 로드, 동작 O
        document.body.appendChild(script);

        return () => {
            const existingScript = document.querySelector('#my-script');
            if (existingScript) existingScript.remove();
        };
    }, []);

    return (
        <>
            <script async src="/js/index.js"/>
            <script async src="/js/index.js"/>

            {/*동작하지 않음, 로딩 되지 않음*/}
            <script defer src="/js/index2.js"/>

            {/*동작하지 않음, 로딩 되지 않음*/}
            <script src="/js/index3.js"></script>
        </>
    )
}


interface DocumentMetadataProps {
    title: string;
    authorContent: string;
    keywordsContent: string;
}

export default function DocumentMetadataAndStyleSheetsAndAsyncScriptsExample({
                                                                                 authorContent,
                                                                                 keywordsContent,
                                                                                 title
                                                                             }: DocumentMetadataProps) {

    return (
        <>
            <title>{title}</title>
            <meta name="author" content={authorContent}/>
            <meta charSet="UTF-16"/>
            <meta name="keywords" content={keywordsContent}/>
            <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet"/>
            <link href="/css/index.css" rel="stylesheet"/>
            <AsyncScripts/>
            <div>
                <h2 className="container">index.css loaded</h2>
            </div>
        </>
    )
}