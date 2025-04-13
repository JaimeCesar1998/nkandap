export const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t mt-8 dark:border-slate-800">
            <p className="text-base font-medium text-slate-900 dark:text-slate-50">
                © {new Date().getFullYear()} Nkandap - Todos os direitos reservados
            </p>
            <div className="flex flex-wrap gap-x-2">
                <a href="#" className="link">
                    Política de Privacidade
                </a>
                <a href="#" className="link">
                    Termos de Uso
                </a>
            </div>
        </footer>
    );
};
