import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "@/hooks/use-theme";
import { overviewData, recentSalesData, topProducts } from "@/constants";
import { Footer } from "@/layouts/footer";
import { Calendar, Users, CheckCircle, FileBarChart, LayoutGrid } from "lucide-react"; // Importação de novos ícones para representar dados de presenças
import { TrendingUp } from "lucide-react";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Dashboard</h1>

            {/* Cards informativos */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Users size={26} />
                        </div>
                        <p className="card-title">Total de Professores</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">120</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            5%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Users size={26} />
                        </div>
                        <p className="card-title">Total de Utilizadores</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">120</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            5%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                            <CheckCircle size={26} />
                        </div>
                        <p className="card-title">Presenças Marcadas - Hoje</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15,230</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-green-500 px-2 py-1 font-medium text-green-500 dark:border-green-600 dark:text-green-600">
                            <TrendingUp size={18} />
                            8%
                        </span>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-orange-500/20 p-2 text-orange-500 transition-colors dark:bg-orange-600/20 dark:text-orange-600">
                            <Calendar size={26} />
                        </div>
                        <p className="card-title">Faltas - Hoje</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">80%</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-orange-500 px-2 py-1 font-medium text-orange-500 dark:border-orange-600 dark:text-orange-600">
                            <TrendingUp size={18} />
                            3%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                        <LayoutGrid size={26} />
                        </div>
                        <p className="card-title">Total de Cursos</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">30</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            10%
                        </span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">

                            <FileBarChart size={26} />
                        </div>
                        <p className="card-title">Total de Disciplinas</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">30</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            10%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <FileBarChart size={26} />
                        </div>
                        <p className="card-title">Total de Turmas</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">30</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            10%
                        </span>
                    </div>
                </div> 
                <div className="card">
                    <div className="card-header">
                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <FileBarChart size={26} />
                        </div>
                        <p className="card-title">Total de Plano Analítico</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">30</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            10%
                        </span>
                    </div>
                </div> 

                </div>







            {/* Gráficos e informações detalhadas */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Gráfico de Visão Geral */}
                <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <div className="card-header">
                        <p className="card-title">Visão Geral das Presenças</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={overviewData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip cursor={false} formatter={(value) => `${value} presenças`} />
                                <XAxis dataKey="name" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickMargin={6} />
                                <YAxis dataKey="total" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickFormatter={(value) => `${value}`} tickMargin={6} />
                                <Area type="monotone" dataKey="total" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tabela de Últimos Registros de Presenças */}
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Últimos Registros de Presenças</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((sale) => (
                            <div key={sale.id} className="flex items-center justify-between gap-x-4 py-2 pr-2">
                                <div className="flex items-center gap-x-4">
                                    <img src={sale.image} alt={sale.name} className="size-10 flex-shrink-0 rounded-full object-cover" />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
                                    </div>
                                </div>
                                <p className="font-medium text-slate-900 dark:text-slate-50">{sale.total} Presenças</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashboardPage;
