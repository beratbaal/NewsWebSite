import { createContext, useState } from "react";

const SelectedNewsContext = createContext({
    title:"",
    imageToUrl:"",
    content:"",
    
    selectNews:(selectedNews)=>{},
});

 export function SelectedNewsContextProvider(props){

        function selectNews(title,imageToUrl,content){
            setSelectedNews({
                title:title,
                imageToUrl:imageToUrl,
                content:content,
            })
        }

        const [selectedNews, setSelectedNews]=useState({
            title:"",
            imageToUrl:"",
            content:"",
            
        });

        const context = {
            title:selectedNews.title,
            imageToUrl:selectedNews.imageToUrl,
            content:selectedNews.content,
            selectNews:selectNews,
        };
        return <SelectedNewsContext.Provider value={context}>
            {props.children}
        </SelectedNewsContext.Provider>
 }

 export default SelectedNewsContext