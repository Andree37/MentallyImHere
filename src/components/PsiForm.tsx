"use client";
import React, {useCallback, useState} from "react";
import {ChakraProvider, Spinner, useToast} from "@chakra-ui/react";
import 'react-international-phone/style.css';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/react-hook-form/form";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {PhoneInput, usePhoneValidation} from "react-international-phone";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const userFormSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Nome deve ter pelo menos 2 caractéres.',
        })
        .max(30, {
            message: 'Nome não pode ter mais do que 30 caractéres.',
        }),
    age: z.number().min(8, {message: 'Idade mínima é 8 anos.'}).max(100, {message: 'Idade máxima é 100 anos.'}),
    specialization: z.string().refine((m) => m.length > 0, {message: 'Pro favor insira a sua especialização.'}),
    phone: z.string().refine((m) => {
        const validPhone = usePhoneValidation(m)
        return validPhone.isValid
    }, {message: 'Número de telemóvel inválido.'}).optional(),
    email: z.string().email({message: 'Email inválido.'}),
    location: z.string().refine((m) => m.length > 0, {message: 'Pro favor insira a sua localização.'}),
    experienceYears: z.number().min(0, {message: 'Anos de experiência mínimo é 0.'}).max(50, {message: 'Anos de experiência máximo é 50.'}),
    consultationType: z.string().refine((m) => m.length > 0, {message: 'Pro favor insira o tipo de consulta.'}),
    availability: z.string().optional(),
    cost: z.number().optional(),
});

type UserFormValues = z.infer<typeof userFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<UserFormValues> = {
    name: "",
    email: "",
    phone: "",
    specialization: "",
    location: "",
    experienceYears: 0,
    consultationType: "Online",
    availability: "",
    cost: 5,
};

const consultationTypes = ['Presencial', 'Online', 'Ambos']

export default function PsiForm() {
    const toast = useToast()
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useForm<UserFormValues>({
        resolver: zodResolver(userFormSchema),
        defaultValues,
    });

    const onSubmit = useCallback(async (userData: UserFormValues) => {
        setLoading(true);
        const res = await fetch('/api/psicologist', {
            method: 'POST',
            body: JSON.stringify({
                ...userData
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })

        if (!res.ok) {
            // handle error
            toast({
                title: 'Algo correu mal...',
                description: "Por favor tente novamente.",
                status: 'error',
                duration: 3000,
                isClosable: false,
            })
            return;
        }
        toast({
            title: 'Sucesso!',
            description: "Entraremos em contacto consigo o mais cedo possível.",
            status: 'success',
            duration: 5000,
            isClosable: false,
        })

        setSent(true);
        setLoading(false);
    }, [form])

    const onErrors = useCallback((e: any) => {
        console.log(e)
    }, [])
    return (
        <ChakraProvider>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onErrors)}
                      className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12 space-y-4">
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Nome</FormLabel>
                                <FormControl>
                                    <Input autoComplete='name' className="dark:border-gray-500"
                                           placeholder="Nome próprio" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="age"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Idade</FormLabel>
                                <FormControl>
                                    <Input type='number' className="dark:border-gray-500" placeholder="Idade" {...field}
                                           onChange={(e) => field.onChange(+e.target.value)}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Email</FormLabel>
                                <FormControl>
                                    <Input autoComplete='email' className="dark:border-gray-500"
                                           placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="phone"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Telemóvel</FormLabel>
                                <FormControl>
                                    <PhoneInput
                                        disabled={sent}
                                        defaultCountry="pt"
                                        inputProps={{inputMode: 'tel', autoComplete: 'tel', id: 'phone'}}
                                        inputClassName="p-2 peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                                        value={field.value}
                                        onChange={(phone) => field.onChange(phone)}

                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="specialization"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">A sua especialização</FormLabel>
                                <FormControl>
                                    <Textarea disabled={sent} name="message" id="message"
                                              placeholder="A sua especialização"
                                              value={field.value} onChange={field.onChange}
                                              className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></Textarea>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="location"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Localização</FormLabel>
                                <FormControl>
                                    <Input className="dark:border-gray-500"
                                           placeholder="Localização" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="experienceYears"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Anos de experiência</FormLabel>
                                <FormControl>
                                    <Input className="dark:border-gray-500"
                                           placeholder="Anos de experiência" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="consultationType"
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel className="">Tipo de consultas</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl className="">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="">
                                        {consultationTypes.map((value) => (
                                            <SelectItem className='bg-gray-100 cursor-pointer'
                                                        key={value}
                                                        value={value}>
                                                {value}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="cost"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Custo da sua consulta (em euros)</FormLabel>
                                <FormControl>
                                    <Input type='number' className="dark:border-gray-500"
                                           placeholder="Custo de consulta" {...field}
                                           onChange={(e) => field.onChange(+e.target.value)}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="availability"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">A sua disponibilidade</FormLabel>
                                <FormControl>
                                    <Textarea disabled={sent} name="message" id="message"
                                              placeholder="A sua disponibilidade"
                                              value={field.value} onChange={field.onChange}
                                              className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></Textarea>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Separator/>
                    <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">Nós respeitamos a sua privacidade e
                        não
                        utilizaremos as suas informações pessoais para outros fins além do necessário para a
                        prestação
                        dos nossos serviços.</p>

                    {!sent && <Button
                        type="submit"
                        className="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                            <span
                                className="relative text-base font-semibold text-white dark:text-gray-900">{loading ?
                                <Spinner/> : 'Enviar'}</span>
                    </Button>}
                </form>
            </Form>
        </ChakraProvider>
    )
}
