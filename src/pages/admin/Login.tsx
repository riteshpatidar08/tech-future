import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { adminAPI } from '@/services/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BackgroundPattern from '@/components/BackgroundPattern';
import Laptop3D from '@/components/Laptop3D';
import CodeCube3D from '@/components/CodeCube3D';
import { Lock, User, Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<{
    username: string;
    password: string;
  }>();

  const onSubmit = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      await adminAPI.login(data.username, data.password);
      toast.success('Login successful!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Login failed', {
        description: error instanceof Error ? error.message : 'Invalid credentials',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <BackgroundPattern variant="dots" opacity={0.03} />
      
      {/* 3D Decorative Elements */}
      <div className="absolute top-20 right-20 opacity-10 hidden lg:block">
        <Laptop3D className="scale-75" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-50" />
      </div>

      <Card className="w-full max-w-md relative z-10 border-2 border-slate-200 shadow-xl">
        <CardHeader className="text-center space-y-4 pb-6">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-slate-900 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900">Admin Login</CardTitle>
          <CardDescription className="text-base">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="username"
                  {...register('username', { required: 'Username is required' })}
                  placeholder="Enter your username"
                  className="pl-10 h-12 border-2 border-slate-200 focus:border-slate-900"
                />
              </div>
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                  placeholder="Enter your password"
                  className="pl-10 h-12 border-2 border-slate-200 focus:border-slate-900"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

