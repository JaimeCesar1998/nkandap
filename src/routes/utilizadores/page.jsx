"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Pencil, Trash2, Eye, Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mockUsers = [
  {
    id: 1,
    nome: "Jaime Brandono",
    username: "jaimeb",
    telemovel: "923456789",
    email: "jaime@example.com",
    registo: "2024-09-01",
    atualizado: "2024-09-12",
    atualizadoPor: "Admin1",
    ativo: true,
  },
  {
    id: 2,
    nome: "Maria Lemos",
    username: "mlemos",
    telemovel: "923123456",
    email: "maria@example.com",
    registo: "2024-08-10",
    atualizado: "2024-09-10",
    atualizadoPor: "Admin2",
    ativo: false,
  },
];

export default function PainelDeUtilizadores() {
  const [users, setUsers] = useState(mockUsers);
  const [modalData, setModalData] = useState(null);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("ativos");
  const [loading, setLoading] = useState(false);

  const filtered = users.filter((user) => {
    const matchesSearch =
      user.nome.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    return tab === "ativos" ? user.ativo && matchesSearch : !user.ativo && matchesSearch;
  });

  const toggleAtivo = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ativo: !u.ativo } : u))
    );
  };

  const deleteUser = (id) => {
    if (confirm("Tem certeza que deseja eliminar este utilizador?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  const salvarUtilizador = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // Simula chamada API
    const user = modalData;
    const dataAtual = new Date().toISOString().split("T")[0];
    if (user.id) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === user.id ? { ...user, atualizado: dataAtual, atualizadoPor: "Admin Atual" } : u
        )
      );
    } else {
      setUsers((prev) => [
        ...prev,
        {
          ...user,
          id: Date.now(),
          ativo: true,
          registo: dataAtual,
          atualizado: dataAtual,
          atualizadoPor: "Admin Atual",
        },
      ]);
    }
    setLoading(false);
    setModalData(null);
  };

  const renderTable = (data, isActiveTab = true) => (
    <Table className="dark:bg-gray-800 dark:text-white">
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          {isActiveTab && <TableHead>Telemóvel</TableHead>}
          {isActiveTab && <TableHead>Registo</TableHead>}
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id} className="dark:bg-gray-700">
            <TableCell>{row.nome}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>{row.email}</TableCell>
            {isActiveTab && <TableCell>{row.telemovel}</TableCell>}
            {isActiveTab && <TableCell>{row.registo}</TableCell>}
            <TableCell>
              <div className="flex gap-2">
                {isActiveTab ? (
                  <>
                    <Button size="icon" variant="outline" onClick={() => setModalData({ ...row, view: true })}>
                      <Eye size={16} />
                    </Button>
                    <Button size="icon" variant="outline" onClick={() => setModalData(row)}>
                      <Pencil size={16} />
                    </Button>
                    <Button size="icon" variant="destructive" onClick={() => deleteUser(row.id)}>
                      <Trash2 size={16} />
                    </Button>
                    <Button size="icon" variant="secondary" onClick={() => toggleAtivo(row.id)}>
                      <X size={16} />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button size="icon" variant="secondary" onClick={() => toggleAtivo(row.id)}>
                      <Check size={16} />
                    </Button>
                    <Button size="icon" variant="destructive" onClick={() => deleteUser(row.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="mb-4 bg-blue-100 dark:bg-blue-900">
          <TabsTrigger value="ativos">Ativos</TabsTrigger>
          <TabsTrigger value="inativos">Inativos</TabsTrigger>
        </TabsList>

        <div className="flex justify-between items-center mb-4 gap-4">
          <Input
            placeholder="Pesquisar utilizador..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/3"
          />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800" onClick={() => setModalData({})}>
            Novo Utilizador
          </Button>
        </div>

        <TabsContent value="ativos">{renderTable(filtered, true)}</TabsContent>
        <TabsContent value="inativos">{renderTable(filtered, false)}</TabsContent>
      </Tabs>

      <Dialog open={modalData !== null} onOpenChange={() => setModalData(null)}>
        <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:text-white">
          <DialogHeader>
            {modalData?.view
              ? "Visualizar Utilizador"
              : modalData?.id
              ? "Editar Utilizador"
              : "Novo Utilizador"}
          </DialogHeader>

          <div className="grid gap-3 py-2">
            <Input
              placeholder="Nome"
              disabled={modalData?.view}
              value={modalData?.nome || ""}
              onChange={(e) => setModalData((prev) => ({ ...prev, nome: e.target.value }))}
            />
            <Input
              placeholder="Username"
              disabled={modalData?.view}
              value={modalData?.username || ""}
              onChange={(e) => setModalData((prev) => ({ ...prev, username: e.target.value }))}
            />
            <Input
              placeholder="Email"
              disabled={modalData?.view}
              value={modalData?.email || ""}
              onChange={(e) => setModalData((prev) => ({ ...prev, email: e.target.value }))}
            />
            <Input
              placeholder="Telemóvel"
              disabled={modalData?.view}
              value={modalData?.telemovel || ""}
              onChange={(e) => setModalData((prev) => ({ ...prev, telemovel: e.target.value }))}
            />

            {modalData?.id && (
              <div className="text-sm text-muted-foreground space-y-1 mt-2">
                <p><strong>Registo:</strong> {modalData.registo}</p>
                <p><strong>Última Atualização:</strong> {modalData.atualizado}</p>
                <p><strong>Atualizado por:</strong> {modalData.atualizadoPor}</p>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setModalData(null)}>
              Fechar
            </Button>
            {!modalData?.view && (
              <Button
                className={cn("bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800", loading && "cursor-not-allowed opacity-70")}
                onClick={salvarUtilizador}
                disabled={loading}
              >
                {loading ? "Aguarde..." : modalData?.id ? "Salvar" : "Adicionar"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
