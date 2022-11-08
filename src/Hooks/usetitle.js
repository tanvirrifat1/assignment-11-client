import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = ` ${title} -Fast-Food`;
    }, [title])
}

export default useTitle;

