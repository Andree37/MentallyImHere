import TextTransition from '@/components/TextTransition';

export default function GenderText({ text, className }: { text: string; className?: string }) {
    const textParts = text.split('@');
    textParts.pop();

    return (
        <>
            {textParts.map((part, index) => {
                return (
                    <TextTransition
                        key={index}
                        className={`inline ` + className}
                        prefix={part}
                        text1={'o'}
                        text2={'a'}
                    />
                );
            })}
        </>
    );
}
