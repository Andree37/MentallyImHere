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
import {PhoneInput, usePhoneValidation} from "react-international-phone";
import {Textarea} from "@/components/ui/textarea";
import {InsertOneResult} from "mongodb";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const contactFromOptions = ['Email', 'Chamada', 'WhatsApp']

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
    contactFrom: z.string().optional(),
    email: z.string().email({message: 'Email inválido.'}).optional(),
    phone: z.string().optional(),
    motivation: z.string().refine((m) => m.length > 0, {message: 'Pro favor insira a sua motivação.'}),
}).refine((schema) => {
    if (schema.contactFrom !== 'Email') {
        if (!schema.phone) return false
        const validPhone = usePhoneValidation(schema.phone)
        return validPhone.isValid
    } else {
        if (!schema.email) return false
    }
    return true
}, {message: 'Verifique os seus contactos.'});

type UserFormValues = z.infer<typeof userFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<UserFormValues> = {
    name: "",
    contactFrom: "Chamada",
    email: "",
    phone: "",
    motivation: "",
};

async function postUserCard({name, age, email, phone, motivation, contactFrom}: UserFormValues, id: string) {
    const response = await fetch('/api/trello/cards', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            age,
            email,
            phone,
            motivation,
            id,
            contactFrom,
        }),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}

async function postUser({name, age, email, phone, motivation, contactFrom}: UserFormValues): Promise<{
    document: InsertOneResult
} | undefined> {
    const response = await fetch('/api/client', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            age,
            email,
            phone,
            motivation,
            contactFrom
        }),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}


export default function InfoForm() {
    const toast = useToast()
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useForm<UserFormValues>({
        resolver: zodResolver(userFormSchema),
        defaultValues,
    });

    const errorToast = useCallback(() => {
        toast({
            title: 'Algo correu mal...',
            description: "Por favor tente novamente.",
            status: 'error',
            duration: 3000,
            isClosable: false,
        })
        setLoading(false)
    }, [loading])


    const onSubmit = useCallback(async (userData: UserFormValues) => {
        setLoading(true);

        const res = await postUser(userData)
        const trelloRes = await postUserCard(userData, res?.document.insertedId.toString() || "Unknown")

        if (!res || !trelloRes) {
            errorToast()
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
                        control={form.control}
                        name="contactFrom"
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel className="">Como deseja ser contactado?</FormLabel>
                                <Select onValueChange={
                                    (value) => {
                                        field.onChange(value)
                                        if (value === 'Chamada' || value === "WhatsApp") form.setValue('email', undefined)
                                        if (value === 'Email') form.setValue('phone', '')
                                    }
                                } defaultValue={field.value}>
                                    <FormControl className="">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="">
                                        {contactFromOptions.map((value) => (
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
                    {form.watch("contactFrom") === "Email" ? <FormField
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
                        : <FormField
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
                    }
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="motivation"
                        render={({field}) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Motivação da Consulta</FormLabel>
                                <FormControl>
                                    <Textarea disabled={sent} name="message" id="message"
                                              placeholder="Motivação para a consulta"
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
