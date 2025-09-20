import { useState, useEffect } from "react";
import AgendaHeader from "@/components/AgendaHeader";
import AgendamentoForm from "@/components/AgendamentoForm";
import AgendaCalendar from "@/components/AgendaCalendar";
import QuickActions from "@/components/QuickActions";
import { isToday } from "date-fns";

interface Agendamento {
  id: string;
  paciente: string;
  telefone: string;
  medico: string;
  especialidade: string;
  data: Date;
  horario: string;
  observacoes: string;
  status: "agendado" | "cancelado" | "realizado";
}

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingAgendamento, setEditingAgendamento] = useState<Agendamento | null>(null);

  // Dados iniciais padrão
  const dadosIniciais: Agendamento[] = [
    {
      id: "1",
      paciente: "João Silva",
      telefone: "(11) 99999-1234",
      medico: "Dr. João Silva",
      especialidade: "Cardiologia",
      data: new Date(),
      horario: "09:00",
      observacoes: "Primeira consulta",
      status: "agendado"
    },
    {
      id: "2",
      paciente: "Maria Santos",
      telefone: "(11) 99999-5678",
      medico: "Dra. Ana Santos",
      especialidade: "Dermatologia",
      data: new Date(),
      horario: "10:30",
      observacoes: "",
      status: "agendado"
    }
  ];

  // Função para carregar dados do localStorage
  const carregarAgendamentos = (): Agendamento[] => {
    try {
      const dadosSalvos = localStorage.getItem('agendamentos-medicos');
      if (dadosSalvos) {
        const agendamentos = JSON.parse(dadosSalvos);
        // Converter as datas de string para Date
        return agendamentos.map((ag: any) => ({
          ...ag,
          data: new Date(ag.data)
        }));
      }
      // Se não há dados salvos, usar dados iniciais e salvá-los
      salvarAgendamentos(dadosIniciais);
      return dadosIniciais;
    } catch (error) {
      console.error('Erro ao carregar agendamentos:', error);
      return dadosIniciais;
    }
  };

  // Função para salvar dados no localStorage
  const salvarAgendamentos = (agendamentos: Agendamento[]) => {
    try {
      localStorage.setItem('agendamentos-medicos', JSON.stringify(agendamentos));
    } catch (error) {
      console.error('Erro ao salvar agendamentos:', error);
    }
  };

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  // Carregar dados do localStorage quando o componente montar
  useEffect(() => {
    const agendamentosCarregados = carregarAgendamentos();
    setAgendamentos(agendamentosCarregados);
  }, []);

  // Salvar dados no localStorage sempre que agendamentos mudar
  useEffect(() => {
    if (agendamentos.length > 0) {
      salvarAgendamentos(agendamentos);
    }
  }, [agendamentos]);
