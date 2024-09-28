import { useEffect, useCallback, RefObject } from "react";

const useClickOutside = <T extends HTMLElement>(
    ref: RefObject<T> | null,
    callback: () => void
): void => {
    const handleClick = useCallback(
        (event: MouseEvent) => {
            if (ref?.current && !ref?.current.contains(event.target as Node)) {
                event.stopPropagation();
                callback();
            }
        },
        [ref, callback]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => handleClick(event);
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [handleClick]);
};

export default useClickOutside;
