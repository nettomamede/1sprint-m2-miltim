import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Users, TrendingUp, Trash2 } from "lucide-react";

interface QuickActionsProps {
  onNewAgendamento: () => void;
  totalAgendamentos: number;
  agendamentosHoje: number;
  onLimparDados?: () => void;
}

const QuickActions = ({ onNewAgendamento, totalAgendamentos, agendamentosHoje, onLimparDados }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <Card className="medical-card hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onNewAgendamento}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Nova Consulta</p>
              <div className="flex items-center space-x-2 mt-2">
                <Plus className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold text-primary">Agendar</span>
              </div>
            </div>
            <div className="bg-primary/10 p-3 rounded-full">
              <Plus className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="medical-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Hoje</p>
              <div className="flex items-center space-x-2 mt-2">
                <Calendar className="h-5 w-5 text-success" />
                <span className="text-2xl font-bold text-success">{agendamentosHoje}</span>
              </div>
            </div>
            <div className="bg-success/10 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-success" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="medical-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Ativo</p>
              <div className="flex items-center space-x-2 mt-2">
                <Users className="h-5 w-5 text-warning" />
                <span className="text-2xl font-bold text-warning">{totalAgendamentos}</span>
              </div>
            </div>
            <div className="bg-warning/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-warning" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="medical-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Ações</p>
              <div className="flex items-center space-x-2 mt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onLimparDados}
                  className="text-xs text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Limpar dados
                </Button>
              </div>
            </div>
            <div className="bg-destructive/10 p-3 rounded-full">
              <Trash2 className="h-6 w-6 text-destructive" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;
