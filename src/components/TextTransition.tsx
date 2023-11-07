"use client"
import {useEffect, useRef, useState} from "react";
import {useToggle} from "@/components/Providers/ToggleProvider";

type Props = {
    prefix: string;
    text1: string;
    text2: string;
    className?: string;
}

export default function TextTransition({prefix, text1, text2, className}: Props) {
    const text1Ref = useRef<HTMLSpanElement>(null);
    const text2Ref = useRef<HTMLSpanElement>(null);

    const [rightMargin, setRightMargin] = useState(0);

    const {toggle, show} = useToggle();

    useEffect(() => {
        if (text1Ref.current) {
            const width = Math.floor(text1Ref.current.getBoundingClientRect().width);
            setRightMargin(Math.max(width, rightMargin));
        }
    }, []);

    useEffect(() => {
        if (text2Ref.current) {
            const width = Math.floor(text2Ref.current.getBoundingClientRect().width);
            setRightMargin(Math.max(width, rightMargin));
        }
    }, []);


    return (
        <div className={`relative ` + className}>
            {prefix}

            <span
                ref={text1Ref}
                className={`relative transition-opacity duration-1000 ease-in-out ${toggle ? 'opacity-0' : 'opacity-100'}`}
            >{!show ? text1 : text2}</span>
        </div>
    );

};
