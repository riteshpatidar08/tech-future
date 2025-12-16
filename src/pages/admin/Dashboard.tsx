import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { leadAPI } from '@/services/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BackgroundPattern from '@/components/BackgroundPattern';
import { 
  Users, TrendingUp, CheckCircle, XCircle, LogOut, 
  BarChart3, Calendar, Mail, Phone 
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';

interface Stats {
  total: number;
  new: number;
  contacted: number;
  enrolled: number;
  rejected: number;
  dailyLeads: Array<{ date: string; count: number }>;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<'today' | 'week' | 'month' | 'all'>('all');

  useEffect(() => {
    fetchStats();
  }, [period]);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await leadAPI.getStats(period);
      setStats(data.stats);
    } catch (error) {
      toast.error('Failed to load statistics');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await adminAPI.logout();
      navigate('/admin/login');
      toast.success('Logged out successfully');
    } catch (error) {
      // Even if API call fails, clear local storage and redirect
      localStorage.removeItem('admin_user');
      navigate('/admin/login');
    }
  };

  const adminUser = JSON.parse(localStorage.getItem('admin_user') || '{}');

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern variant="dots" opacity={0.03} />
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-sm text-slate-600">Welcome back, {adminUser.username}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/admin/leads')}
                className="border-2 border-slate-200"
              >
                View All Leads
              </Button>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="text-slate-600 hover:text-slate-900"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Period Selector */}
        <Tabs value={period} onValueChange={(v) => setPeriod(v as typeof period)} className="mb-8">
          <TabsList className="bg-slate-100">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="all">All Time</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="border-2 border-slate-200 hover:border-slate-900 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats?.total || 0}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-slate-900 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">New Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats?.new || 0}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-slate-900 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Contacted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats?.contacted || 0}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-slate-900 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Enrolled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats?.enrolled || 0}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-slate-900 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Rejected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-500 rounded-lg">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats?.rejected || 0}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Daily Leads Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats?.dailyLeads || []}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0F172A" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Leads Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={stats?.dailyLeads || []}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    stroke="#0F172A" 
                    strokeWidth={3}
                    dot={{ fill: '#0F172A', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

