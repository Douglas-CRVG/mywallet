const signUp = [
    {
        name: "Nome",
        type: "text",
        prop: "name"
    },
    {
        name: "E-mail",
        type: "email",
        prop: "email"
    },
    {
        name: "Senha",
        type: "password",
        prop: "password"
    },
    {
        name: "Confirme a senha",
        type: "password",
        prop: "confirm"
    }
];

const signIn = [
    {
        name: "E-mail",
        type: "email",
        prop: "email"
    },
    {
        name: "Senha",
        type: "password",
        prop: "password"
    }
];

const saveRecord = [
    {
        name: "Valor",
        type: "number",
        prop: "value"
    },
    {
        name: "Descrição",
        type: "text",
        prop: "description"
    }
]

export {
    signUp,
    signIn,
    saveRecord
}