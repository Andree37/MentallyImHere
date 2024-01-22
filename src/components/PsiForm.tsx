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
import { Textarea } from '@/components/ui/textarea';
import { PhoneInput, usePhoneValidation } from 'react-international-phone';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const municipes = [
    'Abrantes',
    'Aguiar da Beira',
    'Alandroal',
    'Albergaria-a-velha',
    'Albufeira',
    'Alcanena',
    'Alcobaça',
    'Alcochete',
    'Alcoutim',
    'Alcácer do Sal',
    'Alenquer',
    'Alfândega da Fé',
    'Alijó Viseu',
    'Alijó Vila Real', //Change this on the future to have the districts as well, this form isn't scalable this way
    'Aljezur',
    'Aljustrel',
    'Almada',
    'Almeida',
    'Almeirim',
    'Almodôvar',
    'Alpiarça',
    'Alter do Chão',
    'Alvaiázere',
    'Alvito',
    'Amadora',
    'Amarante',
    'Amares',
    'Anadia',
    'Angra do Heroísmo',
    'Ansião',
    'Arcos de Valdevez',
    'Arganil',
    'Arouca',
    'Arraiolos',
    'Arronches',
    'Arruda Dos Vinhos',
    'Aveiro',
    'Avis',
    'Azambuja',
    'Baião',
    'Barcelos',
    'Barrancos',
    'Barreiro',
    'Batalha',
    'Beja',
    'Belmonte',
    'Benavente',
    'Bombarral',
    'Borba',
    'Boticas',
    'Boticas',
    'Braga',
    'Bragança',
    'Cabeceiras de Basto',
    'Cadaval',
    'Caldas da Rainha',
    'Calheta',
    'Calheta de São Jorge',
    'Caminha',
    'Campo Maior',
    'Cantanhede',
    'Carrazeda de Ansiães',
    'Cartaxo',
    'Cascais',
    'Castanheira de Pêra',
    'Castelo Branco',
    'Castelo de Paiva',
    'Castelo de Vide',
    'Castro Marim',
    'Castro Verde',
    'Celorico da Beira',
    'Celorico de Basto',
    'Chamusca',
    'Chaves',
    'Chaves',
    'Coimbra',
    'Condeixa-a-Nova',
    'Constância',
    'Coruche',
    'Corvo',
    'Covilhã',
    'Crato',
    'Cuba',
    'Câmara de Lobos',
    'Elvas',
    'Entroncamento',
    'Espinho',
    'Esposende',
    'Estarreja',
    'Estremoz',
    'Fafe',
    'Faro',
    'Felgueiras',
    'Ferreira do Alentejo',
    'Ferreira do Zêzere',
    'Figueira da Foz',
    'Figueira de Castelo Rodrigo',
    'Figueiró Dos Vinhos',
    'Fornos de Algodres',
    'Freixo de Espada à Cinta',
    'Fronteira',
    'Funchal',
    'Fundão',
    'Gavião',
    'Golegã',
    'Gondomar',
    'Gouveia',
    'Grândola',
    'Guarda',
    'Guimarães',
    'Góis',
    'Horta',
    'Idanha-a-nova',
    'Lagoa',
    'Lagoa (Açores)',
    'Lagos',
    'Lajes Das Flores',
    'Lajes do Pico',
    'Leiria',
    'Lisboa',
    'Loulé',
    'Loures',
    'Lourinhã',
    'Lousada',
    'Lousã',
    'Macedo de Cavaleiros',
    'Machico',
    'Madalena',
    'Mafra',
    'Maia',
    'Manteigas',
    'Marco de Canaveses',
    'Marinha Grande',
    'Marvão',
    'Matosinhos',
    'Mação',
    'Mealhada',
    'Melgaço',
    'Mesão Frio',
    'Mesão Frio',
    'Mira',
    'Miranda do Corvo',
    'Miranda do Douro',
    'Mirandela',
    'Mogadouro',
    'Moita',
    'Monchique',
    'Mondim de Basto',
    'Mondim de Basto',
    'Monforte',
    'Montalegre',
    'Montalegre',
    'Montemor-o-Novo',
    'Montemor-o-Velho',
    'Montijo',
    'Monção',
    'Mora',
    'Moura',
    'Mourão',
    'Murtosa',
    'Murça',
    'Murça',
    'Mértola',
    'Mêda',
    'Nazaré',
    'Nisa',
    'Nordeste',
    'Odemira',
    'Odivelas',
    'Oeiras',
    'Oleiros',
    'Olhão',
    'Oliveira de Azeméis',
    'Oliveira do Bairro',
    'Oliveira do Hospital',
    'Ourique',
    'Ourém',
    'Ovar',
    'Palmela',
    'Pampilhosa da Serra',
    'Paredes',
    'Paredes de Coura',
    'Paços de Ferreira',
    'Pedrógão Grande',
    'Penacova',
    'Penafiel',
    'Penamacor',
    'Penela',
    'Peniche',
    'Peso da Régua',
    'Peso da Régua',
    'Pinhel',
    'Pombal',
    'Ponta Delgada',
    'Ponta do Sol',
    'Ponte da Barca',
    'Ponte de Lima',
    'Ponte de Sor',
    'Portalegre',
    'Portel',
    'Portimão',
    'Porto',
    'Porto Moniz',
    'Porto Santo',
    'Porto de Mós',
    'Povoação',
    'Praia da Vitória',
    'Proença-a-nova',
    'Póvoa de Lanhoso',
    'Póvoa de Varzim',
    'Redondo',
    'Reguengos de Monsaraz',
    'Ribeira Brava',
    'Ribeira Grande',
    'Ribeira de Pena',
    'Ribeira de Pena',
    'Rio Maior',
    'Sabrosa',
    'Sabrosa',
    'Sabugal',
    'Salvaterra de Magos',
    'Santa Cruz',
    'Santa Cruz Das Flores',
    'Santa Cruz da Graciosa',
    'Santa Maria da Feira',
    'Santa Marta de Penaguião',
    'Santa Marta de Penaguião',
    'Santana',
    'Santarém',
    'Santiago do Cacém',
    'Santo Tirso',
    'Sardoal',
    'Seia',
    'Seixal',
    'Serpa',
    'Sertã',
    'Sesimbra',
    'Setúbal',
    'Sever do Vouga',
    'Silves',
    'Sines',
    'Sintra',
    'Sobral de Monte Agraço',
    'Soure',
    'Sousel',
    'São Brás de Alportel',
    'São João da Madeira',
    'São Roque do Pico',
    'São Vicente',
    'Tavira',
    'Terras de Bouro',
    'Tomar',
    'Torre de Moncorvo',
    'Torres Novas',
    'Torres Vedras',
    'Trancoso',
    'Trofa',
    'Tábua',
    'Vagos',
    'Vale de Cambra',
    'Valença',
    'Valongo',
    'Valpaços',
    'Valpaços',
    'Velas',
    'Vendas Novas',
    'Viana do Alentejo',
    'Viana do Castelo',
    'Vidigueira',
    'Vieira do Minho',
    'Vila Flor',
    'Vila Franca de Xira',
    'Vila Franca do Campo',
    'Vila Nova da Barquinha',
    'Vila Nova de Cerveira',
    'Vila Nova de Famalicão',
    'Vila Nova de Foz Côa',
    'Vila Nova de Gaia',
    'Vila Nova de Poiares',
    'Vila Pouca de Aguiar',
    'Vila Pouca de Aguiar',
    'Vila Real',
    'Vila Real',
    'Vila Real de Santo António',
    'Vila Velha de Ródão',
    'Vila Verde',
    'Vila Viçosa',
    'Vila de Rei',
    'Vila do Bispo',
    'Vila do Conde',
    'Vila do Porto',
    'Vimioso',
    'Vinhais',
    'Vizela',
    'Águeda',
    'Évora',
    'Ílhavo',
    'Óbidos',
];

const userFormSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Nome deve ter pelo menos 2 caractéres.',
        })
        .max(30, {
            message: 'Nome não pode ter mais do que 30 caractéres.',
        }),
    age: z.number().min(8, { message: 'Idade mínima é 8 anos.' }).max(100, { message: 'Idade máxima é 100 anos.' }),
    specialization: z.string().refine((m) => m.length > 0, {
        message: 'Pro favor insira a sua especialização.',
    }),
    phone: z
        .string()
        .refine(
            (m) => {
                const validPhone = usePhoneValidation(m);
                return validPhone.isValid;
            },
            { message: 'Número de telemóvel inválido.' },
        )
        .optional(),
    email: z.string().email({ message: 'Email inválido.' }),
    location: z
        .string()
        .refine((m) => m.length > 0, {
            message: 'Pro favor insira a sua localização.',
        })
        .optional(),
    experienceYears: z
        .number()
        .min(0, { message: 'Anos de experiência mínimo é 0.' })
        .max(50, { message: 'Anos de experiência máximo é 50.' }),
    consultationType: z.string().refine((m) => m.length > 0, {
        message: 'Por favor insira o tipo de consulta.',
    }),
    availability: z.string().optional(),
    cost: z.array(z.number()),
    opp: z.string().min(1, { message: 'Por favor introduza o número da sua cédula OPP' }),
    gender: z.string().refine((m) => m.length > 0, {
        message: 'Por favor insira o seu género.',
    }),
});

type UserFormValues = z.infer<typeof userFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<UserFormValues> = {
    name: '',
    email: '',
    phone: '',
    specialization: '',
    location: '',
    experienceYears: 0,
    consultationType: 'Online',
    availability: '',
    cost: [10, 30],
    opp: '',
    gender: 'male',
};

const consultationTypes = ['Presencial', 'Online', 'Ambos'];
const genderTypes = [
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
];

async function trelloPsychologistCard(data: UserFormValues) {
    return fetch('/api/trello/cards/psychologists', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

async function mongoPsychologist(data: UserFormValues) {
    return fetch('/api/psychologist', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

export default function PsiForm() {
    const toast = useToast();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useForm<UserFormValues>({
        resolver: zodResolver(userFormSchema),
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
        async (userData: UserFormValues) => {
            setLoading(true);

            const res = await mongoPsychologist({ ...userData });
            const resTrello = await trelloPsychologistCard({ ...userData });

            if (res.status !== 200 || resTrello.status !== 200) {
                onErrorToast('Não conseguimos processar os seus dados, tente novamente.');
                return;
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
        console.log(e);
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
                                <FormLabel className="dark:text-white">Nome e Apelido</FormLabel>
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
                        name="age"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Idade</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        className="dark:border-gray-500"
                                        placeholder="Idade"
                                        {...field}
                                        onChange={(e) => field.onChange(+e.target.value)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="">Género</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl className="">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="">
                                        {genderTypes.map(({ label, value }) => (
                                            <SelectItem
                                                className="bg-gray-100 cursor-pointer"
                                                key={value}
                                                value={value}
                                            >
                                                {label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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
                                        inputProps={{
                                            inputMode: 'tel',
                                            autoComplete: 'tel',
                                            id: 'phone',
                                        }}
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
                        name="specialization"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">
                                    A sua especialização
                                    <p className="font-light text-gray-500 mt-2 text-xs">
                                        Indique a sua formação académica, se fez ou está a fazer alguma
                                        especialização/formação adicional relacionada com a prática clínica.
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={sent}
                                        name="message"
                                        id="message"
                                        placeholder="A sua especialização"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                                    ></Textarea>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="experienceYears"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">Anos de experiência</FormLabel>
                                <FormControl>
                                    <Input
                                        className="dark:border-gray-500"
                                        placeholder="Anos de experiência"
                                        {...field}
                                        onChange={(e) => field.onChange(+e.target.value)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="consultationType"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="">Tipo de sessões</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl className="">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="">
                                        {consultationTypes.map((value) => (
                                            <SelectItem
                                                className="bg-gray-100 cursor-pointer"
                                                key={value}
                                                value={value}
                                            >
                                                {value}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">
                                    Localização
                                    <p className="font-light text-gray-500 mt-2 text-xs">
                                        Zonas preferenciais de atuação/ realização de sessões presenciais.
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className="">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="">
                                            {municipes.map((value) => (
                                                <SelectItem
                                                    className="bg-gray-100 cursor-pointer"
                                                    key={value}
                                                    value={value}
                                                >
                                                    {value}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="cost"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">
                                    Custo da sua consulta (em euros)
                                    <p className="font-light text-gray-500 mt-2 text-xs">
                                        Caso tenha flexibilidade no custo das suas sessões, coloque o intervalo de
                                        preços (mínimo e máximo que pratica)
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <>
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="temperature">Variedade de Preço</Label>
                                            <span className="w-24 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                                                {field.value[0]} - {field.value[1]} €
                                            </span>
                                        </div>
                                        <Slider
                                            max={100}
                                            defaultValue={field.value}
                                            step={5}
                                            minStepsBetweenThumbs={1}
                                            value={field.value}
                                            className="&_[role=slider]]:h-4 [&_[role=slider]]:w-4 bg-primary"
                                            onValueChange={(e) => field.onChange(e)}
                                        />
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">
                                    A sua disponibilidade
                                    <p className="font-light text-gray-500 mt-2 text-xs">
                                        Indique todas as possibilidades de dias da semana e horários em que teria
                                        disponibilidade para receber novos clientes. Indique também se a sua
                                        disponibilidade é imediata, caso não seja especifique a data a partir da qual
                                        poderá começar a seguir novos clientes.
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={sent}
                                        name="message"
                                        id="message"
                                        placeholder="A sua disponibilidade"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                                    ></Textarea>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={sent}
                        control={form.control}
                        name="opp"
                        render={({ field }) => (
                            <FormItem className="dark:text-white">
                                <FormLabel className="dark:text-white">
                                    Cédula OPP
                                    <p className="font-light text-gray-500 mt-2 text-xs">
                                        Indique o número da sua cédula profissional
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="dark:border-gray-500"
                                        placeholder="Número de Cédula"
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
                            className="relative ml-auto flex h-11 w-max items-center justify-center px-6 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight"
                        >
                            <span className="flex items-center justify-center text-base font-semibold text-white dark:text-gray-900">
                                {loading ? <Spinner /> : 'Enviar'}
                            </span>
                        </Button>
                    )}
                </form>
            </Form>
        </ChakraProvider>
    );
}
