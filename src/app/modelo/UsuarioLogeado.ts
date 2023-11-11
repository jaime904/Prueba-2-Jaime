export interface UsuarioLogeado {   
    id: number;
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    gender: "female" | "male",
    image: String,
    token: String,
}