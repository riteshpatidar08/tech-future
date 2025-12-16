import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { leadAPI, adminAPI } from '@/services/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import BackgroundPattern from '@/components/BackgroundPattern';
import { LogOut, Search, ArrowLeft, Mail, Phone, Calendar, Trash2, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  status: string;
  createdAt: string;
}

const Leads = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
  }, [page, statusFilter]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const params: any = { page, limit: 20 };
      if (statusFilter !== 'all') {
        params.status = statusFilter;
      }
      const data = await leadAPI.getAll(params);
      setLeads(data.leads);
      setTotalPages(data.totalPages);
    } catch (error) {
      toast.error('Failed to load leads');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      await leadAPI.updateStatus(leadId, newStatus);
      toast.success('Status updated successfully');
      fetchLeads();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleDeleteClick = (lead: Lead) => {
    setLeadToDelete(lead);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!leadToDelete) return;
    
    try {
      await leadAPI.delete(leadToDelete._id);
      toast.success('Lead deleted successfully');
      setDeleteDialogOpen(false);
      setLeadToDelete(null);
      fetchLeads();
    } catch (error) {
      toast.error('Failed to delete lead');
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

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-500 text-white',
      contacted: 'bg-yellow-500 text-white',
      enrolled: 'bg-green-500 text-white',
      rejected: 'bg-red-500 text-white',
    };
    return colors[status] || 'bg-slate-500 text-white';
  };

  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern variant="dots" opacity={0.03} />
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/admin/dashboard')}
                className="text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Leads Management</h1>
                <p className="text-sm text-slate-600">Manage and track all leads</p>
              </div>
            </div>
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
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-6 border-2 border-slate-200">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-slate-200"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="border-2 border-slate-200">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="enrolled">Enrolled</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card className="border-2 border-slate-200">
          <CardHeader>
            <CardTitle>All Leads ({filteredLeads.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-12 text-slate-600">
                No leads found
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLeads.map((lead) => (
                        <TableRow key={lead._id}>
                          <TableCell className="font-medium">{lead.name}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-slate-400" />
                                {lead.email}
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-slate-400" />
                                {lead.phone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{lead.course || 'N/A'}</TableCell>
                          <TableCell>
                            <div className="max-w-xs">
                              {lead.message ? (
                                <div className="flex items-start gap-2 text-sm text-slate-600">
                                  <MessageSquare className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                                  <span className="line-clamp-2">{lead.message}</span>
                                </div>
                              ) : (
                                <span className="text-sm text-slate-400 italic">No message</span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={lead.status}
                              onValueChange={(value) => handleStatusChange(lead._id, value)}
                            >
                              <SelectTrigger className={`w-32 border-2 ${getStatusColor(lead.status)}`}>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="enrolled">Enrolled</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              {format(new Date(lead.createdAt), 'MMM dd, yyyy')}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteClick(lead)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="border-2 border-slate-200"
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-slate-600">
                      Page {page} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="border-2 border-slate-200"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="border-2 border-slate-200">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-slate-900">
              Delete Lead
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-slate-600">
              Are you sure you want to delete the lead for{' '}
              <span className="font-semibold text-slate-900">
                {leadToDelete?.name}
              </span>
              ? This action cannot be undone.
            </AlertDialogDescription>
            {leadToDelete && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700">Email:</span>{' '}
                    <span className="text-slate-600">{leadToDelete.email}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Phone:</span>{' '}
                    <span className="text-slate-600">{leadToDelete.phone}</span>
                  </div>
                  {leadToDelete.course && (
                    <div>
                      <span className="font-semibold text-slate-700">Course:</span>{' '}
                      <span className="text-slate-600">{leadToDelete.course}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-2 border-slate-200">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Leads;

