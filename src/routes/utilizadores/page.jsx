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
            <h1 className="title">Utilizadores</h1>

            {/* Cards informativos */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="card">
                    <h2 className="card-title">Total de Utilizadores</h2>
                    <p className="card-value">1,234</p>
                    <Users className="card-icon" />
                </div>
                <div className="card">
                    <h2 className="card-title">Utilizadores Ativos</h2>
                    <p className="card-value">987</p>
                    <CheckCircle className="card-icon" />
                </div>
                <div className="card">
                    <h2 className="card-title">Utilizadores Inativos</h2>
                    <p className="card-value">247</p>
                    <FileBarChart className="card-icon" />
                </div>
                </div>


            <Footer />
        </div>
    );
};

export default DashboardPage;
