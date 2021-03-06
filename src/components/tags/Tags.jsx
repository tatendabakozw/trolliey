import React from "react";
import { XIcon } from '@heroicons/react/outline'
const Tags = (props) => {

    const [tags, setTags] = React.useState([]);
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <div className="mt-4 mb-2">
            <div className={`${props.className} tags-input border rounded-sm flex flex-row flex-wrap`}>
                <ul className="flex flex-row items-center flex-wrap w-full pl-1 bg-gray-100">
                    {
                        tags.length < 1 ? (<p className="text-sm text-gray-400 p-1 w-full">Write a feature below and press enter, e.g custom painting</p>) : (
                            <>
                                {tags.map((tag, index) => (
                                    <li key={index} className="border-blue-200 bg-blue-100 dark:border-blue-800 dark:bg-blue-800 dark:text-blue-200 text-sm text-blue-900 border flex px-1 flex-row items-center rounded-sm m-1">
                                        <span>{tag}</span>
                                        <i
                                            className="material-icons"
                                            onClick={() => removeTags(index)}
                                        >
                                            <XIcon width={12} height={12} className="cursor-pointer ml-1" />
                                        </i>
                                    </li>
                                ))}
                            </>
                        )
                    }
                </ul>

            </div>
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add more"
                variant="filled"
                className="outline-none dark:bg-gray-700 p-2 rounded text-sm flex-1 w-full border border-gray-300 my-2"
            />
        </div>
    );
};
export default Tags;