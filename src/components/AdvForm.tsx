'use client';
import React, { useCallback, useState } from 'react';
import { ChakraProvider, Spinner, useToast } from '@chakra-ui/react';
import 'react-international-phone/style.css';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/react-hook-form/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { PhoneInput } from 'react-international-phone';

const zodObject = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Nome deve ter pelo menos 2 caractéres.',
        })
        .max(30, {
            message: 'Nome não pode ter mais do que 30 caractéres.',
        }),
    email: z
        .string({
            errorMap: () => {
                return { message: 'Email inválido.' };
            },
        })
        .email(),
    phone: z
        .string()
        .refine(
            (m) => {
                return m.length <= 15 && m.length >= 9;
            },
            { message: 'Número de telemóvel inválido.' },
        )
        .optional(),
    socialNetwork: z.string(),
    iban: z
        .string({
            invalid_type_error: 'IBAN inválido.',
        })
        .min(0, { message: 'IBAN inválido.' }),
});

type AdvFormValues = z.infer<typeof zodObject>;

// This can come from your database or API.
const defaultValues: Partial<AdvFormValues> = {
    name: '',
    email: '',
    phone: '',
    socialNetwork: '',
};

async function trelloAdvertiserCard(data: AdvFormValues & { id: string; link: string }) {
    return fetch('/api/trello/cards/advertisers', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

async function mongoAdvertiser(data: AdvFormValues) {
    return fetch('/api/advertisers', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

export default function AdvForm() {
    const toast = useToast();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useForm<AdvFormValues>({
        resolver: zodResolver(zodObject),
        defaultValues,
    });

    const onErrorToast = useCallback(
        (message: string) => {
            toast({
                title: 'Algo correu mal...',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: false,
            });
            setLoading(false);
        },
        [toast],
    );

    const onSubmit = useCallback(
        async (userData: AdvFormValues) => {
            setLoading(true);
            const document = await mongoAdvertiser(userData);
            if (document.ok) {
                const documentJSON = await document.json();
                const id = documentJSON.data.insertedId;
                const trello = await trelloAdvertiserCard({
                    ...userData,
                    id,
                    link: `${window.location.origin}?adv=${id}`,
                });
                if (!trello.ok) {
                    onErrorToast('Não foi possível criar o cartão no Trello.');
                }
            }

            toast({
                title: 'Sucesso!',
                description: 'Entraremos em contacto consigo o mais cedo possível.',
                status: 'success',
                duration: 5000,
                isClosable: false,
            });
            setLoading(false);
            setSent(true);
        },
        [onErrorToast, toast],
    );

    const onErrors = useCallback((e: any) => {
        console.error(e);
    }, []);
    return (
        <ChakraProvider>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit, onErrors)}
                    className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12 space-y-4"
                >
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Nome</FormLabel>
                                <FormControl>
                                    <Input
                                        autoComplete="name"
                                        className="dark:border-gray-500"
                                        placeholder="Nome próprio"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        autoComplete="email"
                                        className="dark:border-gray-500"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Telemóvel</FormLabel>
                                <FormControl>
                                    <PhoneInput
                                        disabled={sent}
                                        defaultCountry="pt"
                                        inputProps={{ inputMode: 'tel', autoComplete: 'tel', id: 'phone' }}
                                        inputClassName="p-2 peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                                        value={field.value}
                                        onChange={(phone) => field.onChange(phone)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="socialNetwork"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Rede social</FormLabel>
                                <FormControl>
                                    <Input
                                        autoComplete="socialNetwork"
                                        className="dark:border-gray-500"
                                        placeholder="@redesocial"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="iban"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">IBAN</FormLabel>
                                <FormControl>
                                    <Input
                                        autoComplete="IBAN"
                                        className="dark:border-gray-500"
                                        placeholder="PT50 ..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Separator />
                    <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">
                        Nós respeitamos a sua privacidade e não utilizaremos as suas informações pessoais para outros
                        fins além do necessário para a prestação dos nossos serviços.
                    </p>

                    {!sent && (
                        <Button
                            type="submit"
                            className="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight"
                        >
                            <span className="relative text-base font-semibold text-white dark:text-gray-900">
                                {loading ? <Spinner /> : 'Enviar'}
                            </span>
                        </Button>
                    )}
                </form>
            </Form>
        </ChakraProvider>
    );
}
