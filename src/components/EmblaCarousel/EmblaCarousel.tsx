'use client';
import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from '@/components/EmblaCarousel/EmblaCarousselArrowButtons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/react-hook-form/form';
import { useForm } from 'react-hook-form';

type EmblaCarouselType = {
    title: string;
    slides: { question: string; answers: string[] }[];
    options?: EmblaOptionsType;
};

export default function EmblaCarousel({ slides, options, title }: EmblaCarouselType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const form = useForm<any>({});

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map(({ question, answers }) => (
                        <div className="embla__slide" key={question}>
                            <Card>
                                <CardHeader className="space-y-1">
                                    <CardTitle className="text-2xl">{title}</CardTitle>
                                    <CardDescription>{question}</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <Form {...form}>
                                        <form
                                            onSubmit={form.handleSubmit((e) => {
                                                console.log(e);
                                            })}
                                            className="w-2/3 space-y-6"
                                        >
                                            <FormField
                                                control={form.control}
                                                name="type"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel>Notify me about...</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className="flex flex-col space-y-1"
                                                            >
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="all" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        All new messages
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="mentions" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        Direct messages and mentions
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="none" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        Nothing
                                                                    </FormLabel>
                                                                </FormItem>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button type="submit">Submit</Button>
                                        </form>
                                    </Form>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Create account</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center justify-center">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    );
}
