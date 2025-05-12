import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#408358", // Color principal para los inputs y selects
        },
        secondary: {
            main: "#299C52",
        },
        text: {
            primary: "#8C948D", // Color del texto de los labels
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#408358", // Cambia el color de fondo del panel desplegable
                    color: "#FFFFFF", // Cambia el color del texto dentro del panel
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: "#299C52", // Cambia el color de fondo del elemento seleccionado
                        color: "#FFFFFF", // Cambia el color del texto del elemento seleccionado
                    },
                    "&:hover": {
                        backgroundColor: "#299C52", // Cambia el color de fondo al pasar el mouse
                        color: "#FFFFFF", // Cambia el color del texto al pasar el mouse
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#8C948D", // Cambia el color del texto de los labels
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#408358", // Cambia el color del borde al enfocar
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#408358", // Cambia el color del borde al pasar el mouse
                    },
                },
                notchedOutline: {
                    borderColor: "#408358", // Cambia el color del borde por defecto
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: "#408358", // Cambia el color del ícono desplegable
                },
            },
        },
    },
});

export default theme;