"use client"
import {useEffect, useRef, useState} from "react";

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

    const [toggle, setToggle] = useState(false);
    const [shownText, setShownText] = useState(text1);

    useEffect(() => {
        const changeID = setInterval(() => {
            setShownText((t) => t === text1 ? text2 : text1);
        }, 5500);

        return () => {
            clearInterval(changeID)
        };
    }, []);

    useEffect(() => {
        if (toggle) {
            const tID = setTimeout(() => {
                setToggle(false);
            }, 1500);
            return () => clearInterval(tID);
        } else {
            const tID = setTimeout(() => {
                setToggle(true);
            }, 4000);
            return () => clearInterval(tID);
        }
    }, [toggle]);

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
            >{shownText}</span>
        </div>
    );

};
