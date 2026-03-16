import { title } from "process";
import "./globals.css";

export const metadata = {
    title: "Portifólio Lucas",
    description: "Portifólio de Lucas Leal, desenvolvedor full-stack",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}