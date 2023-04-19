"use client";
import React, {useCallback, useState} from "react";
import {ChakraProvider, Spinner, useToast} from "@chakra-ui/react";
import {useRouter} from "next/navigation";

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const initialuser = {
    email: '',
    name: '',
    motivation: '',
    age: '',
}

export default function InfoForm() {
    const toast = useToast()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(initialuser)
    const handleSubmit = useCallback(async () => {
        if (userData.email === '' || userData.name === '' || userData.motivation === '' || userData.age === '' || !validateEmail(userData.email)) {
            await toast({
                title: 'Preencha todos os campos.',
                description: 'Por favor preencha todos os campos e verifique se o email está correto.',
                status: 'error',
                duration: 3000,
                isClosable: false,
            })
            return;
        }
        setLoading(true);
        const res = await fetch('/api/client', {
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
            await toast({
                title: 'Algo correu mal...',
                description: "Por favor tente novamente.",
                status: 'error',
                duration: 3000,
                isClosable: false,
            })
        } else {
            await toast({
                title: 'Informações guardadas.',
                description: "Entraremos em contacto consigo o mais cedo possível.",
                status: 'success',
                duration: 5000,
                isClosable: false,
            })
        }
        setLoading(false);
        setUserData(initialuser);
        router.replace(window.location.pathname);
    }, [userData])
    return (
        <ChakraProvider>
            <div className="relative">
                <div
                    className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                    <div
                        className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                    <div className="relative">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Precisamos de alguma
                            informação</h2>
                        <div className="mt-8 mb-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-gray-600 dark:text-gray-300">O seu nome
                                    <span
                                        className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                <input type="text" name="name" id="name" autoComplete="name" placeholder="Nome"
                                       value={userData.name} onChange={(e) => {
                                    setUserData({...userData, name: e.target.value})
                                }}
                                       className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                                <span
                                    className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Insira o seu nome</span>
                            </div>
                            <div>
                                <label htmlFor="age" className="mb-2 block text-gray-600 dark:text-gray-300">A sua idade
                                    <span
                                        className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                <input type="number" name="age" id="age" autoComplete="age" placeholder="Idade"
                                       value={userData.age} onChange={(e) => {
                                    setUserData({...userData, age: e.target.value})
                                }}
                                       className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                                <span
                                    className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Insira a sua idade em números</span>
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="mb-2 block text-gray-600 dark:text-gray-300">Email <span
                                    className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                <input required type="email" name="email" id="email" autoComplete="email"
                                       placeholder="Email" value={userData.email} onChange={(e) => {
                                    setUserData({...userData, email: e.target.value})
                                }}
                                       className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                                <span
                                    className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Insira um email válido</span>
                            </div>
                            <div>
                                <label htmlFor="message"
                                       className="mb-2 block text-gray-600 dark:text-gray-300">Motivação <span
                                    className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                <textarea name="message" id="message" placeholder="Motivação para a consulta"
                                          value={userData.motivation} onChange={(e) => {
                                    setUserData({...userData, motivation: e.target.value})
                                }}
                                          className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>

                                <span
                                    className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Motivação para a consulta</span>
                            </div>
                        </div>

                        <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">Nós respeitamos a sua privacidade e
                            não
                            utilizaremos as suas informações pessoais para outros fins além do necessário para a
                            prestação
                            dos nossos serviços.</p>

                        <button
                            onClick={handleSubmit}
                            className="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                            <span
                                className="relative text-base font-semibold text-white dark:text-gray-900">{loading ?
                                <Spinner/> : 'Enviar'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )
}