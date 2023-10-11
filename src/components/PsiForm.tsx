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
import Dropzone from "react-dropzone";

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
    opp: z
        .custom<FileList>()
        .transform((file) => file.length > 0 && file.item(0))
        .refine((file) => !file || (!!file && file.size <= 10 * 1024 * 1024), {
            message: "O PDF não deve exceder os 10MB.",
        })
        .refine((file) => !file || (!!file && file.type?.startsWith("pdf")), {
            message: "Apenas PDFs sao aceites.",
        }),
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
    opp: null,
};

const consultationTypes = ['Presencial', 'Online', 'Ambos']

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (reader.result === null) return reject('could not get the result')
            return resolve(reader.result.toString().split(',')[1])
        }
        reader.onerror = (error) => reject(error);
    });
};

async function trelloPsicologistCard(data: UserFormValues) {
    return fetch('/api/trello/cards/attachments', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
}

async function mongoPsicolgist(data: UserFormValues) {
    return fetch('/api/psicologist', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
}

export default function PsiForm() {
    const toast = useToast()
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useForm<UserFormValues>({
        resolver: zodResolver(userFormSchema),
        defaultValues,
    });

    const onErrorToast = useCallback((message: string) => {
        toast({
            title: 'Algo correu mal...',
            description: message,
            status: 'error',
            duration: 3000,
            isClosable: false,
        })
        setLoading(false);
    }, [])

    const onSubmit = useCallback(async (userData: UserFormValues) => {
        setLoading(true);
        if (form.getValues('opp')) {
            const base64 = await fileToBase64(form.getValues('opp') as File);
            const data = {
                fileData: base64,
                fileName: (form.getValues('opp') as File).name,
                fileType: (form.getValues('opp') as File).type,
            };

            const res = await mongoPsicolgist({...userData, ...data})
            const resTrello = await trelloPsicologistCard({...userData, ...data})

            if (res.status !== 200 || resTrello.status !== 200) {
                onErrorToast('Não conseguimos processar os seus dados, tente novamente.')
                return;
            }

            toast({
                title: 'Sucesso!',
                description: "Entraremos em contacto consigo o mais cedo possível.",
                status: 'success',
                duration: 5000,
                isClosable: false,
            })
            setLoading(false)
            setSent(true)
        } else {
            onErrorToast('Não conseguimos processar a sua Cédula OPP.')
            return;
        }
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
                                           placeholder="Anos de experiência" {...field}
                                           onChange={(e) => field.onChange(+e.target.value)}/>
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
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="opp"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="dark:text-white">Cédula OPP</FormLabel>
                                <FormControl>
                                    <Dropzone multiple={false} accept={{'pdf': ['application/pdf']}}
                                              onDrop={acceptedFiles => {
                                                  field.onChange(acceptedFiles[0])
                                              }}>
                                        {({getRootProps, getInputProps}) => (
                                            field.value ? <div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">Ficheiro
                                                        carregado: {field.value.name}</p>
                                                    <Button className="mt-2 bg-gray-200 hover:bg-gray-300 w-full"
                                                            onClick={() => field.onChange(null)}>Remover</Button>
                                                </div> :
                                                <div {...getRootProps()}
                                                     className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none cursor-pointer'>
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            vectorEffect="non-scaling-stroke"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                                        />
                                                    </svg>
                                                    <input {...getInputProps()} />
                                                </div>
                                        )}
                                    </Dropzone>
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
